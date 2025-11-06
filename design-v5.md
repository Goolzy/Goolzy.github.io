---
layout: design-v5
title: "Goolzy App"
permalink: /design-v5/
description: 웹앱 스타일 완전 독립 인터페이스
---

<div class="app-container">
  <!-- Top Bar (App-like) -->
  <div class="app-topbar">
    <div class="topbar-left">
      <img src="/assets/images/logo-icon.png" alt="Goolzy" class="app-logo">
      <span class="app-name">Goolzy</span>
    </div>
    <div class="topbar-center">
      <div class="search-bar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" placeholder="프로젝트 검색..." readonly>
      </div>
    </div>
    <div class="topbar-right">
      <button class="icon-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      </button>
      <button class="icon-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      </button>
      <div class="user-avatar">
        <span>G</span>
      </div>
    </div>
  </div>

  <!-- Main Content Area -->
  <div class="app-main">
    <!-- Hero Dashboard -->
    <section class="dashboard-hero">
      <div class="hero-app-content">
        <div class="status-badge">
          <span class="status-dot"></span>
          All Systems Operational
        </div>
        <h1 class="dashboard-title">
          즐거움을 연구하고<br>
          경험을 설계합니다
        </h1>
        <p class="dashboard-subtitle">
          굴지는 엔터테인먼트의 본질을 탐구하며, 새로운 가치를 만들어갑니다
        </p>
        <div class="quick-actions">
          <button class="action-btn action-btn--primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            새 프로젝트
          </button>
          <button class="action-btn action-btn--secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
            대시보드
          </button>
          <button class="action-btn action-btn--secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            문의하기
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon stat-icon--purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-label">연결</div>
            <div class="stat-value">Connectivity</div>
            <div class="stat-desc">연속적인 경험</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon stat-icon--mint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M2 12h20"/>
              <circle cx="12" cy="12" r="4"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-label">가치</div>
            <div class="stat-value">Value</div>
            <div class="stat-desc">의미있는 생산</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon stat-icon--pink">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-label">인터페이스</div>
            <div class="stat-value">Interface</div>
            <div class="stat-desc">단순함의 추구</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="section-header-app">
        <h2>주요 프로젝트</h2>
        <button class="link-btn">
          전체보기
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div class="projects-grid">
        <div class="project-card">
          <div class="project-header">
            <div class="project-icon">🎯</div>
            <span class="project-status status-active">Active</span>
          </div>
          <h3>Project Talisman</h3>
          <p>새로운 엔터테인먼트 경험을 위한 플랫폼 프로젝트</p>
          <div class="project-footer">
            <div class="project-meta">
              <span class="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                진행중
              </span>
              <span class="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                High Priority
              </span>
            </div>
            <button class="arrow-btn">→</button>
          </div>
        </div>

        <div class="project-card">
          <div class="project-header">
            <div class="project-icon">📦</div>
            <span class="project-status status-active">Active</span>
          </div>
          <h3>Inventory App</h3>
          <p>재고 관리를 위한 크로스 플랫폼 솔루션</p>
          <div class="project-footer">
            <div class="project-meta">
              <span class="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                배포완료
              </span>
              <span class="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                </svg>
                1.2K Users
              </span>
            </div>
            <button class="arrow-btn">→</button>
          </div>
        </div>

        <div class="project-card project-card--create">
          <div class="create-content">
            <div class="create-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            <h3>새 프로젝트</h3>
            <p>아이디어를 현실로 만들어보세요</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Activity Feed -->
    <section class="activity-section">
      <div class="section-header-app">
        <h2>최근 활동</h2>
        <button class="link-btn">
          전체보기
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div class="activity-list">
        <div class="activity-item">
          <div class="activity-icon activity-icon--success">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div class="activity-content">
            <div class="activity-title">사이트 마이그레이션 완료</div>
            <div class="activity-meta">Jekyll 기반으로 전환 완료 • 2시간 전</div>
          </div>
        </div>

        <div class="activity-item">
          <div class="activity-icon activity-icon--info">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
          </div>
          <div class="activity-content">
            <div class="activity-title">디자인 시스템 업데이트</div>
            <div class="activity-meta">브랜드 컬러 및 컴포넌트 정리 • 1일 전</div>
          </div>
        </div>

        <div class="activity-item">
          <div class="activity-icon activity-icon--warning">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div class="activity-content">
            <div class="activity-title">Firebase 설정 검토 필요</div>
            <div class="activity-meta">App Check 활성화 권장 • 3일 전</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
