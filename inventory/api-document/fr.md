---
layout: inventory
title: Documentation API
permalink: /inventory/api-document/fr/
lang: fr
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

# Documentation API

L'API externe de l'application Inventory vous permet d'accéder à vos données de manière programmatique.

---

## Aperçu

### Qu'est-ce que l'API ?

L'API externe est une interface qui permet à des programmes externes d'accéder aux données de l'application Inventory.

### Cas d'utilisation

- **Automatisation** : traitement de documents en masse via des scripts
- **Intégration tierce** : échange de données avec d'autres services
- **Traitement en masse** : création et partage de modèles par lots

---

## Démarrage

### Obtenir une clé API

Pour utiliser l'API, vous avez d'abord besoin d'une clé API.

1. Dans l'application Inventory, accédez à l'**écran de profil**
2. Recherchez la section **Clé API**
3. Appuyez sur le bouton **Générer une clé**
4. La clé API générée s'affiche à l'écran

> **Important** : la clé API n'est affichée qu'**une seule fois** lors de sa création. Veillez à la copier et à la conserver en lieu sûr. En cas de perte, une nouvelle clé devra être émise.

### Format de la clé API

La clé API a le format suivant :

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Commence par le préfixe `inv_`
- Chaîne encodée en Base64URL d'environ 50 caractères

### Gestion de la clé API

- **Régénérer** : révoque la clé existante et en émet une nouvelle
- **Supprimer** : supprime complètement la clé API (API inutilisable)

---

## Authentification

Toutes les requêtes API nécessitent un en-tête `Authorization`.

### Jeton Bearer

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Exemple de requête

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Rate Limiting

L'utilisation de l'API est soumise à des limites.

| Type de limite | Plafond | Description |
|-----------|------|------|
| Requêtes par minute | 60 | Prévention des requêtes excessives |
| Requêtes mensuelles | Variable selon le compte | Déterminé par contrat |

### En cas de dépassement de la limite

- Le code d'état HTTP `429 Too Many Requests` est renvoyé
- Réessayez après un court instant

---

## Points de terminaison de l'API

### URL de base

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### API de lecture (GET)

| Point de terminaison | Description |
|------------|------|
| `GET /items` | Consulter la liste de vos éléments |
| `GET /items/{token}` | Consulter le détail d'un élément |
| `GET /templates` | Consulter la liste de vos modèles |
| `GET /templates/{token}` | Consulter le détail d'un modèle |
| `GET /templates/shared` | Liste des modèles en cours de partage (suppression prévue — fin de la fonction de partage en v3) |
| `GET /user/stats` | Consulter les statistiques utilisateur |

### API d'écriture (POST)

| Point de terminaison | Description |
|------------|------|
| `POST /templates` | Créer un nouveau modèle |
| `POST /templates/{token}/share` | Partager un modèle (suppression prévue — fin de la fonction de partage en v3) |
| `POST /templates/revoke` | Révoquer un partage (suppression prévue — fin de la fonction de partage en v3) |
| `POST /templates/{token}/send` | Envoyer un modèle |
| `POST /templates/{token}/check-ownership` | Vérifier la possession d'un élément cloné |
| `POST /templates/{token}/log` | Ajouter un log, mettre à jour mots-clés/permissions/image |

---

## Spécification détaillée de l'API

<details>
<summary><h3>GET /items - Liste des éléments</h3></summary>
<div class="manual-content" markdown="1">

Consulte la liste des éléments (documents) que vous possédez.

#### Requête

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Paramètres de requête

| Paramètre | Type | Valeur par défaut | Description |
|----------|------|--------|------|
| page | number | 1 | Numéro de page |
| pageSize | number | 20 | Éléments par page (max. 100) |
| status | string | "active" | Filtre de statut (active, pending) |
| type | string | - | Filtre de type (paper, stamp) |

#### Réponse

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
<summary><h3>GET /items/{token} - Détail d'un élément</h3></summary>
<div class="manual-content" markdown="1">

Consulte les informations détaillées d'un élément spécifique.

#### Requête

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items/{token}"
```

#### Réponse

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
<summary><h3>GET /templates - Liste des modèles</h3></summary>
<div class="manual-content" markdown="1">

Consulte la liste des modèles (tampons) que vous possédez.

#### Requête

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates?page=1&pageSize=20"
```

#### Paramètres de requête

| Paramètre | Type | Valeur par défaut | Description |
|----------|------|--------|------|
| page | number | 1 | Numéro de page |
| pageSize | number | 20 | Éléments par page (max. 100) |

#### Réponse

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
<summary><h3>GET /templates/shared - Modèles en cours de partage</h3></summary>
<div class="manual-content" markdown="1">

Consulte la liste des modèles actuellement partagés.

#### Requête

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/shared"
```

#### Réponse

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
<summary><h3>GET /user/stats - Statistiques utilisateur</h3></summary>
<div class="manual-content" markdown="1">

Consulte vos statistiques d'utilisation.

#### Requête

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/user/stats"
```

#### Réponse

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
<summary><h3>POST /templates - Créer un modèle</h3></summary>
<div class="manual-content" markdown="1">

Crée un nouveau modèle (tampon).

#### Requête

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

#### Corps de la requête

| Champ | Type | Requis | Description |
|------|------|------|------|
| imageUrl | string | Oui | URL de l'image (HTTPS recommandé) |
| title | string | Oui | Titre (max. 32 caractères) |
| content | string | Oui | Contenu (max. 1024 caractères) |
| commentMode | string | Non | Mode de commentaires : "independent" ou "shared" |
| ~~allowComments~~ | ~~boolean~~ | ~~Non~~ | ~~Autoriser l'ajout de logs~~ (deprecated : remplacé par `logPermission`) |
| logPermission | string | Non | Permission de log : "owner" \| "author" \| "none" (par défaut : "owner") |
| keywordPermission | string | Non | Permission de mots-clés : "owner" \| "author" \| "none" (par défaut : "owner") |
| allowEdit | boolean | Non | Modification autorisée (par défaut : true) |
| keywords | string[] | Non | Tableau de mots-clés (max. 128) |
| publishDate | string | Non | Date de début de publication (ISO 8601) |
| validUntil | string | Non | Période de validité (ISO 8601) |

#### Format des mots-clés

Les mots-clés doivent impérativement suivre le format `키:값` (clé:valeur).

| Type | Format | Exemple |
|------|------|------|
| Général | `키:값` | `품명:펜` |
| Date | `키:@YYYY-MM-DD@` | `시작일:@2025-01-15@` |
| Téléphone | `키:#전화번호#` | `연락처:#+82 10-1234-5678#` |
| Lieu | `키:%주소%` | `장소:%서울시 강남구%` |
| Montant | `키:$금액통화$` | `가격:$50000KRW$` |

#### Restrictions

- Longueur de la clé : max. 8 caractères
- Longueur totale des mots-clés : max. 256 caractères
- Nombre de mots-clés : max. 128

#### Réponse

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
<summary><h3>POST /templates/{token}/share - Partager un modèle</h3></summary>
<div class="manual-content" markdown="1">

Partage un modèle afin que d'autres utilisateurs puissent le rechercher.

#### Requête

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

#### Corps de la requête

| Champ | Type | Requis | Description |
|------|------|------|------|
| durationMinutes | number | Oui | Durée de partage (minutes). 60-43200 ou 0 (illimité) |
| tags | string[] | Oui | Tags de recherche (1-16, conversion automatique en majuscules) |
| logPermission | string | Non | Permission de log : "owner" \| "author" \| "none" (remplace le réglage de l'élément) |
| keywordPermission | string | Non | Permission de mots-clés : "owner" \| "author" \| "none" (remplace le réglage de l'élément) |

#### Valeurs de permission

| Valeur | Description |
|----|------|
| owner | Toute personne ayant cloné le modèle peut ajouter/modifier |
| author | Seul l'auteur du modèle peut ajouter/modifier |
| none | Désactivé |

#### Durée de partage

| Valeur | Signification |
|----|------|
| 60 | 1 heure |
| 1440 | 1 jour (24 heures) |
| 10080 | 1 semaine |
| 43200 | 30 jours (maximum) |
| 0 | Illimité |

#### Réponse

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
<summary><h3>POST /templates/revoke - Révoquer un partage</h3></summary>
<div class="manual-content" markdown="1">

Annule le partage d'un modèle actuellement partagé.

#### Requête

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "shareToken": "암호화된_공유_ID"
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates/revoke"
```

#### Corps de la requête

| Champ | Type | Requis | Description |
|------|------|------|------|
| shareToken | string | Oui | shareToken reçu lors du partage |

#### Réponse

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
<summary><h3>POST /templates/{token}/send - Envoyer un modèle</h3></summary>
<div class="manual-content" markdown="1">

Clone un modèle et l'envoie à un autre utilisateur.

#### Requête

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

#### Corps de la requête

| Champ | Type | Requis | Description |
|------|------|------|------|
| recipientEmail | string | Oui | E-mail du destinataire |
| message | string | Non | Message d'envoi (max. 200 caractères) |
| keywords | string[] | Non | Tableau de mots-clés à ajouter/remplacer |

#### Règles de fusion des mots-clés

Le paramètre `keywords` permet de remplacer les mots-clés par défaut du modèle ou d'en ajouter de nouveaux.

| Situation | Comportement |
|------|------|
| La clé existe déjà | **Remplacée** par la valeur de l'API |
| Nouvelle clé | **Ajoutée** à la liste des mots-clés |

**Exemple :**
- Mots-clés du modèle : `["날짜:@date@", "가격:0"]`
- Mots-clés de l'API : `["날짜:2025-01-15", "이름:홍길동"]`
- **Résultat** : `["날짜:2025-01-15", "가격:0", "이름:홍길동"]`

#### Réponse

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
<summary><h3>POST /templates/{token}/check-ownership - Vérifier la possession d'un élément cloné</h3></summary>
<div class="manual-content" markdown="1">

Vérifie si un utilisateur donné possède un élément cloné créé à partir de ce modèle.

> **Sécurité** : la consultation n'est possible que pour les modèles que vous possédez. Vous ne pouvez pas interroger les modèles d'autres utilisateurs.

#### Requête

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

#### Corps de la requête

| Champ | Type | Requis | Description |
|------|------|------|------|
| email | string | Oui | E-mail de l'utilisateur à vérifier |
| keywordKeys | string[] | Non | Liste des clés de mots-clés à consulter |

#### Réponse (en cas de possession)

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

#### Réponse (en cas de non-possession)

```json
{
  "success": true,
  "data": {
    "hasItem": false
  }
}
```

#### Champs de la réponse

| Champ | Type | Description |
|------|------|------|
| hasItem | boolean | Possession ou non |
| itemTokens | string[] | Liste des tokens d'éléments possédés (uniquement en cas de possession) |
| keywords | object | Valeurs des mots-clés demandés (uniquement si demandés) |

#### Exemple d'utilisation

Vérification de la possession et de l'état d'utilisation d'un utilisateur donné dans un système de coupons/billets :

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
<summary><h3>POST /templates/{token}/log - Ajouter un log et mettre à jour le modèle</h3></summary>
<div class="manual-content" markdown="1">

Ajoute des logs (fil d'actualité) à un modèle partagé ou met à jour les mots-clés, les permissions ou l'image. Une notification push est envoyée aux utilisateurs ayant cloné ce modèle.

#### Requête

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

#### Corps de la requête

| Champ | Type | Requis | Description |
|------|------|------|------|
| logs | array | Conditionnel* | Liste des logs à ajouter (max. 10) |
| logs[].content | string | Oui | Contenu du log (1~256 caractères) |
| keywordUpdates | array | Conditionnel* | Liste des modifications de mots-clés (max. 20) |
| keywordUpdates[].action | string | Oui | `"upsert"` ou `"delete"` |
| keywordUpdates[].key | string | Oui | Clé du mot-clé (1~8 caractères) |
| keywordUpdates[].value | string | Si upsert | Valeur du mot-clé (`key:value` cumulé max. 256 caractères) |
| permissionUpdates | object | Conditionnel* | Modification des permissions |
| permissionUpdates.logPermission | string | Non | "owner" \| "author" \| "none" |
| permissionUpdates.keywordPermission | string | Non | "owner" \| "author" \| "none" |
| imageUrl | string | Conditionnel* | Nouvelle URL d'image (retraitée en WebP 512x512) |

> \* Au moins l'un de `logs`, `keywordUpdates`, `permissionUpdates`, `imageUrl` doit être fourni.

#### Format du contenu des logs

Les logs au format `키:값` (clé de 1~8 caractères) sont rendus dans l'application sous forme de cartes info/URL :

| Format | Rendu |
|------|--------|
| `일반 텍스트` | Commentaire texte normal |
| `키:값` | Carte info (affichage clé-valeur) |
| `키:https://...` | Carte URL (lien cliquable) |

#### Réponse

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

#### Exemple d'utilisation

Mettre à jour périodiquement les mots-clés d'un élément de suivi de données et ajouter un fil d'actualités :

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

## Codes d'erreur

En cas d'échec d'une requête API, une erreur est renvoyée au format suivant :

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "에러 설명"
  }
}
```

### Liste des codes d'erreur

| Code | Statut HTTP | Description |
|------|-----------|------|
| INVALID_API_KEY | 401 | Clé API invalide |
| API_KEY_EXPIRED | 401 | Clé API expirée |
| API_DISABLED | 403 | API désactivée |
| RATE_LIMIT_EXCEEDED | 429 | Limite de requêtes dépassée |
| SCOPE_DENIED | 403 | Permissions insuffisantes |
| VALIDATION_ERROR | 400 | Erreur de saisie |
| INVALID_TOKEN | 400 | Token invalide |
| NOT_FOUND | 404 | Ressource introuvable |
| FORBIDDEN | 403 | Accès refusé (pas de propriété) |
| RECIPIENT_NOT_FOUND | 404 | Destinataire introuvable |
| INVALID_IMAGE | 400 | Erreur d'URL d'image |
| ALREADY_SHARED | 400 | Modèle déjà en cours de partage |
| NOT_SHARED | 400 | Modèle non partagé actuellement |

---

## Recommandations de sécurité

1. **Protégez votre clé API** : n'exposez jamais votre clé API dans des dépôts publics ou du code client
2. **Utilisez HTTPS** : toutes les requêtes sont transmises via HTTPS
3. **Rotation des clés** : régénérez périodiquement votre clé API
4. **Privilège minimal** : n'effectuez que les opérations nécessaires

---

## Contact

En cas de problème avec l'utilisation de l'API, contactez-nous via la page [Faire une suggestion](/inventory/suggest/).
