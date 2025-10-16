---
layout: inventory
title: 버그 리포트
permalink: /inventory/bug-report/
---

### 버그 신고

발견하신 버그를 신고해주세요.

<form id="bug-form" action="https://formsubmit.co/captain@goolzy.com" method="POST" style="max-width:600px;">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_subject" id="bug_subject" value="[버그 리포트] 제출">
  <input type="hidden" name="Category" value="버그 리포트">
  <input type="hidden" name="_next" value="{{ '/inventory/bug-report/?success=1' | absolute_url }}">
  <input type="hidden" name="_captcha" value="false">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
  <label style="display:block; margin-bottom:1rem;">
    버그 제목
    <input type="text" name="Title" id="bug_title" required style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="버그를 한 줄로 요약해주세요">
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    재현 방법
    <textarea name="Steps_to_Reproduce" required rows="4" style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="1. ... 버튼 클릭&#10;2. ... 입력&#10;3. 오류 발생"></textarea>
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    예상 동작
    <textarea name="Expected_Behavior" required rows="2" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    실제 동작
    <textarea name="Actual_Behavior" required rows="2" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  <label>이메일(자동 입력)
    <input type="email" name="Email" placeholder="name@example.com" style="width:100%; padding:.5rem; margin-top:.25rem;">
  </label>
  <input type="hidden" name="uid" value="">
  
  <button class="btn" type="submit">신고하기</button>
</form>

<div id="bug-status" class="notice" style="display:none;"></div>

<script>
(function(){
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('success') === '1') {
      var box = document.getElementById('bug-status');
      box.style.display = 'block';
      box.textContent = '감사합니다! 버그 리포트가 전송되었습니다.';
    }
  } catch(e){}
  function updateSubject(){
    var t = document.getElementById('bug_title').value || '제목 미입력';
    document.getElementById('bug_subject').value = '[버그 리포트] ' + t;
  }
  var form = document.getElementById('bug-form');
  try { form.addEventListener('input', updateSubject); } catch(e){}
  // Autofill from AuthBridge (email, uid)
  try {
    var form = document.getElementById('bug-form');
    var emailInput = form.querySelector('input[name="Email"]');
    var uidInput = form.querySelector('input[name="uid"]');
    if (window.AuthBridge) {
      var user = AuthBridge.currentUser && AuthBridge.currentUser();
      if (user && user.email) { emailInput.value = user.email; }
      if (user && user.uid && uidInput) { uidInput.value = user.uid; }
      AuthBridge.onChange(function(u){
        if (u && u.email) emailInput.value = u.email; else emailInput.value = '';
        if (uidInput) uidInput.value = (u && u.uid) ? u.uid : '';
      });
    }
  } catch(e){}
  // AJAX submit with timeout and fallback
  try {
    form.addEventListener('submit', function(e){
      try { e.preventDefault(); } catch(_){}
      var status = document.getElementById('bug-status');
      if (status) { status.style.display='block'; status.textContent='보내는 중…'; }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.classList.add('loading'); }
      var fd = new FormData(form);
      try {
        var emailInput = form.querySelector('input[name="Email"]');
        if (emailInput && emailInput.value) fd.append('_replyto', emailInput.value);
      } catch(_){ }
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
        if (status) { status.style.display='block'; status.textContent='감사합니다! 버그 리포트가 전송되었습니다.'; }
        try { form.reset(); } catch(_){ }
      }).catch(function(err){
        var msg = '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.';
        if (String(err).indexOf('403')>=0 || String(err).indexOf('401')>=0 || String(err).indexOf('422')>=0) {
          msg += ' 수신자 이메일 인증이 완료되지 않았을 수 있습니다. 관리자는 formsubmit.co 확인 메일(스팸함 포함)을 승인해 주세요.';
        }
        if (status) { status.style.display='block'; status.textContent = msg + ' (표준 제출로 재시도합니다)'; }
        try { form.target = '_blank'; form.submit(); } catch(_){ }
      }).finally(function(){ if (btn) { btn.disabled=false; btn.classList.remove('loading'); } });
    });
  } catch(e){}
})();
</script>

<style>
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; margin-top: 1rem; }
</style>
