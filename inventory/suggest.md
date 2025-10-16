---
layout: inventory
title: 건의하기
permalink: /inventory/suggest/
---

<form id="suggest-form" action="https://formspree.io/f/your-id" method="POST" class="auth-form" onsubmit="return true;">
  <label>이메일
    <input type="email" name="email" required placeholder="name@example.com">
  </label>
  <input type="hidden" name="uid" value="">
  <label>제목
    <input type="text" name="subject" required>
  </label>
  <label>내용
    <textarea name="message" rows="6" required placeholder="자유롭게 제안해 주세요"></textarea>
  </label>
  <button class="btn btn--alt-gradient" type="submit">제출</button>
</form>

<script>
(function(){
  function fill(user){
    try{
      var f = document.getElementById('suggest-form');
      if(!f) return;
      if(user && user.email){ f.elements.email.value = user.email; }
      if(user && user.uid){ f.elements.uid.value = user.uid; }
    }catch(_e){}
  }
  fill(AuthBridge && AuthBridge.currentUser && AuthBridge.currentUser());
  AuthBridge && AuthBridge.onChange && AuthBridge.onChange(fill);
})();
</script>
