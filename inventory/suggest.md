---
layout: inventory
title: 건의하기
permalink: /inventory/suggest/
---

## 건의하기

새로운 기능이나 개선 사항을 제안해주세요.

---

<form id="suggest-form" style="max-width:600px;">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
  <label style="display:block; margin-bottom:1rem;">
    제목
    <input type="text" name="title" id="suggest_title" required style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="제안을 한 줄로 요약해주세요">
  </label>

  <label style="display:block; margin-bottom:1rem;">
    내용
    <textarea name="content" required rows="6" style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="자세한 내용을 작성해주세요"></textarea>
  </label>
  <input type="hidden" name="email" id="suggest_email" value="">
  <input type="hidden" name="uid" id="suggest_uid" value="">
  <div class="muted" id="suggest-email-hint" style="margin:.5rem 0 1rem; word-break: break-all;">작성자: <span id="suggest-email-value" style="display: inline-block; max-width: 100%;">확인 중…</span></div>

  <button class="btn" type="submit">제출</button>
</form>

<div id="suggest-status" class="notice" style="display:none;"></div>

<script>
(function(){
  var form = document.getElementById('suggest-form');
  var emailInput = document.getElementById('suggest_email');
  var uidInput = document.getElementById('suggest_uid');
  var emailText = document.getElementById('suggest-email-value');
  var status = document.getElementById('suggest-status');
  var isLoggedIn = false;

  // 로그인 필요 UI 표시
  function showLoginRequired(){
    form.style.display = 'none';
    status.style.display = 'block';
    status.innerHTML = '건의하기는 로그인이 필요합니다.<br><br>앱에서 로그인 후 이용해주세요.<br><br><a href="/inventory/" class="btn">홈으로</a>';
    status.className = 'notice';
  }

  // 폼 표시
  function showForm(){
    form.style.display = 'block';
    status.style.display = 'none';
  }

  // 인증 정보 적용
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

  // 앱 인증 정보 적용
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

  // 초기 상태: 폼 숨김
  form.style.display = 'none';
  status.style.display = 'block';
  status.textContent = '로그인 상태 확인 중…';
  status.className = 'notice';

  // 즉시 시도
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

  // Cloud Function 호출로 제출
  form.addEventListener('submit', async function(e){
    e.preventDefault();

    // 로그인 재확인
    if (!isLoggedIn || !emailInput.value) {
      showLoginRequired();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.classList.add('loading');
    status.style.display = 'block';
    status.textContent = '제출 중…';
    status.className = 'notice';

    try {
      // Cloud Functions 확인
      if (!window.firebaseFunctions || !window.httpsCallable) {
        throw new Error('Firebase가 초기화되지 않았습니다. 잠시 후 다시 시도해주세요.');
      }

      var submitFeedback = window.httpsCallable(window.firebaseFunctions, 'submitFeedbackFunc');

      var data = {
        title: form.querySelector('input[name="title"]').value.trim(),
        content: form.querySelector('textarea[name="content"]').value.trim(),
        email: emailInput.value || null,
        uid: uidInput.value || null,
        website: form.querySelector('input[name="website"]').value, // honeypot
        platform: navigator.platform || 'unknown',
        userAgent: navigator.userAgent || 'unknown'
      };

      var result = await submitFeedback(data);

      if (result.data.success) {
        status.textContent = '감사합니다! 제안이 성공적으로 등록되었습니다. (ID: ' + result.data.id.slice(0,8) + '...)';
        status.className = 'notice success';
        form.reset();
        applyAppAuth();
      } else {
        throw new Error('제출에 실패했습니다.');
      }

    } catch(err) {
      console.error('[Suggest] 오류:', err);
      var errorMessage = err.message || '알 수 없는 오류가 발생했습니다.';
      if (err.code === 'functions/invalid-argument') {
        errorMessage = '제목과 내용을 모두 입력해주세요.';
      }
      status.textContent = '제출에 실패했습니다: ' + errorMessage;
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
