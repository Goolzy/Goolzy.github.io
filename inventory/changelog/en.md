---
layout: inventory
title: Changelog
permalink: /inventory/changelog/en/
lang: en
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

## Changelog

Check out the update history for the Inventory app.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-04</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copy">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Shared Template Search Infinite Scroll
When there are more than 20 shared template search results, you can scroll to load more.
- **Infinite Scroll**: Automatically loads the next 20 results when reaching the bottom
- **Loading Indicator**: Progress indicator shown at the bottom while loading more
- **Backward Compatibility**: Previous app versions still display 20 results as before

#### Homepage Updates
- **Chinese (Simplified) Support**: Added 中文(简体) localization to homepage (8th language)
- **Supported Languages Display**: 8 language flag icons displayed below platform download icons

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

#### Drag Auto-Scroll
When dragging items, the screen automatically scrolls at the edges.
- **Auto-Scroll Zone**: Drag to the top/bottom 10% of the screen to auto-scroll
- **Acceleration-Based**: Scroll speed increases as you get closer to the edge
- **Haptic Feedback**: Light vibration notification when entering the scroll zone
- **Cross-Partition Navigation**: Quickly browse many items or multiple partitions

#### Scroll Navigation
Quickly jump to the top or bottom in the detail view screen.
- **Navigation Buttons**: Scroll buttons appear next to the search bar when there are many comments
- **Position-Based Display**: Only the bottom button shows at top, only the top button shows at bottom
- **Neumorphic Design**: Button style consistent with the app design

#### Page Transition Animation Restored
The flip animation for the bottom navigation bar and receive screen has been restored.
- **3D Flip Effect**: Page transitions with 180-degree rotation on the Y-axis
- **Log/Shop Pages**: Flip animation applied
- **Receive Screen**: Flip animation applied from mailbox button and notification deep links

#### UI Design Unification
Neumorphic design has been applied to the Send, Receive, and Shop screens, unifying the entire app.
- **Send/Receive Screens**: Neumorphic shadows applied to cards and dialogs
- **Shop Screen**: Glow effects on tab buttons, neumorphic style product cards
- **Input Field Design**: Inset style clearly distinguishes input areas

#### Log Reordering Animation
When items move to the top of the log list due to new comments, smooth animations are applied.
- **Scale Effect**: Items briefly scale up, then return to normal size after repositioning
- **Sequential Processing**: Multiple items animate in order when moved simultaneously
- **Visual Emphasis**: Clearly indicates which items are the most recent

#### Database Stabilization
Database compatibility issues that could occur during app updates have been resolved.
- **Auto Recovery**: Automatically recreates the database when version mismatch occurs
- **Data Preservation**: No data loss thanks to automatic server synchronization
- **All Platforms**: Same fix applied to iOS, Android, macOS, and Windows

#### Password Lock Improvement
Security and usability of password-protected items have been significantly improved.
- **Blur Overlay**: Content is completely hidden when entering locked items for enhanced security
- **Neumorphic Design**: Password set/unlock dialogs now use neumorphic styling
- **16-Digit Display**: Small circles (16 total) show password input status
- **Two-Line Input**: Set password and confirm on the same screen

#### Push Notification Settings Improvement
Push notification settings screen has been reorganized by category for more convenient management.
- **7 Categories**: Classified into Transaction, Log, Expiry, Reaction, Keyword, Sharing, and System
- **Group Toggle**: Turn entire category on or off at once
- **Collapse/Expand**: Accordion UI allows viewing only necessary categories
- **Detailed Notifications**: Added transaction accept/reject, reaction, keyword, sharing expiry/report, and system notifications
- **Neumorphic Design**: Neumorphic style applied to individual notification items

#### Sound Settings Improvement
Mute button now features neumorphic design for intuitive representation of pressed state.
- **Press Effect**: Button appears to be pressed inward when muted
- **Neumorphic Shadow**: Default state shows convex shadow, pressed state shows concave shadow

#### Log Loading Performance Improvement
Shared log loading speed has been improved.
- **Cache-first Loading**: Previously viewed logs are displayed instantly from cache
- **Data Savings**: No server requests when revisiting, uses local data
- **Real-time New Comments**: New comments are received in real-time even when using cache

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

#### Paper Shared Logs
Create shared log documents using only paper, without stamps.
- **Select 2 or more papers** → "Create New Item (Shared Log)" menu appears
- **Select 1 paper** → "Create New Item (Private Log)" menu appears
- Created documents share the same comment room
- Send documents to different people and chat with each other

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

#### Badge Editing Feature
Edit the image and keywords of engraved badges.
- **Edit Menu**: "Edit Badge" menu appears when selecting an engraved badge
- **Image Change**: Replace badge image with a new one
- **Keyword Management**: Add, delete, or modify 5 types of keywords

#### Image Performance Optimization
Network image loading speed has been significantly improved.
- **Local Cache**: Once loaded, images are saved locally for instant display
- **Badge Image Sync**: Badge image changes are immediately reflected across all logs

#### Recent Recipients Autocomplete
Quickly select recent recipients on the send screen.
- **Autocomplete List**: Dropdown showing up to 30 recent recipients when input field is focused
- **Quick Selection**: Automatically searches when selecting a recipient from the list
- **Re-search**: Clear selection with X button to search for another recipient
- **Local Storage**: Recipient information automatically saved on successful send

#### Send Restrictions Improvement
Equipped badges and shared stamps are now restricted from being sent.
- **Equipped Badges**: Unequip the badge to send it
- **Shared Stamps**: Revoke sharing to send the stamp
- **Detailed Guidance**: Displays specific messages explaining the restriction reason

#### Reaction System
React to items with emotional expressions.
- **12 Reactions**: Various emotional expressions including Like, Love, Best, Congrats, and more
- **Reaction Toggle**: Cancel by clicking the selected reaction again
- **Log Recording**: System logs record when reactions are selected or cancelled
- **Multilingual Support**: Reaction names displayed in the user's language

#### Search Functionality Improvement
Real-time search has been expanded to include item names and keywords.
- **Item Name Search**: Search by document title, stamp description, or badge domain name
- **Keyword Search**: Search by keywords saved in stamps and badges
- **Tag Search**: Search by stamp template tags

#### In-App Notification Improvement
Real-time toast notifications have been improved.
- **Sender Badge Display**: Sender's badge image is displayed inline in the notification
- **Dynamic Island Style**: Sleek toast animation inspired by iOS Dynamic Island style
- **Real-time Detection**: Accurately detects new and updated notifications based on ID+timestamp

#### Bug Fixes
- **Document detail UI stabilization**: Fixed issue where search bar and filters would shake when shared/solo logs were at screen boundary
- **Scroll Jitter Fixed**: Resolved screen flickering when scrolling up in documents/stamps with few logs
- **Top Scroll Fixed**: Resolved issue where author information couldn't be reached by scrolling in items with logs
- **Reaction Log Format Improved**: Emoticons and names are now displayed together
- **User Name Display Fixed**: Domain name is now correctly displayed when wearing a badge
- **Shared Log First Notification Fixed**: Resolved issue where the first toast notification for shared logs was not displayed
- **Push Notification Image Fixed**: Document image is now prioritized over badge image in push notifications

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

#### Automatic Multilingual Translation
Documents, stamps, and log contents are automatically translated to your language.
- **Auto Translation**: Automatic translation to user's language when viewing documents, stamps, and logs
- **Supported Languages**: Korean, English, Japanese, Spanish, French, German, Portuguese
- **Original Toggle**: Switch between original and translation with the [Show Original] button
- **Translation Caching**: Server and local caching prevents re-translation requests
- **Language-specific Cache**: Instantly uses cached translation when switching languages

#### Tutorial System
Step-by-step tutorials have been added to guide you through app usage.
- **Inventory Screen**: Item selection, partition movement, bottom menu usage (8 steps)
- **Send/Receive Screen**: Recipient input, QR scan, transfer/receive methods
- **Store Screen**: Product category browsing and purchase methods
- **Profile Screen**: Account information and settings
- **Settings Screen**: App settings and theme changes
- **Stamp Template**: Complete template creation process (9 steps)
- **Search Feature**: Filter usage and search term saving
- Shown only on first use; can be viewed again in Settings

#### Log Performance Optimization
Loading speed and data usage for shared/independent logs have been significantly improved.
- **Fast Loading**: Load only the latest 100 comments first
- **Infinite Scroll**: Scroll to load 50 more older comments at a time
- **Local Caching**: Instant display using cache on revisit
- **Real-time Sync**: Efficiently receive only new comments
- **Data Saving**: Prevents unnecessary re-downloads

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

#### Media Link Cards
URLs entered in logs are automatically displayed as **rich cards**.
- **YouTube**: Thumbnail + title + channel name
- **Spotify**: Album art + title + artist
- **Google Drive**: File thumbnail + filename (public files)
- **Dropbox**: Icon + filename
- **OneDrive**: Icon + service name
- **Web Pages**: Preview image + page title
- Tap to open in external app/browser
- Long-press to copy URL to clipboard

#### Shared Template Search Improvements
- **Paper Check**: Clone button shows remaining paper count (Paper:10)
- **Paper Required**: Clone is disabled when no paper available
- **Neumorphic Design**: Search screen now uses neumorphic UI style

#### Image Editor Effect System Improvements
The special effects selection UI has been simplified.
- **Single Selection**: Choose one of 5 effects at a time
- **Effect List**: None / Remove Background / Bokeh / Bloom / Monochrome
- **Smooth Transitions**: Progress indicator shown during effect processing
- **Performance Boost**: Bloom/Monochrome filters processed in background

#### Performance & Stability
Internal app structure has been optimized.
- **Query Optimization**: Parallel processing for faster clip/filter loading
- **Code Cleanup**: Removed 12 unused code modules
- **Dependency Cleanup**: Removed 7 unused libraries
- **Asset Cleanup**: Removed unused fonts/images (approx. 16MB reduction)

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

#### Clip Feature
Bundle multiple documents together for easier management.
- **Create Clip**: Select 2+ documents and tap "Clip Together"
- **Clip Icon**: Clipped documents display a clip icon in the top-right corner
- **Clip Details**: View internal items via "Clip Info" button in item detail screen
- **Reorder**: Drag to reorder items within a clip (except cover)
- **Exclude Items**: Remove specific items from a clip (except cover)
- **Unclip**: Completely dissolve a clip into individual documents
- **Auto-Dissolve**: Clip automatically dissolves when reduced to 1 item
- **Transfer**: Clips are sent/received as a bundle

#### Shared Template Search Improvements
Enhanced usability for the shared template search screen.
- **Inline Cards**: Search results displayed in a compact list format
- **Full Image Display**: Thumbnails shown in original aspect ratio without cropping
- **Expanded Details**: View content, keywords, and expiry date in template detail sheet
- **Keyword Preview**: See default keywords set for the template
- **Expiry Date**: Check when the shared template expires

#### Password Unlock Improvement
- Entering correct password now **permanently unlocks** the document
- Before: Viewing only, lock remained → Now: Fully unlocked

#### Bug Fixes
- Fixed clip items being counted individually in receive screen
- Fixed navigation bar receive badge including clip internal items
- Fixed badge (Nametag) not being unequipped when refunded/deleted
- Fixed domain remaining occupied after badge deletion

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

#### Shared Log Unread Indicator
When new comments are added to shared logs, the item border **pulses**.
- Easily spot unread shared logs in your inventory
- Pulsing stops when you open the document
- Read status syncs across all devices

#### Stamp Usage Guide
When you select an engraved stamp, available papers **pulse** to guide you.
- Improved UX for template duplication
- Intuitive next-step guidance

#### Partition Improvements
- **Collapse/Expand**: Toggle partitions with arrow buttons (▼/▲)
- **Select All**: Tap partition header to select/deselect all items
- Selection status indicators (○/◐/●)
- Drag and drop to collapsed partitions

#### Shop Convenience
Streamlined checkout for consecutive purchases of the same item.
- Skip confirmation dialogs within 10 minutes of last purchase
- Faster bulk purchasing

#### UI Improvements
- Improved readability with new headline font
- Stamp cards show template preview in background (33% opacity)
- Badge cards show engraved image preview
- Bottom menu displays available action count badge
- Black ink theme color adjustment (improved text readability)
- Optimized product images (reduced size, faster loading)

#### Bug Fixes
- Fixed pulsing effect on own comments
- Fixed input field clipping with gesture navigation
- Fixed gray screen when collapsing partitions
- Improved push notification permission handling

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

#### Document Lock Feature
- Set numeric password on documents (up to 16 digits)
- Locked documents display grayscale + lock icon
- Unlock with correct password (one-time)
- Lock status persists after item transfer
- Locked documents excluded from search results

#### Quick Input System
Easily input special information via `+` button when writing logs:
- **Keyword:Value** - General keyword card
- **Date Alarm** - Date card (auto D-Day calculation, alarm settings)
- **Phone Number** - Country-specific auto-formatting
- **Location/Address** - Map app integration
- **Amount** - Auto currency symbol display

#### Special Card Actions
**Long-press** special information in logs to activate additional features:
- **Date Card**: Set/cancel alarm
- **Phone Card**: Call directly / Copy to clipboard
- **Location Card**: Open in map app / Copy to clipboard
- **Amount Card**: Copy to clipboard

#### UI Improvements
- Filter chip neumorphic design
- Search bar scroll improvement
- Item detail screen AppBar shows item name

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

**First Official Release**

#### Paper System
- Introduced currency system required for document creation
- 10 sheets of Paper given upon new signup
- Additional 10 sheets for each Google/Apple account linking
- Paper available for purchase in shop

#### Document Creation
- Create documents using Paper
- Add title, content, and images
- Set start date/expiry date options

#### Badge System
- Unique domain name engraving feature
- Engraved domain name used as user identity
- Activation management through equip/unequip
- 128x128 image attachment option

#### Stamp System
- Template creation feature
- Solo log/Shared log mode selection
- Template duplication feature
- Start date/expiry date settings

#### Log Feature
- Record logs on documents/stamps
- Solo log: Personal-only records
- Shared log: Share with duplicate owners
- Key:value format info card support

#### Ink System
- App theme color change feature
- Black Ink, Gold Ink

#### Item Transfer
- Send items via email address
- Auto-fill email by QR code scan
- Accept or return received items
- Send multiple items at once

#### Partition
- Item grouping feature
- Device-specific local storage

#### Search Feature
- Real-time search filtering
- Save search terms as filters
- Auto-save recent searches (up to 5)

#### Shop
- Purchase Paper, Stamps, Badges, Ink
- Available on all platforms

#### Account
- Google, Apple, Email login
- Earn additional Paper by linking social accounts

#### Multi-language Support
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>Suggest new features!</strong> Share your ideas at <a href="/inventory/suggest/en/">Suggestions</a> and we'll actively review them.
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
