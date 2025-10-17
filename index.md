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

<style>
.hero--compact { margin-bottom: 0; }
.hero--compact h1 { margin-bottom: .25rem; }
section + section { margin-top: 1.5rem; }
ul { margin: .5rem 0 0 1.25rem; }
</style>
