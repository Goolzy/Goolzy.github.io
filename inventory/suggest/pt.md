---
layout: inventory
title: Sugestões
permalink: /inventory/suggest/pt/
lang: pt
translations:
  ko: /inventory/suggest/
  en: /inventory/suggest/en/
  ja: /inventory/suggest/ja/
  de: /inventory/suggest/de/
  fr: /inventory/suggest/fr/
  es: /inventory/suggest/es/
  pt: /inventory/suggest/pt/
  zh: /inventory/suggest/zh/
---

## Sugestões

Por favor sugira novas funcionalidades ou melhorias.

---

<form id="suggest-form" style="max-width:600px;">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
  <label style="display:block; margin-bottom:1rem;">
    Título
    <input type="text" name="title" id="suggest_title" required style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="Resuma sua sugestão em uma linha">
  </label>

  <label style="display:block; margin-bottom:1rem;">
    Conteúdo
    <textarea name="content" required rows="6" style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="Por favor escreva os detalhes"></textarea>
  </label>
  <input type="hidden" name="email" id="suggest_email" value="">
  <input type="hidden" name="uid" id="suggest_uid" value="">
  <div class="muted" id="suggest-email-hint" style="margin:.5rem 0 1rem; word-break: break-all;">Autor: <span id="suggest-email-value" style="display: inline-block; max-width: 100%;">Verificando...</span></div>

  <button class="btn" type="submit">Enviar</button>
</form>

<div id="suggest-status" class="notice" style="display:none;"></div>

<script>
(function(){
  var msg = {
    checking: 'Verificando status de login...',
    loginRequired: 'Login é necessário para sugestões.<br><br>Por favor faça login primeiro pelo app.<br><br><a href="/inventory/pt/" class="btn">Início</a>',
    submitting: 'Enviando...',
    success: 'Obrigado! Sua sugestão foi enviada com sucesso. (ID: ',
    errorSubmit: 'Falha ao enviar: ',
    errorFields: 'Por favor insira o título e o conteúdo.',
    errorUnknown: 'Ocorreu um erro desconhecido.',
    errorFirebase: 'Firebase não está inicializado. Por favor tente novamente mais tarde.'
  };

  var form = document.getElementById('suggest-form');
  var emailInput = document.getElementById('suggest_email');
  var uidInput = document.getElementById('suggest_uid');
  var emailText = document.getElementById('suggest-email-value');
  var status = document.getElementById('suggest-status');
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

      var submitFeedback = window.httpsCallable(window.firebaseFunctions, 'submitFeedbackFunc');

      var data = {
        title: form.querySelector('input[name="title"]').value.trim(),
        content: form.querySelector('textarea[name="content"]').value.trim(),
        email: emailInput.value || null,
        uid: uidInput.value || null,
        website: form.querySelector('input[name="website"]').value,
        platform: navigator.platform || 'unknown',
        userAgent: navigator.userAgent || 'unknown'
      };

      var result = await submitFeedback(data);

      if (result.data.success) {
        status.textContent = msg.success + result.data.id.slice(0,8) + '...)';
        status.className = 'notice success';
        form.reset();
        applyAppAuth();
      } else {
        throw new Error('Falha ao enviar.');
      }

    } catch(err) {
      console.error('[Suggest] Erro:', err);
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
