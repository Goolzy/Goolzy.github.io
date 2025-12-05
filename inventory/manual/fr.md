---
layout: inventory
title: Manuel d'utilisation
permalink: /inventory/manual/fr/
lang: fr
translations:
  ko: /inventory/manual/
  en: /inventory/manual/en/
  ja: /inventory/manual/ja/
  de: /inventory/manual/de/
  fr: /inventory/manual/fr/
  es: /inventory/manual/es/
  pt: /inventory/manual/pt/
---

## 📖 Manuel d'utilisation

Découvrez toutes les fonctionnalités de l'application Inventory en détail.

---

### 📦 Système de Papier

Dans Inventory, le **Papier** est la monnaie principale utilisée pour créer des objets.

#### Qu'est-ce que le Papier ?
- **1 Papier** est consommé lors de la création d'un objet
- Vous ne pouvez pas créer de nouveaux objets sans Papier

#### Comment obtenir du Papier

| Méthode | Quantité | Note |
|---------|----------|------|
| Nouvelle inscription | 10 feuilles | Première fois uniquement |
| Liaison Google | +10 feuilles | Lors de la liaison du compte |
| Liaison Apple | +10 feuilles | Lors de la liaison du compte |
| Achat en boutique | 10 feuilles | Achat intégré |

> 💡 **Astuce** : Liez vos comptes sociaux pour obtenir du Papier supplémentaire gratuitement !

---

### 📄 Création d'objets

#### Comment créer un objet

1. Appuyez sur votre **Papier** sur l'écran d'accueil
2. Sélectionnez **"Créer un nouvel objet"** dans le menu du bas
3. Entrez les informations de l'objet :
   - Titre (obligatoire)
   - Contenu
   - Image (optionnel)
   - Date de début (optionnel)
   - Date d'expiration (optionnel)
4. Appuyez sur **Enregistrer** et 1 Papier sera consommé pour créer l'objet

#### Date de début et Date d'expiration

| Paramètre | Description |
|-----------|-------------|
| **Date de début** | Le contenu sera flouté jusqu'à cette date |
| **Date d'expiration** | Le contenu sera flouté et l'ajout de journaux désactivé après cette date |

Si non défini, il sera immédiatement visible et permanent.

---

### 🏷️ Système de Badge

Un **Badge** est une identité unique que vous pouvez utiliser dans l'application.

#### Qu'est-ce qu'un Badge ?

Lorsque vous gravez un nom de domaine sur un badge, toutes vos activités dans l'application seront affichées avec votre **nom de domaine gravé** au lieu de votre email.

Exemples : `MaMarque`, `JeanDupont`, `Entreprise2025`

#### Graver un Badge

1. Achetez un badge dans la boutique (état non utilisé)
2. Appuyez sur le badge → Sélectionnez le menu **"Graver"**
3. Entrez le nom de domaine souhaité (max 32 caractères)
   - Les caractères et chiffres de toutes les langues sont autorisés
   - Les caractères spéciaux et emojis ne sont pas autorisés
4. Cliquez sur **"Vérifier la disponibilité du domaine"** pour vérifier
5. Joignez éventuellement une image 128x128
6. Cliquez sur **"Graver"** pour terminer

> ⚠️ **Attention** : Une fois gravé, le nom de domaine et l'image **ne peuvent plus être modifiés de façon permanente**. Choisissez avec soin !

#### Équiper/Déséquiper un Badge

- **Équipé** : Votre nom de domaine gravé sera affiché pour toutes les activités
- **Déséquipé** : Votre email par défaut sera à nouveau affiché
- Même si vous possédez plusieurs badges, un seul peut être équipé à la fois

---

### 🔖 Système de Tampon

Un **Tampon** est un objet qui vous permet de créer des modèles et de les partager avec d'autres.

#### Créer un modèle de Tampon

1. Achetez un tampon dans la boutique (état non utilisé)
2. Appuyez sur le tampon → Sélectionnez le menu **"Créer un nouveau modèle"**
3. Entrez les informations du modèle :
   - **Image** (obligatoire)
   - **Titre** (max 32 caractères)
   - **Contenu** (max 1024 caractères)
   - **Date de début** (optionnel) - Contenu masqué jusqu'à cette date
   - **Date d'expiration** (optionnel) - Ajout de journaux désactivé après
   - **Mode journal** - Journal solo ou Journal partagé
4. Cliquez sur **"Créer le modèle"** pour terminer

#### Dupliquer un Tampon

Lorsque vous sélectionnez un tampon activé (modèle) et du papier ensemble, le menu **"Dupliquer le modèle"** apparaît.

- 1 Papier est consommé
- Un nouvel objet avec le même modèle est créé
- En mode journal partagé, il utilise le même espace partagé que l'original

---

### 📝 Système de Journal

Les **Journaux** sont des enregistrements que vous pouvez ajouter aux objets ou modèles de tampon.

#### Modes de Journal

| Mode | Journal Solo | Journal Partagé |
|------|--------------|-----------------|
| **Emplacement** | Espace privé de chaque personne | Espace partagé basé sur le tampon original |
| **Journaux visibles** | Uniquement vos propres journaux | Journaux de tous les propriétaires |
| **Cas d'usage** | Journal personnel, notes | Collaboration, communauté |
| **Si original supprimé** | Non affecté | Impossible d'ajouter des journaux (lecture seule) |

#### Formats de Journal

Vous pouvez utiliser différents formats lors de l'écriture de journaux.

**Formats de base :**

| Format | Description | Exemple |
|--------|-------------|---------|
| Texte simple | Affiché comme bulle de chat | `Inspection terminée aujourd'hui !` |
| `clé:valeur` | Affiché comme carte info (clé 1-8 car.) | `statut:bon` |
| `---` | Affiché comme séparateur | `---` |

Utiliser la même clé plusieurs fois affiche `ancienne valeur → nouvelle valeur`.

**Stylisation du texte :**

| Format | Effet | Exemple |
|--------|-------|---------|
| `<[texte]>` | Carte couleur principale (fond + texte) | `<[Important]>` |
| `[<texte>]` | Carte grise + texte couleur principale | `[<Attention>]` |
| `[texte]` | Carte grise | `[Note]` |
| `<texte>` | Texte couleur principale | `<Accent>` |
| `(texte)` | Texte couleur secondaire | `(Info supplémentaire)` |
| `"texte"` | **Gras** | `"Contenu important"` |
| `'texte'` | <u>Souligné</u> | `'Partie mise en évidence'` |
| `!texte!` | ~~Barré~~ | `!Contenu supprimé!` |

> 💡 Les styles peuvent être imbriqués jusqu'à 3 niveaux. Exemple : `<["Gras couleur principale"]>`

**Journaux automatiques :**

Lorsqu'un objet est transféré, un journal de transfert est automatiquement enregistré :
- Affiché au format `Expéditeur → Destinataire`
- Si un badge est équipé, le nom de domaine est affiché

#### Conditions de fin de journal partagé

- **Tampon original supprimé** : Impossible d'ajouter des journaux partagés (lecture seule)
- **Date d'expiration dépassée** : Impossible d'ajouter des journaux partagés (lecture seule)

---

### 🎨 Système d'Encre

L'**Encre** est un objet qui change la couleur du thème de l'application.

#### Comment utiliser

1. Appuyez sur une encre pour accéder à l'écran de détail
2. Cliquez sur le bouton **"Changer de thème"**
3. La couleur de toute l'application change immédiatement

#### Types d'Encre

| Encre | Couleur |
|-------|---------|
| **Encre Noire** | Thème noir par défaut |
| **Encre Dorée** | Thème doré luxueux |

---

### 🔍 Fonction de Recherche

#### Recherche de base

Appuyez sur la barre de recherche en haut pour activer le mode recherche.

- Les résultats sont filtrés en **temps réel** pendant la saisie
- Appuyez sur le bouton X pour quitter le mode recherche

#### Recherches récentes

- Jusqu'à 5 recherches récentes sont sauvegardées
- Appuyez sur une recherche récente pour remplir automatiquement
- Supprimez individuellement avec le bouton X

#### Enregistrer comme filtre

Lorsque vous enregistrez un terme de recherche avec le bouton **"Définir comme filtre"** :

- Il apparaît comme étiquette de filtre sous la barre de recherche
- Appuyez sur l'étiquette pour filtrer instantanément
- Supprimez le filtre avec le bouton X

#### Agrégation de mots-clés

Lorsqu'un filtre est défini et que vous sélectionnez des objets, les **valeurs de mots-clés des objets sélectionnés sont automatiquement agrégées**.

**Agrégation de valeurs numériques :**
- **Somme** et **moyenne** sont calculées pour les valeurs numériques du même mot-clé
- Exemple : Sélection de `prix:1000`, `prix:2000`, `prix:3000`
- Résultat : `Somme: 6000  Moyenne: 2000`

**Agrégation de chaînes :**
- Les valeurs de chaînes du même mot-clé sont **jointes par des espaces**
- Exemple : Sélection de `tag:A`, `tag:B`, `tag:C`
- Résultat : `A B C`

**Copier les valeurs :**
- **Appuyez longuement** sur une carte d'agrégation pour copier la valeur
- Une notification apparaît lorsque la copie est terminée

> 💡 **Exemple d'utilisation** : Calculez rapidement le prix total de plusieurs objets, ou copiez les tags associés en une fois.

---

### 📤 Envoyer des objets

Vous pouvez transférer des objets lors de ventes d'occasion ou de cadeaux.

#### Comment envoyer

1. Sélectionnez **Envoyer** dans l'onglet du bas
2. **Cochez** les objets à transférer (sélection multiple possible)
3. Entrez l'email du destinataire
4. Cliquez sur le bouton **Envoyer**

#### Entrer l'email par QR Code

Au lieu de taper l'email du destinataire, vous pouvez utiliser un QR code :

1. Le destinataire affiche son QR code depuis son écran **Profil**
2. L'expéditeur appuie sur le bouton **Scanner QR**
3. Scannez le QR code avec la caméra
4. L'email est automatiquement rempli

> ⚠️ **Important** : Les objets transférés **disparaissent immédiatement** de votre inventaire. Les transferts ne peuvent pas être annulés.

---

### 📥 Recevoir des objets

Vous pouvez recevoir des objets envoyés par d'autres.

#### Comment recevoir

1. Sélectionnez **Recevoir** dans l'onglet du bas
2. La liste des objets reçus s'affiche
3. Pour chaque objet :
   - **Accepter** : Ajouté à votre inventaire
   - **Retourner** : Renvoyé à l'expéditeur

#### Notifications

- Vous recevez des notifications push lors de l'arrivée de nouveaux objets (si activées)
- L'onglet Recevoir affiche le nombre d'objets non acceptés

---

### 🛒 Utiliser la Boutique

Vous pouvez acheter divers objets dans la boutique.

#### Produits disponibles

| Produit | Utilisation |
|---------|-------------|
| **Papier** | Pour créer des objets (consommable) |
| **Tampon** | Pour créer des modèles |
| **Badge** | Pour graver un domaine unique |
| **Encre** | Pour changer la couleur du thème |

#### Comment acheter

1. Sélectionnez **Boutique** dans l'onglet du bas
2. Appuyez sur le produit souhaité
3. Procédez au paiement (App Store / Google Play)
4. Livré automatiquement après le paiement

> 💡 La boutique est disponible sur toutes les plateformes (iOS, Android, Windows, macOS).

---

### 📂 Fonction Partition

Vous pouvez grouper les objets avec des partitions quand vous en avez beaucoup.

#### Créer une Partition

1. Sélectionnez des objets
2. Sélectionnez **"Créer une partition"** dans le menu du bas
3. Entrez le nom de la partition (max 16 caractères)

#### Caractéristiques des Partitions

- Les partitions sont **enregistrées uniquement sur l'appareil**
- La structure des partitions n'est pas visible sur les autres appareils
- Les objets eux-mêmes sont stockés dans le cloud et visibles sur tous les appareils

---

### 🌍 Changer de langue

7 langues sont prises en charge :
- 🇰🇷 한국어
- 🇺🇸 English
- 🇯🇵 日本語
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español
- 🇧🇷 Português

**Comment changer :**
Paramètres → Langue → Sélectionnez la langue souhaitée

---

> 📚 **D'autres questions ?** Consultez la [FAQ](/inventory/faq/fr/) ou contactez-nous via [Suggestions](/inventory/suggest/fr/).

<style>
h2 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: .5rem; margin-bottom: 1.5rem; }
h3 { color: #374151; margin-top: 2.5rem; margin-bottom: 1rem; padding-bottom: .3rem; border-bottom: 1px solid #f3f4f6; }
h4 { color: #4b5563; font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: .75rem; }
ul, ol { line-height: 1.8; }
li { margin-bottom: .5rem; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 2.5rem 0; }
blockquote { background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 4px; color: #1e40af; }
table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
th, td { padding: .75rem; border: 1px solid #e5e7eb; text-align: left; }
th { background: #f9fafb; font-weight: 600; }
code { background: #f3f4f6; padding: .2rem .4rem; border-radius: 3px; font-size: .9em; }
</style>
