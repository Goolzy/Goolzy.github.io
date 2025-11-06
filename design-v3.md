---
layout: design-v3
title: "Design V3 - Playful Gradient"
permalink: /design-v3/
description: 활기찬 그라디언트 + 플레이풀 애니메이션 시안
---

<div class="playful-hero">
  <div class="floating-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="shape shape-4"></div>
    <div class="shape shape-5"></div>
  </div>

  <div class="hero-content-playful">
    <div class="badge-fun">Welcome to Goolzy</div>
    <h1 class="title-fun">
      <span class="word" style="--i:0">즐거움과</span>
      <span class="word" style="--i:1">연결된</span><br>
      <span class="word gradient-text" style="--i:2">경험을</span>
      <span class="word gradient-text" style="--i:3">만듭니다</span>
    </h1>
    <p class="subtitle-fun">
      엔터테인먼트의 본질을 탐구하고, 누구나 쉽게 즐길 수 있는 경험을 설계합니다
    </p>
    <div class="buttons-fun">
      <a href="/Talisman/" class="btn-fun btn-fun--gradient">
        <span>프로젝트 탈리스만</span>
        <div class="btn-shine"></div>
      </a>
      <a href="/about/" class="btn-fun btn-fun--outline">About</a>
    </div>
  </div>

  <div class="scroll-hint">
    <div class="mouse">
      <div class="wheel"></div>
    </div>
  </div>
</div>

<section class="values-playful">
  <div class="container-playful">
    <div class="section-header-fun">
      <span class="subtitle-badge">Core Values</span>
      <h2 class="section-title-fun">핵심 가치</h2>
    </div>

    <div class="cards-wrapper">
      <div class="card-fun card-purple">
        <div class="card-bg-pattern"></div>
        <div class="card-content-fun">
          <div class="emoji-icon">⚡</div>
          <h3>연결</h3>
          <p>하나의 제품에서 끝나지 않는 연속적인 경험</p>
        </div>
        <div class="card-shine"></div>
      </div>

      <div class="card-fun card-mint">
        <div class="card-bg-pattern"></div>
        <div class="card-content-fun">
          <div class="emoji-icon">✨</div>
          <h3>가치</h3>
          <p>즐거움이 의미 있는 생산으로 이어지는 플랫폼</p>
        </div>
        <div class="card-shine"></div>
      </div>

      <div class="card-fun card-gradient">
        <div class="card-bg-pattern"></div>
        <div class="card-content-fun">
          <div class="emoji-icon">🎯</div>
          <h3>인터페이스</h3>
          <p>낡고 어려운 인터페이스의 제거와 단순함</p>
        </div>
        <div class="card-shine"></div>
      </div>
    </div>
  </div>
</section>

<section class="approach-playful">
  <div class="container-playful">
    <div class="section-header-fun">
      <span class="subtitle-badge">How We Work</span>
      <h2 class="section-title-fun">우리의 접근</h2>
    </div>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker">01</div>
        <div class="timeline-content">
          <div class="timeline-card">
            <h3>플랫폼 연결</h3>
            <p>개인 디바이스와 공간을 잇는 인터랙션을 설계합니다.</p>
            <div class="timeline-icon">🔗</div>
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-marker">02</div>
        <div class="timeline-content">
          <div class="timeline-card">
            <h3>즐거움의 생산성</h3>
            <p>놀이가 의미 있는 결과로 이어지는 루프를 만듭니다.</p>
            <div class="timeline-icon">🎮</div>
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-marker">03</div>
        <div class="timeline-content">
          <div class="timeline-card">
            <h3>단순한 인터페이스</h3>
            <p>복잡함을 제거하고 누구나 쉽게 즐길 수 있게 합니다.</p>
            <div class="timeline-icon">🎨</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="news-playful">
  <div class="container-playful">
    <div class="section-header-fun">
      <span class="subtitle-badge">Latest Updates</span>
      <h2 class="section-title-fun">최근 소식</h2>
    </div>

    <div class="news-grid">
      {% include posts-all.html limit=2 %}
    </div>

    <div style="text-align: center; margin-top: 3rem;">
      <a href="/news/" class="btn-fun btn-fun--gradient">
        <span>뉴스 더보기</span>
        <div class="btn-shine"></div>
      </a>
    </div>
  </div>
</section>
