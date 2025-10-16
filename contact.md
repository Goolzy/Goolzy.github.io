---
layout: page
title: Contract
permalink: /contact/
description: 파트너십·계약·납품 관련 문의를 받습니다.
---

# Contract

파트너십, 계약, 납품과 관련된 문의를 환영합니다. 아래 양식을 제출하시면 담당자에게 메일로 전달됩니다.

<form id="contract-form" action="https://formsubmit.co/captain@goolzy.com" method="POST" style="max-width:720px;">
	<input type="hidden" name="_template" value="table">
	<input type="hidden" name="_subject" id="contract_subject" value="[Contract 문의] 제출">
	<input type="hidden" name="Category" value="Contract">
	<input type="hidden" name="_next" value="{{ '/contact/?success=1' | absolute_url }}">
	<input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">

	<label>회사/단체명
		<input type="text" name="Company" required placeholder="회사/단체명을 입력하세요">
	</label>

	<label>담당자명
		<input type="text" name="Name" required placeholder="성함을 입력하세요">
	</label>

	<label>연락 이메일
		<input type="email" name="Email" required placeholder="name@example.com">
	</label>

	<label>문의 제목
		<input type="text" name="Title" id="contract_title" required placeholder="한 줄로 요약해주세요">
	</label>

	<label>문의 내용
		<textarea name="Message" rows="6" required placeholder="상세 내용을 입력하세요"></textarea>
	</label>

	<button type="submit" class="btn">보내기</button>
</form>

<div id="contract-status" class="notice" style="display:none;"></div>

<script>
(function(){
	try {
		var p = new URLSearchParams(window.location.search);
		if (p.get('success') === '1') {
			var box = document.getElementById('contract-status');
			box.style.display = 'block';
			box.textContent = '감사합니다! 문의가 전송되었습니다. 곧 연락드리겠습니다.';
		}
	} catch(e){}
	function updateSubject(){
		var t = document.getElementById('contract_title').value || '제목 미입력';
		document.getElementById('contract_subject').value = '[Contract 문의] ' + t;
	}
	try { document.getElementById('contract-form').addEventListener('input', updateSubject); } catch(e){}
})();
</script>

<style>
form#contract-form label { display:block; margin: 0.75rem 0; }
form#contract-form input[type="text"],
form#contract-form input[type="email"],
form#contract-form textarea { width:100%; }
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; margin-top: 1rem; }
</style>
