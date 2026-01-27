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
  ar: /inventory/changelog/ar/
  hi: /inventory/changelog/hi/
  id: /inventory/changelog/id/
  ru: /inventory/changelog/ru/
  it: /inventory/changelog/it/
  tr: /inventory/changelog/tr/
  vi: /inventory/changelog/vi/
  th: /inventory/changelog/th/
  pl: /inventory/changelog/pl/
---

## 更新日志

查看 Inventory 应用的更新历史。

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.3.0 <small>2026-01-27</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 商店物品布局改进
商店物品布局已改进，在移动屏幕上更易查看。
- **3行结构**: 物品信息和价格分离，即使在窄屏幕上也能完整显示而不被截断
- **价格右对齐**: 价格信息整齐地放置在单独一行并右对齐
- **折扣标签充足空间**: 即使有折扣徽章，物品名称和描述也能完整显示

#### 可展开的个人资料头部
主页顶部的个人资料区域已改进为抽屉式面板。
- **拖动展开**: 向下拖动把手栏或点击用户名以展开个人资料面板
- **统一面板**: 头部和个人资料内容（个人资料卡、二维码、API信息）整合为一个面板
- **流畅动画**: 展开/收起时具有自然的动画效果
- **固定主要内容**: 展开个人资料时，库存网格保持在原位

#### 口袋品牌重塑
物品分类单位的名称已从"分区"更改为"口袋"。
- **直观的名称**: 更好地传达了像口袋一样存放物品的空间概念
- **一致的UI**: 整个应用程序统一使用"口袋"术语
- **多语言支持**: 针对各种语言进行了适当翻译，包括韩语(포켓)、英语(Pocket)、日语(ポケット)、中文(口袋)

#### 现有数据自动迁移
现有的"分区"数据将自动转换为"口袋"。
- **无损迁移**: 您现有的分区和物品将完全保留
- **自动处理**: 更新应用时自动进行迁移
- **无缝过渡**: 用户无需任何操作，更新后即可继续使用

#### 操作快速拨号FAB
选择物品时，可用操作以浮动按钮形式显示。
- **浮动操作按钮**: 选择物品时，右下角出现闪电图标FAB
- **快速拨号**: 点击FAB向上展开，显示可用的操作按钮
- **操作数量徽章**: FAB上以徽章形式显示当前可用的操作数量
- **流畅动画**: FAB出现/消失的缩放动画，操作数量变化时的弹跳效果

#### 物品选择界面改进
选中物品的视觉反馈已得到改进。
- **外部轮廓**: 选择边框显示在图像外部，保持原始大小
- **主色边框**: 选择轮廓统一使用主题主色
- **重叠边框**: 选择相邻物品时，边框会重叠以清楚显示选择区域
- **移除晃动效果**: 移除选中物品的晃动效果，界面更加简洁

#### 新日志通知改进
有新日志的物品通知方式已更改。
- **晃动效果**: 用微小晃动代替闪烁边框来显示新日志
- **直观识别**: 与选择轮廓区分开来，更容易注意到通知

#### 邮箱快捷方式
现在可以通过底部导航栏直接访问邮箱（接收屏幕）。
- **快速访问**: 直接从主屏幕查看收到的物品
- **直观图标**: 邮件图标代表邮箱功能

#### 默认口袋
第一个口袋现在作为没有标题的默认口袋运行。
- **隐藏标题**: 默认口袋不显示口袋标题，界面更简洁
- **始终在顶部**: 默认口袋始终位于物品栏的最顶部
- **无法折叠**: 默认口袋始终保持展开状态
- **自动接收物品**: 新购买或收到的物品会自动移动到默认口袋

#### 商店界面UI简化
商店界面的标题区域已简化。
- **删除重复标题**: 删除了在Shell模式下与导航栏标题重复的"商店"标题
- **删除描述**: 删除了不必要的描述文字，以专注于商品列表
- **通知置顶**: Firebase通知消息现在显示在标签栏上方的最顶部

#### 物品栏主页开场动画
物品栏主页现在具有与其他标签相同的开场动画。
- **标题滑入**: 应用启动时，配置文件标题从上方平滑滑下
- **标签切换动画**: 从其他标签返回主页时应用相同的动画
- **一致的用户体验**: 所有标签具有相同的开场效果，提供统一的用户体验

#### 设置界面改版
设置界面已重新组织为5个可折叠的分组。
- **5个分组**: 设置项目分为颜色、字体、声音、推送通知和系统
- **展开/折叠**: 点击每个分组即可展开或折叠的手风琴式界面
- **推送通知简化**: 7个类别合并为3个（交易、日志、到期）
- **键盘无障碍**: 方向键支持分组展开/折叠和项目导航

#### 错误修复
- **通知面板显示修复**: 修复了通知在配置文件标题通知面板中无法正确显示的问题。
  - 通知图标和颜色现在根据通知类型正确显示
  - 通知标题和内容现在以多种语言正确显示
  - 通知项目的圆角现在与菜单按钮样式统一
- **商店双标题修复**: 修复了在某些情况下商店界面显示两个标题的问题。
  - 解决了返回主页后选择商店标签时Shell模式状态不一致的问题
  - 通过引用计数方式确保Shell模式状态的稳定管理

#### 共享模板搜索改进
共享模板界面的搜索功能已改进。
- **即时浏览**: 进入界面时立即显示最近共享的模板（无需搜索）
- **菜单名称更新**: "共享模板"更改为"搜索共享模板"，提供更清晰的导航
- **更快加载**: 将3个API调用合并为1个，显著提高界面加载速度
- **标签主题颜色**: 热门/最新标签现在使用应用主题颜色而非固定颜色显示

#### 共享模板详情界面设计改进
共享模板的详情界面已采用拟态设计重新设计。
- **拟态设计**: 与应用整体拟态风格统一
- **关键词双列显示**: 关键词以"标签:值"格式整理为双列布局，提高可读性
- **标签设计改进**: 标签芯片改为拟态风格，增强视觉一致性

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.3 <small>2026-01-21</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 徽章图片加载改进
修复了应用重启时徽章图片闪烁的问题。
- **持久缓存**: 徽章图片URL本地存储，应用重启后仍然保留
- **预加载**: 在启动画面期间预加载所有缓存的徽章图片
- **后台更新**: 当服务器上的徽章图片发生变化时，自动在后台更新

#### 表情符号系统改进
日志表情符号附件功能已改进。
- **缓存恢复修复**: 发送表情符号后重新进入，仍能正常显示
- **气泡大小优化**: 仅含表情符号的消息气泡大小已适当调整
- **选择预览**: 选择表情符号时，在输入框上方显示所选表情符号预览

#### 聊天输入框焦点改进
iPad上的输入框焦点问题已修复。
- **iPad兼容性**: 键盘弹出时，输入框能正常获得焦点
- **稳定输入**: 在所有iOS设备上提供一致的输入体验

#### 通知过滤改进
当前查看的屏幕的通知将被过滤。
- **推送通知过滤**: 当前打开项目的推送通知不会显示
- **应用内通知过滤**: 当前查看项目的应用内通知提示不会显示

#### 通知提示手势
现在可以通过手势与应用内通知提示进行交互。
- **点击导航**: 点击通知可直接跳转到相关文档
- **向上滑动关闭**: 向上滑动可快速关闭通知
- **触觉反馈**: 触摸交互提供触觉反馈

#### 错误修复
- 修复表情符号缓存恢复时emoticonId丢失的问题
- 修复Cloud Functions应用内通知创建错误

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.2 <small>2026-01-10</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 字体大小调整
您可以在设置界面以3个级别调整应用程序的字体大小。
- **3个级别**: 可选择默认(1.0x)、中等(1.3x)或大(1.5x)
- **即时应用**: 更改会立即应用到整个应用程序
- **设置保留**: 即使重新启动应用程序,您的设置也会保留

#### 键盘自动隐藏
在物品详情页面，点击日志输入框以外的区域会自动关闭键盘。
- **点击空白处**: 触摸输入框以外的区域即可关闭键盘
- **iOS支持**: 在iPhone上无需关闭按钮也能方便使用

#### 后台音乐保护
启动应用时，设备正在播放的音乐（Spotify、YouTube Music、Apple Music等）不会被中断。
- **音乐持续播放**：打开应用时，其他应用的后台音乐继续播放
- **音效混音**：应用音效与后台音乐一起播放
- **静音模式联动**：在静音模式下，应用音效也会被静音

#### 搜索历史和筛选功能改进
超级搜索栏现在保存搜索历史，筛选功能也已改进。
- **保存搜索历史**：添加筛选器或搜索共享模板时自动保存搜索词
- **显示最近搜索**：聚焦搜索栏时显示5个最近搜索
- **快速添加筛选器**：点击最近搜索即可立即添加为筛选器
- **按钮界面改进**：添加筛选器和共享模板按钮现在紧凑地排列在一行

#### 口袋管理改进
新的拟态设计口袋名称对话框和拖拽重新排序功能。
- **拟态对话框**：支持深色/浅色模式的美观新设计
- **拖拽重新排序**：长按拖拽图标拖动口袋进行重新排序
- **创建时命名**：创建新口袋时可设置自定义名称

#### 链接预览描述显示
附加到日志的链接卡片现在显示网页描述（OpenGraph 描述）。
- **自动提取描述**：从网页的 og:description 元标签提取描述
- **卡片 UI 改进**：在标题下方最多显示 2 行描述
- **支持平台**：YouTube、Spotify、常见网页等所有链接类型

#### 文本样式标记更改
主要颜色文本标记已从 `<文本>` 更改为 `{文本}`。
- **引用冲突解决**: 防止与使用 `>` 字符的引用功能冲突
- **统一标记体系**: 统一为括号类标记（`{}`、`[]`、`()`）

#### 支持多个引用
日志中可以同时显示多个引用。
- **多引用呈现**: 两个或更多 `>` 引用分别显示为单独的引用小部件
- **保持顺序**: 引用按输入顺序显示

#### 增强邮件发送验证
发送功能中更准确地验证电子邮件地址的有效性。
- **MX 记录验证**: 确认收件人电子邮件域的邮件服务器存在
- **防止错误**: 提前阻止向不存在的域发送尝试

#### 拖动操作改进
选中的物品无需长按即可直接拖动移动。
- **即时拖动**: 选择后立即拖动（无需长按）
- **晃动动画**: 选中的物品会轻微晃动以表示可拖动状态
- **直观操作**: 类似iOS主屏幕编辑模式的熟悉体验

#### Dropbox文件附件
连接Dropbox以将文件附加到您的日志。
- **多种文件类型**: 可附加图片、视频、PDF、音乐和文本文件
- **共享日志支持**: 在共享物品的日志中查看和下载附件
- **内置查看器**: 直接在应用内查看文件（放大图片、翻阅PDF页面、播放视频等）
- **安全存储**: OAuth令牌加密存储在设备的安全存储区

#### 共享日志创建（纸张详情页）
从空白纸张详情页直接创建共享日志项目。
- **单独/共享日志选择**: 可选择创建单个项目或多张纸张的共享日志
- **滑块选择数量**: 使用滑块选择2张到拥有的纸张总数
- **自动纸张选择**: 当前纸张 + 最早购买的纸张自动选择

#### 键盘无障碍
在台式机和外接键盘连接时，可仅使用键盘操作应用，无需鼠标。
- **Dropbox文件选择**：方向键移动文件，Enter选择，Delete删除，ESC关闭
- **文档共享菜单**：Ctrl+1/2/3切换包含项目，左右方向键移动按钮，Enter执行
- **焦点可视化**：键盘选择的项目通过边框和发光效果凸显

#### 错误修复
- **操作徽章计数**: 修复了操作按钮上的徽章未能准确反映所选项目可用操作数量的问题
- **文件附件错误修复**: 修复了从Dropbox附加音乐/文本文件时发生的错误
- **音频滑动播放改进**：在媒体查看器中滑动切换音频文件时，缓存和自动播放现在可以正常工作

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### 反应面板响应式布局
在项目详情查看中，图片反应面板在所有屏幕尺寸下都能正确显示。
- **响应式布局**：即使在狭窄的屏幕上，反应按钮也均匀分布
- **全宽利用**：无论图片大小如何，面板都充分利用屏幕全宽
- **紧凑设计**：通过填充优化减少对照片的遮挡，同时保持触摸区域

#### 共享模板搜索无限滚动
当共享模板搜索结果超过20个时，可以滚动加载更多结果。
- **无限滚动**：滚动到搜索结果底部时自动加载下一组20个
- **加载指示器**：加载更多内容时在底部显示进度指示器
- **向后兼容**：之前版本的应用仍然正常显示20个结果

#### 网站更新
- **中文(简体)支持**：网站新增中文(简体)本地化（第8种语言）
- **支持语言展示**：平台下载图标下方显示8种语言的国旗图标

#### App Store 语言设置
- **iOS/macOS 支持语言**：CFBundleLocalizations 新增中文(zh)

#### 日期选择改进
- **选择范围扩大**：日期选择UI现在支持从1900年开始选择（之前为2000年）

#### 文档共享功能
在文档详情查看中，可以将内容复制到剪贴板或通过电子邮件发送。
- **剪贴板复制**：删除富文本标记后作为纯文本复制
- **电子邮件发送**：以应用HTML格式通过电子邮件发送
- **选择性包含**：仅选择标题、内容、关键词、对话、系统日志中所需的项目
- **剪辑模式支持**：在剪辑详情查看中也可以以相同方式使用

#### 剪辑锁定同步
剪辑中所属物品的锁定状态会同步。
- **批量锁定/解锁**：锁定剪辑代表物品时，所有下属物品也会锁定
- **密码同步**：剪辑内所有物品使用相同的锁定密码

#### 富文本编辑器改进
在创建邮票模板时，文本样式应用变得更加直观。
- **6种基本样式**：粗体、下划线、删除线、主色、辅色、框
- **嵌套样式**：可以按顺序应用多种样式（例：粗体+下划线）
- **简洁编辑**：标记不可见，仅显示样式
- **动态工具栏**：工具栏在选中区域下方自动定位

#### Android 15底部边距修复
修复了Android 15及更高版本设备上系统导航栏遮挡内容的问题。
- **无导航栏的屏幕**：项目详情、文档创建、邮票创建等6个屏幕
- **自动插入处理**：根据系统导航栏区域自动添加底部内边距
- **向后兼容**：Android 14及更低版本的行为保持不变

#### 搜索历史和筛选功能改进
超级搜索栏现在保存搜索历史，筛选功能已得到改进。
- **保存搜索历史**：添加筛选或搜索共享模板时自动保存搜索词
- **显示最近搜索**：聚焦搜索栏时显示5个最近的搜索词
- **快速添加筛选**：点击最近的搜索词可立即将其添加为筛选条件
- **按钮界面改进**：添加筛选和共享模板按钮现在紧凑地排列在一行中

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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
- **跨口袋导航**：快速浏览大量物品或多个口袋

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
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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
- **物品栏屏幕**：物品选择、口袋移动、底部菜单使用（8步）
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
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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

#### 口袋改进
- **折叠/展开**：用箭头按钮切换口袋（▼/▲）
- **全选**：点击口袋标题以选择/取消选择所有物品
- 选择状态指示器（○/◐/●）
- 拖放到折叠的口袋

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
- 修复了折叠口袋时出现灰色屏幕的问题
- 改进了推送通知权限处理

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="复制">
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

#### 口袋
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
