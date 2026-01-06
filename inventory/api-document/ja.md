---
layout: inventory
title: APIドキュメント
permalink: /inventory/api-document/ja/
lang: ja
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

# APIドキュメント

外部APIを使用して、インベントリアプリのデータにプログラムからアクセスできます。

---

## 概要

### APIとは？

外部APIは、外部プログラムからインベントリアプリのデータにアクセスするためのインターフェースです。

### ユースケース

- **自動化**: スクリプトによる大量ドキュメント処理
- **サードパーティ連携**: 他サービスとのデータ同期
- **一括処理**: テンプレートの一括作成と共有

---

## はじめに

### APIキーの取得

APIを使用するには、まずAPIキーが必要です。

1. インベントリアプリで**プロフィール**画面を開きます
2. **APIキー**セクションを見つけます
3. **キーを生成**ボタンをタップします
4. 生成されたAPIキーが画面に表示されます

> **重要**: APIキーは生成時に**一度だけ**表示されます。必ず安全な場所にコピーして保管してください。紛失した場合は再発行が必要です。

### APIキーの形式

APIキーは以下の形式です：

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- `inv_` プレフィックスで始まる
- 約50文字のBase64URLエンコード文字列

### APIキーの管理

- **再生成**: 既存のキーを無効にし、新しいキーを発行します
- **削除**: APIキーを完全に削除します（APIアクセス不可）

---

## 認証

すべてのAPIリクエストには`Authorization`ヘッダーが必要です。

### Bearerトークン

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### リクエスト例

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## レート制限

API使用には制限があります。

| 制限タイプ | 上限 | 説明 |
|-----------|------|------|
| 分間リクエスト | 60回 | 過度なリクエストを防止 |
| 月間リクエスト | アカウント別 | 契約により決定 |

### 制限超過時

- HTTPステータスコード `429 Too Many Requests` が返されます
- しばらく待ってから再試行してください

---

## APIエンドポイント

### ベースURL

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### 読み取りAPI (GET)

| エンドポイント | 説明 |
|--------------|------|
| `GET /items` | アイテム一覧を取得 |
| `GET /items/{token}` | アイテム詳細を取得 |
| `GET /templates` | テンプレート一覧を取得 |
| `GET /templates/{token}` | テンプレート詳細を取得 |
| `GET /templates/shared` | 共有中のテンプレート一覧 |
| `GET /user/stats` | ユーザー統計を取得 |

### 書き込みAPI (POST)

| エンドポイント | 説明 |
|--------------|------|
| `POST /templates` | 新規テンプレート作成 |
| `POST /templates/{token}/share` | テンプレート共有 |
| `POST /templates/revoke` | 共有解除 |
| `POST /templates/{token}/send` | テンプレート送信 |
| `POST /templates/{token}/check-ownership` | 複製アイテムの所有確認 |

---

## 詳細API仕様

<details>
<summary><h3>GET /items - アイテム一覧</h3></summary>
<div class="manual-content" markdown="1">

所有するアイテム（ドキュメント）の一覧を取得します。

#### リクエスト

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### クエリパラメータ

| パラメータ | 型 | デフォルト | 説明 |
|-----------|-----|---------|------|
| page | number | 1 | ページ番号 |
| pageSize | number | 20 | ページあたりの件数（最大100） |
| status | string | "active" | ステータスフィルター（active, pending） |
| type | string | - | タイプフィルター（paper, stamp） |

#### レスポンス

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "token": "暗号化されたアイテムID",
        "title": "アイテムタイトル",
        "content": "アイテム内容",
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
<summary><h3>GET /items/{token} - アイテム詳細</h3></summary>
<div class="manual-content" markdown="1">

特定のアイテムの詳細情報を取得します。

#### リクエスト

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items/{token}"
```

#### レスポンス

```json
{
  "success": true,
  "data": {
    "token": "暗号化されたアイテムID",
    "title": "アイテムタイトル",
    "content": "アイテム内容",
    "type": "paper",
    "status": "active",
    "imageUrl": "https://...",
    "keywords": ["キー:値", "タグ:例"],
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>GET /templates - テンプレート一覧</h3></summary>
<div class="manual-content" markdown="1">

所有するテンプレート（スタンプ）の一覧を取得します。

#### リクエスト

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates?page=1&pageSize=20"
```

#### クエリパラメータ

| パラメータ | 型 | デフォルト | 説明 |
|-----------|-----|---------|------|
| page | number | 1 | ページ番号 |
| pageSize | number | 20 | ページあたりの件数（最大100） |

#### レスポンス

```json
{
  "success": true,
  "data": {
    "templates": [
      {
        "token": "暗号化されたテンプレートID",
        "title": "テンプレートタイトル",
        "content": "テンプレート内容",
        "imageUrl": "https://...",
        "commentMode": "independent",
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
<summary><h3>GET /templates/shared - 共有中のテンプレート</h3></summary>
<div class="manual-content" markdown="1">

現在共有中のテンプレート一覧を取得します。

#### リクエスト

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/shared"
```

#### レスポンス

```json
{
  "success": true,
  "data": {
    "sharedTemplates": [
      {
        "token": "暗号化されたテンプレートID",
        "shareToken": "暗号化された共有ID",
        "title": "テンプレートタイトル",
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
<summary><h3>GET /user/stats - ユーザー統計</h3></summary>
<div class="manual-content" markdown="1">

使用統計を取得します。

#### リクエスト

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/user/stats"
```

#### レスポンス

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
<summary><h3>POST /templates - テンプレート作成</h3></summary>
<div class="manual-content" markdown="1">

新しいテンプレート（スタンプ）を作成します。

#### リクエスト

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "imageUrl": "https://example.com/image.png",
       "title": "テンプレートタイトル",
       "content": "テンプレート内容",
       "commentMode": "independent",
       "keywords": ["品名:ノートPC", "価格:$1500000JPY$"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates"
```

#### リクエストボディ

| フィールド | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| imageUrl | string | ○ | 画像URL（HTTPS推奨） |
| title | string | ○ | タイトル（最大32文字） |
| content | string | ○ | 内容（最大1024文字） |
| commentMode | string | - | コメントモード: "independent" または "shared" |
| keywords | string[] | - | キーワード配列（最大128個） |
| publishDate | string | - | 公開開始日（ISO 8601） |
| validUntil | string | - | 有効期限（ISO 8601） |

#### キーワード形式

キーワードは必ず `キー:値` 形式でなければなりません。

| タイプ | 形式 | 例 |
|--------|------|-----|
| 一般 | `キー:値` | `品名:ペン` |
| 日付 | `キー:@YYYY-MM-DD@` | `開始日:@2025-01-15@` |
| 電話 | `キー:#電話番号#` | `連絡先:#+81 90-1234-5678#` |
| 場所 | `キー:%住所%` | `場所:%東京都渋谷区%` |
| 金額 | `キー:$金額通貨$` | `価格:$50000JPY$` |

#### 制限事項

- キーの長さ: 最大8文字
- キーワード全体の長さ: 最大256文字
- キーワード数: 最大128個

#### レスポンス

```json
{
  "success": true,
  "data": {
    "token": "暗号化されたテンプレートID",
    "title": "テンプレートタイトル",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/share - テンプレート共有</h3></summary>
<div class="manual-content" markdown="1">

テンプレートを共有し、他のユーザーが検索できるようにします。

#### リクエスト

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

#### リクエストボディ

| フィールド | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| durationMinutes | number | ○ | 共有期間（分）。60-43200 または 0（無期限） |
| tags | string[] | ○ | 検索タグ（1-16個、自動大文字変換） |

#### 共有期間

| 値 | 意味 |
|----|------|
| 60 | 1時間 |
| 1440 | 1日（24時間） |
| 10080 | 1週間 |
| 43200 | 30日（最大） |
| 0 | 無期限 |

#### レスポンス

```json
{
  "success": true,
  "data": {
    "shareToken": "暗号化された共有ID",
    "expiresAt": "2025-01-02T00:00:00Z",
    "tags": ["TAG1", "TAG2"]
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/revoke - 共有解除</h3></summary>
<div class="manual-content" markdown="1">

共有中のテンプレートの共有を解除します。

#### リクエスト

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "shareToken": "暗号化された共有ID"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/revoke"
```

#### リクエストボディ

| フィールド | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| shareToken | string | ○ | 共有時に発行されたshareToken |

#### レスポンス

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
<summary><h3>POST /templates/{token}/send - テンプレート送信</h3></summary>
<div class="manual-content" markdown="1">

テンプレートを複製して他のユーザーに送信します。

#### リクエスト

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "recipientEmail": "recipient@example.com",
       "message": "プレゼントです！",
       "keywords": ["日付:2025-01-15", "金額:50000"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/send"
```

#### リクエストボディ

| フィールド | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| recipientEmail | string | ○ | 受信者のメールアドレス |
| message | string | - | メッセージ（最大200文字） |
| keywords | string[] | × | 追加/上書きするキーワード配列 |

#### キーワードマージルール

`keywords`パラメータを使用すると、テンプレートのデフォルトキーワードを上書きまたは新しいキーワードを追加できます。

| 状況 | 動作 |
|------|------|
| 同じキーがある場合 | API値で**上書き** |
| 新しいキーの場合 | キーワードリストに**追加** |

**例:**
- テンプレートキーワード: `["日付:@date@", "価格:0"]`
- APIキーワード: `["日付:2025-01-15", "名前:田中"]`
- **結果**: `["日付:2025-01-15", "価格:0", "名前:田中"]`

#### レスポンス

```json
{
  "success": true,
  "data": {
    "itemToken": "暗号化されたアイテムID",
    "recipientEmail": "recipient@example.com",
    "status": "sent"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/check-ownership - 複製アイテムの所有確認</h3></summary>
<div class="manual-content" markdown="1">

特定のユーザーがこのテンプレートから複製されたアイテムを所有しているか確認します。

**セキュリティ**: 自分が所有するテンプレートのみクエリできます。他のユーザーのテンプレートはクエリできません。

#### リクエスト

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "user@example.com",
       "keywordKeys": ["日付", "金額"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/check-ownership"
```

#### リクエストボディ

| フィールド | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| email | string | ○ | 確認するユーザーのメール |
| keywordKeys | string[] | × | 取得するキーワードキーの一覧 |

#### レスポンス

```json
{
  "success": true,
  "data": {
    "hasItem": true,
    "itemTokens": ["token1", "token2"],
    "keywords": {
      "日付": "2025-01-15",
      "金額": "50000"
    }
  }
}
```

#### レスポンスフィールド

| フィールド | 型 | 説明 |
|-----------|-----|------|
| hasItem | boolean | 所有状況 |
| itemTokens | string[] | 所有アイテムトークン（所有時のみ） |
| keywords | object | リクエストされたキーワード値（リクエスト時のみ） |

</div>
</details>

---

## エラーコード

APIリクエストが失敗した場合、以下の形式でエラーが返されます：

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "エラーの説明"
  }
}
```

### エラーコード一覧

| コード | HTTPステータス | 説明 |
|--------|--------------|------|
| INVALID_API_KEY | 401 | 無効なAPIキー |
| API_KEY_EXPIRED | 401 | 期限切れのAPIキー |
| API_DISABLED | 403 | API無効 |
| RATE_LIMIT_EXCEEDED | 429 | リクエスト制限超過 |
| SCOPE_DENIED | 403 | 権限不足 |
| VALIDATION_ERROR | 400 | 入力値エラー |
| INVALID_TOKEN | 400 | 無効なトークン |
| NOT_FOUND | 404 | リソースが見つからない |
| FORBIDDEN | 403 | アクセス拒否（所有権なし） |
| RECIPIENT_NOT_FOUND | 404 | 受信者が見つからない |
| INVALID_IMAGE | 400 | 画像URLエラー |
| ALREADY_SHARED | 400 | すでに共有中のテンプレート |
| NOT_SHARED | 400 | 共有中でないテンプレート |

---

## セキュリティ推奨事項

1. **APIキーの保護**: APIキーを公開リポジトリやクライアントコードに公開しないでください
2. **HTTPSを使用**: すべてのリクエストはHTTPSで送信されます
3. **キーのローテーション**: 定期的にAPIキーを再発行してください
4. **最小権限**: 必要な操作のみを実行してください

---

## お問い合わせ

APIの使用に問題がある場合は、[ご意見](/inventory/suggest/ja/)ページからお問い合わせください。
