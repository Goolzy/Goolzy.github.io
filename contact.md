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
	<input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_replyto" value="">
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
	var form = document.getElementById('contract-form');
	try { form.addEventListener('input', updateSubject); } catch(e){}

	// AJAX 제출로 확실한 성공/오류를 표기하고, 실패 시 동일 탭 표준 제출로 폴백합니다.
	try {
		form.addEventListener('submit', function(e){
			try { e.preventDefault(); } catch(_){}
			var status = document.getElementById('contract-status');
				if (status) { status.style.display='block'; status.textContent='보내는 중…'; }
			var btn = form.querySelector('button[type="submit"]');
			if (btn) { btn.disabled = true; btn.classList.add('loading'); }
			// Ensure _replyto mirrors Email BEFORE building FormData
			try {
				var emailInput = form.querySelector('input[name="Email"]');
				var replyToInput = form.querySelector('input[name="_replyto"]');
				if (emailInput && replyToInput) replyToInput.value = emailInput.value || '';
			} catch(_){ }
			var fd = new FormData(form);
				var ctrl = (window.AbortController) ? new AbortController() : null;
				var to = setTimeout(function(){ try { ctrl && ctrl.abort(); } catch(_){} }, 12000);
				fetch('https://formsubmit.co/ajax/captain@goolzy.com', {
				method: 'POST',
				body: fd,
					headers: { 'Accept': 'application/json' },
					signal: ctrl ? ctrl.signal : undefined
			}).then(function(res){
				if (!res.ok) throw new Error('FORM_SUBMIT_FAILED:' + res.status);
				return res.json();
			}).then(function(){
				if (status) { status.style.display='block'; status.textContent='감사합니다! 문의가 전송되었습니다. 곧 연락드리겠습니다.'; }
				try { form.reset(); } catch(_){ }
			}).catch(function(err){
					var msg = '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.';
				if (String(err).indexOf('403')>=0 || String(err).indexOf('401')>=0 || String(err).indexOf('422')>=0) {
					msg += ' 수신자 이메일 인증이 완료되지 않았을 수 있습니다. 관리자는 수신함(스팸함 포함)에서 formsubmit.co 확인 메일을 승인해 주세요.';
				}
					if (status) { status.style.display='block'; status.textContent = msg + ' (표준 제출로 재시도합니다)'; }
					// 폴백: 동일 탭 표준 POST 제출로 재시도
					try {
						form.removeAttribute('target');
						form.submit();
					} catch(_){ }
			}).finally(function(){ if (btn) { btn.disabled=false; btn.classList.remove('loading'); } });
		});
	} catch(e){}
})();
</script>

<style>
form#contract-form label { display:block; margin: 0.75rem 0; }
form#contract-form input[type="text"],
form#contract-form input[type="email"],
form#contract-form textarea { width:100%; }
.notice { background: #eefcf7; border:1px solid #c9f1e6; padding:0.75rem 1rem; border-radius: 8px; margin-top: 1rem; }
</style>
