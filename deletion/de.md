---
layout: inventory-deletion
title: Konto löschen
permalink: /deletion/de/
description: Goolzy-Konto löschen
lang: de
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
      <h1>Konto löschen</h1>
      <p class="warning-text">Möchten Sie Ihr Konto löschen?</p>
    </div>

    <div class="danger-notice">
      <h3>⛔ Wichtige Warnung</h3>
      <ul>
        <li><strong>Alle Daten werden dauerhaft gelöscht</strong></li>
        <li>Alle Informationen einschließlich Chat-Nachrichten und Aktivitätsprotokollen werden vom Server entfernt</li>
        <li><strong>Gelöschte Konten können nicht wiederhergestellt werden</strong></li>
        <li>Sie können sich mit derselben E-Mail erneut registrieren, aber frühere Daten werden nicht wiederhergestellt</li>
      </ul>
    </div>

    <div id="deletionForm" class="deletion-form">
      <div class="user-info-section">
        <label>Aktuell angemeldetes Konto</label>
        <div id="currentUserEmail" class="current-email">Anmeldung erforderlich</div>
      </div>

      <div class="confirmation-section">
        <label for="confirmText">Bitte geben Sie den folgenden Satz genau ein:</label>
        <div class="required-text" id="requiredText">
          Ich beantrage die Löschung des <span id="emailPlaceholder">E-Mail</span>-Kontos
        </div>
        <input
          type="text"
          id="confirmText"
          class="confirm-input"
          placeholder="Geben Sie den obigen Satz genau ein"
          autocomplete="off"
        >
        <div id="matchStatus" class="match-status"></div>
      </div>

      <div class="password-section">
        <label for="passwordConfirm">Passwortbestätigung</label>
        <input
          type="password"
          id="passwordConfirm"
          class="password-input"
          placeholder="Geben Sie Ihr aktuelles Passwort ein"
        >
        <p class="helper-text">Benutzer mit Social Login (Google, Apple) müssen kein Passwort eingeben.</p>
      </div>

      <button id="deleteBtn" class="delete-btn" disabled>
        Konto dauerhaft löschen
      </button>

      <div id="errorMsg" class="error-msg"></div>
    </div>

    <div class="deletion-footer">
      <a href="/de/" class="cancel-link">Abbrechen und zurück</a>
    </div>
  </div>
</div>
