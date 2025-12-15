---
layout: design-chat
title: "Inventory - Coming Soon"
permalink: /
description: Inventory 앱 출시 예정 - 커뮤니티 채팅
lang: ko
translations:
  ko: /
  en: /en/
  ja: /ja/
  de: /de/
  fr: /fr/
  es: /es/
  pt: /pt/
---

<div class="launch-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="app-showcase">
      <div class="app-icon-large">
        <img src="/assets/images/logo-icon.png" alt="Inventory App">
      </div>
      <h1 class="hero-title">
        <span class="title-line">내 손안에</span>
        <span class="title-line">디지털 가방,</span>
        <span class="title-highlight">Inventory</span>
      </h1>
      <p class="launch-date">
        🤖 25년 12월 15일 구글 플레이 정식출시!<br>
        🎉 25년 12월 23일 macOS, iOS 정식출시!
      </p>

      <!-- Platform Icons -->
      <div class="platforms">
        <div class="platform-icon beta" title="iOS (정식 출시 예정)">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span>iOS</span>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.goolzy.inventory" target="_blank" class="platform-icon active" title="Android (정식 출시!)">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <span>Android</span>
        </a>
        <div class="platform-icon disabled" title="Windows (준비중)">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z"/>
          </svg>
          <span>Windows</span>
        </div>
        <div class="platform-icon beta" title="macOS (정식 출시 예정)">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
          </svg>
          <span>macOS</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Chat Section -->
  <section class="chat-section">
    <div class="chat-header">
      <div class="chat-title">
        <span class="chat-icon">💬</span>
        <span>커뮤니티 채팅</span>
      </div>
      <div class="chat-user-info">
        <div id="userInfo" class="user-info-badge" style="display:none;">
          <span id="userEmail" class="user-email"></span>
          <button id="logoutBtn" class="logout-btn">로그아웃</button>
        </div>
      </div>
    </div>

    <div class="chat-container">
      <div class="chat-messages" id="chatMessages">
        <!-- 초기 메시지 -->
        <div class="message system-msg">
          <div class="msg-content">Inventory 커뮤니티에 오신 것을 환영합니다! 🎉</div>
        </div>
      </div>

      <div class="chat-input-wrapper">
        <input
          type="text"
          id="chatInput"
          class="chat-input"
          placeholder="메시지를 입력하세요..."
          maxlength="200"
        >
        <button class="send-btn" id="sendBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</div>
