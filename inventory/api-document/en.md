---
layout: inventory
title: API Documentation
permalink: /inventory/api-document/en/
lang: en
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

# API Documentation

Access your Inventory app data programmatically through our external API.

---

## Overview

### What is the API?

The external API provides an interface to access Inventory app data from external programs.

### Use Cases

- **Automation**: Batch document processing through scripts
- **Third-party Integration**: Data synchronization with other services
- **Bulk Operations**: Mass template creation and sharing

---

## Getting Started

### Obtaining an API Key

To use the API, you first need an API key.

1. Open the **Profile** screen in the Inventory app
2. Find the **API Key** section
3. Tap the **Generate Key** button
4. Your API key will be displayed on screen

> **Important**: The API key is shown **only once** when generated. Make sure to copy and store it in a safe place. You will need to regenerate if lost.

### API Key Format

API keys follow this format:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Starts with `inv_` prefix
- Approximately 50-character Base64URL encoded string

### Managing API Keys

- **Regenerate**: Revokes the existing key and issues a new one
- **Delete**: Completely removes the API key (API access disabled)

---

## Authentication

All API requests require an `Authorization` header.

### Bearer Token

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Request Example

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Rate Limiting

API usage is subject to limits.

| Limit Type | Threshold | Description |
|------------|-----------|-------------|
| Per Minute | 60 requests | Prevents excessive requests |
| Monthly | Varies by account | Determined by contract |

### When Limit is Exceeded

- HTTP status code `429 Too Many Requests` is returned
- Please wait and try again later

---

## API Endpoints

### Base URL

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### Read APIs (GET)

| Endpoint | Description |
|----------|-------------|
| `GET /items` | List your items |
| `GET /items/{token}` | Get item details |
| `GET /templates` | List your templates |
| `GET /templates/{token}` | Get template details |
| `GET /templates/shared` | List shared templates |
| `GET /user/stats` | Get user statistics |

### Write APIs (POST)

| Endpoint | Description |
|----------|-------------|
| `POST /templates` | Create new template |
| `POST /templates/{token}/share` | Share template |
| `POST /templates/revoke` | Revoke share |
| `POST /templates/{token}/send` | Send template |
| `POST /templates/{token}/check-ownership` | Check cloned item ownership |

---

## Detailed API Reference

<details>
<summary><h3>GET /items - List Items</h3></summary>
<div class="manual-content" markdown="1">

Retrieves a list of items (documents) you own.

#### Request

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | number | 1 | Page number |
| pageSize | number | 20 | Items per page (max 100) |
| status | string | "active" | Status filter (active, pending) |
| type | string | - | Type filter (paper, stamp) |

#### Response

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "token": "encrypted_item_id",
        "title": "Item Title",
        "content": "Item Content",
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
<summary><h3>GET /items/{token} - Item Details</h3></summary>
<div class="manual-content" markdown="1">

Retrieves detailed information about a specific item.

#### Request

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items/{token}"
```

#### Response

```json
{
  "success": true,
  "data": {
    "token": "encrypted_item_id",
    "title": "Item Title",
    "content": "Item Content",
    "type": "paper",
    "status": "active",
    "imageUrl": "https://...",
    "keywords": ["key:value", "tag:example"],
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>GET /templates - List Templates</h3></summary>
<div class="manual-content" markdown="1">

Retrieves a list of templates (stamps) you own.

#### Request

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates?page=1&pageSize=20"
```

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | number | 1 | Page number |
| pageSize | number | 20 | Items per page (max 100) |

#### Response

```json
{
  "success": true,
  "data": {
    "templates": [
      {
        "token": "encrypted_template_id",
        "title": "Template Title",
        "content": "Template Content",
        "imageUrl": "https://...",
        "commentMode": "independent",
        "allowComments": true,
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
<summary><h3>GET /templates/shared - Shared Templates</h3></summary>
<div class="manual-content" markdown="1">

Retrieves a list of templates you are currently sharing.

#### Request

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/shared"
```

#### Response

```json
{
  "success": true,
  "data": {
    "sharedTemplates": [
      {
        "token": "encrypted_template_id",
        "shareToken": "encrypted_share_id",
        "title": "Template Title",
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
<summary><h3>GET /user/stats - User Statistics</h3></summary>
<div class="manual-content" markdown="1">

Retrieves your usage statistics.

#### Request

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/user/stats"
```

#### Response

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
<summary><h3>POST /templates - Create Template</h3></summary>
<div class="manual-content" markdown="1">

Creates a new template (stamp).

#### Request

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "imageUrl": "https://example.com/image.png",
       "title": "Template Title",
       "content": "Template Content",
       "commentMode": "independent",
       "allowComments": true,
       "allowEdit": true,
       "keywords": ["product:laptop", "price:$1500000KRW$"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates"
```

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| imageUrl | string | Yes | Image URL (HTTPS recommended) |
| title | string | Yes | Title (max 32 characters) |
| content | string | Yes | Content (max 1024 characters) |
| commentMode | string | No | Comment mode: "independent" or "shared" |
| allowComments | boolean | No | Allow adding logs (default: true) |
| allowEdit | boolean | No | Allow editing (default: true) |
| keywords | string[] | No | Keyword array (max 128) |
| publishDate | string | No | Publish start date (ISO 8601) |
| validUntil | string | No | Valid until date (ISO 8601) |

#### Keyword Format

Keywords must follow the `key:value` format.

| Type | Format | Example |
|------|--------|---------|
| General | `key:value` | `product:pen` |
| Date | `key:@YYYY-MM-DD@` | `start:@2025-01-15@` |
| Phone | `key:#phone#` | `contact:#+82 10-1234-5678#` |
| Location | `key:%address%` | `place:%Seoul, Gangnam%` |
| Amount | `key:$amountCurrency$` | `price:$50000KRW$` |

#### Restrictions

- Key length: max 8 characters
- Keyword total length: max 256 characters
- Keyword count: max 128

#### Response

```json
{
  "success": true,
  "data": {
    "token": "encrypted_template_id",
    "title": "Template Title",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/share - Share Template</h3></summary>
<div class="manual-content" markdown="1">

Shares a template so other users can discover it.

#### Request

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

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| durationMinutes | number | Yes | Share duration (minutes). 60-43200 or 0 (unlimited) |
| tags | string[] | Yes | Search tags (1-16, auto-uppercased) |

#### Share Duration

| Value | Meaning |
|-------|---------|
| 60 | 1 hour |
| 1440 | 1 day (24 hours) |
| 10080 | 1 week |
| 43200 | 30 days (maximum) |
| 0 | Unlimited |

#### Response

```json
{
  "success": true,
  "data": {
    "shareToken": "encrypted_share_id",
    "expiresAt": "2025-01-02T00:00:00Z",
    "tags": ["TAG1", "TAG2"]
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/revoke - Revoke Share</h3></summary>
<div class="manual-content" markdown="1">

Cancels sharing of a template that is currently being shared.

#### Request

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "shareToken": "encrypted_share_id"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/revoke"
```

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| shareToken | string | Yes | The shareToken received when sharing |

#### Response

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
<summary><h3>POST /templates/{token}/send - Send Template</h3></summary>
<div class="manual-content" markdown="1">

Clones a template and sends it to another user.

#### Request

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "recipientEmail": "recipient@example.com",
       "message": "A gift for you!",
       "keywords": ["date:2025-01-15", "amount:50000"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/send"
```

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| recipientEmail | string | Yes | Recipient's email |
| message | string | No | Message (max 200 characters) |
| keywords | string[] | X | Keywords to add/override |

#### Keyword Merge Rules

The `keywords` parameter allows you to override template default keywords or add new ones.

| Situation | Behavior |
|-----------|----------|
| Same key exists | **Override** with API value |
| New key | **Add** to keyword list |

**Example:**
- Template keywords: `["date:@date@", "price:0"]`
- API keywords: `["date:2025-01-15", "name:John"]`
- **Result**: `["date:2025-01-15", "price:0", "name:John"]`

#### Response

```json
{
  "success": true,
  "data": {
    "itemToken": "encrypted_item_id",
    "recipientEmail": "recipient@example.com",
    "status": "sent"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/check-ownership - Check Cloned Item Ownership</h3></summary>
<div class="manual-content" markdown="1">

Check if a specific user owns items cloned from this template.

> **Security**: You can only query templates you own. You cannot query other users' templates.

#### Request

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "user@example.com",
       "keywordKeys": ["date", "amount"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/check-ownership"
```

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | O | Target user's email |
| keywordKeys | string[] | X | Keyword keys to retrieve |

#### Response (Has Item)

```json
{
  "success": true,
  "data": {
    "hasItem": true,
    "itemTokens": ["encrypted_item_id_1", "encrypted_item_id_2"],
    "keywords": {
      "date": "2025-01-15",
      "amount": "50000"
    }
  }
}
```

#### Response (No Item)

```json
{
  "success": true,
  "data": {
    "hasItem": false
  }
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| hasItem | boolean | Ownership status |
| itemTokens | string[] | Owned item tokens (only if owned) |
| keywords | object | Requested keyword values (only if requested) |

#### Use Case

Check coupon/ticket ownership and usage status:

```bash
# Check if coupon was issued
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{"email": "customer@example.com", "keywordKeys": ["issueDate", "used"]}' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{coupon_template_token}/check-ownership"
```

</div>
</details>

---

## Error Codes

When an API request fails, errors are returned in this format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

### Error Code List

| Code | HTTP Status | Description |
|------|-------------|-------------|
| INVALID_API_KEY | 401 | Invalid API key |
| API_KEY_EXPIRED | 401 | Expired API key |
| API_DISABLED | 403 | API disabled |
| RATE_LIMIT_EXCEEDED | 429 | Request limit exceeded |
| SCOPE_DENIED | 403 | Insufficient permissions |
| VALIDATION_ERROR | 400 | Invalid input |
| INVALID_TOKEN | 400 | Invalid token |
| NOT_FOUND | 404 | Resource not found |
| FORBIDDEN | 403 | Access denied (not owner) |
| RECIPIENT_NOT_FOUND | 404 | Recipient not found |
| INVALID_IMAGE | 400 | Image URL error |
| ALREADY_SHARED | 400 | Template already being shared |
| NOT_SHARED | 400 | Template not currently shared |

---

## Security Recommendations

1. **Protect API Keys**: Never expose API keys in public repositories or client code
2. **Use HTTPS**: All requests are transmitted via HTTPS
3. **Key Rotation**: Regenerate API keys periodically
4. **Least Privilege**: Only perform necessary operations

---

## Contact

If you have issues using the API, please contact us through the [Suggest](/inventory/suggest/en/) page.
