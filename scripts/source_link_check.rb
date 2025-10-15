# frozen_string_literal: true
# Lightweight link/image checker without building _site
# - Scans Markdown/HTML files for href/src
# - Verifies local asset files exist and that permalinks referenced exist as pages
# Limitations: Doesn't resolve Liquid/Jekyll includes; skips external links.

require 'set'
require 'yaml'
require 'pathname'

ROOT = File.expand_path('..', __dir__)
IGNORES = [%r{^/docs/}, %r{^/example/}, %r{^/vendor/}, %r{^/_site/}, %r{^/_includes/search/}]

# Collect candidate source files
files = Dir.glob(File.join(ROOT, '**', '*'))
           .select { |f| File.file?(f) }
           .reject do |f|
             rel = f.sub(ROOT, '')
             IGNORES.any? { |re| rel =~ re }
           end

# Build set of valid permalinks from front matter
valid_permalinks = Set.new

# Load nav URLs from _config.yml
config_path = File.join(ROOT, '_config.yml')
if File.exist?(config_path)
  begin
    cfg = YAML.safe_load(File.read(config_path))
    if cfg && cfg['nav'].is_a?(Array)
      cfg['nav'].each do |item|
        next unless item.is_a?(Hash) && item['url']
        link = item['url'].to_s
        link = "/#{link}" unless link.start_with?('/')
        link = link.end_with?('/') ? link : link + '/'
        valid_permalinks << link
      end
    end
  rescue
  end
end
front_matter_re = /^---\s*\n(.*?)\n---\s*\n/m
files.select { |f| f.end_with?('.md') }.each do |md|
  begin
    content = File.read(md)
  rescue
    next
  end
  if m = content.match(front_matter_re)
    fm = m[1]
    fm_yaml = YAML.safe_load(fm) rescue nil
    if fm_yaml && fm_yaml.is_a?(Hash) && fm_yaml['permalink']
      link = fm_yaml['permalink'].to_s
      link = "/#{link}" unless link.start_with?('/')
      link = link.end_with?('/') ? link : link + '/'
      valid_permalinks << link
    end
  end
end

# Always valid root
valid_permalinks << '/'

# Asset paths
asset_root = File.join(ROOT, 'assets')
asset_files = Dir.exist?(asset_root) ? Dir.glob(File.join(asset_root, '**', '*')).select { |f| File.file?(f) } : []
valid_asset_paths = asset_files.map { |f| f.sub(ROOT, '') }
valid_asset_set = Set.new(valid_asset_paths)

errors = []

# Simple href/src regex
LINK_RE = /(href|src)\s*=\s*"([^"]+)"/i

files.select { |f| f.end_with?('.md', '.html') }.each do |path|
  rel = path.sub(ROOT, '')
  next if IGNORES.any? { |re| rel =~ re }

  content = File.read(path)
  content.scan(LINK_RE).each do |_attr, url|
    next if url.nil? || url.empty?
    # Skip anchors, external, protocol-relative, mailto, tel, Liquid
    next if url.start_with?('#', 'http://', 'https://', '//', 'mailto:', 'tel:')
    next if url.include?('{{') || url.include?('{%')

    if url.start_with?('/')
      if url.start_with?('/assets/')
        # Direct asset reference
        fs_path = File.join(ROOT, url)
        errors << [rel, "404 asset: #{url}"] unless File.exist?(fs_path)
      else
        # Page permalink
        normalized = url.end_with?('/') ? url : url + '/'
        unless valid_permalinks.include?(normalized)
          # Fallback: search any .md front matter for matching permalink
          unless files.select { |f| f.end_with?('.md') }.any? do |md|
                   begin
                     text = File.read(md)
                     if (m = text.match(front_matter_re))
                       y = YAML.safe_load(m[1]) rescue nil
                       y && y['permalink'] && (y['permalink'].to_s == url || y['permalink'].to_s == normalized)
                     else
                       false
                     end
                   rescue
                     false
                   end
                 end
            errors << [rel, "404 page: #{url}"]
          end
        end
      end
    else
      # Relative path from file dir
      fs_path = File.expand_path(url, File.dirname(path))
      errors << [rel, "404 relative: #{url}"] unless File.exist?(fs_path)
    end
  end
end

if errors.empty?
  puts 'OK: 소스 기준 내부 링크/이미지에서 404 없음'
  exit 0
else
  puts 'FOUND ISSUES (source scan):'
  errors.each { |e| puts "#{e[0]} -> #{e[1]}" }
  exit 1
end
