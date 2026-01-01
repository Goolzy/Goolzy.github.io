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

## 更新履歴

Inventoryアプリのアップデート履歴をご確認ください。

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="コピー">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### バッジ編集機能
刻印されたバッジの画像とキーワードを編集できます。
- **編集メニュー**: 刻印されたバッジを選択すると「バッジを編集」メニューが表示
- **画像変更**: バッジ画像を新しい画像に差し替え
- **キーワード管理**: 5種類のキーワードの追加・削除・修正

#### 画像パフォーマンス最適化
ネットワーク画像の読み込み速度が大幅に向上しました。
- **ローカルキャッシュ**: 一度読み込んだ画像はローカルに保存され即座に表示
- **バッジ画像同期**: バッジ画像の変更がすべてのログに即座に反映

#### 最近の受信者オートコンプリート
送信画面で最近送信した受信者をすばやく選択できます。
- **オートコンプリートリスト**: 入力欄にフォーカスすると最近の受信者30人のドロップダウンを表示
- **クイック選択**: リストから受信者を選択すると自動的に検索を実行
- **再検索機能**: Xボタンで選択をクリアして別の受信者を検索可能
- **ローカル保存**: 送信成功時に受信者情報を自動保存

#### 送信制限の改善
装着中のバッジと共有中のスタンプは送信が制限されます。
- **装着中のバッジ**: バッジの装着を解除すると送信可能
- **共有中のスタンプ**: 共有を解除すると送信可能
- **詳細案内**: 制限理由に応じた詳細なメッセージを表示

#### 感情表現システム
アイテムに感情表現でリアクションできます。
- **12種類のリアクション**: いいね、大好き、最高、おめでとうなど、様々な感情表現
- **リアクショントグル**: 選択したリアクションを再度クリックしてキャンセル可能
- **ログ記録**: リアクションの選択/キャンセル時にシステムログに記録
- **多言語対応**: ユーザーの言語に合わせたリアクション名を表示

#### 検索機能の改善
リアルタイム検索がアイテム名とキーワードまで拡張されました。
- **アイテム名検索**: ドキュメントタイトル、スタンプ説明、バッジドメイン名で検索可能
- **キーワード検索**: スタンプとバッジに保存されたキーワードで検索可能
- **タグ検索**: スタンプテンプレートのタグでも検索可能

#### アプリ内通知の改善
リアルタイムトースト通知が改善されました。
- **送信者バッジ表示**: 通知に送信者のバッジ画像がインラインで表示されます
- **ダイナミックアイランドスタイル**: iOSダイナミックアイランドスタイルの洗練されたトーストアニメーション
- **リアルタイム検出**: 新規通知と更新通知をID+タイムスタンプベースで正確に検出
- **自動削除**: アイテム詳細画面に進入した時、該当アイテムに関する通知が自動的に削除されます

#### バグ修正
- **ドキュメント詳細UIの安定化**: 共有ログ/単独ログが画面境界にある時、検索バーとフィルターが揺れる問題を修正
- **スクロールの揺れ修正**: ログが少ないドキュメント/スタンプで上にスクロールする際の画面のちらつきを解決
- **最上部スクロール修正**: ログがあるアイテムで作成者情報までスクロールできなかった問題を解決
- **感情表現ログ形式改善**: 絵文字と名称が一緒に表示されるようになりました
- **ユーザー名表示修正**: バッジ装着時にドメイン名が正しく表示されるようになりました
- **共有ログ初回通知修正**: 共有ログの最初のトーストが表示されなかった問題を解決
- **プッシュ通知画像修正**: ドキュメント画像が優先的に表示されます（バッジ画像の代わりに）

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="コピー">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 多言語自動翻訳
ドキュメント、スタンプ、ログの内容がユーザーの言語に自動翻訳されます。
- **自動翻訳**: ドキュメント、スタンプ、ログの閲覧時にユーザーの言語に自動翻訳
- **対応言語**: 韓国語、英語、日本語、スペイン語、フランス語、ドイツ語、ポルトガル語
- **原文トグル**: [原文表示]ボタンで原文と翻訳を切り替え
- **翻訳キャッシュ**: サーバーとローカルに翻訳結果をキャッシュし、再リクエストを防止
- **言語別キャッシュ**: 言語切り替え時に該当言語のキャッシュを即座に使用

#### チュートリアルシステム
アプリの使い方をステップごとに案内するチュートリアルが追加されました。
- **インベントリ画面**: アイテム選択、パーティション移動、下部メニューの使い方（8ステップ）
- **送信/受信画面**: 受信者入力、QRスキャン、送受信方法
- **ストア画面**: 商品カテゴリの閲覧と購入方法
- **プロフィール画面**: アカウント情報と設定方法
- **設定画面**: アプリ設定とテーマ変更方法
- **スタンプテンプレート**: テンプレート作成の全過程（9ステップ）
- **検索機能**: フィルターの使用と検索語の保存方法
- 初回のみ表示され、設定から再度確認できます

#### ログパフォーマンス最適化
共有/独立ログの読み込み速度とデータ使用量が大幅に改善されました。
- **高速読み込み**: 最新100件のコメントのみを先に読み込み
- **無限スクロール**: スクロールで過去のコメントを50件ずつ追加読み込み
- **ローカルキャッシュ**: 再訪問時はキャッシュを使用して即座に表示
- **リアルタイム同期**: 新しいコメントのみを効率的に受信
- **データ節約**: 不要な再ダウンロードを防止

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="コピー">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### メディアリンクカード
ログに入力したURLが自動的に**リッチカード**で表示されます。
- **YouTube**: サムネイル + タイトル + チャンネル名
- **Spotify**: アルバムアート + タイトル + アーティスト
- **Google Drive**: ファイルサムネイル + ファイル名（公開ファイル）
- **Dropbox**: アイコン + ファイル名
- **OneDrive**: アイコン + サービス名
- **一般ウェブページ**: プレビュー画像 + ページタイトル
- タップで外部アプリ/ブラウザで開く
- 長押しでURLをクリップボードにコピー

#### 共有テンプレート検索の改善
- **紙の確認**: 複製ボタンに残りの紙の枚数を表示（紙:10）
- **紙が必要**: 紙がない場合は複製が無効化されます
- **ニューモーフィックデザイン**: 検索画面がニューモーフィックUIスタイルに変更

#### 画像エディターエフェクトシステムの改善
特殊効果選択UIがシンプルになりました。
- **単一選択方式**: 5つの効果から1つのみ選択可能
- **効果リスト**: オリジナル / 背景除去 / ボケ / ブルーム / モノクロ
- **スムーズな遷移**: 効果適用中にプログレス表示
- **パフォーマンス向上**: ブルーム/モノクロフィルターがバックグラウンドで処理

#### パフォーマンスと安定性
アプリの内部構造が最適化されました。
- **クエリ最適化**: クリップ/フィルター読み込みの並列処理で速度向上
- **コード整理**: 未使用コード12モジュールを削除
- **依存関係整理**: 未使用ライブラリ7個を削除
- **アセット整理**: 未使用フォント/画像ファイルを削除（約16MB削減）

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="コピー">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### クリップ機能
複数のドキュメントをまとめて管理できるクリップ機能が追加されました。
- **クリップ作成**: 2つ以上のドキュメントを選択して「クリップでまとめる」を実行
- **クリップアイコン**: クリップされたドキュメントは右上にクリップアイコンを表示
- **クリップ詳細**: アイテム詳細画面の「クリップ情報」ボタンで内部アイテムを確認
- **順序変更**: クリップ内のアイテムをドラッグで順序変更（表紙を除く）
- **アイテム除外**: クリップから特定のアイテムを分離可能（表紙を除く）
- **クリップ解除**: クリップを完全に解体して個別のドキュメントに分離
- **自動解体**: クリップに2つだけ残っている時に1つ除外すると自動解体
- **クリップ転送**: クリップはまとまりで送受信されます

#### 共有テンプレート検索の改善
共有テンプレート検索画面の使いやすさが向上しました。
- **インラインカード**: 検索結果がコンパクトなリスト形式で表示
- **画像全体表示**: サムネイルがトリミングされずに元のアスペクト比で表示
- **詳細情報拡張**: テンプレート詳細シートで内容、キーワード、有効期限を確認可能
- **キーワードプレビュー**: テンプレートに設定されたデフォルトキーワードを確認
- **有効期限表示**: 共有の有効期限を確認

#### パスワードロック解除の改善
- ロックされたドキュメントを開く際、正しいパスワード入力で**永久にロック解除**
- 以前：閲覧のみ許可、ロック維持 → 変更後：完全にロック解除

#### バグ修正
- 受信画面でクリップアイテムが個別にカウントされる問題を修正
- ナビゲーションバーの受信バッジがクリップ内部アイテムを含む問題を修正
- バッジ(Nametag)の返金/削除時に装着状態が解除されない問題を修正
- バッジ削除後もドメインが占有状態のまま残る問題を修正

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="コピー">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 共有ログ未読表示
共有ログに新しいコメントが追加されると、アイテムの枠が**点滅**します。
- インベントリ画面で未読の共有ログを一目で確認
- ドキュメントを開いて確認すると点滅が停止
- 既読状態はすべてのデバイスで同期

#### スタンプ使用ガイド
刻印されたスタンプを選択すると、使用可能なペーパーが**点滅**してガイドします。
- テンプレート複製機能のUX改善
- 直感的な次のステップガイド

#### パーティション改善
- **折りたたみ/展開**: 矢印ボタン(▼/▲)でパーティションを切り替え
- **全選択**: パーティションヘッダーをタップで全アイテム選択/解除
- 選択状態インジケーター表示（○/◐/●）
- 折りたたまれたパーティションへのドラッグ＆ドロップ対応

#### ショップ利便性向上
同じアイテムの連続購入時、確認手順が簡素化されます。
- 10分以内の再購入時、詳細/同意ダイアログをスキップ
- より迅速な大量購入が可能

#### UI改善
- 新しいヘッドラインフォントで可読性向上
- スタンプカードにテンプレートプレビュー背景を表示（33%透明度）
- バッジカードに刻印画像プレビューを表示
- 下部メニューに実行可能なアクション数バッジを表示
- ブラックインクテーマの色調整（テキスト可読性改善）
- 商品画像の最適化（サイズ削減、読み込み高速化）

#### バグ修正
- 自分のコメントで点滅効果が発生する問題を修正
- ジェスチャーナビゲーションで入力欄が切れる問題を修正
- パーティション折りたたみ時に画面がグレーになる問題を修正
- プッシュ通知権限処理を改善

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="コピー">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### ドキュメントロック機能
- 文書に数字パスワードを設定可能（最大16桁）
- ロックされた文書はグレースケール＋鍵アイコンで表示
- 正しいパスワードで解除（一回限り）
- ロック状態はアイテム転送後も維持
- ロックされた文書は検索結果から除外

#### クイック入力システム
ログ入力時に`+`ボタンで特殊情報を簡単に入力できます：
- **キーワード:値** - 一般キーワードカード
- **日付アラーム** - 日付カード（D-Day自動計算、アラーム設定可能）
- **電話番号** - 国別自動フォーマット（韓国、米国、日本など）
- **位置/住所** - 地図アプリ連携
- **金額** - 通貨記号自動表示

#### 特殊カードアクション
ログに入力された特殊情報を**長押し**すると追加機能が有効になります：
- **日付カード**: アラーム設定/解除
- **電話番号カード**: 直接電話 / クリップボードにコピー
- **位置カード**: 地図アプリで開く / クリップボードにコピー
- **金額カード**: クリップボードにコピー

#### UI改善
- フィルターチップにニューモーフィックデザイン適用
- 検索バーのスクロール改善
- アイテム詳細画面のAppBarにアイテム名を表示

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="コピー">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**初の正式リリース版**

#### ペーパーシステム
- 文書作成に必要な通貨システムを導入
- 新規登録時にペーパー10枚付与
- Google/Appleアカウント連携でそれぞれ10枚追加付与
- ショップでペーパー購入可能

#### 文書作成
- ペーパーを使用して文書を作成
- タイトル、内容、画像の添付
- 開始日/有効期限の設定オプション

#### バッジシステム
- 固有ドメイン名刻印機能
- 刻印したドメイン名をユーザーアイデンティティとして使用
- 装着/解除による有効化管理
- 128x128画像添付オプション

#### スタンプシステム
- テンプレート作成機能
- 単独ログ/共有ログモード選択
- テンプレート複製機能
- 開始日/有効期限設定

#### ログ機能
- 文書/スタンプにログを記録
- 単独ログ：個人専用記録
- 共有ログ：複製所有者と共有
- キー:値形式の情報カードサポート

#### インクシステム
- アプリテーマカラー変更機能
- ブラックインク、ゴールドインク

#### アイテム転送
- メールアドレスでアイテム送信
- QRコードスキャンでメール自動入力
- 受け取ったアイテムの承認または返送
- 複数アイテムの同時送信

#### パーティション
- アイテムグループ化機能
- デバイス別ローカル保存

#### 検索機能
- リアルタイム検索フィルタリング
- 検索語のフィルター保存
- 最近の検索語自動保存（最大5件）

#### ショップ
- ペーパー、スタンプ、バッジ、インク購入
- すべてのプラットフォームで利用可能

#### アカウント
- Google、Apple、メールログイン
- ソーシャルアカウント連携で追加ペーパー獲得

#### 多言語サポート
- 한국어、English、日本語
- Deutsch、Français、Español、Português

</div>
</details>

<div class="changelog-footer">
<strong>新機能を提案してください！</strong> <a href="/inventory/suggest/ja/">ご意見・ご要望</a>でアイデアを共有いただければ、積極的に検討いたします。
</div>

<style>
/* バージョンコンテナ */
details.changelog-version {
  background: rgba(21, 10, 40, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

details.changelog-version:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
}

details.changelog-version[open] {
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
}

/* Summary ヘッダー */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* 矢印アイコン */
details.changelog-version summary::before {
  content: '▶';
  margin-right: 0.75rem;
  color: #a855f7;
  transition: transform 0.25s ease;
  font-size: 0.85rem;
}

details.changelog-version[open] summary::before {
  transform: rotate(90deg);
}

details.changelog-version[open] summary {
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

/* バージョンタイトル */
.version-title {
  flex: 1;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.15rem;
  font-weight: 600;
}

.version-title small {
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 400;
  margin-left: 0.5rem;
}

/* コピーボタン */
.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(168, 85, 247, 0.25);
  transform: scale(1.1);
}

.copy-btn svg { fill: #a855f7; }
.copy-btn:hover svg { fill: #14b8a6; }
.copy-btn.copied { background: rgba(20, 184, 166, 0.2); }
.copy-btn.copied svg { fill: #14b8a6; }

/* バージョン内容 */
.version-content {
  padding: 1.25rem 1.5rem;
  background: rgba(10, 6, 20, 0.4);
  color: rgba(255, 255, 255, 0.9);
}

.version-content h4 {
  color: #14b8a6;
  font-size: 1.05rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.version-content h4:first-child { margin-top: 0; }
.version-content ul { line-height: 1.8; }
.version-content li { margin-bottom: 0.5rem; }
.version-content strong { color: #14b8a6; }

/* フッター */
.changelog-footer {
  background: rgba(20, 184, 166, 0.15);
  border-left: 4px solid #14b8a6;
  padding: 1rem 1.25rem;
  margin-top: 2rem;
  border-radius: 0 8px 8px 0;
  color: rgba(255, 255, 255, 0.9);
}

.changelog-footer a { color: #a855f7; }
.changelog-footer a:hover { color: #14b8a6; }

h2 {
  color: rgba(255, 255, 255, 0.95);
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>

<script>
function copyVersionContent(button, event) {
  event.stopPropagation();
  event.preventDefault();

  const details = button.closest('details.changelog-version');
  const versionContent = details.querySelector('.version-content');
  const versionTitle = details.querySelector('.version-title');

  const titleText = versionTitle ? versionTitle.textContent.trim() : '';
  const contentClone = versionContent.cloneNode(true);

  contentClone.querySelectorAll('h4').forEach(h4 => {
    h4.textContent = '\n## ' + h4.textContent.trim() + '\n';
  });
  contentClone.querySelectorAll('li').forEach(li => {
    li.textContent = '- ' + li.textContent.trim();
  });

  const text = '# ' + titleText + '\n' + contentClone.textContent
    .replace(/\n{3,}/g, '\n\n').trim();

  navigator.clipboard.writeText(text).then(() => {
    const copyIcon = button.querySelector('.copy-icon');
    const checkIcon = button.querySelector('.check-icon');
    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    button.classList.add('copied');
    setTimeout(() => {
      copyIcon.style.display = 'block';
      checkIcon.style.display = 'none';
      button.classList.remove('copied');
    }, 2000);
  });
}
</script>
