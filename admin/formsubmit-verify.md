---
layout: page
title: FormSubmit 인증 재전송
permalink: /admin/formsubmit-verify/
---

# FormSubmit 수신자 인증 재전송

이 페이지는 FormSubmit 수신자(captain@goolzy.com) 인증 메일을 다시 보내기 위한 관리자용 도구입니다. 아래 버튼을 누르면 표준 POST로 최소 데이터가 제출되어 FormSubmit에서 새로운 인증 메일을 발송합니다.

<form id="fs-verify" action="https://formsubmit.co/captain@goolzy.com" method="POST" style="max-width:640px;">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_subject" value="[FormSubmit] 수신자 인증 재전송 트리거">
  <input type="hidden" name="Category" value="AdminVerify">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="Message" value="인증 재전송 트리거 제출">
  <button class="btn" type="submit">인증 메일 보내기</button>
</form>

<p class="muted">팁: 자동 제출을 원하면 <code>?auto=1</code>을 붙여 접속하세요. 예) <code>{{ '/admin/formsubmit-verify/?auto=1' | absolute_url }}</code></p>

<script>
(function(){
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('auto') === '1') {
      var f = document.getElementById('fs-verify');
      if (f) f.submit();
    }
  } catch(e){}
})();
</script>

<style>
.muted { color:#6b7280; font-size:.9rem; }
</style>
