---
layout: page
title: Bug Report
permalink: /feedback/bug/
description: 버그 리포트를 보내주세요.
---

## 버그 리포트

문제를 최대한 재현할 수 있도록 아래 항목을 채워주세요.

<form id="bug-form" action="https://formsubmit.co/captain@goolzy.com" method="POST">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_subject" id="bug_subject" value="[버그 리포트] 제출">
  <input type="hidden" name="Category" value="버그 리포트">
  <input type="hidden" name="_next" value="{{ '/feedback/bug/?success=1' | absolute_url }}">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">

  <label>이메일
    <input type="email" name="Email" required placeholder="name@example.com">
  </label>

  <label>제목
    <input type="text" name="Title" id="bug_title" required placeholder="버그를 한 줄로 요약해주세요">
  </label>

  <label>설명
    <textarea name="Description" rows="6" required placeholder="문제 상황을 자세히 설명해주세요"></textarea>
  </label>

  <label>재현 단계
    <textarea name="Steps_to_Reproduce" rows="4" placeholder="1) ... 2) ... 3) ..."></textarea>
  </label>

  <div class="grid">
    <div>
      <label>실제 동작
        <textarea name="Actual_Behavior" rows="3"></textarea>
      </label>
    </div>
    <div>
      <label>기대 동작
        <textarea name="Expected_Behavior" rows="3"></textarea>
      </label>
    </div>
  </div>

  <label>환경 정보(선택)
    <input type="text" name="Environment" placeholder="브라우저/OS/앱 버전 등">
  </label>

  <button type="submit" class="btn">제출하기</button>
</form>

<div id="bug-status" class="notice" style="display:none;"></div>

<script>
(function(){
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('success') === '1') {
      var box = document.getElementById('bug-status');
      box.style.display = 'block';
      box.textContent = '감사합니다! 버그 리포트가 전송되었습니다.';
    }
  } catch(e){}
  function updateSubject(){
    var t = document.getElementById('bug_title').value || '제목 미입력';
    document.getElementById('bug_subject').value = '[버그 리포트] ' + t;
  }
  document.getElementById('bug-form').addEventListener('input', updateSubject);
})();
</script>

<style>
form#bug-form label { display:block; margin: 0.75rem 0; }
form#bug-form input[type="text"],
form#bug-form input[type="email"],
form#bug-form textarea { width:100%; }
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; margin-top: 1rem; }
.grid { display:grid; grid-template-columns: 1fr 1fr; gap:1rem; }
@media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
</style>
