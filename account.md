---
layout: page
title: Account (Preview)
permalink: /account/
description: 계정 가입/로그인/탈퇴 미리보기(UI 데모)
---

> 이 페이지는 기능 미적용 미리보기(UI 데모)입니다. 실제 인증/데이터 저장 없이 화면 전환과 자동채움 흐름만 확인할 수 있어요. 실제 연동 시 Firebase Auth로 대체됩니다.

## 계정

<div id="auth-preview" class="auth-preview card-glow" style="padding:1rem 1.25rem; border-radius:16px;">
  <div class="state state-out">
    <h3 style="margin:.25rem 0 1rem;">가입 또는 로그인</h3>
    <form id="auth-form" onsubmit="return false;">
      <label>이메일<br>
        <input name="email" type="email" required placeholder="name@example.com" style="width:100%">
      </label>
      <label>비밀번호<br>
        <input name="password" type="password" required minlength="8" placeholder="8자 이상" style="width:100%">
      </label>
      <label style="display:block; margin:.5rem 0;">
        <input id="agree" type="checkbox" required>
        <span>개인정보 처리방침에 동의합니다 (<a href="/privacy/" target="_blank" rel="noopener">보기</a>)</span>
      </label>
      <div style="display:flex; gap:.5rem; margin-top:.5rem;">
        <button class="btn btn--alt-gradient" id="btn-signup">가입(미리보기)</button>
        <button class="btn" id="btn-signin">로그인(미리보기)</button>
      </div>
    </form>
  </div>
  <div class="state state-in" style="display:none;">
    <h3 style="margin:.25rem 0 .5rem;">로그인 상태</h3>
    <p style="margin:0 0 .5rem;">안녕하세요, <strong class="js-email">user@example.com</strong></p>
    <div style="display:flex; gap:.5rem;">
      <button class="btn" id="btn-signout">로그아웃(미리보기)</button>
      <button class="btn btn--outline" id="btn-delete">회원 탈퇴(미리보기)</button>
    </div>
  </div>
</div>

<p style="margin-top:1rem; color:rgba(0,0,0,.65);">피드백 페이지로 이동하면 이메일 자동채움이 작동하는지 확인할 수 있습니다: <a href="/feedback/">Feedback</a></p>

<script>
(function(){
  const KEY = 'auth_preview_email';
  const UID = 'preview-uid-1234';
  const root = document.getElementById('auth-preview');
  const out = root.querySelector('.state-out');
  const inn = root.querySelector('.state-in');
  const emailSpan = root.querySelector('.js-email');
  const form = document.getElementById('auth-form');
  const btnSignup = document.getElementById('btn-signup');
  const btnSignin = document.getElementById('btn-signin');
  const btnSignout = document.getElementById('btn-signout');
  const btnDelete = document.getElementById('btn-delete');

  function setSignedIn(email){
    localStorage.setItem(KEY, email);
    localStorage.setItem('auth_preview_uid', UID);
    emailSpan.textContent = email;
    out.style.display = 'none';
    inn.style.display = '';
  }
  function setSignedOut(){
    localStorage.removeItem(KEY);
    localStorage.removeItem('auth_preview_uid');
    out.style.display = '';
    inn.style.display = 'none';
  }
  function init(){
    const saved = localStorage.getItem(KEY);
    if(saved){ emailSpan.textContent = saved; setSignedIn(saved); }
  }

  btnSignup.addEventListener('click', function(){
    if(!form.reportValidity()) return;
    if(!document.getElementById('agree').checked){ alert('개인정보 처리방침에 동의해 주세요.'); return; }
    const email = form.email.value.trim();
    setSignedIn(email);
    alert('가입(미리보기): 동의 기록 및 가입 UI만 데모로 처리되었습니다.');
  });
  btnSignin.addEventListener('click', function(){
    if(!form.reportValidity()) return;
    const email = form.email.value.trim();
    setSignedIn(email);
    alert('로그인(미리보기): UI만 데모로 처리되었습니다.');
  });
  btnSignout.addEventListener('click', function(){ setSignedOut(); });
  btnDelete.addEventListener('click', function(){
    if(confirm('정말로 회원 탈퇴(미리보기)를 진행할까요?')){ setSignedOut(); alert('회원 탈퇴(미리보기) 완료'); }
  });

  init();
})();
</script>

<style>
.card-glow{ border:1px solid rgba(0,0,0,.06); border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,.06); }
label{ display:block; margin:.5rem 0; }
input[type="email"],input[type="password"]{ padding:.5rem .6rem; }
</style>
