---
layout: inventory
title: 버전 로그
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

## 버전 로그

Inventory 앱의 업데이트 내역을 확인하세요.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="복사">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 리액션 패널 반응형 레이아웃
아이템 상세보기에서 이미지 리액션 패널이 모든 화면 크기에서 올바르게 표시됩니다.
- **반응형 레이아웃**: 좁은 화면에서도 리액션 버튼이 균등하게 분배
- **전체 너비 사용**: 이미지 크기와 관계없이 패널이 화면 전체 너비 활용
- **컴팩트 디자인**: 패딩 최적화로 사진을 덜 가리면서 터치 영역 유지

#### 공유 템플릿 검색 무한 스크롤
공유 템플릿 검색 결과가 20개 이상일 때 스크롤하여 더 많은 결과를 불러올 수 있습니다.
- **무한 스크롤**: 검색 결과 하단에 도달하면 자동으로 다음 20개 로드
- **로딩 표시**: 추가 로딩 중 하단에 프로그레스 표시
- **하위 호환성**: 이전 버전 앱에서도 기존처럼 20개 표시

#### 홈페이지 업데이트
- **중국어(간체) 지원**: 홈페이지에 中文(简体) 로컬라이징 추가 (8번째 언어)
- **지원 언어 표시**: 플랫폼 다운로드 아이콘 아래 8개 언어 국기 표시

#### App Store 언어 설정
- **iOS/macOS 지원 언어 추가**: CFBundleLocalizations에 중국어(zh) 추가

#### 날짜 선택 개선
- **선택 범위 확대**: 날짜 선택 UI에서 1900년부터 선택 가능 (기존 2000년)

#### 문서 공유 기능
문서 상세보기 화면에서 내용을 클립보드에 복사하거나 이메일로 전송할 수 있습니다.
- **클립보드 복사**: 리치 텍스트 마커를 제거한 순수 텍스트로 복사
- **이메일 전송**: 서식이 적용된 HTML 형식으로 이메일 발송
- **선택적 포함**: 제목, 내용, 키워드, 대화, 시스템 로그 중 원하는 항목만 선택
- **클립 모드 지원**: 클립 상세보기에서도 동일하게 사용 가능

#### 클립 잠금 동기화
클립에 속한 아이템의 잠금 상태가 동기화됩니다.
- **일괄 잠금/해제**: 클립 대표 아이템 잠금 시 모든 하위 아이템도 함께 잠금
- **비밀번호 동기화**: 클립 내 모든 아이템이 동일한 잠금 비밀번호 사용

#### 리치 텍스트 편집기 개선
스탬프 템플릿 작성 시 텍스트 스타일 적용이 더 직관적으로 개선되었습니다.
- **6가지 기본 스타일**: 굵게, 밑줄, 취소선, 주색, 보조색, 박스
- **중첩 스타일**: 여러 스타일을 순차적으로 적용 가능 (예: 굵게+밑줄)
- **깔끔한 편집**: 마커가 보이지 않고 스타일만 표시
- **동적 툴바**: 선택 영역 아래에 툴바가 자동 위치

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
아이템을 드래그할 때 화면 가장자리에서 자동으로 스크롤됩니다.
- **자동 스크롤 영역**: 화면 상단/하단 10% 영역에 드래그하면 자동 스크롤
- **가속도 기반**: 경계에 가까울수록 스크롤 속도가 빨라짐
- **햅틱 피드백**: 스크롤 영역 진입 시 가벼운 진동으로 알림
- **파티션 간 이동 편의성**: 많은 아이템이나 여러 파티션을 빠르게 탐색

#### 스크롤 네비게이션
상세 정보 보기창에서 최상단/최하단으로 빠르게 이동할 수 있습니다.
- **네비게이션 버튼**: 댓글이 많을 때 검색창 옆에 이동 버튼 표시
- **위치별 표시**: 상단에선 하단 버튼만, 하단에선 상단 버튼만 표시
- **뉴모픽 디자인**: 앱 디자인과 일관된 버튼 스타일

#### 페이지 전환 애니메이션 복원
하단 네비게이션 바와 받기 화면의 플립 애니메이션이 복원되었습니다.
- **3D 플립 효과**: Y축 180도 회전으로 페이지 전환
- **로그/상점 페이지**: 플립 애니메이션 적용
- **받기 화면**: 우편함 버튼, 알림 딥링크에서 플립 애니메이션 적용

#### UI 디자인 통일
보내기, 받기, 상점 화면에 뉴모픽 디자인이 적용되어 앱 전체가 통일되었습니다.
- **보내기/받기 화면**: 카드 및 다이얼로그에 뉴모픽 그림자 적용
- **상점 화면**: 탭 버튼 글로우 효과, 상품 카드 뉴모픽 스타일
- **입력창 디자인**: 움푹 들어간 스타일로 입력 영역 명확히 구분

#### 로그 재정렬 애니메이션
로그 목록에서 새 댓글로 인해 아이템이 위로 올라올 때 부드러운 애니메이션이 적용됩니다.
- **스케일 효과**: 아이템이 살짝 커졌다가 이동 후 원래 크기로 돌아옴
- **순차 처리**: 여러 아이템이 동시에 이동할 때 순서대로 애니메이션
- **시각적 강조**: 어떤 아이템이 최신인지 명확하게 인지 가능

#### 데이터베이스 안정화
앱 업데이트 시 발생할 수 있는 데이터베이스 호환성 문제가 해결되었습니다.
- **자동 복구**: 데이터베이스 버전 불일치 시 자동으로 재생성
- **데이터 보존**: 서버와 자동 동기화되어 데이터 손실 없음
- **모든 플랫폼**: iOS, Android, macOS, Windows 동일 적용

#### 비밀번호 잠금 개선
비밀번호가 설정된 아이템의 보안성과 사용성이 크게 향상되었습니다.
- **블러 오버레이**: 잠금 아이템 진입 시 내용을 완전히 가려 보안 강화
- **뉴모픽 디자인**: 비밀번호 설정/해제 다이얼로그에 뉴모픽 스타일 적용
- **16자리 표시**: 작은 동그라미 16개로 비밀번호 입력 상태 표시
- **2줄 입력**: 비밀번호 설정 시 한 화면에서 입력과 확인을 동시에

#### 푸시 알림 설정 개선
푸시 알림 설정 화면이 카테고리별로 재구성되어 더 편리하게 관리할 수 있습니다.
- **7개 카테고리**: 거래, 로그, 만료, 리액션, 키워드, 공유, 시스템으로 분류
- **그룹 토글**: 카테고리 전체를 한 번에 켜거나 끌 수 있음
- **접기/펼치기**: 아코디언 UI로 필요한 카테고리만 펼쳐서 확인
- **세부 알림 추가**: 거래 수락/거절, 리액션, 키워드, 공유 만료/신고, 시스템 알림 추가
- **뉴모픽 디자인**: 개별 알림 항목에 뉴모픽 스타일 적용

#### 사운드 설정 개선
음소거 버튼에 뉴모픽 디자인이 적용되어 누름 상태가 직관적으로 표현됩니다.
- **눌림 효과**: 음소거 시 버튼이 안으로 들어간 것처럼 보임
- **뉴모픽 그림자**: 기본 상태는 볼록, 눌린 상태는 오목한 그림자

#### 로그 로딩 성능 개선
공유 로그의 로딩 속도가 향상되었습니다.
- **캐시 우선 로드**: 이전에 본 로그는 캐시에서 즉시 표시
- **데이터 절약**: 재방문 시 서버 요청 없이 로컬 데이터 사용
- **새 댓글 실시간 수신**: 캐시 사용 중에도 새 댓글은 실시간 반영

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
- **종이 2개 이상 선택** → "새 아이템 생성 (공유로그)" 메뉴 표시
- **종이 1개 선택** → "새 아이템 생성 (단독로그)" 메뉴 표시
- 생성된 문서들은 같은 공유 댓글방을 사용
- 각 문서를 다른 사람에게 전송하면 서로 대화 가능

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
각인된 뱃지의 이미지와 키워드를 수정할 수 있습니다.
- **편집 메뉴**: 각인된 뱃지 선택 시 "뱃지 편집하기" 메뉴 표시
- **이미지 변경**: 뱃지 이미지를 새 이미지로 교체
- **키워드 관리**: 5가지 유형의 키워드 추가/삭제/수정

#### 이미지 성능 최적화
네트워크 이미지 로딩 속도가 크게 개선되었습니다.
- **로컬 캐시**: 한번 로드된 이미지는 로컬에 저장되어 즉시 표시
- **뱃지 이미지 동기화**: 뱃지 이미지 변경 시 모든 로그에 즉시 반영

#### 최근 수신자 자동완성
보내기 화면에서 최근 보낸 수신자를 빠르게 선택할 수 있습니다.
- **자동완성 목록**: 입력창 포커스 시 최근 수신자 30명 드롭다운 표시
- **빠른 선택**: 목록에서 수신자 선택 시 자동으로 검색 실행
- **재검색 기능**: X 버튼으로 선택 취소 후 다른 수신자 검색 가능
- **로컬 저장**: 전송 성공 시 수신자 정보 자동 저장

#### 보내기 제한 개선
장착된 뱃지와 공유 중인 스탬프는 보내기가 제한됩니다.
- **장착된 뱃지**: 장착 해제 후 보내기 가능
- **공유 중인 스탬프**: 공유 회수 후 보내기 가능
- **상세 안내**: 보내기 제한 사유별 안내 메시지 표시

#### 감정 표현 시스템
아이템에 감정 표현으로 반응할 수 있습니다.
- **12가지 반응**: 좋아요, 사랑해요, 최고예요, 축하해요 등 다양한 감정 표현
- **반응 토글**: 선택한 반응을 다시 클릭하여 취소 가능
- **로그 기록**: 감정 표현 선택/취소 시 시스템 로그로 기록
- **다국어 지원**: 사용자 언어에 맞는 감정 표현명 표시

#### 검색 기능 개선
실시간 검색이 아이템 이름과 키워드까지 포함하도록 확장되었습니다.
- **아이템 이름 검색**: 문서 제목, 스탬프 설명, 뱃지 도메인명으로 검색 가능
- **키워드 검색**: 스탬프와 뱃지에 저장된 키워드로 검색 가능
- **태그 검색**: 스탬프 템플릿 태그로도 검색 가능

#### 인앱 알림 개선
실시간 토스트 알림이 개선되었습니다.
- **발신자 뱃지 표시**: 알림에 발신자의 뱃지 이미지가 인라인으로 표시됩니다
- **다이나믹 아일랜드 스타일**: iOS 다이나믹 아일랜드 스타일의 세련된 토스트 애니메이션
- **실시간 감지**: 새 알림과 업데이트된 알림을 ID+타임스탬프 기반으로 정확하게 감지
- **자동 소거**: 아이템 상세 화면 진입 시 해당 아이템 관련 알림이 자동으로 삭제됩니다

#### 버그 수정
- **문서 상세 UI 안정화**: 공유로그/단독로그가 화면 경계에 걸칠 때 검색창과 필터가 흔들리던 문제 해결
- **스크롤 떨림 수정**: 로그가 적은 문서/스탬프에서 상단 스크롤 시 화면이 떨리던 문제 해결
- **최상단 도달 불가 수정**: 로그가 있는 아이템에서 작성자 정보까지 스크롤되지 않던 문제 해결
- **감정 표현 로그 형식 개선**: 이모티콘과 명칭이 함께 표시됩니다
- **사용자 이름 표시 수정**: 뱃지 착용 시 도메인명이 올바르게 표시됩니다
- **공유 로그 첫 알림 수정**: 공유 로그의 첫 번째 토스트가 표시되지 않던 문제 해결
- **푸시 알림 이미지 수정**: 문서 이미지가 우선 표시됩니다 (뱃지 이미지 대신)

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

#### 다국어 자동 번역
문서/스탬프/로그 내용이 사용자 언어로 자동 번역됩니다.
- **자동 번역**: 문서, 스탬프, 로그 열람 시 사용자 언어로 자동 번역
- **지원 언어**: 한국어, 영어, 일본어, 스페인어, 프랑스어, 독일어, 포르투갈어
- **원문 토글**: [원문보기] 버튼으로 원문과 번역 간 전환
- **번역 캐싱**: 서버 및 로컬에 번역 결과 캐싱으로 재요청 방지
- **언어별 캐시**: 언어 변경 시 해당 언어 캐시 즉시 사용

#### 튜토리얼 시스템
앱 사용법을 단계별로 안내하는 튜토리얼이 추가되었습니다.
- **인벤토리 화면**: 아이템 선택, 파티션 이동, 하단 메뉴 사용법 (8단계)
- **보내기/받기 화면**: 수신자 입력, QR 스캔, 전송/수신 방법
- **상점 화면**: 상품 카테고리 탐색 및 구매 방법
- **프로필 화면**: 계정 정보 및 설정 방법
- **설정 화면**: 앱 설정 및 테마 변경 방법
- **스탬프 템플릿**: 템플릿 생성 전체 과정 (9단계)
- **검색 기능**: 필터 사용 및 검색어 저장 방법
- 최초 1회만 표시되며, 설정에서 다시 볼 수 있음

#### 로그 성능 최적화
공유/독립 로그의 로딩 속도와 데이터 사용량이 크게 개선되었습니다.
- **빠른 로딩**: 최신 100개 댓글만 먼저 로드
- **무한 스크롤**: 스크롤하여 이전 댓글 50개씩 추가 로드
- **로컬 캐싱**: 재방문 시 캐시 사용으로 즉시 표시
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
로그에 URL을 입력하면 **리치 카드**로 자동 표시됩니다.
- **YouTube**: 썸네일 + 제목 + 채널명 표시
- **Spotify**: 앨범아트 + 제목 + 아티스트 표시
- **Google Drive**: 파일 썸네일 + 파일명 표시 (공개 파일)
- **Dropbox**: 아이콘 + 파일명 표시
- **OneDrive**: 아이콘 + 서비스명 표시
- **일반 웹페이지**: 미리보기 이미지 + 페이지 제목 표시
- 탭하여 외부 앱/브라우저에서 열기
- 길게 눌러 URL 클립보드 복사

#### 공유 템플릿 검색 개선
- **종이 확인**: 복제 버튼에 남은 종이 개수 표시 (종이:10)
- **종이 필요**: 종이가 없으면 복제 버튼 비활성화
- **뉴모픽 디자인**: 검색 화면에 뉴모픽 UI 스타일 적용

#### 이미지 편집기 효과 시스템 개선
특수효과 선택 UI가 간소화되었습니다.
- **단일 선택 방식**: 5가지 효과 중 하나만 선택 가능
- **효과 목록**: 원본 / 배경제거 / 아웃포커싱 / 블룸 / 흑백
- **부드러운 전환**: 효과 적용 중 프로그레스 표시
- **성능 향상**: 블룸/흑백 필터가 백그라운드에서 처리

#### 성능 및 안정성
앱의 내부 구조가 최적화되었습니다.
- **쿼리 최적화**: 클립/필터 조회 시 병렬 처리로 로딩 속도 향상
- **코드 정리**: 미사용 코드 12개 모듈 제거
- **의존성 정리**: 미사용 라이브러리 7개 제거
- **에셋 정리**: 미사용 폰트/이미지 파일 제거 (약 16MB 감소)

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

#### 클립(Clip) 기능
여러 문서를 하나로 묶어서 관리하는 클립 기능이 추가되었습니다.
- **클립 생성**: 2개 이상의 문서를 선택하고 "클립으로 묶기" 실행
- **클립 아이콘**: 클립된 문서는 우상단에 클립 아이콘 표시
- **클립 상세**: 클립 아이템 상세 화면에서 "클립 정보" 버튼으로 내부 아이템 확인
- **순서 변경**: 클립 내 아이템 순서를 드래그로 변경 (표지 제외)
- **아이템 제외**: 클립에서 특정 아이템을 분리 가능 (표지 제외)
- **클립 해제**: 클립을 완전히 해체하여 개별 문서로 분리
- **자동 해체**: 클립에 2개만 남았을 때 1개 제외 시 자동 해체
- **클립 전송**: 클립은 묶음 단위로 전송/수신됨

#### 공유 템플릿 검색 개선
공유 템플릿 검색 화면의 사용성이 개선되었습니다.
- **인라인 카드**: 검색 결과가 컴팩트한 리스트 형식으로 표시
- **이미지 전체 표시**: 썸네일이 잘리지 않고 원본 비율로 표시
- **상세 정보 확장**: 템플릿 상세 시트에서 내용, 키워드, 만료일 확인 가능
- **키워드 표시**: 템플릿에 설정된 기본 키워드 미리보기
- **만료일 표시**: 공유 만료 예정일 확인

#### 비밀번호 잠금 해제 개선
- 잠긴 문서를 열 때 올바른 비밀번호 입력 시 **영구 잠금 해제**
- 기존: 열람만 허용하고 잠금 유지 → 변경: 완전히 잠금 해제

#### 버그 수정
- 받기 화면에서 클립 아이템이 개별 카운트되던 문제 수정
- 하단 네비게이션 바의 받기 뱃지가 클립 내부 아이템을 포함하던 문제 수정
- 뱃지(Nametag) 환불/삭제 시 장착 상태가 해제되지 않던 문제 수정
- 뱃지 삭제 후 도메인이 점유 상태로 남아있던 문제 수정

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
공유 로그에 새 댓글이 달리면 해당 아이템의 테두리가 **점멸**합니다.
- 인벤토리 화면에서 미읽음 공유 로그를 한눈에 확인
- 문서를 열어 확인하면 점멸이 멈춤
- 모든 기기에서 읽음 상태 동기화

#### 스탬프 사용 가이드
각인된 스탬프를 선택하면 사용 가능한 종이가 **점멸**하여 안내합니다.
- 템플릿 복제 기능 사용 시 UX 개선
- 직관적인 다음 단계 안내

#### 파티션 개선
- **접기/펼치기**: 파티션 우측 화살표(▼/▲)로 접기/펼치기
- **전체 선택**: 파티션 헤더 탭으로 해당 파티션 아이템 전체 선택/해제
- 선택 상태 인디케이터 표시 (○/◐/●)
- 접힌 파티션에도 드래그 드롭 가능

#### 상점 편의성 개선
동일 아이템 연속 구매 시 확인 절차가 간소화됩니다.
- 10분 이내 재구매 시 상세/동의 다이얼로그 생략
- 빠른 다량 구매 가능

#### UI 개선
- 헤드라인 폰트 변경으로 가독성 향상
- 스탬프 카드에 템플릿 미리보기 배경 표시 (33% 투명도)
- 뱃지 카드에 각인 이미지 미리보기 표시
- 하단 메뉴에 실행 가능한 액션 수 배지 표시
- 블랙 잉크 테마 색상 조정 (텍스트 가독성 개선)
- 상품 이미지 최적화 (용량 절감, 로딩 속도 향상)

#### 버그 수정
- 자신이 작성한 댓글에 점멸 효과가 발생하던 문제 수정
- 제스처 네비게이션에서 입력창 잘림 현상 수정
- 파티션 접기 시 화면이 회색으로 표시되던 문제 수정
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
- 문서에 숫자 비밀번호 설정 가능 (최대 16자리)
- 잠긴 문서는 회색조 + 자물쇠 아이콘으로 표시
- 올바른 비밀번호 입력 시 잠금 해제 (일회성)
- 잠금 상태는 아이템 전송 후에도 유지
- 잠긴 문서는 검색 결과에서 제외

#### 빠른 입력 (Quick Input) 시스템
로그 입력 시 `+` 버튼으로 특수 정보를 쉽게 입력할 수 있습니다:
- **키워드:값** - 일반 키워드 카드
- **날짜 알람** - 날짜 카드 (D-Day 자동 계산, 알람 설정 가능)
- **전화번호** - 국가별 자동 포맷팅 (한국, 미국, 일본 등)
- **위치/주소** - 지도 앱 연동
- **금액** - 통화 기호 자동 표시

#### 특수 카드 액션
로그에 입력된 특수 정보를 **길게 누르면** 추가 기능이 활성화됩니다:
- **날짜 카드**: 알람 설정/해제
- **전화번호 카드**: 바로 전화 걸기 / 클립보드 복사
- **위치 카드**: 지도 앱에서 열기 / 클립보드 복사
- **금액 카드**: 클립보드 복사

#### UI 개선
- 필터 칩 뉴모픽 디자인 적용
- 검색창 스크롤 개선
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

**첫 정식 출시 버전**

#### 종이(Paper) 시스템
- 문서 생성에 필요한 재화 시스템 도입
- 신규 가입 시 종이 10장 지급
- Google/Apple 계정 연동 시 각 10장 추가 지급
- 상점에서 종이 구매 가능

#### 문서 생성
- 종이를 사용하여 문서 생성
- 제목, 내용, 이미지 첨부
- 개시일자/유효기간 설정 가능

#### 뱃지 시스템
- 고유 도메인명 각인 기능
- 각인한 도메인명이 사용자 신원(Identity)으로 사용
- 장착/해제로 활성화 관리
- 128x128 이미지 첨부 옵션

#### 스탬프 시스템
- 템플릿 생성 기능
- 단독로그/공유로그 모드 선택
- 템플릿 복제 기능
- 개시일자/유효기간 설정

#### 로그 기능
- 문서/스탬프에 로그 기록
- 단독로그: 개인 전용 기록
- 공유로그: 복제본 소유자들과 공유
- 키:값 형식 정보 카드 지원

#### 잉크 시스템
- 앱 테마 색상 변경 기능
- 블랙 잉크, 골드 잉크

#### 아이템 전송
- 이메일 주소로 아이템 전송
- QR코드 스캔으로 이메일 자동 입력
- 받은 아이템 수락 또는 반송
- 여러 아이템 동시 전송

#### 파티션
- 아이템 그룹화 기능
- 기기별 로컬 저장

#### 검색 기능
- 실시간 검색 필터링
- 검색어 필터 저장
- 최근 검색어 자동 저장 (최대 5개)

#### 상점
- 종이, 스탬프, 뱃지, 잉크 구매
- 모든 플랫폼에서 이용 가능

#### 계정
- Google, Apple, 이메일 로그인
- 소셜 계정 연동으로 종이 추가 획득

#### 다국어 지원
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>새로운 기능을 제안해주세요!</strong> <a href="/inventory/suggest/">건의하기</a>에서 아이디어를 공유해주시면 적극 검토하겠습니다.
</div>

<style>
/* 버전 컨테이너 */
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

/* Summary 헤더 */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* 화살표 아이콘 */
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

/* 버전 제목 */
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

/* 복사 버튼 */
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

/* 버전 내용 */
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

/* 하단 안내 */
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
