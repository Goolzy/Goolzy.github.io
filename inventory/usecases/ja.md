---
layout: inventory
title: 活用方法
permalink: /inventory/usecases/ja/
lang: ja
translations:
  ko: /inventory/usecases/
  en: /inventory/usecases/en/
  ja: /inventory/usecases/ja/
  de: /inventory/usecases/de/
  fr: /inventory/usecases/fr/
  es: /inventory/usecases/es/
  pt: /inventory/usecases/pt/
---

<style>
.usecase-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin: 2rem 0;
}

.usecase-card {
  background: rgba(10, 6, 20, 0.5);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.usecase-card:hover {
  border-color: rgba(168, 85, 247, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
}

.usecase-card summary {
  padding: 1.25rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.usecase-card summary::-webkit-details-marker {
  display: none;
}

.usecase-card summary::after {
  content: '詳しく見る ↓';
  font-size: 0.75rem;
  color: var(--purple-bright);
  opacity: 0.7;
  margin-top: 0.5rem;
}

.usecase-card[open] summary::after {
  content: '閉じる ↑';
}

.usecase-card .card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.4;
}

.usecase-card .card-persona {
  font-size: 0.85rem;
  color: var(--teal-bright);
  opacity: 0.9;
}

.usecase-card .card-type {
  display: inline-block;
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  background: rgba(168, 85, 247, 0.2);
  color: var(--purple-bright);
  width: fit-content;
}

.usecase-card .card-content {
  padding: 0 1.25rem 1.25rem;
  border-top: 1px solid rgba(168, 85, 247, 0.1);
  margin-top: 0.5rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
}

.usecase-card .card-content p {
  margin: 1rem 0;
}

.usecase-card .card-content strong {
  color: var(--teal-bright);
}

.usecase-card .card-content a {
  color: var(--purple-bright);
  text-decoration: none;
}

.usecase-card .card-content a:hover {
  text-decoration: underline;
}

.category-section {
  margin: 3rem 0;
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid var(--teal);
}

.share-section {
  text-align: center;
  padding: 3rem 2rem;
  margin-top: 4rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(20, 184, 166, 0.1));
  border-radius: 20px;
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.share-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--purple-bright), var(--teal-bright));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.share-section p {
  color: var(--text-dim);
  margin-bottom: 1.5rem;
}

.share-btn {
  display: inline-block;
  padding: 0.85rem 2rem;
  background: rgba(168, 85, 247, 0.2);
  border: 1px solid rgba(168, 85, 247, 0.4);
  border-radius: 12px;
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.share-btn:hover {
  background: rgba(168, 85, 247, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(168, 85, 247, 0.3);
}

@media (max-width: 768px) {
  .usecase-grid {
    grid-template-columns: 1fr;
  }
}
</style>

# インベントリ活用方法

100の多様な活用事例から、インベントリの可能性を発見してください。

---

<div class="category-section">
<h2 class="category-title">問題解決型 - 日常の悩みを解決する</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">冷蔵庫の食材がいつも腐ってしまう</span>
<span class="card-persona">田中さくら（32歳、共働き主婦）</span>
</summary>
<div class="card-content">

**悩み**：忙しい毎日で冷蔵庫の食材の賞味期限を忘れて捨てることが多かったです。特に豆腐や牛乳は数日で傷んでしまうのに...

**解決策**：食材ごとに[ペーパー](/inventory/manual/ja/#paper)でアイテムを作成し、[有効期限](/inventory/manual/ja/#dates)を設定しました。今は期限の3日前に通知が届くので、事前に調理したり冷凍保存できます。

**結果**：食品ロスが80%減りました。月の食費も1万5千円節約できました！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">サブスクが多すぎて管理できない</span>
<span class="card-persona">山本健太（28歳、ITエンジニア）</span>
</summary>
<div class="card-content">

**悩み**：Netflix、YouTube Premium、Notion、GitHub...サブスクが10個以上あって更新日もバラバラ。使っていないものも課金され続けていました。

**解決策**：全てのサブスクをインベントリに登録し、更新日の7日前に[日付アラーム](/inventory/manual/ja/#alarm)を設定。[キーワード](/inventory/manual/ja/#keyword)に月額料金も記入して一目で確認できるようにしました。

**結果**：使っていないサブスク3つを解約して月4千円節約。もう更新日に慌てることもありません。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">子供の予防接種を忘れてしまう</span>
<span class="card-persona">佐藤美咲（35歳、ワーキングマザー）</span>
</summary>
<div class="card-content">

**悩み**：子供が2人いて予防接種のスケジュールがそれぞれ違うので混乱していました。クリニックから連絡が来る頃にはもう遅れていることも...

**解決策**：子供別に[パーティション](/inventory/manual/ja/#partition)を作成し、接種日程を[日付アラーム](/inventory/manual/ja/#alarm)で管理。接種完了したら[スタンプ](/inventory/manual/ja/#stamp)を押して記録します。

**結果**：接種スケジュールを一度も逃さなくなりました。病院に行く前に準備もできるようになりました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">引っ越しのたびに荷物整理が大変</span>
<span class="card-persona">鈴木大輔（27歳、大学院生）</span>
</summary>
<div class="card-content">

**悩み**：一人暮らしで引っ越しが多いのですが、毎回荷造りと荷解きで何がどこにあるか分からなくなります。箱に番号を書いても結局全部開けることに...

**解決策**：梱包前に各箱の中身を写真に撮ってインベントリに登録しました。[キーワード](/inventory/manual/ja/#keyword)に「箱1」「キッチン」などタグ付けすれば引っ越し後すぐ見つかります。

**結果**：最近の引っ越しでは整理時間が半分に。「はさみどこ？」と検索すればすぐ出てきます。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">レシート管理が面倒</span>
<span class="card-persona">高橋えみ（40歳、個人事業主）</span>
</summary>
<div class="card-content">

**悩み**：事業経費のためにレシートを保管しなければならないのですが、紙のレシートは色あせたり紛失したり...確定申告の時期は毎回ストレスでした。

**解決策**：支払い直後にレシートを撮影してインベントリに登録。[キーワード](/inventory/manual/ja/#keyword)に「経費」「2024」「食費」などタグ付けしておけばカテゴリ別に検索できます。

**結果**：紙のレシートをほとんど保管しなくてよくなりました。確定申告時に必要なレシートも検索ですぐ見つかります。税理士さんも楽だと言っています。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">フィルム写真の整理ができない</span>
<span class="card-persona">中村沙織（26歳、写真同好会員）</span>
</summary>
<div class="card-content">

**悩み**：フィルムカメラで撮った写真を現像すると、いつどこで撮ったか思い出せません。プリント写真がただ積み重なるだけでした。

**解決策**：現像のたびに代表的なカットを撮影してインベントリに登録。[キーワード](/inventory/manual/ja/#keyword)に撮影場所、日付、フィルムの種類を記録。[ログ](/inventory/manual/ja/#log)には現像所の情報も残します。

**結果**：自分だけのフィルムアーカイブが完成しました。2年前の旅行写真もすぐ見つけられるようになりました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">洗濯管理が難しい</span>
<span class="card-persona">木村拓也（29歳、ファッションブロガー）</span>
</summary>
<div class="card-content">

**悩み**：服によって洗濯方法が違うので、クリーニングに出したものも忘れてしまうし、ニットは手洗いなのに洗濯機に入れてしまったり...

**解決策**：特別なケアが必要な衣類をインベントリに登録し、[ログ](/inventory/manual/ja/#log)に洗濯方法を記入。クリーニングに出した日付も記録して、取りに行く時期を[日付アラーム](/inventory/manual/ja/#alarm)で通知。

**結果**：服の傷みが大幅に減りました。クリーニングを忘れて延滞料を払うこともなくなりました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">服用中のサプリが多すぎる</span>
<span class="card-persona">伊藤美代子（55歳、更年期女性）</span>
</summary>
<div class="card-content">

**悩み**：医師に勧められたサプリメントだけで5種類。朝/夜の服用区分も混乱するし、再購入時期も逃してしまいます。

**解決策**：サプリメントごとに[ペーパー](/inventory/manual/ja/#paper)で登録。服用法は[ログ](/inventory/manual/ja/#log)に、消費予想日は[有効期限](/inventory/manual/ja/#dates)で管理。

**結果**：服用スケジュールを正確に守れるようになりました。サプリがなくなる前に通知が来るので事前に注文できます。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">保証期間切れで高額修理に</span>
<span class="card-persona">小林純平（34歳、新婚夫婦）</span>
</summary>
<div class="card-content">

**悩み**：エアコンが故障したら保証期間が1ヶ月前に切れていたと言われました。保証書もどこにあるか分からず、修理代に3万円かかりました。

**解決策**：全ての家電をインベントリに登録し、保証書の写真を添付。[有効期限](/inventory/manual/ja/#dates)に保証満了日を入れて1ヶ月前に通知が来るように設定。

**結果**：今は保証が切れる前に点検を申請したり延長を検討できます。洗濯機も無償修理を受けられました！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">ギフト券をいつも忘れる</span>
<span class="card-persona">渡辺優子（25歳、大学生）</span>
</summary>
<div class="card-content">

**悩み**：誕生日や記念日にもらったギフト券がメッセージアプリのどこかに埋もれて、有効期限が過ぎて使えないことが多かったです。

**解決策**：ギフト券をもらったらすぐスクショしてインベントリに登録し、[有効期限](/inventory/manual/ja/#dates)を設定。期限の1週間前に通知が届きます。

**結果**：3千円分のスタバギフト券を救出できました！もらったプレゼントをちゃんと活用できるようになりました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">車の整備履歴がバラバラ</span>
<span class="card-persona">松田誠一（42歳、営業職）</span>
</summary>
<div class="card-content">

**悩み**：車の整備をいつどこで受けたか覚えていません。整備工場ごとに記録が違うし、オイル交換時期も逃していました。

**解決策**：車をインベントリに登録し、整備を受けるたびに[ログ](/inventory/manual/ja/#log)に記録。次回整備予定日は[日付アラーム](/inventory/manual/ja/#alarm)で設定。

**結果**：完璧な車両整備履歴が蓄積されました。中古車として売る時にこの履歴を見せたらより良い価格がつきました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">重要書類がどこにあるか分からない</span>
<span class="card-persona">岡田真理（38歳、フリーランサー）</span>
</summary>
<div class="card-content">

**悩み**：契約書、保険証券、登記簿謄本...重要な書類があちこちに散らばっています。必要な時に見つからなくて再発行してもらったこともあります。

**解決策**：全ての重要書類を撮影してインベントリに登録し、[ドキュメントロック](/inventory/manual/ja/#lock)でセキュリティも確保。[キーワード](/inventory/manual/ja/#keyword)に書類の種類と保管場所を記入。

**結果**：「登記簿謄本どこ？」→ 検索 → 保管場所確認。30秒で見つかります。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">買った本を読まない</span>
<span class="card-persona">石井麻衣（30歳、マーケター）</span>
</summary>
<div class="card-content">

**悩み**：本屋で買う時はやる気満々なのに、家に帰ると読まずに積み上げるだけ。同じ本を2回買ったこともあります。

**解決策**：本を買ったらすぐインベントリに登録。読み始めたら[開始日](/inventory/manual/ja/#dates)を、読み終わったら[スタンプ](/inventory/manual/ja/#stamp)を押します。未読リストが一目で分かります。

**結果**：プレッシャーではなくモチベーションが生まれました。今年は12冊読みましたが、去年1年間より多いです！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">植物をいつも枯らしてしまう</span>
<span class="card-persona">長谷川空（24歳、社会人1年目）</span>
</summary>
<div class="card-content">

**悩み**：インテリアに観葉植物を置きたくて鉢を買いましたが、水やりを忘れたり逆にやりすぎたりして枯らしてしまいます。

**解決策**：植物ごとにインベントリに登録し、[日付アラーム](/inventory/manual/ja/#alarm)で水やりのリマインダーを設定。[ログ](/inventory/manual/ja/#log)に植え替えや肥料をあげた日も記録。

**結果**：モンステラが6ヶ月生きています！新しい葉も3枚出ました！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">パスワードを忘れてしまう</span>
<span class="card-persona">加藤正夫（50歳、公務員）</span>
</summary>
<div class="card-content">

**悩み**：サイトごとにパスワードが違うので覚えられません。付箋に書くとセキュリティが心配...

**解決策**：アカウント情報をインベントリに登録し、[ドキュメントロック](/inventory/manual/ja/#lock)で保護。パスワードのヒントだけを記入し、実際のパスワードはパターンで組み合わせる方式に。

**結果**：もう「パスワードを忘れた」をクリックしなくてよくなりました。セキュリティを保ちながら便利に管理できています。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">家族の健康診断を逃す</span>
<span class="card-persona">藤田洋子（58歳、主婦）</span>
</summary>
<div class="card-content">

**悩み**：夫、義母、自分...それぞれ健康診断の時期が違います。国民健康保険の無料検診期間を逃して自費で受けたこともありました。

**解決策**：家族それぞれの検診日程をインベントリに登録し、検診期間開始時に通知が来るよう[日付アラーム](/inventory/manual/ja/#alarm)を設定。

**結果**：家族全員の無料検診を一度も逃さなくなりました。年間5万円以上の健康管理費を節約！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">ペットの病院記録がバラバラ</span>
<span class="card-persona">斎藤みな（31歳、猫の飼い主）</span>
</summary>
<div class="card-content">

**悩み**：猫を2匹飼っていますが、ワクチン接種日程や病院の記録がそれぞれ違います。新しい病院に行くと「以前の記録ありますか？」と聞かれて見つからず困っていました。

**解決策**：猫別に[パーティション](/inventory/manual/ja/#partition)を作成。病院に行くたびに[ログ](/inventory/manual/ja/#log)に記録。次のワクチン接種日は[日付アラーム](/inventory/manual/ja/#alarm)で管理。

**結果**：獣医さんにも「すごく整理されていますね」と褒められました。緊急時にも記録をすぐ見せられるので安心です。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">おすすめされたワインを忘れる</span>
<span class="card-persona">山田浩介（36歳、ワイン初心者）</span>
</summary>
<div class="card-content">

**悩み**：ワインバーで美味しく飲んだワインの名前を忘れてしまいます。スーパーに行くと「前何飲んだっけ...」となって結局適当に選んでいました。

**解決策**：ワインを飲むたびにラベルを撮影してインベントリに登録。[ログ](/inventory/manual/ja/#log)にテイスティングノート、ペアリング、価格を記録。[キーワード](/inventory/manual/ja/#keyword)に「赤」「デイリー」「ギフト用」などタグ付け。

**結果**：自分だけのワインDBが完成しました。「前の記念日に何飲んだっけ？」もすぐ見つかります！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">運動習慣が続かない</span>
<span class="card-persona">新井健介（29歳、会社員）</span>
</summary>
<div class="card-content">

**悩み**：ジムに3ヶ月登録しても1ヶ月しか続きません。モチベーションが保てず、記録もしないので成長も分かりませんでした。

**解決策**：運動種目別にインベントリに登録し、運動するたびに重量/回数を[ログ](/inventory/manual/ja/#log)に記録。連続出席で[スタンプ](/inventory/manual/ja/#stamp)を押して達成感を味わいます。

**結果**：ベンチプレス40kgから70kgまで成長した過程が全て記録されています。記録を見るとモチベーションが上がります！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">問題解決</span>
<span class="card-title">会議で約束したことを忘れる</span>
<span class="card-persona">横山さおり（33歳、チームリーダー）</span>
</summary>
<div class="card-content">

**悩み**：会議中に「来週までに資料まとめます」と言ったのに忘れてしまいます。急に「あれできた？」と聞かれると冷や汗...

**解決策**：会議中に約束した仕事をすぐインベントリに登録し、締め切り前日に[日付アラーム](/inventory/manual/ja/#alarm)を設定。完了したら[スタンプ](/inventory/manual/ja/#stamp)！

**結果**：「横山さんは言ったことは必ずやりますね」という評価を受けるようになりました。信頼度アップ！

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">感性体験型 - 日常に意味を加える</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">子供の初めての言葉、初めての一歩を記録したい</span>
<span class="card-persona">松本恵理（33歳、育児中のママ）</span>
</summary>
<div class="card-content">

18ヶ月の息子が初めて「ママ」と言った日。心臓が破裂しそうでした。

その瞬間を動画で撮りましたが、それだけでは足りませんでした。その日の感情、状況、前日に何があったか...全て覚えておきたかったのです。

インベントリに動画と一緒に[ログ](/inventory/manual/ja/#log)でその日の全ての話を書きました。パパが帰ってきた時にまた「ママ」と言ったこと、夜に涙が出たことまで。

5年後、子供が小学校に入学する時にこの記録を読み返しました。あの時の感動がそのまま蘇りました。インベントリが私たち家族のタイムカプセルになりました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">おばあちゃんのレシピを永遠に残したい</span>
<span class="card-persona">田村景子（45歳、3代目嫁）</span>
</summary>
<div class="card-content">

義母が病気になってから、代々伝わる家庭のレシピが心配になりました。「お義母さん、この出汁どうやって取るんですか？」と聞いても「だいたいこれくらい」と言われるだけで...

義母の隣に座って料理する姿を動画で撮り、おっしゃることをそのまま[ログ](/inventory/manual/ja/#log)に書き取りました。「唐辛子は粗いもので指3本分」「醤油は少しずつ入れながら」など、そのままの表現で。

義母が亡くなった後、法事のたびにこの記録を開きます。義母の声が聞こえるようです。今度は私が嫁にこのインベントリを渡す番です。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">二人だけの思い出マップを作りたい</span>
<span class="card-persona">中島太郎＆佐藤愛（28歳カップル）</span>
</summary>
<div class="card-content">

付き合って3年目。初めて手をつないだカフェ、初キスした公園、プロポーズしたレストラン...二人だけの場所があるのに、時間が経つと忘れてしまうのではと心配でした。

インベントリに[共有ログ](/inventory/manual/ja/#-共有ログvs単独ログ)モードで「二人の場所」を作りました。デートのたびに写真を撮り、その日の会話や感情を記録。二人で[ログ](/inventory/manual/ja/#log)を残すと思い出が2倍になります。

結婚準備をしながら、この記録をウェディングムービーに入れる予定です。5年後、10年後も私たちの始まりを覚えていられるように。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">愛犬との時間を記録したい</span>
<span class="card-persona">高木彩（27歳、飼い主）</span>
</summary>
<div class="card-content">

9歳のシニア犬「ポチ」と暮らしています。残された時間が限られていることを知っているからこそ、毎日が大切です。

毎日ポチの写真をインベントリに投稿しています。今日何を食べたか、散歩で何を見たか、寝る前にどんな表情をしたか。[ログ](/inventory/manual/ja/#log)に日記のように書いています。

友人に「なんで毎日そんなことするの？」と聞かれました。答えました。「後でポチがいなくなっても、ポチがどれだけ幸せだったか覚えていたいから。」悲しいけれど、この記録が後で慰めになるでしょう。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">父の色あせた写真を蘇らせたい</span>
<span class="card-persona">井上正人（40歳、長男）</span>
</summary>
<div class="card-content">

父の書斎を整理していたら1970年代の写真が出てきました。色が褪せてシワだらけでしたが、若い頃の父の姿が写っていました。

写真をデジタルスキャンしてインベントリに登録しました。それぞれの写真について父に聞き、[ログ](/inventory/manual/ja/#log)にストーリーを記録しました。「これは初任給で買ったスーツだよ」「ここは新婚旅行で行った場所だ」...

父の還暦の時にこの記録で動画を作りました。父は泣きました。「いつこんなに聞いたんだ」と言いながら。一番嬉しいプレゼントでした。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">自分の成長の道のりを記録したい</span>
<span class="card-persona">橋本希望（23歳、就活生）</span>
</summary>
<div class="card-content">

就活中です。面接で落ちるたびに自信がなくなります。

インベントリに「成長日記」を作りました。小さな成果も全て記録します。「今日英会話30分やった」「ポートフォリオのフィードバック反映完了」「面接官が自己紹介良かったと言ってくれた」...

3ヶ月経つと記録が溜まりました。落ちた日には過去の記録を読んで力をもらいます。「私こんなに成長したじゃん。」やっと合格した時、[スタンプ](/inventory/manual/ja/#stamp)をぎゅっと押しました。そのスタンプが一番輝いて見えました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">音楽と共にあった瞬間を残したい</span>
<span class="card-persona">村田隼人（35歳、音楽愛好家）</span>
</summary>
<div class="card-content">

音楽には記憶を呼び起こす力があります。ある曲を聴くとその瞬間に戻れますよね。

インベントリに「人生のOST」を作りました。意味のある瞬間ごとに聴いていた曲を登録し、[ログ](/inventory/manual/ja/#log)にその瞬間を記録。初出勤の日に聴いた曲、失恋後に慰められた曲...

辛い日にはこのリストをかけます。曲ごとに記録されたストーリーを読みながら。私の人生のサウンドトラックがどんどん豊かになっている気がします。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">手紙をデジタルで保管したい</span>
<span class="card-persona">川崎みらい（29歳、教師）</span>
</summary>
<div class="card-content">

10年前、初めて担任を持った時にもらった手紙があります。子供たちが不器用な字で書いた「先生大好き」。紙が古くなっていくのが心苦しかったです。

手紙を一枚ずつ撮影してインベントリに登録しました。[ログ](/inventory/manual/ja/#log)にはその子の思い出を書きました。「この子は最初恥ずかしがり屋だったけど後で一番活発になった」「この手紙は卒業式の日にもらった」...

たまに辛い日にこの記録を開きます。子供たちの気持ちがそのまま伝わってきて、また力が出ます。だから教師をやっているんだなと思います。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">母になっていく過程を記録したい</span>
<span class="card-persona">前田由奈（32歳、妊婦）</span>
</summary>
<div class="card-content">

妊娠20週目です。お腹が大きくなるにつれて毎日が新しいです。初めての胎動、初めてのエコー、赤ちゃんの名前候補...

インベントリに「赤ちゃん待ち日記」を作りました。産婦人科に行くたびにエコー写真を投稿し、[ログ](/inventory/manual/ja/#log)にその日の気持ちを書きます。「今日心音聞いて泣いた」「キック始まった！パパも感じた」...

後で子供が大きくなったらこの記録を見せるつもりです。「お腹にいた時、ママとパパはこうやって待っていたんだよ」と。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">夢に向かう道のりを残したい</span>
<span class="card-persona">武田淳平（26歳、作家志望）</span>
</summary>
<div class="card-content">

いつか小説を出版したいです。まだ無名ですが、毎日少しずつ書いています。

インベントリに「作家への道」を作りました。インスピレーションが浮かんだら[ペーパー](/inventory/manual/ja/#paper)で登録し、執筆日記を[ログ](/inventory/manual/ja/#log)で残します。「今日3ページ書いた」「キャラクターの名前決めた」「結末を変えた」...

いつか私の本が出版されたら、この記録を公開したいです。「最初の一文を書くまで、こんな道のりがありました」と。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">一人暮らしの日常も記録する価値がある</span>
<span class="card-persona">古川俊介（34歳、一人暮らし）</span>
</summary>
<div class="card-content">

一人暮らしだと、一日がただ過ぎていきます。特別なこともなく、誰も覚えてくれません。

日常をインベントリに記録し始めました。今日作った料理、窓から見た夕焼け、一人で見た映画...些細なことを[ログ](/inventory/manual/ja/#log)に残します。

1年経って気づきました。私の日常も十分意味があるということを。一人だけど寂しくないのは、自分を記録しているからかもしれません。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">亡くなった友人を覚えておきたい</span>
<span class="card-persona">清水恵美（30歳、悲しむ人）</span>
</summary>
<div class="card-content">

2年前に突然友人を亡くしました。時間が経つと記憶が薄れてしまうのではないかと怖かったです。

インベントリに友人との思い出を集めました。一緒に撮った写真、LINEのスクショ、友人が書いた手紙...[ログ](/inventory/manual/ja/#log)には一緒に過ごした瞬間を書きました。「この写真は卒業旅行の時」「この日は友人が初任給でご飯おごってくれた」...

命日にこの記録を開きます。友人が「ねぇ、こうやって覚えてくれてありがとう」と言いそうな気がします。記録しておけば、記憶は消えません。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">なくなる前に地元のお店を記録したい</span>
<span class="card-persona">田辺直樹（42歳、地元っ子）</span>
</summary>
<div class="card-content">

再開発が始まって、30年通っていたお店が次々と閉店していきます。定食屋のおばあちゃん、文房具屋のおじさん、クリーニング屋のおばさん...

なくなる前にインベントリに記録し始めました。店の写真、店主のインタビュー、おすすめメニュー...[ログ](/inventory/manual/ja/#log)にはその店と絡んだ私の思い出も書きます。

地元の人に見せたら涙を流していました。「こんなの残してくれてありがとう。」インベントリが私たちの町の歴史になりました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">子供に世界を説明してあげたい</span>
<span class="card-persona">山口世璃奈（37歳、6歳児のママ）</span>
</summary>
<div class="card-content">

子供が「なんで？」と本当によく聞きます。「なんで空は青いの？」「なんで犬は吠えるの？」「なんでママは働くの？」

質問ごとにインベントリに登録し、[ログ](/inventory/manual/ja/#log)に説明した内容を書いています。後で同じ質問をしたら過去の回答を見せて「その時ママこう言ったでしょ？」と言います。

子供も不思議がります。「え、こんなことも聞いたの？」子供の好奇心の歴史が積み上がっています。大きくなってこの記録を見たらどんな気持ちになるでしょう？

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">料理の失敗も成長の記録</span>
<span class="card-persona">佐々木純也（25歳、料理初心者）</span>
</summary>
<div class="card-content">

料理を始めましたが最初は全部失敗でした。焦げたり、しょっぱかったり、硬かったり...

「うまくできたものだけ投稿しよう」と思っていましたが、失敗作も全部インベントリに投稿することにしました。[ログ](/inventory/manual/ja/#log)に「なぜ失敗したか」を分析して書きました。

3ヶ月後、最初に作った失敗カレーと今日のカレーを比較してみました。天と地の差！失敗の記録がむしろ一番誇らしいです。「こんなに成長したんだな。」

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">毎日感謝していることを記録したい</span>
<span class="card-persona">安藤瑞穂（48歳、瞑想実践者）</span>
</summary>
<div class="card-content">

うつ病を経験した後、「感謝日記を書いてみて」とアドバイスを受けました。最初は書くことがないと思っていました。

インベントリに「今日の感謝」を作りました。毎晩些細なことでも3つは書きます。「今日は天気が良かった」「コーヒーが美味しかった」「バスがすぐ来た」...

1年経って365個の感謝が溜まりました。辛い日にこの記録を読むと、世界がそんなに悪くないことを感じます。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">両親の声を残しておきたい</span>
<span class="card-persona">平野宏二（38歳、遠距離生活者）</span>
</summary>
<div class="card-content">

東京で働いていて、田舎にいる両親になかなか会えません。年を取っていく姿を見ると心が痛みます。

電話するたびに（許可を得て）録音してインベントリに保存しています。[ログ](/inventory/manual/ja/#log)にはその日話した内容を書きます。「今日母が近所の花の話をしてくれた」「父が健康に気をつけろと言った」...

会いたくなったら録音を再生します。両親の声を聞くと心が温かくなります。いつかこの声がもっと大切になることを知っているから。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">自分だけのバケットリストを記録したい</span>
<span class="card-persona">杉山寿美恵（30歳、夢見る人）</span>
</summary>
<div class="card-content">

30歳になって「これから何をして生きよう」と真剣に考えるようになりました。

インベントリにバケットリストを作りました。「オーロラを見る」「フルマラソン完走」「本を書く」...達成するたびに写真と[ログ](/inventory/manual/ja/#log)で記録し、[スタンプ](/inventory/manual/ja/#stamp)を押します。

50個中7個達成しました。まだ43個残っていますが焦りません。私の人生には時間があり、この記録がそれを証明してくれるから。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">子供の絵を永久に保管したい</span>
<span class="card-persona">野口有希（35歳、4歳児のママ）</span>
</summary>
<div class="card-content">

子供が描いた絵が溜まっています。全部大切ですが紙が溜まると保管が大変です。

絵ごとに写真を撮ってインベントリに投稿。[ログ](/inventory/manual/ja/#log)には「これ何？」と聞いた答えを書きます。「これはパパ。これは恐竜。」子供の想像力がそのまま残ります。

何年か後にこの記録を見れば、子供の絵の上達も想像力の変化も全て見えるでしょう。紙は捨てても記録は永遠に残ります。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">感性体験</span>
<span class="card-title">海外でホームシックになった時に見る記録</span>
<span class="card-persona">池田民哉（27歳、留学準備生）</span>
</summary>
<div class="card-content">

留学を控えています。2年以上日本に帰れなさそうなので、ホームシック対策を事前にしています。

よく行く場所、好きな食べ物、馴染みの街並み...全部インベントリに残しています。[ログ](/inventory/manual/ja/#log)には「ここであったこと」「これを食べる時の気持ち」を書きます。

後で海外で辛い時、この記録を見るつもりです。日本の香り、味、空気が感じられるように。自分のためのバーチャル日本旅行パッケージです。

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">ストーリー型 - インベントリが変えた日常</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">失くしたカバンを取り戻した話</span>
<span class="card-persona">遠藤俊行（29歳、旅行者）</span>
</summary>
<div class="card-content">

ヨーロッパをバックパッカーとして旅行中でした。パリの地下鉄でカバンを失くしました。パスポート、カード、カメラ...全部入っていました。

幸いインベントリにカバンの中身を全て登録していました。警察署で「カバンに何が入っていましたか？」と聞かれた時、[キーワード](/inventory/manual/ja/#keyword)で検索して完璧なリストを見せました。パスポート番号まで記録されていたんです。

2週間後、カバンが見つかりました！警察が言いました。「こんなに詳しいリストがあったおかげで確認が簡単でした。」インベントリが救世主でした。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">10年ぶりに友人を見つけた話</span>
<span class="card-persona">小野知恵（35歳、探している人）</span>
</summary>
<div class="card-content">

高校の時に転校した友人がいます。その後連絡が途絶えましたが、たまに思い出していました。

インベントリに友人との思い出を整理していました。[ログ](/inventory/manual/ja/#log)に「制服姿の一緒の写真」「友人が好きだった曲」「最後に会った日」などを記録。

ある日、この記録をSNSでシェアしました。「この友人を知っていますか？」驚くことに友人の友人から連絡が来て、10年ぶりに再会しました。インベントリが橋になってくれたんです。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">祖父の遺品から宝物を見つけた話</span>
<span class="card-persona">藤原大悟（33歳、孫）</span>
</summary>
<div class="card-content">

祖父が亡くなった後、遺品を整理しました。古い品物がたくさんありましたが、何が何だか分からなくてそのまま捨てるところでした。

遺品を写真に撮ってインベントリに登録し、父に聞きながら[ログ](/inventory/manual/ja/#log)に記録しました。「これは祖父の最初の時計」「これは戦時中に使っていた物」...

その中で古い書類が出てきました。なんと70年前の独立運動関連の書類だったんです！政府に連絡して祖父の功績が再評価されることになりました。そのまま捨てていたら永遠に埋もれていた話です。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">コレクターとして成長した話</span>
<span class="card-persona">長井志郎（24歳、レゴコレクター）</span>
</summary>
<div class="card-content">

レゴを集める趣味があります。最初はただ好きで買っていましたが、だんだん整理ができなくなりました。何を持っているかも分からなくなって。

全てのレゴセットをインベントリに登録し始めました。購入価格、購入場所、組み立て状況を[ログ](/inventory/manual/ja/#log)に記録し、[キーワード](/inventory/manual/ja/#keyword)にシリーズ名とピース数をタグ付け。

1年後、私のインベントリを見たレゴコミュニティから連絡が来ました。「整理がすごいですね。うちの集まりに来ませんか。」今は500人のコミュニティの運営者です。記録する習慣が趣味を仕事のようにしてくれました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">家族料理大会を作った話</span>
<span class="card-persona">柴田修子（40歳、3人の子供のママ）</span>
</summary>
<div class="card-content">

3人の子供が料理に興味を持ち始めました。そこで毎週「家族料理大会」を開くことにしました。

毎週の料理をインベントリに登録し、家族が[共有ログ](/inventory/manual/ja/#-共有ログvs単独ログ)で投票してレビューを残します。「お兄ちゃんのパスタしょっぱい」「末っ子のサラダきれい」などの正直な評価が溜まります。

1年間の記録を集めて「うちの家族レシピ本」を作りました。自作しておじいちゃんおばあちゃんにプレゼントしたらとても喜んでくれました。インベントリが家族の伝統を作ってくれました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">ビンテージ服ビジネスを始めた話</span>
<span class="card-persona">今井春華（26歳、古着屋オーナー）</span>
</summary>
<div class="card-content">

古着が好きであちこち回って集めていました。いつの間にか部屋一つが埋まりました。

整理のためにインベントリに登録し始めました。各服のブランド、年代、購入場所、状態を[ログ](/inventory/manual/ja/#log)に詳しく記録。[キーワード](/inventory/manual/ja/#keyword)にスタイル、サイズ、シーズンをタグ付け。

友人たちが「これ売る？」と聞き始めました。インベントリ画面をそのまま見せると信頼感があると言うんです。そうやってインスタ販売を始めて、今はオフラインの古着屋まで開きました。整理がビジネスになりました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">引っ越し前に全てを整理した話</span>
<span class="card-persona">西村民規（45歳、海外移住者）</span>
</summary>
<div class="card-content">

海外移住を決心しました。20年住んだ家の全ての物を整理しなければなりませんでした。

家の中の全てをインベントリに登録しました。捨てるもの、売るもの、持っていくもの、プレゼントするものに分類して[キーワード](/inventory/manual/ja/#keyword)でタグ付け。思い出のあるものは[ログ](/inventory/manual/ja/#log)にストーリーを残しました。

3ヶ月かかる整理を2週間で終えました。中古販売もスムーズに進み、思い出のあるものは写真で残して気持ちよく手放せました。物は捨てても記録は持っていきます。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">弟に譲った最初の楽器の話</span>
<span class="card-persona">秋山詠音（22歳、音大生）</span>
</summary>
<div class="card-content">

最初のバイオリンを高3の弟に譲ることにしました。10年間一緒だった楽器なので寂しかったです。

インベントリにこのバイオリンの全てのストーリーを残しました。最初に買った日、最初の演奏会、修理に出した日々...[ログ](/inventory/manual/ja/#log)に全ての瞬間を記録しました。

弟に楽器と一緒にインベントリの記録を[転送](/inventory/manual/ja/#-転送機能)しました。「この楽器がどんな曲を演奏してきたか全部書いてあるよ。」弟は感動して泣いていました。楽器だけでなくその歴史を譲ったんです。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">保護犬を引き取った後の記録</span>
<span class="card-persona">大西聖二（30歳、飼い主）</span>
</summary>
<div class="card-content">

シェルターから保護犬「ルナ」を引き取りました。過去が分からない子なので、もっとちゃんと記録してあげたいと思いました。

引き取り初日からルナの全てをインベントリに記録しました。初めて家に来た日、初めてしっぽを振った日、初めて昼寝した場所...[ログ](/inventory/manual/ja/#log)に毎日日記を書きます。

1年経った時、この記録を動画にして「ルナの最初の1年」というタイトルで作りました。コミュニティでシェアしたら多くの人が感動し、保護犬の引き取りを決心した人もいました。記録がもう一つの命を救ったんです。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">最も古い遺品の歴史</span>
<span class="card-persona">宮本治勳（55歳、時計コレクター）</span>
</summary>
<div class="card-content">

父から受け継いだ1960年代のオメガの時計があります。家宝のように大切ですが、この時計の歴史を知っているのはもう私だけです。

時計をインベントリに登録し、父が話してくれた全てのストーリーを[ログ](/inventory/manual/ja/#log)に記録しました。「初任給で買った」「お母さんと出会った日に付けていた」「兄が生まれた時に時間を確認した」...

息子にこの時計を渡す時、インベントリも一緒に[転送](/inventory/manual/ja/#-転送機能)するつもりです。物の価値は歴史から来るから。インベントリが3代をつなげてくれます。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">起業アイデアになった記録</span>
<span class="card-persona">権藤希（28歳、起業家志望）</span>
</summary>
<div class="card-content">

日常で不便なことを見つけるたびにインベントリにメモしていました。「こういうのがあったらいいな」というアイデアを。

3年間溜まったアイデアは200個。[キーワード](/inventory/manual/ja/#keyword)で整理するとパターンが見えました。「一人暮らし」「ペット」「健康」関連のアイデアが多かったです。

その中の一つを実行して、一人暮らし用ペット自動給餌器のスタートアップを始めました。投資家に3年間の記録を見せたら「これだけ深く考えていたんですね」と投資を決定してくれました。記録が信頼になります。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">卒業プロジェクトの最初から最後まで</span>
<span class="card-persona">松井優奈（23歳、デザイン科学生）</span>
</summary>
<div class="card-content">

1年間の卒業プロジェクトを始めました。アイデアから成果物まで全ての過程をインベントリに記録することにしました。

毎日スケッチ、プロトタイプ、フィードバック、修正事項を[ログ](/inventory/manual/ja/#log)に記録しました。失敗した試みも全て残しました。なぜ失敗したか、何を学んだかまで。

卒業展示でこの記録を一緒に展示しました。審査員が「過程が見えるからもっと感動的だ」と言いました。結果と同じくらい過程が大切だということを、インベントリが証明してくれました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">マラソン完走までの道のり</span>
<span class="card-persona">竹内翔太（38歳、ランニング初心者）</span>
</summary>
<div class="card-content">

フルマラソンがバケットリストにありました。運動を全くしていなかった私に果たしてできるのか...

1kmも走れなかった初日からインベントリに記録し始めました。毎日走った距離、時間、体調を[ログ](/inventory/manual/ja/#log)に残します。トレーニングスケジュールは[日付アラーム](/inventory/manual/ja/#alarm)で管理。

1年後、マラソン完走！ゴールでこの記録をずっと見返しました。1km → 5km → 10km → ハーフ → フル...涙が出ました。「1kmも辛かった私がここまで来たんだ。」記録は嘘をつきません。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">両親の金婚式プレゼントプロジェクト</span>
<span class="card-persona">白石志保（32歳、末っ子）</span>
</summary>
<div class="card-content">

両親の結婚50周年を控えて、兄弟で特別なプレゼントを準備しました。

それぞれ両親との思い出の写真、動画、ストーリーをインベントリに集めました。[共有ログ](/inventory/manual/ja/#-共有ログvs単独ログ)モードで4人が一緒に記録。幼い頃の写真から最近の家族旅行まで。

金婚式の日、この記録を編集して動画にして見せました。50年の時間が一つの画面に収まったんです。両親二人とも泣きました。今でも最高のプレゼントだったと言ってくれます。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">カフェ開業前の1000杯記録</span>
<span class="card-persona">高野民輔（34歳、カフェオーナー志望）</span>
</summary>
<div class="card-content">

カフェを開きたいと思っていました。開業前に「1000杯飲むプロジェクト」を始めました。

行くカフェごとにコーヒーをインベントリに登録しました。豆、ロースト、抽出方法、雰囲気、価格...[ログ](/inventory/manual/ja/#log)に詳しく記録し、[キーワード](/inventory/manual/ja/#keyword)で分類。

2年間で1000杯を記録しながら好みができました。このデータを分析してメニューとコンセプトを決めました。オープン後、お客さんにこの記録を見せると「本気ですね」と言ってくれます。1000杯の真心がカフェに込められています。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">人生を変えた習慣記録</span>
<span class="card-persona">中田玄佑（27歳、自己啓発家）</span>
</summary>
<div class="card-content">

意志が弱くて新年の目標を一度も守れたことがありませんでした。

今年は違うやり方にしました。毎日の習慣—朝6時起床、読書30分、運動1時間—をインベントリに登録し、守るたびに[スタンプ](/inventory/manual/ja/#stamp)を押すことに。

最初は空欄が多かったです。でも埋まったスタンプを見ると欲が出ました。6ヶ月経つと習慣になりました。インベントリを開くと自分がどれだけ変わったか一目で分かります。記録が意志になります。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">陶器修復プロジェクト</span>
<span class="card-persona">原田美穂（60歳、伝統工芸家）</span>
</summary>
<div class="card-content">

割れた青磁を修復する仕事をしています。何百もの破片を合わせる作業なので記録が命です。

各破片をインベントリに登録し、合わせる過程を[ログ](/inventory/manual/ja/#log)に記録します。「今日23番と47番が合った」「この部分は欠けた破片がある」...

3年かけた修復が終わった時、その全ての過程がインベントリに残っていました。美術館が「修復過程の記録も一緒に展示したい」と言ってくれました。完成品と同じくらい過程が芸術になったんです。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">サンティアゴ巡礼の800km</span>
<span class="card-persona">趙民洙（45歳、巡礼者）</span>
</summary>
<div class="card-content">

人生の転換点でサンティアゴ巡礼の道を歩くことにしました。

毎日歩いた距離、出会った人、感じた感情をインベントリに記録しました。[ログ](/inventory/manual/ja/#log)に日記を書き、スタンプをもらうたびに[スタンプ](/inventory/manual/ja/#stamp)を押しました。800kmの旅がそのまま残りました。

日本に帰ってこの記録を本にしました。自費出版でしたが反応が良くて正式出版されました。インベントリがなければこの本もなかったでしょう。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">家族全員の健康記録</span>
<span class="card-persona">鄭恩淑（52歳、家族の健康守護者）</span>
</summary>
<div class="card-content">

家族4人の健康を私が管理しています。病院に行くたびに記録が必要なのですが、バラバラで大変でした。

インベントリに家族別に[パーティション](/inventory/manual/ja/#partition)を作成。病院訪問、検査結果、服用薬を全て[ログ](/inventory/manual/ja/#log)に記録。次の検診日は[日付アラーム](/inventory/manual/ja/#alarm)で管理。

お医者さんも驚きます。「こんなに体系的な患者の付き添いは初めてです。」家族の健康10年の記録が蓄積されました。インベントリがうちの家族のホームドクターみたいです。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">ストーリー</span>
<span class="card-title">結婚式準備がスムーズになった話</span>
<span class="card-persona">金智慧（29歳、花嫁）</span>
</summary>
<div class="card-content">

結婚式準備は圧倒的でした。会場、ケータリング、フラワー、招待状...何百もの決定をしなければなりません。

全ての業者とオプションをインベントリに登録。カテゴリ別に[パーティション](/inventory/manual/ja/#partition)を作成。見積もり、長所短所、訪問メモを[ログ](/inventory/manual/ja/#log)に。締め切りは[日付アラーム](/inventory/manual/ja/#alarm)で管理。

結婚式は完璧でした。何も忘れなかったから。ウェディングプランナーにも「どうやってこんなに整理しているんですか」と聞かれました。今は婚約中の友人にインベントリのテンプレートをシェアしています！

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">クリエイティブな活用 - こんな使い方もできます</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">夢日記を記録しています</span>
<span class="card-persona">李秀民（24歳、心理学科学生）</span>
</summary>
<div class="card-content">

夢を分析すると無意識が分かると言われているので、毎朝覚えている夢をインベントリに記録しています。

夢のシーンを簡単にスケッチして画像でアップロードし、[ログ](/inventory/manual/ja/#log)に詳細を書きます。[キーワード](/inventory/manual/ja/#keyword)に「水」「落下」「試験」などのテーマをタグ付け。

6ヶ月の記録を分析するとパターンが見えました。ストレスを受けると「落下」の夢をよく見ていました。自分の無意識と対話する方法を見つけました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">星空観測の記録</span>
<span class="card-persona">金空（31歳、アマチュア天文家）</span>
</summary>
<div class="card-content">

夜空の観測が趣味です。いつどの星を見たか記録したかったのです。

観測するたびにインベントリに登録。日付、場所、観測対象（星座、惑星、星雲）、天気、使用機材...[ログ](/inventory/manual/ja/#log)に書いて写真も添付。

流星群シーズンには[日付アラーム](/inventory/manual/ja/#alarm)で事前に通知を受けます。3年分の観測記録が溜まると「いつどこで見ればいいか」の経験データができました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">香水ノートを作っています</span>
<span class="card-persona">朴秀珍（29歳、香水マニア）</span>
</summary>
<div class="card-content">

香水をコレクションしていますが、各香水の特徴を覚えるのが難しかったです。

香水ごとにインベントリに登録し、ノート（トップ、ミドル、ベース）、持続力、残り香、合う季節/シチュエーションを[ログ](/inventory/manual/ja/#log)に記録。[キーワード](/inventory/manual/ja/#keyword)に「ウッディ」「フローラル」「デート用」などタグ付け。

友人が「どの香水おすすめ？」と聞いたら検索してすぐ教えられます。自分だけの香水百科事典ができました！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">毎日空の写真を撮っています</span>
<span class="card-persona">崔有里（26歳、写真家）</span>
</summary>
<div class="card-content">

1年間毎日同じ場所から空の写真を撮るプロジェクトを始めました。

毎日空の写真をインベントリにアップロードし、天気、気分、その日あったことを[ログ](/inventory/manual/ja/#log)に記録。撮影日は[開始日](/inventory/manual/ja/#dates)で管理。

365枚が揃ったらタイムラプス動画にしました。季節が変わる空と一緒に私の1年も映っています。インスタに投稿したら10万再生を超えました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">TRPGキャラクター管理</span>
<span class="card-persona">張民赫（22歳、ゲーマー）</span>
</summary>
<div class="card-content">

テーブルトークRPGを楽しんでいますが、キャラクターシートとアイテム管理が複雑です。

キャラクターと所持アイテムをインベントリに登録。セッションごとに起きたこと、レベルアップ、新スキルを[ログ](/inventory/manual/ja/#log)に記録。[パーティション](/inventory/manual/ja/#partition)でキャンペーン別に分類。

パーティーメンバーと[共有ログ](/inventory/manual/ja/#-共有ログvs単独ログ)で連携すればお互いのキャラクター情報も見られます。ゲームマスターも「進行しやすい」と喜んでいます！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">外国語単語帳として活用</span>
<span class="card-persona">李貞雅（28歳、日本語学習者）</span>
</summary>
<div class="card-content">

日本語を勉強中ですが、単語帳アプリが気に入りませんでした。自分の方法で整理したかったのです。

分からない単語をインベントリに登録し、[ログ](/inventory/manual/ja/#log)に例文、ニュアンス説明を書きます。[キーワード](/inventory/manual/ja/#keyword)に「N1」「ビジネス」「ドラマで聞いた」などタグ付け。

覚えた単語は[スタンプ](/inventory/manual/ja/#stamp)を押します。スタンプがないものだけ復習すればいいので効率的です。JLPT N1合格しました！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">カプセルワードローブ管理</span>
<span class="card-persona">金瑞妍（27歳、ミニマリスト）</span>
</summary>
<div class="card-content">

33着で3ヶ月過ごす「カプセルワードローブ」に挑戦しました。クローゼットを空にして本当に必要な服だけ残す！

選んだ33着をインベントリに登録し、着るたびに[ログ](/inventory/manual/ja/#log)にコーデを記録。3ヶ月後にログ分析すると本当によく着る服、着ない服が見えます。

着なかった服は思い切って処分し、空いた場所には本当に必要なものだけ入れます。インベントリのおかげでミニマルライフを維持できています。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">美術館キュレーティング</span>
<span class="card-persona">洪叡珍（34歳、美術愛好家）</span>
</summary>
<div class="card-content">

美術館によく行きますが、見た作品を覚えていませんでした。

行く展示ごとに感動した作品をインベントリに登録。作家、年代、技法を[ログ](/inventory/manual/ja/#log)に書き、「なぜ良かったか」も一緒に記録。[キーワード](/inventory/manual/ja/#keyword)にジャンル、時代、感情をタグ付け。

5年分の記録を見ると私の好みが見えます。印象派、抽象画、ブルートーン...これからどの展示に行くか選ぶ時にこのデータが役立ちます。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">名刺管理をスマートに</span>
<span class="card-persona">朴鐘民（42歳、営業担当）</span>
</summary>
<div class="card-content">

名刺が何百枚も溜まりましたが、誰が誰だか覚えていません。

名刺をもらったらすぐ写真を撮ってインベントリに登録。[ログ](/inventory/manual/ja/#log)に「どこで会ったか」「何を話したか」を書きます。[キーワード](/inventory/manual/ja/#keyword)に業界、関心事、協業可能性をタグ付け。

「前に会ったIT系の人」で検索すればすぐ見つかります。また連絡する時「あの時話していた...」と言うと相手が感動します！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">ボードゲームコレクション管理</span>
<span class="card-persona">李在元（29歳、ボードゲームマニア）</span>
</summary>
<div class="card-content">

ボードゲームを50個以上持っていますが、何があるか覚えていないし、友人が来ると何をするか迷います。

全てのゲームを登録し、[キーワード](/inventory/manual/ja/#keyword)にプレイ人数、時間、ジャンル、難易度をタグ付け。[ログ](/inventory/manual/ja/#log)にはプレイ後記も書きます。

友人が来たら「今日4人、1時間、軽いゲーム」で検索してすぐおすすめ。「ボードゲームソムリエ」と呼ばれています！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">肌コンディション日記</span>
<span class="card-persona">孫民智（25歳、敏感肌）</span>
</summary>
<div class="card-content">

肌が敏感で、食べ物や化粧品ですぐトラブルが出ます。原因を探したかったのです。

毎日肌の写真をインベントリにアップロード。その日食べたもの、使った化粧品、ストレスレベル、睡眠時間を[ログ](/inventory/manual/ja/#log)に記録。

3ヶ月のデータ分析でパターンが見えました。乳製品を食べた翌日にトラブル！皮膚科の先生もこの記録を見て「だから記録が大事なんです」とおっしゃいました。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">キャンプ道具チェックリスト</span>
<span class="card-persona">鄭賢基（36歳、キャンパー）</span>
</summary>
<div class="card-content">

キャンプに行くたびに何か忘れます。ランタンなしで行ったことも、箸なしで行ったことも...

全てのキャンプ道具をインベントリに登録し、キャンプタイプ別に[パーティション](/inventory/manual/ja/#partition)を作成。「1泊」「バックパッキング」「グランピング」など。各パーティションに必要な道具だけ入れます。

キャンプ前に該当パーティションを開いてチェック。もう忘れ物なし！[ログ](/inventory/manual/ja/#log)に「これは次は持っていかなくていい」などのメモも残せます。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">繰り返す頭痛のパターン分析</span>
<span class="card-persona">柳美羅（33歳、偏頭痛持ち）</span>
</summary>
<div class="card-content">

偏頭痛がよく来るので原因を探したかったです。お医者さんも「日記をつけてみて」とおっしゃいました。

頭痛が来るたびにインベントリに記録。強度、場所、持続時間を[ログ](/inventory/manual/ja/#log)に書き、前日の行動（睡眠、食事、運動、カフェイン）も一緒に記録。

6ヶ月のデータをお医者さんに見せたらパターンを見つけてくれました。睡眠不足+カフェインの組み合わせがトリガーでした。今はだいぶ良くなりました！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">人生映画100選キュレーション</span>
<span class="card-persona">姜東賢（28歳、シネフィル）</span>
</summary>
<div class="card-content">

「人生映画は何？」という質問にちゃんと答えたかったです。

見た映画ごとにインベントリに登録し、5点満点で[ログ](/inventory/manual/ja/#log)に評価と感想を書きます。[キーワード](/inventory/manual/ja/#keyword)にジャンル、監督、雰囲気をタグ付け。

5点だけフィルタリングすると本当の私の人生映画リストが出てきました。100個選んで「私の人生映画100」というリストを作りました。友人にシェアしたら「君の趣味はっきりしてるね」と言われます！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">DIYプロジェクト記録</span>
<span class="card-persona">白俊瑞（32歳、メーカー）</span>
</summary>
<div class="card-content">

家で家具を作ったり、照明を制作したり...DIYを楽しんでいますが、後で同じものを作る時に覚えていません。

プロジェクトごとにインベントリに登録。使った材料、道具、寸法、工程写真を[ログ](/inventory/manual/ja/#log)に詳しく記録。失敗した試みもなぜ失敗したか書きます。

友人が「これ作りたい」と言ったらインベントリを見せて教えます。自分だけのDIYマニュアルが溜まっています！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">読書会の記録</span>
<span class="card-persona">韓瑞潤（30歳、ブッククラブリーダー）</span>
</summary>
<div class="card-content">

月例読書会を率いていますが、過去に何を読んでどんな話し合いをしたか整理できていませんでした。

読んだ本ごとにインベントリに登録し、[共有ログ](/inventory/manual/ja/#-共有ログvs単独ログ)でメンバーと連携。各自の感想を[ログ](/inventory/manual/ja/#log)に残し、集まりの日の討論内容も記録。

2年間読んだ本24冊の記録が溜まりました。新しいメンバーが来たら「私たちはこんな本を読んできました」と見せられます。会の歴史になりました！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">水槽管理日誌</span>
<span class="card-persona">趙民宰（27歳、アクアリスト）</span>
</summary>
<div class="card-content">

熱帯魚を飼っていますが、水管理が思ったより複雑です。いつ水換えしたか、どんな薬品入れたか...

インベントリに水槽を登録。水換え日、水温、pH、魚の状態を[ログ](/inventory/manual/ja/#log)に記録。魚が病気になったら症状と処置も書きます。

パターン分析で「7日ごとに30%水換え」がうちの水槽に最適だと分かりました。魚たちが健康になりました！

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">レンタル服管理</span>
<span class="card-persona">林修亜（26歳、ファッションレンタル利用者）</span>
</summary>
<div class="card-content">

服のレンタルサービスを利用していますが、何を借りたか、いつ返却するか混乱します。

借りた服をインベントリに登録し、返却日を[有効期限](/inventory/manual/ja/#dates)に設定。3日前に通知が来て返却準備ができます。

延滞料一度も払っていません！[ログ](/inventory/manual/ja/#log)に「これは良かった/イマイチだった」も記録して次に何を借りるか参考にします。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">瞑想修行の記録</span>
<span class="card-persona">全秀彬（35歳、瞑想修行者）</span>
</summary>
<div class="card-content">

毎日瞑想していますが、続けているか実感がありませんでした。

瞑想するたびにインベントリに記録。時間、方法（呼吸/歩行/ボディスキャン）、集中度を[ログ](/inventory/manual/ja/#log)に書いて[スタンプ](/inventory/manual/ja/#stamp)を押します。

100日連続スタンプが押せた時の達成感！最初は5分も辛かったのに今は30分も余裕です。成長が見えるともっとモチベーションが上がります。

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">クリエイティブ</span>
<span class="card-title">面接準備ノート</span>
<span class="card-persona">高恩彩（24歳、就活生）</span>
</summary>
<div class="card-content">

就活中で、面接の質問と自分の回答を整理したかったです。

予想質問ごとにインベントリに登録。[ログ](/inventory/manual/ja/#log)に回答スクリプト、実際の面接で受けた質問、雰囲気を記録。[キーワード](/inventory/manual/ja/#keyword)に企業名、職種、質問タイプをタグ付け。

3次面接まで行った時「1次で何て言ったっけ？」とすぐ探せました。一貫した回答で信頼感を与えて、合格しました！

</div>
</details>

</div>
</div>

---

<div class="share-section">
<h3>あなたのインベントリ活用法も教えてください</h3>
<p>どのように使っていますか？新しいアイデアをお待ちしています。</p>
<a href="/inventory/suggest/ja/" class="share-btn">活用法を共有する</a>
</div>
