---
layout: inventory
title: API 문서
permalink: /inventory/api-document/
lang: ko
translations:
  ko: /inventory/api-document/
  en: /inventory/api-document/en/
  ja: /inventory/api-document/ja/
  de: /inventory/api-document/de/
  fr: /inventory/api-document/fr/
  es: /inventory/api-document/es/
  pt: /inventory/api-document/pt/
  zh: /inventory/api-document/zh/
---

# API 문서

인벤토리 앱의 외부 API를 사용하여 프로그래밍 방식으로 데이터에 접근할 수 있습니다.

---

## 개요

### API란?

외부 API는 인벤토리 앱의 데이터를 외부 프로그램에서 접근할 수 있게 해주는 인터페이스입니다.

### 사용 사례

- **자동화**: 스크립트를 통한 대량 문서 처리
- **서드파티 연동**: 다른 서비스와의 데이터 연동
- **대량 처리**: 템플릿 일괄 생성 및 공유

---

## 시작하기

### API 키 발급

API를 사용하려면 먼저 API 키가 필요합니다.

1. 인벤토리 앱에서 **프로필 화면**으로 이동합니다
2. **API 키** 섹션을 찾습니다
3. **키 생성** 버튼을 탭합니다
4. 생성된 API 키가 화면에 표시됩니다

> **중요**: API 키는 생성 시 **한 번만** 표시됩니다. 반드시 안전한 곳에 복사하여 보관하세요. 분실 시 재발급이 필요합니다.

### API 키 형식

API 키는 다음과 같은 형식입니다:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- `inv_` 프리픽스로 시작
- 약 50자의 Base64URL 인코딩 문자열

### API 키 관리

- **재생성**: 기존 키를 폐기하고 새 키를 발급받습니다
- **삭제**: API 키를 완전히 삭제합니다 (API 사용 불가)

---

## 인증

모든 API 요청에는 `Authorization` 헤더가 필요합니다.

### Bearer 토큰

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 요청 예시

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Rate Limiting

API 사용량에는 제한이 있습니다.

| 제한 유형 | 한도 | 설명 |
|-----------|------|------|
| 분당 요청 | 60회 | 과도한 요청 방지 |
| 월간 요청 | 계정별 상이 | 계약에 따라 결정 |

### 제한 초과 시

- HTTP 상태 코드 `429 Too Many Requests` 반환
- 잠시 후 다시 시도하세요

---

## API 엔드포인트

### 기본 URL

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### 읽기 API (GET)

| 엔드포인트 | 설명 |
|------------|------|
| `GET /items` | 본인 아이템 목록 조회 |
| `GET /items/{token}` | 아이템 상세 조회 |
| `GET /templates` | 본인 템플릿 목록 조회 |
| `GET /templates/{token}` | 템플릿 상세 조회 |
| `GET /templates/shared` | 공유 중인 템플릿 목록 |
| `GET /user/stats` | 사용자 통계 조회 |

### 쓰기 API (POST)

| 엔드포인트 | 설명 |
|------------|------|
| `POST /templates` | 새 템플릿 생성 |
| `POST /templates/{token}/share` | 템플릿 공유 |
| `POST /templates/revoke` | 공유 회수 |
| `POST /templates/{token}/send` | 템플릿 전송 |
| `POST /templates/{token}/check-ownership` | 복제 아이템 소유 여부 확인 |

---

## 상세 API 명세

<details>
<summary><h3>GET /items - 아이템 목록</h3></summary>
<div class="manual-content" markdown="1">

본인 소유의 아이템(문서) 목록을 조회합니다.

#### 요청

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### 쿼리 파라미터

| 파라미터 | 타입 | 기본값 | 설명 |
|----------|------|--------|------|
| page | number | 1 | 페이지 번호 |
| pageSize | number | 20 | 페이지당 항목 수 (최대 100) |
| status | string | "active" | 상태 필터 (active, pending) |
| type | string | - | 타입 필터 (paper, stamp) |

#### 응답

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "token": "암호화된_아이템_ID",
        "title": "아이템 제목",
        "content": "아이템 내용",
        "type": "paper",
        "status": "active",
        "imageUrl": "https://...",
        "createdAt": "2025-01-01T00:00:00Z",
        "updatedAt": "2025-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "pageSize": 20,
      "totalItems": 50,
      "totalPages": 3
    }
  }
}
```

</div>
</details>

<details>
<summary><h3>GET /items/{token} - 아이템 상세</h3></summary>
<div class="manual-content" markdown="1">

특정 아이템의 상세 정보를 조회합니다.

#### 요청

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items/{token}"
```

#### 응답

```json
{
  "success": true,
  "data": {
    "token": "암호화된_아이템_ID",
    "title": "아이템 제목",
    "content": "아이템 내용",
    "type": "paper",
    "status": "active",
    "imageUrl": "https://...",
    "keywords": ["키:값", "태그:예시"],
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>GET /templates - 템플릿 목록</h3></summary>
<div class="manual-content" markdown="1">

본인 소유의 템플릿(스탬프) 목록을 조회합니다.

#### 요청

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates?page=1&pageSize=20"
```

#### 쿼리 파라미터

| 파라미터 | 타입 | 기본값 | 설명 |
|----------|------|--------|------|
| page | number | 1 | 페이지 번호 |
| pageSize | number | 20 | 페이지당 항목 수 (최대 100) |

#### 응답

```json
{
  "success": true,
  "data": {
    "templates": [
      {
        "token": "암호화된_템플릿_ID",
        "title": "템플릿 제목",
        "content": "템플릿 내용",
        "imageUrl": "https://...",
        "commentMode": "independent",
        "allowComments": true,
        "logPermission": "owner",
        "keywordPermission": "owner",
        "allowEdit": false,
        "isSharing": false,
        "createdAt": "2025-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "pageSize": 20,
      "totalItems": 10,
      "totalPages": 1
    }
  }
}
```

</div>
</details>

<details>
<summary><h3>GET /templates/shared - 공유 중인 템플릿</h3></summary>
<div class="manual-content" markdown="1">

현재 공유 중인 템플릿 목록을 조회합니다.

#### 요청

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/shared"
```

#### 응답

```json
{
  "success": true,
  "data": {
    "sharedTemplates": [
      {
        "token": "암호화된_템플릿_ID",
        "shareToken": "암호화된_공유_ID",
        "title": "템플릿 제목",
        "tags": ["TAG1", "TAG2"],
        "expiresAt": "2025-01-02T00:00:00Z",
        "copyCount": 5
      }
    ]
  }
}
```

</div>
</details>

<details>
<summary><h3>GET /user/stats - 사용자 통계</h3></summary>
<div class="manual-content" markdown="1">

본인의 사용 통계를 조회합니다.

#### 요청

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/user/stats"
```

#### 응답

```json
{
  "success": true,
  "data": {
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00Z",
    "items": {
      "total": 50,
      "paper": 30,
      "stamp": 20
    },
    "api": {
      "enabled": true,
      "monthlyLimit": 1000,
      "monthlyUsed": 150,
      "lastUsedAt": "2025-01-01T12:00:00Z"
    }
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates - 템플릿 생성</h3></summary>
<div class="manual-content" markdown="1">

새로운 템플릿(스탬프)을 생성합니다.

#### 요청

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "imageUrl": "https://example.com/image.png",
       "title": "템플릿 제목",
       "content": "템플릿 내용",
        "commentMode": "independent",
        "logPermission": "owner",
        "keywordPermission": "owner",
        "allowEdit": true,
        "keywords": ["품명:노트북", "가격:$1500000KRW$"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates"
```

#### 요청 본문

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| imageUrl | string | O | 이미지 URL (HTTPS 권장) |
| title | string | O | 제목 (최대 32자) |
| content | string | O | 내용 (최대 1024자) |
| commentMode | string | X | 댓글 모드: "independent" 또는 "shared" |
| ~~allowComments~~ | ~~boolean~~ | ~~X~~ | ~~로그 추가 가능 여부~~ (deprecated: `logPermission`으로 대체) |
| logPermission | string | X | 로그 권한: "owner" \| "author" \| "none" (기본값: "owner") |
| keywordPermission | string | X | 키워드 권한: "owner" \| "author" \| "none" (기본값: "owner") |
| allowEdit | boolean | X | 편집 가능 여부 (기본값: true) |
| keywords | string[] | X | 키워드 배열 (최대 128개) |
| publishDate | string | X | 게시 시작일 (ISO 8601) |
| validUntil | string | X | 유효 기간 (ISO 8601) |

#### 키워드 형식

키워드는 반드시 `키:값` 형식이어야 합니다.

| 타입 | 형식 | 예시 |
|------|------|------|
| 일반 | `키:값` | `품명:펜` |
| 날짜 | `키:@YYYY-MM-DD@` | `시작일:@2025-01-15@` |
| 전화 | `키:#전화번호#` | `연락처:#+82 10-1234-5678#` |
| 위치 | `키:%주소%` | `장소:%서울시 강남구%` |
| 금액 | `키:$금액통화$` | `가격:$50000KRW$` |

#### 제한 사항

- 키 길이: 최대 8글자
- 키워드 총 길이: 최대 256자
- 키워드 개수: 최대 128개

#### 응답

```json
{
  "success": true,
  "data": {
    "token": "암호화된_템플릿_ID",
    "title": "템플릿 제목",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/share - 템플릿 공유</h3></summary>
<div class="manual-content" markdown="1">

템플릿을 공유하여 다른 사용자가 검색할 수 있게 합니다.

#### 요청

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "durationMinutes": 1440,
       "tags": ["TAG1", "TAG2"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/share"
```

#### 요청 본문

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| durationMinutes | number | O | 공유 기간 (분). 60-43200 또는 0(무기한) |
| tags | string[] | O | 검색 태그 (1-16개, 자동 대문자 변환) |

#### 공유 기간

| 값 | 의미 |
|----|------|
| 60 | 1시간 |
| 1440 | 1일 (24시간) |
| 10080 | 1주일 |
| 43200 | 30일 (최대) |
| 0 | 무기한 |

#### 응답

```json
{
  "success": true,
  "data": {
    "shareToken": "암호화된_공유_ID",
    "expiresAt": "2025-01-02T00:00:00Z",
    "tags": ["TAG1", "TAG2"]
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/revoke - 공유 회수</h3></summary>
<div class="manual-content" markdown="1">

공유 중인 템플릿의 공유를 취소합니다.

#### 요청

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "shareToken": "암호화된_공유_ID"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/revoke"
```

#### 요청 본문

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| shareToken | string | O | 공유 시 발급받은 shareToken |

#### 응답

```json
{
  "success": true,
  "data": {
    "message": "Share revoked successfully"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/send - 템플릿 전송</h3></summary>
<div class="manual-content" markdown="1">

템플릿을 복제하여 다른 사용자에게 전송합니다.

#### 요청

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "recipientEmail": "recipient@example.com",
       "message": "선물입니다!",
       "keywords": ["날짜:2025-01-15", "금액:50000"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/send"
```

#### 요청 본문

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| recipientEmail | string | O | 수신자 이메일 |
| message | string | X | 전송 메시지 (최대 200자) |
| keywords | string[] | X | 추가/오버라이드할 키워드 배열 |

#### 키워드 병합 규칙

`keywords` 파라미터를 사용하면 템플릿의 기본 키워드를 오버라이드하거나 새 키워드를 추가할 수 있습니다.

| 상황 | 동작 |
|------|------|
| 같은 키가 있으면 | API 값으로 **오버라이드** |
| 새로운 키면 | 키워드 목록에 **추가** |

**예시:**
- 템플릿 키워드: `["날짜:@date@", "가격:0"]`
- API 키워드: `["날짜:2025-01-15", "이름:홍길동"]`
- **결과**: `["날짜:2025-01-15", "가격:0", "이름:홍길동"]`

#### 응답

```json
{
  "success": true,
  "data": {
    "itemToken": "암호화된_아이템_ID",
    "recipientEmail": "recipient@example.com",
    "status": "pending"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/check-ownership - 복제 아이템 소유 확인</h3></summary>
<div class="manual-content" markdown="1">

특정 사용자가 해당 템플릿으로 생성된 복제 아이템을 소유하는지 확인합니다.

> **보안**: 본인이 소유한 템플릿에 대해서만 조회할 수 있습니다. 다른 사용자의 템플릿으로는 조회할 수 없습니다.

#### 요청

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "user@example.com",
       "keywordKeys": ["날짜", "금액"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/check-ownership"
```

#### 요청 본문

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| email | string | O | 조회할 사용자의 이메일 |
| keywordKeys | string[] | X | 조회할 키워드 키 목록 |

#### 응답 (소유하는 경우)

```json
{
  "success": true,
  "data": {
    "hasItem": true,
    "itemTokens": ["암호화된_아이템_ID_1", "암호화된_아이템_ID_2"],
    "keywords": {
      "날짜": "2025-01-15",
      "금액": "50000"
    }
  }
}
```

#### 응답 (소유하지 않는 경우)

```json
{
  "success": true,
  "data": {
    "hasItem": false
  }
}
```

#### 응답 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| hasItem | boolean | 소유 여부 |
| itemTokens | string[] | 소유한 아이템 토큰 목록 (소유 시에만) |
| keywords | object | 요청한 키워드의 값들 (요청 시에만) |

#### 사용 예시

쿠폰/티켓 시스템에서 특정 사용자의 소유 여부 및 사용 상태 확인:

```bash
# 쿠폰 발급 여부 확인
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{"email": "customer@example.com", "keywordKeys": ["발급일", "사용여부"]}' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{쿠폰템플릿토큰}/check-ownership"
```

</div>
</details>

---

## 에러 코드

API 요청 실패 시 다음 형식으로 에러가 반환됩니다:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "에러 설명"
  }
}
```

### 에러 코드 목록

| 코드 | HTTP 상태 | 설명 |
|------|-----------|------|
| INVALID_API_KEY | 401 | 잘못된 API 키 |
| API_KEY_EXPIRED | 401 | 만료된 API 키 |
| API_DISABLED | 403 | API 비활성화됨 |
| RATE_LIMIT_EXCEEDED | 429 | 요청 한도 초과 |
| SCOPE_DENIED | 403 | 권한 부족 |
| VALIDATION_ERROR | 400 | 입력값 오류 |
| INVALID_TOKEN | 400 | 잘못된 토큰 |
| NOT_FOUND | 404 | 리소스 없음 |
| FORBIDDEN | 403 | 접근 거부 (소유권 없음) |
| RECIPIENT_NOT_FOUND | 404 | 수신자를 찾을 수 없음 |
| INVALID_IMAGE | 400 | 이미지 URL 오류 |
| ALREADY_SHARED | 400 | 이미 공유 중인 템플릿 |
| NOT_SHARED | 400 | 공유 중이 아닌 템플릿 |

---

## 보안 권장사항

1. **API 키 보호**: API 키를 공개 저장소나 클라이언트 코드에 노출하지 마세요
2. **HTTPS 사용**: 모든 요청은 HTTPS로 전송됩니다
3. **키 순환**: 주기적으로 API 키를 재발급하세요
4. **최소 권한**: 필요한 작업만 수행하세요

---

## 문의

API 사용에 문제가 있으시면 [건의하기](/inventory/suggest/) 페이지를 통해 연락해 주세요.
