---
layout: inventory
title: Documentação API
permalink: /inventory/api-document/pt/
lang: pt
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

# Documentação API

A API externa do aplicativo Inventory permite acessar seus dados de forma programática.

---

## Visão geral

### O que é a API?

A API externa é uma interface que permite que programas externos acessem os dados do aplicativo Inventory.

### Casos de uso

- **Automação**: processamento de documentos em massa por meio de scripts
- **Integração com terceiros**: intercâmbio de dados com outros serviços
- **Processamento em massa**: criação e compartilhamento de modelos em lote

---

## Primeiros passos

### Obter uma chave de API

Para usar a API, primeiro você precisa de uma chave de API.

1. No aplicativo Inventory, acesse a **tela de perfil**
2. Localize a seção **Chave de API**
3. Toque no botão **Gerar chave**
4. A chave de API gerada será exibida na tela

> **Importante**: a chave de API é exibida **apenas uma vez** no momento da criação. Copie-a e guarde-a em um local seguro. Em caso de perda, será necessário emitir uma nova.

### Formato da chave de API

A chave de API tem o seguinte formato:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Começa com o prefixo `inv_`
- Cadeia codificada em Base64URL com cerca de 50 caracteres

### Gerenciamento da chave de API

- **Regenerar**: revoga a chave existente e emite uma nova
- **Excluir**: exclui completamente a chave de API (API inutilizável)

---

## Autenticação

Todas as solicitações à API exigem um cabeçalho `Authorization`.

### Token Bearer

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Exemplo de solicitação

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Rate Limiting

O uso da API está sujeito a limites.

| Tipo de limite | Limite | Descrição |
|-----------|------|------|
| Solicitações por minuto | 60 | Prevenção de solicitações excessivas |
| Solicitações mensais | Varia por conta | Determinado por contrato |

### Ao exceder o limite

- O código de status HTTP `429 Too Many Requests` é retornado
- Tente novamente após uma breve espera

---

## Endpoints da API

### URL base

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### API de leitura (GET)

| Endpoint | Descrição |
|------------|------|
| `GET /items` | Consultar a lista dos seus itens |
| `GET /items/{token}` | Consultar os detalhes de um item |
| `GET /templates` | Consultar a lista dos seus modelos |
| `GET /templates/{token}` | Consultar os detalhes de um modelo |
| `GET /templates/shared` | Lista de modelos em compartilhamento (remoção prevista — a função de compartilhamento termina na v3) |
| `GET /user/stats` | Consultar estatísticas do usuário |

### API de escrita (POST)

| Endpoint | Descrição |
|------------|------|
| `POST /templates` | Criar um novo modelo |
| `POST /templates/{token}/share` | Compartilhar um modelo (remoção prevista — a função de compartilhamento termina na v3) |
| `POST /templates/revoke` | Revogar um compartilhamento (remoção prevista — a função de compartilhamento termina na v3) |
| `POST /templates/{token}/send` | Enviar um modelo |
| `POST /templates/{token}/check-ownership` | Verificar a posse de um item clonado |
| `POST /templates/{token}/log` | Adicionar logs, atualizar palavras-chave/permissões/imagem |

---

## Especificação detalhada da API

<details>
<summary><h3>GET /items - Lista de itens</h3></summary>
<div class="manual-content" markdown="1">

Consulta a lista de itens (documentos) de sua propriedade.

#### Solicitação

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Parâmetros de consulta

| Parâmetro | Tipo | Valor padrão | Descrição |
|----------|------|--------|------|
| page | number | 1 | Número da página |
| pageSize | number | 20 | Itens por página (máx. 100) |
| status | string | "active" | Filtro de status (active, pending) |
| type | string | - | Filtro de tipo (paper, stamp) |

#### Resposta

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
<summary><h3>GET /items/{token} - Detalhes de um item</h3></summary>
<div class="manual-content" markdown="1">

Consulta as informações detalhadas de um item específico.

#### Solicitação

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items/{token}"
```

#### Resposta

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
<summary><h3>GET /templates - Lista de modelos</h3></summary>
<div class="manual-content" markdown="1">

Consulta a lista de modelos (carimbos) de sua propriedade.

#### Solicitação

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates?page=1&pageSize=20"
```

#### Parâmetros de consulta

| Parâmetro | Tipo | Valor padrão | Descrição |
|----------|------|--------|------|
| page | number | 1 | Número da página |
| pageSize | number | 20 | Itens por página (máx. 100) |

#### Resposta

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
<summary><h3>GET /templates/shared - Modelos em compartilhamento</h3></summary>
<div class="manual-content" markdown="1">

Consulta a lista de modelos atualmente compartilhados.

#### Solicitação

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/shared"
```

#### Resposta

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
<summary><h3>GET /user/stats - Estatísticas do usuário</h3></summary>
<div class="manual-content" markdown="1">

Consulta suas estatísticas de uso.

#### Solicitação

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/user/stats"
```

#### Resposta

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
<summary><h3>POST /templates - Criar um modelo</h3></summary>
<div class="manual-content" markdown="1">

Cria um novo modelo (carimbo).

#### Solicitação

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

#### Corpo da solicitação

| Campo | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| imageUrl | string | Sim | URL da imagem (HTTPS recomendado) |
| title | string | Sim | Título (máx. 32 caracteres) |
| content | string | Sim | Conteúdo (máx. 1024 caracteres) |
| commentMode | string | Não | Modo de comentários: "independent" ou "shared" |
| ~~allowComments~~ | ~~boolean~~ | ~~Não~~ | ~~Permitir adição de logs~~ (deprecated: substituído por `logPermission`) |
| logPermission | string | Não | Permissão de logs: "owner" \| "author" \| "none" (padrão: "owner") |
| keywordPermission | string | Não | Permissão de palavras-chave: "owner" \| "author" \| "none" (padrão: "owner") |
| allowEdit | boolean | Não | Permitir edição (padrão: true) |
| keywords | string[] | Não | Array de palavras-chave (máx. 128) |
| publishDate | string | Não | Data de início da publicação (ISO 8601) |
| validUntil | string | Não | Período de validade (ISO 8601) |

#### Formato das palavras-chave

As palavras-chave devem obrigatoriamente seguir o formato `키:값` (chave:valor).

| Tipo | Formato | Exemplo |
|------|------|------|
| Geral | `키:값` | `품명:펜` |
| Data | `키:@YYYY-MM-DD@` | `시작일:@2025-01-15@` |
| Telefone | `키:#전화번호#` | `연락처:#+82 10-1234-5678#` |
| Localização | `키:%주소%` | `장소:%서울시 강남구%` |
| Valor | `키:$금액통화$` | `가격:$50000KRW$` |

#### Restrições

- Comprimento da chave: máx. 8 caracteres
- Comprimento total das palavras-chave: máx. 256 caracteres
- Número de palavras-chave: máx. 128

#### Resposta

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
<summary><h3>POST /templates/{token}/share - Compartilhar um modelo</h3></summary>
<div class="manual-content" markdown="1">

Compartilha um modelo para que outros usuários possam pesquisá-lo.

#### Solicitação

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

#### Corpo da solicitação

| Campo | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| durationMinutes | number | Sim | Duração do compartilhamento (minutos). 60-43200 ou 0 (indefinido) |
| tags | string[] | Sim | Tags de pesquisa (1-16, conversão automática para maiúsculas) |
| logPermission | string | Não | Permissão de logs: "owner" \| "author" \| "none" (substitui a configuração do item) |
| keywordPermission | string | Não | Permissão de palavras-chave: "owner" \| "author" \| "none" (substitui a configuração do item) |

#### Valores de permissão

| Valor | Descrição |
|----|------|
| owner | Qualquer pessoa que tenha clonado o modelo pode adicionar/editar |
| author | Somente o autor do modelo pode adicionar/editar |
| none | Desativado |

#### Duração do compartilhamento

| Valor | Significado |
|----|------|
| 60 | 1 hora |
| 1440 | 1 dia (24 horas) |
| 10080 | 1 semana |
| 43200 | 30 dias (máximo) |
| 0 | Indefinido |

#### Resposta

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
<summary><h3>POST /templates/revoke - Revogar um compartilhamento</h3></summary>
<div class="manual-content" markdown="1">

Cancela o compartilhamento de um modelo atualmente compartilhado.

#### Solicitação

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "shareToken": "암호화된_공유_ID"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/revoke"
```

#### Corpo da solicitação

| Campo | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| shareToken | string | Sim | shareToken recebido no momento do compartilhamento |

#### Resposta

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
<summary><h3>POST /templates/{token}/send - Enviar um modelo</h3></summary>
<div class="manual-content" markdown="1">

Clona um modelo e o envia para outro usuário.

#### Solicitação

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

#### Corpo da solicitação

| Campo | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| recipientEmail | string | Sim | E-mail do destinatário |
| message | string | Não | Mensagem de envio (máx. 200 caracteres) |
| keywords | string[] | Não | Array de palavras-chave a adicionar/sobrescrever |

#### Regras de mesclagem de palavras-chave

O parâmetro `keywords` permite sobrescrever as palavras-chave padrão do modelo ou adicionar novas.

| Situação | Comportamento |
|------|------|
| Se a chave já existir | É **sobrescrita** com o valor da API |
| Se for uma chave nova | É **adicionada** à lista de palavras-chave |

**Exemplo:**
- Palavras-chave do modelo: `["날짜:@date@", "가격:0"]`
- Palavras-chave da API: `["날짜:2025-01-15", "이름:홍길동"]`
- **Resultado**: `["날짜:2025-01-15", "가격:0", "이름:홍길동"]`

#### Resposta

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
<summary><h3>POST /templates/{token}/check-ownership - Verificar a posse de um item clonado</h3></summary>
<div class="manual-content" markdown="1">

Verifica se um determinado usuário possui um item clonado criado a partir deste modelo.

> **Segurança**: a consulta só é possível para modelos de sua propriedade. Não é possível consultar modelos de outros usuários.

#### Solicitação

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

#### Corpo da solicitação

| Campo | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| email | string | Sim | E-mail do usuário a consultar |
| keywordKeys | string[] | Não | Lista de chaves de palavras-chave a consultar |

#### Resposta (se possuir)

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

#### Resposta (se não possuir)

```json
{
  "success": true,
  "data": {
    "hasItem": false
  }
}
```

#### Campos da resposta

| Campo | Tipo | Descrição |
|------|------|------|
| hasItem | boolean | Posse ou não |
| itemTokens | string[] | Lista de tokens dos itens possuídos (somente se possuir) |
| keywords | object | Valores das palavras-chave solicitadas (somente se solicitadas) |

#### Exemplo de uso

Verificação da posse e do status de uso de um determinado usuário em um sistema de cupons/ingressos:

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

<details>
<summary><h3>POST /templates/{token}/log - Adicionar logs e atualizar o modelo</h3></summary>
<div class="manual-content" markdown="1">

Adiciona logs (feed) a um modelo compartilhado ou atualiza palavras-chave, permissões ou imagem. Uma notificação push é enviada aos usuários que clonaram este modelo.

#### Solicitação

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "logs": [
         {"content": "붉은사막 최종 트레일러 공개 https://youtu.be/abc"},
         {"content": "블로그:https://example.com/update-notes"}
       ],
       "keywordUpdates": [
         {"action": "upsert", "key": "출시일", "value": "2026-03-28"},
         {"action": "upsert", "key": "가격", "value": "69,800원"},
         {"action": "delete", "key": "베타일정"}
       ],
       "permissionUpdates": {
         "logPermission": "owner",
         "keywordPermission": "author"
       },
       "imageUrl": "https://example.com/new-image.png"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/log"
```

#### Corpo da solicitação

| Campo | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| logs | array | Condicional* | Lista de logs a adicionar (máx. 10) |
| logs[].content | string | Sim | Conteúdo do log (1~256 caracteres) |
| keywordUpdates | array | Condicional* | Lista de alterações de palavras-chave (máx. 20) |
| keywordUpdates[].action | string | Sim | `"upsert"` ou `"delete"` |
| keywordUpdates[].key | string | Sim | Chave da palavra-chave (1~8 caracteres) |
| keywordUpdates[].value | string | Se upsert | Valor da palavra-chave (`key:value` combinado máx. 256 caracteres) |
| permissionUpdates | object | Condicional* | Alteração de permissões |
| permissionUpdates.logPermission | string | Não | "owner" \| "author" \| "none" |
| permissionUpdates.keywordPermission | string | Não | "owner" \| "author" \| "none" |
| imageUrl | string | Condicional* | Nova URL de imagem (reprocessada como WebP 512x512) |

> \* Pelo menos um entre `logs`, `keywordUpdates`, `permissionUpdates`, `imageUrl` deve ser fornecido.

#### Formato do conteúdo dos logs

Logs no formato `키:값` (chave de 1~8 caracteres) são renderizados no aplicativo como cartões de informação/URL:

| Formato | Renderização |
|------|--------|
| `일반 텍스트` | Comentário de texto normal |
| `키:값` | Cartão de informação (exibição chave-valor) |
| `키:https://...` | Cartão de URL (link clicável) |

#### Resposta

```json
{
  "success": true,
  "data": {
    "logsAdded": 2,
    "keywordsUpdated": 2,
    "keywordsDeleted": 1,
    "notificationsSent": 5
  }
}
```

#### Exemplo de uso

Atualizar periodicamente as palavras-chave de um item de rastreamento de dados e adicionar um feed de notícias:

```bash
# 유류비 데이터 갱신 + 뉴스 로그 추가
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "keywordUpdates": [
         {"action": "upsert", "key": "휘발유", "value": "1,680원"},
         {"action": "upsert", "key": "경유", "value": "1,520원"}
       ],
       "logs": [
         {"content": "3월 둘째주 전국 평균 유류비 소폭 상승 https://news.example.com/fuel"}
       ]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/log"
```

</div>
</details>

---

## Códigos de erro

Se uma solicitação à API falhar, um erro é retornado no seguinte formato:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "에러 설명"
  }
}
```

### Lista de códigos de erro

| Código | Status HTTP | Descrição |
|------|-----------|------|
| INVALID_API_KEY | 401 | Chave de API inválida |
| API_KEY_EXPIRED | 401 | Chave de API expirada |
| API_DISABLED | 403 | API desativada |
| RATE_LIMIT_EXCEEDED | 429 | Limite de solicitações excedido |
| SCOPE_DENIED | 403 | Permissões insuficientes |
| VALIDATION_ERROR | 400 | Erro nos dados de entrada |
| INVALID_TOKEN | 400 | Token inválido |
| NOT_FOUND | 404 | Recurso não encontrado |
| FORBIDDEN | 403 | Acesso negado (sem propriedade) |
| RECIPIENT_NOT_FOUND | 404 | Destinatário não encontrado |
| INVALID_IMAGE | 400 | Erro na URL da imagem |
| ALREADY_SHARED | 400 | Modelo já em compartilhamento |
| NOT_SHARED | 400 | Modelo não compartilhado atualmente |

---

## Recomendações de segurança

1. **Proteja sua chave de API**: não exponha a chave de API em repositórios públicos nem em código de cliente
2. **Use HTTPS**: todas as solicitações são transmitidas via HTTPS
3. **Rotação de chaves**: regenere periodicamente sua chave de API
4. **Privilégio mínimo**: execute apenas as operações necessárias

---

## Contato

Se tiver problemas com o uso da API, entre em contato conosco pela página [Enviar sugestão](/inventory/suggest/).
