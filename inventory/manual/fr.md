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

<h3 id="paper">📦 Système de Papier</h3>

Dans Inventory, le **Papier** est la monnaie principale utilisée pour créer des objets.

#### Qu'est-ce que le Papier ?
- **1 Papier** est consommé lors de la création d'un objet
- Vous ne pouvez pas créer de nouveaux objets sans Papier

#### Comment obtenir du Papier

| Méthode | Quantité | Note |
|---------|----------|------|
| Nouvelle inscription | 10 Papiers + 3 Tampons | Première fois uniquement |
| Liaison Google | +10 feuilles | Pour les utilisateurs existants |
| Liaison Apple | +10 feuilles | Pour les utilisateurs existants |
| Achat en boutique | 10 feuilles | Achat intégré |

> 💡 **Astuce** : Les utilisateurs existants peuvent obtenir du Papier supplémentaire en liant de nouveaux comptes sociaux !

---

<h3 id="create-item">📄 Création d'objets</h3>

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

<h4 id="dates">Date de début et Date d'expiration</h4>

| Paramètre | Description |
|-----------|-------------|
| **Date de début** | Le contenu sera flouté jusqu'à cette date |
| **Date d'expiration** | Le contenu sera flouté et l'ajout de journaux désactivé après cette date |

Si non défini, il sera immédiatement visible et permanent.

---

<h3 id="lock">🔒 Verrouillage de Document</h3>

Vous pouvez protéger les documents en définissant un mot de passe.

#### Qu'est-ce que le Verrouillage de Document ?

Un document verrouillé ne peut être consulté qu'après avoir saisi le mot de passe correct.

| Statut | Description |
|--------|-------------|
| **Déverrouillé** | Tout le monde peut voir le contenu |
| **Verrouillé** | Contenu visible uniquement avec mot de passe |

#### Comment Verrouiller

1. Sélectionnez les **documents** que vous souhaitez verrouiller sur l'écran d'accueil (sélection multiple possible)
2. Sélectionnez **« Verrouiller les objets »** dans le menu inférieur
3. Entrez un mot de passe numérique (jusqu'à 16 chiffres)
4. Entrez le même mot de passe à nouveau pour confirmer
5. Une fois verrouillés, les objets afficheront une **icône de cadenas** et un effet de **niveaux de gris**

#### Comment Déverrouiller

1. Appuyez sur un document verrouillé pour accéder à l'écran de détail
2. Une boîte de dialogue de saisie de mot de passe apparaîtra
3. Entrez le mot de passe correct pour déverrouiller
4. Une fois déverrouillé, le verrouillage est définitivement supprimé (pour verrouiller à nouveau, définir un nouveau mot de passe)

> ⚠️ **Avertissement** : Si vous oubliez votre mot de passe, il ne peut pas être récupéré. Les documents verrouillés peuvent uniquement être **supprimés**.

#### Caractéristiques du Verrouillage

- Les mots de passe sont **stockés dans le cloud**
- L'état de verrouillage est maintenu même lors du transfert d'objets à d'autres personnes
- Les documents verrouillés n'apparaissent pas dans les résultats de recherche
- Les objets verrouillés peuvent toujours être supprimés

---

<h3 id="clip">📎 Système Clip</h3>

**Clip** est une fonctionnalité qui regroupe plusieurs documents ensemble pour une gestion plus facile.

#### Qu'est-ce qu'un Clip ?

Les clips vous permettent de gérer des documents liés comme un seul groupe.

| État | Description |
|------|-------------|
| **Documents Individuels** | Documents gérés séparément |
| **Documents Clipsés** | Gérés comme un groupe, déplacés/transférés ensemble |

#### Créer un Clip

1. Sélectionnez **2 documents ou plus** sur l'écran d'accueil
2. Appuyez sur **"Clipser ensemble"** dans le menu du bas
3. Les documents sélectionnés sont regroupés en un seul clip
4. Les documents clipsés affichent une **icône clip (📎)** dans le coin supérieur droit

> 💡 **Astuce** : Le premier document sélectionné devient la **couverture** du clip !

#### Voir les Infos du Clip

1. Entrez dans l'**écran de détail** d'un document clipsé
2. Appuyez sur le bouton **"Infos Clip"**
3. Consultez la liste de tous les éléments du clip

#### Réorganiser les Éléments dans un Clip

Vous pouvez modifier l'ordre des éléments dans l'écran d'infos du clip :

1. Appuyez longuement sur la **poignée de glissement (⋮⋮)** de l'élément à déplacer
2. Faites glisser vers la position souhaitée
3. Relâchez pour sauvegarder l'ordre

> ⚠️ **Note** : La couverture (premier élément) ne peut pas être réorganisée.

#### Exclure des Éléments d'un Clip

Vous pouvez retirer des éléments spécifiques dans l'écran d'infos du clip :

1. Appuyez sur le bouton **"Exclure"** à côté de l'élément
2. Confirmez pour retirer l'élément du clip
3. L'élément retiré redevient un document individuel

> ⚠️ **Note** : La couverture ne peut pas être exclue. S'il ne reste que 2 éléments et que vous en excluez 1, le clip se dissout automatiquement.

#### Défaire un Clip

1. Sélectionnez le document clipsé
2. Appuyez sur **"Défaire le clip"** dans le menu du bas
3. Tous les documents sont séparés en documents individuels

#### Transférer des Clips

- Quand vous envoyez un document clipsé, le **groupe entier** est transféré ensemble
- Les destinataires acceptent/refusent les clips en tant que **groupe**
- Les éléments individuels d'un clip ne peuvent pas être envoyés séparément

#### Caractéristiques des Clips

- Les documents clipsés sont **déplacés/transférés ensemble**
- Définir un verrou sur la couverture protège tout le clip
- L'icône clip (📎) permet d'identifier facilement l'état du clip
- Au moins 2 documents sont nécessaires pour maintenir un clip

---

<h3 id="badge">🏷️ Système de Badge</h3>

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

#### Affichage de la carte d'inventaire

Les badges gravés (état actif) affichent un aperçu de l'image gravée en haut à droite de la carte d'inventaire.
Cela vous permet d'identifier rapidement à quel domaine appartient le badge.

---

<h3 id="stamp">🔖 Système de Tampon</h3>

Un **Tampon** est un objet qui vous permet de créer des modèles et de les partager avec d'autres.

#### Affichage de la carte d'inventaire

Les tampons avec modèles (état actif) sont affichés de manière spéciale dans l'inventaire :
- **Arrière-plan** : Image du modèle affichée à 33% d'opacité
- **Premier plan** : Image du tampon gravé

Cela vous permet d'identifier rapidement de quel modèle il s'agit.

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

<h3 id="quick-input">⚡ Saisie Rapide</h3>

Lors de l'ajout d'entrées de journal, appuyez sur le bouton `+` pour ouvrir le menu **Saisie Rapide** permettant une saisie facile d'informations spéciales.

#### Types de Saisie Rapide

| Type | Description | Exemple |
|------|-------------|---------|
| **Mot-clé** | Format Clé:Valeur | `État:Bon` |
| **Date** | Date avec calcul J-J | J-5, Jour-J, J+3 |
| **Téléphone** | Numéro de téléphone | Appel direct |
| **Lieu** | Adresse/coordonnées | Ouvre l'app carte |
| **Montant** | Format monétaire | Formatage auto |

#### Actions Appui Long

| Type de Carte | Action Appui Long |
|--------------|------------------|
| **📅 Date** | Définir/Supprimer alarme |
| **📞 Téléphone** | Mobile: Appel direct, Bureau: Copier |
| **📍 Lieu** | Mobile: Ouvrir la carte, Bureau: Copier |
| **💰 Montant** | Copier dans le presse-papiers |

<h4 id="alarm">Réglage d'Alarme de Date</h4>

Appuyez longuement sur une carte de date pour définir une alarme :

1. **Appui long** sur la carte de date
2. Sélectionnez **Définir** dans la boîte de dialogue de confirmation
3. Une fois définie, la couleur de la carte change et une icône 🔔 apparaît
4. Appuyez à nouveau longuement pour supprimer l'alarme

> 💡 **Astuce** : Les cartes de date affichent automatiquement le calcul J-J (ex : J-5, Jour-J, J+3)

---

<h3 id="log">📝 Système de Journal</h3>

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

**Liens médias (Cartes URL) :**

Lorsque vous entrez une URL dans un journal, elle s'affiche automatiquement comme **carte enrichie**.

| Plateforme | Affichage | Exemple |
|------------|-----------|---------|
| **YouTube** | Miniature + Titre + Chaîne | `https://youtube.com/watch?v=...` |
| **Spotify** | Pochette + Titre + Artiste | `https://open.spotify.com/track/...` |
| **Google Drive** | Miniature fichier + Nom | `https://drive.google.com/file/d/...` |
| **Dropbox** | Icône + Nom de fichier | `https://dropbox.com/s/...` |
| **OneDrive** | Icône + Nom du service | `https://1drv.ms/...` |
| **Pages web** | Miniature + Titre de page | `https://example.com` |

- Utilisez le format `clé:URL` pour afficher avec un mot-clé (ex: `docs:https://youtube.com/...`)
- **Touchez** la carte pour l'ouvrir dans l'app/navigateur externe
- **Appuyez longuement** pour copier l'URL dans le presse-papiers

> 💡 **Astuce** : Les fichiers Google Drive doivent être **partagés publiquement** pour afficher les miniatures.

**Journaux automatiques :**

Lorsqu'un objet est transféré, un journal de transfert est automatiquement enregistré :
- Affiché au format `Expéditeur → Destinataire`
- Si un badge est équipé, le nom de domaine est affiché

#### Conditions de fin de journal partagé

- **Tampon original supprimé** : Impossible d'ajouter des journaux partagés (lecture seule)
- **Date d'expiration dépassée** : Impossible d'ajouter des journaux partagés (lecture seule)

#### 🔔 Indicateur non lu

Lorsque de nouveaux commentaires sont ajoutés à un journal partagé, la bordure de l'élément **pulse** dans la vue inventaire.

- La pulsation démarre immédiatement lorsqu'un autre utilisateur ajoute un commentaire
- La pulsation s'arrête lorsque vous ouvrez et consultez le document
- L'état de lecture est sauvegardé dans le cloud et synchronisé sur tous les appareils

> 💡 **Astuce** : Vérifiez les éléments qui pulsent pour ne jamais manquer de nouveaux commentaires !

---

<h3 id="ink">🎨 Système d'Encre</h3>

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

<h3 id="search">🔍 Fonction de Recherche</h3>

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

<h4 id="keyword">Agrégation de mots-clés</h4>

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

### 📱 Badge du menu inférieur

Des badges rouges sur les icônes du menu inférieur indiquent l'état actuel.

| Menu | Signification du badge |
|------|------------------------|
| **Envoyer** | Nombre d'objets pouvant être envoyés (transférables parmi les sélectionnés) |
| **Recevoir** | Nombre de transactions en attente (nécessitant acceptation/retour) |
| **Action** | Nombre d'actions disponibles avec les objets sélectionnés |

> 💡 Les numéros des badges s'animent avec un effet de bulle lorsqu'ils changent.

---

<h3 id="transfer">📤 Envoyer des objets</h3>

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

<h3 id="partition">📂 Fonction Partition</h3>

Vous pouvez grouper les objets avec des partitions quand vous en avez beaucoup.

#### Créer une Partition

1. Sélectionnez des objets
2. Sélectionnez **"Créer une partition"** dans le menu du bas
3. Entrez le nom de la partition (max 16 caractères)

#### Caractéristiques des Partitions

- Les partitions sont **enregistrées uniquement sur l'appareil**
- La structure des partitions n'est pas visible sur les autres appareils
- Les objets eux-mêmes sont stockés dans le cloud et visibles sur tous les appareils

#### Réduire/Développer

Utilisez le bouton fléché (▼/▲) à droite de l'en-tête de partition pour réduire ou développer.

- L'état réduit est conservé après le redémarrage de l'application
- Toutes les partitions sont automatiquement développées pendant la recherche
- Vous pouvez glisser des éléments vers des partitions réduites

#### Tout sélectionner dans la Partition

Appuyez sur l'en-tête de partition pour sélectionner/désélectionner tous les éléments de cette partition.

| Indicateur | Signification |
|------------|---------------|
| ○ (Cercle vide) | Aucun sélectionné |
| ◐ (Demi-cercle) | Certains sélectionnés |
| ● (Cercle plein) | Tous sélectionnés |

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
