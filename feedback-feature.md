---
layout: page
title: Feature Suggestion
permalink: /feedback/feature/
description: 기능 제안을 보내주세요.
---

## 기능 제안

원하는 기능과 그 가치, 맥락을 공유해주세요.

<form id="feature-form" action="https://formsubmit.co/captain@goolzy.com" method="POST">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_subject" id="feature_subject" value="[기능 제안] 제출">
  <input type="hidden" name="Category" value="기능 제안">
  <input type="hidden" name="_next" value="{{ '/feedback/feature/?success=1' | absolute_url }}">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">

  <label>이메일
    <input type="email" name="Email" required placeholder="name@example.com">
  </label>
  <input type="hidden" name="uid" value="">

  <label>제목
    <input type="text" name="Title" id="feature_title" required placeholder="제안을 한 줄로 요약해주세요">
  </label>

  <label>배경/문제의식(선택)
    <textarea name="Background" rows="4" placeholder="이 제안이 필요한 이유"></textarea>
  </label>

  <label>구체적인 제안 내용
    <textarea name="Proposal" rows="6" required placeholder="어떤 기능인지 자세히 설명해주세요"></textarea>
  </label>

  <label>참고 링크(선택)
    <input type="url" name="Reference_URL" placeholder="https://...">
  </label>

  <button type="submit" class="btn">제출하기</button>
</form>

<div id="feature-status" class="notice" style="display:none;"></div>

<script>
(function(){
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('success') === '1') {
      var box = document.getElementById('feature-status');
      box.style.display = 'block';
      box.textContent = '감사합니다! 기능 제안이 전송되었습니다.';
    }
  } catch(e){}
  function updateSubject(){
    var t = document.getElementById('feature_title').value || '제목 미입력';
    document.getElementById('feature_subject').value = '[기능 제안] ' + t;
  }
  document.getElementById('feature-form').addEventListener('input', updateSubject);

  // Autofill from AuthBridge (email, uid)
  try {
    var form = document.getElementById('feature-form');
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
form#feature-form label { display:block; margin: 0.75rem 0; }
form#feature-form input[type="text"],
form#feature-form input[type="email"],
form#feature-form input[type="url"],
form#feature-form textarea { width:100%; }
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; margin-top: 1rem; }
</style>
