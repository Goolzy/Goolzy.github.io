---
layout: inventory
title: Informações da conta
permalink: /inventory/account/pt/
lang: pt
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
    <h2>Informações da conta</h2>

    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:1.5rem; margin-bottom:2rem;">
      <div style="margin-bottom:1rem;">
        <strong>Email:</strong>
        <div id="user-email" style="margin-top:.25rem; color:#374151;">Verificando...</div>
      </div>

      <div id="user-uid-section" style="margin-bottom:1rem; display:none;">
        <strong>ID do usuário:</strong>
        <div id="user-uid" style="margin-top:.25rem; color:#6b7280; font-family:monospace; font-size:.9rem;"></div>
      </div>

      <div id="user-name-section" style="margin-bottom:1rem; display:none;">
        <strong>Nome:</strong>
        <div id="user-name" style="margin-top:.25rem; color:#374151;"></div>
      </div>
    </div>

    <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:1.5rem;">
      <h4 style="margin-top:0; color:#0c4a6e;">Gerenciamento de conta</h4>
      <p style="color:#0c4a6e; margin-bottom:0;">
        A exclusão da conta ou alterações de informações podem ser feitas no menu de configurações do aplicativo.
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
      emailEl.textContent = 'Não foi possível carregar as informações';
      return;
    }

    // Exibir email
    emailEl.textContent = userData.email || 'Desconhecido';

    // Exibir UID (se disponível)
    if (userData.uid && userData.uid !== 'app-user') {
      uidEl.textContent = userData.uid;
      uidSection.style.display = 'block';
    }

    // Exibir nome (se disponível)
    if (userData.displayName) {
      nameEl.textContent = userData.displayName;
      nameSection.style.display = 'block';
    }

    console.log('[Account] Informações do usuário exibidas');
  }

  // Carregar info de autenticação do app
  function loadInfo(){
    try {
      var appAuth = window.getAppAuth && window.getAppAuth();
      if (appAuth) {
        console.log('[Account] Usando info de autenticação do app');
        displayUserInfo(appAuth);
        return;
      }
    } catch(e){
      console.warn('[Account] Falha ao carregar info de autenticação:', e);
    }

    // Aguardar evento de autenticação se não disponível
    window.addEventListener('app:auth-ready', function(e){
      console.log('[Account] Evento app:auth-ready recebido');
      displayUserInfo(e.detail);
    }, { once: true });

    // Mostrar mensagem se não houver info após 3 segundos
    setTimeout(function(){
      if (emailEl.textContent === 'Verificando...') {
        emailEl.textContent = 'Por favor faça login pelo aplicativo';
      }
    }, 3000);
  }

  // Executar ao carregar a página
  loadInfo();
})();
</script>
