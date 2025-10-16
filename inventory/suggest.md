---
layout: inventory
title: 건의하기
permalink: /inventory/suggest/
---

### 기능 개선 건의

새로운 기능이나 개선 사항을 제안해주세요.

<form id="suggest-form" style="max-width:600px;">
  <label style="display:block; margin-bottom:1rem;">
    제목
    <input type="text" required style="width:100%; padding:.5rem; margin-top:.25rem;">
  </label>
  
  <label style="display:block; margin-bottom:1rem;">
    내용
    <textarea required rows="6" style="width:100%; padding:.5rem; margin-top:.25rem;"></textarea>
  </label>
  
  <button class="btn" type="submit">제출</button>
</form>

<script>
document.getElementById('suggest-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('건의가 접수되었습니다. 감사합니다!');
  this.reset();
});
</script>
