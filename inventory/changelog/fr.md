---
layout: inventory
title: Journal des modifications
permalink: /inventory/changelog/fr/
lang: fr
translations:
  ko: /inventory/changelog/
  en: /inventory/changelog/en/
  ja: /inventory/changelog/ja/
  de: /inventory/changelog/de/
  fr: /inventory/changelog/fr/
  es: /inventory/changelog/es/
  pt: /inventory/changelog/pt/
  zh: /inventory/changelog/zh/
  ar: /inventory/changelog/ar/
  hi: /inventory/changelog/hi/
  id: /inventory/changelog/id/
  ru: /inventory/changelog/ru/
  it: /inventory/changelog/it/
  tr: /inventory/changelog/tr/
  vi: /inventory/changelog/vi/
  th: /inventory/changelog/th/
  pl: /inventory/changelog/pl/
---

## Journal des modifications

Consultez l'historique des mises à jour de l'application Inventory.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.3.0 <small>2026-01-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Amelioration de la disposition des articles de la boutique
La disposition des articles de la boutique a ete amelioree pour une meilleure visibilite sur les ecrans mobiles.
- **Structure a 3 lignes**: Les informations de l'article et le prix sont separes, s'affichant sans troncature meme sur les ecrans etroits
- **Prix aligne a droite**: Les informations de prix sont placees proprement sur une ligne separee avec alignement a droite
- **Espace suffisant pour les etiquettes de reduction**: Le nom et la description de l'article s'affichent completement meme avec les badges de reduction

#### En-tête de profil extensible
La zone de profil en haut de l'écran d'accueil a été repensée en panneau de type tiroir.
- **Glisser pour agrandir**: Faites glisser la barre de poignée vers le bas ou appuyez sur le nom d'utilisateur pour agrandir le panneau de profil
- **Panneau unifié**: L'en-tête et le contenu du profil (carte de profil, code QR, info API) sont intégrés dans un seul panneau
- **Animation fluide**: Effets d'animation naturels lors de l'expansion/réduction
- **Contenu principal fixe**: La grille d'inventaire reste en place lorsque le profil est étendu

#### Rebranding Pocket
Le nom des unités de classification des articles a été changé de 'Partition' à 'Pocket'.
- **Nom intuitif**: Transmet mieux le concept d'un espace pour stocker des articles, comme une poche
- **UI cohérente**: Terminologie unifiée 'Pocket' dans toute l'application
- **Support multilingue**: Traduit de manière appropriée pour chaque langue

#### Migration automatique des données
Les données 'Partition' existantes sont automatiquement converties en 'Pocket'.
- **Migration sans perte**: Vos partitions et articles existants sont préservés exactement
- **Traitement automatique**: La migration s'effectue automatiquement lors de la mise à jour
- **Transition transparente**: Aucune action requise - mettez à jour et continuez à utiliser

#### FAB Speed Dial d'actions
Les actions disponibles s'affichent sous forme de bouton flottant lorsque des articles sont sélectionnés.
- **Bouton d'action flottant**: Un FAB éclair apparaît en bas à droite lorsque des articles sont sélectionnés
- **Speed Dial**: Appuyez sur le FAB pour le déployer vers le haut et afficher les boutons d'action disponibles
- **Badge du nombre d'actions**: Le nombre d'actions disponibles s'affiche en badge sur le FAB
- **Animations fluides**: Animation d'échelle pour l'apparition/disparition du FAB, effet pop lors du changement du nombre d'actions

#### Raccourci boîte aux lettres
Vous pouvez maintenant accéder directement à la boîte aux lettres (écran de réception) depuis la barre de navigation inférieure.
- **Accès rapide**: Vérifiez les articles reçus directement depuis l'écran d'accueil
- **Icône intuitive**: L'icône de courrier représente la fonction boîte aux lettres

#### Corrections de bugs
- **Correction de l'affichage du panneau de notifications**: Correction d'un problème où les notifications ne s'affichaient pas correctement dans le panneau de notifications de l'en-tête de profil.
  - Les icônes et couleurs de notifications s'affichent maintenant correctement selon le type de notification
  - Les titres et contenus des notifications s'affichent maintenant correctement en plusieurs langues
  - Les coins arrondis des éléments de notification sont maintenant unifiés avec le style du bouton de menu

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.3 <small>2026-01-21</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Améliorations du chargement des images de badge
Correction du problème de scintillement des images de badge au redémarrage de l'application.
- **Cache persistant**: Les URLs des images de badge sont stockées localement et persistent après les redémarrages
- **Préchargement**: Toutes les images de badge en cache sont préchargées pendant l'écran de démarrage
- **Actualisation en arrière-plan**: Les images de badge sont automatiquement mises à jour en arrière-plan lorsqu'elles changent sur le serveur

#### Améliorations du système d'émoticônes
La fonction de pièce jointe d'émoticônes pour les journaux a été améliorée.
- **Correction de restauration du cache**: Les émoticônes s'affichent correctement après la réouverture de l'app
- **Optimisation de la taille des bulles**: Les bulles de messages avec émoticônes seuls sont maintenant correctement dimensionnées
- **Aperçu de sélection**: Aperçu de l'émoticône sélectionnée affiché au-dessus du champ de saisie

#### Améliorations du focus du champ de saisie
Correction des problèmes de focus du champ de saisie sur iPad.
- **Compatibilité iPad**: Le focus du champ de saisie fonctionne correctement lors de l'apparition du clavier
- **Saisie stable**: Expérience de saisie cohérente sur tous les appareils iOS

#### Améliorations du filtrage des notifications
Les notifications pour l'écran actuellement affiché sont filtrées.
- **Filtre de notifications push**: Les notifications push pour l'élément actuellement ouvert ne sont pas affichées
- **Filtre de notifications in-app**: Les toasts de notification in-app pour l'élément actuel ne sont pas affichés

#### Gestes du toast de notification
Vous pouvez maintenant interagir avec les toasts de notification in-app à l'aide de gestes.
- **Appuyer pour naviguer**: Appuyez sur la notification pour accéder directement au document concerné
- **Balayer pour fermer**: Balayez vers le haut pour fermer rapidement la notification
- **Retour haptique**: Un retour haptique est fourni pour les interactions tactiles

#### Corrections de bugs
- Correction du problème d'emoticonId manquant lors de la restauration du cache
- Correction de l'erreur de création de notification in-app Cloud Functions

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.2 <small>2026-01-10</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Ajustement de la taille de police
Vous pouvez ajuster la taille de police de l'application en 3 niveaux depuis l'écran Paramètres.
- **3 niveaux**: Choisissez entre Normal (1.0x), Moyen (1.3x) ou Grand (1.5x)
- **Application instantanée**: Les modifications sont appliquées immédiatement dans toute l'application
- **Paramètres persistants**: Votre préférence est sauvegardée même après le redémarrage de l'application

#### Fermeture automatique du clavier
Appuyez en dehors du champ de saisie du journal dans la vue détaillée de l'article pour fermer automatiquement le clavier.
- **Appuyer pour fermer**: Touchez n'importe quelle zone en dehors du champ de saisie pour fermer le clavier
- **Support iOS**: Utilisation pratique sur iPhone sans bouton de fermeture

#### Maintien de la Musique de Fond
Lorsque vous lancez l'application, la musique en lecture sur votre appareil (Spotify, YouTube Music, Apple Music, etc.) n'est pas interrompue.
- **Lecture continue de la musique** : La musique de fond d'autres applications continue de jouer même lorsque vous ouvrez l'application
- **Mélange des effets sonores** : Les effets sonores de l'application sont lus ensemble avec la musique de fond
- **Synchronisation du mode silencieux** : En mode silencieux, les effets sonores de l'application sont également mis en sourdine

#### Améliorations de l'historique de recherche et des filtres
La barre de recherche Super enregistre maintenant l'historique de recherche et la fonction de filtre a été améliorée.
- **Sauvegarde de l'historique**: Les termes de recherche sont automatiquement sauvegardés lors de l'ajout de filtres ou de la recherche de modèles partagés
- **Affichage des recherches récentes**: Affiche 5 recherches récentes lors du focus sur la barre de recherche
- **Ajout rapide de filtre**: Appuyez sur une recherche récente pour l'ajouter instantanément comme filtre
- **Amélioration de l'interface des boutons**: Les boutons Ajouter filtre et Modèles partagés sont maintenant disposés de manière compacte sur une seule ligne

#### Améliorations de la gestion des pockets
Nouveau design néomorphique pour le dialogue de nom de pocket et fonction de réorganisation par glisser-déposer.
- **Dialogue néomorphique**: Beau nouveau design avec support du mode sombre/clair
- **Réorganisation par glisser**: Maintenez l'icône de poignée enfoncée pour glisser et réorganiser les pockets
- **Nom à la création**: Définissez un nom de pocket personnalisé lors de la création

#### Affichage de la description d'aperçu des liens
Les cartes de liens attachées aux journaux affichent désormais la description de la page web (description OpenGraph).
- **Extraction automatique de la description**: La description est extraite de la métabalise og:description de la page web
- **Amélioration de l'interface de la carte**: La description s'affiche sur un maximum de 2 lignes sous le titre
- **Plateformes prises en charge**: Tous les types de liens incluant YouTube, Spotify, pages web générales, etc.

#### Modification du marqueur de style de texte
Le marqueur de texte de couleur principale a été modifié de `<texte>` à `{texte}`.
- **Résolution des conflits de citations**: Prévention des conflits avec la fonctionnalité de citation utilisant le caractère `>`
- **Système de marqueurs cohérent**: Unification avec les marqueurs de parenthèses (`{}`, `[]`, `()`)

#### Support des citations multiples
Plusieurs citations peuvent être affichées simultanément dans les journaux.
- **Rendu de citations multiples**: Deux citations ou plus avec `>` sont affichées comme des widgets de citation individuels distincts
- **Préservation de l'ordre**: Les citations sont affichées dans l'ordre d'entrée

#### Renforcement de la validation de l'envoi d'e-mails
La fonctionnalité d'envoi valide plus précisément la validité des adresses e-mail.
- **Validation des enregistrements MX**: Vérification de l'existence du serveur de messagerie du domaine de l'e-mail du destinataire
- **Prévention des erreurs**: Blocage préalable des tentatives d'envoi vers des domaines inexistants

#### Améliorations du glisser-déposer
Vous pouvez faire glisser les éléments sélectionnés sans appui long.
- **Glissement instantané**: Glissez immédiatement après la sélection (pas d'appui long nécessaire)
- **Animation de tremblement**: Les éléments sélectionnés tremblent légèrement pour indiquer qu'ils sont déplaçables
- **Contrôles intuitifs**: UX familière similaire au mode d'édition de l'écran d'accueil iOS

#### Pièces jointes Dropbox
Connectez Dropbox pour joindre des fichiers à vos journaux.
- **Plusieurs types de fichiers**: Joignez des images, vidéos, PDFs, musiques et fichiers texte
- **Support des journaux partagés**: Visualisez et téléchargez les pièces jointes dans les journaux d'éléments partagés
- **Visionneuses intégrées**: Visualisez les fichiers directement dans l'application (zoom sur les images, feuilletage des PDFs, lecture de vidéos, etc.)
- **Stockage sécurisé**: Les jetons OAuth sont chiffrés et stockés dans le stockage sécurisé de l'appareil

#### Création de journal partagé (Vue détaillée du papier)
Créez des éléments de journal partagé directement depuis la vue détaillée du papier vierge.
- **Choix journal unique/partagé**: Choisissez entre un élément unique ou un journal partagé avec plusieurs papiers
- **Sélection du nombre par curseur**: Sélectionnez de 2 jusqu'au nombre total de papiers avec un curseur
- **Sélection automatique des papiers**: Le papier actuel + les papiers les plus anciens sont sélectionnés automatiquement

#### Accessibilité clavier
Naviguez et contrôlez l'application au clavier sur les ordinateurs de bureau et avec les claviers externes connectés, sans souris.
- **Sélection de fichiers Dropbox**: Déplacez-vous entre les fichiers avec les flèches, sélectionnez avec Entrée, supprimez avec Suppr, fermez avec Échap
- **Menu de partage de documents**: Basculez les éléments inclus avec Ctrl+1/2/3, déplacez-vous entre les boutons avec les flèches gauche/droite, exécutez avec Entrée
- **Visualisation du focus**: Les éléments sélectionnés au clavier sont mis en surbrillance avec une bordure et un effet de lueur

#### Corrections de bugs
- **Compteur de badge d'action**: Correction d'un problème où le badge sur le bouton d'action ne reflétait pas correctement le nombre d'actions disponibles pour les éléments sélectionnés
- **Correction d'erreur de pièce jointe**: Correction d'une erreur qui se produisait lors de l'ajout de fichiers audio/texte depuis Dropbox
- **Amélioration de la lecture audio par balayage**: La mise en cache et la lecture automatique fonctionnent maintenant correctement lors du balayage entre les fichiers audio dans le visualiseur de médias

</div>
</details>

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Mise en page responsive du panneau de réaction
Dans la vue détaillée de l'article, le panneau de réaction de l'image s'affiche correctement sur tous les appareils de toutes tailles.
- **Mise en page responsive** : Les boutons de réaction sont distribués uniformément même sur les petits écrans
- **Largeur complète** : Le panneau utilise toute la largeur d'écran indépendamment de la taille de l'image
- **Design compact** : L'optimisation du remplissage masque moins la photo tout en conservant la zone tactile

#### Défilement infini pour la recherche de modèles partagés
Lorsqu'il y a plus de 20 résultats de recherche de modèles partagés, vous pouvez faire défiler pour charger plus de résultats.
- **Défilement infini** : Les 20 résultats suivants se chargent automatiquement lorsque vous atteignez le bas des résultats de recherche
- **Indicateur de chargement** : Un indicateur de progression s'affiche en bas pendant le chargement supplémentaire
- **Rétrocompatibilité** : Les versions antérieures de l'application affichent toujours 20 résultats comme avant

#### Mises à jour du site web
- **Support du chinois (simplifié)** : Localisation 中文(简体) ajoutée au site web (8e langue)
- **Affichage des langues prises en charge** : Icônes de drapeaux des 8 langues affichées sous les icônes de téléchargement des plateformes

#### Paramètres de langue App Store
- **Langues prises en charge iOS/macOS** : Chinois (zh) ajouté à CFBundleLocalizations

#### Amélioration de la sélection des dates
- **Plage de sélection étendue** : Possibilité de sélectionner les dates à partir de 1900 dans l'interface de sélection de date (anciennement 2000)

#### Fonction de partage de documents
Partage du contenu de documents depuis l'écran de détail avec la possibilité de copier ou d'envoyer par email.
- **Copie en presse-papiers** : Copie du texte pur après suppression des marqueurs de texte riche
- **Envoi par email** : Envoi au format HTML avec mise en forme conservée
- **Sélection facultative** : Choix de l'inclusion du titre, contenu, mots-clés, conversations et journaux système
- **Support mode clip** : Même fonctionnalité disponible dans l'écran détail des clips

#### Synchronisation du verrouillage des clips
L'état de verrouillage des éléments appartenant à un clip est synchronisé.
- **Verrouillage/déverrouillage en masse** : Le verrouillage de l'élément représentatif du clip entraîne le verrouillage de tous les éléments enfants
- **Synchronisation du mot de passe** : Tous les éléments du clip utilisent le même mot de passe de verrouillage

#### Amélioration de l'éditeur de texte riche
La manipulation des styles de texte lors de la création de modèles de tampon a été améliorée pour être plus intuitive.
- **6 styles de base** : Gras, souligné, barré, couleur principale, couleur secondaire, boîte
- **Styles imbriqués** : Possibilité d'appliquer plusieurs styles séquentiellement (ex: gras + souligné)
- **Édition claire** : Les marqueurs ne sont pas visibles et seuls les styles sont affichés
- **Barre d'outils dynamique** : La barre d'outils se positionne automatiquement sous la zone sélectionnée

#### Correction de l'espacement inférieur Android 15
Correction du problème de chevauchement de la barre de navigation système en bas sur les appareils Android 15 et supérieurs.
- **6 écrans sans barre de navigation en bas** : Détails de l'article, création de document, création de modèle de tampon et autres
- **Traitement automatique des insertions** : Espacement inférieur ajouté automatiquement selon la zone de la barre de navigation système
- **Compatibilité descendante maintenue** : Fonctionnement identique sur Android 14 et les versions antérieures

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Défilement automatique par glisser-déposer
Lorsque vous faites glisser un élément, l'écran défile automatiquement aux bords de l'écran.
- **Zone de défilement automatique** : Le défilement automatique s'active lorsque vous faites glisser vers les 10% supérieurs/inférieurs de l'écran
- **Basé sur l'accélération** : La vitesse de défilement augmente à mesure que vous vous approchez du bord
- **Retour haptique** : Une légère vibration vous avertit lorsque vous entrez dans la zone de défilement
- **Navigation facilitée entre pockets** : Parcourez rapidement de nombreux éléments ou plusieurs pockets

#### Navigation par défilement
Naviguez rapidement vers le haut ou le bas dans l'écran de détail.
- **Boutons de navigation** : Des boutons de déplacement apparaissent à côté de la barre de recherche lorsqu'il y a beaucoup de commentaires
- **Affichage selon la position** : En haut, seul le bouton vers le bas s'affiche ; en bas, seul le bouton vers le haut s'affiche
- **Design neumorphique** : Style de bouton cohérent avec le design de l'application

#### Restauration de l'animation de transition de page
L'animation de retournement de la barre de navigation inferieure et de l'ecran de reception a ete restauree.
- **Effet de retournement 3D** : Transition de page par rotation de 180 degres sur l'axe Y
- **Pages Journal/Boutique** : Animation de retournement appliquee
- **Ecran de reception** : Animation de retournement appliquee depuis le bouton boite aux lettres et le lien profond des notifications

#### Unification du design UI
Le design neumorphique a été appliqué aux écrans Envoyer, Recevoir et Boutique, unifiant l'ensemble de l'application.
- **Écrans Envoyer/Recevoir** : Ombres neumorphiques appliquées aux cartes et dialogues
- **Écran Boutique** : Effets de lueur sur les boutons d'onglets, cartes de produits style neumorphique
- **Design des champs de saisie** : Style en creux distinguant clairement les zones de saisie

#### Animation de Réorganisation des Journaux
Une animation fluide est appliquée lorsqu'un élément remonte dans la liste des journaux suite à un nouveau commentaire.
- **Effet d'échelle** : L'élément s'agrandit légèrement puis retrouve sa taille d'origine après le déplacement
- **Traitement séquentiel** : Animation ordonnée lorsque plusieurs éléments se déplacent simultanément
- **Mise en évidence visuelle** : Identification claire de l'élément le plus récent

#### Stabilisation de la Base de Données
Les problèmes de compatibilité de la base de données pouvant survenir lors des mises à jour de l'application ont été résolus.
- **Récupération Automatique**: La base de données est automatiquement recréée en cas d'incompatibilité de version
- **Préservation des Données**: Aucune perte de données grâce à la synchronisation automatique avec le serveur
- **Toutes les Plateformes**: Même solution appliquée sur iOS, Android, macOS et Windows

#### Amélioration du verrouillage par mot de passe
La sécurité et la convivialité des éléments protégés par mot de passe ont été considérablement améliorées.
- **Superposition floue**: Le contenu est entièrement masqué lors de l'accès aux éléments verrouillés
- **Design neumorphique**: Les dialogues de configuration/déverrouillage utilisent le style neumorphique
- **Affichage à 16 chiffres**: 16 petits cercles montrent l'état de saisie du mot de passe
- **Saisie sur deux lignes**: Saisissez et confirmez le mot de passe sur le même écran

#### Amélioration des paramètres de notification push
L'écran des paramètres de notification push a été réorganisé par catégories pour une gestion plus facile.
- **7 catégories**: Classées par Transaction, Journal, Expiration, Réaction, Mot-clé, Partage, Système
- **Basculement de groupe**: Activer ou désactiver une catégorie entière en un seul clic
- **Réduction/Extension**: Interface en accordéon pour afficher uniquement les catégories nécessaires
- **Notifications détaillées ajoutées**: Acceptation/Refus de transaction, Réaction, Mot-clé, Expiration/Signalement de partage, Notifications système
- **Design neumorphique**: Style neumorphique appliqué aux éléments de notification individuelle

#### Amélioration des paramètres de son
Le bouton de sourdine a reçu un design neumorphique pour exprimer l'état appuyé de manière intuitive.
- **Effet enfoncé**: Le bouton apparaît enfoncé lors de la sourdine
- **Ombre neumorphique**: État par défaut convexe, état enfoncé concave

#### Amélioration des performances de chargement des journaux
La vitesse de chargement des journaux partagés a été améliorée.
- **Chargement prioritaire du cache**: Les journaux déjà consultés s'affichent instantanément depuis le cache
- **Économie de données**: Pas de requêtes serveur lors des revisites, utilisation des données locales
- **Nouveaux commentaires en temps réel**: Les nouveaux commentaires sont reçus en temps réel même avec le cache

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Journaux Partagés de Papier
Créez des documents de journal partagé en utilisant uniquement du papier, sans tampons.
- **Sélectionner 2 papiers ou plus** → Menu "Créer un Nouvel Article (Journal Partagé)" apparaît
- **Sélectionner 1 papier** → Menu "Créer un Nouvel Article (Journal Privé)" apparaît
- Les documents créés partagent le même espace de commentaires
- Envoyez des documents à différentes personnes et discutez ensemble

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Fonction d'Édition de Badge
Modifiez l'image et les mots-clés des badges gravés.
- **Menu d'édition** : Le menu "Modifier le badge" apparaît lors de la sélection d'un badge gravé
- **Changement d'image** : Remplacez l'image du badge par une nouvelle
- **Gestion des mots-clés** : Ajoutez, supprimez ou modifiez 5 types de mots-clés

#### Optimisation des Performances d'Image
La vitesse de chargement des images réseau a été considérablement améliorée.
- **Cache local** : Les images chargées une fois sont enregistrées localement pour un affichage instantané
- **Synchronisation d'image de badge** : Les changements d'image de badge sont immédiatement reflétés dans tous les journaux

#### Auto-complétion des Destinataires Récents
Sélectionnez rapidement les destinataires récents sur l'écran d'envoi.
- **Liste d'auto-complétion** : Menu déroulant affichant jusqu'à 30 destinataires récents quand le champ de saisie est actif
- **Sélection rapide** : Recherche automatique lors de la sélection d'un destinataire dans la liste
- **Nouvelle recherche** : Effacez la sélection avec le bouton X pour chercher un autre destinataire
- **Stockage local** : Informations du destinataire sauvegardées automatiquement lors d'un envoi réussi

#### Restrictions d'Envoi Améliorées
Les badges équipés et les tampons partagés ne peuvent plus être envoyés.
- **Badges équipés** : Déséquipez le badge pour l'envoyer
- **Tampons partagés** : Révoquez le partage pour envoyer le tampon
- **Guide détaillé** : Affiche des messages spécifiques expliquant la raison de la restriction

#### Système de Réactions
Réagissez aux éléments avec des expressions émotionnelles.
- **12 Réactions** : Diverses expressions émotionnelles comme J'aime, J'adore, Meilleur, Félicitations, et plus
- **Basculer la réaction** : Annulez en cliquant à nouveau sur la réaction sélectionnée
- **Enregistrement des journaux** : Les journaux système enregistrent quand les réactions sont sélectionnées ou annulées
- **Support multilingue** : Les noms des réactions sont affichés dans la langue de l'utilisateur

#### Amélioration de la Fonction de Recherche
La recherche en temps réel inclut désormais les noms d'éléments et les mots-clés.
- **Recherche par nom d'élément** : Recherchez par titre de document, description de tampon ou nom de domaine de badge
- **Recherche par mot-clé** : Recherchez par mots-clés enregistrés sur les tampons et badges
- **Recherche par tag** : Recherchez également par tags de modèle de tampon

#### Amélioration des Notifications In-App
Les notifications toast en temps réel ont été améliorées.
- **Affichage du badge de l'expéditeur** : L'image du badge de l'expéditeur s'affiche en ligne dans la notification
- **Style Dynamic Island** : Animation toast élégante dans le style Dynamic Island d'iOS
- **Détection en temps réel** : Détection précise des nouvelles notifications et des mises à jour basée sur l'ID et l'horodatage
- **Suppression automatique** : Les notifications associées aux éléments sont automatiquement supprimées lors de l'accès à leur écran de détails

#### Corrections de bugs
- **Stabilisation de l'UI détail du document** : Correction du problème où la barre de recherche et les filtres tremblaient lorsque les journaux partagés/individuels étaient à la limite de l'écran
- **Correction du tremblement de défilement** : Résolution du scintillement de l'écran lors du défilement vers le haut dans les documents/tampons avec peu de journaux
- **Correction du défilement vers le haut** : Résolution du problème où les informations de l'auteur ne pouvaient pas être atteintes par défilement dans les éléments avec des journaux
- **Format du journal de réaction amélioré** : Les émoticônes et les noms sont maintenant affichés ensemble
- **Affichage du nom d'utilisateur corrigé** : Le nom de domaine s'affiche maintenant correctement lorsqu'un badge est porté
- **Correction de la première notification du journal partagé** : Résolution du problème où le premier toast du journal partagé ne s'affichait pas
- **Correction de l'image de notification push** : L'image du document s'affiche maintenant en priorité (au lieu de l'image du badge)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Traduction Automatique Multilingue
Les documents, tampons et journaux sont automatiquement traduits dans votre langue.
- **Traduction automatique** : Traduction automatique dans la langue de l'utilisateur lors de la consultation des documents, tampons et journaux
- **Langues prises en charge** : Coréen, anglais, japonais, espagnol, français, allemand, portugais
- **Basculer vers l'original** : Passez de l'original à la traduction avec le bouton [Voir l'original]
- **Cache de traduction** : Le cache serveur et local empêche les demandes de re-traduction
- **Cache par langue** : Utilise instantanément le cache enregistré lors du changement de langue

#### Système de tutoriels
Des tutoriels étape par étape ont été ajoutés pour vous guider dans l'utilisation de l'application.
- **Écran d'inventaire** : Sélection d'éléments, déplacement de pocket, utilisation du menu inférieur (8 étapes)
- **Écran Envoyer/Recevoir** : Saisie du destinataire, scan QR, méthodes de transfert/réception
- **Écran Boutique** : Navigation des catégories de produits et méthodes d'achat
- **Écran Profil** : Informations du compte et paramètres
- **Écran Paramètres** : Paramètres de l'application et changement de thème
- **Modèle de tampon** : Processus complet de création de modèle (9 étapes)
- **Fonction de recherche** : Utilisation des filtres et sauvegarde des termes de recherche
- Affiché uniquement lors de la première utilisation ; peut être revu dans les Paramètres

#### Optimisation des performances des journaux
La vitesse de chargement et l'utilisation des données des journaux partagés/indépendants ont été considérablement améliorées.
- **Chargement rapide** : Charger d'abord uniquement les 100 derniers commentaires
- **Défilement infini** : Charger 50 commentaires plus anciens en faisant défiler
- **Cache local** : Affichage instantané grâce au cache lors des revisites
- **Sync en temps réel** : Recevoir efficacement uniquement les nouveaux commentaires
- **Économie de données** : Empêche les re-téléchargements inutiles

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Cartes de liens médias
Les URLs entrées dans les journaux s'affichent automatiquement comme **cartes enrichies**.
- **YouTube** : Miniature + titre + nom de chaîne
- **Spotify** : Pochette d'album + titre + artiste
- **Google Drive** : Miniature de fichier + nom (fichiers publics)
- **Dropbox** : Icône + nom de fichier
- **OneDrive** : Icône + nom du service
- **Pages web** : Image d'aperçu + titre de page
- Touchez pour ouvrir dans l'app/navigateur externe
- Appuyez longuement pour copier l'URL dans le presse-papiers

#### Améliorations de la recherche de modèles partagés
- **Vérification du papier** : Le bouton de clonage affiche le nombre de papiers restants (Papier:10)
- **Papier requis** : Le clonage est désactivé si aucun papier n'est disponible
- **Design neumorphique** : L'écran de recherche utilise maintenant un style UI neumorphique

#### Améliorations du système d'effets de l'éditeur d'images
L'interface de sélection des effets spéciaux a été simplifiée.
- **Sélection unique** : Choisissez un seul effet parmi 5
- **Liste des effets** : Original / Suppression d'arrière-plan / Bokeh / Bloom / Monochrome
- **Transitions fluides** : Indicateur de progression pendant le traitement
- **Amélioration des performances** : Filtres Bloom/Monochrome traités en arrière-plan

#### Performance et stabilité
La structure interne de l'application a été optimisée.
- **Optimisation des requêtes** : Traitement parallèle pour un chargement plus rapide des clips/filtres
- **Nettoyage du code** : 12 modules de code inutilisés supprimés
- **Nettoyage des dépendances** : 7 bibliothèques inutilisées supprimées
- **Nettoyage des ressources** : Polices/images inutilisées supprimées (environ 16 Mo de réduction)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Fonction Clip
Regroupez plusieurs documents ensemble pour une gestion plus facile.
- **Créer un clip**: Sélectionnez 2+ documents et appuyez sur "Clipser ensemble"
- **Icône clip**: Les documents clipsés affichent une icône clip dans le coin supérieur droit
- **Détails du clip**: Voir les éléments internes via le bouton "Infos clip" dans l'écran de détail
- **Réorganiser**: Faites glisser pour réorganiser les éléments dans un clip (sauf couverture)
- **Exclure des éléments**: Retirer des éléments spécifiques d'un clip (sauf couverture)
- **Défaire le clip**: Dissoudre complètement un clip en documents individuels
- **Dissolution auto**: Le clip se dissout automatiquement quand il ne reste qu'un seul élément
- **Transfert**: Les clips sont envoyés/reçus en tant que groupe

#### Améliorations de la Recherche de Modèles Partagés
Ergonomie améliorée pour l'écran de recherche de modèles partagés.
- **Cartes en ligne**: Les résultats de recherche affichés en format de liste compacte
- **Affichage d'image complet**: Les vignettes affichées dans les proportions originales sans recadrage
- **Détails étendus**: Voir le contenu, les mots-clés et la date d'expiration dans la feuille de détails
- **Aperçu des mots-clés**: Voir les mots-clés par défaut définis pour le modèle
- **Date d'expiration**: Vérifier quand le modèle partagé expire

#### Amélioration du Déverrouillage par Mot de Passe
- La saisie du mot de passe correct **déverrouille définitivement** le document
- Avant: Consultation seulement, verrouillage maintenu → Maintenant: Entièrement déverrouillé

#### Corrections de Bugs
- Les éléments clip étaient comptés individuellement dans l'écran de réception - corrigé
- Le badge de réception de la barre de navigation incluait les éléments internes du clip - corrigé
- Le badge (Nametag) n'était pas déséquipé lors du remboursement/suppression - corrigé
- Le domaine restait occupé après la suppression du badge - corrigé

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Indicateur de Journal Partagé Non Lu
Lorsque de nouveaux commentaires sont ajoutés aux journaux partagés, la bordure de l'élément **pulse**.
- Repérez facilement les journaux partagés non lus dans votre inventaire
- La pulsation s'arrête lorsque vous ouvrez le document
- L'état de lecture se synchronise sur tous les appareils

#### Guide d'Utilisation du Tampon
Lorsque vous sélectionnez un tampon gravé, les papiers disponibles **pulsent** pour vous guider.
- UX améliorée pour la duplication de modèle
- Guidage intuitif vers l'étape suivante

#### Améliorations des Pockets
- **Réduire/Développer**: Basculer les pockets avec les boutons fléchés (▼/▲)
- **Tout sélectionner**: Appuyer sur l'en-tête de pocket pour sélectionner/désélectionner tous les éléments
- Indicateurs d'état de sélection (○/◐/●)
- Glisser-déposer vers les pockets réduites

#### Commodité de la Boutique
Processus de paiement simplifié pour les achats consécutifs du même article.
- Dialogues de confirmation ignorés dans les 10 minutes suivant le dernier achat
- Achat en gros plus rapide

#### Améliorations de l'Interface
- Lisibilité améliorée avec nouvelle police de titre
- Les cartes de tampon affichent l'aperçu du modèle en arrière-plan (33% d'opacité)
- Les cartes de badge affichent l'aperçu de l'image gravée
- Le menu inférieur affiche le badge du nombre d'actions disponibles
- Ajustement des couleurs du thème encre noire (meilleure lisibilité du texte)
- Images de produits optimisées (taille réduite, chargement plus rapide)

#### Corrections de bugs
- Effet de pulsation sur ses propres commentaires corrigé
- Coupure du champ de saisie sur la navigation gestuelle corrigée
- Écran gris lors de la réduction des pockets corrigé
- Gestion des permissions de notification push améliorée

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Fonction de Verrouillage de Document
- Définir un mot de passe numérique sur les documents (jusqu'à 16 chiffres)
- Les documents verrouillés affichent niveaux de gris + icône de cadenas
- Déverrouiller avec le mot de passe correct (usage unique)
- L'état de verrouillage persiste après le transfert d'objet
- Les documents verrouillés sont exclus des résultats de recherche

#### Système de Saisie Rapide
Saisissez facilement des informations spéciales via le bouton `+` lors de l'écriture de journaux:
- **Mot-clé:Valeur** - Carte mot-clé générale
- **Alarme de date** - Carte de date (calcul D-Day automatique, paramètres d'alarme)
- **Numéro de téléphone** - Formatage automatique par pays
- **Emplacement/Adresse** - Intégration app de cartes
- **Montant** - Affichage automatique du symbole de devise

#### Actions des Cartes Spéciales
**Appuyez longuement** sur les informations spéciales dans les journaux pour activer des fonctionnalités supplémentaires:
- **Carte de date**: Définir/annuler l'alarme
- **Carte de téléphone**: Appeler directement / Copier dans le presse-papiers
- **Carte d'emplacement**: Ouvrir dans l'app de cartes / Copier dans le presse-papiers
- **Carte de montant**: Copier dans le presse-papiers

#### Améliorations de l'Interface
- Design neumorphique des puces de filtre
- Amélioration du défilement de la barre de recherche
- L'AppBar de l'écran de détail de l'élément affiche le nom de l'élément

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copier">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**Première version officielle**

#### Système de Papier
- Introduction du système de monnaie pour la création de documents
- 10 feuilles de Papier offertes à l'inscription
- 10 feuilles supplémentaires pour chaque liaison Google/Apple
- Papier disponible à l'achat en boutique

#### Création de documents
- Créer des documents avec du Papier
- Ajouter titre, contenu et images
- Options de date de début/d'expiration

#### Système de Badge
- Fonction de gravure de nom de domaine unique
- Nom de domaine gravé utilisé comme identité utilisateur
- Gestion d'activation par équiper/déséquiper
- Option de pièce jointe image 128x128

#### Système de Tampon
- Fonction de création de modèle
- Sélection du mode Journal solo/Journal partagé
- Fonction de duplication de modèle
- Paramètres de date de début/d'expiration

#### Fonction Journal
- Enregistrer des journaux sur documents/tampons
- Journal solo : Enregistrements personnels uniquement
- Journal partagé : Partager avec les propriétaires de duplicata
- Support de carte info format clé:valeur

#### Système d'Encre
- Fonction de changement de couleur de thème
- Encre Noire, Encre Dorée

#### Transfert d'objets
- Envoyer des objets via adresse email
- Remplissage auto de l'email par scan QR
- Accepter ou retourner les objets reçus
- Envoyer plusieurs objets à la fois

#### Pocket
- Fonction de regroupement d'objets
- Stockage local spécifique à l'appareil

#### Fonction de recherche
- Filtrage de recherche en temps réel
- Sauvegarder les termes de recherche comme filtres
- Sauvegarde auto des recherches récentes (jusqu'à 5)

#### Boutique
- Acheter Papier, Tampons, Badges, Encre
- Disponible sur toutes les plateformes

#### Compte
- Connexion Google, Apple, Email
- Gagner du Papier supplémentaire en liant les comptes sociaux

#### Support multilingue
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>Suggérez de nouvelles fonctionnalités !</strong> Partagez vos idées sur <a href="/inventory/suggest/fr/">Suggestions</a> et nous les examinerons activement.
</div>

<style>
/* Conteneur de version */
details.changelog-version {
  background: rgba(21, 10, 40, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

details.changelog-version:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
}

details.changelog-version[open] {
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
}

/* En-tête Summary */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* Icône flèche */
details.changelog-version summary::before {
  content: '▶';
  margin-right: 0.75rem;
  color: #a855f7;
  transition: transform 0.25s ease;
  font-size: 0.85rem;
}

details.changelog-version[open] summary::before {
  transform: rotate(90deg);
}

details.changelog-version[open] summary {
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

/* Titre de version */
.version-title {
  flex: 1;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.15rem;
  font-weight: 600;
}

.version-title small {
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 400;
  margin-left: 0.5rem;
}

/* Bouton de copie */
.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(168, 85, 247, 0.25);
  transform: scale(1.1);
}

.copy-btn svg { fill: #a855f7; }
.copy-btn:hover svg { fill: #14b8a6; }
.copy-btn.copied { background: rgba(20, 184, 166, 0.2); }
.copy-btn.copied svg { fill: #14b8a6; }

/* Contenu de version */
.version-content {
  padding: 1.25rem 1.5rem;
  background: rgba(10, 6, 20, 0.4);
  color: rgba(255, 255, 255, 0.9);
}

.version-content h4 {
  color: #14b8a6;
  font-size: 1.05rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.version-content h4:first-child { margin-top: 0; }
.version-content ul { line-height: 1.8; }
.version-content li { margin-bottom: 0.5rem; }
.version-content strong { color: #14b8a6; }

/* Pied de page */
.changelog-footer {
  background: rgba(20, 184, 166, 0.15);
  border-left: 4px solid #14b8a6;
  padding: 1rem 1.25rem;
  margin-top: 2rem;
  border-radius: 0 8px 8px 0;
  color: rgba(255, 255, 255, 0.9);
}

.changelog-footer a { color: #a855f7; }
.changelog-footer a:hover { color: #14b8a6; }

h2 {
  color: rgba(255, 255, 255, 0.95);
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>

<script>
function copyVersionContent(button, event) {
  event.stopPropagation();
  event.preventDefault();

  const details = button.closest('details.changelog-version');
  const versionContent = details.querySelector('.version-content');
  const versionTitle = details.querySelector('.version-title');

  const titleText = versionTitle ? versionTitle.textContent.trim() : '';
  const contentClone = versionContent.cloneNode(true);

  contentClone.querySelectorAll('h4').forEach(h4 => {
    h4.textContent = '\n## ' + h4.textContent.trim() + '\n';
  });
  contentClone.querySelectorAll('li').forEach(li => {
    li.textContent = '- ' + li.textContent.trim();
  });

  const text = '# ' + titleText + '\n' + contentClone.textContent
    .replace(/\n{3,}/g, '\n\n').trim();

  navigator.clipboard.writeText(text).then(() => {
    const copyIcon = button.querySelector('.copy-icon');
    const checkIcon = button.querySelector('.check-icon');
    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    button.classList.add('copied');
    setTimeout(() => {
      copyIcon.style.display = 'block';
      checkIcon.style.display = 'none';
      button.classList.remove('copied');
    }, 2000);
  });
}
</script>
