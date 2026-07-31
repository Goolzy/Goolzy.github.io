---
layout: inventory
title: Documentación API
permalink: /inventory/api-document/es/
lang: es
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

# Documentación API

La API externa de la aplicación Inventory le permite acceder a sus datos de forma programática.

---

## Visión general

### ¿Qué es la API?

La API externa es una interfaz que permite a programas externos acceder a los datos de la aplicación Inventory.

### Casos de uso

- **Automatización**: procesamiento masivo de documentos mediante scripts
- **Integración con terceros**: intercambio de datos con otros servicios
- **Procesamiento masivo**: creación y compartición de plantillas por lotes

---

## Primeros pasos

### Obtener una clave API

Para usar la API, primero necesita una clave API.

1. En la aplicación Inventory, vaya a la **pantalla de perfil**
2. Busque la sección **Clave API**
3. Toque el botón **Generar clave**
4. La clave API generada se mostrará en pantalla

> **Importante**: la clave API se muestra **una sola vez** al crearla. Asegúrese de copiarla y guardarla en un lugar seguro. Si la pierde, deberá emitir una nueva.

### Formato de la clave API

La clave API tiene el siguiente formato:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Comienza con el prefijo `inv_`
- Cadena codificada en Base64URL de unos 50 caracteres

### Gestión de la clave API

- **Regenerar**: revoca la clave existente y emite una nueva
- **Eliminar**: elimina completamente la clave API (la API queda inutilizable)

---

## Autenticación

Todas las solicitudes a la API requieren un encabezado `Authorization`.

### Token Bearer

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Ejemplo de solicitud

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Rate Limiting

El uso de la API está sujeto a límites.

| Tipo de límite | Límite | Descripción |
|-----------|------|------|
| Solicitudes por minuto | 60 | Prevención de solicitudes excesivas |
| Solicitudes mensuales | Varía según la cuenta | Determinado por contrato |

### Al superar el límite

- Se devuelve el código de estado HTTP `429 Too Many Requests`
- Inténtelo de nuevo tras una breve espera

---

## Endpoints de la API

### URL base

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### API de lectura (GET)

| Endpoint | Descripción |
|------------|------|
| `GET /items` | Consultar la lista de sus elementos |
| `GET /items/{token}` | Consultar el detalle de un elemento |
| `GET /templates` | Consultar la lista de sus plantillas |
| `GET /templates/{token}` | Consultar el detalle de una plantilla |
| `GET /templates/shared` | Lista de plantillas en compartición (retirada prevista — la función de compartir finaliza en v3) |
| `GET /user/stats` | Consultar estadísticas de usuario |

### API de escritura (POST)

| Endpoint | Descripción |
|------------|------|
| `POST /templates` | Crear una nueva plantilla |
| `POST /templates/{token}/share` | Compartir una plantilla (retirada prevista — la función de compartir finaliza en v3) |
| `POST /templates/revoke` | Revocar una compartición (retirada prevista — la función de compartir finaliza en v3) |
| `POST /templates/{token}/send` | Enviar una plantilla |
| `POST /templates/{token}/check-ownership` | Verificar la posesión de un elemento clonado |
| `POST /templates/{token}/log` | Añadir logs, actualizar palabras clave/permisos/imagen |

---

## Especificación detallada de la API

<details>
<summary><h3>GET /items - Lista de elementos</h3></summary>
<div class="manual-content" markdown="1">

Consulta la lista de elementos (documentos) de su propiedad.

#### Solicitud

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Parámetros de consulta

| Parámetro | Tipo | Valor por defecto | Descripción |
|----------|------|--------|------|
| page | number | 1 | Número de página |
| pageSize | number | 20 | Elementos por página (máx. 100) |
| status | string | "active" | Filtro de estado (active, pending) |
| type | string | - | Filtro de tipo (paper, stamp) |

#### Respuesta

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
<summary><h3>GET /items/{token} - Detalle de un elemento</h3></summary>
<div class="manual-content" markdown="1">

Consulta la información detallada de un elemento específico.

#### Solicitud

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items/{token}"
```

#### Respuesta

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
<summary><h3>GET /templates - Lista de plantillas</h3></summary>
<div class="manual-content" markdown="1">

Consulta la lista de plantillas (sellos) de su propiedad.

#### Solicitud

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates?page=1&pageSize=20"
```

#### Parámetros de consulta

| Parámetro | Tipo | Valor por defecto | Descripción |
|----------|------|--------|------|
| page | number | 1 | Número de página |
| pageSize | number | 20 | Elementos por página (máx. 100) |

#### Respuesta

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
<summary><h3>GET /templates/shared - Plantillas en compartición</h3></summary>
<div class="manual-content" markdown="1">

Consulta la lista de plantillas actualmente compartidas.

#### Solicitud

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/shared"
```

#### Respuesta

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
<summary><h3>GET /user/stats - Estadísticas de usuario</h3></summary>
<div class="manual-content" markdown="1">

Consulta sus estadísticas de uso.

#### Solicitud

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/user/stats"
```

#### Respuesta

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
<summary><h3>POST /templates - Crear una plantilla</h3></summary>
<div class="manual-content" markdown="1">

Crea una nueva plantilla (sello).

#### Solicitud

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

#### Cuerpo de la solicitud

| Campo | Tipo | Requerido | Descripción |
|------|------|------|------|
| imageUrl | string | Sí | URL de la imagen (HTTPS recomendado) |
| title | string | Sí | Título (máx. 32 caracteres) |
| content | string | Sí | Contenido (máx. 1024 caracteres) |
| commentMode | string | No | Modo de comentarios: "independent" o "shared" |
| ~~allowComments~~ | ~~boolean~~ | ~~No~~ | ~~Permitir añadir logs~~ (deprecated: reemplazado por `logPermission`) |
| logPermission | string | No | Permiso de logs: "owner" \| "author" \| "none" (por defecto: "owner") |
| keywordPermission | string | No | Permiso de palabras clave: "owner" \| "author" \| "none" (por defecto: "owner") |
| allowEdit | boolean | No | Permitir edición (por defecto: true) |
| keywords | string[] | No | Array de palabras clave (máx. 128) |
| publishDate | string | No | Fecha de inicio de publicación (ISO 8601) |
| validUntil | string | No | Período de validez (ISO 8601) |

#### Formato de las palabras clave

Las palabras clave deben seguir obligatoriamente el formato `키:값` (clave:valor).

| Tipo | Formato | Ejemplo |
|------|------|------|
| General | `키:값` | `품명:펜` |
| Fecha | `키:@YYYY-MM-DD@` | `시작일:@2025-01-15@` |
| Teléfono | `키:#전화번호#` | `연락처:#+82 10-1234-5678#` |
| Ubicación | `키:%주소%` | `장소:%서울시 강남구%` |
| Importe | `키:$금액통화$` | `가격:$50000KRW$` |

#### Restricciones

- Longitud de la clave: máx. 8 caracteres
- Longitud total de las palabras clave: máx. 256 caracteres
- Número de palabras clave: máx. 128

#### Respuesta

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
<summary><h3>POST /templates/{token}/share - Compartir una plantilla</h3></summary>
<div class="manual-content" markdown="1">

Comparte una plantilla para que otros usuarios puedan buscarla.

#### Solicitud

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

#### Cuerpo de la solicitud

| Campo | Tipo | Requerido | Descripción |
|------|------|------|------|
| durationMinutes | number | Sí | Duración de la compartición (minutos). 60-43200 o 0 (indefinido) |
| tags | string[] | Sí | Etiquetas de búsqueda (1-16, conversión automática a mayúsculas) |
| logPermission | string | No | Permiso de logs: "owner" \| "author" \| "none" (anula la configuración del elemento) |
| keywordPermission | string | No | Permiso de palabras clave: "owner" \| "author" \| "none" (anula la configuración del elemento) |

#### Valores de permiso

| Valor | Descripción |
|----|------|
| owner | Cualquiera que haya clonado la plantilla puede añadir/editar |
| author | Solo el autor de la plantilla puede añadir/editar |
| none | Desactivado |

#### Duración de la compartición

| Valor | Significado |
|----|------|
| 60 | 1 hora |
| 1440 | 1 día (24 horas) |
| 10080 | 1 semana |
| 43200 | 30 días (máximo) |
| 0 | Indefinido |

#### Respuesta

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
<summary><h3>POST /templates/revoke - Revocar una compartición</h3></summary>
<div class="manual-content" markdown="1">

Cancela la compartición de una plantilla actualmente compartida.

#### Solicitud

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "shareToken": "암호화된_공유_ID"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/revoke"
```

#### Cuerpo de la solicitud

| Campo | Tipo | Requerido | Descripción |
|------|------|------|------|
| shareToken | string | Sí | shareToken recibido al compartir |

#### Respuesta

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
<summary><h3>POST /templates/{token}/send - Enviar una plantilla</h3></summary>
<div class="manual-content" markdown="1">

Clona una plantilla y la envía a otro usuario.

#### Solicitud

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

#### Cuerpo de la solicitud

| Campo | Tipo | Requerido | Descripción |
|------|------|------|------|
| recipientEmail | string | Sí | Correo electrónico del destinatario |
| message | string | No | Mensaje de envío (máx. 200 caracteres) |
| keywords | string[] | No | Array de palabras clave a añadir/sobrescribir |

#### Reglas de fusión de palabras clave

El parámetro `keywords` permite sobrescribir las palabras clave predeterminadas de la plantilla o añadir nuevas.

| Situación | Comportamiento |
|------|------|
| Si la clave ya existe | Se **sobrescribe** con el valor de la API |
| Si es una clave nueva | Se **añade** a la lista de palabras clave |

**Ejemplo:**
- Palabras clave de la plantilla: `["날짜:@date@", "가격:0"]`
- Palabras clave de la API: `["날짜:2025-01-15", "이름:홍길동"]`
- **Resultado**: `["날짜:2025-01-15", "가격:0", "이름:홍길동"]`

#### Respuesta

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
<summary><h3>POST /templates/{token}/check-ownership - Verificar la posesión de un elemento clonado</h3></summary>
<div class="manual-content" markdown="1">

Verifica si un usuario determinado posee un elemento clonado creado a partir de esta plantilla.

> **Seguridad**: solo puede consultar plantillas de su propiedad. No puede consultar plantillas de otros usuarios.

#### Solicitud

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

#### Cuerpo de la solicitud

| Campo | Tipo | Requerido | Descripción |
|------|------|------|------|
| email | string | Sí | Correo electrónico del usuario a consultar |
| keywordKeys | string[] | No | Lista de claves de palabras clave a consultar |

#### Respuesta (si posee)

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

#### Respuesta (si no posee)

```json
{
  "success": true,
  "data": {
    "hasItem": false
  }
}
```

#### Campos de la respuesta

| Campo | Tipo | Descripción |
|------|------|------|
| hasItem | boolean | Posesión o no |
| itemTokens | string[] | Lista de tokens de elementos poseídos (solo si posee) |
| keywords | object | Valores de las palabras clave solicitadas (solo si se solicitan) |

#### Ejemplo de uso

Verificación de la posesión y el estado de uso de un usuario determinado en un sistema de cupones/entradas:

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
<summary><h3>POST /templates/{token}/log - Añadir logs y actualizar la plantilla</h3></summary>
<div class="manual-content" markdown="1">

Añade logs (feed) a una plantilla compartida o actualiza las palabras clave, los permisos o la imagen. Se envía una notificación push a los usuarios que hayan clonado esta plantilla.

#### Solicitud

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

#### Cuerpo de la solicitud

| Campo | Tipo | Requerido | Descripción |
|------|------|------|------|
| logs | array | Condicional* | Lista de logs a añadir (máx. 10) |
| logs[].content | string | Sí | Contenido del log (1~256 caracteres) |
| keywordUpdates | array | Condicional* | Lista de cambios de palabras clave (máx. 20) |
| keywordUpdates[].action | string | Sí | `"upsert"` o `"delete"` |
| keywordUpdates[].key | string | Sí | Clave de la palabra clave (1~8 caracteres) |
| keywordUpdates[].value | string | Si upsert | Valor de la palabra clave (`key:value` combinado máx. 256 caracteres) |
| permissionUpdates | object | Condicional* | Cambio de permisos |
| permissionUpdates.logPermission | string | No | "owner" \| "author" \| "none" |
| permissionUpdates.keywordPermission | string | No | "owner" \| "author" \| "none" |
| imageUrl | string | Condicional* | Nueva URL de imagen (reprocesada como WebP 512x512) |

> \* Debe proporcionarse al menos uno de `logs`, `keywordUpdates`, `permissionUpdates`, `imageUrl`.

#### Formato del contenido de los logs

Los logs con formato `키:값` (clave de 1~8 caracteres) se renderizan en la aplicación como tarjetas de información/URL:

| Formato | Renderizado |
|------|--------|
| `일반 텍스트` | Comentario de texto normal |
| `키:값` | Tarjeta de información (visualización clave-valor) |
| `키:https://...` | Tarjeta de URL (enlace clicable) |

#### Respuesta

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

#### Ejemplo de uso

Actualizar periódicamente las palabras clave de un elemento de seguimiento de datos y añadir un feed de noticias:

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

## Códigos de error

Si una solicitud a la API falla, se devuelve un error con el siguiente formato:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "에러 설명"
  }
}
```

### Lista de códigos de error

| Código | Estado HTTP | Descripción |
|------|-----------|------|
| INVALID_API_KEY | 401 | Clave API inválida |
| API_KEY_EXPIRED | 401 | Clave API caducada |
| API_DISABLED | 403 | API desactivada |
| RATE_LIMIT_EXCEEDED | 429 | Límite de solicitudes superado |
| SCOPE_DENIED | 403 | Permisos insuficientes |
| VALIDATION_ERROR | 400 | Error en los datos de entrada |
| INVALID_TOKEN | 400 | Token inválido |
| NOT_FOUND | 404 | Recurso no encontrado |
| FORBIDDEN | 403 | Acceso denegado (sin propiedad) |
| RECIPIENT_NOT_FOUND | 404 | Destinatario no encontrado |
| INVALID_IMAGE | 400 | Error en la URL de la imagen |
| ALREADY_SHARED | 400 | Plantilla ya en compartición |
| NOT_SHARED | 400 | Plantilla no compartida actualmente |

---

## Recomendaciones de seguridad

1. **Proteja su clave API**: no exponga la clave API en repositorios públicos ni en código cliente
2. **Use HTTPS**: todas las solicitudes se transmiten por HTTPS
3. **Rotación de claves**: regenere periódicamente su clave API
4. **Privilegio mínimo**: realice solo las operaciones necesarias

---

## Contacto

Si tiene problemas con el uso de la API, contáctenos a través de la página [Enviar sugerencia](/inventory/suggest/).
