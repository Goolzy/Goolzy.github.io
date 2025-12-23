---
layout: inventory
title: 활용방법
permalink: /inventory/usecases/
lang: ko
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
  content: '펼쳐보기 ↓';
  font-size: 0.75rem;
  color: var(--purple-bright);
  opacity: 0.7;
  margin-top: 0.5rem;
}

.usecase-card[open] summary::after {
  content: '접기 ↑';
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

# 인벤토리 활용방법

100가지 다양한 활용 사례를 통해 인벤토리의 가능성을 발견해보세요.

---

<div class="category-section">
<h2 class="category-title">문제 해결형 - 일상의 고민을 해결하다</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">냉장고 속 재료가 자꾸 상해요</span>
<span class="card-persona">김지영 (32세, 맞벌이 주부)</span>
</summary>
<div class="card-content">

**고민**: 바쁜 일상에 냉장고 속 식재료 유통기한을 놓쳐 버리는 일이 잦았어요. 특히 두부, 우유 같은 건 며칠 지나면 상해버리는데...

**해결**: 식재료마다 [종이](/inventory/manual/#paper)로 아이템을 만들고 [유효기간](/inventory/manual/#dates)을 설정했어요. 이제 유통기한 3일 전에 알림이 와서 미리미리 요리하거나 냉동 보관합니다.

**결과**: 음식물 쓰레기가 80% 줄었어요. 한 달 장보기 비용도 15만원이나 아꼈죠!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">정기 구독이 너무 많아서 관리가 안 돼요</span>
<span class="card-persona">박현우 (28세, IT 개발자)</span>
</summary>
<div class="card-content">

**고민**: 넷플릭스, 유튜브 프리미엄, 노션, 깃허브... 구독 서비스가 10개가 넘는데 갱신일도 다 다르고, 안 쓰는 것도 계속 결제되고 있었어요.

**해결**: 모든 구독 서비스를 인벤토리에 등록하고 [날짜 알람](/inventory/manual/#alarm)으로 갱신일 7일 전 알림을 설정했어요. [키워드](/inventory/manual/#keyword)에 월 요금도 적어두니 한눈에 보여요.

**결과**: 안 쓰는 구독 3개를 해지해서 월 4만원을 절약했어요. 이제 갱신일에 당황할 일도 없죠.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">아이 예방접종 일정을 자꾸 놓쳐요</span>
<span class="card-persona">이수진 (35세, 워킹맘)</span>
</summary>
<div class="card-content">

**고민**: 아이가 둘인데 예방접종 일정이 다 달라서 헷갈려요. 보건소에서 연락 오면 이미 늦은 경우도 많았죠.

**해결**: 아이별로 [파티션](/inventory/manual/#partition)을 나누고, 각 접종 일정을 [날짜 알람](/inventory/manual/#alarm)으로 관리해요. 접종 완료하면 [로그](/inventory/manual/#log)에 기록합니다.

**결과**: 접종 일정을 한 번도 놓치지 않게 됐어요. 병원 가기 전에 미리 준비도 할 수 있고요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">이사할 때마다 짐 정리가 막막해요</span>
<span class="card-persona">정민호 (27세, 대학원생)</span>
</summary>
<div class="card-content">

**고민**: 자취방을 자주 옮기는데, 매번 짐 싸고 풀 때 뭐가 어디 있는지 모르겠어요. 박스 번호 적어도 결국 다 뒤져봐야 했죠.

**해결**: 박스 포장 전에 각 박스 내용물을 사진 찍어 인벤토리에 등록했어요. [키워드](/inventory/manual/#keyword)에 "박스1", "주방" 같이 태그하니 이사 후 바로 찾을 수 있어요.

**결과**: 최근 이사에서 정리 시간이 절반으로 줄었어요. "가위 어디 있지?" 하고 검색하면 바로 나오니까요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">영수증 보관이 너무 귀찮아요</span>
<span class="card-persona">최은서 (40세, 자영업자)</span>
</summary>
<div class="card-content">

**고민**: 사업 경비 처리를 위해 영수증을 모아야 하는데, 종이로 보관하면 바래지고 잃어버리기 일쑤예요. 연말정산 때마다 스트레스...

**해결**: 결제 직후 바로 영수증을 촬영해서 인벤토리에 등록해요. [키워드](/inventory/manual/#keyword)에 "경비", "2024", "식비" 등을 달아두면 나중에 카테고리별로 바로 검색 가능해요.

**결과**: 종이 영수증을 거의 안 모아도 되고, 연말정산 할 때 필요한 영수증을 검색으로 바로 찾습니다. 세무사님도 편하다고 하세요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">필름 카메라 사진 정리가 안 돼요</span>
<span class="card-persona">한소연 (26세, 사진 동호회원)</span>
</summary>
<div class="card-content">

**고민**: 필름 카메라로 찍은 사진을 현상하면 언제 어디서 찍었는지 기억이 안 나요. 인화 사진만 쌓이고 정리가 안 됐죠.

**해결**: 현상할 때마다 대표 컷을 찍어 인벤토리에 등록하고, [키워드](/inventory/manual/#keyword)에 촬영 장소와 날짜, 필름 종류를 기록해요. [로그](/inventory/manual/#log)에는 현상소 정보도 남겨요.

**결과**: 나만의 필름 아카이브가 완성됐어요. 2년 전 제주도 여행 사진도 바로 찾을 수 있게 됐죠.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">세탁 관리가 어려워요</span>
<span class="card-persona">김태현 (29세, 패션 블로거)</span>
</summary>
<div class="card-content">

**고민**: 옷마다 세탁 방법이 달라서 드라이클리닝 맡긴 것도 까먹고, 니트는 손세탁해야 하는데 세탁기에 넣기도 하고...

**해결**: 관리가 필요한 의류마다 인벤토리에 등록하고 [로그](/inventory/manual/#log)에 세탁 방법을 적어뒀어요. 드라이클리닝 맡긴 날짜도 기록해서 찾아올 시기를 [날짜 알람](/inventory/manual/#alarm)으로 알려줘요.

**결과**: 옷 손상이 확 줄었어요. 드라이클리닝 맡긴 거 까먹어서 벌금 내는 일도 없어졌고요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">복용 중인 영양제가 너무 많아요</span>
<span class="card-persona">박미영 (55세, 갱년기 여성)</span>
</summary>
<div class="card-content">

**고민**: 의사 선생님이 추천해주신 영양제만 5종류인데, 아침/저녁 복용 구분도 헷갈리고 재구매 시기도 놓쳐요.

**해결**: 영양제마다 [종이](/inventory/manual/#paper)로 등록하고 복용법은 [로그](/inventory/manual/#log)에, 소진 예상일은 [유효기간](/inventory/manual/#dates)으로 관리해요.

**결과**: 복용 스케줄을 정확히 지키게 됐어요. 영양제 떨어지기 전에 알림이 와서 미리 주문합니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">보증기간 지나서 수리비 폭탄 맞았어요</span>
<span class="card-persona">이준혁 (34세, 신혼부부)</span>
</summary>
<div class="card-content">

**고민**: 에어컨이 고장 났는데 보증기간이 한 달 전에 끝났다고 하더라고요. 보증서를 어디 뒀는지도 모르겠고, 수리비로 30만원 날렸어요.

**해결**: 모든 가전제품을 인벤토리에 등록하고 보증서 사진을 첨부했어요. [유효기간](/inventory/manual/#dates)에 보증 만료일을 넣어 한 달 전에 알림 오도록 설정했어요.

**결과**: 이제 보증 만료 전에 점검 신청하거나 연장 여부를 검토해요. 세탁기도 무상 수리 받았습니다!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">선물 받은 기프티콘을 자꾸 까먹어요</span>
<span class="card-persona">정유진 (25세, 대학생)</span>
</summary>
<div class="card-content">

**고민**: 생일이나 기념일에 받은 기프티콘들이 카카오톡 어딘가에 묻혀 있다가 유효기간 지나서 못 쓰는 경우가 많았어요.

**해결**: 기프티콘 받으면 바로 캡처해서 인벤토리에 등록하고 [유효기간](/inventory/manual/#dates)을 설정해요. 만료 일주일 전에 알림이 와요.

**결과**: 3만원짜리 스타벅스 기프티콘을 살렸어요! 이제 받은 선물을 제대로 활용합니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">자동차 정비 이력 관리가 안 돼요</span>
<span class="card-persona">홍성민 (42세, 영업직)</span>
</summary>
<div class="card-content">

**고민**: 차량 정비를 어디서 언제 받았는지 기억이 안 나요. 정비소마다 기록이 다르고, 엔진오일 교환 주기도 놓치곤 했어요.

**해결**: 차량을 인벤토리에 등록하고 정비받을 때마다 [로그](/inventory/manual/#log)에 기록해요. 다음 정비 예정일은 [날짜 알람](/inventory/manual/#alarm)으로 설정합니다.

**결과**: 완벽한 차량 정비 이력이 쌓였어요. 중고차로 팔 때 이력을 보여주니 더 좋은 값을 받았습니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">중요한 서류가 어디 있는지 모르겠어요</span>
<span class="card-persona">김민지 (38세, 프리랜서)</span>
</summary>
<div class="card-content">

**고민**: 계약서, 보험증권, 등기권리증... 중요 서류들이 여기저기 흩어져 있어요. 필요할 때 못 찾아서 재발급받은 적도 있어요.

**해결**: 모든 중요 서류를 촬영해서 인벤토리에 등록하고, [문서 잠금](/inventory/manual/#lock)으로 보안도 챙겼어요. [키워드](/inventory/manual/#keyword)에 서류 종류와 보관 위치를 적어둡니다.

**결과**: "등기권리증 어디 있지?" → 검색 → 보관 위치 확인. 30초면 찾아요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">책을 사놓고 안 읽어요</span>
<span class="card-persona">윤서연 (30세, 마케터)</span>
</summary>
<div class="card-content">

**고민**: 서점에서 책을 사면 의욕이 넘치는데, 집에 오면 읽지 않고 쌓아두기만 해요. 같은 책을 두 번 산 적도 있어요.

**해결**: 책을 사면 바로 인벤토리에 등록해요. 읽기 시작하면 [개시일자](/inventory/manual/#dates)를 설정하고, 다 읽으면 [로그](/inventory/manual/#log)에 완료 기록을 남겨요. 안 읽은 책 목록이 한눈에 보여요.

**결과**: 압도감 대신 동기부여가 생겼어요. 올해 들어 12권을 읽었는데, 작년 한 해보다 많아요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">식물을 자꾸 죽여요</span>
<span class="card-persona">장하늘 (24세, 사회초년생)</span>
</summary>
<div class="card-content">

**고민**: 플랜테리어 하고 싶어서 화분을 샀는데, 물 주는 주기를 까먹거나 너무 자주 줘서 죽여버려요.

**해결**: 식물마다 인벤토리에 등록하고 [날짜 알람](/inventory/manual/#alarm)으로 물 주기 알림을 설정했어요. [로그](/inventory/manual/#log)에 분갈이, 비료 준 날짜도 기록해요.

**결과**: 몬스테라가 6개월째 살아있어요! 새 잎도 3개나 났답니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">비밀번호를 자꾸 까먹어요</span>
<span class="card-persona">오민수 (50세, 공무원)</span>
</summary>
<div class="card-content">

**고민**: 사이트마다 비밀번호가 다른데 기억이 안 나요. 포스트잇에 적으면 보안이 걱정되고...

**해결**: 계정 정보를 인벤토리에 등록하고 [문서 잠금](/inventory/manual/#lock)으로 보호해요. 비밀번호 힌트만 적어두고, 실제 비밀번호는 패턴으로 조합하는 방식이에요.

**결과**: 더 이상 "비밀번호 찾기" 안 해요. 보안도 유지하면서 편하게 관리합니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">가족 건강검진 일정을 놓쳐요</span>
<span class="card-persona">이영희 (58세, 주부)</span>
</summary>
<div class="card-content">

**고민**: 남편, 시어머니, 본인... 각자 건강검진 시기가 다른데 국민건강보험 무료검진 기간을 놓쳐서 아깝게 자비로 받은 적이 있어요.

**해결**: 가족 각자의 검진 일정을 인벤토리에 등록하고 [날짜 알람](/inventory/manual/#alarm)으로 검진 기간 시작 시 알림이 오도록 했어요.

**결과**: 온 가족 무료검진을 한 번도 안 놓쳤어요. 건강관리비 연간 50만원 이상 절약!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">반려동물 병원 기록이 흩어져 있어요</span>
<span class="card-persona">강민아 (31세, 고양이 집사)</span>
</summary>
<div class="card-content">

**고민**: 고양이 두 마리를 키우는데 접종 일정, 병원 기록이 다 제각각이에요. 새 병원 가면 "이전 기록 있으세요?" 물어보는데 못 찾아서 당황스러워요.

**해결**: 고양이별로 [파티션](/inventory/manual/#partition)을 만들고, 병원 방문마다 [로그](/inventory/manual/#log)에 기록해요. 다음 접종일은 [날짜 알람](/inventory/manual/#alarm)으로 관리합니다.

**결과**: 수의사 선생님도 체계적이라고 칭찬해주셨어요. 응급 상황에도 기록을 바로 보여줄 수 있어서 안심이에요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">와인 추천을 기억 못해요</span>
<span class="card-persona">조현수 (36세, 와인 입문자)</span>
</summary>
<div class="card-content">

**고민**: 와인바에서 맛있게 마신 와인 이름을 까먹어요. 마트에 가면 "저번에 뭐 마셨더라..." 하며 결국 아무거나 집어요.

**해결**: 와인 마실 때마다 라벨을 찍어 인벤토리에 등록해요. [로그](/inventory/manual/#log)에 맛 평가와 페어링, 가격도 기록하고 [키워드](/inventory/manual/#keyword)에 "레드", "데일리", "선물용" 등 태그해요.

**결과**: 나만의 와인 DB가 완성됐어요. "지난번 기념일에 뭐 마셨지?" 바로 찾을 수 있어요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">운동 루틴을 유지 못해요</span>
<span class="card-persona">신재훈 (29세, 직장인)</span>
</summary>
<div class="card-content">

**고민**: 헬스장 3개월 등록하면 한 달만 열심히 가고 끊어요. 동기부여가 안 되고, 기록도 안 남기니 발전이 없어요.

**해결**: 운동 종목별로 인벤토리에 등록하고 운동할 때마다 [로그](/inventory/manual/#log)에 무게/횟수를 기록해요. 연속 기록이 쌓이는 걸 보며 성취감을 느껴요.

**결과**: 벤치프레스 40kg에서 70kg까지 발전한 과정이 다 기록돼 있어요. 기록 보면 동기부여가 확 돼요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">문제 해결</span>
<span class="card-title">회의에서 한 약속을 까먹어요</span>
<span class="card-persona">박서윤 (33세, 팀장)</span>
</summary>
<div class="card-content">

**고민**: 회의 중에 "제가 다음 주까지 자료 정리할게요"라고 했는데 까먹어요. 갑자기 "그거 됐어요?" 물으면 진땀...

**해결**: 회의 중 약속한 일을 바로 인벤토리에 등록하고 [날짜 알람](/inventory/manual/#alarm)으로 마감 전날 알림을 설정해요. 완료하면 [로그](/inventory/manual/#log)에 기록!

**결과**: "박 팀장님은 말한 건 꼭 해오시네요"라는 평가를 받게 됐어요. 신뢰도 상승!

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">감성 경험형 - 일상에 의미를 더하다</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">아이의 첫 말, 첫 걸음을 기록하고 싶어요</span>
<span class="card-persona">송혜진 (33세, 육아맘)</span>
</summary>
<div class="card-content">

18개월 된 아들이 "엄마"라고 처음 말한 날. 심장이 터질 것 같았어요.

그 순간을 영상으로 찍었지만, 그것만으론 부족했어요. 그날의 감정, 상황, 그 전날 무슨 일이 있었는지... 다 기억하고 싶었거든요.

인벤토리에 영상과 함께 [로그](/inventory/manual/#log)로 그날의 모든 이야기를 적었어요. 아빠가 집에 왔을 때 또 "엄마"라고 한 것, 저녁에 눈물이 난 것까지.

5년 후, 아이가 초등학교 입학할 때 이 기록을 다시 읽었어요. 그때의 감동이 고스란히 되살아났습니다. 인벤토리가 저희 가족의 타임캡슐이 됐어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">할머니 레시피를 영원히 간직하고 싶어요</span>
<span class="card-persona">이현정 (45세, 3대 종부)</span>
</summary>
<div class="card-content">

시어머니께서 편찮으신 후로, 집안 대대로 내려오는 레시피들이 걱정됐어요. "어머님, 이 국물 어떻게 내시는 거예요?" 여쭤보면 "대충 이만큼"이라고 하시니...

어머님 옆에 앉아 요리하시는 모습을 영상으로 찍고, 말씀하시는 그대로 [로그](/inventory/manual/#log)에 받아 적었어요. "고춧가루는 굵은 걸로 손가락 세 마디", "간장은 조금씩 넣으면서" 같은 표현 그대로요.

어머니가 돌아가신 후, 제사상을 차릴 때마다 이 기록을 펼쳐요. 어머니의 목소리가 들리는 것 같아요. 이제 제가 며느리에게 이 인벤토리를 물려줄 거예요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">우리 커플만의 추억 지도를 만들고 싶어요</span>
<span class="card-persona">김도윤 & 박서아 (28세 커플)</span>
</summary>
<div class="card-content">

3년 차 커플이에요. 처음 손 잡은 카페, 첫 키스한 공원, 프로포즈한 레스토랑... 우리만의 장소들이 있는데, 시간이 지나면 잊혀질까 봐 걱정됐어요.

인벤토리에 [공유로그](/inventory/manual/#-공유로그-vs-단독로그) 모드로 '우리의 장소들'을 만들었어요. 데이트 때마다 사진을 찍고 그날의 대화, 감정을 기록해요. 둘이 함께 [로그](/inventory/manual/#log)를 남기니 추억이 두 배가 돼요.

결혼 준비하면서 이 기록들을 웨딩 영상에 넣을 거예요. 5년 후, 10년 후에도 우리의 시작을 기억할 수 있도록.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">강아지와의 시간을 기록하고 싶어요</span>
<span class="card-persona">윤채린 (27세, 반려인)</span>
</summary>
<div class="card-content">

9살 노견 '꼬미'와 함께해요. 시간이 얼마 남지 않았다는 걸 알기에, 하루하루가 소중해요.

매일 꼬미의 사진을 인벤토리에 올려요. 오늘 뭘 먹었는지, 산책하면서 뭘 봤는지, 잠들기 전 어떤 표정을 지었는지. [로그](/inventory/manual/#log)에 일기처럼 적어요.

친구가 물었어요. "매일 왜 그래?" 대답했죠. "나중에 꼬미가 없어도, 꼬미가 얼마나 행복했는지 기억하고 싶으니까." 슬프지만, 이 기록들이 나중에 위로가 될 거예요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">아버지의 빛바랜 사진을 되살리고 싶어요</span>
<span class="card-persona">정민우 (40세, 장남)</span>
</summary>
<div class="card-content">

아버지 서재를 정리하다가 1970년대 사진들을 발견했어요. 색이 바래고 구겨졌지만, 젊은 시절 아버지 모습이 담겨 있었죠.

사진을 디지털로 스캔해서 인벤토리에 등록했어요. 각 사진마다 [로그](/inventory/manual/#log)에 아버지께 여쭤본 이야기를 적었어요. "이건 첫 월급 타고 산 양복이다", "여긴 신혼여행 간 경주야"...

아버지 환갑 때 이 기록들로 영상을 만들었어요. 아버지가 우셨습니다. "이걸 언제 다 물어봤냐"고 하시면서. 가장 뿌듯한 선물이었어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">나의 성장 여정을 기록하고 싶어요</span>
<span class="card-persona">한소희 (23세, 대학 졸업예정자)</span>
</summary>
<div class="card-content">

취업 준비 중이에요. 면접에서 떨어질 때마다 자존감이 바닥으로 떨어져요.

인벤토리에 '성장 일지'를 만들었어요. 작은 성취도 다 기록해요. "오늘 영어 회화 30분 했다", "포트폴리오 피드백 반영 완료", "면접관이 자기소개 좋았다고 함".

3개월이 지나니 기록이 쌓였어요. 떨어지는 날, 예전 기록을 읽으며 힘을 내요. "나 이만큼 성장했잖아." 드디어 합격했을 때, [로그](/inventory/manual/#log)에 "합격!"이라고 적었어요. 그 기록이 가장 빛나 보였습니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">음악과 함께한 순간들을 남기고 싶어요</span>
<span class="card-persona">임재혁 (35세, 음악 애호가)</span>
</summary>
<div class="card-content">

음악은 기억을 불러일으키는 힘이 있어요. 어떤 노래를 들으면 그때 그 순간으로 돌아가죠.

인벤토리에 '인생 OST'를 만들었어요. 의미 있는 순간마다 그때 들었던 노래를 등록하고, [로그](/inventory/manual/#log)에 그 순간을 적어요. 첫 출근 날 들었던 노래, 이별 후 위로가 됐던 노래...

힘든 날엔 이 목록을 틀어요. 노래마다 기록된 이야기를 읽으면서. 내 인생의 사운드트랙이 점점 풍성해지는 기분이에요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">손편지를 디지털로 보관하고 싶어요</span>
<span class="card-persona">강미래 (29세, 교사)</span>
</summary>
<div class="card-content">

10년 전 첫 담임 때 받은 편지들이 있어요. 아이들이 삐뚤빼뚤하게 쓴 "선생님 사랑해요". 종이가 낡아가는 게 마음 아팠어요.

편지들을 하나씩 촬영해서 인벤토리에 등록했어요. [로그](/inventory/manual/#log)에는 그 아이에 대한 기억을 적었어요. "이 아이는 처음엔 수줍었는데 나중엔 제일 활발했다", "이 편지는 졸업식 날 받았다"...

가끔 힘든 날, 이 기록들을 펼쳐요. 아이들의 마음이 그대로 느껴지면서 다시 힘이 나요. 이래서 교사를 하는구나.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">엄마가 되어가는 과정을 기록하고 싶어요</span>
<span class="card-persona">황유나 (32세, 임산부)</span>
</summary>
<div class="card-content">

임신 20주차예요. 배가 불러오면서 매일이 새로워요. 첫 태동, 첫 초음파, 아기 이름 후보들...

인벤토리에 '아기 기다림 일지'를 만들었어요. 산부인과 방문 때마다 초음파 사진을 올리고, [로그](/inventory/manual/#log)에 그날의 감정을 적어요. "오늘 심장 소리 들었는데 울었다", "발차기 시작! 남편도 느꼈다"...

나중에 아이가 크면 이 기록을 보여줄 거예요. "네가 뱃속에 있을 때, 엄마 아빠가 이렇게 기다렸어"라고요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">꿈을 향해 가는 길을 남기고 싶어요</span>
<span class="card-persona">서준호 (26세, 예비 작가)</span>
</summary>
<div class="card-content">

언젠가 소설을 내고 싶어요. 아직은 무명이지만, 매일 조금씩 쓰고 있어요.

인벤토리에 '작가의 길'을 만들었어요. 영감이 떠오를 때마다 [종이](/inventory/manual/#paper)로 등록하고, 집필 일지를 [로그](/inventory/manual/#log)로 남겨요. "오늘 3페이지 썼다", "캐릭터 이름 정했다", "결말을 바꿨다"...

언젠가 제 책이 출간되면, 이 기록을 공개하고 싶어요. "처음 한 줄을 쓰기까지, 이런 여정이 있었습니다"라고.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">혼자 사는 일상도 기록할 가치가 있어요</span>
<span class="card-persona">배민석 (34세, 1인 가구)</span>
</summary>
<div class="card-content">

혼자 살면 하루가 그냥 지나가요. 특별한 일도 없고, 누군가 기억해주지도 않죠.

인벤토리에 일상을 기록하기 시작했어요. 오늘 만든 요리, 창밖으로 본 석양, 혼자 본 영화... 사소한 것들을 [로그](/inventory/manual/#log)에 남겨요.

1년이 지나니 깨달았어요. 내 일상도 충분히 의미 있다는 걸. 혼자지만 외롭지 않은 건, 나를 기록하고 있기 때문인 것 같아요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">세상을 떠난 친구를 기억하고 싶어요</span>
<span class="card-persona">조은비 (30세, 그리워하는 사람)</span>
</summary>
<div class="card-content">

2년 전 갑작스럽게 친구를 잃었어요. 시간이 지나면 기억이 흐려질까 봐 무서웠어요.

인벤토리에 친구와의 추억을 모았어요. 함께 찍은 사진들, 카톡 대화 캡처, 친구가 쓴 손편지... [로그](/inventory/manual/#log)에는 함께한 순간들을 적었어요. "이 사진은 졸업 여행 때", "이 날은 친구가 첫 월급으로 밥 사줬다"...

기일마다 이 기록을 열어요. 친구가 "야, 나 이렇게 기억해줘서 고마워"라고 할 것 같아요. 기억은 사라지지 않아요, 기록해두면.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">우리 동네 가게들이 사라지기 전에 기록하고 싶어요</span>
<span class="card-persona">김동현 (42세, 토박이)</span>
</summary>
<div class="card-content">

재개발이 시작되면서 30년 단골 가게들이 하나둘 문을 닫아요. 분식집 할머니, 문방구 아저씨, 세탁소 이모님...

사라지기 전에 인벤토리에 기록하기 시작했어요. 가게 사진, 사장님 인터뷰, 추천 메뉴... [로그](/inventory/manual/#log)에는 그 가게와 얽힌 내 추억도 적어요.

동네 사람들에게 보여줬더니 눈물 흘리시더라고요. "이런 거 남겨줘서 고마워." 인벤토리가 우리 동네의 역사가 됐어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">아이에게 세상을 설명해주고 싶어요</span>
<span class="card-persona">박세연 (37세, 6살 아이 엄마)</span>
</summary>
<div class="card-content">

아이가 "왜?" 질문을 정말 많이 해요. "왜 하늘은 파래?", "왜 강아지는 짖어?", "왜 엄마는 일해?"

질문마다 인벤토리에 등록하고 [로그](/inventory/manual/#log)에 설명해준 내용을 적어요. 나중에 같은 질문을 하면 예전 대답을 보여주며 "그때 엄마가 이렇게 말했지?"라고 해요.

아이도 신기해해요. "와, 나 이런 것도 물어봤어?" 아이의 호기심 역사가 쌓이고 있어요. 나중에 커서 이 기록을 보면 어떤 기분일까요?

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">요리 실패도 성장의 기록이에요</span>
<span class="card-persona">최준영 (25세, 요리 입문자)</span>
</summary>
<div class="card-content">

요리를 배우기 시작했는데 처음엔 다 실패했어요. 타거나, 짜거나, 질기거나...

"맛있게 된 것만 올려야지" 생각했는데, 실패작도 다 인벤토리에 올리기로 했어요. [로그](/inventory/manual/#log)에 "왜 실패했나"를 분석해서 적었어요.

3개월 후, 처음 만들었던 망한 카레와 지금 카레를 비교해봤어요. 하늘과 땅 차이! 실패 기록들이 오히려 가장 뿌듯해요. "나 이렇게 성장했구나."

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">매일 감사한 것을 기록하고 싶어요</span>
<span class="card-persona">안서현 (48세, 명상 수행자)</span>
</summary>
<div class="card-content">

우울증을 겪은 후 '감사 일기'를 쓰라는 조언을 받았어요. 처음엔 쓸 게 없는 것 같았죠.

인벤토리에 '오늘의 감사'를 만들었어요. 매일 밤 사소한 것이라도 세 가지를 적어요. "오늘 날씨가 좋았다", "커피가 맛있었다", "버스가 바로 왔다"...

1년이 지나니 365개의 감사가 쌓였어요. 힘든 날 이 기록들을 읽으면 세상이 그렇게 나쁘지만은 않다는 걸 느껴요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">부모님 목소리를 간직하고 싶어요</span>
<span class="card-persona">정호진 (38세, 타지 생활자)</span>
</summary>
<div class="card-content">

서울에서 일하면서 지방에 계신 부모님을 자주 못 만나요. 연로해지시는 모습에 마음이 아파요.

전화할 때마다 (허락받고) 녹음해서 인벤토리에 올려요. [로그](/inventory/manual/#log)에는 그날 대화 내용을 적어요. "오늘 엄마가 동네 꽃 얘기해줬다", "아빠가 건강 조심하래"...

보고 싶을 때 녹음을 틀어요. 부모님 목소리가 들리면 마음이 따뜻해져요. 언젠가 이 목소리들이 더 소중해질 거라는 걸 알기에.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">나만의 버킷리스트를 기록하고 싶어요</span>
<span class="card-persona">이수빈 (30세, 꿈꾸는 사람)</span>
</summary>
<div class="card-content">

30살이 되니 "앞으로 뭘 하며 살까" 진지하게 생각하게 됐어요.

인벤토리에 버킷리스트를 만들었어요. "오로라 보기", "마라톤 완주", "책 쓰기"... 하나씩 이룰 때마다 사진과 함께 [로그](/inventory/manual/#log)에 기록해요.

50개 중 7개를 이뤘어요. 아직 43개가 남았지만 조바심 안 나요. 내 인생엔 시간이 있고, 이 기록들이 증명해주니까.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">아이 그림을 영구히 보관하고 싶어요</span>
<span class="card-persona">노유정 (35세, 4살 아이 엄마)</span>
</summary>
<div class="card-content">

아이가 그린 그림들이 쌓여가요. 다 소중한데 종이가 쌓이니 보관이 힘들어요.

그림마다 사진 찍어 인벤토리에 올려요. [로그](/inventory/manual/#log)에는 "이건 뭐야?" 물어본 대답을 적어요. "이건 아빠야. 이건 공룡이야." 아이의 상상력이 그대로 담겨요.

몇 년 후 이 기록을 보면 아이의 그림 실력 변화도, 상상력의 변화도 다 보일 거예요. 종이는 버려도 기록은 영원히 남죠.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">감성 경험</span>
<span class="card-title">해외에서 한국을 그리워할 때 볼 기록</span>
<span class="card-persona">김민재 (27세, 유학 준비생)</span>
</summary>
<div class="card-content">

유학을 앞두고 있어요. 2년 넘게 한국을 못 오게 될 것 같아 미리 향수병에 대비하려고요.

자주 가는 장소들, 좋아하는 음식, 익숙한 거리... 다 인벤토리에 담고 있어요. [로그](/inventory/manual/#log)에는 "여기서 있었던 일", "이 음식을 먹을 때 기분"을 적어요.

나중에 외국에서 힘들 때, 이 기록들을 볼 거예요. 한국의 냄새, 맛, 공기가 느껴지도록. 나를 위한 가상 한국 여행 패키지예요.

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">스토리형 - 인벤토리가 바꾼 일상</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">잃어버린 가방을 되찾은 이야기</span>
<span class="card-persona">이승현 (29세, 여행자)</span>
</summary>
<div class="card-content">

유럽 배낭여행 중이었어요. 파리 지하철에서 가방을 잃어버렸죠. 여권, 카드, 카메라... 다 들어 있었어요.

다행히 인벤토리에 가방 내용물을 모두 등록해뒀어요. 경찰서에서 "가방에 뭐가 있었나요?" 물었을 때, [키워드](/inventory/manual/#keyword)로 검색해서 완벽한 목록을 보여줬어요. 여권 번호까지 기록되어 있었거든요.

2주 후, 가방을 찾았어요! 경찰이 말하더군요. "이렇게 상세한 목록 덕분에 확인이 쉬웠어요." 인벤토리가 구세주였습니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">10년 만에 친구를 찾은 이야기</span>
<span class="card-persona">박지현 (35세, 그리운 사람을 찾는 사람)</span>
</summary>
<div class="card-content">

고등학교 때 전학 간 친구가 있어요. 그 후로 연락이 끊겼는데, 가끔 생각나더라고요.

인벤토리에 친구와의 추억들을 정리하고 있었어요. [로그](/inventory/manual/#log)에 "같이 있던 교복 사진", "친구가 좋아하던 노래", "마지막으로 본 날" 같은 것들을요.

어느 날 이 기록을 SNS에 공유했어요. "이 친구 아시는 분?" 놀랍게도 친구의 친구가 연락이 왔고, 10년 만에 재회했습니다. 인벤토리가 다리가 되어준 거예요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">할아버지 유품에서 보물을 찾은 이야기</span>
<span class="card-persona">김태우 (33세, 손자)</span>
</summary>
<div class="card-content">

할아버지가 돌아가신 후 유품을 정리했어요. 오래된 물건들이 많았는데 뭐가 뭔지 몰라 그냥 버릴 뻔했죠.

인벤토리에 유품들을 사진 찍어 등록하고, 아버지께 여쭤보며 [로그](/inventory/manual/#log)에 기록했어요. "이건 할아버지 첫 시계", "이건 전쟁 때 쓰던 물건"...

그러던 중 낡은 종이가 나왔어요. 알고 보니 70년 된 독립유공자 서훈 관련 서류! 국가보훈처에 연락해서 할아버지의 공적을 재조명하게 됐습니다. 그냥 버렸으면 영원히 묻혔을 이야기예요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">콜렉터로 성장한 이야기</span>
<span class="card-persona">장서준 (24세, 레고 콜렉터)</span>
</summary>
<div class="card-content">

레고를 모으는 취미가 있어요. 처음엔 그냥 좋아서 샀는데, 점점 정리가 안 되더라고요. 뭘 가지고 있는지도 헷갈리고.

인벤토리에 모든 레고 세트를 등록하기 시작했어요. 구매가, 구매처, 조립 여부를 [로그](/inventory/manual/#log)에 기록하고, [키워드](/inventory/manual/#keyword)에 시리즈명과 피스 수를 태그했어요.

1년 후, 제 인벤토리를 본 레고 커뮤니티에서 연락이 왔어요. "체계적이시네요. 저희 모임에 오세요." 지금은 500명 커뮤니티의 운영진이에요. 기록하는 습관이 취미를 직업처럼 만들어줬어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">가족 요리 대회를 만든 이야기</span>
<span class="card-persona">정수아 (40세, 3남매 엄마)</span>
</summary>
<div class="card-content">

세 아이가 요리에 관심을 보이기 시작했어요. 그래서 매주 "가족 요리 대회"를 열기로 했죠.

인벤토리에 매주 요리를 등록하고, 가족들이 [공유로그](/inventory/manual/#-공유로그-vs-단독로그)로 투표하고 리뷰를 남겨요. "오빠 파스타 짜", "막내 샐러드 예쁨" 같은 솔직한 평가들이 쌓여요.

1년간 기록을 모아 "우리 가족 요리책"을 만들었어요. 자체 제작해서 할머니, 할아버지께 선물했더니 정말 좋아하셨어요. 인벤토리가 가족의 전통을 만들어줬어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">빈티지 옷 사업을 시작한 이야기</span>
<span class="card-persona">윤하영 (26세, 구제샵 창업자)</span>
</summary>
<div class="card-content">

구제 옷을 좋아해서 이곳저곳 다니며 모았어요. 어느새 방 한 칸이 다 찼죠.

정리하려고 인벤토리에 등록하기 시작했어요. 각 옷의 브랜드, 연대, 구매처, 상태를 [로그](/inventory/manual/#log)에 상세히 기록했어요. [키워드](/inventory/manual/#keyword)로 스타일, 사이즈, 시즌을 태그하고요.

친구들이 "이거 팔 거야?" 물어보기 시작했어요. 인벤토리 화면 그대로 보여주니까 신뢰가 가더래요. 그렇게 인스타 판매를 시작했고, 지금은 오프라인 구제샵까지 열었어요. 정리가 사업이 됐습니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">이사 전 모든 것을 정리한 이야기</span>
<span class="card-persona">서민규 (45세, 해외 이주자)</span>
</summary>
<div class="card-content">

해외 이민을 결심했어요. 20년 살던 집의 모든 물건을 정리해야 했죠.

인벤토리에 집 안의 모든 것을 등록했어요. 버릴 것, 팔 것, 가져갈 것, 선물할 것으로 분류하고 [키워드](/inventory/manual/#keyword)로 태그했어요. 추억이 담긴 물건은 [로그](/inventory/manual/#log)에 이야기를 남기고요.

3개월 걸린 정리를 2주 만에 끝냈어요. 중고 판매도 순조로웠고, 추억 있는 물건은 사진으로 남겨 홀가분하게 보낼 수 있었어요. 물건은 버려도 기록은 가져갑니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">동생에게 물려준 첫 악기 이야기</span>
<span class="card-persona">한예은 (22세, 음대생)</span>
</summary>
<div class="card-content">

첫 바이올린을 고3 동생에게 물려주기로 했어요. 10년 동안 함께한 악기라 아쉬웠죠.

인벤토리에 이 바이올린의 이야기를 모두 담았어요. 첫 구입 날, 첫 연주회, 수리 받은 날들... [로그](/inventory/manual/#log)에 모든 순간을 기록했어요.

동생에게 악기와 함께 인벤토리 기록을 [전송](/inventory/manual/#-전송-기능)했어요. "이 악기가 어떤 곡들을 연주했는지 다 적혀 있어." 동생이 감동받아서 울더라고요. 악기뿐 아니라 그 역사를 물려준 거예요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">유기견을 입양한 후의 기록</span>
<span class="card-persona">오세진 (30세, 반려인)</span>
</summary>
<div class="card-content">

보호소에서 유기견 '달이'를 입양했어요. 과거를 모르는 아이라 더 잘 기록해주고 싶었어요.

입양 첫날부터 인벤토리에 달이의 모든 것을 담았어요. 처음 집에 온 날, 처음 꼬리 흔든 날, 처음 낮잠 잔 곳... [로그](/inventory/manual/#log)에 매일 일기를 써요.

1년이 됐을 때 이 기록들을 영상으로 만들었어요. "달이의 첫 해"라는 제목으로요. 커뮤니티에 공유했더니 많은 분들이 감동해하셨고, 유기견 입양을 결심한 분도 있었어요. 기록이 또 다른 생명을 살린 거예요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">가장 오래된 물건의 역사</span>
<span class="card-persona">임지훈 (55세, 시계 수집가)</span>
</summary>
<div class="card-content">

아버지에게 물려받은 1960년대 오메가 시계가 있어요. 가보처럼 소중하지만, 이 시계의 역사를 아는 사람은 이제 저뿐이죠.

인벤토리에 시계를 등록하고, [로그](/inventory/manual/#log)에 아버지가 해주신 이야기를 모두 적었어요. "첫 월급으로 샀다", "어머니 만난 날 차고 나갔다", "형이 태어난 날 시간을 확인했다"...

아들에게 이 시계를 물려줄 때, 인벤토리도 함께 [전송](/inventory/manual/#-전송-기능)할 거예요. 물건의 가치는 역사에서 나오니까요. 인벤토리가 3대의 이야기를 이어줍니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">창업 아이디어가 된 기록</span>
<span class="card-persona">권도희 (28세, 예비 창업가)</span>
</summary>
<div class="card-content">

일상에서 불편한 점을 발견할 때마다 인벤토리에 메모했어요. "이런 게 있으면 좋겠다" 싶은 아이디어들이요.

3년간 쌓인 아이디어가 200개였어요. [키워드](/inventory/manual/#keyword)로 분류하니 패턴이 보이더라고요. '1인 가구', '반려동물', '건강' 관련 아이디어가 많았어요.

그중 하나를 실행해서 1인 가구용 반려동물 자동 급식기 스타트업을 시작했어요. 투자자에게 3년간의 기록을 보여주니 "이렇게 깊이 고민하셨군요"라며 투자를 결정했어요. 기록이 신뢰가 됩니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">졸업 프로젝트의 시작과 끝</span>
<span class="card-persona">송유진 (23세, 디자인과 학생)</span>
</summary>
<div class="card-content">

1년짜리 졸업 프로젝트를 시작했어요. 아이디어부터 결과물까지 모든 과정을 인벤토리에 담기로 했죠.

매일 스케치, 프로토타입, 피드백, 수정사항을 [로그](/inventory/manual/#log)에 기록했어요. 실패한 시도들도 다 남겼어요. 왜 실패했는지, 뭘 배웠는지까지.

졸업 전시 때 이 기록을 함께 전시했어요. 심사위원이 "과정이 보여서 더 감동이다"라고 하셨어요. 결과물만큼이나 과정이 중요하다는 걸, 인벤토리가 증명해줬어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">마라톤 완주까지의 여정</span>
<span class="card-persona">이상훈 (38세, 달리기 입문자)</span>
</summary>
<div class="card-content">

풀코스 마라톤이 버킷리스트였어요. 운동을 전혀 안 하던 제가 과연 할 수 있을까...

1km도 못 뛰던 첫날부터 인벤토리에 기록하기 시작했어요. 매일 달린 거리, 시간, 몸 상태를 [로그](/inventory/manual/#log)에 남기고, [날짜 알람](/inventory/manual/#alarm)으로 훈련 스케줄을 관리했어요.

1년 후, 마라톤 완주! 결승선에서 이 기록을 쭉 훑어봤어요. 1km → 5km → 10km → 하프 → 풀... 눈물이 났어요. "1km도 힘들었던 내가 여기까지." 기록은 거짓말을 안 해요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">부모님 금혼식 선물 프로젝트</span>
<span class="card-persona">백승아 (32세, 막내딸)</span>
</summary>
<div class="card-content">

부모님 결혼 50주년을 앞두고 형제들과 특별한 선물을 준비했어요.

각자 부모님과의 추억 사진, 영상, 이야기를 인벤토리에 모았어요. [공유로그](/inventory/manual/#-공유로그-vs-단독로그) 모드로 4명이 함께 기록했죠. 어릴 때 사진부터 최근 가족 여행까지.

금혼식 날, 이 기록을 편집해서 영상으로 만들어 보여드렸어요. 50년의 시간이 한 화면에 담긴 거죠. 부모님 두 분 다 우셨어요. 최고의 선물이었다고 지금도 말씀하세요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">카페 창업 전 1000잔 기록</span>
<span class="card-persona">고민석 (34세, 예비 카페 사장)</span>
</summary>
<div class="card-content">

카페를 열고 싶었어요. 창업 전에 "1000잔 마시기 프로젝트"를 시작했죠.

가는 카페마다 커피를 인벤토리에 등록했어요. 원두, 로스팅, 추출 방식, 분위기, 가격... [로그](/inventory/manual/#log)에 상세히 기록하고 [키워드](/inventory/manual/#keyword)로 분류했어요.

2년 동안 1000잔을 기록하며 취향이 생겼어요. 이 데이터를 분석해서 메뉴와 콘셉트를 정했죠. 오픈 후 손님들에게 이 기록을 보여주면 "진심이시네요"라고 해요. 1000잔의 진심이 카페에 담겼습니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">내 삶을 바꾼 습관 기록</span>
<span class="card-persona">나현우 (27세, 자기계발러)</span>
</summary>
<div class="card-content">

의지가 약해서 새해 목표를 한 번도 지킨 적이 없었어요.

올해는 다르게 해보기로 했어요. 매일 아침 6시 기상, 독서 30분, 운동 1시간... 작은 습관들을 인벤토리에 등록하고, 지킬 때마다 [로그](/inventory/manual/#log)에 기록하기로요.

처음엔 빈 칸이 많았어요. 근데 채워진 기록을 보니 욕심이 나더라고요. 6개월 지나니 습관이 됐어요. 인벤토리를 열면 내가 얼마나 변했는지 한눈에 보여요. 기록이 의지가 됩니다.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">도자기 복원 프로젝트</span>
<span class="card-persona">한미옥 (60세, 전통 공예가)</span>
</summary>
<div class="card-content">

깨진 청화백자를 복원하는 일을 해요. 수백 조각을 맞추는 작업이라 기록이 생명이에요.

각 조각을 인벤토리에 등록하고, 맞춰지는 과정을 [로그](/inventory/manual/#log)에 기록해요. "오늘 23번과 47번이 맞았다", "이 부분은 빠진 조각이 있다"...

3년 걸린 복원이 끝났을 때, 그 모든 과정이 인벤토리에 담겨 있었어요. 박물관에서 "복원 과정 기록도 함께 전시하고 싶다"고 하더라고요. 완성품만큼이나 과정이 예술이 된 거예요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">산티아고 순례길 800km</span>
<span class="card-persona">조민수 (45세, 순례자)</span>
</summary>
<div class="card-content">

인생의 전환점에서 산티아고 순례길을 걷기로 했어요.

매일 걸은 거리, 만난 사람, 느낀 감정을 인벤토리에 기록했어요. [로그](/inventory/manual/#log)에 일기를 쓰고, 순례길 도장을 받을 때마다 사진으로 남겼어요. 800km의 여정이 고스란히 담겼죠.

한국에 돌아와 이 기록을 책으로 만들었어요. 자비 출판이었는데 주변 반응이 좋아서 정식 출간됐어요. 인벤토리가 없었다면 이 책도 없었을 거예요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">스토리</span>
<span class="card-title">온 가족의 건강 기록</span>
<span class="card-persona">정은숙 (52세, 가족 건강 지킴이)</span>
</summary>
<div class="card-content">

가족 4명의 건강을 제가 챙겨요. 병원 갈 때마다 기록이 필요한데 흩어져 있어서 힘들었죠.

인벤토리에 가족별로 [파티션](/inventory/manual/#partition)을 만들고, 병원 방문, 검사 결과, 복용 약을 모두 [로그](/inventory/manual/#log)에 기록해요. 다음 검진일은 [날짜 알람](/inventory/manual/#alarm)으로 관리하고요.

의사 선생님도 놀라세요. "이렇게 체계적인 환자 보호자는 처음이에요." 가족 건강 10년 기록이 쌓였어요. 인벤토리가 우리 가족 주치의 같아요.

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">창의적 활용 - 이렇게도 쓸 수 있어요</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">꿈 일기를 기록해요</span>
<span class="card-persona">이수민 (24세, 심리학과 학생)</span>
</summary>
<div class="card-content">

꿈을 분석하면 무의식을 알 수 있다고 해서, 아침마다 기억나는 꿈을 인벤토리에 기록해요.

꿈의 장면을 간단히 그려 이미지로 올리고, [로그](/inventory/manual/#log)에 상세 내용을 적어요. [키워드](/inventory/manual/#keyword)에 "물", "추락", "시험" 같은 주제를 태그해요.

6개월 기록을 분석하니 패턴이 보여요. 스트레스 받을 때 "추락" 꿈을 자주 꾸더라고요. 내 무의식과 대화하는 방법을 찾았어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">별자리 관측 기록</span>
<span class="card-persona">김하늘 (31세, 아마추어 천문가)</span>
</summary>
<div class="card-content">

밤하늘 관측이 취미예요. 언제 어떤 별을 봤는지 기록하고 싶었죠.

관측할 때마다 인벤토리에 등록해요. 날짜, 장소, 관측 대상(별자리, 행성, 성운), 날씨, 사용 장비... [로그](/inventory/manual/#log)에 적고, 사진도 첨부해요.

유성우 시즌에는 [날짜 알람](/inventory/manual/#alarm)으로 미리 알림을 받아요. 3년치 관측 기록이 쌓이니 "언제 어디서 보면 좋을지" 경험 데이터가 생겼어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">향수 노트를 만들어요</span>
<span class="card-persona">박수진 (29세, 향수 마니아)</span>
</summary>
<div class="card-content">

향수를 수집하는데, 각 향수의 특징을 기억하기 어려웠어요.

향수마다 인벤토리에 등록하고, [로그](/inventory/manual/#log)에 노트(탑, 미들, 베이스), 지속력, 잔향, 어울리는 계절/상황을 기록해요. [키워드](/inventory/manual/#keyword)에 "우디", "플로럴", "데이트용" 태그도 해요.

친구가 "어떤 향수 추천해줘"라고 할 때 검색해서 바로 알려줘요. 나만의 향수 백과사전이 됐어요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">매일 하늘 사진을 찍어요</span>
<span class="card-persona">최유리 (26세, 사진 작가)</span>
</summary>
<div class="card-content">

1년 동안 매일 같은 장소에서 하늘 사진을 찍는 프로젝트를 시작했어요.

인벤토리에 매일 하늘 사진을 올리고, [로그](/inventory/manual/#log)에 날씨, 기분, 그날 있었던 일을 기록해요. [개시일자](/inventory/manual/#dates)로 촬영 날짜를 관리하고요.

365장이 모이니 타임랩스 영상으로 만들었어요. 계절이 변하는 하늘과 함께 제 1년도 담겼죠. 인스타에 올렸더니 10만 조회가 넘었어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">TRPG 캐릭터 관리</span>
<span class="card-persona">장민혁 (22세, 게이머)</span>
</summary>
<div class="card-content">

TRPG(탁상 롤플레잉)를 즐기는데, 캐릭터 시트와 아이템 관리가 복잡해요.

캐릭터와 보유 아이템을 인벤토리에 등록해요. [로그](/inventory/manual/#log)에 세션마다 일어난 일, 레벨업, 새 스킬을 기록해요. [파티션](/inventory/manual/#partition)으로 캠페인별로 분류하고요.

파티원들과 [공유로그](/inventory/manual/#-공유로그-vs-단독로그)로 연결하면 서로의 캐릭터 정보도 볼 수 있어요. 마스터도 "진행이 편하다"고 좋아해요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">외국어 단어장으로 활용해요</span>
<span class="card-persona">이정아 (28세, 일본어 학습자)</span>
</summary>
<div class="card-content">

일본어 공부 중인데, 단어장 앱들이 맘에 안 들었어요. 내가 원하는 방식대로 정리하고 싶었거든요.

모르는 단어를 인벤토리에 등록하고, [로그](/inventory/manual/#log)에 예문, 뉘앙스 설명을 적어요. [키워드](/inventory/manual/#keyword)에 "N1", "비즈니스", "드라마에서 들음" 같은 태그를 달아요.

외운 단어는 [키워드](/inventory/manual/#keyword)에 "외움"을 추가해요. 외움 태그 없는 것만 복습하면 되니 효율적이에요. JLPT N1 합격했어요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">캡슐 워드로브 관리</span>
<span class="card-persona">김서연 (27세, 미니멀리스트)</span>
</summary>
<div class="card-content">

33벌로 3개월 살기, '캡슐 워드로브'에 도전했어요. 옷장을 비우고 진짜 필요한 옷만 남기기!

선별한 33벌을 인벤토리에 등록하고, 입을 때마다 [로그](/inventory/manual/#log)에 코디를 기록해요. 3개월 후 로그 분석하니 진짜 자주 입는 옷, 안 입는 옷이 보여요.

안 입은 옷은 과감히 정리하고, 비는 자리에 꼭 필요한 것만 채워요. 인벤토리 덕에 미니멀 라이프를 유지하고 있어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">미술관 큐레이팅</span>
<span class="card-persona">홍예진 (34세, 미술 애호가)</span>
</summary>
<div class="card-content">

미술관을 자주 가는데, 봤던 작품들이 기억 안 나요.

가는 전시마다 감동받은 작품을 인벤토리에 등록해요. 작가, 연도, 기법을 [로그](/inventory/manual/#log)에 적고, "왜 좋았는지"도 함께 기록해요. [키워드](/inventory/manual/#keyword)에 장르, 시대, 감정을 태그해요.

5년치 기록을 보니 제 취향이 보여요. 인상파, 추상화, 블루 톤... 이제 어떤 전시 갈지 선택할 때 이 데이터가 도움돼요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">명함 관리를 스마트하게</span>
<span class="card-persona">박종민 (42세, 영업 담당)</span>
</summary>
<div class="card-content">

명함이 수백 장 쌓였는데, 누가 누구인지 기억이 안 나요.

명함을 받으면 사진 찍어 인벤토리에 바로 등록해요. [로그](/inventory/manual/#log)에 "어디서 만났는지", "무슨 대화를 했는지" 적어요. [키워드](/inventory/manual/#keyword)에 산업, 관심사, 협업 가능성을 태그해요.

"저번에 만난 IT 쪽 분" 검색하면 바로 찾아져요. 다시 연락할 때 "그때 이야기하셨던..." 하면 상대가 감동해요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">보드게임 컬렉션 관리</span>
<span class="card-persona">이재원 (29세, 보드게임 마니아)</span>
</summary>
<div class="card-content">

보드게임을 50개 넘게 가지고 있는데, 뭐가 있는지 기억도 안 나고 친구들 오면 뭘 할지 고민이에요.

모든 게임을 인벤토리에 등록하고, [키워드](/inventory/manual/#keyword)에 플레이 인원, 시간, 장르, 난이도를 태그해요. [로그](/inventory/manual/#log)에는 플레이 후기도 적어요.

친구들 오면 "오늘 4명, 1시간, 가벼운 거" 검색해서 추천해요. "보드게임 소믈리에"라고 불려요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">피부 컨디션 일기</span>
<span class="card-persona">손민지 (25세, 트러블 피부)</span>
</summary>
<div class="card-content">

피부가 예민해서 뭘 먹거나 바르면 바로 트러블이 나요. 원인을 찾고 싶었어요.

매일 피부 사진을 찍어 인벤토리에 올려요. [로그](/inventory/manual/#log)에 그날 먹은 음식, 바른 화장품, 스트레스 레벨, 수면 시간을 기록해요.

3개월 데이터 분석하니 패턴이 보였어요. 유제품 먹은 다음 날 트러블! 피부과 선생님도 이 기록 보시고 "이래서 기록이 중요해요"라고 하셨어요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">캠핑 장비 체크리스트</span>
<span class="card-persona">정현기 (36세, 캠핑족)</span>
</summary>
<div class="card-content">

캠핑 갈 때마다 뭔가 빠뜨려요. 랜턴 없이 간 적도, 수저 없이 간 적도...

모든 캠핑 장비를 인벤토리에 등록하고, 캠핑 유형별로 [파티션](/inventory/manual/#partition)을 만들었어요. "1박", "백패킹", "글램핑" 등. 각 파티션에 필요한 장비만 넣어요.

캠핑 가기 전에 해당 파티션 열어서 체크해요. 더 이상 빠뜨리는 일이 없어요! [로그](/inventory/manual/#log)에 "이건 다음엔 안 가져가도 됨" 같은 메모도 남겨요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">반복되는 두통 패턴 분석</span>
<span class="card-persona">유미라 (33세, 편두통 환자)</span>
</summary>
<div class="card-content">

편두통이 자주 와서 원인을 찾고 싶었어요. 의사 선생님도 "일지를 써보세요"라고 하셨죠.

두통이 올 때마다 인벤토리에 기록해요. 강도, 위치, 지속 시간을 [로그](/inventory/manual/#log)에 적고, 전날 행동(수면, 식단, 운동, 카페인)도 같이 기록해요.

6개월 데이터를 의사 선생님께 보여드렸더니 패턴을 찾아주셨어요. 수면 부족 + 카페인 조합이 트리거였어요. 지금은 많이 나아졌어요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">인생 영화 100선 큐레이션</span>
<span class="card-persona">강동현 (28세, 시네필)</span>
</summary>
<div class="card-content">

"인생 영화가 뭐예요?" 질문에 제대로 답하고 싶었어요.

본 영화마다 인벤토리에 등록하고, 5점 만점으로 [로그](/inventory/manual/#log)에 평가와 감상을 적어요. [키워드](/inventory/manual/#keyword)에 장르, 감독, 분위기를 태그해요.

5점짜리만 필터링하니 진짜 내 인생 영화 목록이 나왔어요. 100개 골라서 "내 인생 영화 100"이라는 리스트를 만들었어요. 친구들한테 공유하니 "너 취향 확실하다"고 해요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">DIY 프로젝트 기록</span>
<span class="card-persona">백준서 (32세, 메이커)</span>
</summary>
<div class="card-content">

집에서 가구 만들고, 조명 제작하고... DIY를 즐기는데 나중에 같은 거 만들 때 기억이 안 나요.

프로젝트마다 인벤토리에 등록해요. 사용한 재료, 도구, 치수, 과정 사진을 [로그](/inventory/manual/#log)에 상세히 기록해요. 실패한 시도도 왜 실패했는지 적어요.

친구가 "나도 이거 만들고 싶은데" 하면 인벤토리 보여주며 가르쳐줘요. 나만의 DIY 매뉴얼이 쌓이고 있어요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">독서 모임 기록</span>
<span class="card-persona">한서윤 (30세, 북클럽 리더)</span>
</summary>
<div class="card-content">

매달 독서 모임을 이끄는데, 과거에 뭘 읽었고 어떤 토론을 했는지 정리가 안 됐어요.

읽은 책마다 인벤토리에 등록하고, [공유로그](/inventory/manual/#-공유로그-vs-단독로그)로 모임원들과 연결해요. 각자 감상을 [로그](/inventory/manual/#log)에 남기고, 모임 날 토론 내용도 기록해요.

2년 동안 읽은 책 24권의 기록이 쌓였어요. 새 멤버가 오면 "우리 이런 책들 읽었어요" 보여줄 수 있어요. 모임의 역사가 됐죠!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">어항 관리 일지</span>
<span class="card-persona">조민재 (27세, 아쿠아리스트)</span>
</summary>
<div class="card-content">

열대어를 키우는데, 물 관리가 생각보다 복잡해요. 언제 환수했는지, 어떤 약품 넣었는지...

인벤토리에 어항을 등록하고, [로그](/inventory/manual/#log)에 환수 날짜, 수온, pH, 물고기 상태를 기록해요. 물고기가 아프면 증상과 처치도 적어요.

패턴을 분석하니 "7일마다 30% 환수"가 우리 어항에 최적이더라고요. 물고기들이 건강해졌어요!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">옷 대여 관리</span>
<span class="card-persona">임수아 (26세, 패션 렌탈 이용자)</span>
</summary>
<div class="card-content">

옷 렌탈 서비스를 이용하는데, 뭘 빌렸는지, 언제 반납해야 하는지 헷갈려요.

빌린 옷을 인벤토리에 등록하고, [유효기간](/inventory/manual/#dates)에 반납일을 설정해요. 3일 전에 알림이 와서 반납 준비해요.

연체료 한 번도 안 냈어요! [로그](/inventory/manual/#log)에 "이건 좋았다/별로였다"도 기록해서 다음에 뭘 빌릴지 참고해요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">명상 수련 기록</span>
<span class="card-persona">전수빈 (35세, 명상 수행자)</span>
</summary>
<div class="card-content">

매일 명상하는데, 꾸준히 하고 있는지 체감이 안 됐어요.

명상할 때마다 인벤토리에 기록해요. 시간, 방법(호흡/걷기/바디스캔), 집중도를 [로그](/inventory/manual/#log)에 적어요.

100일 연속 기록이 쌓였을 때의 뿌듯함! 처음엔 5분도 힘들었는데 지금은 30분도 거뜬해요. 성장이 보이니 더 동기부여돼요.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">창의적 활용</span>
<span class="card-title">면접 준비 노트</span>
<span class="card-persona">고은채 (24세, 취준생)</span>
</summary>
<div class="card-content">

취업 준비 중인데, 면접 질문과 내 답변을 정리하고 싶었어요.

예상 질문마다 인벤토리에 등록해요. [로그](/inventory/manual/#log)에 답변 스크립트, 실제 면접에서 받은 질문, 분위기를 기록해요. [키워드](/inventory/manual/#keyword)에 기업명, 직무, 질문 유형을 태그해요.

3차 면접까지 갔을 때 "1차 때 뭐라고 했더라?" 바로 찾을 수 있었어요. 일관된 답변으로 신뢰를 줬고, 합격했어요!

</div>
</details>

</div>
</div>

---

<div class="share-section">
<h3>당신의 인벤토리 활용 방법도 알려주세요</h3>
<p>어떻게 사용하고 계신가요? 새로운 아이디어를 기다립니다.</p>
<a href="/inventory/suggest/" class="share-btn">활용 방법 공유하기</a>
</div>
