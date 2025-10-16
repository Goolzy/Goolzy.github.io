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
          <input id="acc-password" name="password" type="password" required minlength="8" placeholder="8자 이상 (특수문자 포함)">
          <small style="display:block; margin-top:.25rem;">
            <label style="user-select:none; cursor:pointer;"><input id="acc-showpwd" type="checkbox" style="vertical-align:middle;"> <span style="vertical-align:middle;">비밀번호 표시</span></label>
          </small>
          {% if site.firebase and site.firebase.enabled %}
          <small style="display:block; color:rgba(0,0,0,.6);">현재 정책: 특수문자 1개 이상 포함 필수</small>
          {% endif %}
        </label>
        <label class="agree-row">
          <input id="agree" type="checkbox" required>
          <span>개인정보 처리방침에 동의합니다 (<a href="/privacy/" target="_blank" rel="noopener">보기</a>)</span>
        </label>
        <div class="btn-row">
          <button class="btn btn--alt-gradient" id="btn-signup"><span class="spinner" aria-hidden="true"></span><span class="btn-text">가입</span></button>
          <button class="btn" id="btn-signin"><span class="spinner" aria-hidden="true"></span><span class="btn-text">로그인</span></button>
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
      <div id="oauth-progress" class="oauth-progress" style="display:none;">로그인 페이지로 이동 중…</div>
      <p style="margin:.5rem 0 0; font-size:.95rem;"><a href="/password-reset/">비밀번호를 잊으셨나요?</a></p>
    </div>
  </div>
  <div class="state state-in" style="display:none;">
    <h3 style="margin:.25rem 0 .5rem;">로그인 상태</h3>
    <p style="margin:0 0 .5rem;">안녕하세요, <strong class="js-email">user@example.com</strong></p>
    <div id="verify-box" style="display:none; margin:.5rem 0 .75rem; background:#fffbeb; border:1px solid #fde68a; color:#92400e; padding:.6rem .8rem; border-radius:8px;">
      <strong>이메일 인증 대기 중입니다.</strong>
      <p style="margin:.25rem 0 .5rem;">메일함에서 인증 링크를 클릭해 주세요. 메일이 오지 않았다면 재전송할 수 있습니다.</p>
      <div style="display:flex; gap:.5rem; flex-wrap:wrap;">
        <button class="btn" id="btn-send-verify"><span class="spinner" aria-hidden="true"></span><span class="btn-text">인증 메일 다시 보내기</span></button>
        <button class="btn btn--outline" id="btn-verify-refresh">인증 완료 후 새로고침</button>
      </div>
      <div id="verify-msg" style="display:none; margin-top:.5rem; background:#ecfdf5; border:1px solid #a7f3d0; color:#065f46; padding:.5rem .75rem; border-radius:8px;"></div>
    </div>
    <div style="display:flex; gap:.5rem;">
      <button class="btn" id="btn-signout">로그아웃(미리보기)</button>
      <button class="btn btn--outline" id="btn-delete">회원 탈퇴(미리보기)</button>
    </div>
  </div>
  <div id="auth-error" class="auth-error" style="display:none;"></div>
  <div id="unauth-domain-hint" class="admin-hint" style="display:none; margin-top:.75rem;">
    <strong>이 도메인이 Firebase에 등록되지 않았습니다.</strong>
    <p style="margin:.25rem 0 .5rem;">관리자 안내: 아래 도메인을 Firebase Console → Authentication → Settings → Authorized domains에 추가해 주세요.</p>
    <div style="display:flex; gap:.5rem; align-items:center; flex-wrap:wrap;">
      <code id="current-domain" style="padding:.15rem .4rem; border:1px solid rgba(0,0,0,.08); border-radius:6px; background:#fafafa;"></code>
      <button class="btn btn--outline" id="copy-domain" type="button">도메인 복사</button>
      <a id="open-fb-console" class="btn" target="_blank" rel="noopener">Firebase 콘솔 열기</a>
      <button class="btn btn--alt-gradient" id="btn-retry" type="button">새로고침 후 다시 시도</button>
    </div>
    <details style="margin-top:.5rem;">
      <summary>단계별 가이드</summary>
      <ol style="margin:.25rem 0 0 1rem;">
        <li>Firebase Console → Authentication → Settings 탭으로 이동합니다.</li>
        <li>Authorized domains에서 <em>도메인 추가(Add domain)</em>를 눌러 위의 도메인을 추가합니다.</li>
        <li>1~2분 후 이 페이지를 새로고침하고 다시 로그인합니다.</li>
      </ol>
    </details>
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
  const verifyBox = document.getElementById('verify-box');
  const btnSendVerify = document.getElementById('btn-send-verify');
  const btnVerifyRefresh = document.getElementById('btn-verify-refresh');
  const verifyMsg = document.getElementById('verify-msg');
  const btnGoogle = document.getElementById('btn-google');
  const btnApple = document.getElementById('btn-apple');
  const btnMs = document.getElementById('btn-ms');
  const unauthBox = document.getElementById('unauth-domain-hint');
  const domainEl = document.getElementById('current-domain');
  const copyBtn = document.getElementById('copy-domain');
  const retryBtn = document.getElementById('btn-retry');
  const fbConsoleLink = document.getElementById('open-fb-console');
  const POST_AUTH_REDIRECT_KEY = 'postAuthRedirect';
  const SUCCESS_REDIRECT = '/';
  const oauthProgress = document.getElementById('oauth-progress');

  // Prepare admin hint content
  var CURRENT_HOST = (location && location.host) ? location.host : '';
  var FB_PROJECT = "{{ site.firebase.config.projectId | default: '' }}";
  var FB_CONSOLE_URL = FB_PROJECT ? ('https://console.firebase.google.com/project/' + FB_PROJECT + '/authentication/settings') : 'https://console.firebase.google.com/';
  if (domainEl) domainEl.textContent = CURRENT_HOST;
  if (fbConsoleLink) fbConsoleLink.href = FB_CONSOLE_URL;
  if (copyBtn) copyBtn.addEventListener('click', function(){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(CURRENT_HOST).then(function(){ copyBtn.textContent = '복사됨'; setTimeout(function(){ copyBtn.textContent = '도메인 복사'; }, 1500); });
    } else {
      // fallback
      var tmp = document.createElement('input'); tmp.value = CURRENT_HOST; document.body.appendChild(tmp); tmp.select(); document.execCommand('copy'); document.body.removeChild(tmp);
      copyBtn.textContent = '복사됨'; setTimeout(function(){ copyBtn.textContent = '도메인 복사'; }, 1500);
    }
  });
  if (retryBtn) retryBtn.addEventListener('click', function(){ location.reload(); });

  function providerIncludesPassword(u){ return !!(u && u.providerData && u.providerData.some(function(p){ return p && p.providerId === 'password'; })); }
  function onSignedIn(email){
    emailSpan.textContent = email; out.style.display = 'none'; inn.style.display = '';
    try {
      var u = AuthBridge.currentUser && AuthBridge.currentUser();
      if (u && providerIncludesPassword(u) && !u.emailVerified) {
        if (verifyBox) verifyBox.style.display = '';
      } else {
        if (verifyBox) verifyBox.style.display = 'none';
      }
    } catch(_e){}
  }
  function onSignedOut(){ out.style.display = ''; inn.style.display = 'none'; }
  function showError(err){
    var box = document.getElementById('auth-error');
    if(!box) return;
    var code = (err && err.code) ? ('['+err.code+'] ') : '';
    var msg = mapError(err);
    box.style.display = 'block';
    box.textContent = '오류: ' + code + msg;
    console.error('Auth error', err);
    // Show admin hint for unauthorized domain
    if (err && err.code === 'auth/unauthorized-domain' && unauthBox) {
      unauthBox.style.display = 'block';
    }
  }
  function clearError(){ var box = document.getElementById('auth-error'); if(box){ box.style.display='none'; box.textContent=''; } }
  function setLoading(btn, isLoading){ if(!btn) return; btn.classList.toggle('loading', !!isLoading); btn.disabled = !!isLoading; }

  btnSignup.addEventListener('click', function(){
    if(!form.reportValidity()) return;
    if(!document.getElementById('agree').checked){ alert('개인정보 처리방침에 동의해 주세요.'); return; }
    const email = form.email.value.trim();
    const pwd = form.password.value || '';
    // Basic client-side check to match current Firebase policy (requires a non-alphanumeric)
    if(!/[^A-Za-z0-9]/.test(pwd)){
      showError({ code:'auth/password-does-not-meet-requirements', message:'비밀번호에 특수문자(예: !@#$% 등)를 1개 이상 포함해 주세요.' });
      return;
    }
    setLoading(btnSignup, true);
    clearError();
    AuthBridge.emailSignUp(email, form.password.value).then(function(){
      // Send verification mail and show guidance instead of immediate redirect
      if (AuthBridge.sendEmailVerification) {
        return AuthBridge.sendEmailVerification().then(function(){
          onSignedIn(email);
          if (verifyMsg) { verifyMsg.style.display='block'; verifyMsg.textContent='인증 메일을 '+ email +'로 보냈습니다. 메일함(스팸함 포함)을 확인해 주세요.'; }
        });
      } else {
        onSignedIn(email);
      }
    }).catch(function(e){ showError(e); }).finally(function(){ setLoading(btnSignup, false); });
  });
  btnSignin.addEventListener('click', function(){
    if(!form.reportValidity()) return;
    const email = form.email.value.trim();
    setLoading(btnSignin, true);
    clearError();
    AuthBridge.emailSignIn(email, form.password.value).then(function(){
      // Redirect to Home on success
      try { sessionStorage.removeItem(POST_AUTH_REDIRECT_KEY); } catch(_e){}
      location.assign(SUCCESS_REDIRECT);
    }).catch(function(e){ showError(e); }).finally(function(){ setLoading(btnSignin, false); });
  });
  btnSignout.addEventListener('click', function(){ AuthBridge.signOut().then(onSignedOut); });
  btnDelete.addEventListener('click', function(){
    if(confirm('정말로 회원 탈퇴를 진행할까요?')){ AuthBridge.deleteUser().then(function(){ onSignedOut(); alert('탈퇴 완료'); }); }
  });

  function mapError(e){
    var code = e && e.code || '';
    var srv = '';
    try { srv = (e && e.customData && e.customData._serverResponse && e.customData._serverResponse.error && e.customData._serverResponse.error.message) || ''; } catch(_e){}
    var upper = String(srv || '').toUpperCase();
    if (code === 'auth/network-request-failed' || /FAILED TO FETCH|NETWORK/i.test(String(e && e.message || ''))) {
      return '네트워크 오류로 요청이 실패했습니다. 광고/추적 차단기, 방화벽/VPN 설정을 확인하거나 다른 브라우저에서 시도해 주세요.';
    }
    if (upper.indexOf('INVALID_PASSWORD') >= 0 || upper.indexOf('INVALID_LOGIN_CREDENTIALS') >= 0) {
      return '이메일 또는 비밀번호가 일치하지 않습니다. 대소문자/한영 전환을 확인하거나 비밀번호 재설정을 이용해 주세요.';
    }
    if (upper.indexOf('EMAIL_NOT_FOUND') >= 0) {
      return '등록되지 않은 이메일입니다. 먼저 가입을 진행해 주세요.';
    }
    if (upper.indexOf('USER_DISABLED') >= 0) {
      return '해당 계정은 비활성화되어 있습니다. 관리자에게 문의해 주세요.';
    }
    switch(code){
      case 'auth/unauthorized-domain': return '현재 사이트 도메인이 Firebase에 등록되지 않았습니다. 관리자에게 문의해 주세요.';
      case 'auth/popup-blocked': return '팝업이 차단되었습니다. 브라우저 팝업 허용 후 다시 시도해 주세요.';
      case 'auth/cancelled-popup-request': return '다른 인증 동작이 진행 중입니다. 잠시 후 다시 시도해 주세요.';
      case 'auth/operation-in-progress': return '인증을 시작하는 중입니다. 잠시만 기다려 주세요.';
      case 'auth/invalid-credential': return '인증 정보가 올바르지 않거나 만료되었습니다. 다시 시도해 주세요.';
      default: return (e && e.message) ? e.message : String(e || '오류');
    }
  }

  function setOauthButtonsDisabled(disabled){
    [btnGoogle, btnApple, btnMs].forEach(function(el){ if(!el) return; el.style.pointerEvents = disabled ? 'none' : ''; el.style.opacity = disabled ? .6 : 1; });
    if (oauthProgress) oauthProgress.style.display = disabled ? 'block' : 'none';
  }
  // OAuth login function
  function oauth(name){
    console.log('OAuth 시작:', name);
    
    if (!window.AuthBridge) { 
      console.error('AuthBridge 없음');
      showError({message:'인증 모듈이 초기화되지 않았습니다.'}); 
      return; 
    }
    
    clearError();
    setOauthButtonsDisabled(true);
    
    // Store redirect destination
    try { 
      sessionStorage.setItem(POST_AUTH_REDIRECT_KEY, SUCCESS_REDIRECT); 
      console.log('리다이렉트 저장됨:', SUCCESS_REDIRECT);
    } catch(_e){}
    
    // Use redirect-based OAuth
    console.log('signInWith 호출 중...');
    AuthBridge.signInWith(name).then(function(){
      console.log('signInWith 성공');
    }).catch(function(e){ 
      console.error('signInWith 에러:', e);
      setOauthButtonsDisabled(false); 
      showError(e);
    });
  }
  
  btnGoogle.addEventListener('click', function(ev){ ev.preventDefault(); oauth('google'); });
  btnApple.addEventListener('click', function(ev){ ev.preventDefault(); oauth('apple'); });
  btnMs.addEventListener('click', function(ev){ ev.preventDefault(); oauth('microsoft'); });

  // Show password toggle
  try {
    var showPwd = document.getElementById('acc-showpwd');
    var pwdInput = document.getElementById('acc-password');
    if (showPwd && pwdInput) {
      showPwd.addEventListener('change', function(){ pwdInput.type = showPwd.checked ? 'text' : 'password'; });
    }
  } catch(_e){}

  // Initialize auth handling
  function initAuth(){
    console.log('initAuth 시작, AuthBridge:', !!window.AuthBridge);
    
    if (!window.AuthBridge) return;
    
    // Auth state listener
    AuthBridge.onChange(function(user){
      console.log('Auth state 변경:', user ? user.email : '로그아웃');
      if (user && user.email) { 
        onSignedIn(user.email); 
      } else { 
        onSignedOut(); 
      }
    });

    // Handle redirect result
    console.log('getRedirectResult 호출 중...');
    AuthBridge.getRedirectResult().then(function(result){
      console.log('getRedirectResult 완료:', result);
      if (result && result.user) {
        console.log('OAuth 로그인 성공:', result.user.email);
        // Get redirect destination
        var dest = SUCCESS_REDIRECT;
        try { 
          var stored = sessionStorage.getItem(POST_AUTH_REDIRECT_KEY);
          if (stored) dest = stored;
          sessionStorage.removeItem(POST_AUTH_REDIRECT_KEY);
          console.log('리다이렉트 목적지:', dest);
        } catch(_e){}
        
        // Redirect after short delay to ensure state updates
        setTimeout(function(){ 
          console.log('리다이렉트 실행:', dest);
          location.assign(dest); 
        }, 100);
      } else {
        console.log('리다이렉트 결과 없음 (정상)');
      }
    }).catch(function(e){
      console.log('getRedirectResult 에러:', e);
      // Ignore benign errors
      if (e && (e.code === 'auth/no-auth-event' || e.code === 'auth/user-cancelled' || e.code === 'auth/popup-closed-by-user')) {
        console.log('무시 가능한 에러:', e.code);
        return;
      }
      // Show other errors
      if (e) showError(e);
    });
  }

  // Initialize when AuthBridge is ready
  console.log('스크립트 로드됨, AuthBridge:', !!window.AuthBridge);
  if (window.AuthBridge) {
    initAuth();
  } else {
    console.log('auth:bridge-ready 이벤트 대기 중...');
    window.addEventListener('auth:bridge-ready', function(){
      console.log('auth:bridge-ready 이벤트 받음');
      initAuth();
    }, {once: true});
  }

      // Verification actions
      if (btnSendVerify) btnSendVerify.addEventListener('click', function(){
        setLoading(btnSendVerify, true);
        clearError();
        AuthBridge.sendEmailVerification().then(function(){ if (verifyMsg) { verifyMsg.style.display='block'; verifyMsg.textContent='인증 메일을 다시 보냈습니다.'; } }).catch(showError).finally(function(){ setLoading(btnSendVerify,false); });
      });
      if (btnVerifyRefresh) btnVerifyRefresh.addEventListener('click', function(){ location.reload(); });

      // Global safety net for unhandled auth errors so the user sees why login failed
      try {
        window.addEventListener('unhandledrejection', function(ev){
          var r = ev && ev.reason;
          var code = (r && r.code) || '';
          var msg = (r && (r.code || r.message)) ? (String(r.code) + ' ' + String(r.message)) : String(r || '');
          
          // Ignore benign OAuth errors that are expected
          var benignCodes = ['auth/no-auth-event', 'auth/user-cancelled', 'auth/popup-closed-by-user'];
          if (benignCodes.indexOf(code) !== -1) {
            ev.preventDefault && ev.preventDefault();
            return;
          }
          
          // Show actual auth errors
          if (/auth\//i.test(msg) || /signInWithPassword|INVALID_PASSWORD|EMAIL_NOT_FOUND|INVALID_LOGIN_CREDENTIALS/i.test(msg)){
            ev.preventDefault && ev.preventDefault();
            showError(r || { message: '로그인 중 오류가 발생했습니다.' });
          }
        });
      } catch(_e){}
})();
</script>

<style>
.card-glow{ border:1px solid rgba(0,0,0,.06); border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,.06); }
.auth-center{ max-width: 360px; margin: 0 auto; text-align: center; }
.auth-form{ text-align: center; }
.auth-form label{ display:block; margin:.5rem 0; text-align:center; }
.auth-form input[type="email"],
.auth-form input[type="password"]{ padding:.5rem .6rem; width:100%; }
.agree-row{ display:flex; align-items:center; gap:.5rem; }
.btn-row{ display:flex; gap:.5rem; justify-content:center; margin-top:.5rem; }
.or{ margin: .75rem 0; opacity:.7; font-size:.95rem; }
.oauth-stack{ display:flex; flex-direction:column; gap:.5rem; align-items:center; }
.oauth-btn img{ width: 280px; max-width: 100%; height: auto; display:block; }
.auth-error{ margin-top: .75rem; background:#fff5f5; border:1px solid #ffd6d6; color:#be123c; padding:.75rem 1rem; border-radius:8px; }
.oauth-progress{ margin-top:.5rem; font-size:.95rem; color:#0f766e; background:#ecfeff; border:1px solid #a5f3fc; padding:.5rem .75rem; border-radius:8px; }
.spinner{ display:none; width:1em; height:1em; border:.15em solid rgba(255,255,255,.6); border-top-color:#fff; border-radius:50%; animation:spin 1s linear infinite; margin-right:.4em; vertical-align:-.125em; }
.btn.loading .spinner{ display:inline-block; }
.btn.loading .btn-text{ opacity:.85; }
@keyframes spin{ to{ transform: rotate(360deg); } }
</style>
