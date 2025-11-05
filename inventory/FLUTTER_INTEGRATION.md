# Flutter WebView 연동 가이드

Inventory 고객센터 웹을 Flutter 앱의 WebView에서 표시하고 사용자 정보를 전달하는 방법입니다.

## 📦 필수 패키지

```yaml
# pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  firebase_auth: ^4.0.0  # 이미 사용 중
  webview_flutter: ^4.4.0
```

## 🔧 구현 코드

### 1. WebView 페이지 생성

```dart
// lib/screens/inventory_webview_screen.dart
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:webview_flutter/webview_flutter.dart';

class InventoryWebViewScreen extends StatefulWidget {
  final String? initialUrl;

  const InventoryWebViewScreen({
    Key? key,
    this.initialUrl,
  }) : super(key: key);

  @override
  State<InventoryWebViewScreen> createState() => _InventoryWebViewScreenState();
}

class _InventoryWebViewScreenState extends State<InventoryWebViewScreen> {
  late final WebViewController _controller;
  bool _isLoading = true;
  bool _authSent = false;

  @override
  void initState() {
    super.initState();
    _initializeWebView();
  }

  void _initializeWebView() {
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageStarted: (String url) {
            setState(() => _isLoading = true);
          },
          onPageFinished: (String url) {
            setState(() => _isLoading = false);
            // 페이지 로드 완료 후 인증 정보 전달
            _sendAuthToWeb();
          },
          onWebResourceError: (WebResourceError error) {
            debugPrint('WebView 에러: ${error.description}');
          },
        ),
      )
      ..loadRequest(Uri.parse(
        widget.initialUrl ?? 'https://goolzy.github.io/inventory/',
      ));
  }

  /// 🔑 앱의 인증 정보를 웹으로 전달
  Future<void> _sendAuthToWeb() async {
    if (_authSent) return; // 중복 전송 방지

    try {
      final user = FirebaseAuth.instance.currentUser;

      if (user == null) {
        debugPrint('[Inventory] 로그인되지 않은 사용자');
        return;
      }

      // JavaScript로 인증 정보 전달
      final jsCode = '''
        if (window.setAppAuth) {
          window.setAppAuth({
            email: '${_escapeJs(user.email ?? '')}',
            uid: '${_escapeJs(user.uid)}',
            displayName: '${_escapeJs(user.displayName ?? '')}'
          });
          console.log('[Flutter] 인증 정보 전달 완료');
        } else {
          console.warn('[Flutter] setAppAuth 함수를 찾을 수 없습니다');
        }
      ''';

      await _controller.runJavaScript(jsCode);
      _authSent = true;
      debugPrint('[Inventory] 인증 정보 전달 완료: ${user.email}');

    } catch (e) {
      debugPrint('[Inventory] 인증 정보 전달 실패: $e');
    }
  }

  /// JavaScript 문자열 이스케이프 (XSS 방지)
  String _escapeJs(String str) {
    return str
        .replaceAll('\\', '\\\\')
        .replaceAll("'", "\\'")
        .replaceAll('"', '\\"')
        .replaceAll('\n', '\\n')
        .replaceAll('\r', '\\r');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('고객센터'),
        actions: [
          // 새로고침 버튼
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: () {
              _authSent = false; // 재전송 허용
              _controller.reload();
            },
          ),
        ],
      ),
      body: Stack(
        children: [
          WebViewWidget(controller: _controller),
          if (_isLoading)
            const Center(
              child: CircularProgressIndicator(),
            ),
        ],
      ),
    );
  }
}
```

---

### 2. 사용 예시

```dart
// 앱의 다른 화면에서 호출
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => const InventoryWebViewScreen(
      initialUrl: 'https://goolzy.github.io/inventory/',
    ),
  ),
);

// 특정 페이지로 바로 이동
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => const InventoryWebViewScreen(
      initialUrl: 'https://goolzy.github.io/inventory/bug-report/',
    ),
  ),
);
```

---

### 3. 메뉴/설정에서 링크 추가

```dart
// lib/screens/settings_screen.dart
ListTile(
  leading: const Icon(Icons.help_outline),
  title: const Text('FAQ & 고객센터'),
  onTap: () {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const InventoryWebViewScreen(
          initialUrl: 'https://goolzy.github.io/inventory/',
        ),
      ),
    );
  },
),
ListTile(
  leading: const Icon(Icons.bug_report),
  title: const Text('버그 신고'),
  onTap: () {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const InventoryWebViewScreen(
          initialUrl: 'https://goolzy.github.io/inventory/bug-report/',
        ),
      ),
    );
  },
),
```

---

## 🧪 테스트 방법

### 1. 웹 브라우저에서 테스트
```bash
# GitHub Pages에 배포 후
https://goolzy.github.io/inventory/
```
- 로그인 없이 모든 페이지 접근 가능 확인
- 폼 제출 테스트

### 2. Flutter 앱에서 테스트
```dart
// 디버그 콘솔에서 확인할 로그:
// [Inventory] 앱으로부터 인증 정보 수신: {email: user@example.com, ...}
// [Inventory] 사용자 정보 저장 완료
// [Bug Report] 이메일 자동완성: user@example.com
```

### 3. 확인 사항
- ✅ 페이지 로드 시 이메일 자동 입력
- ✅ 네비게이션에 이메일 표시
- ✅ 폼 제출 성공
- ✅ 새로고침해도 이메일 유지 (24시간)

---

## 🔒 보안 고려사항

### ✅ 구현된 보안 조치:
1. **JavaScript 이스케이프** - XSS 방지
2. **이메일 검증** - 웹에서 형식 체크
3. **24시간 만료** - sessionStorage 타임스탬프
4. **HTTPS 전용** - GitHub Pages 기본 제공

### ⚠️ 주의사항:
- `setAppAuth()`는 누구나 호출 가능 (WebView 환경 한정)
- 민감한 데이터는 전달하지 말 것
- 결제/금융 정보는 앱에서만 처리

---

## 🚀 향후 확장 (옵션)

### Firestore 사용 시 (v1.1.0+):
```dart
// Custom Token 방식으로 전환 필요
// Firebase Functions 설정 후:

Future<String> _getCustomToken() async {
  final idToken = await FirebaseAuth.instance.currentUser?.getIdToken();
  final response = await http.post(
    Uri.parse('https://YOUR_REGION-YOUR_PROJECT.cloudfunctions.net/createCustomToken'),
    headers: {'Authorization': 'Bearer $idToken'},
  );
  return jsonDecode(response.body)['token'];
}

// WebView URL에 토큰 추가
initialUrl: 'https://goolzy.github.io/inventory/?token=$customToken'
```

---

## 📚 참고 자료

- [webview_flutter 공식 문서](https://pub.dev/packages/webview_flutter)
- [Firebase Auth Flutter](https://firebase.flutter.dev/docs/auth/overview)
- [GitHub Pages](https://docs.github.com/pages)

---

## ❓ 문제 해결

### Q: 이메일이 자동 입력되지 않아요
**A:**
1. 콘솔에서 `[Inventory] 앱으로부터 인증 정보 수신` 로그 확인
2. `setJavaScriptMode(JavaScriptMode.unrestricted)` 설정 확인
3. 페이지 로드 완료 후 충분한 시간 대기 (onPageFinished)

### Q: sessionStorage가 작동하지 않아요
**A:**
- iOS: `WKWebView`는 기본적으로 sessionStorage 지원
- Android: `WebView`는 기본적으로 sessionStorage 지원
- 혹시 시크릿/프라이빗 모드가 아닌지 확인

### Q: CORS 에러가 발생해요
**A:**
- GitHub Pages는 CORS 제한 없음
- JavaScript 주입은 CORS 영향 받지 않음
- 폼 제출 시 `mode: 'no-cors'` 사용 중

---

## ✅ 체크리스트

배포 전 확인사항:
- [ ] Firebase Auth 로그인 가능
- [ ] WebView에서 페이지 로드 가능
- [ ] 콘솔에서 인증 정보 전달 로그 확인
- [ ] 폼에서 이메일 자동 입력 확인
- [ ] 폼 제출 성공 확인
- [ ] 앱 종료 후 재시작 시 정상 작동 확인

---

**작성일:** 2025-01-06
**최종 수정:** 2025-01-06
