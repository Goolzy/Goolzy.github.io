---
layout: inventory
title: アカウント情報
permalink: /inventory/account/ja/
lang: ja
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
    <h2>アカウント情報</h2>

    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:1.5rem; margin-bottom:2rem;">
      <div style="margin-bottom:1rem;">
        <strong>メール:</strong>
        <div id="user-email" style="margin-top:.25rem; color:#374151;">確認中…</div>
      </div>

      <div id="user-uid-section" style="margin-bottom:1rem; display:none;">
        <strong>ユーザーID:</strong>
        <div id="user-uid" style="margin-top:.25rem; color:#6b7280; font-family:monospace; font-size:.9rem;"></div>
      </div>

      <div id="user-name-section" style="margin-bottom:1rem; display:none;">
        <strong>名前:</strong>
        <div id="user-name" style="margin-top:.25rem; color:#374151;"></div>
      </div>
    </div>

    <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:1.5rem;">
      <h4 style="margin-top:0; color:#0c4a6e;">アカウント管理</h4>
      <p style="color:#0c4a6e; margin-bottom:0;">
        アカウントの削除や情報の変更は、アプリの設定メニューから行えます。
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
      emailEl.textContent = '情報を読み込めませんでした';
      return;
    }

    // メール表示
    emailEl.textContent = userData.email || '不明';

    // UID表示（あれば）
    if (userData.uid && userData.uid !== 'app-user') {
      uidEl.textContent = userData.uid;
      uidSection.style.display = 'block';
    }

    // 名前表示（あれば）
    if (userData.displayName) {
      nameEl.textContent = userData.displayName;
      nameSection.style.display = 'block';
    }

    console.log('[Account] ユーザー情報表示完了');
  }

  // アプリ認証情報読み込み
  function loadInfo(){
    try {
      var appAuth = window.getAppAuth && window.getAppAuth();
      if (appAuth) {
        console.log('[Account] アプリ認証情報を使用');
        displayUserInfo(appAuth);
        return;
      }
    } catch(e){
      console.warn('[Account] アプリ認証情報の読み込みに失敗:', e);
    }

    // アプリ認証情報がなければイベント待機
    window.addEventListener('app:auth-ready', function(e){
      console.log('[Account] app:auth-readyイベント受信');
      displayUserInfo(e.detail);
    }, { once: true });

    // 3秒後も情報がなければ案内表示
    setTimeout(function(){
      if (emailEl.textContent === '確認中…') {
        emailEl.textContent = 'アプリからログインしてください';
      }
    }, 3000);
  }

  // ページ読み込み時に実行
  loadInfo();
})();
</script>
