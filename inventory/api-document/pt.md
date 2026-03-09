---
layout: inventory
title: Documentacao API
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

# Documentacao API

Acesse os dados do seu aplicativo Inventory de forma programatica atraves da nossa API externa.

---

## Visao geral

### O que e a API?

A API externa fornece uma interface para acessar os dados do aplicativo Inventory a partir de programas externos.

### Casos de uso

- **Automacao**: Processamento em lote de documentos atraves de scripts
- **Integracao de terceiros**: Sincronizacao de dados com outros servicos
- **Operacoes em massa**: Criacao e compartilhamento em massa de modelos

---

## Primeiros passos

### Obtendo uma chave API

Para usar a API, voce primeiro precisa de uma chave API.

1. Abra a tela de **Perfil** no aplicativo Inventory
2. Encontre a secao **Chave API**
3. Toque no botao **Gerar chave**
4. Sua chave API sera exibida na tela

> **Importante**: A chave API e mostrada **apenas uma vez** quando gerada. Certifique-se de copia-la e guarda-la em um local seguro. Se perder, precisara regenera-la.

### Formato da chave API

As chaves API seguem este formato:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Comeca com o prefixo `inv_`
- String codificada em Base64URL de aproximadamente 50 caracteres

### Gerenciamento de chaves API

- **Regenerar**: Revoga a chave existente e emite uma nova
- **Excluir**: Remove completamente a chave API (acesso API desabilitado)

---

## Autenticacao

Todas as requisicoes API requerem um cabecalho `Authorization`.

### Token Bearer

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Exemplo de requisicao

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Limitacao de taxa

O uso da API esta sujeito a limites.

| Tipo de limite | Limite | Descricao |
|----------------|--------|-----------|
| Por minuto | 60 requisicoes | Previne requisicoes excessivas |
| Mensal | Varia por conta | Determinado por contrato |

### Quando o limite e excedido

- O codigo de status HTTP `429 Too Many Requests` e retornado
- Por favor aguarde e tente novamente mais tarde

---

## Endpoints da API

### URL base

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### APIs de leitura (GET)

| Endpoint | Descricao |
|----------|-----------|
| `GET /items` | Listar seus itens |
| `GET /items/{token}` | Obter detalhes do item |
| `GET /templates` | Listar seus modelos |
| `GET /templates/{token}` | Obter detalhes do modelo |
| `GET /templates/shared` | Listar modelos compartilhados |
| `GET /user/stats` | Obter estatisticas do usuario |

### APIs de escrita (POST)

| Endpoint | Descricao |
|----------|-----------|
| `POST /templates` | Criar novo modelo |
| `POST /templates/{token}/share` | Compartilhar modelo |
| `POST /templates/revoke` | Revogar compartilhamento |
| `POST /templates/{token}/send` | Enviar modelo |
| `POST /templates/{token}/check-ownership` | Verificar propriedade de itens clonados |

---

## Referencia detalhada da API

<details>
<summary><h3>GET /items - Listar itens</h3></summary>
<div class="manual-content" markdown="1">

Recupera uma lista de itens (documentos) que voce possui.

#### Requisicao

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Parametros de consulta

| Parametro | Tipo | Padrao | Descricao |
|-----------|------|--------|-----------|
| page | number | 1 | Numero da pagina |
| pageSize | number | 20 | Itens por pagina (max 100) |
| status | string | "active" | Filtro de status (active, pending) |
| type | string | - | Filtro de tipo (paper, stamp) |

#### Resposta

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "token": "id_item_criptografado",
        "title": "Titulo do Item",
        "content": "Conteudo do Item",
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
<summary><h3>POST /templates - Criar modelo</h3></summary>
<div class="manual-content" markdown="1">

Cria um novo modelo (carimbo).

#### Requisicao

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "imageUrl": "https://example.com/image.png",
       "title": "Titulo do Modelo",
       "content": "Conteudo do Modelo",
        "commentMode": "independent",
        "logPermission": "owner",
        "keywordPermission": "owner",
        "allowEdit": true,
        "keywords": ["produto:laptop", "preco:$1500BRL$"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates"
```

#### Corpo da requisicao

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|-------------|-----------|
| imageUrl | string | Sim | URL da imagem (HTTPS recomendado) |
| title | string | Sim | Titulo (max 32 caracteres) |
| content | string | Sim | Conteudo (max 1024 caracteres) |
| commentMode | string | Nao | Modo comentario: "independent" ou "shared" |
| ~~allowComments~~ | ~~boolean~~ | ~~X~~ | ~~Permitir adicionar registros~~ (deprecated: substituído por `logPermission`) |
| logPermission | string | Nao | Permissão de registro: "owner" \| "author" \| "none" (padrão: "owner") |
| keywordPermission | string | Nao | Permissão de palavra-chave: "owner" \| "author" \| "none" (padrão: "owner") |
| allowEdit | boolean | X | Permitir edição (padrão: true) |
| keywords | string[] | Nao | Array de palavras-chave (max 128) |

#### Formato de palavras-chave

As palavras-chave devem seguir o formato `chave:valor`.

| Tipo | Formato | Exemplo |
|------|---------|---------|
| Geral | `chave:valor` | `produto:caneta` |
| Data | `chave:@AAAA-MM-DD@` | `inicio:@2025-01-15@` |
| Telefone | `chave:#telefone#` | `contato:#+55 11 91234-5678#` |
| Local | `chave:%endereco%` | `lugar:%Sao Paulo, Centro%` |
| Valor | `chave:$valorMoeda$` | `preco:$50000BRL$` |

#### Resposta

```json
{
  "success": true,
  "data": {
    "token": "id_modelo_criptografado",
    "title": "Titulo do Modelo",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/share - Compartilhar modelo</h3></summary>
<div class="manual-content" markdown="1">

Compartilha um modelo para que outros usuarios possam descobri-lo.

#### Requisicao

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

#### Corpo da requisicao

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|-------------|-----------|
| durationMinutes | number | Sim | Duracao do compartilhamento (minutos). 60-43200 ou 0 (ilimitado) |
| tags | string[] | Sim | Tags de busca (1-16, maiusculas auto) |

#### Resposta

```json
{
  "success": true,
  "data": {
    "shareToken": "id_compartilhamento_criptografado",
    "expiresAt": "2025-01-02T00:00:00Z",
    "tags": ["TAG1", "TAG2"]
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/send - Enviar modelo</h3></summary>
<div class="manual-content" markdown="1">

Envia um modelo para um usuario especifico, criando itens clonados no aplicativo dele.

#### Requisicao

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "recipientEmail": "usuario@example.com",
       "keywords": ["data:2025-01-15", "valor:50000"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/send"
```

#### Corpo da requisicao

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|-------------|-----------|
| recipientEmail | string | Sim | E-mail do destinatario |
| keywords | string[] | Nao | Palavras-chave para adicionar/substituir |

#### Regras de mesclagem de palavras-chave

O parametro `keywords` permite substituir as palavras-chave padrao do modelo ou adicionar novas.

| Situacao | Comportamento |
|----------|---------------|
| Mesma chave existe | **Substituir** pelo valor da API |
| Nova chave | **Adicionar** a lista de palavras-chave |

**Exemplo:**
- Palavras-chave do modelo: `["data:@date@", "preco:0"]`
- Palavras-chave da API: `["data:2025-01-15", "nome:Joao"]`
- **Resultado**: `["data:2025-01-15", "preco:0", "nome:Joao"]`

#### Resposta

```json
{
  "success": true,
  "data": {
    "itemToken": "id_item_criptografado",
    "recipientEmail": "usuario@example.com",
    "sentAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/check-ownership - Verificar propriedade de itens clonados</h3></summary>
<div class="manual-content" markdown="1">

Verifique se um usuario especifico possui itens clonados deste modelo.

**Seguranca**: Voce so pode consultar modelos que possui. Nao e possivel consultar modelos de outros usuarios.

#### Requisicao

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "usuario@example.com",
       "keywordKeys": ["data", "valor"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/check-ownership"
```

#### Corpo da requisicao

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|-------------|-----------|
| email | string | Sim | E-mail do usuario a verificar |
| keywordKeys | string[] | Nao | Lista de chaves de palavras-chave a recuperar |

#### Resposta

```json
{
  "success": true,
  "data": {
    "hasItem": true,
    "itemTokens": ["id_item_1_criptografado", "id_item_2_criptografado"],
    "keywords": {
      "data": "2025-01-15",
      "valor": "50000"
    }
  }
}
```

#### Campos de resposta

| Campo | Tipo | Descricao |
|-------|------|-----------|
| hasItem | boolean | Status de propriedade |
| itemTokens | string[] | Tokens de itens possuidos (apenas se possuir) |
| keywords | object | Valores de palavras-chave solicitados (apenas se solicitado) |

</div>
</details>

---

## Codigos de erro

Quando uma requisicao API falha, os erros sao retornados neste formato:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descricao do erro"
  }
}
```

### Lista de codigos de erro

| Codigo | Status HTTP | Descricao |
|--------|-------------|-----------|
| INVALID_API_KEY | 401 | Chave API invalida |
| API_KEY_EXPIRED | 401 | Chave API expirada |
| API_DISABLED | 403 | API desabilitada |
| RATE_LIMIT_EXCEEDED | 429 | Limite de requisicoes excedido |
| VALIDATION_ERROR | 400 | Entrada invalida |
| INVALID_TOKEN | 400 | Token invalido |
| NOT_FOUND | 404 | Recurso nao encontrado |
| FORBIDDEN | 403 | Acesso negado |
| RECIPIENT_NOT_FOUND | 404 | Destinatario nao encontrado |

---

## Recomendacoes de seguranca

1. **Proteger chaves API**: Nunca exponha chaves API em repositorios publicos ou codigo cliente
2. **Usar HTTPS**: Todas as requisicoes sao transmitidas via HTTPS
3. **Rotacao de chaves**: Regenere chaves API periodicamente
4. **Privilegio minimo**: Realize apenas operacoes necessarias

---

## Contato

Se voce tiver problemas usando a API, entre em contato atraves da pagina [Sugestoes](/inventory/suggest/pt/).
