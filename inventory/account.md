---
layout: inventory
title: 계정 정보
permalink: /inventory/account/
lang: ko
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
    <h2>계정 정보</h2>

    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:1.5rem; margin-bottom:2rem;">
      <div style="margin-bottom:1rem;">
        <strong>이메일:</strong>
        <div id="user-email" style="margin-top:.25rem; color:#374151;">확인 중...</div>
      </div>

      <div id="user-uid-section" style="margin-bottom:1rem; display:none;">
        <strong>사용자 ID:</strong>
        <div id="user-uid" style="margin-top:.25rem; color:#6b7280; font-family:monospace; font-size:.9rem;"></div>
      </div>

      <div id="user-name-section" style="margin-bottom:1rem; display:none;">
        <strong>이름:</strong>
        <div id="user-name" style="margin-top:.25rem; color:#374151;"></div>
      </div>
    </div>

    <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:1.5rem;">
      <h4 style="margin-top:0; color:#0c4a6e;">💡 계정 관리</h4>
      <p style="color:#0c4a6e; margin-bottom:0;">
        계정 삭제 또는 정보 수정은 앱의 설정 메뉴에서 가능합니다.
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
      emailEl.textContent = '정보를 불러올 수 없습니다';
      return;
    }

    // 이메일 표시
    emailEl.textContent = userData.email || '알 수 없음';

    // UID 표시 (있으면)
    if (userData.uid && userData.uid !== 'app-user') {
      uidEl.textContent = userData.uid;
      uidSection.style.display = 'block';
    }

    // 이름 표시 (있으면)
    if (userData.displayName) {
      nameEl.textContent = userData.displayName;
      nameSection.style.display = 'block';
    }

    console.log('[Account] 사용자 정보 표시 완료');
  }

  // 앱 인증 정보 로드
  function loadInfo(){
    try {
      var appAuth = window.getAppAuth && window.getAppAuth();
      if (appAuth) {
        console.log('[Account] 앱 인증 정보 사용');
        displayUserInfo(appAuth);
        return;
      }
    } catch(e){
      console.warn('[Account] 앱 인증 정보 로드 실패:', e);
    }

    // 앱 인증 정보가 없으면 이벤트 대기
    window.addEventListener('app:auth-ready', function(e){
      console.log('[Account] app:auth-ready 이벤트 수신');
      displayUserInfo(e.detail);
    }, { once: true });

    // 3초 후에도 정보가 없으면 안내 표시
    setTimeout(function(){
      if (emailEl.textContent === '확인 중...') {
        emailEl.textContent = '앱에서 로그인해주세요';
      }
    }, 3000);
  }

  // 페이지 로드 시 실행
  loadInfo();
})();
</script>
