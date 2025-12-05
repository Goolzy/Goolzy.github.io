---
layout: inventory-deletion
title: Delete Account
permalink: /deletion/en/
description: Delete Goolzy Account
lang: en
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
      <h1>Delete Account</h1>
      <p class="warning-text">Do you want to delete your account?</p>
    </div>

    <div class="danger-notice">
      <h3>⛔ Important Warning</h3>
      <ul>
        <li><strong>All data will be permanently deleted</strong></li>
        <li>All information including chat messages and activity records will be removed from the server</li>
        <li><strong>Deleted accounts cannot be recovered</strong></li>
        <li>You can sign up again with the same email, but previous data will not be restored</li>
      </ul>
    </div>

    <div id="deletionForm" class="deletion-form">
      <div class="user-info-section">
        <label>Current logged-in account</label>
        <div id="currentUserEmail" class="current-email">Login required</div>
      </div>

      <div class="confirmation-section">
        <label for="confirmText">Please type the following phrase exactly:</label>
        <div class="required-text" id="requiredText">
          I request deletion of the <span id="emailPlaceholder">email</span> account
        </div>
        <input
          type="text"
          id="confirmText"
          class="confirm-input"
          placeholder="Type the phrase above exactly"
          autocomplete="off"
        >
        <div id="matchStatus" class="match-status"></div>
      </div>

      <div class="password-section">
        <label for="passwordConfirm">Password confirmation</label>
        <input
          type="password"
          id="passwordConfirm"
          class="password-input"
          placeholder="Enter your current password"
        >
        <p class="helper-text">Social login (Google, Apple) users do not need to enter a password.</p>
      </div>

      <button id="deleteBtn" class="delete-btn" disabled>
        Permanently Delete Account
      </button>

      <div id="errorMsg" class="error-msg"></div>
    </div>

    <div class="deletion-footer">
      <a href="/en/" class="cancel-link">Cancel and go back</a>
    </div>
  </div>
</div>
