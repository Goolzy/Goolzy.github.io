---
layout: inventory
title: 버그 리포트
permalink: /inventory/bug-report/
lang: ko
translations:
  ko: /inventory/bug-report/
  en: /inventory/bug-report/en/
  ja: /inventory/bug-report/ja/
  de: /inventory/bug-report/de/
  fr: /inventory/bug-report/fr/
  es: /inventory/bug-report/es/
  pt: /inventory/bug-report/pt/
  zh: /inventory/bug-report/zh/
---

## 버그 리포트

발견하신 버그를 신고해주세요.

---

<form id="bug-form" style="max-width:600px;">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
  <label style="display:block; margin-bottom:1rem;">
    버그 제목
    <input type="text" name="title" id="bug_title" required style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="버그를 한 줄로 요약해주세요">
  </label>

  <label style="display:block; margin-bottom:1rem;">
    재현 방법
    <textarea name="steps" required rows="4" style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="1. ... 버튼 클릭&#10;2. ... 입력&#10;3. 오류 발생"></textarea>
  </label>

  <label style="display:block; margin-bottom:1rem;">
    예상 동작
    <textarea name="expected" required rows="2" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>

  <label style="display:block; margin-bottom:1rem;">
    실제 동작
    <textarea name="actual" required rows="2" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  <input type="hidden" name="email" id="bug_email" value="">
  <input type="hidden" name="uid" id="bug_uid" value="">
  <div class="muted" id="bug-email-hint" style="margin:.5rem 0 1rem; word-break: break-all;">신고자: <span id="bug-email-value" style="display: inline-block; max-width: 100%;">확인 중…</span></div>

  <button class="btn" type="submit">신고하기</button>
</form>

<div id="bug-status" class="notice" style="display:none;"></div>

<script>
(function(){
  var form = document.getElementById('bug-form');
  var emailInput = document.getElementById('bug_email');
  var uidInput = document.getElementById('bug_uid');
  var emailText = document.getElementById('bug-email-value');
  var status = document.getElementById('bug-status');
  var isLoggedIn = false;

  // 로그인 필요 UI 표시
  function showLoginRequired(){
    form.style.display = 'none';
    status.style.display = 'block';
    status.innerHTML = '버그 리포트는 로그인이 필요합니다.<br><br>앱에서 로그인 후 이용해주세요.<br><br><a href="/inventory/" class="btn">홈으로</a>';
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

      var submitBugReport = window.httpsCallable(window.firebaseFunctions, 'submitBugReportFunc');

      var data = {
        title: form.querySelector('input[name="title"]').value.trim(),
        steps: form.querySelector('textarea[name="steps"]').value.trim(),
        expected: form.querySelector('textarea[name="expected"]').value.trim(),
        actual: form.querySelector('textarea[name="actual"]').value.trim(),
        email: emailInput.value || null,
        uid: uidInput.value || null,
        website: form.querySelector('input[name="website"]').value, // honeypot
        platform: navigator.platform || 'unknown',
        userAgent: navigator.userAgent || 'unknown'
      };

      var result = await submitBugReport(data);

      if (result.data.success) {
        status.textContent = '감사합니다! 버그 리포트가 성공적으로 등록되었습니다. (ID: ' + result.data.id.slice(0,8) + '...)';
        status.className = 'notice success';
        form.reset();
        applyAppAuth();
      } else {
        throw new Error('제출에 실패했습니다.');
      }

    } catch(err) {
      console.error('[BugReport] 오류:', err);
      var errorMessage = err.message || '알 수 없는 오류가 발생했습니다.';
      if (err.code === 'functions/invalid-argument') {
        errorMessage = '모든 필드를 입력해주세요.';
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
