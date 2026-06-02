# Web Legal Pages — Handoff for clickefy.ai

**Purpose:** Google Play (and later Apple App Store) require **publicly accessible web pages** (no login) for:

1. **Account & Data Deletion** — pasted into Play Console → App content → Data safety.
2. **Privacy Policy** — pasted into Play Console → App content → Privacy policy, and shown on the store listing.

Our legal text currently lives **inside the mobile app only**, so these two pages must be published on the **clickefy.ai** website.

> **Action for the web developer:** publish the two pages described below and send back the final URLs.

---

## 0. Values to fill in first (ask the app owner)

These placeholders appear in the content below. Replace **every** occurrence before publishing:

| Placeholder | Meaning | Example |
|---|---|---|
| `[COMPANY]` | Full registered legal name of the operating entity | e.g. "Clickefy FZ-LLC" |
| `[CONTACT_EMAIL]` | Public support/privacy contact inbox (must be monitored — users will email deletion requests here) | e.g. `support@clickefy.ai` |
| `[EMIRATE_COURTS]` | Governing courts (for the Privacy Policy / Terms) | e.g. "Courts of Dubai" or "DIFC Courts" |

App name shown to users: **Clickefy** (store listing name "Clickefy.Ai").

---

## 1. Technical requirements (both pages)

- **Publicly reachable, no authentication** (a logged-out browser and a Google reviewer must open it directly).
- **HTTPS**, stable permanent URLs (don't change the path later).
- Plain readable HTML is fine — no app login, no paywall, no redirect to the app.
- Recommended paths:
  - `https://clickefy.ai/account-deletion`
  - `https://clickefy.ai/privacy`

---

## 2. PAGE A — Account & Data Deletion

**URL to create:** `https://clickefy.ai/account-deletion`

Google requires this page to (a) name the app + developer, (b) prominently show the steps to request deletion, and (c) state what data is deleted vs kept and the retention period. The copy below already satisfies all three.

### Page title
**Delete your Clickefy account and data**

### Body content

> **Clickefy** is operated by **[COMPANY]**. This page explains how to delete your Clickefy account and the personal data associated with it.
>
> **Option 1 — Delete it yourself inside the app (fastest)**
>
> 1. Open the Clickefy app.
> 2. Go to **Profile**.
> 3. Tap **Account → Delete account**.
> 4. Confirm. Your account is scheduled for deletion immediately.
>
> **Option 2 — Request deletion by email**
>
> If you no longer have the app installed or can't sign in, email **[CONTACT_EMAIL]** from the email address on your Clickefy account with the subject **"Delete my account"**. We verify ownership of the address and process the request. We respond within 30 days.
>
> **What gets deleted**
>
> - Your account and profile (email, display name, avatar).
> - Photos and videos you uploaded as inputs.
> - Your generation history and generated outputs.
> - Your remaining credit balance.
>
> **What we keep, and for how long**
>
> - Personal data is **anonymised immediately** on deletion.
> - Uploaded files and generated outputs are purged from active systems **within 30 days**, and from backups **within 90 days**.
> - Anonymised, aggregate analytics that can no longer identify you may be retained.
> - Records we are legally required to keep (e.g. tax/transaction records) and safety/moderation reports are retained only as long as the law requires (moderation reports up to 1 year).
>
> Questions about deletion or your data: **[CONTACT_EMAIL]**.

---

## 3. PAGE B — Privacy Policy

**URL to create:** `https://clickefy.ai/privacy`

> **If clickefy.ai already has a published Privacy Policy URL, we can reuse it** — just send the URL and confirm it covers the data described in `docs/LEGAL_PAGES.md`. Otherwise, publish the full Privacy Policy text.

**Source text:** use the **"Privacy Policy"** section of `docs/LEGAL_PAGES.md` in this repo (the exact text shown in-app). It already covers: what we collect, how we use it, who we share it with (Clerk, Cloudflare, Neon, Google Gemini, Kling, RevenueCat/Apple/Google), international transfers, retention, user rights (UAE PDPL / GDPR / CCPA), children, security, and contact.

Remember to replace `[COMPANY]`, `[CONTACT_EMAIL]`, `[EMIRATE_COURTS]` in that text too.

---

## 4. What to send back

Reply with the two final live URLs so they can be entered into Play Console:

- Account deletion URL: `https://clickefy.ai/account-deletion`
- Privacy policy URL: `https://clickefy.ai/privacy`

> **Web implementation:** routes live in `src/app/account-deletion/` and `src/app/privacy/`. `/legal/privacy` redirects permanently to `/privacy`.

---

## 5. Where these get used (for the app owner, not the web dev)

| Page | Play Console location |
|---|---|
| Account deletion URL | App content → **Data safety** → "Delete account URL" |
| Privacy policy URL | App content → **Privacy policy** (and Store listing) |
