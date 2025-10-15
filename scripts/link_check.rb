# frozen_string_literal: true
# Simple offline 404 checker for built Jekyll site (_site)
# - Checks internal links (href/src starting with / or relative) and image paths
# - Skips external http(s) links
# Usage: ruby scripts/link_check.rb

require 'nokogiri'
require 'uri'
require 'set'

ROOT = File.expand_path('..', __dir__)
SITE = File.join(ROOT, '_site')

unless Dir.exist?(SITE)
  warn "_site 디렉터리가 없습니다. 먼저 Jekyll 빌드를 수행하세요."
  exit 2
end

html_files = Dir.glob(File.join(SITE, '**', '*.html'))
errors = []
visited = Set.new

html_files.each do |file|
  doc = Nokogiri::HTML(File.read(file))
  base = File.dirname(file)

  # href links
  (doc.css('a[href]') + doc.css('img[src]')).each do |node|
    attr = node.name == 'img' ? 'src' : 'href'
    url = node[attr]
    next if url.nil? || url.strip.empty?

    begin
      uri = URI.parse(url)
    rescue URI::InvalidURIError
      errors << [file.sub(SITE, ''), "잘못된 URI: #{url}"]
      next
    end

    # Skip external links
    next if uri.scheme == 'http' || uri.scheme == 'https' || url.start_with?('mailto:') || url.start_with?('tel:')

    target_path = nil
    if url.start_with?('/')
      target_path = File.join(SITE, url)
    else
      target_path = File.expand_path(url, base)
    end

    # If the target is a directory-like link, check index.html as well
    candidates = [target_path]
    candidates << File.join(target_path, 'index.html') if File.directory?(target_path) || !File.extname(target_path).match?(/\.(html|htm|png|jpg|jpeg|gif|svg|webp|css|js)$/i)

    unless candidates.any? { |c| File.exist?(c) }
      errors << [file.sub(SITE, ''), "404: #{url}"]
    end
  end
end

if errors.empty?
  puts 'OK: 내부 링크/이미지 경로에서 404 없음'
  exit 0
else
  puts 'FOUND ISSUES:'
  errors.each { |e| puts "#{e[0]} -> #{e[1]}" }
  exit 1
end
