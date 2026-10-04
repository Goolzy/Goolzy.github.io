#!/usr/bin/env bash
# goolzy.com 홈페이지 로컬 빌드 — GitHub Pages 와 같은 조건(--safe, JEKYLL_ENV=production)으로 _site 를 만든다.
#
# 왜 이 스크립트인가 (2026-10-03 실측):
#   비대화형 셸(Claude Code Bash 도구 등)은 LANG 이 비어 Ruby 기본 외부 인코딩이 US-ASCII 가 된다.
#   github-pages gem 이 고정한 구 sass(3.7.4) 는 @import 파셜을 File.read 로 그 인코딩으로 읽으므로,
#   파셜에 비ASCII 바이트가 하나라도 있으면 `Invalid US-ASCII character "\xE2"` 로 빌드가 죽는다.
#   GitHub Pages 서버는 UTF-8 로케일이라 같은 파일이 정상 빌드된다 → 로컬도 UTF-8 로 맞춘다.
#   툴체인 버전은 바꾸지 않는다 — Gemfile 의 github-pages 고정 세트가 배포 서버와 1:1 패리티다.
#
# 사용:
#   scripts/build.sh                 # 의존성 없으면 vendor/bundle 에 설치 → jekyll build --safe
#   scripts/build.sh --check         # 빌드 후 scripts/link_check.rb 로 _site 내부 링크 404 검사
#   scripts/build.sh serve [옵션...] # jekyll serve --safe (로컬 미리보기)
#   그 외 인자는 jekyll 에 그대로 전달 (예: --verbose, --incremental, --trace)
#   JEKYLL_ENV=development scripts/build.sh  # 개발 모드(비압축 CSS, 메타데이터 url 유도 없음)
set -euo pipefail

cd "$(dirname "$0")/.."

# Ruby 기본 외부 인코딩을 UTF-8 로 고정 — RUBYOPT 가 정본(로케일 데이터가 없는 환경에서도 유효),
# LANG/LC_ALL 은 하위 도구용 보정(이미 설정돼 있으면 존중).
export RUBYOPT="${RUBYOPT:+$RUBYOPT }-Eutf-8"
export LANG="${LANG:-en_US.UTF-8}"
export LC_ALL="${LC_ALL:-$LANG}"
export JEKYLL_ENV="${JEKYLL_ENV:-production}"
# GitHub.com Pages 빌드와 같은 메타데이터 모드. 이것이 없으면 production 에서 jekyll-github-metadata 가
# url/baseurl 을 `/pages/<owner>` 로 잘못 유도해 절대 링크 전부가 깨진다(2026-10-03 실측).
# «GitHub Metadata: No GitHub API authentication could be found» 경고는 빌드 성패와 무관(정상).
export PAGES_ENV="${PAGES_ENV:-dotcom}"

# 의존성 — 시스템 gem 경로 권한 문제를 피해 리포 안 vendor/bundle 에 설치 (.gitignore: vendor/, .bundle)
if ! bundle check >/dev/null 2>&1; then
  echo "[build.sh] gem 의존성 설치 (vendor/bundle)..." >&2
  bundle config set --local path 'vendor/bundle' >/dev/null
  bundle install
fi

# 인자 분류: serve / --check 는 스크립트가 소비, 나머지는 jekyll 로 전달 (bash 3.2 호환 — 배열 미사용)
cmd=build
check=0
n=$#
i=0
while [ "$i" -lt "$n" ]; do
  a=$1; shift
  case "$a" in
    serve)   cmd=serve ;;
    --check) check=1 ;;
    *)       set -- "$@" "$a" ;;
  esac
  i=$((i + 1))
done

echo "[build.sh] jekyll $cmd --safe (JEKYLL_ENV=$JEKYLL_ENV, PAGES_ENV=$PAGES_ENV, RUBYOPT=$RUBYOPT)" >&2
bundle exec jekyll "$cmd" --safe "$@"

if [ "$check" = 1 ]; then
  echo "[build.sh] _site 내부 링크 검사 (scripts/link_check.rb)" >&2
  bundle exec ruby scripts/link_check.rb
fi
