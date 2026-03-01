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

Greifen Sie programmatisch auf Ihre Inventory-App-Daten uber unsere externe API zu.

---

## Ubersicht

### Was ist die API?

Die externe API bietet eine Schnittstelle fur den Zugriff auf Inventory-App-Daten von externen Programmen.

### Anwendungsfalle

- **Automatisierung**: Stapelverarbeitung von Dokumenten durch Skripte
- **Drittanbieter-Integration**: Datensynchronisierung mit anderen Diensten
- **Massenoperationen**: Massenhafte Vorlagenerstellung und -freigabe

---

## Erste Schritte

### API-Schlussel erhalten

Um die API zu nutzen, benotigen Sie zunachst einen API-Schlussel.

1. Offnen Sie den **Profil**-Bildschirm in der Inventory-App
2. Suchen Sie den **API-Schlussel**-Bereich
3. Tippen Sie auf die Schaltflache **Schlussel generieren**
4. Ihr API-Schlussel wird auf dem Bildschirm angezeigt

> **Wichtig**: Der API-Schlussel wird bei der Generierung **nur einmal** angezeigt. Stellen Sie sicher, dass Sie ihn kopieren und an einem sicheren Ort aufbewahren. Bei Verlust muss er neu generiert werden.

### API-Schlussel-Format

API-Schlussel folgen diesem Format:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Beginnt mit dem Prafix `inv_`
- Etwa 50 Zeichen lange Base64URL-kodierte Zeichenkette

### API-Schlussel verwalten

- **Neu generieren**: Widerruft den vorhandenen Schlussel und stellt einen neuen aus
- **Loschen**: Entfernt den API-Schlussel vollstandig (API-Zugriff deaktiviert)

---

## Authentifizierung

Alle API-Anfragen erfordern einen `Authorization`-Header.

### Bearer-Token

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Anfrage-Beispiel

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Ratenbegrenzung

Die API-Nutzung unterliegt Beschrankungen.

| Limittyp | Schwellenwert | Beschreibung |
|----------|---------------|--------------|
| Pro Minute | 60 Anfragen | Verhindert ubermassige Anfragen |
| Monatlich | Je nach Konto | Durch Vertrag bestimmt |

### Bei Uberschreitung des Limits

- HTTP-Statuscode `429 Too Many Requests` wird zuruckgegeben
- Bitte warten und spater erneut versuchen

---

## API-Endpunkte

### Basis-URL

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### Lese-APIs (GET)

| Endpunkt | Beschreibung |
|----------|--------------|
| `GET /items` | Ihre Artikel auflisten |
| `GET /items/{token}` | Artikeldetails abrufen |
| `GET /templates` | Ihre Vorlagen auflisten |
| `GET /templates/{token}` | Vorlagendetails abrufen |
| `GET /templates/shared` | Geteilte Vorlagen auflisten |
| `GET /user/stats` | Benutzerstatistiken abrufen |

### Schreib-APIs (POST)

| Endpunkt | Beschreibung |
|----------|--------------|
| `POST /templates` | Neue Vorlage erstellen |
| `POST /templates/{token}/share` | Vorlage teilen |
| `POST /templates/revoke` | Freigabe widerrufen |
| `POST /templates/{token}/send` | Vorlage senden |
| `POST /templates/{token}/check-ownership` | Besitz kopierter Elemente prüfen |

---

## Detaillierte API-Referenz

<details>
<summary><h3>GET /items - Artikel auflisten</h3></summary>
<div class="manual-content" markdown="1">

Ruft eine Liste der Artikel (Dokumente) ab, die Sie besitzen.

#### Anfrage

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Abfrageparameter

| Parameter | Typ | Standard | Beschreibung |
|-----------|-----|----------|--------------|
| page | number | 1 | Seitennummer |
| pageSize | number | 20 | Artikel pro Seite (max 100) |
| status | string | "active" | Statusfilter (active, pending) |
| type | string | - | Typfilter (paper, stamp) |

#### Antwort

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "token": "verschlusselte_artikel_id",
        "title": "Artikel-Titel",
        "content": "Artikel-Inhalt",
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
<summary><h3>GET /items/{token} - Artikeldetails</h3></summary>
<div class="manual-content" markdown="1">

Ruft detaillierte Informationen uber einen bestimmten Artikel ab.

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
    "token": "verschlusselte_artikel_id",
    "title": "Artikel-Titel",
    "content": "Artikel-Inhalt",
    "type": "paper",
    "status": "active",
    "imageUrl": "https://...",
    "keywords": ["schlussel:wert", "tag:beispiel"],
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
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
       "title": "Vorlagen-Titel",
       "content": "Vorlagen-Inhalt",
        "commentMode": "independent",
        "logPermission": "owner",
        "keywordPermission": "owner",
        "allowEdit": true,
        "keywords": ["produkt:laptop", "preis:$1500EUR$"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates"
```

#### Anfrage-Body

| Feld | Typ | Erforderlich | Beschreibung |
|------|-----|--------------|--------------|
| imageUrl | string | Ja | Bild-URL (HTTPS empfohlen) |
| title | string | Ja | Titel (max 32 Zeichen) |
| content | string | Ja | Inhalt (max 1024 Zeichen) |
| commentMode | string | Nein | Kommentarmodus: "independent" oder "shared" |
| ~~allowComments~~ | ~~boolean~~ | ~~X~~ | ~~Protokolle hinzufügen erlauben~~ (deprecated: ersetzt durch `logPermission`) |
| logPermission | string | Nein | Protokollberechtigung: "owner" \| "author" \| "none" (Standard: "owner") |
| keywordPermission | string | Nein | Stichwortberechtigung: "owner" \| "author" \| "none" (Standard: "owner") |
| allowEdit | boolean | X | Bearbeitung erlauben (Standard: true) |
| keywords | string[] | Nein | Schlusselwort-Array (max 128) |

#### Schlusselwort-Format

Schlusselworter mussen dem Format `schlussel:wert` folgen.

| Typ | Format | Beispiel |
|-----|--------|----------|
| Allgemein | `schlussel:wert` | `produkt:stift` |
| Datum | `schlussel:@YYYY-MM-DD@` | `start:@2025-01-15@` |
| Telefon | `schlussel:#telefon#` | `kontakt:#+49 170-1234567#` |
| Ort | `schlussel:%adresse%` | `ort:%Berlin, Mitte%` |
| Betrag | `schlussel:$betragWahrung$` | `preis:$50000EUR$` |

#### Antwort

```json
{
  "success": true,
  "data": {
    "token": "verschlusselte_vorlagen_id",
    "title": "Vorlagen-Titel",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/share - Vorlage teilen</h3></summary>
<div class="manual-content" markdown="1">

Teilt eine Vorlage, damit andere Benutzer sie finden konnen.

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

#### Anfrage-Body

| Feld | Typ | Erforderlich | Beschreibung |
|------|-----|--------------|--------------|
| durationMinutes | number | Ja | Freigabedauer (Minuten). 60-43200 oder 0 (unbegrenzt) |
| tags | string[] | Ja | Such-Tags (1-16, automatische Grossschreibung) |

#### Antwort

```json
{
  "success": true,
  "data": {
    "shareToken": "verschlusselter_freigabe_id",
    "expiresAt": "2025-01-02T00:00:00Z",
    "tags": ["TAG1", "TAG2"]
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/send - Vorlage senden</h3></summary>
<div class="manual-content" markdown="1">

Sendet eine Vorlage an einen Empfänger und erstellt ein neues Element basierend auf der Vorlage.

#### Anfrage

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "empfaenger@example.com",
       "keywords": ["Datum:2025-01-15", "Betrag:50000"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/send"
```

#### Anfrage-Body

| Feld | Typ | Erforderlich | Beschreibung |
|------|-----|--------------|--------------|
| email | string | Ja | E-Mail des Empfängers |
| keywords | string[] | Nein | Schlüsselwörter zum Hinzufügen/Überschreiben |

#### Schlüsselwort-Zusammenführungsregeln

Der `keywords`-Parameter ermöglicht das Überschreiben von Standard-Schlüsselwörtern der Vorlage oder das Hinzufügen neuer.

| Situation | Verhalten |
|-----------|-----------|
| Gleicher Schlüssel existiert | Mit API-Wert **überschreiben** |
| Neuer Schlüssel | Zur Schlüsselwortliste **hinzufügen** |

**Beispiel:**
- Vorlagen-Schlüsselwörter: `["Datum:@date@", "Preis:0"]`
- API-Schlüsselwörter: `["Datum:2025-01-15", "Name:Hans"]`
- **Ergebnis**: `["Datum:2025-01-15", "Preis:0", "Name:Hans"]`

#### Antwort

```json
{
  "success": true,
  "data": {
    "itemToken": "verschlusselte_artikel_id",
    "title": "Artikel-Titel",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/check-ownership - Besitz kopierter Elemente prüfen</h3></summary>
<div class="manual-content" markdown="1">

Prüfen Sie, ob ein bestimmter Benutzer aus dieser Vorlage kopierte Elemente besitzt.

**Sicherheit**: Sie können nur Vorlagen abfragen, die Sie besitzen. Vorlagen anderer Benutzer können nicht abgefragt werden.

#### Anfrage

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "benutzer@example.com",
       "keywordKeys": ["Datum", "Betrag"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/{token}/check-ownership"
```

#### Anfrage-Body

| Feld | Typ | Erforderlich | Beschreibung |
|------|-----|--------------|--------------|
| email | string | Ja | E-Mail des zu prüfenden Benutzers |
| keywordKeys | string[] | Nein | Liste der abzurufenden Schlüsselwort-Schlüssel |

#### Antwort

```json
{
  "success": true,
  "data": {
    "hasItem": true,
    "itemTokens": ["token1", "token2"],
    "keywords": {
      "Datum": "2025-01-15",
      "Betrag": "50000"
    }
  }
}
```

#### Antwort-Felder

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| hasItem | boolean | Besitzstatus |
| itemTokens | string[] | Besessene Element-Token (nur bei Besitz) |
| keywords | object | Angeforderte Schlüsselwortwerte (nur bei Anfrage) |

</div>
</details>

---

## Fehlercodes

Bei fehlgeschlagenen API-Anfragen werden Fehler in diesem Format zuruckgegeben:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Fehlerbeschreibung"
  }
}
```

### Fehlercode-Liste

| Code | HTTP-Status | Beschreibung |
|------|-------------|--------------|
| INVALID_API_KEY | 401 | Ungultiger API-Schlussel |
| API_KEY_EXPIRED | 401 | Abgelaufener API-Schlussel |
| API_DISABLED | 403 | API deaktiviert |
| RATE_LIMIT_EXCEEDED | 429 | Anfragelimit uberschritten |
| VALIDATION_ERROR | 400 | Ungultige Eingabe |
| INVALID_TOKEN | 400 | Ungultiges Token |
| NOT_FOUND | 404 | Ressource nicht gefunden |
| FORBIDDEN | 403 | Zugriff verweigert |
| RECIPIENT_NOT_FOUND | 404 | Empfanger nicht gefunden |

---

## Sicherheitsempfehlungen

1. **API-Schlussel schutzen**: API-Schlussel niemals in offentlichen Repositories oder Client-Code offenlegen
2. **HTTPS verwenden**: Alle Anfragen werden uber HTTPS ubertragen
3. **Schlusselrotation**: API-Schlussel regelmaszig neu generieren
4. **Minimale Berechtigungen**: Nur notwendige Operationen durchfuhren

---

## Kontakt

Bei Problemen mit der API-Nutzung kontaktieren Sie uns bitte uber die [Vorschlage](/inventory/suggest/de/)-Seite.
