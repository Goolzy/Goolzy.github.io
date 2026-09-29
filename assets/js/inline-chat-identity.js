/**
 * inline-chat-identity.js — 홈페이지 커뮤니티 채팅(RTDB `inline-chat`)의 작성자 식별·표시·직렬화 정본.
 *
 * 쓰는 곳: `_layouts/design-chat.html`(첫 화면 8개 언어 + /design-chat/) · `_layouts/inline-chat.html`(/inline-chat/)
 *
 * 왜 따로 두는가 (260929 — 채팅 개인정보 노출 축소):
 *   예전 메시지는 `{email: <작성자 이메일 원문>, text, timestamp}` 였다. 화면은 maskEmail() 로 가려
 *   보였지만 DB 에는 원문이 남아 로그인한 누구나 REST 로 읽을 수 있었다. 새 메시지는 이메일 원문을
 *   싣지 않는다 — `uid` 와 «가린 이름» 을 만드는 조각(`prefix` = 로컬 파트 앞 1~3자, `domain`)만 싣는다.
 *   RTDB 규칙에는 부분 문자열 함수가 없어서, 조각을 나눠 두어야 규칙이
 *   `auth.token.email.beginsWith(prefix)` · `auth.token.email.endsWith('@' + domain)` 로
 *   «그 조각이 정말 작성자 본인 이메일의 조각인지» 를 검증할 수 있다(표시명 위조 차단).
 *   사내 표식 `staff: true` 는 규칙이 «검증된 @goolzy.com 토큰» 일 때만 허용한다.
 *
 * 과도기: 브라우저·앱 웹뷰에 캐시된 옛 페이지가 한동안 옛 스키마(`email`)로 쓴다. 그래서 표시 함수는
 *   두 스키마를 모두 읽는다(옛 메시지도 이메일 원문 대신 같은 형식의 가린 이름으로만 보여 준다).
 *   제재도 과도기에는 두 키를 본다 — 새 키 `banned-users/{uid}` 와, 옛 관리자 페이지가 쓰는
 *   옛 키 `banned-users/{이메일 sanitize}`(규칙 1차가 «본인 것만» 읽게 허용한다. 2차에서 닫히면
 *   그 확인은 조용히 건너뛴다). uid 가 없는 옛 메시지의 작성자는 관리자가 옛 키로 제재한다.
 *
 * 짧은 주소: 로컬 파트가 짧으면 «앞 글자 + 도메인» 이 사실상 원문이다. 그래서 접두 길이를 로컬 파트
 *   길이에 따라 줄인다 — 1자: 0자(빈 접두), 2~3자: 1자, 4자: 2자, 5자 이상: 3자. 규칙도 같은 상한을
 *   `auth.token.email.length - domain.length - 1`(= 로컬 파트 길이)로 계산해 강제한다.
 *
 * ⚠️ 메인 리포 `functions/test/fixtures/inline-chat-identity.js` 는 이 파일의 **바이트 동일 사본**이다.
 *    RTDB 규칙 에뮬레이터 스위트(`functions/test/inline-chat-rules.test.ts`)가 그 사본을 그대로 실행해
 *    «허용» 페이로드를 만든다. 이 파일을 고치면 사본도 같이 바꿔야 한다(서브모듈 포인터가 이 파일을
 *    포함하는 커밋으로 올라가면 스위트가 두 파일의 바이트 일치를 직접 단언한다).
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  } else {
    root.InlineChatIdentity = api;
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var MESSAGES_PATH = 'inline-chat/messages';
  var BANNED_PATH = 'inline-chat/banned-users';
  /** 가린 부분 — 길이를 드러내지 않도록 고정 폭이다(예전 표시는 로컬 파트 길이만큼 * 를 찍었다). */
  var MASK = '***';
  /** 규칙의 사내 판정(`auth.token.email.matches(/.*@goolzy\\.com$/)`)과 같은 식 — 대소문자 구분까지 같다. */
  var STAFF_EMAIL = /@goolzy\.com$/;

  /**
   * 로컬 파트 길이 → 드러낼 앞 글자 수. 규칙(`database.rules.json` inline-chat `prefix`)과 같은 상한이다.
   * 1자: 0 · 2~3자: 1 · 4자: 2 · 5자 이상: 3
   */
  function prefixLengthFor(localLength) {
    if (localLength >= 5) return 3;
    if (localLength === 4) return 2;
    if (localLength >= 2) return 1;
    return 0;
  }

  /**
   * 이메일을 «가린 이름» 조각으로 나눈다. 원문은 돌려주지 않는다.
   * @param {string} email
   * @return {{prefix: string, domain: string} | null} 나눌 수 없으면 null (prefix 는 빈 문자열일 수 있다)
   */
  function emailParts(email) {
    if (typeof email !== 'string') return null;
    var at = email.lastIndexOf('@');
    if (at <= 0 || at === email.length - 1) return null;
    var local = email.slice(0, at);
    var domain = email.slice(at + 1);
    var prefix = local.slice(0, prefixLengthFor(local.length));
    // 규칙은 '@' 가 섞인 조각을 거부한다(로컬 파트에 '@' 가 있는 비정상 주소).
    if (prefix.indexOf('@') !== -1) return null;
    return {prefix: prefix, domain: domain};
  }

  /** 조각 → 화면 표시명. 예: {prefix:'abc', domain:'gmail.com'} → 'abc***@gmail.com', 빈 접두 → '***@x.com' */
  function labelFromParts(parts) {
    if (!parts || typeof parts.prefix !== 'string' || typeof parts.domain !== 'string' ||
        !parts.domain) {
      return '';
    }
    return parts.prefix + MASK + '@' + parts.domain;
  }

  /**
   * 옛 제재 키 — 옛 페이지가 쓰던 sanitize(`@`→`_at_`, `.`→`,`) 그대로. RTDB 키에 못 쓰는 글자가 섞이면
   * 옛 페이지도 그 키를 만들 수 없었으므로 null.
   * @param {string} email
   * @return {string | null}
   */
  function legacyBanKey(email) {
    if (typeof email !== 'string' || email.indexOf('@') === -1) return null;
    var key = email.replace(/@/g, '_at_').replace(/\./g, ',');
    if (/[#$\[\]\/]/.test(key)) return null;
    return key;
  }

  /** 검증된 사내 계정인가 — 규칙의 staff/system/관리자 판정과 같은 조건(email_verified 필수). */
  function isStaffUser(user) {
    return !!user && user.emailVerified === true &&
      typeof user.email === 'string' && STAFF_EMAIL.test(user.email);
  }

  /** 옛 스키마(`email` 필드) 메시지인가. */
  function isLegacyMessage(msg) {
    return !!msg && typeof msg.email === 'string';
  }

  /**
   * 일반 메시지 직렬화 — `messagesRef.push(...)` 에 그대로 넘긴다.
   * @param {object} user firebase.User (uid · email · emailVerified 를 읽는다)
   * @param {string} text 본문
   * @param {*} serverTimestamp firebase.database.ServerValue.TIMESTAMP
   * @return {object | null} 이메일이 없거나 나눌 수 없는 계정이면 null(규칙상 쓸 수 없다)
   */
  function buildUserMessage(user, text, serverTimestamp) {
    var parts = emailParts(user && user.email);
    if (!parts || !user.uid) return null;
    var msg = {
      uid: user.uid,
      prefix: parts.prefix,
      domain: parts.domain,
      text: text,
      timestamp: serverTimestamp
    };
    if (isStaffUser(user)) msg.staff = true;
    return msg;
  }

  /**
   * 관리자 시스템 메시지 직렬화(채팅금지 안내 등). 본문에 이메일을 넣지 않는다 — 대상은 가린 이름으로만.
   * @param {object} adminUser firebase.User
   * @param {string} text 본문
   * @param {*} serverTimestamp firebase.database.ServerValue.TIMESTAMP
   * @return {object}
   */
  function buildSystemMessage(adminUser, text, serverTimestamp) {
    return {uid: adminUser.uid, system: true, text: text, timestamp: serverTimestamp};
  }

  /**
   * 제재 기록 직렬화 — `banned-users/{banTargetForMessage().key}` 에 set 한다. 이메일은 싣지 않는다.
   * @param {object} adminUser firebase.User
   * @param {number} durationSeconds 금지 시간(초)
   * @param {number} nowMs Date.now()
   * @param {*} serverTimestamp firebase.database.ServerValue.TIMESTAMP
   * @return {object}
   */
  function buildBanRecord(adminUser, durationSeconds, nowMs, serverTimestamp) {
    return {
      bannedBy: adminUser.uid,
      bannedAt: serverTimestamp,
      banUntil: nowMs + durationSeconds * 1000,
      duration: durationSeconds
    };
  }

  /** 채팅금지 안내 본문 — 대상은 가린 이름, 관리자는 적지 않는다. */
  function banNoticeText(targetLabel, durationSeconds) {
    return targetLabel + ' 사용자가 ' + durationSeconds + '초 동안 채팅 금지되었습니다.';
  }

  /** 시스템 메시지인가 — 새 스키마 `system: true`, 옛 스키마 `email: 'system'`. */
  function isSystemMessage(msg) {
    return !!msg && (msg.system === true || msg.email === 'system');
  }

  /** 내가 쓴 메시지인가 — 새 스키마는 uid 로, 옛 스키마는 (내 브라우저 안에서만) 이메일로 비교한다. */
  function isOwnMessage(msg, user) {
    if (!msg || !user) return false;
    if (isLegacyMessage(msg)) return msg.email === user.email;
    return typeof msg.uid === 'string' && msg.uid === user.uid;
  }

  /** 사내 표식 — 새 스키마는 규칙이 검증한 `staff: true` 만 믿는다. */
  function isStaffMessage(msg) {
    if (!msg) return false;
    if (isLegacyMessage(msg)) return STAFF_EMAIL.test(msg.email);
    return msg.staff === true;
  }

  /** 작성자 표시명(가린 이름). 옛 스키마도 원문 대신 같은 형식으로 가린다. 만들 수 없으면 ''. */
  function senderLabel(msg) {
    if (!msg || isSystemMessage(msg)) return '';
    if (isLegacyMessage(msg)) return labelFromParts(emailParts(msg.email));
    return labelFromParts({prefix: msg.prefix, domain: msg.domain});
  }

  /**
   * 관리자 제재 대상 — 새 메시지는 uid 키, uid 가 없는 옛 메시지는 옛 키(과도기 한정).
   * 옛 키 제재는 이메일을 화면·명령에 다시 꺼내지 않는다(메시지에 이미 실린 값으로 키만 만든다).
   * 옛 키 제재는 규칙이 집행하지 않고 페이지 확인(옛·새 페이지 모두 checkOwnBan/옛 확인)으로만 적용된다.
   * @param {object} msg 메시지
   * @return {{key: string, legacy: boolean} | null}
   */
  function banTargetForMessage(msg) {
    if (!msg || isSystemMessage(msg)) return null;
    if (typeof msg.uid === 'string' && msg.uid) return {key: msg.uid, legacy: false};
    if (isLegacyMessage(msg)) {
      var key = legacyBanKey(msg.email);
      return key ? {key: key, legacy: true} : null;
    }
    return null;
  }

  /**
   * 제재 기록 1건 확인. 만료됐으면 본인이 지운다 — 실패해도 전송은 막지 않는다
   * (규칙도 만료된 제재는 막지 않는다. 이메일 필드가 없는 옛 키 기록은 규칙상 본인이 못 지운다 — 정리 스크립트 몫).
   * @param {object} ref 기록 레퍼런스
   * @param {boolean} optional true 면 읽기 실패(2차 규칙이 옛 키 읽기를 닫은 경우 등)를 «제재 없음» 으로 본다
   * @return {Promise<{banned: boolean, remainingSeconds: number}>}
   */
  function readBanRecord(ref, optional) {
    var none = {banned: false, remainingSeconds: 0};
    return ref.once('value').then(function (snapshot) {
      var ban = snapshot.val();
      if (!ban || typeof ban.banUntil !== 'number') return none;
      var now = Date.now();
      if (now < ban.banUntil) {
        return {banned: true, remainingSeconds: Math.ceil((ban.banUntil - now) / 1000)};
      }
      return ref.remove().then(function () {
        return none;
      }, function (error) {
        if (typeof console !== 'undefined') console.warn('만료된 제재 기록 삭제 실패 (무시하고 진행):', error);
        return none;
      });
    }, function (error) {
      if (optional) return none;
      throw error;
    });
  }

  /**
   * 본인 제재 여부 확인. 규칙은 본인 항목만 읽게 한다(목록 읽기 불가).
   * 새 키(`{uid}`)와 과도기 옛 키(`{이메일 sanitize}`)를 **둘 다** 본다 — 옛 관리자 페이지나 옛 메시지에
   * 건 제재가 새 페이지에서 빠지지 않게. 옛 키 읽기가 거부되면(규칙 2차) 그 확인만 건너뛴다.
   * @param {object} database firebase.database()
   * @param {object} user firebase.User
   * @return {Promise<{banned: boolean, remainingSeconds: number}>}
   */
  function checkOwnBan(database, user) {
    var base = database.ref(BANNED_PATH);
    var checks = [readBanRecord(base.child(user.uid), false)];
    var legacyKey = legacyBanKey(user.email);
    if (legacyKey) checks.push(readBanRecord(base.child(legacyKey), true));
    return Promise.all(checks).then(function (results) {
      var remaining = 0;
      for (var i = 0; i < results.length; i++) {
        if (results[i].banned && results[i].remainingSeconds > remaining) {
          remaining = results[i].remainingSeconds;
        }
      }
      return {banned: remaining > 0, remainingSeconds: remaining};
    });
  }

  return {
    MESSAGES_PATH: MESSAGES_PATH,
    BANNED_PATH: BANNED_PATH,
    prefixLengthFor: prefixLengthFor,
    emailParts: emailParts,
    labelFromParts: labelFromParts,
    legacyBanKey: legacyBanKey,
    isStaffUser: isStaffUser,
    isLegacyMessage: isLegacyMessage,
    buildUserMessage: buildUserMessage,
    buildSystemMessage: buildSystemMessage,
    buildBanRecord: buildBanRecord,
    banNoticeText: banNoticeText,
    banTargetForMessage: banTargetForMessage,
    isSystemMessage: isSystemMessage,
    isOwnMessage: isOwnMessage,
    isStaffMessage: isStaffMessage,
    senderLabel: senderLabel,
    checkOwnBan: checkOwnBan
  };
}));
