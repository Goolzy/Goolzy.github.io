(function(){
  // Lightweight auth layer that works without Firebase. If Firebase is present
  // and site.firebase.enabled=true, AuthBridge is provided by _includes/firebase.html.
  // Otherwise we provide a preview-only shim using localStorage.

  if (window.AuthBridge) {
    // Firebase-backed bridge already present
    return;
  }

  var KEY_EMAIL = 'auth_preview_email';
  var KEY_UID = 'auth_preview_uid';
  function getEmail(){ return localStorage.getItem(KEY_EMAIL) || null; }
  function getUid(){ return localStorage.getItem(KEY_UID) || null; }
  function setSignedIn(email){
    localStorage.setItem(KEY_EMAIL, email);
    if(!getUid()) localStorage.setItem(KEY_UID, 'preview-uid-1234');
    window.dispatchEvent(new CustomEvent('auth:change', { detail: { email: email, uid: getUid() } }));
  }
  function setSignedOut(){
    localStorage.removeItem(KEY_EMAIL);
    localStorage.removeItem(KEY_UID);
    window.dispatchEvent(new CustomEvent('auth:change', { detail: null }));
  }

  window.AuthBridge = {
    onChange: function(cb){
      // Simple event-based listener in preview mode
      var handler = function(e){ cb && cb(e.detail); };
      window.addEventListener('auth:change', handler);
      // Initial fire with current state
      var email = getEmail();
      if (email) cb({ email: email, uid: getUid() }); else cb(null);
      return function(){ window.removeEventListener('auth:change', handler); };
    },
    currentUser: function(){
      var email = getEmail();
      return email ? { email: email, uid: getUid() } : null;
    },
    emailSignUp: function(email, _password){ setSignedIn(email); return Promise.resolve(); },
    emailSignIn: function(email, _password){ setSignedIn(email); return Promise.resolve(); },
    signOut: function(){ setSignedOut(); return Promise.resolve(); },
    deleteUser: function(){ setSignedOut(); return Promise.resolve(); },
    signInWith: function(_name){ return Promise.reject(new Error('OAuth 미리보기에서는 사용 불가')); }
  };
})();
