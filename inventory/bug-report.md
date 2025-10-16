---
layout: inventory
title: 버그 리포트
permalink: /inventory/bug-report/
---

### 버그 신고

발견하신 버그를 신고해주세요.

<form id="bug-form" style="max-width:600px;">
  <label style="display:block; margin-bottom:1rem;">
    버그 제목
    <input type="text" required style="width:100%; padding:.5rem; margin-top:.25rem;">
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    재현 방법
    <textarea required rows="4" style="width:100%; padding:.5rem; margin-top:.25rem;" placeholder="1. ... 버튼 클릭&#10;2. ... 입력&#10;3. 오류 발생"></textarea>
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    예상 동작
    <textarea required rows="2" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    실제 동작
    <textarea required rows="2" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  
  <button class="btn" type="submit">신고하기</button>
</form>

<script>
document.getElementById('bug-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('버그 신고가 접수되었습니다. 감사합니다!');
  this.reset();
});
</script>
