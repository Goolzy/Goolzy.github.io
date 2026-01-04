---
layout: inventory
title: Rapport de bug
permalink: /inventory/bug-report/fr/
lang: fr
translations:
  ko: /inventory/bug-report/
  en: /inventory/bug-report/en/
  ja: /inventory/bug-report/ja/
  de: /inventory/bug-report/de/
  fr: /inventory/bug-report/fr/
  es: /inventory/bug-report/es/
  pt: /inventory/bug-report/pt/
  zh: /inventory/bug-report/zh/
---

## Rapport de bug

Veuillez signaler les bugs que vous avez trouvés.

---

<form id="bug-form" style="max-width:600px;">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
  <label style="display:block; margin-bottom:1rem;">
    Titre du bug
    <input type="text" name="title" id="bug_title" required style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="Résumez le bug en une ligne">
  </label>

  <label style="display:block; margin-bottom:1rem;">
    Étapes de reproduction
    <textarea name="steps" required rows="4" style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="1. Cliquer sur le bouton ...&#10;2. Entrer ...&#10;3. L'erreur se produit"></textarea>
  </label>

  <label style="display:block; margin-bottom:1rem;">
    Comportement attendu
    <textarea name="expected" required rows="2" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>

  <label style="display:block; margin-bottom:1rem;">
    Comportement réel
    <textarea name="actual" required rows="2" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  <input type="hidden" name="email" id="bug_email" value="">
  <input type="hidden" name="uid" id="bug_uid" value="">
  <div class="muted" id="bug-email-hint" style="margin:.5rem 0 1rem; word-break: break-all;">Rapporteur : <span id="bug-email-value" style="display: inline-block; max-width: 100%;">Vérification...</span></div>

  <button class="btn" type="submit">Envoyer le rapport</button>
</form>

<div id="bug-status" class="notice" style="display:none;"></div>

<script>
(function(){
  var msg = {
    checking: 'Vérification du statut de connexion...',
    loginRequired: 'La connexion est requise pour les rapports de bug.<br><br>Veuillez d\'abord vous connecter depuis l\'application.<br><br><a href="/inventory/fr/" class="btn">Accueil</a>',
    submitting: 'Envoi en cours...',
    success: 'Merci ! Votre rapport de bug a été soumis avec succès. (ID : ',
    errorSubmit: 'Échec de l\'envoi : ',
    errorFields: 'Veuillez remplir tous les champs.',
    errorUnknown: 'Une erreur inconnue s\'est produite.',
    errorFirebase: 'Firebase n\'est pas initialisé. Veuillez réessayer plus tard.'
  };

  var form = document.getElementById('bug-form');
  var emailInput = document.getElementById('bug_email');
  var uidInput = document.getElementById('bug_uid');
  var emailText = document.getElementById('bug-email-value');
  var status = document.getElementById('bug-status');
  var isLoggedIn = false;

  function showLoginRequired(){
    form.style.display = 'none';
    status.style.display = 'block';
    status.innerHTML = msg.loginRequired;
    status.className = 'notice';
  }

  function showForm(){
    form.style.display = 'block';
    status.style.display = 'none';
  }

  function applyUser(u){
    if (u && u.email) {
      emailInput.value = u.email;
      if (uidInput) uidInput.value = u.uid || '';
      if (emailText) emailText.textContent = u.email;
      isLoggedIn = true;
      showForm();
    } else {
      emailInput.value = '';
      if (uidInput) uidInput.value = '';
      isLoggedIn = false;
      showLoginRequired();
    }
  }

  function applyAppAuth(){
    try {
      var appAuth = window.getAppAuth && window.getAppAuth();
      if (appAuth && appAuth.email) {
        applyUser(appAuth);
        return true;
      }
    } catch(e){}
    return false;
  }

  form.style.display = 'none';
  status.style.display = 'block';
  status.textContent = msg.checking;
  status.className = 'notice';

  if (!applyAppAuth()) {
    window.addEventListener('app:auth-ready', function(e){
      applyUser(e.detail);
    }, { once: true });

    setTimeout(function(){
      if (!isLoggedIn) {
        showLoginRequired();
      }
    }, 3000);
  }

  form.addEventListener('submit', async function(e){
    e.preventDefault();

    if (!isLoggedIn || !emailInput.value) {
      showLoginRequired();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.classList.add('loading');
    status.style.display = 'block';
    status.textContent = msg.submitting;
    status.className = 'notice';

    try {
      if (!window.firebaseFunctions || !window.httpsCallable) {
        throw new Error(msg.errorFirebase);
      }

      var submitBugReport = window.httpsCallable(window.firebaseFunctions, 'submitBugReportFunc');

      var data = {
        title: form.querySelector('input[name="title"]').value.trim(),
        steps: form.querySelector('textarea[name="steps"]').value.trim(),
        expected: form.querySelector('textarea[name="expected"]').value.trim(),
        actual: form.querySelector('textarea[name="actual"]').value.trim(),
        email: emailInput.value || null,
        uid: uidInput.value || null,
        website: form.querySelector('input[name="website"]').value,
        platform: navigator.platform || 'unknown',
        userAgent: navigator.userAgent || 'unknown'
      };

      var result = await submitBugReport(data);

      if (result.data.success) {
        status.textContent = msg.success + result.data.id.slice(0,8) + '...)';
        status.className = 'notice success';
        form.reset();
        applyAppAuth();
      } else {
        throw new Error('Échec de l\'envoi.');
      }

    } catch(err) {
      console.error('[BugReport] Erreur:', err);
      var errorMessage = err.message || msg.errorUnknown;
      if (err.code === 'functions/invalid-argument') {
        errorMessage = msg.errorFields;
      }
      status.textContent = msg.errorSubmit + errorMessage;
      status.className = 'notice error';
    } finally {
      btn.disabled = false;
      btn.classList.remove('loading');
    }
  });
})();
</script>

<style>
.notice {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: rgba(255, 255, 255, 0.9);
}
.notice.success {
  background: rgba(20, 184, 166, 0.15);
  border-color: rgba(20, 184, 166, 0.3);
  color: #2dd4bf;
}
.notice.error {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.3);
  color: #f87171;
}
.muted { color: rgba(255,255,255,0.6); font-size:.9rem; }
.btn.loading {
  opacity: 0.6;
  cursor: wait;
}
</style>
