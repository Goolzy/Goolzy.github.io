---
layout: inventory
title: Use Cases
permalink: /inventory/usecases/en/
lang: en
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
  content: 'Expand ↓';
  font-size: 0.75rem;
  color: var(--purple-bright);
  opacity: 0.7;
  margin-top: 0.5rem;
}

.usecase-card[open] summary::after {
  content: 'Collapse ↑';
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

# Inventory Use Cases

Discover the possibilities of Inventory through 100 diverse use cases.

---

<div class="category-section">
<h2 class="category-title">Problem Solving - Tackling Everyday Challenges</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Food keeps spoiling in my fridge</span>
<span class="card-persona">Sarah (32, Working Mom)</span>
</summary>
<div class="card-content">

**Problem**: With a busy schedule, I often forget about expiration dates and end up throwing away spoiled food. Especially things like tofu and milk go bad within days...

**Solution**: I created items for each ingredient using [Paper](/inventory/manual/en/#-paper-system) and set [Expiry Dates](/inventory/manual/en/#-start-date--expiry). Now I get notifications 3 days before expiration, so I can cook or freeze items in time.

**Result**: Reduced food waste by 80%. Saved $150 on monthly groceries!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Too many subscriptions to track</span>
<span class="card-persona">Mike (28, IT Developer)</span>
</summary>
<div class="card-content">

**Problem**: Netflix, YouTube Premium, Notion, GitHub... I have over 10 subscriptions with different renewal dates. Some I don't even use anymore but keep paying for.

**Solution**: Registered all subscriptions in Inventory with [Date Alarms](/inventory/manual/en/#-date-alarm) set 7 days before renewal. Added monthly fees as [Keywords](/inventory/manual/en/#-keywords) for quick overview.

**Result**: Cancelled 3 unused subscriptions, saving $40/month. No more surprise charges!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Missing my kids' vaccination schedules</span>
<span class="card-persona">Jennifer (35, Working Mother of Two)</span>
</summary>
<div class="card-content">

**Problem**: With two kids on different vaccination schedules, I kept getting confused. Sometimes got calls from the clinic when it was already overdue.

**Solution**: Created separate [Partitions](/inventory/manual/en/#-partition-feature) for each child and managed vaccination dates with [Date Alarms](/inventory/manual/en/#-date-alarm). Added [Stamps](/inventory/manual/en/#-stamp-system) when completed.

**Result**: Haven't missed a single vaccination appointment. Can prepare ahead of clinic visits!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Moving chaos - can't find anything</span>
<span class="card-persona">David (27, Graduate Student)</span>
</summary>
<div class="card-content">

**Problem**: I move often for school. Every time, I lose track of which box contains what. Even with box numbers, I end up opening everything.

**Solution**: Before packing, I photographed each box's contents and registered them in Inventory. Tagged with [Keywords](/inventory/manual/en/#-keywords) like "Box1", "Kitchen".

**Result**: Cut unpacking time in half. "Where are the scissors?" - instant search!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Receipt management is a nightmare</span>
<span class="card-persona">Emma (40, Small Business Owner)</span>
</summary>
<div class="card-content">

**Problem**: Need to keep receipts for business expenses, but paper receipts fade and get lost. Tax season is always stressful...

**Solution**: Right after payment, I photograph receipts and register them in Inventory. Tag with [Keywords](/inventory/manual/en/#-keywords) like "expense", "2024", "meals" for easy categorization.

**Result**: Almost no paper receipts needed. During tax season, I just search and find exactly what I need. My accountant loves it!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Can't organize my film photos</span>
<span class="card-persona">Hannah (26, Photography Enthusiast)</span>
</summary>
<div class="card-content">

**Problem**: When I develop film photos, I forget when and where I took them. Printed photos just pile up with no organization.

**Solution**: After each development, I register representative shots in Inventory with [Keywords](/inventory/manual/en/#-keywords) for location, date, and film type. Development lab info goes in [Log](/inventory/manual/en/#-log-system).

**Result**: Built my own film archive. Can instantly find photos from a trip 2 years ago!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Laundry care is complicated</span>
<span class="card-persona">Kevin (29, Fashion Blogger)</span>
</summary>
<div class="card-content">

**Problem**: Different clothes need different care - some dry clean only, sweaters hand wash only. I've ruined clothes by using the wrong method.

**Solution**: Registered clothes requiring special care in Inventory. Care instructions in [Log](/inventory/manual/en/#-log-system). Dry cleaning pickup dates tracked with [Date Alarms](/inventory/manual/en/#-date-alarm).

**Result**: Dramatically reduced clothing damage. No more late fees from forgetting dry cleaning!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Too many supplements to track</span>
<span class="card-persona">Patricia (55, Health-Conscious)</span>
</summary>
<div class="card-content">

**Problem**: Doctor recommended 5 different supplements. I get confused about morning/evening doses and miss reorder timing.

**Solution**: Registered each supplement with [Paper](/inventory/manual/en/#-paper-system). Dosage instructions in [Log](/inventory/manual/en/#-log-system), estimated depletion dates as [Expiry](/inventory/manual/en/#-start-date--expiry).

**Result**: Now following schedule perfectly. Get alerts before running out so I can reorder in time!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Warranty expired - expensive repair</span>
<span class="card-persona">James (34, Newlywed)</span>
</summary>
<div class="card-content">

**Problem**: AC broke down and warranty had expired just a month before. Couldn't even find the warranty card. Paid $300 for repairs.

**Solution**: Registered all appliances in Inventory with warranty photos attached. Set [Expiry Dates](/inventory/manual/en/#-start-date--expiry) for warranty expiration with 1-month advance alerts.

**Result**: Now I request inspections or consider extensions before warranties expire. Got my washing machine fixed for free!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Gift cards keep expiring</span>
<span class="card-persona">Jessica (25, College Student)</span>
</summary>
<div class="card-content">

**Problem**: Birthday and holiday gift cards get buried in messages and expire unused.

**Solution**: Screenshot gift cards immediately and register in Inventory with [Expiry Dates](/inventory/manual/en/#-start-date--expiry). Get alerts one week before expiration.

**Result**: Saved a $30 Starbucks gift card! Now I actually use the gifts I receive.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Car maintenance history is scattered</span>
<span class="card-persona">Robert (42, Sales Representative)</span>
</summary>
<div class="card-content">

**Problem**: Can't remember when and where I got car serviced. Different shops have different records. Keep missing oil change timing.

**Solution**: Registered my car in Inventory, logging every service in [Log](/inventory/manual/en/#-log-system). Next service dates set as [Date Alarms](/inventory/manual/en/#-date-alarm).

**Result**: Complete maintenance history built up. When selling, showing the history helped get a better price!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Important documents are everywhere</span>
<span class="card-persona">Michelle (38, Freelancer)</span>
</summary>
<div class="card-content">

**Problem**: Contracts, insurance policies, property deeds... important documents scattered everywhere. Once had to get a replacement because I couldn't find the original.

**Solution**: Photographed all important documents and registered in Inventory with [Document Lock](/inventory/manual/en/#-document-lock) for security. Storage location noted in [Keywords](/inventory/manual/en/#-keywords).

**Result**: "Where's the deed?" → Search → Storage location found. 30 seconds!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Books pile up unread</span>
<span class="card-persona">Lisa (30, Marketer)</span>
</summary>
<div class="card-content">

**Problem**: Excited when buying books, but they just pile up unread at home. Once bought the same book twice.

**Solution**: Register books immediately after purchase. Set [Start Date](/inventory/manual/en/#-start-date--expiry) when beginning, add [Stamp](/inventory/manual/en/#-stamp-system) when finished. Unread list visible at a glance.

**Result**: Instead of feeling overwhelmed, I'm motivated. Read 12 books this year - more than all of last year!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Keep killing my plants</span>
<span class="card-persona">Amy (24, Young Professional)</span>
</summary>
<div class="card-content">

**Problem**: Wanted indoor plants but kept forgetting to water them or overwatering. They all died.

**Solution**: Registered each plant in Inventory with watering reminders via [Date Alarms](/inventory/manual/en/#-date-alarm). Repotting and fertilizing dates logged in [Log](/inventory/manual/en/#-log-system).

**Result**: My monstera has been alive for 6 months! Even grew 3 new leaves!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Password chaos</span>
<span class="card-persona">George (50, Civil Servant)</span>
</summary>
<div class="card-content">

**Problem**: Different passwords for every site, can't remember them. Writing on sticky notes feels insecure...

**Solution**: Registered accounts in Inventory with [Document Lock](/inventory/manual/en/#-document-lock) protection. Only store password hints, actual passwords use pattern combinations.

**Result**: No more "Forgot Password" clicks. Secure and convenient management!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Missing family health checkups</span>
<span class="card-persona">Helen (58, Homemaker)</span>
</summary>
<div class="card-content">

**Problem**: Husband, mother-in-law, myself... all different checkup schedules. Once missed the free annual checkup period and had to pay out of pocket.

**Solution**: Registered each family member's checkup schedule with [Date Alarms](/inventory/manual/en/#-date-alarm) to notify when the checkup period begins.

**Result**: Never missed a free checkup for the whole family. Saving over $500 annually on health costs!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Pet medical records are scattered</span>
<span class="card-persona">Mina (31, Cat Parent)</span>
</summary>
<div class="card-content">

**Problem**: Two cats with different vaccination schedules and vet records everywhere. New vets always ask "Do you have previous records?" and I can't find them.

**Solution**: Created [Partitions](/inventory/manual/en/#-partition-feature) for each cat. Logged every vet visit in [Log](/inventory/manual/en/#-log-system). Next vaccinations managed with [Date Alarms](/inventory/manual/en/#-date-alarm).

**Result**: The vet praised how organized I am. In emergencies, I can show records instantly. Peace of mind!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Can't remember wine recommendations</span>
<span class="card-persona">Chris (36, Wine Beginner)</span>
</summary>
<div class="card-content">

**Problem**: Forget the name of wines I enjoyed at wine bars. At the store, I just grab anything.

**Solution**: Photograph wine labels and register in Inventory. Log tasting notes, pairings, and prices in [Log](/inventory/manual/en/#-log-system). Tag with [Keywords](/inventory/manual/en/#-keywords) like "red", "daily", "gift".

**Result**: Built my own wine database. "What did we have on our anniversary?" - instant find!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Can't maintain workout routine</span>
<span class="card-persona">Jason (29, Office Worker)</span>
</summary>
<div class="card-content">

**Problem**: Sign up for 3-month gym memberships, go hard for one month, then quit. No motivation and no progress without records.

**Solution**: Register each exercise type and log weights/reps in [Log](/inventory/manual/en/#-log-system). Add [Stamps](/inventory/manual/en/#-stamp-system) for consecutive attendance.

**Result**: Progress from 40kg to 70kg bench press is all documented. Seeing records keeps me motivated!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Problem Solving</span>
<span class="card-title">Forgetting meeting commitments</span>
<span class="card-persona">Susan (33, Team Lead)</span>
</summary>
<div class="card-content">

**Problem**: I'd say "I'll have the report ready by next week" in meetings, then forget. Awkward when someone asks "Is that done?"

**Solution**: Register meeting commitments immediately with [Date Alarms](/inventory/manual/en/#-date-alarm) for day-before reminders. [Stamp](/inventory/manual/en/#-stamp-system) when completed!

**Result**: "Susan always delivers on her commitments" - that's my reputation now. Trust earned!

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">Emotional Experience - Adding Meaning to Life</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Recording baby's first words and steps</span>
<span class="card-persona">Grace (33, New Mom)</span>
</summary>
<div class="card-content">

My 18-month-old said "Mama" for the first time. My heart felt like it would burst.

I recorded the moment on video, but that wasn't enough. I wanted to remember the emotions, the context, what happened the day before...

In Inventory, I saved the video with a [Log](/inventory/manual/en/#-log-system) entry capturing every detail of that day. When daddy came home and he said "Mama" again, how I cried that evening...

Five years later, when my son started elementary school, I read these records again. The emotions came flooding back. Inventory became our family's time capsule.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Preserving grandmother's recipes forever</span>
<span class="card-persona">Linda (45, Family Matriarch)</span>
</summary>
<div class="card-content">

After my mother-in-law got ill, I worried about the family recipes passed down for generations. When I asked "How do you make this broth?", she'd just say "about this much"...

I sat beside her, filmed her cooking, and transcribed everything exactly as she said into [Log](/inventory/manual/en/#-log-system). "Three finger-widths of red pepper flakes", "add soy sauce little by little"...

After she passed, I read these records whenever preparing family meals. I can almost hear her voice. Now I'll pass this Inventory to my daughter-in-law.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Creating our couple's memory map</span>
<span class="card-persona">David & Sarah (28, Couple)</span>
</summary>
<div class="card-content">

Three years together. The cafe where we first held hands, the park where we first kissed, the restaurant where he proposed... we have our special places, but worried they'd be forgotten with time.

Created 'Our Places' in Inventory with [Shared Log](/inventory/manual/en/#-shared-log-vs-solo-log) mode. After each date, we add photos and record our conversations and feelings. Documenting together doubles the memories.

We're including these records in our wedding video. Years from now, we'll still remember how we began.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Documenting time with my senior dog</span>
<span class="card-persona">Chelsea (27, Pet Parent)</span>
</summary>
<div class="card-content">

My 9-year-old dog 'Buddy' and I have been together for years. Knowing time is limited makes each day precious.

Every day, I post Buddy's photos in Inventory. What he ate, what we saw on walks, his expression before sleep. I write it like a diary in [Log](/inventory/manual/en/#-log-system).

A friend asked "Why do you do this every day?" I replied: "When Buddy is gone, I want to remember how happy he was." It's sad, but these records will bring comfort later.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Reviving father's faded photographs</span>
<span class="card-persona">Thomas (40, Son)</span>
</summary>
<div class="card-content">

While organizing my father's study, I found photos from the 1970s. Faded and creased, but capturing my young father.

I scanned them digitally and registered in Inventory. For each photo, I asked my father and recorded his stories in [Log](/inventory/manual/en/#-log-system). "This was the suit from my first paycheck", "This was our honeymoon in the countryside"...

For his 60th birthday, I made a video from these records. He cried. "When did you ask all these questions?" It was the most meaningful gift.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Recording my growth journey</span>
<span class="card-persona">Sophie (23, Recent Graduate)</span>
</summary>
<div class="card-content">

Job hunting. Every rejection crushed my confidence.

Created a 'Growth Journal' in Inventory. Recording every small achievement. "30 minutes of English conversation today", "Updated portfolio with feedback", "Interviewer liked my introduction"...

After 3 months, the records piled up. On rejection days, I read past entries and gain strength. "I've grown this much." When I finally got the offer, I pressed that [Stamp](/inventory/manual/en/#-stamp-system) hard. It was the brightest stamp ever.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Documenting moments with music</span>
<span class="card-persona">Jake (35, Music Lover)</span>
</summary>
<div class="card-content">

Music has the power to bring back memories. Certain songs transport me to specific moments.

Created 'Life OST' in Inventory. For meaningful moments, I register the song playing and record the moment in [Log](/inventory/manual/en/#-log-system). The song on my first day at work, the song that comforted me after a breakup...

On hard days, I play this playlist while reading the stories attached to each song. My life's soundtrack keeps growing richer.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Preserving handwritten letters digitally</span>
<span class="card-persona">Mary (29, Teacher)</span>
</summary>
<div class="card-content">

I still have letters from my first class 10 years ago. Children's crooked handwriting saying "I love you teacher". The paper is aging and it breaks my heart.

I photographed each letter and uploaded to Inventory. In [Log](/inventory/manual/en/#-log-system), I wrote memories of each child. "This one was shy at first but became the most active", "Got this letter on graduation day"...

On difficult days, I open these records. The children's love comes through and gives me strength. This is why I teach.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Documenting my journey to motherhood</span>
<span class="card-persona">Yuna (32, Expecting Mother)</span>
</summary>
<div class="card-content">

20 weeks pregnant. Every day brings something new as my belly grows. First kicks, first ultrasound, baby name candidates...

Created 'Waiting for Baby' journal in Inventory. Each prenatal visit, I upload ultrasound photos and record my emotions in [Log](/inventory/manual/en/#-log-system). "Cried when I heard the heartbeat today", "Baby started kicking! Husband felt it too"...

When my child grows up, I'll show them these records. "This is how mommy and daddy waited for you."

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Recording my path to dreams</span>
<span class="card-persona">Junho (26, Aspiring Writer)</span>
</summary>
<div class="card-content">

I dream of publishing a novel someday. Still unknown, but writing a little every day.

Created 'Writer's Journey' in Inventory. When inspiration strikes, I register with [Paper](/inventory/manual/en/#-paper-system) and keep a writing journal in [Log](/inventory/manual/en/#-log-system). "Wrote 3 pages today", "Decided on character name", "Changed the ending"...

When my book is published, I want to share these records. "Here's the journey to that first sentence."

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Living alone is worth recording too</span>
<span class="card-persona">Marcus (34, Single)</span>
</summary>
<div class="card-content">

Living alone, days just pass by. Nothing special, no one to remember.

Started recording daily life in Inventory. Today's cooking, the sunset from my window, a movie watched alone... Small things go in [Log](/inventory/manual/en/#-log-system).

A year later, I realized: my daily life is meaningful too. I'm alone but not lonely, because I'm recording myself.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Remembering a friend who passed</span>
<span class="card-persona">Emily (30, Grieving Friend)</span>
</summary>
<div class="card-content">

Lost a friend suddenly 2 years ago. Feared memories would fade with time.

Gathered all memories with my friend in Inventory. Photos together, chat screenshots, handwritten notes... In [Log](/inventory/manual/en/#-log-system), I wrote about moments together. "This photo from graduation trip", "This was when friend bought lunch with first paycheck"...

On anniversaries, I open these records. I think friend would say "Thanks for remembering me like this." Memories don't fade if you record them.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Recording neighborhood before it's gone</span>
<span class="card-persona">Daniel (42, Local Resident)</span>
</summary>
<div class="card-content">

Redevelopment started and 30-year-old shops are closing one by one. The diner lady, the stationery shop owner, the laundry lady...

Started recording them in Inventory before they disappear. Shop photos, owner interviews, recommended items... In [Log](/inventory/manual/en/#-log-system), my own memories with each place.

When I showed neighbors, they cried. "Thank you for keeping this." Inventory became our neighborhood's history.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Answering my child's endless questions</span>
<span class="card-persona">Seyeon (37, Mom of 6-year-old)</span>
</summary>
<div class="card-content">

My child asks "Why?" constantly. "Why is the sky blue?", "Why do dogs bark?", "Why does mommy work?"

I register each question in Inventory and record my answers in [Log](/inventory/manual/en/#-log-system). When the same question comes up later, I show the old entry: "Remember what mommy said?"

My child is amazed. "Wow, I asked that?" A history of curiosity is building. What will they feel reading this when they're older?

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Cooking failures are growth records</span>
<span class="card-persona">Junyoung (25, Cooking Beginner)</span>
</summary>
<div class="card-content">

Started learning to cook but everything failed at first. Burnt, too salty, too tough...

I thought about only posting successes, but decided to upload failures too. In [Log](/inventory/manual/en/#-log-system), I analyzed "why it failed."

Three months later, I compared my first disaster curry with today's curry. Night and day difference! The failure records are actually the most satisfying. "Look how much I've grown."

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Daily gratitude practice</span>
<span class="card-persona">Seohyun (48, Meditation Practitioner)</span>
</summary>
<div class="card-content">

After experiencing depression, I was advised to keep a gratitude journal. At first, I felt I had nothing to write.

Created 'Today's Gratitude' in Inventory. Every night, I write at least three things, however small. "Weather was nice today", "Coffee was delicious", "Bus came right away"...

A year later, 365 gratitudes accumulated. On hard days, reading these reminds me the world isn't so bad.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Keeping my parents' voices</span>
<span class="card-persona">Hojin (38, Living Away From Home)</span>
</summary>
<div class="card-content">

Working in the city, can't visit my elderly parents in the countryside often. It hurts to see them aging.

With permission, I record our phone calls and save them in Inventory. In [Log](/inventory/manual/en/#-log-system), I note what we talked about. "Today mom talked about neighborhood flowers", "Dad said take care of my health"...

When I miss them, I play the recordings. Their voices warm my heart. Knowing these voices will become even more precious someday.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Creating my bucket list</span>
<span class="card-persona">Subin (30, Dreamer)</span>
</summary>
<div class="card-content">

Turning 30 made me seriously think "What do I want to do with my life?"

Created a bucket list in Inventory. "See northern lights", "Complete a marathon", "Write a book"... Each accomplishment gets photos, [Log](/inventory/manual/en/#-log-system) entries, and a [Stamp](/inventory/manual/en/#-stamp-system).

Completed 7 out of 50. Still 43 to go, but no rush. I have time, and these records prove it.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Preserving my child's artwork</span>
<span class="card-persona">Yujeong (35, Mom of 4-year-old)</span>
</summary>
<div class="card-content">

My child's drawings are piling up. All precious, but paper keeps accumulating.

I photograph each drawing and upload to Inventory. In [Log](/inventory/manual/en/#-log-system), I record their explanation: "This is daddy. This is a dinosaur." Their imagination captured as-is.

Years later, we'll see how their drawing evolved, how their imagination changed. Paper can be discarded, but records last forever.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Emotional Experience</span>
<span class="card-title">Records to view when missing home abroad</span>
<span class="card-persona">Minjae (27, Study Abroad Student)</span>
</summary>
<div class="card-content">

About to study abroad. Won't be able to come home for over 2 years, so preparing for homesickness in advance.

Recording frequent places, favorite foods, familiar streets... all in Inventory. In [Log](/inventory/manual/en/#-log-system), writing "what happened here", "how I felt eating this"...

When I'm struggling overseas, I'll look at these records. Capturing the smells, tastes, and air of home. A virtual Korea trip package just for me.

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">Stories - How Inventory Changed Lives</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">The lost bag that was found</span>
<span class="card-persona">Seunghyun (29, Traveler)</span>
</summary>
<div class="card-content">

I was backpacking through Europe. Lost my bag on the Paris metro. Passport, cards, camera... everything was inside.

Fortunately, I had registered all bag contents in Inventory. At the police station, when asked "What was in the bag?", I searched by [Keywords](/inventory/manual/en/#-keywords) and showed a complete list. Even my passport number was recorded.

Two weeks later, the bag was found! Police said: "The detailed list made verification easy." Inventory was my savior.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Reunited after 10 years</span>
<span class="card-persona">Jihyun (35, Searcher)</span>
</summary>
<div class="card-content">

A friend transferred schools in high school. Lost contact after. Sometimes I'd think about them.

I was organizing memories with that friend in Inventory. In [Log](/inventory/manual/en/#-log-system), I recorded "photo in our school uniform", "songs they liked", "the last day we met".

One day, I shared these records on social media. "Does anyone know this friend?" Amazingly, a friend of their friend reached out. After 10 years, we reunited. Inventory built the bridge.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Finding treasure in grandfather's belongings</span>
<span class="card-persona">Taewoo (33, Grandson)</span>
</summary>
<div class="card-content">

After grandfather passed, we sorted through his belongings. There were many old items that I almost threw away without knowing their significance.

I photographed everything and registered in Inventory, then asked my father about each item, recording in [Log](/inventory/manual/en/#-log-system). "This was grandfather's first watch", "This was used during the war"...

Then I found an old document. Turns out it was 70-year-old papers related to independence movement recognition! We contacted the government and grandfather's contributions were honored. Would have been buried forever if we'd just thrown it away.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">From hobbyist to collector community leader</span>
<span class="card-persona">Seojun (24, LEGO Collector)</span>
</summary>
<div class="card-content">

I collect LEGO sets. Started just for fun, but it got hard to track what I had. Kept getting confused about my collection.

Started registering all LEGO sets in Inventory. Purchase price, store, build status in [Log](/inventory/manual/en/#-log-system), series and piece count tagged in [Keywords](/inventory/manual/en/#-keywords).

A year later, the LEGO community saw my Inventory and reached out. "You're so organized. Join our group." Now I'm an admin for a 500-member community. Recording habits turned a hobby into something like a profession.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Family cooking competition</span>
<span class="card-persona">Sua (40, Mom of Three)</span>
</summary>
<div class="card-content">

My three kids started showing interest in cooking. So we started a weekly "Family Cook-Off."

Each week's dishes are registered in Inventory, and family members vote and review via [Shared Log](/inventory/manual/en/#-shared-log-vs-solo-log). "Brother's pasta too salty", "Youngest's salad is pretty" - honest reviews accumulate.

After a year, we compiled the records into "Our Family Cookbook." Made it ourselves and gifted to grandparents - they absolutely loved it. Inventory created a family tradition.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Starting a vintage clothing business</span>
<span class="card-persona">Hayoung (26, Vintage Shop Owner)</span>
</summary>
<div class="card-content">

I loved thrifting and collected vintage clothes everywhere. Eventually filled an entire room.

Started organizing by registering in Inventory. Each item's brand, era, condition, source detailed in [Log](/inventory/manual/en/#-log-system). Style, size, season tagged in [Keywords](/inventory/manual/en/#-keywords).

Friends started asking "Are you selling this?" Showing the Inventory screen built trust. Started selling on Instagram, now have a physical vintage shop. Organization became a business.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Pre-move complete organization</span>
<span class="card-persona">Mingyu (45, Emigrant)</span>
</summary>
<div class="card-content">

Decided to emigrate. Had to sort through 20 years of belongings.

Registered everything in the house in Inventory. Categorized as: throw away, sell, take, gift - tagged with [Keywords](/inventory/manual/en/#-keywords). Items with memories got their stories in [Log](/inventory/manual/en/#-log-system).

Finished 3 months of organizing in 2 weeks. Second-hand sales went smoothly, and meaningful items I could let go of easily with photos as keepsakes. Objects can be discarded, but records come with me.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Passing down my first instrument</span>
<span class="card-persona">Yeeun (22, Music Student)</span>
</summary>
<div class="card-content">

Decided to pass my first violin to my high school sibling. It was hard to let go of an instrument I'd played for 10 years.

I recorded all the violin's stories in Inventory. First purchase day, first recital, repair dates... Every moment captured in [Log](/inventory/manual/en/#-log-system).

When I [Transferred](/inventory/manual/en/#-transfer-feature) the instrument with the Inventory records to my sibling, I said "Everything this violin has played is written here." They were moved to tears. I passed down not just the instrument, but its history.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Records of adopting a rescue dog</span>
<span class="card-persona">Sejin (30, Pet Parent)</span>
</summary>
<div class="card-content">

Adopted 'Luna' from a shelter. She has no known past, so I wanted to document her future even better.

From day one, I recorded everything about Luna in Inventory. First day home, first tail wag, first nap spot... Daily diary entries in [Log](/inventory/manual/en/#-log-system).

On our first anniversary, I made a video from these records called "Luna's First Year." Shared with the community and many were touched, some even decided to adopt rescues. Records saved another life.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">History of the oldest heirloom</span>
<span class="card-persona">Jihoon (55, Watch Collector)</span>
</summary>
<div class="card-content">

I have a 1960s Omega watch inherited from my father. A family treasure, but I'm the only one who knows its history now.

Registered the watch in Inventory and recorded all of father's stories in [Log](/inventory/manual/en/#-log-system). "Bought with first paycheck", "Wore it the day he met mother", "Checked the time when elder brother was born"...

When I pass this watch to my son, I'll [Transfer](/inventory/manual/en/#-transfer-feature) the Inventory too. The value of objects comes from their history. Inventory will connect three generations.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Records that became a startup idea</span>
<span class="card-persona">Dohee (28, Entrepreneur)</span>
</summary>
<div class="card-content">

Whenever I noticed inconveniences in daily life, I recorded them in Inventory. "Wish there was something like this" kind of ideas.

Three years of ideas totaled 200. When sorted by [Keywords](/inventory/manual/en/#-keywords), patterns emerged. Many ideas around 'single households', 'pets', 'health'.

Executed one idea and started an automatic pet feeder startup for singles. Showed investors three years of records and they said "You've thought about this deeply" and decided to invest. Records build trust.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Graduation project from start to finish</span>
<span class="card-persona">Yujin (23, Design Student)</span>
</summary>
<div class="card-content">

Started a year-long graduation project. Decided to document the entire process from idea to final product in Inventory.

Every day, sketches, prototypes, feedback, revisions logged in [Log](/inventory/manual/en/#-log-system). Failed attempts too. Why they failed, what I learned.

At the graduation exhibition, I displayed these records alongside the project. The judge said "Seeing the process makes it more moving." Inventory proved that process matters as much as result.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Journey to marathon finish line</span>
<span class="card-persona">Sanghun (38, Running Beginner)</span>
</summary>
<div class="card-content">

A full marathon was on my bucket list. Could I really do it, having never exercised?

Started recording from day one when I couldn't even run 1km. Distance, time, body condition logged in [Log](/inventory/manual/en/#-log-system). Training schedule managed with [Date Alarms](/inventory/manual/en/#-date-alarm).

One year later, marathon completed! At the finish line, I scrolled through my records. 1km → 5km → 10km → Half → Full... Tears came. "I struggled with 1km and made it here." Records don't lie.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Parents' golden anniversary gift project</span>
<span class="card-persona">Seungah (32, Youngest Daughter)</span>
</summary>
<div class="card-content">

My parents' 50th wedding anniversary was coming up. Siblings decided to prepare something special.

We each gathered memories with our parents in Inventory. Photos, videos, stories via [Shared Log](/inventory/manual/en/#-shared-log-vs-solo-log). Four of us recording together. From childhood photos to recent family trips.

On the anniversary, we showed them a video edited from these records. 50 years captured in one screen. Both parents cried. They still say it was the best gift ever.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">1000 cups before opening a cafe</span>
<span class="card-persona">Minseok (34, Aspiring Cafe Owner)</span>
</summary>
<div class="card-content">

I wanted to open a cafe. Started a "1000 cups project" before the opening.

At every cafe, I registered the coffee in Inventory. Beans, roasting, brewing method, atmosphere, price... detailed in [Log](/inventory/manual/en/#-log-system). Categorized with [Keywords](/inventory/manual/en/#-keywords).

Over 2 years, recorded 1000 cups and developed my taste. Analyzed the data to decide on menu and concept. After opening, when I show customers these records, they say "You're really serious about this." 1000 cups of sincerity in the cafe.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Habit records that changed my life</span>
<span class="card-persona">Hyunwoo (27, Self-Improver)</span>
</summary>
<div class="card-content">

Weak-willed, I never kept New Year's resolutions.

This year was different. Daily habits - 6 AM wake-up, 30 minutes reading, 1 hour exercise - registered in Inventory with [Stamps](/inventory/manual/en/#-stamp-system) for each completion.

Started with lots of empty spaces. But seeing filled stamps made me want more. Six months later, it became habit. Opening Inventory shows exactly how much I've changed. Records become willpower.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Ceramic restoration project</span>
<span class="card-persona">Miok (60, Traditional Craftsperson)</span>
</summary>
<div class="card-content">

I restore broken ceramics. Piecing together hundreds of fragments requires meticulous records.

Each fragment registered in Inventory, matching process logged in [Log](/inventory/manual/en/#-log-system). "Today pieces 23 and 47 matched", "This section has a missing piece"...

When a 3-year restoration finished, every step was in Inventory. The museum said "We'd like to exhibit the restoration process too." The process became art alongside the finished piece.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">800km Camino de Santiago</span>
<span class="card-persona">Minsu (45, Pilgrim)</span>
</summary>
<div class="card-content">

At a life crossroads, decided to walk the Camino de Santiago.

Daily distance, people met, emotions felt - all recorded in Inventory. Diary in [Log](/inventory/manual/en/#-log-system), [Stamps](/inventory/manual/en/#-stamp-system) for each credential stamp. 800km journey captured completely.

Back home, I made these records into a book. Self-published at first, but response was so good it got formally published. Without Inventory, this book wouldn't exist.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Family health records</span>
<span class="card-persona">Eunsook (52, Family Health Guardian)</span>
</summary>
<div class="card-content">

I manage health for all 4 family members. Hospital visits require records, but they were scattered everywhere.

Created [Partitions](/inventory/manual/en/#-partition-feature) for each family member in Inventory. Hospital visits, test results, medications - all in [Log](/inventory/manual/en/#-log-system). Next checkups managed with [Date Alarms](/inventory/manual/en/#-date-alarm).

Doctors are impressed. "Never seen such organized patient records." 10 years of family health history built up. Inventory is like our family physician.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Story</span>
<span class="card-title">Wedding planning made easy</span>
<span class="card-persona">Jihye (29, Bride-to-be)</span>
</summary>
<div class="card-content">

Wedding planning was overwhelming. Venues, catering, flowers, invites... hundreds of decisions to make.

Registered every vendor and option in Inventory. [Partitions](/inventory/manual/en/#-partition-feature) for each category. Quotes, pros/cons, visit notes in [Log](/inventory/manual/en/#-log-system). Deadlines tracked with [Date Alarms](/inventory/manual/en/#-date-alarm).

The wedding was perfect because nothing was forgotten. The wedding planner even asked how I was so organized. Now I share my Inventory template with engaged friends!

</div>
</details>

</div>
</div>

<div class="category-section">
<h2 class="category-title">Creative Uses - Unexpected Ways to Use Inventory</h2>

<div class="usecase-grid">

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Recording my dreams</span>
<span class="card-persona">Sumin (24, Psychology Student)</span>
</summary>
<div class="card-content">

Analyzing dreams reveals the subconscious. So every morning, I record remembered dreams in Inventory.

I sketch dream scenes as images and upload, detail contents in [Log](/inventory/manual/en/#-log-system). Tag themes like "water", "falling", "exams" in [Keywords](/inventory/manual/en/#-keywords).

Six months of analysis showed patterns. I dream about "falling" when stressed. Found a way to dialogue with my subconscious.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Stargazing log</span>
<span class="card-persona">Haneul (31, Amateur Astronomer)</span>
</summary>
<div class="card-content">

Night sky observation is my hobby. Wanted to record when I saw what.

Each observation goes in Inventory. Date, location, target (constellation, planet, nebula), weather, equipment... logged in [Log](/inventory/manual/en/#-log-system), photos attached.

Meteor shower seasons get advance alerts via [Date Alarms](/inventory/manual/en/#-date-alarm). Three years of records became experience data for "when and where to observe best."

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Perfume notes collection</span>
<span class="card-persona">Sujin (29, Fragrance Enthusiast)</span>
</summary>
<div class="card-content">

I collect perfumes but found it hard to remember each one's characteristics.

Each perfume registered with notes (top, middle, base), longevity, sillage, suitable seasons/occasions in [Log](/inventory/manual/en/#-log-system). Tagged with [Keywords](/inventory/manual/en/#-keywords) like "woody", "floral", "date night".

When friends ask for recommendations, I just search and answer. Built my own perfume encyclopedia!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Daily sky photo project</span>
<span class="card-persona">Yuri (26, Photographer)</span>
</summary>
<div class="card-content">

Started a project: photograph the sky from the same spot every day for a year.

Daily sky photos uploaded to Inventory with weather, mood, what happened that day in [Log](/inventory/manual/en/#-log-system). Shooting dates managed with [Start Date](/inventory/manual/en/#-start-date--expiry).

365 photos became a timelapse video. Changing seasons in the sky alongside my year. Posted on Instagram and got over 100k views.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">TRPG character management</span>
<span class="card-persona">Minhyuk (22, Gamer)</span>
</summary>
<div class="card-content">

I play tabletop RPGs but managing character sheets and items is complex.

Characters and inventory items registered in Inventory. Session events, level-ups, new skills in [Log](/inventory/manual/en/#-log-system). [Partitions](/inventory/manual/en/#-partition-feature) by campaign.

Connected with party members via [Shared Log](/inventory/manual/en/#-shared-log-vs-solo-log), everyone can see each other's character info. Even the game master says "This makes running sessions easier!"

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Custom vocabulary builder</span>
<span class="card-persona">Jeonga (28, Japanese Learner)</span>
</summary>
<div class="card-content">

Studying Japanese but vocabulary apps didn't suit me. Wanted to organize my own way.

Unknown words registered in Inventory with example sentences and nuance explanations in [Log](/inventory/manual/en/#-log-system). Tagged with [Keywords](/inventory/manual/en/#-keywords) like "N1", "business", "heard in drama".

Memorized words get [Stamps](/inventory/manual/en/#-stamp-system). Only review unstamped ones. Efficient! Passed JLPT N1!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Capsule wardrobe management</span>
<span class="card-persona">Seoyeon (27, Minimalist)</span>
</summary>
<div class="card-content">

Tried the 'capsule wardrobe' challenge - 33 pieces for 3 months. Clear out the closet, keep only essentials!

The 33 selected pieces registered in Inventory. Each wear logged in [Log](/inventory/manual/en/#-log-system). After 3 months, analysis shows what I actually wear vs. what I don't.

Unworn items get donated, empty spots filled only with essentials. Inventory helps maintain minimal life.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Art gallery curating</span>
<span class="card-persona">Yejin (34, Art Enthusiast)</span>
</summary>
<div class="card-content">

I visit museums often but forget the artworks I've seen.

Every exhibition, I register pieces that moved me. Artist, year, technique in [Log](/inventory/manual/en/#-log-system), plus "why I liked it." Genre, era, emotion tagged in [Keywords](/inventory/manual/en/#-keywords).

Five years of records show my taste. Impressionism, abstract, blue tones... Now I use this data to choose exhibitions.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Smart business card management</span>
<span class="card-persona">Jongmin (42, Sales)</span>
</summary>
<div class="card-content">

Hundreds of business cards piled up, can't remember who's who.

Photograph cards immediately and register in Inventory. In [Log](/inventory/manual/en/#-log-system), note "where we met", "what we discussed." Industry, interests, collaboration potential in [Keywords](/inventory/manual/en/#-keywords).

"That IT person I met before" - instant search. When reconnecting, mentioning our previous conversation impresses them!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Board game collection manager</span>
<span class="card-persona">Jaewon (29, Board Game Enthusiast)</span>
</summary>
<div class="card-content">

Own 50+ board games but can't remember what I have. When friends come over, I struggle to decide what to play.

All games registered with player count, duration, genre, difficulty in [Keywords](/inventory/manual/en/#-keywords). Play reviews in [Log](/inventory/manual/en/#-log-system).

When friends visit: "4 players, 1 hour, light game" search gives instant recommendations. They call me the "board game sommelier!"

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Skin condition diary</span>
<span class="card-persona">Minji (25, Sensitive Skin)</span>
</summary>
<div class="card-content">

My skin is sensitive - certain foods or products cause immediate breakouts. Wanted to find the triggers.

Daily skin photos in Inventory. That day's food, products used, stress level, sleep hours in [Log](/inventory/manual/en/#-log-system).

Three months of data analysis revealed patterns. Breakouts follow dairy! The dermatologist saw my records and said "This is why documentation matters."

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Camping gear checklist</span>
<span class="card-persona">Hyungi (36, Camper)</span>
</summary>
<div class="card-content">

Always forget something when camping. Once went without a lantern, once without utensils...

All camping gear registered with [Partitions](/inventory/manual/en/#-partition-feature) by type. "Overnight", "Backpacking", "Glamping" etc. Each partition has only necessary items.

Before camping, open the relevant partition and check. No more forgetting! [Log](/inventory/manual/en/#-log-system) notes like "don't need to bring this next time" too.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Tracking recurring headaches</span>
<span class="card-persona">Mira (33, Migraine Sufferer)</span>
</summary>
<div class="card-content">

Frequent migraines, wanted to find causes. Doctor said "Try keeping a diary."

Every headache recorded in Inventory. Intensity, location, duration in [Log](/inventory/manual/en/#-log-system), plus previous day's activities (sleep, diet, exercise, caffeine).

Showed 6 months of data to doctor who found the pattern. Sleep deprivation + caffeine combination was the trigger. Much better now!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Curating my 100 favorite movies</span>
<span class="card-persona">Donghyun (28, Cinephile)</span>
</summary>
<div class="card-content">

Wanted to properly answer "What's your favorite movie?"

Every movie watched registered with 5-point rating and thoughts in [Log](/inventory/manual/en/#-log-system). Genre, director, mood in [Keywords](/inventory/manual/en/#-keywords).

Filtered 5-star ratings to reveal my true favorites. Made a "My 100 Favorite Movies" list. Friends say "Your taste is really defined!"

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">DIY project documentation</span>
<span class="card-persona">Junseo (32, Maker)</span>
</summary>
<div class="card-content">

I make furniture, lights... love DIY but can't remember details when making the same thing again.

Each project registered. Materials, tools, measurements, process photos in [Log](/inventory/manual/en/#-log-system). Failed attempts noted with why they failed.

When friends say "I want to make this too", I show them Inventory to teach. Building my own DIY manual collection!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Book club records</span>
<span class="card-persona">Seoyun (30, Book Club Leader)</span>
</summary>
<div class="card-content">

Lead a monthly book club but lost track of what we'd read and discussed.

Every book registered, members connected via [Shared Log](/inventory/manual/en/#-shared-log-vs-solo-log). Individual impressions in [Log](/inventory/manual/en/#-log-system), meeting discussion notes too.

Two years of records: 24 books documented. When new members join, I can show them "Here's what we've read." It's become our club's history!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Aquarium maintenance log</span>
<span class="card-persona">Minjae (27, Aquarist)</span>
</summary>
<div class="card-content">

Keeping tropical fish is more complex than expected. When did I change water, what chemicals did I add...

Aquarium registered in Inventory. Water change date, temperature, pH, fish condition in [Log](/inventory/manual/en/#-log-system). Illness symptoms and treatment also recorded.

Pattern analysis showed "30% water change every 7 days" is optimal for my tank. Fish are healthier!

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Clothing rental tracking</span>
<span class="card-persona">Sua (26, Fashion Rental User)</span>
</summary>
<div class="card-content">

Using clothing rental service but confused about what I borrowed and return dates.

Borrowed items registered with return date as [Expiry](/inventory/manual/en/#-start-date--expiry). Get alerts 3 days before to prepare returns.

Never paid late fees! [Log](/inventory/manual/en/#-log-system) notes "this was great/not for me" help choose future rentals.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Meditation practice tracking</span>
<span class="card-persona">Subin (35, Meditation Practitioner)</span>
</summary>
<div class="card-content">

Daily meditation but couldn't feel if I was being consistent.

Each session recorded. Time, method (breathing/walking/body scan), focus level in [Log](/inventory/manual/en/#-log-system), [Stamps](/inventory/manual/en/#-stamp-system) added.

The satisfaction of 100 consecutive stamps! Started struggling with 5 minutes, now 30 minutes is easy. Seeing growth keeps me motivated.

</div>
</details>

<details class="usecase-card">
<summary>
<span class="card-type">Creative</span>
<span class="card-title">Interview preparation notes</span>
<span class="card-persona">Eunchae (24, Job Seeker)</span>
</summary>
<div class="card-content">

Job hunting and wanted to organize interview questions and my answers.

Each expected question registered. Answer scripts, actual interview questions, atmosphere in [Log](/inventory/manual/en/#-log-system). Company, position, question type in [Keywords](/inventory/manual/en/#-keywords).

When reaching round 3: "What did I say in round 1?" - instant search. Consistent answers built trust. Got the job!

</div>
</details>

</div>
</div>

---

<div class="share-section">
<h3>Share Your Inventory Use Case</h3>
<p>How are you using Inventory? We'd love to hear your creative ideas!</p>
<a href="/inventory/suggest/en/" class="share-btn">Share Your Story</a>
</div>
