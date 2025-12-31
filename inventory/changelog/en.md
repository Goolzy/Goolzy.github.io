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
---

## Changelog

Check out the update history for the Inventory app.

---

### v1.1.2 <small style="color:#6b7280;">2025-12-31</small>

#### Recent Recipients Autocomplete
Quickly select recent recipients on the send screen.
- **Autocomplete List**: Dropdown showing up to 30 recent recipients when input field is focused
- **Quick Selection**: Automatically searches when selecting a recipient from the list
- **Re-search**: Clear selection with X button to search for another recipient
- **Local Storage**: Recipient information automatically saved on successful send

#### Bug Fixes
- **Scroll Jitter Fixed**: Resolved screen flickering when scrolling up in documents/stamps with few logs
- **Top Scroll Fixed**: Resolved issue where author information couldn't be reached by scrolling in items with logs

---

### v1.1.0 <small style="color:#6b7280;">2025-12-29</small>

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

---

### v1.0.4 <small style="color:#6b7280;">2025-12-25</small>

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

---

### v1.0.3 <small style="color:#6b7280;">2025-12-23</small>

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

---

### v1.0.2 <small style="color:#6b7280;">2025-12-22</small>

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

---

### v1.0.1 <small style="color:#6b7280;">2025-12-16</small>

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

---

### v1.0.0 <small style="color:#6b7280;">2025-12-13</small>

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

---

> **Suggest new features!** Share your ideas at [Suggestions](/inventory/suggest/en/) and we'll actively review them.

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
