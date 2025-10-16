---
layout: inventory
title: 건의하기
permalink: /inventory/suggest/
---

### 기능 개선 건의

새로운 기능이나 개선 사항을 제안해주세요.

<form id="suggest-form" action="https://formsubmit.co/captain@goolzy.com" method="POST" style="max-width:600px;">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_subject" id="suggest_subject" value="[기능 제안] 제출">
  <input type="hidden" name="Category" value="기능 제안">
  <input type="hidden" name="_next" value="{{ '/inventory/suggest/?success=1' | absolute_url }}">
  <input type="hidden" name="_captcha" value="false">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
  <label style="display:block; margin-bottom:1rem;">
    제목
    <input type="text" name="Title" id="suggest_title" required style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="제안을 한 줄로 요약해주세요">
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    내용
    <textarea name="Proposal" required rows="6" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  <input type="hidden" name="Email" value="">
  <input type="hidden" name="_replyto" value="">
  <div class="muted" id="suggest-email-hint" style="margin:.5rem 0 1rem;">회신 이메일: <span id="suggest-email-value">확인 중…</span></div>
  <input type="hidden" name="uid" value="">
  
  <button class="btn" type="submit">제출</button>
</form>

<div id="suggest-status" class="notice" style="display:none;"></div>

<script>
(function(){
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('success') === '1') {
      var box = document.getElementById('suggest-status');
      box.style.display = 'block';
      box.textContent = '감사합니다! 제안이 전송되었습니다.';
    }
  } catch(e){}
  function updateSubject(){
    var t = document.getElementById('suggest_title').value || '제목 미입력';
    document.getElementById('suggest_subject').value = '[기능 제안] ' + t;
  }
  var form = document.getElementById('suggest-form');
  try { form.addEventListener('input', updateSubject); } catch(e){}
  // Autofill from AuthBridge (email, uid)
  try {
    var form = document.getElementById('suggest-form');
    var emailInput = form.querySelector('input[name="Email"]');
    var replyToInput = form.querySelector('input[name="_replyto"]');
    var uidInput = form.querySelector('input[name="uid"]');
    var emailText = document.getElementById('suggest-email-value');
    if (window.AuthBridge) {
      var user = AuthBridge.currentUser && AuthBridge.currentUser();
      if (user && user.email) {
        emailInput.value = user.email;
        if (replyToInput) replyToInput.value = user.email;
        if (emailText) emailText.textContent = user.email;
      } else {
        if (emailText) emailText.textContent = '알 수 없음';
      }
      if (user && user.uid && uidInput) { uidInput.value = user.uid; }
      AuthBridge.onChange(function(u){
        if (u && u.email) {
          emailInput.value = u.email;
          if (replyToInput) replyToInput.value = u.email;
          if (emailText) emailText.textContent = u.email;
        } else {
          emailInput.value = '';
          if (replyToInput) replyToInput.value = '';
          if (emailText) emailText.textContent = '알 수 없음';
        }
        if (uidInput) uidInput.value = (u && u.uid) ? u.uid : '';
      });
    }
  } catch(e){}
  // AJAX submit with timeout and fallback
  try {
    form.addEventListener('submit', function(e){
      try { e.preventDefault(); } catch(_){}
      var status = document.getElementById('suggest-status');
      if (status) { status.style.display='block'; status.textContent='보내는 중…'; }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.classList.add('loading'); }
      // Mirror Email -> _replyto before building FormData
      try {
        var emailInput2 = form.querySelector('input[name="Email"]');
        var replyToInput2 = form.querySelector('input[name="_replyto"]');
        if (emailInput2 && replyToInput2) replyToInput2.value = emailInput2.value || '';
      } catch(_){ }
      var fd = new FormData(form);
      var ctrl = (window.AbortController) ? new AbortController() : null;
      var to = setTimeout(function(){ try { ctrl && ctrl.abort(); } catch(_){} }, 12000);
      fetch('https://formsubmit.co/ajax/captain@goolzy.com', {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' },
        signal: ctrl ? ctrl.signal : undefined
      }).then(function(res){
        if (!res.ok) throw new Error('FORM_SUBMIT_FAILED:' + res.status);
        return res.json();
      }).then(function(){
        if (status) { status.style.display='block'; status.textContent='감사합니다! 제안이 전송되었습니다.'; }
        try { form.reset(); } catch(_){ }
      }).catch(function(err){
        var msg = '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.';
        if (String(err).indexOf('403')>=0 || String(err).indexOf('401')>=0 || String(err).indexOf('422')>=0) {
          msg += ' 수신자 이메일 인증이 완료되지 않았을 수 있습니다. 관리자는 formsubmit.co 확인 메일(스팸함 포함)을 승인해 주세요.';
        }
        if (status) { status.style.display='block'; status.textContent = msg + ' (표준 제출로 재시도합니다)'; }
        // Fallback: submit in the same tab
        try { form.removeAttribute('target'); form.submit(); } catch(_){ }
      }).finally(function(){ if (btn) { btn.disabled=false; btn.classList.remove('loading'); } });
    });
  } catch(e){}
})();
</script>

<style>
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; margin-top: 1rem; }
.muted { color:#6b7280; font-size:.9rem; }
</style>
