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
---

## 📋 Journal des modifications

Consultez l'historique des mises à jour de l'application Inventory.

---

### 📎 v1.0.3 <small style="color:#6b7280;">2025-01</small>

#### 📎 Fonction Clip
Regroupez plusieurs documents ensemble pour une gestion plus facile.
- **Créer un clip**: Sélectionnez 2+ documents et appuyez sur "Clipser ensemble"
- **Icône clip**: Les documents clipsés affichent une icône clip dans le coin supérieur droit
- **Détails du clip**: Voir les éléments internes via le bouton "Infos clip" dans l'écran de détail
- **Réorganiser**: Faites glisser pour réorganiser les éléments dans un clip (sauf couverture)
- **Exclure des éléments**: Retirer des éléments spécifiques d'un clip (sauf couverture)
- **Défaire le clip**: Dissoudre complètement un clip en documents individuels
- **Dissolution auto**: Le clip se dissout automatiquement quand il ne reste qu'un seul élément
- **Transfert**: Les clips sont envoyés/reçus en tant que groupe

#### 🔓 Amélioration du Déverrouillage par Mot de Passe
- La saisie du mot de passe correct **déverrouille définitivement** le document
- Avant: Consultation seulement, verrouillage maintenu → Maintenant: Entièrement déverrouillé

#### 🐛 Corrections de Bugs
- Les éléments clip étaient comptés individuellement dans l'écran de réception - corrigé
- Le badge de réception de la barre de navigation incluait les éléments internes du clip - corrigé

---

### ✨ v1.0.2 <small style="color:#6b7280;">2025-01</small>

#### 🔔 Indicateur de Journal Partagé Non Lu
Lorsque de nouveaux commentaires sont ajoutés aux journaux partagés, la bordure de l'élément **pulse**.
- Repérez facilement les journaux partagés non lus dans votre inventaire
- La pulsation s'arrête lorsque vous ouvrez le document
- L'état de lecture se synchronise sur tous les appareils

#### 🔖 Guide d'Utilisation du Tampon
Lorsque vous sélectionnez un tampon gravé, les papiers disponibles **pulsent** pour vous guider.
- UX améliorée pour la duplication de modèle
- Guidage intuitif vers l'étape suivante

#### 📂 Améliorations des Partitions
- **Réduire/Développer**: Basculer les partitions avec les boutons fléchés (▼/▲)
- **Tout sélectionner**: Appuyer sur l'en-tête de partition pour sélectionner/désélectionner tous les éléments
- Indicateurs d'état de sélection (○/◐/●)
- Glisser-déposer vers les partitions réduites

#### 🛒 Commodité de la Boutique
Processus de paiement simplifié pour les achats consécutifs du même article.
- Dialogues de confirmation ignorés dans les 10 minutes suivant le dernier achat
- Achat en gros plus rapide

#### 🎨 Améliorations de l'Interface
- Lisibilité améliorée avec nouvelle police de titre
- Les cartes de tampon affichent l'aperçu du modèle en arrière-plan (33% d'opacité)
- Les cartes de badge affichent l'aperçu de l'image gravée
- Le menu inférieur affiche le badge du nombre d'actions disponibles
- Ajustement des couleurs du thème encre noire (meilleure lisibilité du texte)
- Images de produits optimisées (taille réduite, chargement plus rapide)

#### 🐛 Corrections de bugs
- Effet de pulsation sur ses propres commentaires corrigé
- Coupure du champ de saisie sur la navigation gestuelle Android corrigée
- Écran gris lors de la réduction des partitions corrigé
- Gestion des permissions de notification push Android 13+ améliorée

---

### 🔒 v1.0.1 <small style="color:#6b7280;">2025-01</small>

#### 🔒 Fonction de Verrouillage de Document
- Définir un mot de passe numérique sur les documents (jusqu'à 16 chiffres)
- Les documents verrouillés affichent niveaux de gris + icône de cadenas
- Déverrouiller avec le mot de passe correct (usage unique)
- L'état de verrouillage persiste après le transfert d'objet
- Les documents verrouillés sont exclus des résultats de recherche

---

### 🎉 v1.0.0 <small style="color:#6b7280;">2025-01</small>

**Première version officielle**

#### 📦 Système de Papier
- Introduction du système de monnaie pour la création de documents
- 10 feuilles de Papier offertes à l'inscription
- 10 feuilles supplémentaires pour chaque liaison Google/Apple
- Papier disponible à l'achat en boutique

#### 📄 Création de documents
- Créer des documents avec du Papier
- Ajouter titre, contenu et images
- Options de date de début/d'expiration

#### 🏷️ Système de Badge
- Fonction de gravure de nom de domaine unique
- Nom de domaine gravé utilisé comme identité utilisateur
- Gestion d'activation par équiper/déséquiper
- Option de pièce jointe image 128x128

#### 🔖 Système de Tampon
- Fonction de création de modèle
- Sélection du mode Journal solo/Journal partagé
- Fonction de duplication de modèle
- Paramètres de date de début/d'expiration

#### 📝 Fonction Journal
- Enregistrer des journaux sur documents/tampons
- Journal solo : Enregistrements personnels uniquement
- Journal partagé : Partager avec les propriétaires de duplicata
- Support de carte info format clé:valeur

#### 🎨 Système d'Encre
- Fonction de changement de couleur de thème
- Encre Noire, Encre Dorée

#### 🤝 Transfert d'objets
- Envoyer des objets via adresse email
- Remplissage auto de l'email par scan QR
- Accepter ou retourner les objets reçus
- Envoyer plusieurs objets à la fois

#### 📂 Partition
- Fonction de regroupement d'objets
- Stockage local spécifique à l'appareil

#### 🔍 Fonction de recherche
- Filtrage de recherche en temps réel
- Sauvegarder les termes de recherche comme filtres
- Sauvegarde auto des recherches récentes (jusqu'à 5)

#### 🛒 Boutique
- Acheter Papier, Tampons, Badges, Encre
- Disponible sur toutes les plateformes

#### 🔐 Compte
- Connexion Google, Apple, Email
- Gagner du Papier supplémentaire en liant les comptes sociaux

#### 🌍 Support multilingue
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

#### 📱 Plateformes supportées
- iOS (iPhone, iPad)
- Android (smartphones, tablettes)
- macOS, Windows

---

> 💡 **Suggérez de nouvelles fonctionnalités !** Partagez vos idées sur [Suggestions](/inventory/suggest/fr/) et nous les examinerons activement.

<style>
h2 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: .5rem; margin-bottom: 1.5rem; }
h3 { color: #374151; margin-top: 2rem; margin-bottom: 1rem; }
h4 { color: #4b5563; font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: .75rem; }
ul { line-height: 1.8; }
li { margin-bottom: .5rem; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0; }
blockquote { background: #f9fafb; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 4px; }
small { font-size: .85rem; }
</style>
