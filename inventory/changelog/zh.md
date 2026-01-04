---
layout: inventory
title: 更新日志
permalink: /inventory/changelog/zh/
lang: zh
translations:
  ko: /inventory/changelog/
  en: /inventory/changelog/en/
  ja: /inventory/changelog/ja/
  de: /inventory/changelog/de/
  fr: /inventory/changelog/fr/
  es: /inventory/changelog/es/
  pt: /inventory/changelog/pt/
  zh: /inventory/changelog/zh/
---

## 更新日志

查看 Inventory 应用的更新历史。

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-04</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 共享模板搜索无限滚动
当共享模板搜索结果超过20个时，可以滚动加载更多。
- **无限滚动**：滚动到底部时自动加载下一组20个结果
- **加载指示器**：加载更多时底部显示进度指示器
- **向后兼容**：之前版本的应用仍然显示20个结果

#### 网站更新
- **中文(简体)支持**：网站新增中文(简体)本地化（第8种语言）
- **支持语言展示**：平台下载图标下方显示8种语言的国旗图标

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 拖拽自动滚动
拖拽物品时，屏幕在边缘自动滚动。
- **自动滚动区域**：拖拽到屏幕顶部/底部10%区域时自动滚动
- **基于加速度**：越靠近边缘，滚动速度越快
- **触觉反馈**：进入滚动区域时有轻微振动提示
- **跨分区导航**：快速浏览大量物品或多个分区

#### 滚动导航
在详情视图屏幕中快速跳转到顶部或底部。
- **导航按钮**：当评论较多时，搜索栏旁边会出现滚动按钮
- **基于位置显示**：在顶部时只显示底部按钮，在底部时只显示顶部按钮
- **新拟态设计**：按钮样式与应用设计一致

#### 页面切换动画恢复
底部导航栏和接收屏幕的翻转动画已恢复。
- **3D翻转效果**：页面切换时沿Y轴180度旋转
- **日志/商店页面**：应用翻转动画
- **接收屏幕**：从邮箱按钮和通知深度链接应用翻转动画

#### UI设计统一
发送、接收和商店屏幕已应用新拟态设计，统一了整个应用。
- **发送/接收屏幕**：卡片和对话框应用新拟态阴影
- **商店屏幕**：标签按钮有发光效果，产品卡片采用新拟态风格
- **输入框设计**：内凹样式清楚地区分输入区域

#### 日志重新排序动画
当物品因新评论移动到日志列表顶部时，应用平滑动画。
- **缩放效果**：物品短暂放大，重新定位后恢复正常大小
- **顺序处理**：同时移动多个物品时按顺序播放动画
- **视觉强调**：清楚地指示哪些物品是最新的

#### 数据库稳定性
已解决应用更新期间可能发生的数据库兼容性问题。
- **自动恢复**：版本不匹配时自动重新创建数据库
- **数据保留**：由于自动服务器同步，不会丢失数据
- **所有平台**：iOS、Android、macOS和Windows应用相同修复

#### 密码锁改进
密码保护物品的安全性和可用性已显著提升。
- **模糊遮罩**：进入锁定物品时内容完全隐藏，增强安全性
- **新拟态设计**：设置/解锁密码对话框现在使用新拟态样式
- **16位显示**：小圆圈（共16个）显示密码输入状态
- **两行输入**：在同一屏幕上设置密码和确认

#### 推送通知设置改进
推送通知设置屏幕已按类别重新组织，管理更方便。
- **7个类别**：分为交易、日志、到期、反应、关键词、分享和系统
- **分组开关**：一次性开启或关闭整个类别
- **折叠/展开**：手风琴UI允许只查看所需类别
- **详细通知**：添加了交易接受/拒绝、反应、关键词、分享到期/举报和系统通知
- **新拟态设计**：个别通知项目应用新拟态样式

#### 声音设置改进
静音按钮现在采用新拟态设计，直观地表示按下状态。
- **按压效果**：静音时按钮显示为向内按下
- **新拟态阴影**：默认状态显示凸起阴影，按下状态显示凹陷阴影

#### 日志加载性能改进
共享日志加载速度已提升。
- **缓存优先加载**：之前查看的日志立即从缓存显示
- **节省数据**：重新访问时不请求服务器，使用本地数据
- **实时新评论**：即使使用缓存，新评论也会实时接收

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 纸张共享日志
仅使用纸张创建共享日志文档，无需印章。
- **选择2张或更多纸张** → 出现"创建新物品（共享日志）"菜单
- **选择1张纸张** → 出现"创建新物品（私人日志）"菜单
- 创建的文档共享同一评论室
- 将文档发送给不同的人并相互聊天

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 徽章编辑功能
编辑已刻印徽章的图片和关键词。
- **编辑菜单**：选择已刻印徽章时出现"编辑徽章"菜单
- **更改图片**：用新图片替换徽章图片
- **关键词管理**：添加、删除或修改5种类型的关键词

#### 图片性能优化
网络图片加载速度已显著提升。
- **本地缓存**：加载后图片保存到本地，即时显示
- **徽章图片同步**：徽章图片更改立即反映到所有日志

#### 最近收件人自动完成
在发送屏幕上快速选择最近的收件人。
- **自动完成列表**：聚焦输入框时显示最多30个最近收件人的下拉列表
- **快速选择**：从列表中选择收件人时自动搜索
- **重新搜索**：用X按钮清除选择以搜索其他收件人
- **本地存储**：发送成功后自动保存收件人信息

#### 发送限制改进
已装备的徽章和共享印章现在被限制发送。
- **已装备徽章**：取消装备徽章后才能发送
- **共享印章**：撤销共享后才能发送印章
- **详细指南**：显示解释限制原因的具体消息

#### 反应系统
用情感表达对物品做出反应。
- **12种反应**：包括点赞、喜爱、最佳、恭喜等各种情感表达
- **反应切换**：再次点击选定的反应可取消
- **日志记录**：系统日志记录反应选择或取消的时间
- **多语言支持**：反应名称以用户语言显示

#### 搜索功能改进
实时搜索已扩展到包括物品名称和关键词。
- **物品名称搜索**：按文档标题、印章描述或徽章域名搜索
- **关键词搜索**：按保存在印章和徽章中的关键词搜索
- **标签搜索**：按印章模板标签搜索

#### 应用内通知改进
实时吐司通知已改进。
- **发送者徽章显示**：发送者的徽章图片内嵌显示在通知中
- **灵动岛风格**：受iOS灵动岛风格启发的流畅吐司动画
- **实时检测**：基于ID+时间戳准确检测新通知和更新通知

#### 错误修复
- **文档详情UI稳定性**：修复了共享/独立日志在屏幕边界时搜索栏和筛选器抖动的问题
- **滚动抖动修复**：解决了日志较少的文档/印章向上滚动时屏幕闪烁的问题
- **顶部滚动修复**：解决了有日志的物品无法通过滚动到达作者信息的问题
- **反应日志格式改进**：现在同时显示表情符号和名称
- **用户名显示修复**：佩戴徽章时现在正确显示域名
- **共享日志首次通知修复**：解决了共享日志首次吐司通知不显示的问题
- **推送通知图片修复**：推送通知现在优先显示文档图片而非徽章图片

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 自动多语言翻译
文档、印章和日志内容自动翻译成您的语言。
- **自动翻译**：查看文档、印章和日志时自动翻译成用户语言
- **支持的语言**：韩语、英语、日语、西班牙语、法语、德语、葡萄牙语
- **原文切换**：用[显示原文]按钮在原文和翻译之间切换
- **翻译缓存**：服务器和本地缓存防止重复翻译请求
- **语言特定缓存**：切换语言时立即使用缓存的翻译

#### 教程系统
添加了分步教程来指导您使用应用。
- **物品栏屏幕**：物品选择、分区移动、底部菜单使用（8步）
- **发送/接收屏幕**：收件人输入、二维码扫描、转移/接收方法
- **商店屏幕**：产品类别浏览和购买方法
- **个人资料屏幕**：账户信息和设置
- **设置屏幕**：应用设置和主题更改
- **印章模板**：完整的模板创建过程（9步）
- **搜索功能**：筛选器使用和搜索词保存
- 仅在首次使用时显示；可在设置中再次查看

#### 日志性能优化
共享/独立日志的加载速度和数据使用已显著改进。
- **快速加载**：首先仅加载最新的100条评论
- **无限滚动**：滚动一次加载50条更早的评论
- **本地缓存**：重新访问时使用缓存即时显示
- **实时同步**：高效地仅接收新评论
- **节省数据**：防止不必要的重复下载

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 媒体链接卡片
日志中输入的URL自动显示为**富媒体卡片**。
- **YouTube**：缩略图 + 标题 + 频道名
- **Spotify**：专辑封面 + 标题 + 艺术家
- **Google Drive**：文件缩略图 + 文件名（公开文件）
- **Dropbox**：图标 + 文件名
- **OneDrive**：图标 + 服务名
- **网页**：预览图 + 页面标题
- 点击在外部应用/浏览器中打开
- 长按复制URL到剪贴板

#### 共享模板搜索改进
- **纸张检查**：克隆按钮显示剩余纸张数量（纸张:10）
- **需要纸张**：没有纸张时禁用克隆
- **新拟态设计**：搜索屏幕现在使用新拟态UI风格

#### 图片编辑器特效系统改进
特殊效果选择UI已简化。
- **单选**：一次选择5种效果中的一种
- **效果列表**：无 / 移除背景 / 虚化 / 泛光 / 黑白
- **平滑过渡**：效果处理期间显示进度指示器
- **性能提升**：泛光/黑白滤镜在后台处理

#### 性能与稳定性
应用内部结构已优化。
- **查询优化**：并行处理使剪辑/筛选器加载更快
- **代码清理**：删除了12个未使用的代码模块
- **依赖清理**：删除了7个未使用的库
- **资源清理**：删除了未使用的字体/图片（减少约16MB）

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 剪辑功能
将多个文档捆绑在一起以便于管理。
- **创建剪辑**：选择2个以上文档并点击"剪辑在一起"
- **剪辑图标**：被剪辑的文档在右上角显示剪辑图标
- **剪辑详情**：通过物品详情屏幕的"剪辑信息"按钮查看内部物品
- **重新排序**：拖拽以重新排序剪辑内的物品（封面除外）
- **排除物品**：从剪辑中移除特定物品（封面除外）
- **解除剪辑**：将剪辑完全分解为单独的文档
- **自动分解**：当剪辑减少到1个物品时自动分解
- **转移**：剪辑作为一个整体发送/接收

#### 共享模板搜索改进
共享模板搜索屏幕的可用性已增强。
- **内嵌卡片**：搜索结果以紧凑列表格式显示
- **完整图片显示**：缩略图以原始宽高比显示，不裁剪
- **扩展详情**：在模板详情表中查看内容、关键词和到期日期
- **关键词预览**：查看为模板设置的默认关键词
- **到期日期**：检查共享模板的到期时间

#### 密码解锁改进
- 输入正确密码现在**永久解锁**文档
- 之前：仅查看，锁定保持 → 现在：完全解锁

#### 错误修复
- 修复了接收屏幕中剪辑物品被单独计数的问题
- 修复了导航栏接收徽章包含剪辑内部物品的问题
- 修复了徽章（名牌）退款/删除时未取消装备的问题
- 修复了徽章删除后域名仍被占用的问题

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 共享日志未读指示器
当共享日志中添加新评论时，物品边框会**脉冲**。
- 轻松发现物品栏中未读的共享日志
- 打开文档时脉冲停止
- 已读状态跨所有设备同步

#### 印章使用指南
当您选择已刻印的印章时，可用纸张会**脉冲**以指导您。
- 改进了模板复制的用户体验
- 直观的下一步指导

#### 分区改进
- **折叠/展开**：用箭头按钮切换分区（▼/▲）
- **全选**：点击分区标题以选择/取消选择所有物品
- 选择状态指示器（○/◐/●）
- 拖放到折叠的分区

#### 商店便利性
简化了连续购买相同物品的结账流程。
- 在上次购买后10分钟内跳过确认对话框
- 更快的批量购买

#### UI改进
- 使用新的标题字体提高可读性
- 印章卡片在背景显示模板预览（33%不透明度）
- 徽章卡片显示刻印图片预览
- 底部菜单显示可用操作数量徽章
- 黑色墨水主题颜色调整（提高文字可读性）
- 优化产品图片（减小尺寸，加快加载）

#### 错误修复
- 修复了自己评论的脉冲效果
- 修复了手势导航时输入框被裁剪的问题
- 修复了折叠分区时出现灰色屏幕的问题
- 改进了推送通知权限处理

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 文档锁定功能
- 为文档设置数字密码（最多16位）
- 锁定的文档显示灰度 + 锁定图标
- 用正确密码解锁（一次性）
- 物品转移后锁定状态保持
- 锁定的文档从搜索结果中排除

#### 快速输入系统
写日志时通过 `+` 按钮轻松输入特殊信息：
- **关键词:值** - 通用关键词卡片
- **日期提醒** - 日期卡片（自动D-Day计算，提醒设置）
- **电话号码** - 国家特定自动格式化
- **位置/地址** - 地图应用集成
- **金额** - 自动显示货币符号

#### 特殊卡片操作
**长按**日志中的特殊信息以激活附加功能：
- **日期卡片**：设置/取消提醒
- **电话卡片**：直接拨打 / 复制到剪贴板
- **位置卡片**：在地图应用中打开 / 复制到剪贴板
- **金额卡片**：复制到剪贴板

#### UI改进
- 筛选器标签新拟态设计
- 搜索栏滚动改进
- 物品详情屏幕AppBar显示物品名称

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**首个正式发布版本**

#### 纸张系统
- 引入创建文档所需的货币系统
- 新注册时赠送10张纸张
- 每关联一个Google/Apple账户额外赠送10张
- 纸张可在商店购买

#### 文档创建
- 使用纸张创建文档
- 添加标题、内容和图片
- 设置开始日期/到期日期选项

#### 徽章系统
- 独特的域名刻印功能
- 刻印的域名用作用户身份
- 通过装备/取消装备进行激活管理
- 128x128图片附件选项

#### 印章系统
- 模板创建功能
- 独立日志/共享日志模式选择
- 模板复制功能
- 开始日期/到期日期设置

#### 日志功能
- 在文档/印章上记录日志
- 独立日志：仅个人记录
- 共享日志：与复制所有者共享
- 支持键:值格式信息卡片

#### 墨水系统
- 应用主题颜色更改功能
- 黑色墨水、金色墨水

#### 物品转移
- 通过电子邮件地址发送物品
- 通过二维码扫描自动填充电子邮件
- 接受或退回收到的物品
- 一次发送多个物品

#### 分区
- 物品分组功能
- 设备特定本地存储

#### 搜索功能
- 实时搜索筛选
- 将搜索词保存为筛选器
- 自动保存最近搜索（最多5个）

#### 商店
- 购买纸张、印章、徽章、墨水
- 所有平台可用

#### 账户
- Google、Apple、电子邮件登录
- 通过关联社交账户获得额外纸张

#### 多语言支持
- 한국어、English、日本語
- Deutsch、Français、Español、Português

</div>
</details>

<div class="changelog-footer">
<strong>提出新功能建议！</strong>在<a href="/inventory/suggest/zh/">建议</a>页面分享您的想法，我们将积极审核。
</div>

<style>
/* Version Container */
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

/* Summary Header */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* Arrow Icon */
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

/* Version Title */
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

/* Copy Button */
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

/* Version Content */
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

/* Footer */
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
