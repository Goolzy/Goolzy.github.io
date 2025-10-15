---
layout: page
title: Team
permalink: /team/
description: 굴지를 구성하는 사람들을 소개합니다.
---

## 굴지 팀

아래는 굴지를 함께 만드는 사람들입니다. 간단한 소개와 연락처를 남깁니다.

<div class="team-grid">
  {% assign members = site.data.team.members %}
  {% for m in members %}
    <div class="team-card">
      <div class="team-avatar">
        {% if m.avatar %}
          <img src="{{ m.avatar | relative_url }}" alt="{{ m.name | escape }}" loading="lazy">
        {% else %}
          <div class="team-initial" aria-hidden="true">{{ m.name | slice: 0, 1 | upcase }}</div>
        {% endif %}
      </div>
      <div class="team-meta">
        <h3 class="team-name">{{ m.name }}</h3>
        {% if m.email %}<p class="team-email"><a href="mailto:{{ m.email }}">{{ m.email }}</a></p>{% endif %}
        {% if m.tagline %}<p class="team-tagline">{{ m.tagline }}</p>{% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<style>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}
.team-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}
.team-avatar { flex: 0 0 auto; width: 88px; height: 88px; position: relative; }
.team-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
.team-initial { width: 100%; height: 100%; display: grid; place-items: center; border-radius: 50%; background: linear-gradient(135deg, #7a5cff, #22c1c3); color: #fff; font-weight: 700; font-size: 28px; }
.team-meta { min-width: 0; }
.team-name { margin: 0 0 0.25rem; font-size: 1.1rem; }
.team-email { margin: 0 0 0.25rem; font-size: 0.95rem; }
.team-email a { text-decoration: none; }
.team-tagline { margin: 0; color: rgba(0,0,0,0.65); }
@media (prefers-color-scheme: dark) {
  .team-card { background: #1f242a; border-color: rgba(255,255,255,0.06); }
  .team-tagline { color: rgba(255,255,255,0.7); }
}
</style>

<div class="intro-actions">
  <a class="btn btn--outline" href="{{ '/feedback/' | relative_url }}">피드백 제안하기</a>
</div>
