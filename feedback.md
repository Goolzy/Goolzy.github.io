---
layout: page
title: Feedback
permalink: /feedback/
description: 버그 리포팅과 기능 제안을 보내주세요.
---

## 피드백 보내기

아래 폼으로 버그 리포팅 또는 기능 제안을 보내주세요. 첫 제출 시 스팸 방지를 위해 확인 메일을 한 번 승인하셔야 합니다.

<div id="feedback-status" class="notice" style="display:none;"></div>

<form id="feedback-form" action="https://formsubmit.co/captain@goolzy.com" method="POST">
  <!-- Formsubmit 옵션 -->
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_subject" id="_subject" value="[Feedback] 제출">
  <input type="hidden" name="_next" value="{{ '/feedback/?success=1' | absolute_url }}">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off"> <!-- honeypot -->

  <fieldset>
    <legend>유형</legend>
    <label><input type="radio" name="Category" value="버그 리포트" checked> 버그 리포트</label>
    <label style="margin-left:1rem;"><input type="radio" name="Category" value="기능 제안"> 기능 제안</label>
  </fieldset>

  <label>이메일
    <input type="email" name="Email" required placeholder="name@example.com">
  </label>

  <label>제목
    <input type="text" name="Title" id="title" required placeholder="간단한 요약을 적어주세요">
  </label>

  <label>설명
    <textarea name="Description" rows="6" required placeholder="문제/제안 내용을 자세히 적어주세요"></textarea>
  </label>

  <div class="grid">
    <div>
      <label>재현 단계 (선택)
        <textarea name="Steps_to_Reproduce" rows="4" placeholder="1) ... 2) ... 3) ..."></textarea>
      </label>
    </div>
    <div>
      <label>관련 링크 (선택)
        <input type="url" name="Related_URL" placeholder="https://...">
      </label>
    </div>
  </div>

  <div class="grid">
    <div>
      <label>예상 동작 (선택)
        <textarea name="Expected_Behavior" rows="3"></textarea>
      </label>
    </div>
    <div>
      <label>실제 동작 (선택)
        <textarea name="Actual_Behavior" rows="3"></textarea>
      </label>
    </div>
  </div>

  <label>우선순위 (선택)
    <select name="Priority">
      <option>보통</option>
      <option>높음</option>
      <option>긴급</option>
    </select>
  </label>

  <label class="checkbox">
    <input type="checkbox" required>
    회신을 위해 개인정보(이메일) 제공에 동의합니다.
  </label>

  <button type="submit" class="btn">제출하기</button>
</form>

<script>
(function(){
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get('success') === '1') {
      var box = document.getElementById('feedback-status');
      box.style.display = 'block';
      box.textContent = '감사합니다! 피드백이 전송되었습니다. 곧 확인 후 회신 드리겠습니다.';
    }
  } catch (e) {}

  var form = document.getElementById('feedback-form');
  var subject = document.getElementById('_subject');
  var title = document.getElementById('title');
  function updateSubject(){
    var type = (form.querySelector('input[name="Category"]:checked')||{}).value || '피드백';
    subject.value = '[' + type + '] ' + (title.value || '제목 미입력');
  }
  form.addEventListener('change', updateSubject);
  form.addEventListener('input', updateSubject);
  form.addEventListener('submit', updateSubject);
})();
</script>

<style>
/* 가벼운 폼 스타일 보강 */
form#feedback-form label { display:block; margin: 0.75rem 0; }
form#feedback-form input[type="text"],
form#feedback-form input[type="email"],
form#feedback-form input[type="url"],
form#feedback-form textarea,
form#feedback-form select { width:100%; }
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; }
fieldset { border:none; padding:0; margin:0.5rem 0 1rem; }
</style>
