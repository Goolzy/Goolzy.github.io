---
layout: inventory-deletion
title: アカウント削除
permalink: /deletion/ja/
description: Goolzyアカウント削除
lang: ja
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
      <h1>アカウント削除</h1>
      <p class="warning-text">アカウントを削除しますか？</p>
    </div>

    <div class="danger-notice">
      <h3>⛔ 重要な警告</h3>
      <ul>
        <li><strong>すべてのデータが永久に削除されます</strong></li>
        <li>チャットメッセージ、活動記録などすべての情報がサーバーから削除されます</li>
        <li><strong>削除されたアカウントは復元できません</strong></li>
        <li>同じメールで再登録は可能ですが、以前のデータは復元されません</li>
      </ul>
    </div>

    <div id="deletionForm" class="deletion-form">
      <div class="user-info-section">
        <label>現在ログイン中のアカウント</label>
        <div id="currentUserEmail" class="current-email">ログインが必要です</div>
      </div>

      <div class="confirmation-section">
        <label for="confirmText">以下のフレーズを正確に入力してください：</label>
        <div class="required-text" id="requiredText">
          <span id="emailPlaceholder">メール</span>アカウントの削除を要求します
        </div>
        <input
          type="text"
          id="confirmText"
          class="confirm-input"
          placeholder="上記のフレーズを正確に入力してください"
          autocomplete="off"
        >
        <div id="matchStatus" class="match-status"></div>
      </div>

      <div class="password-section">
        <label for="passwordConfirm">パスワード確認</label>
        <input
          type="password"
          id="passwordConfirm"
          class="password-input"
          placeholder="現在のパスワードを入力してください"
        >
        <p class="helper-text">ソーシャルログイン（Google、Apple）ユーザーはパスワードの入力は不要です。</p>
      </div>

      <button id="deleteBtn" class="delete-btn" disabled>
        アカウントを永久に削除
      </button>

      <div id="errorMsg" class="error-msg"></div>
    </div>

    <div class="deletion-footer">
      <a href="/ja/" class="cancel-link">キャンセルして戻る</a>
    </div>
  </div>
</div>
