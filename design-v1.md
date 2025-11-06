---
layout: design-v1
title: "Design V1 - Impact Hero"
permalink: /design-v1/
description: 임팩트 있는 히어로 섹션 + 스크롤 애니메이션 시안
---

<div class="hero-full">
  <div class="hero-particles"></div>
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="reveal-text">즐거움과 연결된</span><br>
      <span class="reveal-text delay-1">경험을 만듭니다</span>
    </h1>
    <p class="hero-subtitle reveal-text delay-2">
      굴지는 엔터테인먼트의 본질을 탐구하고,<br>
      누구나 쉽게 즐길 수 있는 경험을 설계합니다.
    </p>
    <div class="hero-actions reveal-text delay-3">
      <a class="btn-hero btn-hero--primary" href="/Talisman/">프로젝트 탈리스만</a>
      <a class="btn-hero btn-hero--secondary" href="/about/">About</a>
    </div>
  </div>
  <div class="scroll-indicator">
    <span class="scroll-text">Scroll Down</span>
    <div class="scroll-arrow"></div>
  </div>
</div>

<section class="section-white fade-in-section">
  <div class="container">
    <h2 class="section-title">핵심 가치</h2>
    <div class="values-grid">
      <div class="value-card" style="--delay: 0">
        <div class="value-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <h3>연결</h3>
        <p>하나의 제품에서 끝나지 않는 연속적인 경험</p>
      </div>
      <div class="value-card" style="--delay: 0.1s">
        <div class="value-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        </div>
        <h3>가치</h3>
        <p>즐거움이 의미 있는 생산으로 이어지는 플랫폼</p>
      </div>
      <div class="value-card" style="--delay: 0.2s">
        <div class="value-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <h3>인터페이스</h3>
        <p>낡고 어려운 인터페이스의 제거와 단순함</p>
      </div>
    </div>
  </div>
</section>

<section class="section-gradient fade-in-section">
  <div class="container">
    <h2 class="section-title-light">우리의 접근</h2>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-number">01</div>
        <h3>플랫폼 연결</h3>
        <p>개인 디바이스와 공간을 잇는 인터랙션을 설계합니다.</p>
      </div>
      <div class="feature-item">
        <div class="feature-number">02</div>
        <h3>즐거움의 생산성</h3>
        <p>놀이가 의미 있는 결과로 이어지는 루프를 만듭니다.</p>
      </div>
      <div class="feature-item">
        <div class="feature-number">03</div>
        <h3>단순한 인터페이스</h3>
        <p>복잡함을 제거하고 누구나 쉽게 즐길 수 있게 합니다.</p>
      </div>
    </div>
  </div>
</section>

<section class="section-white fade-in-section">
  <div class="container">
    <h2 class="section-title">최근 소식</h2>
    <div class="posts-preview">
      {% include posts-all.html limit=2 %}
    </div>
    <div style="text-align: center; margin-top: 2rem;">
      <a class="btn-outline" href="/news/">뉴스 더보기</a>
    </div>
  </div>
</section>
