---
layout: inventory
title: API-Dokumentation
permalink: /inventory/api-document/de/
lang: de
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

# API-Dokumentation

Mit der externen API der Inventory-App können Sie programmatisch auf Ihre Daten zugreifen.

---

## Überblick

### Was ist die API?

Die externe API ist eine Schnittstelle, über die externe Programme auf die Daten der Inventory-App zugreifen können.

### Anwendungsfälle

- **Automatisierung**: Massenverarbeitung von Dokumenten per Skript
- **Drittanbieter-Integration**: Datenaustausch mit anderen Diensten
- **Massenverarbeitung**: Vorlagen im Stapel erstellen und teilen

---

## Erste Schritte

### API-Schlüssel erstellen

Um die API zu nutzen, benötigen Sie zunächst einen API-Schlüssel.

1. Öffnen Sie in der Inventory-App den **Profilbildschirm**
2. Suchen Sie den Abschnitt **API-Schlüssel**
3. Tippen Sie auf die Schaltfläche **Schlüssel erstellen**
4. Der erstellte API-Schlüssel wird auf dem Bildschirm angezeigt

> **Wichtig**: Der API-Schlüssel wird bei der Erstellung nur **ein einziges Mal** angezeigt. Kopieren Sie ihn unbedingt und bewahren Sie ihn an einem sicheren Ort auf. Bei Verlust muss ein neuer Schlüssel ausgestellt werden.

### Format des API-Schlüssels

Der API-Schlüssel hat das folgende Format:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Beginnt mit dem Präfix `inv_`
- Etwa 50 Zeichen lange Base64URL-codierte Zeichenkette

### Verwaltung des API-Schlüssels

- **Neu erstellen**: Der bestehende Schlüssel wird ungültig und ein neuer wird ausgestellt
- **Löschen**: Der API-Schlüssel wird vollständig gelöscht (API nicht mehr nutzbar)

---

## Authentifizierung

Alle API-Anfragen benötigen einen `Authorization`-Header.

### Bearer-Token

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Beispielanfrage

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Rate Limiting

Die API-Nutzung ist begrenzt.

| Limit-Typ | Grenze | Beschreibung |
|-----------|------|------|
| Anfragen pro Minute | 60 | Schutz vor übermäßigen Anfragen |
| Anfragen pro Monat | Je nach Konto unterschiedlich | Vertraglich festgelegt |

### Bei Überschreitung des Limits

- HTTP-Statuscode `429 Too Many Requests` wird zurückgegeben
- Versuchen Sie es nach kurzer Wartezeit erneut

---

## API-Endpunkte

### Basis-URL

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### Lese-API (GET)

| Endpunkt | Beschreibung |
|------------|------|
| `GET /items` | Eigene Objektliste abrufen |
| `GET /items/{token}` | Objektdetails abrufen |
| `GET /templates` | Eigene Vorlagenliste abrufen |
| `GET /templates/{token}` | Vorlagendetails abrufen |
| `GET /templates/shared` | Liste der derzeit geteilten Vorlagen (Einstellung geplant — Freigabefunktion endet mit v3) |
| `GET /user/stats` | Nutzerstatistiken abrufen |

### Schreib-API (POST)

| Endpunkt | Beschreibung |
|------------|------|
| `POST /templates` | Neue Vorlage erstellen |
| `POST /templates/{token}/share` | Vorlage teilen (Einstellung geplant — Freigabefunktion endet mit v3) |
| `POST /templates/revoke` | Freigabe widerrufen (Einstellung geplant — Freigabefunktion endet mit v3) |
| `POST /templates/{token}/send` | Vorlage senden |
| `POST /templates/{token}/check-ownership` | Besitz eines geklonten Objekts prüfen |
| `POST /templates/{token}/log` | Log hinzufügen, Schlüsselwörter/Berechtigungen/Bild aktualisieren |

---

## Detaillierte API-Spezifikation

<details>
<summary><h3>GET /items - Objektliste</h3></summary>
<div class="manual-content" markdown="1">

Ruft die Liste der eigenen Objekte (Dokumente) ab.

#### Anfrage

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Query-Parameter

| Parameter | Typ | Standardwert | Beschreibung |
|----------|------|--------|------|
| page | number | 1 | Seitennummer |
| pageSize | number | 20 | Einträge pro Seite (max. 100) |
| status | string | "active" | Statusfilter (active, pending) |
| type | string | - | Typfilter (paper, stamp) |

#### Antwort

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
<summary><h3>GET /items/{token} - Objektdetails</h3></summary>
<div class="manual-content" markdown="1">

Ruft die Detailinformationen eines bestimmten Objekts ab.

#### Anfrage

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items/{token}"
```

#### Antwort

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
<summary><h3>GET /templates - Vorlagenliste</h3></summary>
<div class="manual-content" markdown="1">

Ruft die Liste der eigenen Vorlagen (Stempel) ab.

#### Anfrage

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates?page=1&pageSize=20"
```

#### Query-Parameter

| Parameter | Typ | Standardwert | Beschreibung |
|----------|------|--------|------|
| page | number | 1 | Seitennummer |
| pageSize | number | 20 | Einträge pro Seite (max. 100) |

#### Antwort

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
<summary><h3>GET /templates/shared - Geteilte Vorlagen</h3></summary>
<div class="manual-content" markdown="1">

Ruft die Liste der derzeit geteilten Vorlagen ab.

#### Anfrage

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/shared"
```

#### Antwort

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
<summary><h3>GET /user/stats - Nutzerstatistiken</h3></summary>
<div class="manual-content" markdown="1">

Ruft die eigenen Nutzungsstatistiken ab.

#### Anfrage

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/user/stats"
```

#### Antwort

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
<summary><h3>POST /templates - Vorlage erstellen</h3></summary>
<div class="manual-content" markdown="1">

Erstellt eine neue Vorlage (Stempel).

#### Anfrage

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

#### Anfragekörper

| Feld | Typ | Pflicht | Beschreibung |
|------|------|------|------|
| imageUrl | string | Ja | Bild-URL (HTTPS empfohlen) |
| title | string | Ja | Titel (max. 32 Zeichen) |
| content | string | Ja | Inhalt (max. 1024 Zeichen) |
| commentMode | string | Nein | Kommentarmodus: "independent" oder "shared" |
| ~~allowComments~~ | ~~boolean~~ | ~~Nein~~ | ~~Ob Logs hinzugefügt werden dürfen~~ (deprecated: durch `logPermission` ersetzt) |
| logPermission | string | Nein | Log-Berechtigung: "owner" \| "author" \| "none" (Standard: "owner") |
| keywordPermission | string | Nein | Schlüsselwort-Berechtigung: "owner" \| "author" \| "none" (Standard: "owner") |
| allowEdit | boolean | Nein | Ob Bearbeitung erlaubt ist (Standard: true) |
| keywords | string[] | Nein | Schlüsselwort-Array (max. 128) |
| publishDate | string | Nein | Veröffentlichungsdatum (ISO 8601) |
| validUntil | string | Nein | Gültigkeitsdauer (ISO 8601) |

#### Schlüsselwort-Format

Schlüsselwörter müssen dem Format `키:값` (Schlüssel:Wert) folgen.

| Typ | Format | Beispiel |
|------|------|------|
| Allgemein | `키:값` | `품명:펜` |
| Datum | `키:@YYYY-MM-DD@` | `시작일:@2025-01-15@` |
| Telefon | `키:#전화번호#` | `연락처:#+82 10-1234-5678#` |
| Ort | `키:%주소%` | `장소:%서울시 강남구%` |
| Betrag | `키:$금액통화$` | `가격:$50000KRW$` |

#### Einschränkungen

- Schlüssellänge: max. 8 Zeichen
- Gesamtlänge der Schlüsselwörter: max. 256 Zeichen
- Anzahl der Schlüsselwörter: max. 128

#### Antwort

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
<summary><h3>POST /templates/{token}/share - Vorlage teilen</h3></summary>
<div class="manual-content" markdown="1">

Teilt eine Vorlage, damit andere Nutzer sie finden können.

#### Anfrage

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

#### Anfragekörper

| Feld | Typ | Pflicht | Beschreibung |
|------|------|------|------|
| durationMinutes | number | Ja | Freigabedauer (Minuten). 60-43200 oder 0 (unbegrenzt) |
| tags | string[] | Ja | Suchtags (1-16 Stück, automatische Umwandlung in Großbuchstaben) |
| logPermission | string | Nein | Log-Berechtigung: "owner" \| "author" \| "none" (überschreibt die Objekteinstellung) |
| keywordPermission | string | Nein | Schlüsselwort-Berechtigung: "owner" \| "author" \| "none" (überschreibt die Objekteinstellung) |

#### Berechtigungswerte

| Wert | Beschreibung |
|----|------|
| owner | Jeder, der die Vorlage geklont hat, kann hinzufügen/bearbeiten |
| author | Nur der Vorlagenautor kann hinzufügen/bearbeiten |
| none | Deaktiviert |

#### Freigabedauer

| Wert | Bedeutung |
|----|------|
| 60 | 1 Stunde |
| 1440 | 1 Tag (24 Stunden) |
| 10080 | 1 Woche |
| 43200 | 30 Tage (Maximum) |
| 0 | Unbegrenzt |

#### Antwort

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
<summary><h3>POST /templates/revoke - Freigabe widerrufen</h3></summary>
<div class="manual-content" markdown="1">

Beendet die Freigabe einer derzeit geteilten Vorlage.

#### Anfrage

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "shareToken": "암호화된_공유_ID"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/revoke"
```

#### Anfragekörper

| Feld | Typ | Pflicht | Beschreibung |
|------|------|------|------|
| shareToken | string | Ja | Beim Teilen ausgestelltes shareToken |

#### Antwort

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
<summary><h3>POST /templates/{token}/send - Vorlage senden</h3></summary>
<div class="manual-content" markdown="1">

Klont eine Vorlage und sendet sie an einen anderen Nutzer.

#### Anfrage

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

#### Anfragekörper

| Feld | Typ | Pflicht | Beschreibung |
|------|------|------|------|
| recipientEmail | string | Ja | E-Mail des Empfängers |
| message | string | Nein | Sendenachricht (max. 200 Zeichen) |
| keywords | string[] | Nein | Array der hinzuzufügenden/zu überschreibenden Schlüsselwörter |

#### Regeln für das Zusammenführen von Schlüsselwörtern

Mit dem Parameter `keywords` können Sie die Standard-Schlüsselwörter der Vorlage überschreiben oder neue Schlüsselwörter hinzufügen.

| Situation | Verhalten |
|------|------|
| Gleicher Schlüssel vorhanden | Wird mit dem API-Wert **überschrieben** |
| Neuer Schlüssel | Wird der Schlüsselwortliste **hinzugefügt** |

**Beispiel:**
- Vorlagen-Schlüsselwörter: `["날짜:@date@", "가격:0"]`
- API-Schlüsselwörter: `["날짜:2025-01-15", "이름:홍길동"]`
- **Ergebnis**: `["날짜:2025-01-15", "가격:0", "이름:홍길동"]`

#### Antwort

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
<summary><h3>POST /templates/{token}/check-ownership - Besitz eines geklonten Objekts prüfen</h3></summary>
<div class="manual-content" markdown="1">

Prüft, ob ein bestimmter Nutzer ein aus dieser Vorlage erstelltes geklontes Objekt besitzt.

> **Sicherheit**: Die Abfrage ist nur für Vorlagen möglich, die Ihnen selbst gehören. Vorlagen anderer Nutzer können nicht abgefragt werden.

#### Anfrage

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

#### Anfragekörper

| Feld | Typ | Pflicht | Beschreibung |
|------|------|------|------|
| email | string | Ja | E-Mail des abzufragenden Nutzers |
| keywordKeys | string[] | Nein | Liste der abzufragenden Schlüsselwort-Schlüssel |

#### Antwort (bei Besitz)

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

#### Antwort (kein Besitz)

```json
{
  "success": true,
  "data": {
    "hasItem": false
  }
}
```

#### Antwortfelder

| Feld | Typ | Beschreibung |
|------|------|------|
| hasItem | boolean | Besitzstatus |
| itemTokens | string[] | Liste der besessenen Objekt-Token (nur bei Besitz) |
| keywords | object | Werte der angefragten Schlüsselwörter (nur bei Anfrage) |

#### Anwendungsbeispiel

Prüfung von Besitz und Nutzungsstatus eines bestimmten Nutzers in einem Coupon-/Ticketsystem:

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
<summary><h3>POST /templates/{token}/log - Log hinzufügen und Vorlage aktualisieren</h3></summary>
<div class="manual-content" markdown="1">

Fügt einer geteilten Vorlage Logs (Feed) hinzu oder aktualisiert Schlüsselwörter, Berechtigungen oder das Bild. Nutzer, die diese Vorlage geklont haben, erhalten eine Push-Benachrichtigung.

#### Anfrage

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

#### Anfragekörper

| Feld | Typ | Pflicht | Beschreibung |
|------|------|------|------|
| logs | array | Bedingt* | Liste der hinzuzufügenden Logs (max. 10) |
| logs[].content | string | Ja | Log-Inhalt (1~256 Zeichen) |
| keywordUpdates | array | Bedingt* | Liste der Schlüsselwort-Änderungen (max. 20) |
| keywordUpdates[].action | string | Ja | `"upsert"` oder `"delete"` |
| keywordUpdates[].key | string | Ja | Schlüsselwort-Schlüssel (1~8 Zeichen) |
| keywordUpdates[].value | string | Bei upsert | Schlüsselwort-Wert (`key:value` zusammen max. 256 Zeichen) |
| permissionUpdates | object | Bedingt* | Berechtigungsänderung |
| permissionUpdates.logPermission | string | Nein | "owner" \| "author" \| "none" |
| permissionUpdates.keywordPermission | string | Nein | "owner" \| "author" \| "none" |
| imageUrl | string | Bedingt* | Neue Bild-URL (wird als 512x512 WebP neu verarbeitet) |

> \* Mindestens eines von `logs`, `keywordUpdates`, `permissionUpdates`, `imageUrl` muss angegeben werden.

#### Log-Inhaltsformat

Logs im Format `키:값` (Schlüssel 1~8 Zeichen) werden in der App als Info-/URL-Karten dargestellt:

| Format | Darstellung |
|------|--------|
| `일반 텍스트` | Normaler Textkommentar |
| `키:값` | Info-Karte (Schlüssel-Wert-Anzeige) |
| `키:https://...` | URL-Karte (klickbarer Link) |

#### Antwort

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

#### Anwendungsbeispiel

Schlüsselwörter eines Datenverfolgungs-Objekts regelmäßig aktualisieren und einen News-Feed hinzufügen:

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

## Fehlercodes

Bei fehlgeschlagenen API-Anfragen wird ein Fehler im folgenden Format zurückgegeben:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "에러 설명"
  }
}
```

### Liste der Fehlercodes

| Code | HTTP-Status | Beschreibung |
|------|-----------|------|
| INVALID_API_KEY | 401 | Ungültiger API-Schlüssel |
| API_KEY_EXPIRED | 401 | Abgelaufener API-Schlüssel |
| API_DISABLED | 403 | API deaktiviert |
| RATE_LIMIT_EXCEEDED | 429 | Anfragelimit überschritten |
| SCOPE_DENIED | 403 | Unzureichende Berechtigung |
| VALIDATION_ERROR | 400 | Eingabefehler |
| INVALID_TOKEN | 400 | Ungültiger Token |
| NOT_FOUND | 404 | Ressource nicht gefunden |
| FORBIDDEN | 403 | Zugriff verweigert (kein Besitz) |
| RECIPIENT_NOT_FOUND | 404 | Empfänger nicht gefunden |
| INVALID_IMAGE | 400 | Fehlerhafte Bild-URL |
| ALREADY_SHARED | 400 | Vorlage wird bereits geteilt |
| NOT_SHARED | 400 | Vorlage wird derzeit nicht geteilt |

---

## Sicherheitsempfehlungen

1. **API-Schlüssel schützen**: Legen Sie den API-Schlüssel niemals in öffentlichen Repositories oder Client-Code offen
2. **HTTPS verwenden**: Alle Anfragen werden über HTTPS übertragen
3. **Schlüsselrotation**: Erstellen Sie den API-Schlüssel regelmäßig neu
4. **Minimale Berechtigungen**: Führen Sie nur die notwendigen Vorgänge aus

---

## Kontakt

Bei Problemen mit der API-Nutzung kontaktieren Sie uns bitte über die Seite [Vorschlag einreichen](/inventory/suggest/).
