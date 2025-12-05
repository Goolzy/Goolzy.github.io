---
layout: inventory-deletion
title: Supprimer le compte
permalink: /deletion/fr/
description: Supprimer le compte Goolzy
lang: fr
translations:
  ko: /deletion/
  en: /deletion/en/
  ja: /deletion/ja/
  de: /deletion/de/
  fr: /deletion/fr/
  es: /deletion/es/
  pt: /deletion/pt/
---

<div class="deletion-container">
  <div class="deletion-card">
    <div class="deletion-header">
      <div class="warning-icon">⚠️</div>
      <h1>Supprimer le compte</h1>
      <p class="warning-text">Voulez-vous supprimer votre compte ?</p>
    </div>

    <div class="danger-notice">
      <h3>⛔ Avertissement important</h3>
      <ul>
        <li><strong>Toutes les données seront définitivement supprimées</strong></li>
        <li>Toutes les informations, y compris les messages de chat et les journaux d'activité, seront supprimées du serveur</li>
        <li><strong>Les comptes supprimés ne peuvent pas être récupérés</strong></li>
        <li>Vous pouvez vous réinscrire avec le même e-mail, mais les données précédentes ne seront pas restaurées</li>
      </ul>
    </div>

    <div id="deletionForm" class="deletion-form">
      <div class="user-info-section">
        <label>Compte actuellement connecté</label>
        <div id="currentUserEmail" class="current-email">Connexion requise</div>
      </div>

      <div class="confirmation-section">
        <label for="confirmText">Veuillez taper exactement la phrase suivante :</label>
        <div class="required-text" id="requiredText">
          Je demande la suppression du compte <span id="emailPlaceholder">e-mail</span>
        </div>
        <input
          type="text"
          id="confirmText"
          class="confirm-input"
          placeholder="Tapez exactement la phrase ci-dessus"
          autocomplete="off"
        >
        <div id="matchStatus" class="match-status"></div>
      </div>

      <div class="password-section">
        <label for="passwordConfirm">Confirmation du mot de passe</label>
        <input
          type="password"
          id="passwordConfirm"
          class="password-input"
          placeholder="Entrez votre mot de passe actuel"
        >
        <p class="helper-text">Les utilisateurs de connexion sociale (Google, Apple) n'ont pas besoin d'entrer de mot de passe.</p>
      </div>

      <button id="deleteBtn" class="delete-btn" disabled>
        Supprimer définitivement le compte
      </button>

      <div id="errorMsg" class="error-msg"></div>
    </div>

    <div class="deletion-footer">
      <a href="/fr/" class="cancel-link">Annuler et retourner</a>
    </div>
  </div>
</div>
