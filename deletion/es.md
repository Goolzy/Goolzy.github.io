---
layout: inventory-deletion
title: Eliminar cuenta
permalink: /deletion/es/
description: Eliminar cuenta de Goolzy
lang: es
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
      <h1>Eliminar cuenta</h1>
      <p class="warning-text">¿Desea eliminar su cuenta?</p>
    </div>

    <div class="danger-notice">
      <h3>⛔ Advertencia importante</h3>
      <ul>
        <li><strong>Todos los datos se eliminarán permanentemente</strong></li>
        <li>Toda la información, incluidos los mensajes de chat y los registros de actividad, se eliminará del servidor</li>
        <li><strong>Las cuentas eliminadas no se pueden recuperar</strong></li>
        <li>Puede registrarse de nuevo con el mismo correo electrónico, pero los datos anteriores no se restaurarán</li>
      </ul>
    </div>

    <div id="deletionForm" class="deletion-form">
      <div class="user-info-section">
        <label>Cuenta actualmente conectada</label>
        <div id="currentUserEmail" class="current-email">Inicio de sesión requerido</div>
      </div>

      <div class="confirmation-section">
        <label for="confirmText">Por favor, escriba exactamente la siguiente frase:</label>
        <div class="required-text" id="requiredText">
          Solicito la eliminación de la cuenta <span id="emailPlaceholder">correo electrónico</span>
        </div>
        <input
          type="text"
          id="confirmText"
          class="confirm-input"
          placeholder="Escriba exactamente la frase anterior"
          autocomplete="off"
        >
        <div id="matchStatus" class="match-status"></div>
      </div>

      <div class="password-section">
        <label for="passwordConfirm">Confirmación de contraseña</label>
        <input
          type="password"
          id="passwordConfirm"
          class="password-input"
          placeholder="Ingrese su contraseña actual"
        >
        <p class="helper-text">Los usuarios de inicio de sesión social (Google, Apple) no necesitan ingresar una contraseña.</p>
      </div>

      <button id="deleteBtn" class="delete-btn" disabled>
        Eliminar cuenta permanentemente
      </button>

      <div id="errorMsg" class="error-msg"></div>
    </div>

    <div class="deletion-footer">
      <a href="/es/" class="cancel-link">Cancelar y volver</a>
    </div>
  </div>
</div>
