---
layout: inventory
title: Documentacion API
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

# Documentacion API

Acceda a los datos de su aplicacion Inventory de forma programatica a traves de nuestra API externa.

---

## Vision general

### Que es la API?

La API externa proporciona una interfaz para acceder a los datos de la aplicacion Inventory desde programas externos.

### Casos de uso

- **Automatizacion**: Procesamiento por lotes de documentos mediante scripts
- **Integracion de terceros**: Sincronizacion de datos con otros servicios
- **Operaciones masivas**: Creacion y comparticion masiva de plantillas

---

## Primeros pasos

### Obtener una clave API

Para usar la API, primero necesita una clave API.

1. Abra la pantalla de **Perfil** en la aplicacion Inventory
2. Busque la seccion **Clave API**
3. Toque el boton **Generar clave**
4. Su clave API se mostrara en pantalla

> **Importante**: La clave API se muestra **solo una vez** cuando se genera. Asegurese de copiarla y guardarla en un lugar seguro. Si la pierde, necesitara regenerarla.

### Formato de la clave API

Las claves API siguen este formato:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Comienza con el prefijo `inv_`
- Cadena codificada en Base64URL de aproximadamente 50 caracteres

### Gestion de claves API

- **Regenerar**: Revoca la clave existente y emite una nueva
- **Eliminar**: Elimina completamente la clave API (acceso API deshabilitado)

---

## Autenticacion

Todas las solicitudes API requieren un encabezado `Authorization`.

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

## Limitacion de velocidad

El uso de la API esta sujeto a limites.

| Tipo de limite | Umbral | Descripcion |
|----------------|--------|-------------|
| Por minuto | 60 solicitudes | Previene solicitudes excesivas |
| Mensual | Varia segun cuenta | Determinado por contrato |

### Cuando se excede el limite

- Se devuelve el codigo de estado HTTP `429 Too Many Requests`
- Por favor espere e intente de nuevo mas tarde

---

## Endpoints API

### URL base

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### APIs de lectura (GET)

| Endpoint | Descripcion |
|----------|-------------|
| `GET /items` | Listar sus articulos |
| `GET /items/{token}` | Obtener detalles del articulo |
| `GET /templates` | Listar sus plantillas |
| `GET /templates/{token}` | Obtener detalles de plantilla |
| `GET /templates/shared` | Listar plantillas compartidas |
| `GET /user/stats` | Obtener estadisticas de usuario |

### APIs de escritura (POST)

| Endpoint | Descripcion |
|----------|-------------|
| `POST /templates` | Crear nueva plantilla |
| `POST /templates/{token}/share` | Compartir plantilla |
| `POST /templates/revoke` | Revocar comparticion |
| `POST /templates/{token}/send` | Enviar plantilla |
| `POST /templates/{token}/check-ownership` | Verificar propiedad de elementos clonados |

---

## Referencia API detallada

<details>
<summary><h3>GET /items - Listar articulos</h3></summary>
<div class="manual-content" markdown="1">

Recupera una lista de articulos (documentos) que posee.

#### Solicitud

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Parametros de consulta

| Parametro | Tipo | Predeterminado | Descripcion |
|-----------|------|----------------|-------------|
| page | number | 1 | Numero de pagina |
| pageSize | number | 20 | Articulos por pagina (max 100) |
| status | string | "active" | Filtro de estado (active, pending) |
| type | string | - | Filtro de tipo (paper, stamp) |

#### Respuesta

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "token": "id_articulo_cifrado",
        "title": "Titulo del articulo",
        "content": "Contenido del articulo",
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
<summary><h3>POST /templates - Crear plantilla</h3></summary>
<div class="manual-content" markdown="1">

Crea una nueva plantilla (sello).

#### Solicitud

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "imageUrl": "https://example.com/image.png",
       "title": "Titulo de plantilla",
       "content": "Contenido de plantilla",
        "commentMode": "independent",
        "logPermission": "owner",
        "keywordPermission": "owner",
        "allowEdit": true,
        "keywords": ["producto:laptop", "precio:$1500EUR$"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates"
```

#### Cuerpo de solicitud

| Campo | Tipo | Requerido | Descripcion |
|-------|------|-----------|-------------|
| imageUrl | string | Si | URL de imagen (HTTPS recomendado) |
| title | string | Si | Titulo (max 32 caracteres) |
| content | string | Si | Contenido (max 1024 caracteres) |
| commentMode | string | No | Modo comentario: "independent" o "shared" |
| ~~allowComments~~ | ~~boolean~~ | ~~X~~ | ~~Permitir agregar registros~~ (deprecated: reemplazado por `logPermission`) |
| logPermission | string | No | Permiso de registro: "owner" \| "author" \| "none" (predeterminado: "owner") |
| keywordPermission | string | No | Permiso de palabra clave: "owner" \| "author" \| "none" (predeterminado: "owner") |
| allowEdit | boolean | X | Permitir edición (predeterminado: true) |
| keywords | string[] | No | Array de palabras clave (max 128) |

#### Formato de palabras clave

Las palabras clave deben seguir el formato `clave:valor`.

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| General | `clave:valor` | `producto:boligrafo` |
| Fecha | `clave:@AAAA-MM-DD@` | `inicio:@2025-01-15@` |
| Telefono | `clave:#telefono#` | `contacto:#+34 612 345 678#` |
| Ubicacion | `clave:%direccion%` | `lugar:%Madrid, Centro%` |
| Monto | `clave:$montoMoneda$` | `precio:$50000EUR$` |

#### Respuesta

```json
{
  "success": true,
  "data": {
    "token": "id_plantilla_cifrado",
    "title": "Titulo de plantilla",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/share - Compartir plantilla</h3></summary>
<div class="manual-content" markdown="1">

Comparte una plantilla para que otros usuarios puedan descubrirla.

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

#### Cuerpo de solicitud

| Campo | Tipo | Requerido | Descripcion |
|-------|------|-----------|-------------|
| durationMinutes | number | Si | Duracion del compartido (minutos). 60-43200 o 0 (ilimitado) |
| tags | string[] | Si | Etiquetas de busqueda (1-16, mayusculas auto) |

#### Respuesta

```json
{
  "success": true,
  "data": {
    "shareToken": "id_compartido_cifrado",
    "expiresAt": "2025-01-02T00:00:00Z",
    "tags": ["TAG1", "TAG2"]
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/send - Enviar plantilla</h3></summary>
<div class="manual-content" markdown="1">

Envia una plantilla (sello) a otros usuarios, clonando la plantilla como nuevos articulos en sus cuentas.

#### Solicitud

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "recipients": ["user1@example.com", "user2@example.com"],
       "keywords": ["fecha:2025-01-15", "monto:50000"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/send"
```

#### Cuerpo de solicitud

| Campo | Tipo | Requerido | Descripcion |
|-------|------|-----------|-------------|
| recipients | string[] | Si | Lista de correos electronicos de destinatarios |
| keywords | string[] | X | Palabras clave para agregar/sobrescribir |

#### Reglas de fusión de palabras clave

El parámetro `keywords` le permite sobrescribir las palabras clave predeterminadas de la plantilla o agregar nuevas.

| Situación | Comportamiento |
|-----------|----------------|
| Existe la misma clave | **Sobrescribir** con valor de API |
| Nueva clave | **Agregar** a la lista de palabras clave |

**Ejemplo:**
- Palabras clave de plantilla: `["fecha:@date@", "precio:0"]`
- Palabras clave de API: `["fecha:2025-01-15", "nombre:Juan"]`
- **Resultado**: `["fecha:2025-01-15", "precio:0", "nombre:Juan"]`

#### Respuesta

```json
{
  "success": true,
  "data": {
    "clonedCount": 2,
    "recipients": ["user1@example.com", "user2@example.com"],
    "sentAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/check-ownership - Verificar propiedad de elementos clonados</h3></summary>
<div class="manual-content" markdown="1">

Verifique si un usuario específico posee elementos clonados de esta plantilla.

**Seguridad**: Solo puede consultar plantillas que posea. No puede consultar plantillas de otros usuarios.

#### Solicitud

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "user@example.com",
       "keywordKeys": ["fecha", "monto"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/check-ownership"
```

#### Cuerpo de solicitud

| Campo | Tipo | Requerido | Descripcion |
|-------|------|-----------|-------------|
| email | string | Si | Correo electrónico del usuario a verificar |
| keywordKeys | string[] | X | Lista de claves de palabras clave a recuperar |

#### Respuesta

```json
{
  "success": true,
  "data": {
    "hasItem": true,
    "itemTokens": ["id_articulo_cifrado_1", "id_articulo_cifrado_2"],
    "keywords": {
      "fecha": "2025-01-15",
      "monto": "50000"
    }
  }
}
```

#### Campos de respuesta

| Campo | Tipo | Descripcion |
|-------|------|-------------|
| hasItem | boolean | Estado de propiedad |
| itemTokens | string[] | Tokens de elementos poseídos (solo si posee) |
| keywords | object | Valores de palabras clave solicitados (solo si se solicita) |

</div>
</details>

---

## Codigos de error

Cuando una solicitud API falla, los errores se devuelven en este formato:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descripcion del error"
  }
}
```

### Lista de codigos de error

| Codigo | Estado HTTP | Descripcion |
|--------|-------------|-------------|
| INVALID_API_KEY | 401 | Clave API invalida |
| API_KEY_EXPIRED | 401 | Clave API expirada |
| API_DISABLED | 403 | API deshabilitada |
| RATE_LIMIT_EXCEEDED | 429 | Limite de solicitudes excedido |
| VALIDATION_ERROR | 400 | Entrada invalida |
| INVALID_TOKEN | 400 | Token invalido |
| NOT_FOUND | 404 | Recurso no encontrado |
| FORBIDDEN | 403 | Acceso denegado |
| RECIPIENT_NOT_FOUND | 404 | Destinatario no encontrado |

---

## Recomendaciones de seguridad

1. **Proteger claves API**: Nunca exponer claves API en repositorios publicos o codigo cliente
2. **Usar HTTPS**: Todas las solicitudes se transmiten via HTTPS
3. **Rotacion de claves**: Regenerar claves API periodicamente
4. **Privilegio minimo**: Solo realizar operaciones necesarias

---

## Contacto

Si tiene problemas usando la API, contactenos a traves de la pagina [Sugerencias](/inventory/suggest/es/).
