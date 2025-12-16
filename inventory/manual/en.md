---
layout: inventory
title: User Manual
permalink: /inventory/manual/en/
lang: en
translations:
  ko: /inventory/manual/
  en: /inventory/manual/en/
  ja: /inventory/manual/ja/
  de: /inventory/manual/de/
  fr: /inventory/manual/fr/
  es: /inventory/manual/es/
  pt: /inventory/manual/pt/
---

## 📖 User Manual

Explore all the features of the Inventory app in detail.

---

### 📦 Paper System

In Inventory, **Paper** is the core currency used to create items.

#### What is Paper?
- **1 Paper** is consumed when creating an item
- You cannot create new items without Paper

#### How to Get Paper

| Method | Amount | Note |
|--------|--------|------|
| New Sign-up | 10 sheets | First time only |
| Google Link | +10 sheets | When linking account |
| Apple Link | +10 sheets | When linking account |
| Shop Purchase | 10 sheets | In-app purchase |

> 💡 **Tip**: Link your social accounts to get extra Paper for free!

---

### 📄 Creating Items

#### How to Create an Item

1. Tap on your **Paper** on the home screen
2. Select **"Create New Item"** from the bottom menu
3. Enter item information:
   - Title (required)
   - Content
   - Image (optional)
   - Start Date (optional)
   - Expiry Date (optional)
4. Press **Save** and 1 Paper will be consumed to create the item

#### Start Date and Expiry Date

| Setting | Description |
|---------|-------------|
| **Start Date** | Content will be blurred until this date |
| **Expiry Date** | Content will be blurred and log additions disabled after this date |

If not set, it will be immediately visible and permanent.

---

### 🔒 Document Lock

You can protect document items by setting a password.

#### What is Document Lock?

A locked document can only be viewed after entering the correct password.

| Status | Description |
|--------|-------------|
| **Unlocked** | Anyone can view the content |
| **Locked** | Content viewable only with password |

#### How to Lock

1. Select the **documents** you want to lock on the home screen (multiple selection possible)
2. Select **"Lock Items"** from the bottom menu
3. Enter a numeric password (up to 16 digits)
4. Enter the same password again to confirm
5. Once locked, items will display a **lock icon** and **grayscale** effect

#### How to Unlock

1. Tap a locked document to enter the detail screen
2. A password input dialog will appear
3. Enter the correct password to unlock
4. Once unlocked, the lock is permanently removed (lock again by setting a new password)

> ⚠️ **Warning**: If you forget your password, it cannot be recovered. Locked documents can only be **deleted**.

#### Lock Features

- Lock passwords are **stored in the cloud**
- Lock status is maintained even when transferring items to others
- Locked documents do not appear in search results
- Locked items can still be deleted

---

### 🏷️ Badge System

A **Badge** is a unique identity you can use within the app.

#### What is a Badge?

When you engrave a domain name on a badge, all your activities in the app will be displayed with your **engraved domain name** instead of your email.

Examples: `MyBrand`, `JohnDoe`, `Company2025`

#### Engraving a Badge

1. Purchase a badge from the shop (unused state)
2. Tap the badge on Home → Select **"Engrave"** menu
3. Enter your desired domain name (max 32 characters)
   - Characters and numbers from all languages are allowed
   - Special characters and emojis are not allowed
4. Click **"Check Domain Availability"** to verify availability
5. Optionally attach a 128x128 image
6. Click **"Engrave"** to complete

> ⚠️ **Warning**: Once engraved, the domain name and image **cannot be changed permanently**. Choose carefully!

#### Equipping/Unequipping a Badge

- **Equipped**: Your engraved domain name will be displayed for all activities in the app
- **Unequipped**: Your default email will be displayed again
- Even if you own multiple badges, only one can be equipped at a time

---

### 🔖 Stamp System

A **Stamp** is an item that lets you create templates and share them with others.

#### Creating a Stamp Template

1. Purchase a stamp from the shop (unused state)
2. Tap the stamp on Home → Select **"Create New Template"** menu
3. Enter template information:
   - **Image** (required)
   - **Title** (max 32 characters)
   - **Content** (max 1024 characters)
   - **Start Date** (optional) - Content hidden until this date
   - **Expiry Date** (optional) - Log additions disabled after this date
   - **Log Mode** - Solo log or Shared log
4. Click **"Create Template"** to complete

#### Duplicating a Stamp

When you select an activated stamp (template) and paper together, the **"Duplicate Template"** menu appears.

- 1 Paper is consumed
- A new item with the same template is created
- If in shared log mode, it uses the same shared space as the original

---

### 📝 Log System

**Logs** are records you can add to items or stamp templates.

#### Log Modes

| Mode | Solo Log | Shared Log |
|------|----------|------------|
| **Storage Location** | Each person's private space | Shared space based on original stamp |
| **Visible Logs** | Only your own logs | All owners' logs |
| **Use Cases** | Personal diary, notes | Collaboration, community |
| **If Original Deleted** | Not affected | Cannot add logs (read-only) |

#### Log Formats

You can use various formats when writing logs.

**Basic Formats:**

| Format | Description | Example |
|--------|-------------|---------|
| Plain text | Displayed as chat bubble | `Inspection complete today!` |
| `key:value` | Displayed as info card (key 1-8 chars) | `status:good` |
| `---` | Displayed as divider | `---` |

Using the same key multiple times displays as `previous value → new value` comparison.

**Text Styling:**

| Format | Effect | Example |
|--------|--------|---------|
| `<[text]>` | Main color card (background + text) | `<[Important]>` |
| `[<text>]` | Gray card + main color text | `[<Caution>]` |
| `[text]` | Gray card | `[Note]` |
| `<text>` | Main color text | `<Emphasis>` |
| `(text)` | Sub color text | `(Additional info)` |
| `"text"` | **Bold** | `"Important content"` |
| `'text'` | <u>Underline</u> | `'Highlighted part'` |
| `!text!` | ~~Strikethrough~~ | `!Deleted content!` |

> 💡 Styles can be nested up to 3 levels. Example: `<["Bold main color"]>`

**Auto Logs:**

When an item is transferred, a transfer log is automatically recorded:
- Displayed as `Sender → Receiver` format
- If a badge is equipped, the domain name is displayed

#### Shared Log Termination Conditions

- **Original stamp deleted**: Cannot add shared logs (read-only)
- **Expiry date passed**: Cannot add shared logs (read-only)

#### 🔔 Unread Indicator

When new comments are added to a shared log, the item border **pulses** in the inventory view.

- Pulsing starts immediately when another user adds a comment
- Pulsing stops when you open and view the document
- Read status is saved to the cloud and synced across all devices

> 💡 **Tip**: Check pulsing items to never miss new comments!

---

### 🎨 Ink System

**Ink** is an item that changes the app's theme color.

#### How to Use

1. Tap an ink to enter detail screen
2. Click **"Change Theme"** button
3. The entire app color changes immediately

#### Ink Types

| Ink | Color |
|-----|-------|
| **Black Ink** | Default black theme |
| **Gold Ink** | Luxurious gold theme |

---

### 🔍 Search Function

#### Basic Search

Tap the search bar at the top to activate search mode.

- Results are filtered in **real-time** as you type
- Tap the X button to exit search mode

#### Recent Searches

- Up to 5 recent searches are saved
- Tap a recent search to auto-fill the search bar
- Delete individually with the X button

#### Save as Filter

When you save a search term with the **"Set as Filter"** button:

- It appears as a filter tag below the search bar
- Tap the tag to instantly filter by that search term
- Delete the filter with the X button

#### Keyword Aggregation

When a filter is set and you select items, the **keyword values of selected items are automatically aggregated**.

**Numeric Value Aggregation:**
- **Sum** and **average** are calculated for numeric values with the same keyword
- Example: Selecting `price:1000`, `price:2000`, `price:3000`
- Result: `Sum: 6000  Average: 2000`

**String Value Aggregation:**
- String values with the same keyword are **joined with spaces**
- Example: Selecting `tag:A`, `tag:B`, `tag:C`
- Result: `A B C`

**Copying Values:**
- **Long press** an aggregation result card to copy the value to clipboard
- A notification appears when copy is complete

> 💡 **Example Use**: Quickly calculate the total price of multiple items, or copy related tags at once.

---

### 📤 Sending Items

You can transfer items when selling second-hand or giving gifts.

#### How to Send

1. Select **Send** from the bottom tab
2. **Check** the items to transfer (multiple selection possible)
3. Enter the recipient's email
4. Click **Send** button

#### Entering Email via QR Code

Instead of typing the recipient's email, you can use a QR code:

1. The recipient displays their QR code from their **Profile** screen
2. The sender presses the **Scan QR** button
3. Scan the QR code with the camera
4. The email is automatically entered

> ⚠️ **Important**: Transferred items **immediately disappear** from your inventory. Transfers cannot be undone.

---

### 📥 Receiving Items

You can receive items sent by others.

#### How to Receive

1. Select **Receive** from the bottom tab
2. The received items list is displayed
3. For each item:
   - **Accept**: Added to your inventory
   - **Return**: Sent back to the sender

#### Notifications

- You receive push notifications when new items arrive (if notifications are enabled)
- The Receive tab shows the number of unaccepted items

---

### 🛒 Using the Shop

You can purchase various items from the shop.

#### Available Products

| Product | Use |
|---------|-----|
| **Paper** | For creating items (consumable) |
| **Stamp** | For creating templates |
| **Badge** | For engraving unique domain |
| **Ink** | For changing theme color |

#### How to Purchase

1. Select **Shop** from the bottom tab
2. Tap the desired product
3. Proceed with payment (App Store / Google Play)
4. Automatically delivered after payment completes

> 💡 The shop is available on all platforms (iOS, Android, Windows, macOS).

---

### 📂 Partition Feature

You can group items with partitions when you have many items.

#### Creating a Partition

1. Select items
2. Select **"Create Partition"** from the bottom menu
3. Enter partition name (max 16 characters)

#### Partition Characteristics

- Partitions are **saved only on the device**
- The partition structure is not visible on other devices
- The items themselves are stored in the cloud and visible on all devices

#### Collapse/Expand Partitions

Use the arrow button (▼/▲) on the right side of the partition header to collapse or expand partitions.

- Collapsed state is maintained after app restart
- All partitions automatically expand during search
- You can drag items to collapsed partitions

#### Select All in Partition

Tap the partition header to select/deselect all items in that partition.

| Indicator | Meaning |
|-----------|---------|
| ○ (Empty circle) | None selected |
| ◐ (Half circle) | Some selected |
| ● (Filled circle) | All selected |

---

### 🌍 Changing Language

7 languages are supported:
- 🇰🇷 한국어
- 🇺🇸 English
- 🇯🇵 日本語
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español
- 🇧🇷 Português

**How to Change:**
Settings → Language → Select desired language

---

> 📚 **Have more questions?** Check the [FAQ](/inventory/faq/en/) or contact us through [Suggestions](/inventory/suggest/en/).

<style>
h2 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: .5rem; margin-bottom: 1.5rem; }
h3 { color: #374151; margin-top: 2.5rem; margin-bottom: 1rem; padding-bottom: .3rem; border-bottom: 1px solid #f3f4f6; }
h4 { color: #4b5563; font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: .75rem; }
ul, ol { line-height: 1.8; }
li { margin-bottom: .5rem; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 2.5rem 0; }
blockquote { background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 4px; color: #1e40af; }
table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
th, td { padding: .75rem; border: 1px solid #e5e7eb; text-align: left; }
th { background: #f9fafb; font-weight: 600; }
code { background: #f3f4f6; padding: .2rem .4rem; border-radius: 3px; font-size: .9em; }
</style>
