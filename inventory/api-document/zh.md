---
layout: inventory
title: "API文档"
permalink: /inventory/api-document/zh/
lang: zh
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

# API文档

通过我们的外部API以编程方式访问您的Inventory应用数据。

---

## 概述

### 什么是API？

外部API提供了从外部程序访问Inventory应用数据的接口。

### 使用场景

- **自动化**：通过脚本批量处理文档
- **第三方集成**：与其他服务同步数据
- **批量操作**：批量创建和共享模板

---

## 入门指南

### 获取API密钥

要使用API，您首先需要一个API密钥。

1. 在Inventory应用中打开**个人资料**页面
2. 找到**API密钥**部分
3. 点击**生成密钥**按钮
4. 您的API密钥将显示在屏幕上

> **重要提示**：API密钥在生成时**仅显示一次**。请务必复制并保存在安全的地方。如果丢失，需要重新生成。

### API密钥格式

API密钥遵循以下格式：

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- 以`inv_`前缀开头
- 约50个字符的Base64URL编码字符串

### 管理API密钥

- **重新生成**：撤销现有密钥并发放新密钥
- **删除**：完全删除API密钥（禁用API访问）

---

## 认证

所有API请求都需要`Authorization`头。

### Bearer令牌

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 请求示例

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## 速率限制

API使用受到限制。

| 限制类型 | 阈值 | 说明 |
|---------|------|------|
| 每分钟 | 60次请求 | 防止过度请求 |
| 每月 | 根据账户而定 | 由合同确定 |

### 超出限制时

- 返回HTTP状态码`429 Too Many Requests`
- 请等待后重试

---

## API端点

### 基础URL

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### 读取API（GET）

| 端点 | 说明 |
|-----|------|
| `GET /items` | 列出您的物品 |
| `GET /items/{token}` | 获取物品详情 |
| `GET /templates` | 列出您的模板 |
| `GET /templates/{token}` | 获取模板详情 |
| `GET /templates/shared` | 列出共享的模板 |
| `GET /user/stats` | 获取用户统计信息 |

### 写入API（POST）

| 端点 | 说明 |
|-----|------|
| `POST /templates` | 创建新模板 |
| `POST /templates/{token}/share` | 共享模板 |
| `POST /templates/revoke` | 撤销共享 |
| `POST /templates/{token}/send` | 发送模板 |
| `POST /templates/{token}/check-ownership` | 检查克隆项目所有权 |

---

## 详细API参考

<details>
<summary><h3>GET /items - 列出物品</h3></summary>
<div class="manual-content" markdown="1">

获取您拥有的物品（文档）列表。

#### 请求

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### 查询参数

| 参数 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| page | number | 1 | 页码 |
| pageSize | number | 20 | 每页物品数（最大100） |
| status | string | "active" | 状态筛选（active, pending） |
| type | string | - | 类型筛选（paper, stamp） |

#### 响应

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "token": "encrypted_item_id",
        "title": "物品标题",
        "content": "物品内容",
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
<summary><h3>GET /items/{token} - 物品详情</h3></summary>
<div class="manual-content" markdown="1">

获取特定物品的详细信息。

#### 请求

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items/{token}"
```

#### 响应

```json
{
  "success": true,
  "data": {
    "token": "encrypted_item_id",
    "title": "物品标题",
    "content": "物品内容",
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
<summary><h3>GET /templates - 列出模板</h3></summary>
<div class="manual-content" markdown="1">

获取您拥有的模板（印章）列表。

#### 请求

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates?page=1&pageSize=20"
```

#### 查询参数

| 参数 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| page | number | 1 | 页码 |
| pageSize | number | 20 | 每页物品数（最大100） |

#### 响应

```json
{
  "success": true,
  "data": {
    "templates": [
      {
        "token": "encrypted_template_id",
        "title": "模板标题",
        "content": "模板内容",
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
<summary><h3>GET /templates/shared - 共享的模板</h3></summary>
<div class="manual-content" markdown="1">

获取您当前正在共享的模板列表。

#### 请求

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/shared"
```

#### 响应

```json
{
  "success": true,
  "data": {
    "sharedTemplates": [
      {
        "token": "encrypted_template_id",
        "shareToken": "encrypted_share_id",
        "title": "模板标题",
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
<summary><h3>GET /user/stats - 用户统计</h3></summary>
<div class="manual-content" markdown="1">

获取您的使用统计信息。

#### 请求

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/user/stats"
```

#### 响应

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
<summary><h3>POST /templates - 创建模板</h3></summary>
<div class="manual-content" markdown="1">

创建新模板（印章）。

#### 请求

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "imageUrl": "https://example.com/image.png",
       "title": "模板标题",
       "content": "模板内容",
       "commentMode": "independent",
       "allowComments": true,
       "allowEdit": true,
       "keywords": ["product:laptop", "price:$1500000KRW$"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates"
```

#### 请求体

| 字段 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| imageUrl | string | 是 | 图片URL（建议使用HTTPS） |
| title | string | 是 | 标题（最多32个字符） |
| content | string | 是 | 内容（最多1024个字符） |
| commentMode | string | 否 | 评论模式："independent"或"shared" |
| allowComments | boolean | X | 是否允许添加日志 (默认: true) |
| allowEdit | boolean | X | 是否允许编辑 (默认: true) |
| keywords | string[] | 否 | 关键词数组（最多128个） |
| publishDate | string | 否 | 发布开始日期（ISO 8601） |
| validUntil | string | 否 | 有效期截止日期（ISO 8601） |

#### 关键词格式

关键词必须遵循`键:值`格式。

| 类型 | 格式 | 示例 |
|-----|------|-----|
| 通用 | `键:值` | `product:pen` |
| 日期 | `键:@YYYY-MM-DD@` | `start:@2025-01-15@` |
| 电话 | `键:#电话号码#` | `contact:#+82 10-1234-5678#` |
| 地址 | `键:%地址%` | `place:%首尔 江南%` |
| 金额 | `键:$金额货币$` | `price:$50000KRW$` |

#### 限制

- 键名长度：最多8个字符
- 关键词总长度：最多256个字符
- 关键词数量：最多128个

#### 响应

```json
{
  "success": true,
  "data": {
    "token": "encrypted_template_id",
    "title": "模板标题",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/share - 共享模板</h3></summary>
<div class="manual-content" markdown="1">

共享模板以便其他用户可以发现。

#### 请求

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

#### 请求体

| 字段 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| durationMinutes | number | 是 | 共享时长（分钟）。60-43200或0（无限制） |
| tags | string[] | 是 | 搜索标签（1-16个，自动转大写） |

#### 共享时长

| 值 | 含义 |
|---|------|
| 60 | 1小时 |
| 1440 | 1天（24小时） |
| 10080 | 1周 |
| 43200 | 30天（最长） |
| 0 | 无限制 |

#### 响应

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
<summary><h3>POST /templates/revoke - 撤销共享</h3></summary>
<div class="manual-content" markdown="1">

取消当前正在共享的模板的共享状态。

#### 请求

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "shareToken": "encrypted_share_id"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/revoke"
```

#### 请求体

| 字段 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| shareToken | string | 是 | 共享时收到的shareToken |

#### 响应

```json
{
  "success": true,
  "data": {
    "message": "共享已成功撤销"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/send - 发送模板</h3></summary>
<div class="manual-content" markdown="1">

克隆模板并发送给其他用户。

#### 请求

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "recipientEmail": "recipient@example.com",
       "message": "送给你的礼物！",
       "keywords": ["日期:2025-01-15", "金额:50000"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/send"
```

#### 请求体

| 字段 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| recipientEmail | string | 是 | 接收者邮箱 |
| message | string | 否 | 消息（最多200个字符） |
| keywords | string[] | 否 | 要添加/覆盖的关键字数组 |

#### 关键字合并规则

`keywords`参数允许您覆盖模板默认关键字或添加新关键字。

| 情况 | 行为 |
|------|------|
| 存在相同键 | 用API值**覆盖** |
| 新键 | **添加**到关键字列表 |

**示例：**
- 模板关键字：`["日期:@date@", "价格:0"]`
- API关键字：`["日期:2025-01-15", "姓名:张三"]`
- **结果**：`["日期:2025-01-15", "价格:0", "姓名:张三"]`

#### 响应

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
<summary><h3>POST /templates/{token}/check-ownership - 检查克隆项目所有权</h3></summary>
<div class="manual-content" markdown="1">

检查特定用户是否拥有从此模板克隆的项目。

#### 请求

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "user@example.com",
       "keywordKeys": ["日期", "金额"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/check-ownership"
```

#### 安全性

**安全性**：您只能查询自己拥有的模板。无法查询其他用户的模板。

#### 请求体

| 字段 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| email | string | 是 | 要检查的用户电子邮件 |
| keywordKeys | string[] | 否 | 要获取的关键字键列表 |

#### 响应

```json
{
  "success": true,
  "data": {
    "hasItem": true,
    "itemTokens": ["encrypted_item_id_1", "encrypted_item_id_2"],
    "keywords": {
      "日期": "2025-01-15",
      "金额": "50000"
    }
  }
}
```

#### 响应字段

| 字段 | 类型 | 说明 |
|-----|------|------|
| hasItem | boolean | 所有权状态 |
| itemTokens | string[] | 拥有的项目令牌（仅在拥有时） |
| keywords | object | 请求的关键字值（仅在请求时） |

</div>
</details>

---

## 错误代码

当API请求失败时，错误以以下格式返回：

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述"
  }
}
```

### 错误代码列表

| 代码 | HTTP状态 | 说明 |
|-----|---------|------|
| INVALID_API_KEY | 401 | 无效的API密钥 |
| API_KEY_EXPIRED | 401 | 已过期的API密钥 |
| API_DISABLED | 403 | API已禁用 |
| RATE_LIMIT_EXCEEDED | 429 | 请求限制已超出 |
| SCOPE_DENIED | 403 | 权限不足 |
| VALIDATION_ERROR | 400 | 无效的输入 |
| INVALID_TOKEN | 400 | 无效的令牌 |
| NOT_FOUND | 404 | 资源未找到 |
| FORBIDDEN | 403 | 访问被拒绝（非所有者） |
| RECIPIENT_NOT_FOUND | 404 | 接收者未找到 |
| INVALID_IMAGE | 400 | 图片URL错误 |
| ALREADY_SHARED | 400 | 模板已在共享中 |
| NOT_SHARED | 400 | 模板当前未共享 |

---

## 安全建议

1. **保护API密钥**：切勿在公共代码库或客户端代码中暴露API密钥
2. **使用HTTPS**：所有请求都通过HTTPS传输
3. **密钥轮换**：定期重新生成API密钥
4. **最小权限**：仅执行必要的操作

---

## 联系方式

如果您在使用API时遇到问题，请通过[建议与反馈](/inventory/suggest/zh/)页面联系我们。
