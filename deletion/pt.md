---
layout: inventory-deletion
title: Excluir conta
permalink: /deletion/pt/
description: Excluir conta Goolzy
lang: pt
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
      <h1>Excluir conta</h1>
      <p class="warning-text">Deseja excluir sua conta?</p>
    </div>

    <div class="danger-notice">
      <h3>⛔ Aviso importante</h3>
      <ul>
        <li><strong>Todos os dados serão excluídos permanentemente</strong></li>
        <li>Todas as informações, incluindo mensagens de chat e registros de atividade, serão removidas do servidor</li>
        <li><strong>Contas excluídas não podem ser recuperadas</strong></li>
        <li>Você pode se registrar novamente com o mesmo e-mail, mas os dados anteriores não serão restaurados</li>
      </ul>
    </div>

    <div id="deletionForm" class="deletion-form">
      <div class="user-info-section">
        <label>Conta atualmente conectada</label>
        <div id="currentUserEmail" class="current-email">Login necessário</div>
      </div>

      <div class="confirmation-section">
        <label for="confirmText">Por favor, digite exatamente a seguinte frase:</label>
        <div class="required-text" id="requiredText">
          Solicito a exclusão da conta <span id="emailPlaceholder">e-mail</span>
        </div>
        <input
          type="text"
          id="confirmText"
          class="confirm-input"
          placeholder="Digite exatamente a frase acima"
          autocomplete="off"
        >
        <div id="matchStatus" class="match-status"></div>
      </div>

      <div class="password-section">
        <label for="passwordConfirm">Confirmação de senha</label>
        <input
          type="password"
          id="passwordConfirm"
          class="password-input"
          placeholder="Digite sua senha atual"
        >
        <p class="helper-text">Usuários de login social (Google, Apple) não precisam inserir senha.</p>
      </div>

      <button id="deleteBtn" class="delete-btn" disabled>
        Excluir conta permanentemente
      </button>

      <div id="errorMsg" class="error-msg"></div>
    </div>

    <div class="deletion-footer">
      <a href="/pt/" class="cancel-link">Cancelar e voltar</a>
    </div>
  </div>
</div>
