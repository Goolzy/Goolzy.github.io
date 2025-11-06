---
layout: inline-chat
title: "Inventory Community Chat"
permalink: /inline-chat/
description: Inventory 커뮤니티 실시간 채팅
---

<div class="inline-chat-container">
  <!-- Chat Section -->
  <section class="chat-section">
    <div class="chat-header">
      <div class="chat-title">
        <span class="chat-icon">💬</span>
        <span>Inventory 커뮤니티</span>
      </div>
      <div class="online-count">
        <span class="status-dot"></span>
        <span id="online-count">접속 확인중...</span>
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
          placeholder="메시지를 입력하세요... (로그인 필요)"
          maxlength="500"
          disabled
        >
        <button class="send-btn" id="sendBtn" disabled>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</div>
