---
layout: inventory
title: Informations du compte
permalink: /inventory/account/fr/
lang: fr
translations:
  ko: /inventory/account/
  en: /inventory/account/en/
  ja: /inventory/account/ja/
  de: /inventory/account/de/
  fr: /inventory/account/fr/
  es: /inventory/account/es/
  pt: /inventory/account/pt/
  zh: /inventory/account/zh/
---

<div id="account-info" style="max-width:600px; margin:0 auto;">

  <div id="account-content">
    <h2>Informations du compte</h2>

    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:1.5rem; margin-bottom:2rem;">
      <div style="margin-bottom:1rem;">
        <strong>Email :</strong>
        <div id="user-email" style="margin-top:.25rem; color:#374151;">Vérification...</div>
      </div>

      <div id="user-uid-section" style="margin-bottom:1rem; display:none;">
        <strong>ID utilisateur :</strong>
        <div id="user-uid" style="margin-top:.25rem; color:#6b7280; font-family:monospace; font-size:.9rem;"></div>
      </div>

      <div id="user-name-section" style="margin-bottom:1rem; display:none;">
        <strong>Nom :</strong>
        <div id="user-name" style="margin-top:.25rem; color:#374151;"></div>
      </div>
    </div>

    <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:1.5rem;">
      <h4 style="margin-top:0; color:#0c4a6e;">Gestion du compte</h4>
      <p style="color:#0c4a6e; margin-bottom:0;">
        La suppression du compte ou la modification des informations peut être effectuée dans le menu des paramètres de l'application.
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
      emailEl.textContent = 'Impossible de charger les informations';
      return;
    }

    // Afficher l'email
    emailEl.textContent = userData.email || 'Inconnu';

    // Afficher l'UID (si disponible)
    if (userData.uid && userData.uid !== 'app-user') {
      uidEl.textContent = userData.uid;
      uidSection.style.display = 'block';
    }

    // Afficher le nom (si disponible)
    if (userData.displayName) {
      nameEl.textContent = userData.displayName;
      nameSection.style.display = 'block';
    }

    console.log('[Account] Informations utilisateur affichées');
  }

  // Charger les infos d'authentification de l'app
  function loadInfo(){
    try {
      var appAuth = window.getAppAuth && window.getAppAuth();
      if (appAuth) {
        console.log('[Account] Utilisation des infos d\'authentification de l\'app');
        displayUserInfo(appAuth);
        return;
      }
    } catch(e){
      console.warn('[Account] Échec du chargement des infos d\'authentification:', e);
    }

    // Attendre l'événement d'authentification si non disponible
    window.addEventListener('app:auth-ready', function(e){
      console.log('[Account] Événement app:auth-ready reçu');
      displayUserInfo(e.detail);
    }, { once: true });

    // Afficher un message si pas d'info après 3 secondes
    setTimeout(function(){
      if (emailEl.textContent === 'Vérification...') {
        emailEl.textContent = 'Veuillez vous connecter depuis l\'application';
      }
    }, 3000);
  }

  // Exécuter au chargement de la page
  loadInfo();
})();
</script>
