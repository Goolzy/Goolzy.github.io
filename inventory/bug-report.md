---
layout: inventory
title: 버그 리포트
permalink: /inventory/bug-report/
---

### 버그 신고

발견하신 버그를 신고해주세요.

<form id="bug-form" style="max-width:600px;" data-workers-endpoint="{{ site.mail_gateway.workers_endpoint | default: '' }}">
  <input type="hidden" name="_subject" id="bug_subject" value="[버그 리포트] 제출">
  <input type="hidden" name="Category" value="버그 리포트">
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
  <input type="hidden" name="Email" value="">
  <input type="hidden" name="_replyto" value="">
  <div class="muted" id="bug-email-hint" style="margin:.5rem 0 1rem;">회신 이메일: <span id="bug-email-value">확인 중…</span></div>
  <input type="hidden" name="uid" value="">
  
  <button class="btn" type="submit">신고하기</button>
</form>

<div id="bug-status" class="notice" style="display:none;"></div>
<div id="bug-mailto" style="display:none; margin-top:.5rem;"></div>

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
  // Autofill from AuthBridge (email, uid). If bridge loads late, wait for 'auth:bridge-ready'.
  try {
    var form = document.getElementById('bug-form');
    var emailInput = form.querySelector('input[name="Email"]');
    var replyToInput = form.querySelector('input[name="_replyto"]');
    var uidInput = form.querySelector('input[name="uid"]');
    var emailText = document.getElementById('bug-email-value');
    function applyUser(u){
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
    }
    function wireBridge(){
      if (!window.AuthBridge) return;
      try {
        var u0 = AuthBridge.currentUser && AuthBridge.currentUser();
        applyUser(u0 || null);
        AuthBridge.onChange(function(u){ applyUser(u || null); });
      } catch(_){ }
    }
    // Try now
    if (window.AuthBridge) { wireBridge(); }
    // Or wait for bridge-ready
    try { window.addEventListener('auth:bridge-ready', function(){ wireBridge(); }, { once: true }); } catch(_){ }
    // If still pending after a few seconds, show unknown
    setTimeout(function(){
      try {
        if (emailText && emailText.textContent === '확인 중…') { emailText.textContent = '알 수 없음'; }
      } catch(_){ }
    }, 3000);
  } catch(e){}
  // AJAX submit with timeout and fallback
  try {
    form.addEventListener('submit', function(e){
      try { e.preventDefault(); } catch(_){}
      var status = document.getElementById('bug-status');
      if (status) { status.style.display='block'; status.textContent='보내는 중…'; }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.classList.add('loading'); }
      // Ensure hidden _replyto mirrors Email BEFORE building FormData
      try {
        var emailInput2 = form.querySelector('input[name="Email"]');
        var replyToInput2 = form.querySelector('input[name="_replyto"]');
        if (emailInput2 && replyToInput2) replyToInput2.value = emailInput2.value || '';
      } catch(_){ }
      var fd = new FormData(form);
      var ctrl = (window.AbortController) ? new AbortController() : null;
      var to = setTimeout(function(){ try { ctrl && ctrl.abort(); } catch(_){} }, 12000);
      if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        if (status) { status.style.display='block'; status.textContent='네트워크가 오프라인입니다. 연결 상태를 확인한 뒤 다시 시도해 주세요.'; }
        throw new Error('OFFLINE');
      }
  var workers = form.getAttribute('data-workers-endpoint') || '';
  if (!workers) { throw new Error('WORKERS_ENDPOINT_NOT_SET'); }
  var submitUrl = workers.replace(/\/$/, '');
      var obj = {};
      fd.forEach(function(v,k){ obj[k] = v; });
      var fetchOpts = { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, signal: ctrl ? ctrl.signal : undefined, body: JSON.stringify(obj) };
      fetch(submitUrl, fetchOpts).then(function(res){
        if (!res.ok) {
          return res.clone().text().then(function(body){
            var bodyStr = (typeof body === 'string') ? body : JSON.stringify(body);
            throw new Error('FORM_SUBMIT_FAILED:' + res.status + ':' + bodyStr);
          });
        }
        return null;
      }).then(function(){
        if (status) { status.style.display='block'; status.textContent='감사합니다! 버그 리포트가 전송되었습니다.'; }
        try { form.reset(); } catch(_){ }
      }).catch(function(err){
        try { console.error('[Bug form] submit error:', err); } catch(_){ }
        var msg = '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.';
        if (String(err).indexOf('WORKERS_ENDPOINT_NOT_SET')>=0) { msg = '메일 엔드포인트가 설정되지 않았습니다. _config.yml의 mail_gateway.workers_endpoint를 설정한 뒤 다시 시도해 주세요.'; }
        if (status) {
          var code = (String(err).match(/FORM_SUBMIT_FAILED:(\d{3})/)||[])[1];
          var detail = '';
          var m = String(err).match(/FORM_SUBMIT_FAILED:\d{3}:(.*)$/);
          if (m && m[1]) detail = ' 상세: ' + m[1].slice(0, 200);
          status.style.display='block';
          status.textContent = msg + (code ? ' (코드 ' + code + ')' : '') + detail;
        }
        // Last-resort: mailto fallback with prefilled content
        try {
          var mailtoBox = document.getElementById('bug-mailto');
          var to = 'captain@goolzy.com';
          var subj = document.getElementById('bug_subject').value || '[버그 리포트] 제출';
          var fd2 = new FormData(form);
          var lines = [];
          fd2.forEach(function(v,k){ if (k.charAt(0) !== '_') lines.push(k+': '+v); });
          var body = lines.join('\n');
          var url = 'mailto:' + encodeURIComponent(to) + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
          mailtoBox.innerHTML = '<a class="btn" href="'+url+'">이메일 앱으로 보내기</a>';
          mailtoBox.style.display = 'block';
        } catch(_){ }
  // workers-only: no standard POST fallback
      }).finally(function(){ if (btn) { btn.disabled=false; btn.classList.remove('loading'); } });
    });
  } catch(e){}
})();
</script>

<style>
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; margin-top: 1rem; }
.muted { color:#6b7280; font-size:.9rem; }
</style>
