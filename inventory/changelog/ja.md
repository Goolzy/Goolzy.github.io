---
layout: inventory
title: 更新履歴
permalink: /inventory/changelog/ja/
lang: ja
translations:
  ko: /inventory/changelog/
  en: /inventory/changelog/en/
  ja: /inventory/changelog/ja/
  de: /inventory/changelog/de/
  fr: /inventory/changelog/fr/
  es: /inventory/changelog/es/
  pt: /inventory/changelog/pt/
---

## 📋 更新履歴

Inventoryアプリのアップデート履歴をご確認ください。

---

### ✨ v1.0.2 <small style="color:#6b7280;">2025-01</small>

#### 🔔 共有ログ未読表示
共有ログに新しいコメントが追加されると、アイテムの枠が**点滅**します。
- インベントリ画面で未読の共有ログを一目で確認
- ドキュメントを開いて確認すると点滅が停止
- 既読状態はすべてのデバイスで同期

#### 📂 パーティション改善
- **折りたたみ/展開**: 矢印ボタン(▼/▲)でパーティションを切り替え
- **全選択**: パーティションヘッダーをタップで全アイテム選択/解除
- 選択状態インジケーター表示（○/◐/●）
- 折りたたまれたパーティションへのドラッグ＆ドロップ対応

#### 🐛 バグ修正
- 特定プラットフォームのプッシュ通知バグを修正

---

### 🔒 v1.0.1 <small style="color:#6b7280;">2025-01</small>

#### 🔒 ドキュメントロック機能
- 文書に数字パスワードを設定可能（最大16桁）
- ロックされた文書はグレースケール＋鍵アイコンで表示
- 正しいパスワードで解除（一回限り）
- ロック状態はアイテム転送後も維持
- ロックされた文書は検索結果から除外

---

### 🎉 v1.0.0 <small style="color:#6b7280;">2025-01</small>

**初の正式リリース版**

#### 📦 ペーパーシステム
- 文書作成に必要な通貨システムを導入
- 新規登録時にペーパー10枚付与
- Google/Appleアカウント連携でそれぞれ10枚追加付与
- ショップでペーパー購入可能

#### 📄 文書作成
- ペーパーを使用して文書を作成
- タイトル、内容、画像の添付
- 開始日/有効期限の設定オプション

#### 🏷️ バッジシステム
- 固有ドメイン名刻印機能
- 刻印したドメイン名をユーザーアイデンティティとして使用
- 装着/解除による有効化管理
- 128x128画像添付オプション

#### 🔖 スタンプシステム
- テンプレート作成機能
- 単独ログ/共有ログモード選択
- テンプレート複製機能
- 開始日/有効期限設定

#### 📝 ログ機能
- 文書/スタンプにログを記録
- 単独ログ：個人専用記録
- 共有ログ：複製所有者と共有
- キー:値形式の情報カードサポート

#### 🎨 インクシステム
- アプリテーマカラー変更機能
- ブラックインク、ゴールドインク

#### 🤝 アイテム転送
- メールアドレスでアイテム送信
- QRコードスキャンでメール自動入力
- 受け取ったアイテムの承認または返送
- 複数アイテムの同時送信

#### 📂 パーティション
- アイテムグループ化機能
- デバイス別ローカル保存

#### 🔍 検索機能
- リアルタイム検索フィルタリング
- 検索語のフィルター保存
- 最近の検索語自動保存（最大5件）

#### 🛒 ショップ
- ペーパー、スタンプ、バッジ、インク購入
- すべてのプラットフォームで利用可能

#### 🔐 アカウント
- Google、Apple、メールログイン
- ソーシャルアカウント連携で追加ペーパー獲得

#### 🌍 多言語サポート
- 한국어、English、日本語
- Deutsch、Français、Español、Português

#### 📱 対応プラットフォーム
- iOS（iPhone、iPad）
- Android（スマートフォン、タブレット）
- macOS、Windows

---

> 💡 **新機能を提案してください！** [ご意見・ご要望](/inventory/suggest/ja/)でアイデアを共有いただければ、積極的に検討いたします。

<style>
h2 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: .5rem; margin-bottom: 1.5rem; }
h3 { color: #374151; margin-top: 2rem; margin-bottom: 1rem; }
h4 { color: #4b5563; font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: .75rem; }
ul { line-height: 1.8; }
li { margin-bottom: .5rem; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0; }
blockquote { background: #f9fafb; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 4px; }
small { font-size: .85rem; }
</style>
