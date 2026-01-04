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

Accedez a vos donnees de l'application Inventory de maniere programmatique via notre API externe.

---

## Apercu

### Qu'est-ce que l'API?

L'API externe fournit une interface pour acceder aux donnees de l'application Inventory depuis des programmes externes.

### Cas d'utilisation

- **Automatisation**: Traitement par lots de documents via des scripts
- **Integration tierce**: Synchronisation des donnees avec d'autres services
- **Operations en masse**: Creation et partage de modeles en masse

---

## Demarrage

### Obtenir une cle API

Pour utiliser l'API, vous avez d'abord besoin d'une cle API.

1. Ouvrez l'ecran **Profil** dans l'application Inventory
2. Trouvez la section **Cle API**
3. Appuyez sur le bouton **Generer la cle**
4. Votre cle API sera affichee a l'ecran

> **Important**: La cle API n'est affichee qu'**une seule fois** lors de sa generation. Assurez-vous de la copier et de la conserver dans un endroit sur. En cas de perte, vous devrez la regenerer.

### Format de la cle API

Les cles API suivent ce format:

```
inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Commence par le prefixe `inv_`
- Chaine encodee Base64URL d'environ 50 caracteres

### Gestion des cles API

- **Regenerer**: Revoque la cle existante et en emet une nouvelle
- **Supprimer**: Supprime completement la cle API (acces API desactive)

---

## Authentification

Toutes les requetes API necessitent un en-tete `Authorization`.

### Jeton Bearer

```bash
Authorization: Bearer inv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Exemple de requete

```bash
curl -H "Authorization: Bearer inv_your_api_key" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items"
```

---

## Limitation du debit

L'utilisation de l'API est soumise a des limites.

| Type de limite | Seuil | Description |
|----------------|-------|-------------|
| Par minute | 60 requetes | Empeche les requetes excessives |
| Mensuel | Varie selon le compte | Determine par contrat |

### En cas de depassement de limite

- Le code de statut HTTP `429 Too Many Requests` est retourne
- Veuillez patienter et reessayer plus tard

---

## Points de terminaison API

### URL de base

```
https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1
```

### API de lecture (GET)

| Point de terminaison | Description |
|---------------------|-------------|
| `GET /items` | Lister vos articles |
| `GET /items/{token}` | Obtenir les details d'un article |
| `GET /templates` | Lister vos modeles |
| `GET /templates/{token}` | Obtenir les details d'un modele |
| `GET /templates/shared` | Lister les modeles partages |
| `GET /user/stats` | Obtenir les statistiques utilisateur |

### API d'ecriture (POST)

| Point de terminaison | Description |
|---------------------|-------------|
| `POST /templates` | Creer un nouveau modele |
| `POST /templates/{token}/share` | Partager un modele |
| `POST /templates/revoke` | Revoquer le partage |
| `POST /templates/{token}/send` | Envoyer un modele |

---

## Reference API detaillee

<details>
<summary><h3>GET /items - Lister les articles</h3></summary>
<div class="manual-content" markdown="1">

Recupere une liste des articles (documents) que vous possedez.

#### Requete

```bash
curl -H "Authorization: Bearer inv_xxx" \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/items?page=1&pageSize=20"
```

#### Parametres de requete

| Parametre | Type | Defaut | Description |
|-----------|------|--------|-------------|
| page | number | 1 | Numero de page |
| pageSize | number | 20 | Articles par page (max 100) |
| status | string | "active" | Filtre de statut (active, pending) |
| type | string | - | Filtre de type (paper, stamp) |

#### Reponse

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "token": "id_article_chiffre",
        "title": "Titre de l'article",
        "content": "Contenu de l'article",
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
<summary><h3>POST /templates - Creer un modele</h3></summary>
<div class="manual-content" markdown="1">

Cree un nouveau modele (tampon).

#### Requete

```bash
curl -X POST \
     -H "Authorization: Bearer inv_xxx" \
     -H "Content-Type: application/json" \
     -d '{
       "imageUrl": "https://example.com/image.png",
       "title": "Titre du modele",
       "content": "Contenu du modele",
       "commentMode": "independent",
       "keywords": ["produit:ordinateur", "prix:$1500EUR$"]
     }' \
     "https://asia-northeast3-inventory-app-service.cloudfunctions.net/apiV1/templates"
```

#### Corps de la requete

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| imageUrl | string | Oui | URL de l'image (HTTPS recommande) |
| title | string | Oui | Titre (max 32 caracteres) |
| content | string | Oui | Contenu (max 1024 caracteres) |
| commentMode | string | Non | Mode commentaire: "independent" ou "shared" |
| keywords | string[] | Non | Tableau de mots-cles (max 128) |

#### Format des mots-cles

Les mots-cles doivent suivre le format `cle:valeur`.

| Type | Format | Exemple |
|------|--------|---------|
| General | `cle:valeur` | `produit:stylo` |
| Date | `cle:@AAAA-MM-JJ@` | `debut:@2025-01-15@` |
| Telephone | `cle:#telephone#` | `contact:#+33 6 12 34 56 78#` |
| Lieu | `cle:%adresse%` | `lieu:%Paris, 8eme%` |
| Montant | `cle:$montantDevise$` | `prix:$50000EUR$` |

#### Reponse

```json
{
  "success": true,
  "data": {
    "token": "id_modele_chiffre",
    "title": "Titre du modele",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

</div>
</details>

<details>
<summary><h3>POST /templates/{token}/share - Partager un modele</h3></summary>
<div class="manual-content" markdown="1">

Partage un modele pour que d'autres utilisateurs puissent le decouvrir.

#### Requete

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

#### Corps de la requete

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| durationMinutes | number | Oui | Duree de partage (minutes). 60-43200 ou 0 (illimite) |
| tags | string[] | Oui | Tags de recherche (1-16, majuscules auto) |

#### Reponse

```json
{
  "success": true,
  "data": {
    "shareToken": "id_partage_chiffre",
    "expiresAt": "2025-01-02T00:00:00Z",
    "tags": ["TAG1", "TAG2"]
  }
}
```

</div>
</details>

---

## Codes d'erreur

Lorsqu'une requete API echoue, les erreurs sont retournees dans ce format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Description de l'erreur"
  }
}
```

### Liste des codes d'erreur

| Code | Statut HTTP | Description |
|------|-------------|-------------|
| INVALID_API_KEY | 401 | Cle API invalide |
| API_KEY_EXPIRED | 401 | Cle API expiree |
| API_DISABLED | 403 | API desactivee |
| RATE_LIMIT_EXCEEDED | 429 | Limite de requetes depassee |
| VALIDATION_ERROR | 400 | Entree invalide |
| INVALID_TOKEN | 400 | Jeton invalide |
| NOT_FOUND | 404 | Ressource non trouvee |
| FORBIDDEN | 403 | Acces refuse |
| RECIPIENT_NOT_FOUND | 404 | Destinataire non trouve |

---

## Recommandations de securite

1. **Proteger les cles API**: Ne jamais exposer les cles API dans des depots publics ou du code client
2. **Utiliser HTTPS**: Toutes les requetes sont transmises via HTTPS
3. **Rotation des cles**: Regenerer periodiquement les cles API
4. **Privilege minimal**: N'effectuer que les operations necessaires

---

## Contact

Si vous avez des problemes avec l'utilisation de l'API, veuillez nous contacter via la page [Suggestions](/inventory/suggest/fr/).
