---
layout: inventory
title: 계정 관리
permalink: /inventory/account/
---

<div id="account-info" style="max-width:600px; margin:0 auto;">
  
  <div id="loading-state" style="text-align:center; padding:2rem;">
    <p>로딩 중...</p>
  </div>

  <div id="account-content" style="display:none;">
    <h2>계정 정보</h2>
    
    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:1.5rem; margin-bottom:2rem;">
      <div style="margin-bottom:1rem;">
        <strong>이메일:</strong>
        <div id="user-email" style="margin-top:.25rem; color:#374151;"></div>
      </div>
      
      <div style="margin-bottom:1rem;">
        <strong>계정 생성일:</strong>
        <div id="user-created" style="margin-top:.25rem; color:#374151;"></div>
      </div>
      
      <div style="margin-bottom:1rem;">
        <strong>마지막 로그인:</strong>
        <div id="user-last-login" style="margin-top:.25rem; color:#374151;"></div>
      </div>
      
      <div>
        <strong>로그인 제공자:</strong>
        <div id="user-providers" style="margin-top:.25rem; color:#374151;"></div>
      </div>
    </div>

    <h3 style="color:#dc2626; margin-top:2rem;">위험 영역</h3>
    
    <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:1.5rem;">
      <h4 style="margin-top:0;">계정 삭제</h4>
      <p style="color:#991b1b; margin-bottom:1rem;">
        계정을 삭제하면 <strong>모든 데이터가 영구적으로 삭제</strong>되며 복구할 수 없습니다.
      </p>
      
      <button id="delete-account-btn" class="btn" style="background:#dc2626; border-color:#dc2626;" type="button">
        계정 삭제
      </button>
      
      <div id="delete-error" style="display:none; margin-top:1rem; padding:.75rem; background:#fee; border:1px solid #fcc; border-radius:6px; color:#c00;"></div>
    </div>
  </div>
</div>

<script>
(function(){
  var loading = document.getElementById('loading-state');
  var content = document.getElementById('account-content');
  var emailEl = document.getElementById('user-email');
  var createdEl = document.getElementById('user-created');
  var lastLoginEl = document.getElementById('user-last-login');
  var providersEl = document.getElementById('user-providers');
  var deleteBtn = document.getElementById('delete-account-btn');
  var deleteError = document.getElementById('delete-error');

  function showError(msg){
    if(!deleteError) return;
    deleteError.textContent = msg;
    deleteError.style.display = 'block';
  }

  function formatDate(dateString){
    if(!dateString) return '정보 없음';
    var date = new Date(dateString);
    return date.toLocaleString('ko-KR');
  }

  function getProviderNames(providers){
    if(!providers || !providers.length) return '정보 없음';
    var names = providers.map(function(p){
      switch(p.providerId){
        case 'google.com': return 'Google';
        case 'apple.com': return 'Apple';
        case 'microsoft.com': return 'Microsoft';
        case 'password': return '이메일/비밀번호';
        default: return p.providerId;
      }
    });
    return names.join(', ');
  }

  function init(){
    if(!window.AuthBridge){
      showError('인증 시스템을 초기화할 수 없습니다.');
      return;
    }

    AuthBridge.onChange(function(user){
      if(user){
        // Display user info
        emailEl.textContent = user.email || '정보 없음';
        createdEl.textContent = formatDate(user.metadata.creationTime);
        lastLoginEl.textContent = formatDate(user.metadata.lastSignInTime);
        providersEl.textContent = getProviderNames(user.providerData);
        
        loading.style.display = 'none';
        content.style.display = 'block';
      }
    });
  }

  // Delete account
  if(deleteBtn){
    deleteBtn.addEventListener('click', function(){
      var confirmed = confirm(
        '정말로 계정을 삭제하시겠습니까?\n\n' +
        '이 작업은 되돌릴 수 없으며, 모든 데이터가 영구적으로 삭제됩니다.\n\n' +
        '계속하려면 "확인"을 클릭하세요.'
      );
      
      if(!confirmed) return;

      var doubleConfirm = confirm(
        '마지막 확인입니다.\n\n' +
        '계정을 삭제하면:\n' +
        '• 모든 개인 정보가 삭제됩니다\n' +
        '• 저장된 데이터를 복구할 수 없습니다\n' +
        '• 같은 이메일로 재가입해야 합니다\n\n' +
        '정말 삭제하시겠습니까?'
      );

      if(!doubleConfirm) return;

      if(!window.AuthBridge || !AuthBridge.deleteUser){
        showError('계정 삭제 기능을 사용할 수 없습니다.');
        return;
      }

      deleteBtn.disabled = true;
      deleteBtn.textContent = '삭제 중...';

      AuthBridge.deleteUser().then(function(){
        alert('계정이 삭제되었습니다.');
        location.assign('/');
      }).catch(function(e){
        deleteBtn.disabled = false;
        deleteBtn.textContent = '계정 삭제';
        
        if(e && e.code === 'auth/requires-recent-login'){
          showError('보안을 위해 다시 로그인한 후 삭제를 시도해주세요.');
        } else {
          showError(e.message || '계정 삭제에 실패했습니다.');
        }
      });
    });
  }

  // Initialize
  if(window.AuthBridge){
    init();
  } else {
    window.addEventListener('auth:bridge-ready', init, {once:true});
  }
})();
</script>
