# frozen_string_literal: true
# 로케일 미설정 셸(LANG 비어 있음)에서도 파일을 UTF-8 로 읽는다 — 아니면 Ruby 가 US-ASCII 로 읽어 한글·비ASCII 바이트에서 죽는다 (2026-10-03)
Encoding.default_external = Encoding::UTF_8
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
    next if url.start_with?('javascript:', 'data:')
    # 같은 페이지 앵커(#main 등)는 경로가 아니다 — 2026-10-04 이전엔 404 로 세어 394건의 거짓양성을 냈다
    next if url.start_with?('#')

    # 쿼리스트링(?v=해시 캐시버스터)·프래그먼트는 떼고 경로만 검사한다
    url_path = url.split('#', 2).first.to_s.split('?', 2).first.to_s
    next if url_path.empty?

    target_path = nil
    if url_path.start_with?('/')
      target_path = File.join(SITE, url_path)
    else
      target_path = File.expand_path(url_path, base)
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
