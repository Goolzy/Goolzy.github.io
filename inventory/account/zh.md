---
layout: inventory
title: "账户管理"
permalink: /inventory/account/zh/
lang: zh
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
    <h2>账户信息</h2>

    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:1.5rem; margin-bottom:2rem;">
      <div style="margin-bottom:1rem;">
        <strong>邮箱：</strong>
        <div id="user-email" style="margin-top:.25rem; color:#374151;">正在检查...</div>
      </div>

      <div id="user-uid-section" style="margin-bottom:1rem; display:none;">
        <strong>用户ID：</strong>
        <div id="user-uid" style="margin-top:.25rem; color:#6b7280; font-family:monospace; font-size:.9rem;"></div>
      </div>

      <div id="user-name-section" style="margin-bottom:1rem; display:none;">
        <strong>姓名：</strong>
        <div id="user-name" style="margin-top:.25rem; color:#374151;"></div>
      </div>
    </div>

    <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:1.5rem;">
      <h4 style="margin-top:0; color:#0c4a6e;">账户管理</h4>
      <p style="color:#0c4a6e; margin-bottom:0;">
        账户删除或信息修改可以在应用的设置菜单中进行。
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
      emailEl.textContent = '无法加载信息';
      return;
    }

    // Display email
    emailEl.textContent = userData.email || '未知';

    // Display UID (if available)
    if (userData.uid && userData.uid !== 'app-user') {
      uidEl.textContent = userData.uid;
      uidSection.style.display = 'block';
    }

    // Display name (if available)
    if (userData.displayName) {
      nameEl.textContent = userData.displayName;
      nameSection.style.display = 'block';
    }

    console.log('[Account] User info displayed');
  }

  // Load app auth info
  function loadInfo(){
    try {
      var appAuth = window.getAppAuth && window.getAppAuth();
      if (appAuth) {
        console.log('[Account] Using app auth info');
        displayUserInfo(appAuth);
        return;
      }
    } catch(e){
      console.warn('[Account] Failed to load app auth info:', e);
    }

    // Wait for app auth event if not available
    window.addEventListener('app:auth-ready', function(e){
      console.log('[Account] Received app:auth-ready event');
      displayUserInfo(e.detail);
    }, { once: true });

    // Show message if no info after 3 seconds
    setTimeout(function(){
      if (emailEl.textContent === '正在检查...') {
        emailEl.textContent = '请先从应用登录';
      }
    }, 3000);
  }

  // Run on page load
  loadInfo();
})();
</script>
