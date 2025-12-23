---
layout: inventory
title: Cas d'Usage
permalink: /inventory/usecases/fr/
lang: fr
translations:
  ko: /inventory/usecases/
  en: /inventory/usecases/en/
  ja: /inventory/usecases/ja/
  de: /inventory/usecases/de/
  fr: /inventory/usecases/fr/
  es: /inventory/usecases/es/
  pt: /inventory/usecases/pt/
---

<style>
.usecase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}

.usecase-card {
  background: rgba(10, 6, 20, 0.5);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.usecase-card:hover {
  border-color: rgba(168, 85, 247, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
}

.usecase-card summary {
  padding: 1.25rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.usecase-card summary::-webkit-details-marker {
  display: none;
}

.usecase-card summary::after {
  content: 'Voir plus ↓';
  font-size: 0.75rem;
  color: var(--purple-bright);
  opacity: 0.7;
  margin-top: 0.5rem;
}

.usecase-card[open] summary::after {
  content: 'Réduire ↑';
}

.usecase-card .card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.4;
}

.usecase-card .card-persona {
  font-size: 0.85rem;
  color: var(--teal-bright);
  opacity: 0.9;
}

.usecase-card .card-type {
  display: inline-block;
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  background: rgba(168, 85, 247, 0.2);
  color: var(--purple-bright);
  width: fit-content;
}

.usecase-card .card-content {
  padding: 0 1.25rem 1.25rem;
  border-top: 1px solid rgba(168, 85, 247, 0.1);
  margin-top: 0.5rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
}

.usecase-card .card-content p {
  margin: 1rem 0;
}

.usecase-card .card-content strong {
  color: var(--teal-bright);
}

.usecase-card .card-content a {
  color: var(--purple-bright);
  text-decoration: none;
}

.usecase-card .card-content a:hover {
  text-decoration: underline;
}

.category-section {
  margin: 3rem 0;
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid var(--teal);
}

.share-section {
  text-align: center;
  padding: 3rem 2rem;
  margin-top: 4rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(20, 184, 166, 0.1));
  border-radius: 20px;
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.share-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--purple-bright), var(--teal-bright));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.share-section p {
  color: var(--text-dim);
  margin-bottom: 1.5rem;
}

.share-btn {
  display: inline-block;
  padding: 0.85rem 2rem;
  background: rgba(168, 85, 247, 0.2);
  border: 1px solid rgba(168, 85, 247, 0.4);
  border-radius: 12px;
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.share-btn:hover {
  background: rgba(168, 85, 247, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(168, 85, 247, 0.3);
}

@media (max-width: 768px) {
  .usecase-grid {
    grid-template-columns: 1fr;
  }
}
</style>

# Cas d'Utilisation d'Inventory

Découvrez les possibilités d'Inventory à travers 100 cas d'utilisation variés.

---

<div class="category-section">
<h2 class="category-title">Résolution de Problèmes - Relever les défis quotidiens</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Les aliments se gâtent dans mon frigo</span>
<span class="card-persona">Sarah (32 ans, Mère active)</span>
</summary>
<div class="card-content">

**Problème** : Avec mon emploi du temps chargé, j'oublie souvent les dates d'expiration et je jette des aliments gâtés. Surtout le tofu et le lait qui se gâtent en quelques jours...

**Solution** : J'ai créé des éléments pour chaque ingrédient avec [Papier](/inventory/manual/fr/#paper) et défini des [Dates d'Expiration](/inventory/manual/fr/#dates). Maintenant je reçois des notifications 3 jours avant, pour cuisiner ou congeler à temps.

**Résultat** : Gaspillage alimentaire réduit de 80%. 150€ économisés sur les courses mensuelles !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Trop d'abonnements à gérer</span>
<span class="card-persona">Michel (28 ans, Développeur IT)</span>
</summary>
<div class="card-content">

**Problème** : Netflix, YouTube Premium, Notion, GitHub... J'ai plus de 10 abonnements avec des dates de renouvellement différentes. Certains que je n'utilise plus mais que je paie encore.

**Solution** : Tous les abonnements enregistrés dans Inventory avec des [Alarmes de Date](/inventory/manual/fr/#alarm) 7 jours avant le renouvellement. Frais mensuels ajoutés en [Mots-clés](/inventory/manual/fr/#keyword) pour un aperçu rapide.

**Résultat** : 3 abonnements inutilisés résiliés, 40€/mois économisés. Plus de prélèvements surprises !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">J'oublie les vaccinations de mes enfants</span>
<span class="card-persona">Jennifer (35 ans, Mère de deux enfants)</span>
</summary>
<div class="card-content">

**Problème** : Avec deux enfants ayant des calendriers de vaccination différents, je m'y perds. Parfois le cabinet appelait quand c'était déjà en retard.

**Solution** : [Partitions](/inventory/manual/fr/#partition) séparées créées pour chaque enfant et dates de vaccination gérées avec des [Alarmes de Date](/inventory/manual/fr/#alarm). [Tampons](/inventory/manual/fr/#stamp) ajoutés une fois fait.

**Résultat** : Plus aucun rendez-vous de vaccination manqué. Je peux me préparer pour les visites médicales !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Chaos du déménagement - rien ne se retrouve</span>
<span class="card-persona">David (27 ans, Doctorant)</span>
</summary>
<div class="card-content">

**Problème** : Je déménage souvent pour les études. À chaque fois, je perds le fil de ce que contient chaque carton. Même avec des numéros, j'ouvre tout.

**Solution** : Avant d'emballer, j'ai photographié le contenu de chaque carton et l'ai enregistré dans Inventory. Étiqueté avec [Mots-clés](/inventory/manual/fr/#keyword) comme "Carton1", "Cuisine".

**Résultat** : Temps de déballage divisé par deux. "Où sont les ciseaux ?" - recherche instantanée !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">La gestion des reçus est un cauchemar</span>
<span class="card-persona">Emma (40 ans, Entrepreneuse)</span>
</summary>
<div class="card-content">

**Problème** : Je dois garder les reçus pour les dépenses professionnelles, mais les reçus papier se décolorent et se perdent. La période fiscale est toujours stressante...

**Solution** : Juste après le paiement, je photographie les reçus et les enregistre dans Inventory. Étiquetés avec [Mots-clés](/inventory/manual/fr/#keyword) comme "dépense", "2024", "repas" pour une catégorisation facile.

**Résultat** : Presque plus de reçus papier nécessaires. Pendant la période fiscale, je cherche et trouve exactement ce qu'il me faut. Mon comptable adore !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Je n'arrive pas à organiser mes photos argentiques</span>
<span class="card-persona">Hannah (26 ans, Passionnée de photo)</span>
</summary>
<div class="card-content">

**Problème** : Quand je développe mes photos argentiques, j'oublie quand et où je les ai prises. Les tirages s'empilent sans organisation.

**Solution** : Après chaque développement, j'enregistre des photos représentatives dans Inventory avec des [Mots-clés](/inventory/manual/fr/#keyword) pour le lieu, la date et le type de pellicule. Les infos du labo vont dans le [Journal](/inventory/manual/fr/#log).

**Résultat** : J'ai créé mes propres archives photo. Je peux retrouver instantanément des photos d'un voyage d'il y a 2 ans !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">L'entretien des vêtements est compliqué</span>
<span class="card-persona">Kevin (29 ans, Blogueur mode)</span>
</summary>
<div class="card-content">

**Problème** : Différents vêtements nécessitent différents soins - certains pressing uniquement, pulls lavage main uniquement. J'ai abîmé des vêtements avec la mauvaise méthode.

**Solution** : Vêtements nécessitant des soins spéciaux enregistrés dans Inventory. Instructions d'entretien dans le [Journal](/inventory/manual/fr/#log). Dates de récupération pressing suivies avec [Alarmes de Date](/inventory/manual/fr/#alarm).

**Résultat** : Dommages aux vêtements drastiquement réduits. Plus de pénalités de retard pour pressing oublié !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Trop de compléments alimentaires à suivre</span>
<span class="card-persona">Patricia (55 ans, Soucieuse de santé)</span>
</summary>
<div class="card-content">

**Problème** : Le médecin a recommandé 5 compléments différents. Je confonds les doses matin/soir et rate les réapprovisionnements.

**Solution** : Chaque complément enregistré avec [Papier](/inventory/manual/fr/#paper). Instructions de dosage dans le [Journal](/inventory/manual/fr/#log), dates d'épuisement estimées en [Expiration](/inventory/manual/fr/#dates).

**Résultat** : Je suis maintenant le programme parfaitement. Alertes avant épuisement pour commander à temps !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Garantie expirée - réparation coûteuse</span>
<span class="card-persona">Jacques (34 ans, Jeune marié)</span>
</summary>
<div class="card-content">

**Problème** : Climatisation cassée et la garantie avait expiré un mois avant. Je n'ai même pas retrouvé la carte de garantie. 300€ de réparation payés.

**Solution** : Tous les appareils électroménagers enregistrés dans Inventory avec photos de garantie jointes. [Dates d'Expiration](/inventory/manual/fr/#dates) pour fin de garantie avec alertes 1 mois avant.

**Résultat** : Maintenant je demande des inspections ou envisage des extensions avant expiration. Machine à laver réparée gratuitement !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Les cartes cadeaux expirent toujours</span>
<span class="card-persona">Jessica (25 ans, Étudiante)</span>
</summary>
<div class="card-content">

**Problème** : Les cartes cadeaux d'anniversaire et fêtes se perdent dans les messages et expirent inutilisées.

**Solution** : Captures d'écran des cartes cadeaux immédiatement et enregistrement dans Inventory avec [Dates d'Expiration](/inventory/manual/fr/#dates). Alerte une semaine avant expiration.

**Résultat** : Une carte cadeau Starbucks de 30€ sauvée ! J'utilise maintenant vraiment les cadeaux que je reçois.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Historique d'entretien auto éparpillé</span>
<span class="card-persona">Robert (42 ans, Commercial)</span>
</summary>
<div class="card-content">

**Problème** : Je ne me souviens pas quand et où la voiture a été entretenue. Différents garages ont différents enregistrements. Je rate les vidanges.

**Solution** : Voiture enregistrée dans Inventory, chaque entretien noté dans le [Journal](/inventory/manual/fr/#log). Prochains entretiens définis en [Alarmes de Date](/inventory/manual/fr/#alarm).

**Résultat** : Historique d'entretien complet constitué. À la revente, montrer l'historique a permis d'obtenir un meilleur prix !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Documents importants éparpillés partout</span>
<span class="card-persona">Michelle (38 ans, Freelance)</span>
</summary>
<div class="card-content">

**Problème** : Contrats, polices d'assurance, actes de propriété... documents importants dispersés partout. J'ai dû demander un duplicata car je ne trouvais pas l'original.

**Solution** : Tous les documents importants photographiés et enregistrés dans Inventory avec [Verrouillage de Document](/inventory/manual/fr/#lock) pour la sécurité. Lieu de stockage noté en [Mots-clés](/inventory/manual/fr/#keyword).

**Résultat** : "Où est l'acte ?" → Recherche → Lieu de stockage trouvé. 30 secondes !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Les livres s'empilent non lus</span>
<span class="card-persona">Lisa (30 ans, Marketing)</span>
</summary>
<div class="card-content">

**Problème** : Enthousiaste à l'achat, mais ils s'empilent non lus à la maison. J'ai même acheté le même livre deux fois.

**Solution** : Livres enregistrés immédiatement après achat. [Date de Début](/inventory/manual/fr/#dates) au commencement, [Tampon](/inventory/manual/fr/#stamp) à la fin. Liste des non-lus visible en un coup d'œil.

**Résultat** : Au lieu d'être submergée, je suis motivée. 12 livres lus cette année - plus que toute l'année dernière !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Je tue mes plantes</span>
<span class="card-persona">Amy (24 ans, Jeune active)</span>
</summary>
<div class="card-content">

**Problème** : Je voulais des plantes d'intérieur mais j'oubliais de les arroser ou j'arrosais trop. Elles mouraient toutes.

**Solution** : Chaque plante enregistrée dans Inventory avec rappels d'arrosage via [Alarme de Date](/inventory/manual/fr/#alarm). Dates de rempotage et fertilisation dans le [Journal](/inventory/manual/fr/#log).

**Résultat** : Mon monstera vit depuis 6 mois ! Même 3 nouvelles feuilles ont poussé !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Chaos des mots de passe</span>
<span class="card-persona">Georges (50 ans, Fonctionnaire)</span>
</summary>
<div class="card-content">

**Problème** : Différents mots de passe pour chaque site, impossible de les retenir. Les noter sur post-it ne semble pas sécurisé...

**Solution** : Informations de compte enregistrées dans Inventory avec [Verrouillage de Document](/inventory/manual/fr/#lock). Uniquement les indices stockés, vrais mots de passe utilisent des combinaisons de motifs.

**Résultat** : Plus de "Mot de passe oublié" à cliquer. Gestion sécurisée et pratique !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Bilans de santé familiaux manqués</span>
<span class="card-persona">Hélène (58 ans, Femme au foyer)</span>
</summary>
<div class="card-content">

**Problème** : Mari, belle-mère, moi-même... tous des calendriers de bilan différents. J'ai raté la période de bilan gratuit et dû payer de ma poche.

**Solution** : Calendrier de bilan de chaque membre de la famille enregistré avec [Alarmes de Date](/inventory/manual/fr/#alarm) pour notifier au début de la période.

**Résultat** : Plus aucun bilan gratuit manqué pour toute la famille. Plus de 500€ économisés annuellement en frais de santé !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Dossiers vétérinaires éparpillés</span>
<span class="card-persona">Mina (31 ans, Maman chat)</span>
</summary>
<div class="card-content">

**Problème** : Deux chats avec différents calendriers de vaccination et dossiers vétérinaires partout. Les nouveaux vétérinaires demandent toujours l'historique que je ne trouve pas.

**Solution** : [Partitions](/inventory/manual/fr/#partition) créées pour chaque chat. Chaque visite vétérinaire dans le [Journal](/inventory/manual/fr/#log). Prochaines vaccinations gérées avec [Alarmes de Date](/inventory/manual/fr/#alarm).

**Résultat** : Le vétérinaire a salué mon organisation. En urgence, je peux montrer les dossiers instantanément. Tranquillité d'esprit !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">J'oublie les recommandations de vin</span>
<span class="card-persona">Chris (36 ans, Débutant en vin)</span>
</summary>
<div class="card-content">

**Problème** : J'oublie les noms des vins que j'ai aimés dans les bars à vin. Au magasin, je prends n'importe quoi.

**Solution** : Photographier les étiquettes et enregistrer dans Inventory. Notes de dégustation, accords, prix dans le [Journal](/inventory/manual/fr/#log). [Mots-clés](/inventory/manual/fr/#keyword) comme "rouge", "quotidien", "cadeau".

**Résultat** : Ma propre base de données de vins créée. "Qu'avons-nous bu à notre anniversaire ?" - trouvé instantanément !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">Je ne maintiens pas ma routine sportive</span>
<span class="card-persona">Jason (29 ans, Employé de bureau)</span>
</summary>
<div class="card-content">

**Problème** : Abonnement de 3 mois à la salle, j'y vais assidûment un mois puis j'arrête. Pas de motivation et sans relevés pas de progression visible.

**Solution** : Chaque type d'exercice enregistré et poids/répétitions dans le [Journal](/inventory/manual/fr/#log). [Tampons](/inventory/manual/fr/#stamp) pour présences consécutives.

**Résultat** : Progression de 40kg à 70kg au développé couché documentée. Voir les relevés me motive !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Résolution</span>
<span class="card-title">J'oublie les engagements de réunion</span>
<span class="card-persona">Susan (33 ans, Chef d'équipe)</span>
</summary>
<div class="card-content">

**Problème** : Je dis en réunion "J'aurai le rapport la semaine prochaine" et j'oublie. Gênant quand quelqu'un demande "C'est fait ?"

**Solution** : Engagements de réunion enregistrés immédiatement avec [Alarmes de Date](/inventory/manual/fr/#alarm) pour rappel la veille. [Tampon](/inventory/manual/fr/#stamp) quand c'est fait !

**Résultat** : "Susan livre toujours ce qu'elle promet" - c'est ma réputation maintenant. Confiance établie !

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">Expériences Émotionnelles - Donner du sens à la vie</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Enregistrer les premiers mots et pas de bébé</span>
<span class="card-persona">Grace (33 ans, Jeune maman)</span>
</summary>
<div class="card-content">

Mon fils de 18 mois a dit "Maman" pour la première fois. Mon cœur a failli exploser.

J'ai filmé le moment, mais ce n'était pas suffisant. Je voulais me souvenir des émotions, du contexte, de ce qui s'était passé la veille...

Dans Inventory, j'ai sauvegardé la vidéo avec une entrée [Journal](/inventory/manual/fr/#log) capturant chaque détail de ce jour. Quand papa est rentré et qu'il a dit "Maman" encore, comment j'ai pleuré le soir...

Cinq ans plus tard, à l'entrée en primaire de mon fils, j'ai relu ces notes. Les émotions sont revenues. Inventory est devenu notre capsule temporelle familiale.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Préserver les recettes de grand-mère pour toujours</span>
<span class="card-persona">Linda (45 ans, Matriarche familiale)</span>
</summary>
<div class="card-content">

Après la maladie de ma belle-mère, je m'inquiétais des recettes familiales transmises depuis des générations. Quand je demandais "Comment faites-vous ce bouillon ?", elle disait juste "environ comme ça"...

Je me suis assise à côté d'elle, j'ai filmé sa cuisine et transcrit tout exactement comme elle le disait dans le [Journal](/inventory/manual/fr/#log). "Trois largeurs de doigt de piment", "ajouter la sauce soja petit à petit"...

Après son décès, je relis ces notes à chaque repas de famille. J'entends presque sa voix. Maintenant je transmettrai cet Inventory à ma belle-fille.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Créer notre carte des souvenirs de couple</span>
<span class="card-persona">David & Sarah (28 ans, Couple)</span>
</summary>
<div class="card-content">

Trois ans ensemble. Le café où on s'est tenu la main pour la première fois, le parc du premier baiser, le restaurant de la demande en mariage... nous avons nos lieux spéciaux, mais je craignais qu'on les oublie avec le temps.

Créé 'Nos Lieux' dans Inventory avec [Journal Partagé](/inventory/manual/fr/#-journal-partagé-vs-solo). Après chaque rendez-vous, on ajoute des photos et on documente nos conversations et sentiments. Documenter ensemble double les souvenirs.

Ces notes iront dans notre vidéo de mariage. Dans des années, on se souviendra encore de nos débuts.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Documenter le temps avec mon vieux chien</span>
<span class="card-persona">Chelsea (27 ans, Propriétaire d'animal)</span>
</summary>
<div class="card-content">

Mon chien de 9 ans 'Buddy' et moi sommes ensemble depuis longtemps. Savoir que le temps est limité rend chaque jour précieux.

Chaque jour, je poste les photos de Buddy dans Inventory. Ce qu'il a mangé, ce qu'on a vu en promenade, son expression avant de dormir. Je l'écris comme un journal dans le [Journal](/inventory/manual/fr/#log).

Un ami a demandé "Pourquoi tu fais ça tous les jours ?" J'ai répondu : "Quand Buddy ne sera plus là, je veux me souvenir combien il était heureux." C'est triste, mais ces notes me consoleront plus tard.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Faire revivre les photos fanées de père</span>
<span class="card-persona">Thomas (40 ans, Fils)</span>
</summary>
<div class="card-content">

En rangeant le bureau de père, j'ai trouvé des photos des années 70. Fanées et froissées, mais avec mon jeune père dessus.

Je les ai numérisées et enregistrées dans Inventory. Pour chaque photo, j'ai interrogé mon père et noté ses histoires dans le [Journal](/inventory/manual/fr/#log). "C'était le costume du premier salaire", "C'était notre voyage de noces à la campagne"...

Pour ses 60 ans, j'ai fait une vidéo de ces notes. Il a pleuré. "Quand as-tu posé toutes ces questions ?" C'était le cadeau le plus significatif.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Documenter mon parcours de croissance</span>
<span class="card-persona">Sophie (23 ans, Diplômée récente)</span>
</summary>
<div class="card-content">

Recherche d'emploi. Chaque refus détruisait ma confiance.

Créé un 'Journal de Croissance' dans Inventory. Noter chaque petite réussite. "30 minutes de conversation anglaise aujourd'hui", "Portfolio mis à jour avec retours", "Le recruteur a aimé ma présentation"...

Après 3 mois, les notes se sont accumulées. Les jours de refus, je relis les anciennes entrées et reprends courage. "J'ai tellement grandi." Quand j'ai enfin eu l'offre, j'ai appuyé fort sur ce [Tampon](/inventory/manual/fr/#stamp). C'était le tampon le plus brillant.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Documenter les moments avec la musique</span>
<span class="card-persona">Jake (35 ans, Mélomane)</span>
</summary>
<div class="card-content">

La musique a le pouvoir de ramener des souvenirs. Certaines chansons me transportent à des moments précis.

Créé 'OST de ma Vie' dans Inventory. Pour les moments significatifs, j'enregistre la chanson qui jouait et documente le moment dans le [Journal](/inventory/manual/fr/#log). La chanson du premier jour de travail, celle qui m'a consolé après une rupture...

Les jours difficiles, je mets cette playlist en lisant les histoires attachées à chaque chanson. La bande-son de ma vie s'enrichit.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Préserver les lettres manuscrites numériquement</span>
<span class="card-persona">Marie (29 ans, Enseignante)</span>
</summary>
<div class="card-content">

J'ai encore des lettres de ma première classe il y a 10 ans. L'écriture d'enfant disant "Je vous aime maîtresse". Le papier vieillit et ça me brise le cœur.

J'ai photographié chaque lettre et téléversé dans Inventory. Dans le [Journal](/inventory/manual/fr/#log), j'ai écrit des souvenirs de chaque enfant. "Celui-ci était timide au début mais est devenu le plus actif", "Cette lettre a été reçue le jour de la remise des diplômes"...

Les jours difficiles, j'ouvre ces notes. L'amour des enfants passe et me donne de la force. C'est pour ça que j'enseigne.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Documenter mon chemin vers la maternité</span>
<span class="card-persona">Yuna (32 ans, Future maman)</span>
</summary>
<div class="card-content">

20 semaines de grossesse. Chaque jour apporte quelque chose de nouveau pendant que mon ventre grandit. Premiers coups de pied, première échographie, prénoms candidats...

Créé le journal 'En Attendant Bébé' dans Inventory. À chaque rendez-vous, je téléverse les échographies et documente mes émotions dans le [Journal](/inventory/manual/fr/#log). "Pleuré en entendant le cœur aujourd'hui", "Bébé commence à donner des coups ! Papa a senti aussi"...

Quand mon enfant sera grand, je lui montrerai ces notes. "Voilà comment maman et papa t'attendaient."

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Émotion</span>
<span class="card-title">Documenter mon chemin vers mes rêves</span>
<span class="card-persona">Junho (26 ans, Aspirant écrivain)</span>
</summary>
<div class="card-content">

Je rêve de publier un roman un jour. Encore inconnu, mais j'écris un peu chaque jour.

Créé 'Parcours d'Écrivain' dans Inventory. Quand l'inspiration vient, j'enregistre avec [Papier](/inventory/manual/fr/#paper) et tiens un journal d'écriture dans le [Journal](/inventory/manual/fr/#log). "3 pages écrites aujourd'hui", "Nom du personnage décidé", "Fin changée"...

Quand mon livre sera publié, je veux partager ces notes. "Voici le voyage jusqu'à la première phrase."

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">Histoires - Comment Inventory a changé des vies</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Le sac perdu qui a été retrouvé</span>
<span class="card-persona">Seunghyun (29 ans, Voyageur)</span>
</summary>
<div class="card-content">

Je faisais du backpacking en Europe. J'ai perdu mon sac dans le métro parisien. Passeport, cartes, appareil photo... tout était dedans.

Heureusement, j'avais enregistré tout le contenu du sac dans Inventory. Au commissariat, quand on m'a demandé "Qu'y avait-il dans le sac ?", j'ai cherché par [Mots-clés](/inventory/manual/fr/#keyword) et montré une liste complète. Même mon numéro de passeport était documenté.

Deux semaines plus tard, le sac a été retrouvé ! La police a dit : "La liste détaillée a facilité la vérification." Inventory m'a sauvé.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Retrouvailles après 10 ans</span>
<span class="card-persona">Jihyun (35 ans, Chercheur)</span>
</summary>
<div class="card-content">

Un ami a changé d'école au lycée. Après, on a perdu contact. Parfois je pensais à lui.

J'organisais les souvenirs avec cet ami dans Inventory. Dans le [Journal](/inventory/manual/fr/#log), j'ai documenté "photo en uniforme scolaire", "chansons qu'il aimait", "dernier jour qu'on s'est vus".

Un jour, j'ai partagé ces notes sur les réseaux sociaux. "Quelqu'un connaît cet ami ?" Incroyablement, un ami de son ami m'a contacté. Après 10 ans, on s'est retrouvés. Inventory a construit le pont.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Trésor trouvé dans les affaires de grand-père</span>
<span class="card-persona">Taewoo (33 ans, Petit-fils)</span>
</summary>
<div class="card-content">

Après le décès de grand-père, on a trié ses affaires. Beaucoup de vieux objets que j'ai failli jeter sans connaître leur signification.

J'ai tout photographié et enregistré dans Inventory, puis demandé à mon père pour chaque objet, documentant dans le [Journal](/inventory/manual/fr/#log). "C'était la première montre de grand-père", "Ça a été utilisé pendant la guerre"...

Puis j'ai trouvé un vieux document. Il s'est avéré que c'étaient des papiers de 70 ans sur ses mérites dans la résistance ! On a contacté les autorités et les contributions de grand-père ont été honorées. Ça aurait été perdu pour toujours si on avait jeté.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">De hobbyiste à leader de communauté</span>
<span class="card-persona">Seojun (24 ans, Collectionneur LEGO)</span>
</summary>
<div class="card-content">

Je collectionne les sets LEGO. Au début juste pour le plaisir, mais ça devenait dur de suivre. Je m'y perdais dans ma collection.

J'ai commencé à enregistrer tous les sets LEGO dans Inventory. Prix d'achat, magasin, statut de construction dans le [Journal](/inventory/manual/fr/#log), série et nombre de pièces en [Mots-clés](/inventory/manual/fr/#keyword).

Un an plus tard, la communauté LEGO a vu mon Inventory et m'a contacté. "Vous êtes si organisé. Rejoignez notre groupe." Maintenant je suis admin d'une communauté de 500 membres. L'habitude de documenter a transformé un hobby en presque une profession.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Concours de cuisine familial</span>
<span class="card-persona">Sua (40 ans, Mère de trois)</span>
</summary>
<div class="card-content">

Mes trois enfants s'intéressaient à la cuisine. On a lancé un "Concours de Cuisine Familial" hebdomadaire.

Chaque semaine, les plats sont enregistrés dans Inventory, la famille vote et évalue via [Journal Partagé](/inventory/manual/fr/#-journal-partagé-vs-solo). "Les pâtes du frère trop salées", "La salade de la petite est jolie" - des avis honnêtes s'accumulent.

Après un an, on a compilé les notes en "Notre Livre de Recettes Familial". Fait maison et offert aux grands-parents - ils ont adoré. Inventory a créé une tradition familiale.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Lancer une boutique de vêtements vintage</span>
<span class="card-persona">Hayoung (26 ans, Propriétaire de friperie)</span>
</summary>
<div class="card-content">

J'adorais chiner et collectionnais des vêtements vintage partout. Une pièce entière s'est remplie.

J'ai commencé à organiser en enregistrant dans Inventory. Marque, époque, état, source de chaque article détaillés dans le [Journal](/inventory/manual/fr/#log). Style, taille, saison en [Mots-clés](/inventory/manual/fr/#keyword).

Les amis ont commencé à demander "Tu vends ça ?" Montrer l'écran Inventory a créé de la confiance. J'ai commencé à vendre sur Instagram, maintenant j'ai une boutique physique de vintage. L'organisation est devenue un business.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Organisation complète avant déménagement</span>
<span class="card-persona">Mingyu (45 ans, Émigrant)</span>
</summary>
<div class="card-content">

Décidé d'émigrer. Je devais trier 20 ans d'affaires.

J'ai tout enregistré dans la maison dans Inventory. Catégorisé : jeter, vendre, emporter, offrir - marqué en [Mots-clés](/inventory/manual/fr/#keyword). Les objets avec des souvenirs ont leurs histoires dans le [Journal](/inventory/manual/fr/#log).

3 mois de tri terminés en 2 semaines. Ventes fluides, et les objets significatifs faciles à lâcher avec des photos comme souvenirs. Les objets peuvent être jetés, mais les notes m'accompagnent.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Transmettre mon premier instrument</span>
<span class="card-persona">Yeeun (22 ans, Étudiante en musique)</span>
</summary>
<div class="card-content">

J'ai décidé de donner mon premier violon à ma sœur au lycée. Difficile de se séparer d'un instrument avec lequel j'ai joué 10 ans.

J'ai documenté toutes les histoires du violon dans Inventory. Premier jour d'achat, premier concert, jours de réparation... Chaque moment capturé dans le [Journal](/inventory/manual/fr/#log).

Quand j'ai [transféré](/inventory/manual/fr/#-fonction-transfert) l'instrument avec les notes Inventory à ma sœur, j'ai dit "Tout ce que ce violon a joué est écrit ici." Elle était émue aux larmes. J'ai transmis non seulement l'instrument, mais son histoire.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Notes après adoption d'un chien de refuge</span>
<span class="card-persona">Sejin (30 ans, Propriétaire d'animal)</span>
</summary>
<div class="card-content">

J'ai adopté 'Luna' au refuge. Elle n'a pas de passé connu, donc je voulais documenter son futur encore mieux.

Dès le premier jour, j'ai tout documenté sur Luna dans Inventory. Premier jour à la maison, première queue remuante, premier endroit de sieste... Entrées de journal quotidiennes dans le [Journal](/inventory/manual/fr/#log).

À notre premier anniversaire, j'ai fait une vidéo de ces notes appelée "La Première Année de Luna." Partagée avec la communauté, beaucoup ont été touchés, certains ont décidé d'adopter en refuge. Les notes ont sauvé une autre vie.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Histoire</span>
<span class="card-title">Histoire de l'héritage le plus ancien</span>
<span class="card-persona">Jihoon (55 ans, Collectionneur de montres)</span>
</summary>
<div class="card-content">

J'ai une montre Omega des années 60 héritée de mon père. Un trésor familial, mais je suis le seul à connaître son histoire maintenant.

J'ai enregistré la montre dans Inventory et documenté toutes les histoires de mon père dans le [Journal](/inventory/manual/fr/#log). "Achetée avec le premier salaire", "Portée le jour où il a rencontré maman", "Vérifié l'heure à la naissance du grand frère"...

Quand je donnerai cette montre à mon fils, je [transférerai](/inventory/manual/fr/#-fonction-transfert) l'Inventory aussi. La valeur des objets vient de leur histoire. Inventory connectera trois générations.

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">Utilisations Créatives - Possibilités inattendues</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Documenter mes rêves</span>
<span class="card-persona">Sumin (24 ans, Étudiante en psycho)</span>
</summary>
<div class="card-content">

L'analyse des rêves révèle l'inconscient. Donc chaque matin, je documente les rêves dont je me souviens dans Inventory.

Je dessine des scènes de rêve en images et téléverse, détails dans le [Journal](/inventory/manual/fr/#log). Thèmes comme "eau", "chute", "examens" en [Mots-clés](/inventory/manual/fr/#keyword).

Six mois d'analyse ont montré des patterns. Je rêve de "chute" quand je suis stressée. J'ai trouvé un moyen de dialoguer avec mon inconscient.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Journal d'observation des étoiles</span>
<span class="card-persona">Haneul (31 ans, Astronome amateur)</span>
</summary>
<div class="card-content">

L'observation du ciel nocturne est mon hobby. Je voulais documenter quand j'ai vu quoi.

Chaque observation va dans Inventory. Date, lieu, cible (constellation, planète, nébuleuse), météo, équipement... noté dans le [Journal](/inventory/manual/fr/#log), photos jointes.

Les saisons de pluie de météores, je reçois des alertes à l'avance via [Alarme de Date](/inventory/manual/fr/#alarm). Trois ans de notes sont devenues des données d'expérience pour "quand et où observer au mieux."

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Collection de notes de parfum</span>
<span class="card-persona">Sujin (29 ans, Passionnée de parfum)</span>
</summary>
<div class="card-content">

Je collectionne les parfums mais je trouvais difficile de me souvenir des caractéristiques de chacun.

Chaque parfum enregistré avec notes (tête, cœur, fond), tenue, sillage, saisons/occasions adaptées dans le [Journal](/inventory/manual/fr/#log). [Mots-clés](/inventory/manual/fr/#keyword) comme "boisé", "floral", "soirée rendez-vous".

Quand des amis demandent des recommandations, je cherche juste et réponds. Ma propre encyclopédie des parfums créée !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Projet photo quotidien du ciel</span>
<span class="card-persona">Yuri (26 ans, Photographe)</span>
</summary>
<div class="card-content">

J'ai lancé un projet : photographier le ciel depuis le même endroit chaque jour pendant un an.

Photos du ciel quotidiennes téléversées avec météo, humeur, ce qui s'est passé ce jour dans le [Journal](/inventory/manual/fr/#log). Dates de prises gérées avec [Date de Début](/inventory/manual/fr/#dates).

365 photos sont devenues un timelapse vidéo. Les saisons changeantes dans le ciel avec mon année. Posté sur Instagram et plus de 100k vues.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Gestion de personnages JDR</span>
<span class="card-persona">Minhyuk (22 ans, Gamer)</span>
</summary>
<div class="card-content">

Je joue aux JDR sur table mais la gestion des fiches de personnage et de l'inventaire est complexe.

Personnages et objets d'inventaire enregistrés dans Inventory. Événements de session, montées de niveau, nouvelles compétences dans le [Journal](/inventory/manual/fr/#log). [Partitions](/inventory/manual/fr/#partition) par campagne.

Connecté avec les membres du groupe via [Journal Partagé](/inventory/manual/fr/#-journal-partagé-vs-solo), tout le monde peut voir les infos des personnages des autres. Même le MJ dit "Ça facilite les sessions !"

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Mon propre carnet de vocabulaire</span>
<span class="card-persona">Jeonga (28 ans, Apprenante de langue)</span>
</summary>
<div class="card-content">

J'apprends une langue mais les apps de vocabulaire ne me convenaient pas. Je voulais organiser à ma façon.

Mots inconnus enregistrés dans Inventory avec phrases d'exemple et explications de nuances dans le [Journal](/inventory/manual/fr/#log). [Mots-clés](/inventory/manual/fr/#keyword) comme "B2", "business", "entendu dans une série".

Les mots mémorisés reçoivent des [Tampons](/inventory/manual/fr/#stamp). Réviser seulement les non-tamponnés. Efficace ! Examen de langue réussi !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Gestion de garde-robe capsule</span>
<span class="card-persona">Seoyeon (27 ans, Minimaliste)</span>
</summary>
<div class="card-content">

J'ai essayé le défi 'garde-robe capsule' - 33 pièces pour 3 mois. Vider le placard, ne garder que l'essentiel !

Les 33 pièces sélectionnées enregistrées dans Inventory. Chaque port noté dans le [Journal](/inventory/manual/fr/#log). Après 3 mois, l'analyse montre ce que je porte vraiment vs. pas.

Non portés triés, espaces vides remplis seulement de nécessaire. Inventory aide à maintenir un style de vie minimal.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Curation de galerie d'art</span>
<span class="card-persona">Yejin (34 ans, Amatrice d'art)</span>
</summary>
<div class="card-content">

Je visite souvent les musées mais j'oublie les œuvres vues.

Chaque expo, j'enregistre les œuvres qui m'ont touché. Artiste, année, technique dans le [Journal](/inventory/manual/fr/#log), plus "pourquoi ça m'a plu." Genre, époque, émotion en [Mots-clés](/inventory/manual/fr/#keyword).

Cinq ans de notes montrent mes goûts. Impressionnisme, abstrait, tons bleus... Maintenant j'utilise ces données pour choisir les expos.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Gestion intelligente de cartes de visite</span>
<span class="card-persona">Jongmin (42 ans, Commercial)</span>
</summary>
<div class="card-content">

Des centaines de cartes de visite empilées, je ne me souviens pas de qui est qui.

Photographier les cartes immédiatement et enregistrer dans Inventory. Noter dans le [Journal](/inventory/manual/fr/#log) "où rencontré", "de quoi discuté." Secteur, intérêts, potentiel de collaboration en [Mots-clés](/inventory/manual/fr/#keyword).

"Le type IT que j'ai rencontré" - recherche instantanée. En recontactant, mentionner la conversation précédente impressionne les gens !

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Créatif</span>
<span class="card-title">Gestion de collection de jeux de société</span>
<span class="card-persona">Jaewon (29 ans, Fan de jeux de société)</span>
</summary>
<div class="card-content">

Plus de 50 jeux de société mais je ne me souviens pas de ce que j'ai. Quand des amis viennent, dur de décider quoi jouer.

Tous les jeux enregistrés avec nombre de joueurs, durée, genre, difficulté en [Mots-clés](/inventory/manual/fr/#keyword). Avis de jeu dans le [Journal](/inventory/manual/fr/#log).

Quand des amis viennent : "4 joueurs, 1 heure, léger" cherche et donne des recommandations instantanées. Ils m'appellent le "sommelier des jeux de société !"

</div>
</details>

</div>
</div>

---

<div class="share-section">
<h3>Partagez votre utilisation d'Inventory</h3>
<p>Comment utilisez-vous Inventory ? Nous attendons vos idées créatives !</p>
<a href="/inventory/suggest/fr/" class="share-btn">Partager mon histoire</a>
</div>
