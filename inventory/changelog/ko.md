---
layout: inventory
title: 변경 이력
permalink: /inventory/changelog/
lang: ko
translations:
  ko: /inventory/changelog/
  en: /inventory/changelog/en/
  ja: /inventory/changelog/ja/
  de: /inventory/changelog/de/
  fr: /inventory/changelog/fr/
  es: /inventory/changelog/es/
  pt: /inventory/changelog/pt/
  zh: /inventory/changelog/zh/
  ar: /inventory/changelog/ar/
  hi: /inventory/changelog/hi/
  id: /inventory/changelog/id/
  ru: /inventory/changelog/ru/
  it: /inventory/changelog/it/
  tr: /inventory/changelog/tr/
  vi: /inventory/changelog/vi/
  th: /inventory/changelog/th/
  pl: /inventory/changelog/pl/
---

## 변경 이력

Inventory 앱의 업데이트 내역을 확인하세요.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.3.1 <small>2026-02-08</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 로그 화면 개선
로그 화면에서 뱃지 착용 사용자의 뱃지 아이콘이 정상적으로 표시됩니다.
- **뱃지 아이콘 표시**: 뱃지를 착용한 사용자가 작성한 댓글에 뱃지 이미지가 표시됩니다
- **이미지 캐싱**: 뱃지 이미지 로딩 성능이 개선되었습니다
- **에러 처리**: 이미지 로드 실패 시에도 안정적으로 표시됩니다

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.3.0 <small>2026-01-27</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 포켓 리브랜딩
'파티션'이라는 용어를 더 친숙한 '포켓'으로 변경했습니다.
- **용어 업데이트**: 앱 전체에서 '파티션'이 '포켓'으로 통일됩니다
- **자동 마이그레이션**: 기존 데이터는 손실 없이 자동으로 변환됩니다
- **다국어 지원**: 8개 언어에 새 용어가 반영되었습니다

#### 확장 가능한 프로필 헤더
홈 화면 상단의 프로필 섹션이 서랍식 인터페이스로 개선되었습니다.
- **드래그/탭으로 확장**: 핸들 바를 드래그하거나 사용자명을 탭하여 확장/축소
- **프로필 카드**: 확장 시 프로필 정보, QR 코드 및 API 세부정보 확인
- **속도 기반 스냅**: 빠른 드래그 시 자동으로 프로필이 열리거나 닫힙니다

#### 설정 화면 재구성
설정 화면이 5개의 접을 수 있는 그룹으로 재구성되었습니다.
- **5개 그룹**: 색상, 글꼴, 사운드, 푸시 알림, 시스템
- **푸시 알림 단순화**: 7개에서 3개 그룹으로 축소 (거래, 로그, 만료)
- **아코디언 UI**: 필요한 설정만 확장하여 빠르게 접근

#### 채팅 개선
채팅방 생성 및 표시가 개선되었습니다.
- **동적 이름 표시**: 1:1 채팅에서 수신자 이름이 동적으로 표시됩니다
- **참가자 수**: 그룹 채팅에서 현재 참가자 수를 확인할 수 있습니다
- **향상된 채팅 생성**: 수신자 이메일 실시간 검증, 재고 수 실시간 업데이트

#### 로그 탐색 통합
로그 화면에서 아이템을 탭하면 올바른 상세 뷰로 이동합니다.
- **클립 아이템**: 클립 상세 화면으로 이동 (해당 인덱스로)
- **일반 아이템**: 아이템 상세 화면으로 이동
- **일관된 경험**: 그리드 및 로그 뷰에서 동일한 탐색 동작

#### 포켓 애니메이션 개선
포켓 축소/확장 애니메이션이 더 부드럽고 자연스러워졌습니다.
- **부드러운 전환**: 확장 시 콘텐츠가 위에서 아래로 펼쳐지고, 축소 시 아래에서 위로 접힙니다
- **깜빡임 제거**: 축소 시 콘텐츠가 사라지는 문제를 수정했습니다

#### 댓글 입력 필드 개선
키보드가 더 이상 댓글 입력 필드를 가리지 않습니다.
- **하단 고정**: 입력 필드가 항상 화면 하단에 고정됩니다
- **배경 탭**: 빈 공간을 탭하면 키보드가 자동으로 닫힙니다

#### 버그 수정
- 알림 패널 표시 오류 수정
- 상점 헤더 레이아웃 문제 해결
- 포켓 축소 시 회색 화면 표시 문제 수정

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.3 <small>2026-01-21</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 뱃지 이미지 로딩 개선
앱 재시작 시 뱃지 이미지가 깜빡이는 문제를 수정했습니다.
- **영구 캐시**: 뱃지 이미지 URL이 로컬에 저장되어 앱 재시작 후에도 유지됩니다
- **사전 로딩**: 스플래시 화면에서 모든 캐시된 뱃지 이미지가 미리 로드됩니다
- **백그라운드 새로고침**: 서버에서 변경된 뱃지 이미지가 백그라운드에서 자동 업데이트됩니다

#### 이모티콘 시스템 개선
로그에 이모티콘을 첨부하는 기능이 개선되었습니다.
- **캐시 복원 수정**: 앱 재진입 후 이모티콘이 올바르게 표시됩니다
- **박스 크기 최적화**: 이모티콘만 있는 메시지 말풍선 크기가 적절하게 조정됩니다
- **선택 미리보기**: 입력 필드 위에 선택된 이모티콘 미리보기가 표시됩니다

#### 채팅 입력 포커스 개선
iPad에서 입력 필드 포커스 문제를 수정했습니다.
- **iPad 호환성**: 키보드가 나타날 때 입력 필드 포커스가 올바르게 작동합니다
- **안정적인 입력**: 모든 iOS 기기에서 일관된 입력 경험을 제공합니다

#### 알림 필터링 개선
현재 보고 있는 화면에 대한 알림이 필터링됩니다.
- **푸시 알림 필터**: 현재 열려 있는 아이템에 대한 푸시 알림이 표시되지 않습니다
- **인앱 알림 필터**: 현재 아이템에 대한 인앱 알림 토스트가 표시되지 않습니다

#### 알림 토스트 제스처
인앱 알림 토스트를 제스처로 상호작용할 수 있습니다.
- **탭하여 이동**: 알림을 탭하면 관련 문서로 바로 이동합니다
- **스와이프하여 닫기**: 위로 스와이프하면 알림을 빠르게 닫을 수 있습니다
- **햅틱 피드백**: 터치 상호작용에 대한 햅틱 피드백이 제공됩니다

#### 버그 수정
- 이모티콘 캐시 복원 시 emoticonId 누락 문제 수정
- Cloud Functions 인앱 알림 생성 오류 수정

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.2 <small>2026-01-10</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 글꼴 크기 조정
설정 화면에서 앱의 글꼴 크기를 3단계로 조정할 수 있습니다.
- **3단계**: 기본(1.0배), 중간(1.3배), 크게(1.5배) 중 선택
- **즉시 적용**: 전체 앱에 즉시 변경사항이 적용됩니다
- **영구 설정**: 앱 재시작 후에도 설정이 저장됩니다

#### 자동 키보드 닫기
아이템 상세 뷰에서 로그 입력 필드 외부를 탭하면 키보드가 자동으로 닫힙니다.
- **탭하여 닫기**: 입력 필드 외부 영역을 터치하면 키보드가 닫힙니다
- **iOS 지원**: 닫기 버튼 없이도 iPhone에서 편리하게 사용할 수 있습니다

#### 배경 음악 유지
앱을 열 때 기기에서 재생 중인 음악(Spotify, YouTube Music, Apple Music 등)이 중단 없이 계속 재생됩니다.
- **연속 재생**: 다른 앱의 배경 음악이 앱 실행 후에도 계속 재생됩니다
- **사운드 믹싱**: 앱 효과음이 배경 음악과 함께 재생됩니다
- **음소거 모드 동기화**: 무음/음소거 모드에서는 앱 효과음도 음소거됩니다

#### 검색 기록 및 필터 개선
슈퍼 검색 바가 이제 검색 기록을 저장하고 필터 기능이 개선되었습니다.
- **검색 기록 저장**: 필터 추가 또는 공유 템플릿 검색 시 검색어가 자동 저장됩니다
- **최근 검색 표시**: 검색 바에 포커스하면 최근 5개 검색어가 표시됩니다
- **빠른 필터 추가**: 최근 검색어를 탭하면 즉시 필터로 추가됩니다
- **버튼 UI 개선**: 필터 추가 및 공유 템플릿 버튼이 한 줄에 간결하게 배치됩니다

#### 포켓 관리 개선
새로운 뉴모픽 디자인 포켓 이름 대화상자와 드래그하여 순서 변경 기능이 추가되었습니다.
- **뉴모픽 대화상자**: 다크/라이트 모드를 지원하는 아름다운 포켓 이름 설정 디자인
- **드래그 순서 변경**: 핸들 아이콘을 길게 눌러 포켓을 드래그하여 순서를 변경할 수 있습니다
- **생성 시 이름 설정**: 새 포켓 생성 시 사용자 정의 포켓 이름을 설정할 수 있습니다

#### 링크 미리보기 설명
로그에 첨부된 URL이 이제 웹페이지 설명(OpenGraph 설명)이 포함된 링크 카드로 표시됩니다.
- **자동 설명 추출**: 웹페이지의 og:description 메타 태그에서 설명이 자동으로 추출됩니다
- **카드 UI 향상**: 제목 아래에 최대 2줄의 설명이 표시됩니다
- **플랫폼 지원**: YouTube, Spotify 및 일반 웹페이지를 포함한 모든 링크 유형을 지원합니다

#### 텍스트 스타일 마커 변경
메인 색상 텍스트 마커가 `<text>`에서 `{text}`로 변경되었습니다.
- **인용 충돌 해결**: `>` 문자를 사용하는 인용 기능과의 충돌을 방지합니다
- **일관된 마커 시스템**: 괄호 유형 마커(`{}`, `[]`, `()`)와 통일되었습니다

#### 다중 인용 지원
로그에서 여러 인용을 동시에 표시할 수 있습니다.
- **다중 인용 렌더링**: 두 개 이상의 `>` 인용이 개별 인용 위젯으로 표시됩니다
- **순서 유지**: 인용이 입력된 순서대로 표시됩니다

#### 향상된 이메일 전달 검증
전송 기능의 이메일 주소 검증이 더 정확해졌습니다.
- **MX 레코드 검증**: 수신자 이메일 도메인의 메일 서버 존재 여부를 확인합니다
- **오류 방지**: 존재하지 않는 도메인으로의 전송 시도를 사전에 차단합니다

#### 드래그 상호작용 개선
이제 선택한 아이템을 길게 누르지 않고도 드래그할 수 있습니다.
- **즉시 드래그**: 아이템 선택 후 즉시 드래그 (길게 누를 필요 없음)
- **흔들림 애니메이션**: 선택한 아이템이 부드럽게 흔들려 드래그 가능함을 나타냅니다
- **직관적인 컨트롤**: iOS 홈 화면 편집 모드와 유사한 익숙한 UX

#### Dropbox 파일 첨부
Dropbox를 연결하여 로그에 파일을 첨부할 수 있습니다.
- **여러 파일 유형**: 이미지, 동영상, PDF, 음악 및 텍스트 파일 첨부
- **공유 로그 지원**: 공유 아이템 로그에서 첨부 파일을 보고 다운로드할 수 있습니다
- **내장 뷰어**: 앱 내에서 파일을 직접 볼 수 있습니다 (이미지 확대, PDF 페이지 넘기기, 동영상 재생 등)
- **안전한 저장소**: OAuth 토큰이 암호화되어 기기의 안전한 저장소에 저장됩니다

#### 공유 로그 생성 (빈 종이 상세 뷰)
빈 종이 상세 뷰에서 직접 공유 로그 아이템을 생성할 수 있습니다.
- **단일/공유 로그 선택**: 단일 아이템 생성 또는 여러 종이로 공유 로그 생성 중 선택
- **슬라이더로 개수 선택**: 슬라이더를 사용하여 2개부터 총 종이 개수까지 선택
- **자동 종이 선택**: 현재 종이 + 가장 오래 구매한 종이가 자동으로 선택됩니다

#### 키보드 접근성
데스크톱 및 외부 키보드 연결 시 키보드만으로 앱을 제어할 수 있습니다.
- **Dropbox 파일 선택**: 화살표 키로 파일 탐색, Enter로 선택, Delete 키로 삭제, ESC로 닫기
- **문서 공유 메뉴**: Ctrl+1/2/3으로 포함 아이템 토글, 좌우 화살표 키로 버튼 간 이동, Enter로 실행
- **포커스 시각화**: 키보드를 통해 선택된 아이템이 테두리와 발광 효과로 강조 표시됩니다

#### 버그 수정
- **액션 뱃지 카운트**: 액션 버튼의 뱃지가 선택된 아이템에 사용 가능한 액션 수를 정확히 반영하지 못하는 문제를 수정했습니다
- **파일 첨부 오류 수정**: Dropbox에서 음악/텍스트 파일을 첨부할 때 발생하던 오류를 수정했습니다
- **오디오 스와이프 재생 개선**: 미디어 뷰어에서 오디오 파일 간 스와이프 시 캐싱 및 자동 재생이 올바르게 작동합니다

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 반응형 리액션 패널 레이아웃
아이템 상세 뷰에서 이미지 리액션 패널이 모든 화면 크기에서 올바르게 표시됩니다.
- **반응형 레이아웃**: 좁은 화면에서도 리액션 버튼이 균등하게 분산됩니다
- **전체 너비 활용**: 이미지 크기와 관계없이 패널이 전체 화면 너비를 사용합니다
- **컴팩트 디자인**: 터치 영역을 유지하면서 사진 가림을 최소화하도록 패딩이 최적화되었습니다

#### 공유 템플릿 검색 무한 스크롤
공유 템플릿 검색 결과가 20개 이상일 때 스크롤하여 더 많이 로드할 수 있습니다.
- **무한 스크롤**: 검색 결과 하단에 도달하면 자동으로 다음 20개 결과를 로드합니다
- **로딩 표시기**: 추가 결과를 로드하는 동안 하단에 진행 표시기가 표시됩니다
- **이전 버전 호환성**: 이전 앱 버전에서는 기존처럼 20개 결과가 표시됩니다

#### 홈페이지 업데이트
- **중국어(간체) 지원**: 홈페이지에 중文(简体) 현지화 추가 (8번째 언어)
- **지원 언어 표시**: 플랫폼 다운로드 아이콘 아래에 8개 언어 국기 아이콘 표시

#### 앱 스토어 언어 설정
- **iOS/macOS 지원 언어**: CFBundleLocalizations에 중국어(zh) 추가

#### 날짜 선택 개선
- **선택 범위 확대**: 날짜 선택 UI가 이제 1900년부터 선택 가능 (이전에는 2000년)

#### 문서 공유
문서 상세 뷰에서 문서 내용을 클립보드에 복사하거나 이메일로 전송할 수 있습니다.
- **클립보드 복사**: 리치 텍스트 마커가 제거된 일반 텍스트로 복사
- **이메일 전송**: 포맷된 HTML 스타일로 이메일 전송
- **선택적 포함**: 포함할 항목 선택: 제목, 내용, 키워드, 대화, 시스템 로그
- **클립 모드 지원**: 클립 상세 뷰에서도 사용 가능

#### 클립 잠금 동기화
잠금 상태가 클립 내 아이템 간에 동기화됩니다.
- **일괄 잠금/잠금 해제**: 클립 대표 아이템을 잠그면 모든 하위 아이템이 잠깁니다
- **비밀번호 동기화**: 클립 내 모든 아이템이 동일한 잠금 비밀번호를 사용합니다

#### 클립 잠금 동기화
클립을 잠가도 내부 아이템이 잠기지 않던 버그를 수정했습니다.
- **통합 잠금/잠금 해제**: 클립 내 모든 아이템의 잠금 또는 잠금 해제가 모든 아이템에 적용됩니다
- **클립 상세 잠금**: 클립 상세 화면을 열 때 잠금 검증이 추가되었습니다
- **클립 해제 비밀번호 UI**: 클립 해제 비밀번호 대화상자가 새 뉴모픽 디자인으로 업데이트되었습니다

#### 리치 텍스트 편집기 개선
스탬프 템플릿 생성 시 텍스트 스타일링이 더 직관적입니다.
- **6가지 기본 스타일**: 굵게, 밑줄, 취소선, 기본 색상, 보조 색상, 박스
- **중첩 스타일링**: 여러 스타일을 순차적으로 적용 (예: 굵게 + 밑줄)
- **깔끔한 편집**: 마커가 숨겨지고 스타일만 표시됩니다
- **동적 툴바**: 선택한 텍스트 아래에 툴바가 자동으로 배치됩니다

#### Android 15 하단 여백 수정
Android 15 이상 기기에서 하단 시스템 탐색 바가 콘텐츠를 가리는 문제를 수정했습니다.
- **탐색 바 없는 화면**: 아이템 상세, 문서 생성 및 스탬프 생성을 포함한 6개 화면
- **자동 인셋 처리**: 시스템 탐색 바 영역에 맞춰 하단 패딩이 자동으로 추가됩니다
- **이전 버전 호환성**: Android 14 이하에서도 동일하게 작동합니다

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 드래그 자동 스크롤
아이템을 드래그할 때 가장자리에서 화면이 자동으로 스크롤됩니다.
- **자동 스크롤 영역**: 화면 상단/하단 10%로 드래그하면 자동 스크롤
- **가속도 기반**: 가장자리에 가까울수록 스크롤 속도가 증가합니다
- **햅틱 피드백**: 스크롤 영역에 진입하면 가벼운 진동 알림
- **포켓 간 탐색**: 많은 아이템 또는 여러 포켓을 빠르게 탐색할 수 있습니다

#### 스크롤 탐색
상세 뷰 화면에서 빠르게 상단 또는 하단으로 이동할 수 있습니다.
- **탐색 버튼**: 댓글이 많을 때 검색 바 옆에 스크롤 버튼이 나타납니다
- **위치 기반 표시**: 상단에서는 하단 버튼만, 하단에서는 상단 버튼만 표시됩니다
- **뉴모픽 디자인**: 앱 디자인과 일관된 버튼 스타일

#### 페이지 전환 애니메이션 복원
하단 탐색 바와 수신 화면에 대한 플립 애니메이션이 복원되었습니다.
- **3D 플립 효과**: Y축을 기준으로 180도 회전하는 페이지 전환
- **로그/상점 페이지**: 플립 애니메이션 적용
- **수신 화면**: 우편함 버튼 및 알림 딥 링크에서 플립 애니메이션 적용

#### UI 디자인 통합
전송, 수신 및 상점 화면에 뉴모픽 디자인이 적용되어 전체 앱이 통합되었습니다.
- **전송/수신 화면**: 카드 및 대화상자에 뉴모픽 그림자 적용
- **상점 화면**: 탭 버튼에 발광 효과, 뉴모픽 스타일 제품 카드
- **입력 필드 디자인**: 인셋 스타일이 입력 영역을 명확하게 구분합니다

#### 로그 재정렬 애니메이션
새 댓글로 인해 아이템이 로그 목록 상단으로 이동할 때 부드러운 애니메이션이 적용됩니다.
- **스케일 효과**: 아이템이 잠시 확대되었다가 재배치 후 정상 크기로 돌아갑니다
- **순차 처리**: 여러 아이템이 동시에 이동할 때 순서대로 애니메이션됩니다
- **시각적 강조**: 가장 최근 아이템이 무엇인지 명확하게 나타냅니다

#### 데이터베이스 안정화
앱 업데이트 시 발생할 수 있는 데이터베이스 호환성 문제가 해결되었습니다.
- **자동 복구**: 버전 불일치 발생 시 데이터베이스가 자동으로 재생성됩니다
- **데이터 보존**: 자동 서버 동기화 덕분에 데이터 손실이 없습니다
- **모든 플랫폼**: iOS, Android, macOS 및 Windows에 동일한 수정 사항 적용

#### 비밀번호 잠금 개선
비밀번호로 보호된 아이템의 보안 및 사용성이 크게 개선되었습니다.
- **블러 오버레이**: 잠긴 아이템에 진입할 때 콘텐츠가 완전히 숨겨져 보안이 강화됩니다
- **뉴모픽 디자인**: 비밀번호 설정/잠금 해제 대화상자가 이제 뉴모픽 스타일을 사용합니다
- **16자리 표시**: 작은 원(총 16개)이 비밀번호 입력 상태를 표시합니다
- **두 줄 입력**: 비밀번호 설정 및 확인을 동일한 화면에서 수행합니다

#### 푸시 알림 설정 개선
푸시 알림 설정 화면이 카테고리별로 재구성되어 더 편리하게 관리할 수 있습니다.
- **7개 카테고리**: 거래, 로그, 만료, 리액션, 키워드, 공유 및 시스템으로 분류
- **그룹 토글**: 전체 카테고리를 한 번에 켜거나 끌 수 있습니다
- **축소/확장**: 아코디언 UI로 필요한 카테고리만 볼 수 있습니다
- **세부 알림**: 거래 수락/거부, 리액션, 키워드, 공유 만료/보고 및 시스템 알림이 추가되었습니다
- **뉴모픽 디자인**: 개별 알림 항목에 뉴모픽 스타일이 적용되었습니다

#### 사운드 설정 개선
음소거 버튼이 이제 뉴모픽 디자인을 사용하여 눌린 상태를 직관적으로 나타냅니다.
- **눌림 효과**: 음소거 시 버튼이 안쪽으로 눌린 것처럼 보입니다
- **뉴모픽 그림자**: 기본 상태는 볼록 그림자, 눌린 상태는 오목 그림자를 표시합니다

#### 로그 로딩 성능 개선
공유 로그 로딩 속도가 개선되었습니다.
- **캐시 우선 로딩**: 이전에 본 로그가 캐시에서 즉시 표시됩니다
- **데이터 절약**: 재방문 시 서버 요청 없이 로컬 데이터를 사용합니다
- **실시간 새 댓글**: 캐시를 사용하는 경우에도 새 댓글이 실시간으로 수신됩니다

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 종이 공유 로그
스탬프 없이 종이만으로 공유 로그 문서를 생성할 수 있습니다.
- **2개 이상의 종이 선택** → "새 아이템 생성(공유 로그)" 메뉴가 나타납니다
- **1개의 종이 선택** → "새 아이템 생성(개인 로그)" 메뉴가 나타납니다
- 생성된 문서는 동일한 댓글 방을 공유합니다
- 문서를 다른 사람에게 보내고 서로 채팅할 수 있습니다

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 뱃지 편집 기능
새겨진 뱃지의 이미지와 키워드를 편집할 수 있습니다.
- **편집 메뉴**: 새겨진 뱃지를 선택하면 "뱃지 편집" 메뉴가 나타납니다
- **이미지 변경**: 뱃지 이미지를 새 이미지로 교체할 수 있습니다
- **키워드 관리**: 5가지 유형의 키워드를 추가, 삭제 또는 수정할 수 있습니다

#### 이미지 성능 최적화
네트워크 이미지 로딩 속도가 크게 개선되었습니다.
- **로컬 캐시**: 한 번 로드된 이미지는 로컬에 저장되어 즉시 표시됩니다
- **뱃지 이미지 동기화**: 뱃지 이미지 변경 사항이 모든 로그에 즉시 반영됩니다

#### 최근 수신자 자동완성
전송 화면에서 최근 수신자를 빠르게 선택할 수 있습니다.
- **자동완성 목록**: 입력 필드에 포커스하면 최대 30명의 최근 수신자를 보여주는 드롭다운이 나타납니다
- **빠른 선택**: 목록에서 수신자를 선택하면 자동으로 검색됩니다
- **재검색**: X 버튼으로 선택을 해제하여 다른 수신자를 검색할 수 있습니다
- **로컬 저장소**: 전송 성공 시 수신자 정보가 자동으로 저장됩니다

#### 전송 제한 개선
착용 중인 뱃지와 공유 중인 스탬프는 이제 전송이 제한됩니다.
- **착용 중인 뱃지**: 뱃지를 착용 해제해야 전송할 수 있습니다
- **공유 스탬프**: 공유를 취소해야 스탬프를 전송할 수 있습니다
- **자세한 안내**: 제한 이유를 설명하는 구체적인 메시지가 표시됩니다

#### 리액션 시스템
감정 표현으로 아이템에 반응할 수 있습니다.
- **12가지 리액션**: 좋아요, 사랑, 최고, 축하 등 다양한 감정 표현
- **리액션 토글**: 선택한 리액션을 다시 클릭하여 취소할 수 있습니다
- **로그 기록**: 리액션이 선택되거나 취소될 때 시스템 로그에 기록됩니다
- **다국어 지원**: 리액션 이름이 사용자 언어로 표시됩니다

#### 검색 기능 개선
실시간 검색이 아이템 이름과 키워드를 포함하도록 확장되었습니다.
- **아이템 이름 검색**: 문서 제목, 스탬프 설명 또는 뱃지 도메인 이름으로 검색
- **키워드 검색**: 스탬프 및 뱃지에 저장된 키워드로 검색
- **태그 검색**: 스탬프 템플릿 태그로 검색

#### 인앱 알림 개선
실시간 토스트 알림이 개선되었습니다.
- **발신자 뱃지 표시**: 알림에 발신자의 뱃지 이미지가 인라인으로 표시됩니다
- **Dynamic Island 스타일**: iOS Dynamic Island 스타일에서 영감을 받은 세련된 토스트 애니메이션
- **실시간 감지**: ID+타임스탬프를 기반으로 새로운 및 업데이트된 알림을 정확하게 감지합니다

#### 버그 수정
- **문서 상세 UI 안정화**: 공유/단독 로그가 화면 경계에 있을 때 검색 바와 필터가 흔들리는 문제를 수정했습니다
- **스크롤 떨림 수정**: 로그가 적은 문서/스탬프에서 위로 스크롤할 때 화면이 깜빡이는 문제를 해결했습니다
- **상단 스크롤 수정**: 로그가 있는 아이템에서 스크롤하여 작성자 정보에 도달할 수 없는 문제를 해결했습니다
- **리액션 로그 형식 개선**: 이모티콘과 이름이 함께 표시됩니다
- **사용자 이름 표시 수정**: 뱃지 착용 시 도메인 이름이 올바르게 표시됩니다
- **공유 로그 첫 알림 수정**: 공유 로그에 대한 첫 토스트 알림이 표시되지 않는 문제를 해결했습니다
- **푸시 알림 이미지 수정**: 푸시 알림에서 뱃지 이미지보다 문서 이미지가 우선순위로 표시됩니다

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 자동 다국어 번역
문서, 스탬프 및 로그 내용이 자동으로 사용자의 언어로 번역됩니다.
- **자동 번역**: 문서, 스탬프 및 로그를 볼 때 사용자 언어로 자동 번역
- **지원 언어**: 한국어, 영어, 일본어, 스페인어, 프랑스어, 독일어, 포르투갈어
- **원본 토글**: [원본 보기] 버튼으로 원본과 번역 간 전환
- **번역 캐싱**: 서버 및 로컬 캐싱으로 재번역 요청 방지
- **언어별 캐시**: 언어 전환 시 캐시된 번역을 즉시 사용

#### 튜토리얼 시스템
앱 사용법을 안내하는 단계별 튜토리얼이 추가되었습니다.
- **인벤토리 화면**: 아이템 선택, 포켓 이동, 하단 메뉴 사용 (8단계)
- **전송/수신 화면**: 수신자 입력, QR 스캔, 전송/수신 방법
- **상점 화면**: 제품 카테고리 탐색 및 구매 방법
- **프로필 화면**: 계정 정보 및 설정
- **설정 화면**: 앱 설정 및 테마 변경
- **스탬프 템플릿**: 템플릿 생성 전체 프로세스 (9단계)
- **검색 기능**: 필터 사용 및 검색어 저장
- 처음 사용 시에만 표시되며, 설정에서 다시 볼 수 있습니다

#### 로그 성능 최적화
공유/독립 로그의 로딩 속도와 데이터 사용량이 크게 개선되었습니다.
- **빠른 로딩**: 먼저 최신 100개 댓글만 로드
- **무한 스크롤**: 스크롤하여 오래된 댓글 50개씩 추가 로드
- **로컬 캐싱**: 재방문 시 캐시를 사용하여 즉시 표시
- **실시간 동기화**: 새 댓글만 효율적으로 수신
- **데이터 절약**: 불필요한 재다운로드 방지

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 미디어 링크 카드
로그에 입력된 URL이 자동으로 **리치 카드**로 표시됩니다.
- **YouTube**: 썸네일 + 제목 + 채널 이름
- **Spotify**: 앨범 아트 + 제목 + 아티스트
- **Google Drive**: 파일 썸네일 + 파일명 (공개 파일)
- **Dropbox**: 아이콘 + 파일명
- **OneDrive**: 아이콘 + 서비스 이름
- **웹 페이지**: 미리보기 이미지 + 페이지 제목
- 탭하여 외부 앱/브라우저에서 열기
- 길게 눌러 URL을 클립보드에 복사

#### 공유 템플릿 검색 개선
- **종이 확인**: 복제 버튼에 남은 종이 수 표시 (종이:10)
- **종이 필요**: 종이가 없을 때 복제가 비활성화됩니다
- **뉴모픽 디자인**: 검색 화면이 이제 뉴모픽 UI 스타일을 사용합니다

#### 이미지 편집기 효과 시스템 개선
특수 효과 선택 UI가 단순화되었습니다.
- **단일 선택**: 5가지 효과 중 한 번에 하나씩 선택
- **효과 목록**: 없음 / 배경 제거 / 보케 / 블룸 / 흑백
- **부드러운 전환**: 효과 처리 중 진행 표시기 표시
- **성능 향상**: 블룸/흑백 필터가 백그라운드에서 처리됩니다

#### 성능 및 안정성
내부 앱 구조가 최적화되었습니다.
- **쿼리 최적화**: 병렬 처리로 더 빠른 클립/필터 로딩
- **코드 정리**: 12개의 사용하지 않는 코드 모듈 제거
- **의존성 정리**: 7개의 사용하지 않는 라이브러리 제거
- **에셋 정리**: 사용하지 않는 폰트/이미지 제거 (약 16MB 감소)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 클립 기능
여러 문서를 함께 묶어 더 쉽게 관리할 수 있습니다.
- **클립 생성**: 2개 이상의 문서를 선택하고 "함께 클립" 탭
- **클립 아이콘**: 클립된 문서는 오른쪽 상단에 클립 아이콘이 표시됩니다
- **클립 상세**: 아이템 상세 화면의 "클립 정보" 버튼을 통해 내부 아이템 확인
- **순서 변경**: 클립 내 아이템을 드래그하여 순서 변경 (표지 제외)
- **아이템 제외**: 클립에서 특정 아이템 제거 (표지 제외)
- **클립 해제**: 클립을 개별 문서로 완전히 해제
- **자동 해제**: 아이템이 1개로 줄어들면 클립이 자동으로 해제됩니다
- **전송**: 클립이 묶음으로 전송/수신됩니다

#### 공유 템플릿 검색 개선
공유 템플릿 검색 화면의 사용성이 개선되었습니다.
- **인라인 카드**: 검색 결과가 간결한 목록 형식으로 표시됩니다
- **전체 이미지 표시**: 썸네일이 잘리지 않고 원본 비율로 표시됩니다
- **확장된 세부정보**: 템플릿 상세 시트에서 내용, 키워드 및 만료 날짜 확인
- **키워드 미리보기**: 템플릿에 설정된 기본 키워드 확인
- **만료 날짜**: 공유 템플릿의 만료 날짜 확인

#### 비밀번호 잠금 해제 개선
- 올바른 비밀번호 입력 시 이제 문서가 **영구적으로 잠금 해제**됩니다
- 이전: 보기만 가능, 잠금 유지 → 지금: 완전히 잠금 해제

#### 버그 수정
- 수신 화면에서 클립 아이템이 개별적으로 계산되는 문제 수정
- 탐색 바 수신 뱃지에 클립 내부 아이템이 포함되는 문제 수정
- 환불/삭제 시 뱃지(네임태그)가 착용 해제되지 않는 문제 수정
- 뱃지 삭제 후 도메인이 점유된 상태로 남는 문제 수정

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 공유 로그 미읽음 표시
공유 로그에 새 댓글이 추가되면 아이템 테두리가 **맥동**합니다.
- 인벤토리에서 미읽음 공유 로그를 쉽게 발견할 수 있습니다
- 문서를 열면 맥동이 멈춥니다
- 읽음 상태가 모든 기기에서 동기화됩니다

#### 스탬프 사용 안내
새겨진 스탬프를 선택하면 사용 가능한 종이가 **맥동**하여 안내합니다.
- 템플릿 복제를 위한 개선된 UX
- 직관적인 다음 단계 안내

#### 포켓 개선
- **축소/확장**: 화살표 버튼(▼/▲)으로 포켓 토글
- **모두 선택**: 포켓 헤더를 탭하여 모든 아이템 선택/선택 해제
- 선택 상태 표시기 (○/◐/●)
- 축소된 포켓으로 드래그 앤 드롭

#### 상점 편의성
동일한 아이템을 연속으로 구매할 때 결제가 간소화됩니다.
- 마지막 구매 후 10분 이내에 확인 대화상자 건너뛰기
- 더 빠른 대량 구매

#### UI 개선
- 새 헤드라인 폰트로 가독성 향상
- 스탬프 카드가 배경에 템플릿 미리보기 표시 (33% 불투명도)
- 뱃지 카드가 새겨진 이미지 미리보기 표시
- 하단 메뉴에 사용 가능한 액션 수 뱃지 표시
- 블랙 잉크 테마 색상 조정 (텍스트 가독성 향상)
- 제품 이미지 최적화 (크기 감소, 로딩 속도 향상)

#### 버그 수정
- 자신의 댓글에 맥동 효과가 나타나는 문제 수정
- 제스처 탐색으로 입력 필드가 잘리는 문제 수정
- 포켓 축소 시 회색 화면 문제 수정
- 푸시 알림 권한 처리 개선

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 문서 잠금 기능
- 문서에 숫자 비밀번호 설정 (최대 16자리)
- 잠긴 문서는 흑백 + 잠금 아이콘 표시
- 올바른 비밀번호로 잠금 해제 (1회)
- 아이템 전송 후에도 잠금 상태 유지
- 잠긴 문서는 검색 결과에서 제외

#### 빠른 입력 시스템
로그 작성 시 `+` 버튼을 통해 특수 정보를 쉽게 입력할 수 있습니다:
- **키워드:값** - 일반 키워드 카드
- **날짜 알람** - 날짜 카드 (자동 D-Day 계산, 알람 설정)
- **전화번호** - 국가별 자동 포맷팅
- **위치/주소** - 지도 앱 통합
- **금액** - 자동 통화 기호 표시

#### 특수 카드 액션
로그의 특수 정보를 **길게 눌러** 추가 기능을 활성화할 수 있습니다:
- **날짜 카드**: 알람 설정/취소
- **전화 카드**: 바로 전화 걸기 / 클립보드에 복사
- **위치 카드**: 지도 앱에서 열기 / 클립보드에 복사
- **금액 카드**: 클립보드에 복사

#### UI 개선
- 필터 칩 뉴모픽 디자인
- 검색 바 스크롤 개선
- 아이템 상세 화면 AppBar에 아이템 이름 표시

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**첫 공식 릴리스**

#### 종이 시스템
- 문서 생성에 필요한 화폐 시스템 도입
- 신규 가입 시 종이 10장 제공
- Google/Apple 계정 연동 시 각각 10장 추가
- 상점에서 종이 구매 가능

#### 문서 생성
- 종이를 사용하여 문서 생성
- 제목, 내용 및 이미지 추가
- 시작 날짜/만료 날짜 옵션 설정

#### 뱃지 시스템
- 고유 도메인 이름 새기기 기능
- 새겨진 도메인 이름을 사용자 신원으로 사용
- 착용/착용 해제를 통한 활성화 관리
- 128x128 이미지 첨부 옵션

#### 스탬프 시스템
- 템플릿 생성 기능
- 단독 로그/공유 로그 모드 선택
- 템플릿 복제 기능
- 시작 날짜/만료 날짜 설정

#### 로그 기능
- 문서/스탬프에 로그 기록
- 단독 로그: 개인 전용 기록
- 공유 로그: 복제본 소유자와 공유
- Key:value 형식 정보 카드 지원

#### 잉크 시스템
- 앱 테마 색상 변경 기능
- 블랙 잉크, 골드 잉크

#### 아이템 전송
- 이메일 주소로 아이템 전송
- QR 코드 스캔으로 이메일 자동 입력
- 수신한 아이템 수락 또는 반송
- 여러 아이템 한 번에 전송

#### 포켓
- 아이템 그룹화 기능
- 기기별 로컬 저장소

#### 검색 기능
- 실시간 검색 필터링
- 검색어를 필터로 저장
- 최근 검색 자동 저장 (최대 5개)

#### 상점
- 종이, 스탬프, 뱃지, 잉크 구매
- 모든 플랫폼에서 사용 가능

#### 계정
- Google, Apple, 이메일 로그인
- 소셜 계정 연동으로 추가 종이 획득

#### 다국어 지원
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>새로운 기능을 제안하세요!</strong> <a href="/inventory/suggest/">제안하기</a>에서 아이디어를 공유하시면 적극적으로 검토하겠습니다.
</div>

<style>
/* Version Container */
details.changelog-version {
  background: rgba(21, 10, 40, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

details.changelog-version:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
}

details.changelog-version[open] {
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
}

/* Summary Header */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* Arrow Icon */
details.changelog-version summary::before {
  content: '▶';
  margin-right: 0.75rem;
  color: #a855f7;
  transition: transform 0.25s ease;
  font-size: 0.85rem;
}

details.changelog-version[open] summary::before {
  transform: rotate(90deg);
}

details.changelog-version[open] summary {
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

/* Version Title */
.version-title {
  flex: 1;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.15rem;
  font-weight: 600;
}

.version-title small {
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 400;
  margin-left: 0.5rem;
}

/* Copy Button */
.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(168, 85, 247, 0.25);
  transform: scale(1.1);
}

.copy-btn svg { fill: #a855f7; }
.copy-btn:hover svg { fill: #14b8a6; }
.copy-btn.copied { background: rgba(20, 184, 166, 0.2); }
.copy-btn.copied svg { fill: #14b8a6; }

/* Version Content */
.version-content {
  padding: 1.25rem 1.5rem;
  background: rgba(10, 6, 20, 0.4);
  color: rgba(255, 255, 255, 0.9);
}

.version-content h4 {
  color: #14b8a6;
  font-size: 1.05rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.version-content h4:first-child { margin-top: 0; }
.version-content ul { line-height: 1.8; }
.version-content li { margin-bottom: 0.5rem; }
.version-content strong { color: #14b8a6; }

/* Footer */
.changelog-footer {
  background: rgba(20, 184, 166, 0.15);
  border-left: 4px solid #14b8a6;
  padding: 1rem 1.25rem;
  margin-top: 2rem;
  border-radius: 0 8px 8px 0;
  color: rgba(255, 255, 255, 0.9);
}

.changelog-footer a { color: #a855f7; }
.changelog-footer a:hover { color: #14b8a6; }

h2 {
  color: rgba(255, 255, 255, 0.95);
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>

<script>
function copyVersionContent(button, event) {
  event.stopPropagation();
  event.preventDefault();

  const details = button.closest('details.changelog-version');
  const versionContent = details.querySelector('.version-content');
  const versionTitle = details.querySelector('.version-title');

  const titleText = versionTitle ? versionTitle.textContent.trim() : '';
  const contentClone = versionContent.cloneNode(true);

  contentClone.querySelectorAll('h4').forEach(h4 => {
    h4.textContent = '\n## ' + h4.textContent.trim() + '\n';
  });
  contentClone.querySelectorAll('li').forEach(li => {
    li.textContent = '- ' + li.textContent.trim();
  });

  const text = '# ' + titleText + '\n' + contentClone.textContent
    .replace(/\n{3,}/g, '\n\n').trim();

  navigator.clipboard.writeText(text).then(() => {
    const copyIcon = button.querySelector('.copy-icon');
    const checkIcon = button.querySelector('.check-icon');
    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    button.classList.add('copied');
    setTimeout(() => {
      copyIcon.style.display = 'block';
      checkIcon.style.display = 'none';
      button.classList.remove('copied');
    }, 2000);
  });
}
</script>
