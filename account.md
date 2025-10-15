---
layout: page
title: Account (Preview)
permalink: /account/
description: 계정 가입/로그인/탈퇴 미리보기(UI 데모)
---

{% if site.firebase and site.firebase.enabled %}
> Firebase Auth가 활성화된 상태입니다. 이메일/비밀번호 및 Google/Apple/Microsoft 로그인이 실제로 동작합니다.
{% else %}
> 이 페이지는 기능 미적용 미리보기(UI 데모)입니다. 실제 인증/데이터 저장 없이 화면 전환과 자동채움 흐름만 확인할 수 있어요. 실제 연동 시 Firebase Auth로 대체됩니다.
{% endif %}

## 계정

<div id="auth-preview" class="auth-preview card-glow" style="padding:1rem 1.25rem; border-radius:16px;">
  <div class="state state-out">
    <div class="auth-center">
      <h3>가입 또는 로그인</h3>
      <form id="auth-form" onsubmit="return false;" class="auth-form">
        <label>이메일
          <input name="email" type="email" required placeholder="name@example.com">
        </label>
        <label>비밀번호
          <input name="password" type="password" required minlength="8" placeholder="8자 이상">
        </label>
        <label class="agree-row">
          <input id="agree" type="checkbox" required>
          <span>개인정보 처리방침에 동의합니다 (<a href="/privacy/" target="_blank" rel="noopener">보기</a>)</span>
        </label>
        <div class="btn-row">
          <button class="btn btn--alt-gradient" id="btn-signup">가입</button>
          <button class="btn" id="btn-signin">로그인</button>
        </div>
      </form>

      <div class="or">또는</div>

      <div class="oauth-stack">
        <a href="#" id="btn-google" class="oauth-btn" aria-label="Sign in with Google" role="button">
          <img src="/assets/images/auth/google-signin.svg" alt="Sign in with Google">
        </a>
        <a href="#" id="btn-apple" class="oauth-btn" aria-label="Sign in with Apple" role="button">
          <img src="/assets/images/auth/apple-signin.svg" alt="Sign in with Apple">
        </a>
        <a href="#" id="btn-ms" class="oauth-btn" aria-label="Sign in with Microsoft" role="button">
          <img src="/assets/images/auth/microsoft-signin.svg" alt="Sign in with Microsoft">
        </a>
      </div>
    </div>
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
  const root = document.getElementById('auth-preview');
  const out = root.querySelector('.state-out');
  const inn = root.querySelector('.state-in');
  const emailSpan = root.querySelector('.js-email');
  const form = document.getElementById('auth-form');
  const btnSignup = document.getElementById('btn-signup');
  const btnSignin = document.getElementById('btn-signin');
  const btnSignout = document.getElementById('btn-signout');
  const btnDelete = document.getElementById('btn-delete');
  const btnGoogle = document.getElementById('btn-google');
  const btnApple = document.getElementById('btn-apple');
  const btnMs = document.getElementById('btn-ms');

  function onSignedIn(email){ emailSpan.textContent = email; out.style.display = 'none'; inn.style.display = ''; }
  function onSignedOut(){ out.style.display = ''; inn.style.display = 'none'; }

  btnSignup.addEventListener('click', function(){
    if(!form.reportValidity()) return;
    if(!document.getElementById('agree').checked){ alert('개인정보 처리방침에 동의해 주세요.'); return; }
    const email = form.email.value.trim();
    AuthBridge.emailSignUp(email, form.password.value).then(function(){
      onSignedIn(email);
      alert('가입(미리보기 또는 실제): 처리 완료');
    }).catch(function(e){ alert('가입 실패: '+ (e && e.message || e)); });
  });
  btnSignin.addEventListener('click', function(){
    if(!form.reportValidity()) return;
    const email = form.email.value.trim();
    AuthBridge.emailSignIn(email, form.password.value).then(function(){
      onSignedIn(email);
      alert('로그인(미리보기 또는 실제): 처리 완료');
    }).catch(function(e){ alert('로그인 실패: '+ (e && e.message || e)); });
  });
  btnSignout.addEventListener('click', function(){ AuthBridge.signOut().then(onSignedOut); });
  btnDelete.addEventListener('click', function(){
    if(confirm('정말로 회원 탈퇴를 진행할까요?')){ AuthBridge.deleteUser().then(function(){ onSignedOut(); alert('탈퇴 완료'); }); }
  });

  function oauth(name){
    AuthBridge.signInWith(name).then(function(res){
      var user = (res && res.user) || AuthBridge.currentUser() || {};
      var email = user.email || 'user@example.com';
      onSignedIn(email);
      alert(name+' 로그인 완료');
    }).catch(function(e){ alert(name+' 로그인 실패: '+ (e && e.message || e)); });
  }
  btnGoogle.addEventListener('click', function(){ oauth('google'); });
  btnApple.addEventListener('click', function(){ oauth('apple'); });
  btnMs.addEventListener('click', function(){ oauth('microsoft'); });

  // State sync
  AuthBridge.onChange(function(user){
    if(user && user.email){ onSignedIn(user.email); } else { onSignedOut(); }
  });
})();
</script>

<style>
.card-glow{ border:1px solid rgba(0,0,0,.06); border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,.06); }
.auth-center{ max-width: 360px; margin: 0 auto; text-align: center; }
.auth-form{ text-align: left; }
.auth-form label{ display:block; margin:.5rem 0; }
.auth-form input[type="email"],
.auth-form input[type="password"]{ padding:.5rem .6rem; width:100%; }
.agree-row{ display:flex; align-items:center; gap:.5rem; }
.btn-row{ display:flex; gap:.5rem; justify-content:center; margin-top:.5rem; }
.or{ margin: .75rem 0; opacity:.7; font-size:.95rem; }
.oauth-stack{ display:flex; flex-direction:column; gap:.5rem; align-items:center; }
.oauth-btn img{ width: 280px; max-width: 100%; height: auto; display:block; }
</style>
