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
---

## 📋 버전 로그

Inventory 앱의 업데이트 내역을 확인하세요.

---

### 🔒 v1.0.1 <small style="color:#6b7280;">2025-01</small>

#### 🔒 문서 잠금 기능
- 문서에 숫자 비밀번호 설정 가능 (최대 16자리)
- 잠긴 문서는 회색조 + 자물쇠 아이콘으로 표시
- 올바른 비밀번호 입력 시 잠금 해제 (일회성)
- 잠금 상태는 아이템 전송 후에도 유지
- 잠긴 문서는 검색 결과에서 제외

#### ⚡ 빠른 입력 (Quick Input) 시스템
로그 입력 시 `+` 버튼으로 특수 정보를 쉽게 입력할 수 있습니다:
- **키워드:값** - 일반 키워드 카드
- **날짜 알람** - 날짜 카드 (D-Day 자동 계산, 알람 설정 가능)
- **전화번호** - 국가별 자동 포맷팅 (한국, 미국, 일본 등)
- **위치/주소** - 지도 앱 연동
- **금액** - 통화 기호 자동 표시

#### 📱 특수 카드 액션
로그에 입력된 특수 정보를 **길게 누르면** 추가 기능이 활성화됩니다:
- **날짜 카드**: 알람 설정/해제
- **전화번호 카드**: 바로 전화 걸기 (모바일) / 클립보드 복사 (데스크톱)
- **위치 카드**: 지도 앱에서 열기 (모바일) / 클립보드 복사 (데스크톱)
- **금액 카드**: 클립보드 복사

#### 🎨 UI 개선
- 필터 칩 뉴모픽 디자인 적용
- 검색창 스크롤 개선
- 아이템 상세 화면 AppBar에 아이템 이름 표시

---

### 🎉 v1.0.0 <small style="color:#6b7280;">2025-01</small>

**첫 정식 출시 버전**

#### 📦 종이(Paper) 시스템
- 문서 생성에 필요한 재화 시스템 도입
- 신규 가입 시 종이 10장 지급
- Google/Apple 계정 연동 시 각 10장 추가 지급
- 상점에서 종이 구매 가능

#### 📄 문서 생성
- 종이를 사용하여 문서 생성
- 제목, 내용, 이미지 첨부
- 개시일자/유효기간 설정 가능

#### 🏷️ 뱃지 시스템
- 고유 도메인명 각인 기능
- 각인한 도메인명이 사용자 신원(Identity)으로 사용
- 장착/해제로 활성화 관리
- 128x128 이미지 첨부 옵션

#### 🔖 스탬프 시스템
- 템플릿 생성 기능
- 단독로그/공유로그 모드 선택
- 템플릿 복제 기능
- 개시일자/유효기간 설정

#### 📝 로그 기능
- 문서/스탬프에 로그 기록
- 단독로그: 개인 전용 기록
- 공유로그: 복제본 소유자들과 공유
- 키:값 형식 정보 카드 지원

#### 🎨 잉크 시스템
- 앱 테마 색상 변경 기능
- 블랙 잉크, 골드 잉크

#### 🤝 아이템 전송
- 이메일 주소로 아이템 전송
- QR코드 스캔으로 이메일 자동 입력
- 받은 아이템 수락 또는 반송
- 여러 아이템 동시 전송

#### 📂 파티션
- 아이템 그룹화 기능
- 기기별 로컬 저장

#### 🔍 검색 기능
- 실시간 검색 필터링
- 검색어 필터 저장
- 최근 검색어 자동 저장 (최대 5개)

#### 🛒 상점
- 종이, 스탬프, 뱃지, 잉크 구매
- 모든 플랫폼에서 이용 가능

#### 🔐 계정
- Google, Apple, 이메일 로그인
- 소셜 계정 연동으로 종이 추가 획득

#### 🌍 다국어 지원
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

#### 📱 지원 플랫폼
- iOS (iPhone, iPad)
- Android (스마트폰, 태블릿)
- macOS, Windows

---

> 💡 **새로운 기능을 제안해주세요!** [건의하기](/inventory/suggest/)에서 아이디어를 공유해주시면 적극 검토하겠습니다.

<style>
h2 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: .5rem; margin-bottom: 1.5rem; }
h3 { color: #374151; margin-top: 2rem; margin-bottom: 1rem; }
h4 { color: #4b5563; font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: .75rem; }
ul { line-height: 1.8; }
li { margin-bottom: .5rem; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0; }
blockquote { background: #f9fafb; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 4px; }
small { font-size: .85rem; }
</style>
