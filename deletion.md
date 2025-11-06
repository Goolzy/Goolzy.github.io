---
layout: inventory-deletion
title: 회원 탈퇴
permalink: /deletion/
description: Goolzy 계정 삭제
---

<div class="deletion-container">
  <div class="deletion-card">
    <div class="deletion-header">
      <div class="warning-icon">⚠️</div>
      <h1>회원 탈퇴</h1>
      <p class="warning-text">계정을 삭제하시겠습니까?</p>
    </div>

    <div class="danger-notice">
      <h3>⛔ 중요한 경고</h3>
      <ul>
        <li><strong>모든 데이터가 영구적으로 삭제됩니다</strong></li>
        <li>채팅 메시지, 활동 기록 등 모든 정보가 서버에서 제거됩니다</li>
        <li><strong>삭제된 계정은 복구할 수 없습니다</strong></li>
        <li>동일한 이메일로 재가입은 가능하지만 이전 데이터는 복구되지 않습니다</li>
      </ul>
    </div>

    <div id="deletionForm" class="deletion-form">
      <div class="user-info-section">
        <label>현재 로그인 계정</label>
        <div id="currentUserEmail" class="current-email">로그인 필요</div>
      </div>

      <div class="confirmation-section">
        <label for="confirmText">다음 문구를 정확히 입력해주세요:</label>
        <div class="required-text" id="requiredText">
          <span id="emailPlaceholder">이메일</span> 계정의 계정 삭제를 요청합니다
        </div>
        <input
          type="text"
          id="confirmText"
          class="confirm-input"
          placeholder="위 문구를 정확히 입력하세요"
          autocomplete="off"
        >
        <div id="matchStatus" class="match-status"></div>
      </div>

      <div class="password-section">
        <label for="passwordConfirm">비밀번호 확인</label>
        <input
          type="password"
          id="passwordConfirm"
          class="password-input"
          placeholder="현재 비밀번호를 입력하세요"
        >
        <p class="helper-text">소셜 로그인(Google, Apple) 사용자는 비밀번호 입력이 필요하지 않습니다.</p>
      </div>

      <button id="deleteBtn" class="delete-btn" disabled>
        계정 영구 삭제
      </button>

      <div id="errorMsg" class="error-msg"></div>
    </div>

    <div class="deletion-footer">
      <a href="/" class="cancel-link">취소하고 돌아가기</a>
    </div>
  </div>
</div>
