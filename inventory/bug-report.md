---
layout: inventory
title: 버그 리포팅
permalink: /inventory/bug-report/
---

<form id="bug-form" action="https://formspree.io/f/your-id" method="POST" class="auth-form" onsubmit="return true;">
  <label>이메일
    <input type="email" name="email" required placeholder="name@example.com">
  </label>
  <input type="hidden" name="uid" value="">
  <label>요약
    <input type="text" name="subject" required placeholder="무엇이 어떻게 동작하지 않나요?">
  </label>
  <label>재현 단계
    <textarea name="steps" rows="4" placeholder="1) ... 2) ... 3) ..."></textarea>
  </label>
  <label>기대 동작
    <textarea name="expected" rows="3"></textarea>
  </label>
  <label>실제 동작
    <textarea name="actual" rows="3"></textarea>
  </label>
  <button class="btn btn--alt-gradient" type="submit">제출</button>
</form>

<script>
(function(){
  function fill(user){
    try{
      var f = document.getElementById('bug-form');
      if(!f) return;
      if(user && user.email){ f.elements.email.value = user.email; }
      if(user && user.uid){ f.elements.uid.value = user.uid; }
    }catch(_e){}
  }
  fill(AuthBridge && AuthBridge.currentUser && AuthBridge.currentUser());
  AuthBridge && AuthBridge.onChange && AuthBridge.onChange(fill);
})();
</script>
