---
layout: page
title: Contacto
permalink: /contact/es/
description: Aceptamos consultas sobre asociaciones, contratos y entregas.
lang: es
translations:
  ko: /contact/
  en: /contact/en/
  ja: /contact/ja/
  de: /contact/de/
  fr: /contact/fr/
  es: /contact/es/
  pt: /contact/pt/
---

# Contacto

Damos la bienvenida a consultas sobre asociaciones, contratos y entregas. Envíe el formulario a continuación y se enviará a nuestro equipo.

<form id="contract-form" style="max-width:720px;" data-workers-endpoint="{{ site.mail_gateway.workers_endpoint | default: '' }}" data-endpoint-hint="/assets/mail-endpoint.txt">
	<input type="hidden" name="_subject" id="contract_subject" value="[Consulta de contacto] Envío">
	<input type="hidden" name="Category" value="Contract">
	<input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">

	<label>Empresa/Organización
		<input type="text" name="Company" required placeholder="Ingrese el nombre de la empresa/organización">
	</label>

	<label>Persona de contacto
		<input type="text" name="Name" required placeholder="Ingrese su nombre">
	</label>

	<label>Correo electrónico
		<input type="email" name="Email" required placeholder="nombre@example.com">
	</label>

	<label>Asunto
		<input type="text" name="Title" id="contract_title" required placeholder="Resuma en una línea">
	</label>

	<label>Mensaje
		<textarea name="Message" rows="6" required placeholder="Ingrese los detalles"></textarea>
	</label>

	<button type="submit" class="btn">Enviar</button>
</form>

<div id="contract-status" class="notice" style="display:none;"></div>
<div id="contract-mailto" style="display:none; margin-top:.5rem;"></div>

<script>
(function(){
	var msgs = {
		sending: 'Enviando...',
		success: '¡Gracias! Su consulta ha sido enviada. Nos pondremos en contacto pronto.',
		error: 'Error al enviar. Por favor, inténtelo de nuevo más tarde.',
		offline: 'Está sin conexión. Verifique su conexión e inténtelo de nuevo.',
		mailto: 'Enviar por aplicación de correo'
	};
	try {
		var p = new URLSearchParams(window.location.search);
		if (p.get('success') === '1') {
			var box = document.getElementById('contract-status');
			box.style.display = 'block';
			box.textContent = msgs.success;
		}
	} catch(e){}
	function updateSubject(){
		var t = document.getElementById('contract_title').value || 'Sin asunto';
		document.getElementById('contract_subject').value = '[Consulta de contacto] ' + t;
	}
	var form = document.getElementById('contract-form');
	try { form.addEventListener('input', updateSubject); } catch(e){}
	try {
		form.addEventListener('submit', function(e){
			try { e.preventDefault(); } catch(_){}
			var status = document.getElementById('contract-status');
			if (status) { status.style.display='block'; status.textContent=msgs.sending; }
			var btn = form.querySelector('button[type="submit"]');
			if (btn) { btn.disabled = true; btn.classList.add('loading'); }
			try {
				var emailInput = form.querySelector('input[name="Email"]');
				var replyToInput = form.querySelector('input[name="_replyto"]');
				if (emailInput && replyToInput) replyToInput.value = emailInput.value || '';
			} catch(_){ }
			var fd = new FormData(form);
			var ctrl = (window.AbortController) ? new AbortController() : null;
			var to = setTimeout(function(){ try { ctrl && ctrl.abort(); } catch(_){} }, 12000);
			if (typeof navigator !== 'undefined' && navigator.onLine === false) {
				if (status) { status.style.display='block'; status.textContent=msgs.offline; }
				throw new Error('OFFLINE');
			}
			function deriveEndpointSync() {
				var w = form.getAttribute('data-workers-endpoint') || '';
				if (w) return w.replace(/\/$/, '');
				return '';
			}
			function loadEndpoint() {
				var url = deriveEndpointSync();
				if (url) return Promise.resolve(url);
				var hint = form.getAttribute('data-endpoint-hint') || '/assets/mail-endpoint.txt';
				return fetch(hint, { cache: 'no-store' })
					.then(function(r){ return r.text(); })
					.then(function(t){ return (t||'').trim().replace(/\/$/, ''); });
			}
			var obj = {};
			fd.forEach(function(v,k){ obj[k] = v; });
			loadEndpoint().then(function(submitUrl){
				if (!submitUrl) throw new Error('WORKERS_ENDPOINT_NOT_SET');
				var fetchOpts = { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, signal: ctrl ? ctrl.signal : undefined, body: JSON.stringify(obj) };
				return fetch(submitUrl, fetchOpts);
			}).then(function(){
				if (status) { status.style.display='block'; status.textContent=msgs.success; }
				try { form.reset(); } catch(_){ }
			}).catch(function(err){
				try { console.error('[Contract form] submit error:', err); } catch(_){ }
				if (status) {
					var code = (String(err).match(/FORM_SUBMIT_FAILED:(\d{3})/)||[])[1];
					status.style.display='block';
					status.textContent = msgs.error + (code ? ' (Código ' + code + ')' : '');
				}
				try {
					var mailtoBox = document.getElementById('contract-mailto');
					var to = 'captain@goolzy.com';
					var subj = document.getElementById('contract_subject').value || '[Consulta de contacto] Envío';
					var fd2 = new FormData(form);
					var lines = [];
					fd2.forEach(function(v,k){ if (k.charAt(0) !== '_') lines.push(k+': '+v); });
					var body = lines.join('\n');
					var url = 'mailto:' + encodeURIComponent(to) + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
					mailtoBox.innerHTML = '<a class="btn" href="'+url+'">'+msgs.mailto+'</a>';
					mailtoBox.style.display = 'block';
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
