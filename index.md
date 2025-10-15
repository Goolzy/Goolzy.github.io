---
layout: default
title: Home
permalink: /
description: 굴지는 즐거움과 연결된 모든 엔터테인먼트 콘텐츠를 연구·개발합니다.
---

<section class="hero hero--compact bg-brand-gradient" style="border-radius: 16px; padding: 1rem 1.25rem;">
  <h1 class="text-gradient heading-accent">즐거움과 연결된 경험을 만듭니다</h1>
  <p>굴지는 엔터테인먼트의 본질을 탐구하고, 누구나 쉽게 즐길 수 있는 경험을 설계합니다.</p>
  <p class="intro-actions">
  <a class="btn btn--alt-gradient" href="/Talisman/">프로젝트 탈리스만</a>
  <a class="btn btn--outline" href="/about/">About</a>
  </p>
  <hr>
</section>

<section>
  <h2>핵심 가치</h2>
  <ul>
    <li><strong>연결</strong> — 하나의 제품에서 끝나지 않는 연속적인 경험</li>
    <li><strong>가치</strong> — 즐거움이 의미 있는 생산으로 이어지는 플랫폼</li>
    <li><strong>인터페이스</strong> — 낡고 어려운 인터페이스의 제거와 단순함</li>
  </ul>
</section>

<hr class="divider">

<section>
  <div class="grid-3">
    <div class="feature-card">
      <div class="icon-chip"><img src="/assets/images/logo-icon.png" alt=""></div>
      <h3>플랫폼 연결</h3>
      <p>개인 디바이스와 공간을 잇는 인터랙션을 설계합니다.</p>
    </div>
    <div class="feature-card">
      <div class="icon-chip"><img src="/assets/images/logo-icon.png" alt=""></div>
      <h3>즐거움의 생산성</h3>
      <p>놀이가 의미 있는 결과로 이어지는 루프를 만듭니다.</p>
    </div>
    <div class="feature-card">
      <div class="icon-chip"><img src="/assets/images/logo-icon.png" alt=""></div>
      <h3>단순한 인터페이스</h3>
      <p>복잡함을 제거하고 누구나 쉽게 즐길 수 있게 합니다.</p>
    </div>
  </div>
  <p style="margin-top: .75rem; font-size: .95rem; color: rgba(0,0,0,.65);">보라+초록의 감성으로, 단순하지만 힘있는 경험을 추구합니다.</p>
  
</section>

<hr class="divider">

<section>
  <h2>최근 소식</h2>
  {% include posts-all.html limit=2 %}
  <p class="intro-actions"><a class="btn btn--outline" href="/news/">뉴스 더보기</a></p>
</section>

<section class="callout-band" style="margin-top: 1.25rem;">
  <div class="kicker" style="opacity: .7; font-weight: 600;">Feedback</div>
  <h3 style="margin: .25rem 0 .5rem;">더 나은 경험을 위해 의견을 들려주세요</h3>
  <p style="margin: 0 0 .5rem;">버그 제보와 기능 제안을 환영합니다. 짧게 보내주셔도 큰 도움이 됩니다.</p>
  <a class="btn btn--alt-gradient" href="/feedback/">피드백 남기기</a>
</section>
<section>
  <h2>지금 하는 일</h2>
  <p>개인 디바이스로 연결된 공간 경험, <a href="/Talisman/">프로젝트 탈리스만</a>을 개발하고 있습니다. (2023.9~)</p>
  <p class="intro-actions">
    <a class="btn" href="/Talisman/">탈리스만 보러가기</a>
    <a class="btn btn--outline" href="/news/">뉴스 더보기</a>
  </p>
</section>

<section>
  <h2>바로가기</h2>
  <p>
    <a href="/about/">About</a> · <a href="/news/">News</a> · <a href="/feedback/">Feedback</a>
  </p>
</section>

<style>
.hero--compact { margin-bottom: 0; }
.hero--compact h1 { margin-bottom: .25rem; }
section + section { margin-top: 1.5rem; }
ul { margin: .5rem 0 0 1.25rem; }
</style>
