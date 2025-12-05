---
layout: inventory
title: Información de la cuenta
permalink: /inventory/account/es/
lang: es
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
    <h2>Información de la cuenta</h2>

    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:1.5rem; margin-bottom:2rem;">
      <div style="margin-bottom:1rem;">
        <strong>Correo electrónico:</strong>
        <div id="user-email" style="margin-top:.25rem; color:#374151;">Verificando...</div>
      </div>

      <div id="user-uid-section" style="margin-bottom:1rem; display:none;">
        <strong>ID de usuario:</strong>
        <div id="user-uid" style="margin-top:.25rem; color:#6b7280; font-family:monospace; font-size:.9rem;"></div>
      </div>

      <div id="user-name-section" style="margin-bottom:1rem; display:none;">
        <strong>Nombre:</strong>
        <div id="user-name" style="margin-top:.25rem; color:#374151;"></div>
      </div>
    </div>

    <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:1.5rem;">
      <h4 style="margin-top:0; color:#0c4a6e;">Gestión de cuenta</h4>
      <p style="color:#0c4a6e; margin-bottom:0;">
        La eliminación de la cuenta o cambios de información se pueden realizar en el menú de configuración de la aplicación.
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
      emailEl.textContent = 'No se pudo cargar la información';
      return;
    }

    // Mostrar correo
    emailEl.textContent = userData.email || 'Desconocido';

    // Mostrar UID (si está disponible)
    if (userData.uid && userData.uid !== 'app-user') {
      uidEl.textContent = userData.uid;
      uidSection.style.display = 'block';
    }

    // Mostrar nombre (si está disponible)
    if (userData.displayName) {
      nameEl.textContent = userData.displayName;
      nameSection.style.display = 'block';
    }

    console.log('[Account] Información de usuario mostrada');
  }

  // Cargar info de autenticación de la app
  function loadInfo(){
    try {
      var appAuth = window.getAppAuth && window.getAppAuth();
      if (appAuth) {
        console.log('[Account] Usando info de autenticación de la app');
        displayUserInfo(appAuth);
        return;
      }
    } catch(e){
      console.warn('[Account] Error al cargar info de autenticación:', e);
    }

    // Esperar evento de autenticación si no está disponible
    window.addEventListener('app:auth-ready', function(e){
      console.log('[Account] Evento app:auth-ready recibido');
      displayUserInfo(e.detail);
    }, { once: true });

    // Mostrar mensaje si no hay info después de 3 segundos
    setTimeout(function(){
      if (emailEl.textContent === 'Verificando...') {
        emailEl.textContent = 'Por favor inicia sesión desde la app';
      }
    }, 3000);
  }

  // Ejecutar al cargar la página
  loadInfo();
})();
</script>
