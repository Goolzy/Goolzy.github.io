---
layout: page
title: 비밀번호 재설정
permalink: /password-reset/
description: 이메일로 비밀번호 재설정 링크를 받아보세요.
---

## 비밀번호 재설정

<p>가입한 이메일 주소를 입력하면 비밀번호 재설정 링크를 보내드립니다.</p>

<div id="pw-reset" class="card-glow" style="padding:1rem 1.25rem; border-radius:16px; max-width:420px;">
  <form id="pw-form" onsubmit="return false;" class="auth-form">
    <label>이메일
      <input name="email" type="email" required placeholder="name@example.com" style="width:100%; padding:.5rem .6rem;">
    </label>
    <div style="display:flex; gap:.5rem; align-items:center;">
      <button class="btn btn--alt-gradient" id="btn-send">재설정 메일 보내기</button>
      <a href="/account/" class="btn btn--outline">로그인 화면으로</a>
    </div>
  </form>
  <div id="pw-success" style="display:none; margin-top:.75rem; background:#ecfdf5; border:1px solid #a7f3d0; color:#065f46; padding:.75rem 1rem; border-radius:8px;"></div>
  <div id="pw-error" class="auth-error" style="display:none;"></div>
</div>

<script>
(function(){
  const form = document.getElementById('pw-form');
  const btn = document.getElementById('btn-send');
  const ok = document.getElementById('pw-success');
  const err = document.getElementById('pw-error');

  // Prefill if already known
  try{ var user = (window.AuthBridge && window.AuthBridge.currentUser && window.AuthBridge.currentUser()) || null;
       if(user && user.email) form.email.value = user.email; }catch(_e){}

  function showError(e){
    const code = (e && e.code) ? '['+e.code+'] ' : '';
    const msg = (e && e.message) ? e.message : String(e || '에러');
    err.style.display = 'block';
    err.textContent = '전송 실패: ' + code + msg;
    ok.style.display = 'none';
    console.error('Password reset error', e);
  }
  function showSuccess(email){
    ok.style.display = 'block';
    ok.textContent = '재설정 링크를 '+ email +' 로 보냈습니다. 메일함(스팸함 포함)을 확인해 주세요.';
    err.style.display = 'none';
  }

  btn.addEventListener('click', function(){
    if(!form.reportValidity()) return;
    const email = form.email.value.trim();
    btn.disabled = true; btn.textContent = '전송 중…';
    Promise.resolve().then(function(){
      if(!window.AuthBridge || !window.AuthBridge.sendPasswordReset){ throw new Error('비밀번호 재설정을 지원하지 않습니다.'); }
      return window.AuthBridge.sendPasswordReset(email);
    }).then(function(){ showSuccess(email); })
      .catch(showError)
      .finally(function(){ btn.disabled = false; btn.textContent = '재설정 메일 보내기'; });
  });
})();
</script>

<style>
.card-glow{ border:1px solid rgba(0,0,0,.06); border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,.06); }
.auth-error{ margin-top: .75rem; background:#fff5f5; border:1px solid #ffd6d6; color:#be123c; padding:.75rem 1rem; border-radius:8px; }
</style>
