<div align="center">

<img src="assets/hero.png" alt="WoW AH Watcher: know what to buy, craft and sell before the Auction House does" width="100%">

<br>

[![Download](https://img.shields.io/badge/%E2%AC%87%20Download-latest%20release-f0bd57?style=for-the-badge&labelColor=0a0e14)](https://github.com/nanidev/wowahwatcher/releases/latest)
[![Version](https://img.shields.io/github/v/release/nanidev/wowahwatcher?style=for-the-badge&color=f0bd57&labelColor=0a0e14&label=version)](https://github.com/nanidev/wowahwatcher/releases/latest)
[![Windows](https://img.shields.io/badge/Windows-10%20%7C%2011-7db6ff?style=for-the-badge&labelColor=0a0e14&logo=windows&logoColor=white)](#requirements)
[![Support on Ko-fi](https://img.shields.io/badge/Support%20on-Ko--fi-ff5e5b?style=for-the-badge&labelColor=0a0e14&logo=ko-fi&logoColor=white)](https://ko-fi.com/nanidev)
[![Website](https://img.shields.io/badge/Website-wowahwatcher.com-7db6ff?style=for-the-badge&labelColor=0a0e14)](https://wowahwatcher.com/)

**Free for personal use &nbsp;·&nbsp; 100% local &nbsp;·&nbsp; No accounts &nbsp;·&nbsp; No telemetry**

</div>

---

## Stop guessing at the Auction House

Auctionator already records every price you scan. **WoW AH Watcher turns that pile of numbers into decisions.** It reads your own scans, compares today's price with what an item *really* sells for, and tells you in plain language what is worth buying, what is worth crafting, and what to leave alone. It also tells you honestly when its information is old.

It runs quietly on your own PC, opens in your browser, and stays out of the game. Nothing is uploaded, ever.

<div align="center">
<img src="assets/screens/dashboard.png" alt="The dashboard: BUY signals, profitable crafts and a written briefing" width="92%">
<br><sub>The dashboard: BUY signals, your best craft and a written briefing of the latest scan.</sub>
</div>

---

## What it does for you

### Finds the real bargains
Every item from your latest scan gets a signal: **BUY**, **SELL-HOLD** or **WATCH**. A BUY means the price is well below what the item usually sells for, it still makes a profit after the Auction House cut, and there is enough history and supply to trust it. Items that are **Thin** (too few listings), **Stale** (old data), **Volatile** (prices swing too much) or **Falling** (the last few days sit well below the days before) are never marked BUY, so a one-listing fluke or a price that is still dropping never shows up as a "deal".

<div align="center">
<img src="assets/screens/market.png" alt="The Market page with presets, filters, saved views and signal chips" width="92%">
<br><sub>Market: search and filter thousands of items, jump to presets like <i>Buy now</i> or <i>Deep discounts</i>, and save your own views.</sub>
</div>

### Shows the true profit of every craft
Crafting is costed from the recipes **your characters actually know**. Every material is priced at the cheaper of its Auction House price and its vendor price, the 5% Auction House cut is taken off, and you see the net profit and margin. If a price is missing, the craft says **"price unknown"**. It never invents a total. Search by name, or press **Show all**, to find any priced craft, not just the top few.

<div align="center">
<img src="assets/screens/crafting.png" alt="The Crafting page showing ingredients, craft cost, net profit and margin" width="92%">
<br><sub>Crafting: every ingredient, the real cost, and the profit after the Auction House cut.</sub>
</div>

### Plans your whole shopping trip
Add the crafts you plan to make and how many of each. You get **one combined "what to buy" list**, and a materials tree that compares buying a part with crafting it yourself, with the savings spelled out.

<div align="center">
<img src="assets/screens/shopping.png" alt="The shopping list with a combined materials list and a buy-versus-craft tree" width="92%">
<br><sub>Shopping list: one list for every material, and where crafting a part beats buying it.</sub>
</div>

### Tells you the moment a deal appears
A live **Alerts** feed announces each new BUY deal once, with a badge in the sidebar so you notice without staring at the page. Prefer your phone? Add your own **Discord webhook** and the same alerts arrive in a private channel.

<div align="center">
<img src="assets/screens/alerts.png" alt="The Alerts feed listing new BUY deals with prices" width="92%">
<br><sub>Alerts: every new deal, announced once, with the price to stay under.</sub>
</div>

### Explains every price
Each item page charts its price history and lists the notable days. Every figure has a plain definition: the **Typical range** is the middle 80% of daily prices, so one spike cannot distort it; **Cheaper than** is the share of days in the window that were dearer than today's price; and the **sell target** stays close to the item's usual daily low, never more than 25% above it. The same definitions are in the app's Help.

<div align="center">
<img src="assets/screens/item.png" alt="An item page with price history chart and the reason for its signal" width="92%">
<br><sub>Item page: the chart, the fair price, and the reason behind the signal.</sub>
</div>

### Writes you a briefing
After each scan you get a short, readable briefing: what to buy now, why, and what to watch. It is built by fixed rules from your data, so it always works. If you run [Ollama](https://ollama.com) on your PC, a local AI can rewrite it as a flowing summary, and you can add your own notes ("more players reached this skill since launch, so supply is growing") that the AI weighs against the numbers. Every figure the AI quotes is checked against your data first; a summary that does not match is discarded, the verified briefing is shown, and the page says why. The AI runs **on your machine**, so your data stays yours.

<div align="center">
<img src="assets/screens/briefing.png" alt="The Briefing page with your notes for the AI and the latest briefing" width="92%">
<br><sub>Briefing: a written summary of the latest scan, with your own notes to steer it.</sub>
</div>

---

## Everything else in the box

| | |
|---|---|
| **Watchlist** | Follow the items you care about. Suggestions are built from your own market history, never from a built-in list. |
| **Saved Market views** | Save a set of filters under a name and reopen it with one click. |
| **CSV download** | Take the whole market table into a spreadsheet. |
| **Honest freshness labels** | Fresh, aging, stale and very old data are labelled, and stale prices never pose as a deal. |
| **Guided setup** | Finds your WoW account, helps you install the two small helper addons, and tells you exactly what is missing. |
| **Gold, silver and copper** | Every price uses the in-game coin colours, everywhere in the app. |
| **Runs like a normal Windows app** | No console window. It opens in your browser, and a tray icon lets you open, restart or quit it, and start it with Windows. |
| **Built-in Help** | A full guide to every page, the signals and the in-game commands. |

---

## Your data never leaves your PC

- Everything is calculated **locally**. There are no accounts, no telemetry, no analytics and no third-party scripts.
- The app only talks to **your own local Ollama**, to a **Discord webhook you add yourself**, and to **GitHub** to ask for the newest release number so it can offer updates (you can turn that off in Settings). Nothing about you or your data is sent. Updates are never installed without you pressing **Update now**.
- Your WoW account name is hidden in the sidebar by default, so you can share a screenshot or stream without leaking your Battle.net number.

---

## Requirements

| | |
|---|---|
| **Windows 10 or 11** | 64-bit. No administrator rights needed. |
| **World of Warcraft** | Installed, and logged in at least once. |
| **[Auctionator](https://www.curseforge.com/wow/addons/auctionator)** | The Forever version, enabled on the character you play, with at least one Auction House scan. It is a separate addon and is not included. |
| **[Ollama](https://ollama.com)** *(optional)* | Only for the AI-written briefing. Everything else works without it. |

## Get started in a few minutes

1. **[Download the latest release](https://github.com/nanidev/wowahwatcher/releases/latest)** and run `WoWAHWatcher-Setup-<version>.exe`. (Prefer no installer? Download the `.zip`, unzip it anywhere and run `WoWAHWatcher.exe`.)
2. The dashboard **opens in your browser** by itself. Click **Set up your WoW account** and follow the guided setup.
3. In game: open the Auction House and let Auctionator scan, open your profession windows once, then log out or type `/reload`. The app notices within seconds and fills in.

> **Windows SmartScreen:** the first build is not code-signed yet, so Windows may say *"Windows protected your PC"*. Click **More info**, then **Run anyway**. Every download comes with a `.sha256` file so you can check it is untouched.

---

## 💛 Support the project

**WoW AH Watcher is free, and it is built and maintained by one person.** If it saved you gold, found you a flip, or just made the Auction House less of a chore, a coffee helps keep it going and pays for new features and fixes.

<div align="center">

[![Support on Ko-fi](https://img.shields.io/badge/%E2%98%95%20Support%20WoW%20AH%20Watcher%20on%20Ko--fi-ff5e5b?style=for-the-badge&labelColor=0a0e14)](https://ko-fi.com/nanidev)

</div>

Supporting is completely optional, and the app works exactly the same without it. Bug reports and ideas are welcome too: please [open an issue](https://github.com/nanidev/wowahwatcher/issues).

---

## Licence and disclaimer

WoW AH Watcher is proprietary software, copyright &copy; 2026 nanidev. All rights reserved. It is free for personal, non-commercial use. Copying, redistributing, modifying, reverse engineering or selling it is not allowed. See [LICENSE.txt](LICENSE.txt).

Signals are decision support, not financial advice. They only know your last scan.

World of Warcraft is a trademark of Blizzard Entertainment, and Auctionator belongs to its authors. WoW AH Watcher is an independent companion tool and is not affiliated with or endorsed by Blizzard Entertainment or the Auctionator authors.
