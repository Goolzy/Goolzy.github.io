---
layout: design-v2
title: "Design V2 - Glassmorphism"
permalink: /design-v2/
description: 글라스모피즘 디자인 + 미니멀 세련 스타일 시안
---

<div class="glass-hero">
  <div class="animated-bg">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>

  <div class="glass-card main-card">
    <h1 class="glass-title">
      즐거움과 연결된<br>
      경험을 만듭니다
    </h1>
    <p class="glass-subtitle">
      굴지는 엔터테인먼트의 본질을 탐구하고,<br>
      누구나 쉽게 즐길 수 있는 경험을 설계합니다.
    </p>
    <div class="glass-actions">
      <a class="glass-btn glass-btn--primary" href="/Talisman/">
        <span>프로젝트 탈리스만</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a class="glass-btn glass-btn--secondary" href="/about/">About</a>
    </div>
  </div>
</div>

<section class="values-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title-glass">핵심 가치</h2>
      <p class="section-desc">우리가 추구하는 세 가지 핵심 가치</p>
    </div>

    <div class="glass-grid">
      <div class="glass-card-small" data-aos>
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <h3>연결</h3>
        <p>하나의 제품에서 끝나지 않는 연속적인 경험</p>
        <div class="card-glow"></div>
      </div>

      <div class="glass-card-small" data-aos>
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        </div>
        <h3>가치</h3>
        <p>즐거움이 의미 있는 생산으로 이어지는 플랫폼</p>
        <div class="card-glow"></div>
      </div>

      <div class="glass-card-small" data-aos>
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <h3>인터페이스</h3>
        <p>낡고 어려운 인터페이스의 제거와 단순함</p>
        <div class="card-glow"></div>
      </div>
    </div>
  </div>
</section>

<section class="approach-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title-glass">우리의 접근</h2>
      <p class="section-desc">혁신적인 방법으로 즐거움을 설계합니다</p>
    </div>

    <div class="approach-list">
      <div class="approach-item glass-card-approach" data-aos>
        <div class="approach-number">01</div>
        <div class="approach-content">
          <h3>플랫폼 연결</h3>
          <p>개인 디바이스와 공간을 잇는 인터랙션을 설계합니다.</p>
        </div>
        <div class="approach-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2"/>
            <path d="M16 3h2a2 2 0 0 1 2 2v2M2 12h20"/>
          </svg>
        </div>
      </div>

      <div class="approach-item glass-card-approach" data-aos>
        <div class="approach-number">02</div>
        <div class="approach-content">
          <h3>즐거움의 생산성</h3>
          <p>놀이가 의미 있는 결과로 이어지는 루프를 만듭니다.</p>
        </div>
        <div class="approach-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
      </div>

      <div class="approach-item glass-card-approach" data-aos>
        <div class="approach-number">03</div>
        <div class="approach-content">
          <h3>단순한 인터페이스</h3>
          <p>복잡함을 제거하고 누구나 쉽게 즐길 수 있게 합니다.</p>
        </div>
        <div class="approach-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="news-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title-glass">최근 소식</h2>
    </div>
    <div class="glass-news-wrapper">
      {% include posts-all.html limit=2 %}
    </div>
    <div style="text-align: center; margin-top: 3rem;">
      <a class="glass-btn glass-btn--secondary" href="/news/">뉴스 더보기</a>
    </div>
  </div>
</section>
