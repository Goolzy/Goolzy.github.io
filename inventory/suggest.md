---
layout: inventory
title: 건의하기
permalink: /inventory/suggest/
---

### 기능 개선 건의

새로운 기능이나 개선 사항을 제안해주세요.

<form id="suggest-form" action="https://formsubmit.co/captain@goolzy.com" method="POST" style="max-width:600px;">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_subject" id="suggest_subject" value="[기능 제안] 제출">
  <input type="hidden" name="Category" value="기능 제안">
  <input type="hidden" name="_next" value="{{ '/inventory/suggest/?success=1' | absolute_url }}">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
  <label style="display:block; margin-bottom:1rem;">
    제목
    <input type="text" name="Title" id="suggest_title" required style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="제안을 한 줄로 요약해주세요">
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    내용
    <textarea name="Proposal" required rows="6" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  <label>이메일(자동 입력)
    <input type="email" name="Email" placeholder="name@example.com" style="width:100%; padding:.5rem; margin-top:.25rem;">
  </label>
  <input type="hidden" name="uid" value="">
  
  <button class="btn" type="submit">제출</button>
</form>

<div id="suggest-status" class="notice" style="display:none;"></div>

<script>
(function(){
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('success') === '1') {
      var box = document.getElementById('suggest-status');
      box.style.display = 'block';
      box.textContent = '감사합니다! 제안이 전송되었습니다.';
    }
  } catch(e){}
  function updateSubject(){
    var t = document.getElementById('suggest_title').value || '제목 미입력';
    document.getElementById('suggest_subject').value = '[기능 제안] ' + t;
  }
  try { document.getElementById('suggest-form').addEventListener('input', updateSubject); } catch(e){}
  // Autofill from AuthBridge (email, uid)
  try {
    var form = document.getElementById('suggest-form');
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
})();
</script>

<style>
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; margin-top: 1rem; }
</style>
