---
layout: inventory
title: Kontoinformationen
permalink: /inventory/account/de/
lang: de
translations:
  ko: /inventory/account/
  en: /inventory/account/en/
  ja: /inventory/account/ja/
  de: /inventory/account/de/
  fr: /inventory/account/fr/
  es: /inventory/account/es/
  pt: /inventory/account/pt/
---

<div id="account-info" style="max-width:600px; margin:0 auto;">

  <div id="account-content">
    <h2>Kontoinformationen</h2>

    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:1.5rem; margin-bottom:2rem;">
      <div style="margin-bottom:1rem;">
        <strong>E-Mail:</strong>
        <div id="user-email" style="margin-top:.25rem; color:#374151;">Wird geprüft...</div>
      </div>

      <div id="user-uid-section" style="margin-bottom:1rem; display:none;">
        <strong>Benutzer-ID:</strong>
        <div id="user-uid" style="margin-top:.25rem; color:#6b7280; font-family:monospace; font-size:.9rem;"></div>
      </div>

      <div id="user-name-section" style="margin-bottom:1rem; display:none;">
        <strong>Name:</strong>
        <div id="user-name" style="margin-top:.25rem; color:#374151;"></div>
      </div>
    </div>

    <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:1.5rem;">
      <h4 style="margin-top:0; color:#0c4a6e;">Kontoverwaltung</h4>
      <p style="color:#0c4a6e; margin-bottom:0;">
        Kontolöschung oder Informationsänderungen können im Einstellungsmenü der App vorgenommen werden.
      </p>
    </div>
  </div>
</div>

<script>
(function(){
  var emailEl = document.getElementById('user-email');
  var uidEl = document.getElementById('user-uid');
  var nameEl = document.getElementById('user-name');
  var uidSection = document.getElementById('user-uid-section');
  var nameSection = document.getElementById('user-name-section');

  function displayUserInfo(userData){
    if (!userData) {
      emailEl.textContent = 'Informationen konnten nicht geladen werden';
      return;
    }

    // E-Mail anzeigen
    emailEl.textContent = userData.email || 'Unbekannt';

    // UID anzeigen (falls vorhanden)
    if (userData.uid && userData.uid !== 'app-user') {
      uidEl.textContent = userData.uid;
      uidSection.style.display = 'block';
    }

    // Name anzeigen (falls vorhanden)
    if (userData.displayName) {
      nameEl.textContent = userData.displayName;
      nameSection.style.display = 'block';
    }

    console.log('[Account] Benutzerinformationen angezeigt');
  }

  // App-Auth-Informationen laden
  function loadInfo(){
    try {
      var appAuth = window.getAppAuth && window.getAppAuth();
      if (appAuth) {
        console.log('[Account] Verwende App-Auth-Informationen');
        displayUserInfo(appAuth);
        return;
      }
    } catch(e){
      console.warn('[Account] Fehler beim Laden der App-Auth-Informationen:', e);
    }

    // Auf App-Auth-Event warten, falls nicht verfügbar
    window.addEventListener('app:auth-ready', function(e){
      console.log('[Account] app:auth-ready Event empfangen');
      displayUserInfo(e.detail);
    }, { once: true });

    // Nachricht anzeigen, wenn nach 3 Sekunden keine Info
    setTimeout(function(){
      if (emailEl.textContent === 'Wird geprüft...') {
        emailEl.textContent = 'Bitte melden Sie sich in der App an';
      }
    }, 3000);
  }

  // Beim Laden der Seite ausführen
  loadInfo();
})();
</script>
