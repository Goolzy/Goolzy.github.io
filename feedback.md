---
layout: page
title: Feedback
permalink: /feedback/
description: 버그 리포트와 기능 제안 중 하나를 선택하세요.
---

## 무엇을 보내실 건가요?

두 가지 경로 중 하나를 선택해 주세요. 첫 제출 시 스팸 방지를 위해 확인 메일 승인 절차가 있을 수 있습니다.

<div class="grid">
  <div class="card">
    <h3>버그 리포트</h3>
    <p>문제 상황, 재현 단계, 실제/기대 동작을 알려주세요.</p>
    <a class="btn" href="{{ '/feedback/bug/' | relative_url }}">버그 제보하기</a>
  </div>
  <div class="card">
    <h3>기능 제안</h3>
    <p>원하는 기능과 사용 가치, 참고 링크 등을 공유해주세요.</p>
    <a class="btn" href="{{ '/feedback/feature/' | relative_url }}">기능 제안하기</a>
  </div>
</div>

<style>
.grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap:1rem; }
.card { background:#fff; border:1px solid rgba(0,0,0,0.06); border-radius:16px; padding:1.25rem; box-shadow:0 8px 24px rgba(0,0,0,0.06); }
.card h3 { margin-top:0; }
</style>

