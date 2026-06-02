# Clickefy — Legal pages (full text)

This document mirrors the in-app legal pack shown in the mobile app. **Source of truth (mobile):** `apps/mobile/lib/legal-content.ts`  
**Source of truth (web):** `src/lib/legal-content.ts` (keep in sync with this doc).

| Document | Slug (route) | Effective date |
|----------|--------------|----------------|
| Terms of Service | `/legal/terms` | 2026-05-14 |
| Privacy Policy | `/legal/privacy` | 2026-05-14 |
| AI & Generated Content | `/legal/ai-disclosure` | 2026-05-14 |
| Content Policy | `/legal/content-policy` | 2026-05-14 |
| Copyright & DMCA | `/legal/dmca` | 2026-05-14 |

**Placeholders** (replace before launch; same strings as in code):

| Placeholder | Meaning |
|-------------|---------|
| `Clickefy.Ai` | Full registered legal name |
| `support@clickefy.ai` | Support / legal contact (e.g. `legal@clickefy.ai`) |
| `[EMIRATE_COURTS]` | e.g. "Courts of Dubai" or "DIFC Courts" |

> Baseline legal pack for a UAE-registered operator (PDPL 2021, Consumer Protection Law 2020, Copyright Law 2021, Cybercrime Law 2021). Have a UAE-qualified attorney review before launch.

---

## Terms of Service

**Summary:** The agreement between you and Clickefy when you use the app.  
**Effective:** 2026-05-14

### 1. Acceptance of these Terms

By creating an account, signing in, or using Clickefy ("the App"), you agree to these Terms of Service ("Terms"). If you do not agree, do not use the App. These Terms form a binding agreement between you and [COMPANY] ("we", "us").

You must be at least 13 years old, or the minimum digital-consent age in your country, whichever is higher. Users between 13 and 18 must have a parent or legal guardian agree to these Terms on their behalf.

### 2. Your account

You are responsible for keeping your account credentials secure and for all activity that happens under your account.

You may not share your account, use someone else's account, or create an account on behalf of another person without their explicit consent. We may suspend or terminate accounts that violate these Terms.

You can delete your account at any time from Profile → Account → Delete account. Deletion is permanent: associated content is removed from our active systems within 30 days, and from backups within 90 days. Anonymised aggregate analytics may be retained.

### 3. Credits, plans, and refunds

Clickefy operates on a credit system. Credits are consumed when you generate content. Subscription plans grant a recurring monthly credit allotment. One-time top-ups never expire.

Credit costs per generation are displayed before you confirm a job. Once a generation begins, credits are typically non-refundable. If a generation fails for a reason on our side (provider outage, internal error), the credits are automatically refunded to your balance.

Subscriptions auto-renew through the App Store or Google Play. You can cancel anytime through the platform's subscription settings; cancellation takes effect at the end of the current billing period. We do not offer pro-rated refunds for unused time, but you keep the credits already granted until they are spent. Nothing in this clause limits any non-waivable right you may have under UAE Federal Law No. 15 of 2020 on Consumer Protection or any equivalent law in your country of residence.

### 4. Acceptable use

You agree NOT to use Clickefy to create or distribute content that: (a) depicts minors in any sexual or suggestive context; (b) targets a real person in a sexual, defamatory, harassing, or non-consensual way; (c) incites violence or hatred toward an individual or group; (d) infringes someone else's copyright, trademark, or right of publicity; (e) violates the UAE Federal Decree-Law No. 34 of 2021 on Combating Rumours and Cybercrimes, the UAE's public-decency standards, or any other applicable law in the country where you live or use the App.

Detailed examples and definitions live in our Content Policy.

We may remove content and suspend accounts that violate these rules, with or without notice. Egregious violations (e.g. CSAM) are escalated to law-enforcement reporting bodies as required by law.

### 5. Content ownership

You retain ownership of the inputs you upload (photos, prompts, videos). By uploading, you grant us a worldwide, non-exclusive, royalty-free license to process those inputs solely to provide the App's generation features.

You own the outputs you generate, subject to the AI providers' underlying licenses and any third-party rights in the inputs you supplied. You are responsible for ensuring you have the rights to use any input you upload.

### 6. Third-party services

Clickefy uses third-party AI providers (e.g. Google Gemini, Kling) to generate content. Your inputs and prompts are sent to these providers for the duration of a generation. We do not control how these providers operate beyond contractual data-handling commitments.

### 7. Disclaimers

The App is provided "as is" and "as available". We make no warranty that generations will meet your expectations, that the App will be uninterrupted, or that all bugs will be fixed.

AI-generated outputs can be inaccurate, offensive, or unsafe despite our filters. You are responsible for reviewing every output before sharing or relying on it.

### 8. Limitation of liability

To the maximum extent permitted by law, our total liability for any claim arising out of or related to the App is limited to the amount you paid us in the 12 months immediately preceding the event giving rise to the claim, or USD 100, whichever is greater.

In no event will we be liable for any indirect, incidental, consequential, or punitive damages.

### 9. Governing law and disputes

These Terms are governed by, and construed in accordance with, the federal laws of the United Arab Emirates and the applicable laws of the Emirate in which [COMPANY] is registered. Any dispute arising out of or in connection with these Terms will be submitted to the exclusive jurisdiction of the [EMIRATE_COURTS].

If you are a consumer resident outside the UAE, nothing in these Terms removes any mandatory consumer-protection right you have under the law of your country of residence.

### 10. Changes to these Terms

We may update these Terms from time to time. When we do, we will bump the effective date above and, for material changes, notify you in-app or by email before the changes take effect.

Continued use of the App after an update means you accept the new Terms.

### 11. Contact

Questions about these Terms? Email [CONTACT_EMAIL].

---

## Privacy Policy

**Summary:** What we collect, why, and how we keep it safe.  
**Effective:** 2026-05-14

### 1. What we collect

- **Account info:** your email address, display name, and avatar (via Clerk, our identity provider).
- **Content you submit:** photos, videos, and prompts you upload to generate output. These are processed by our AI providers and stored on our infrastructure in your private user-scoped folder.
- **Generation history:** a record of the jobs you run (template id, status, credit cost, timestamp) so we can show your library and bill credits correctly.
- **Technical data:** device model, OS version, language, and crash diagnostics. We do NOT collect IDFA or any tracking identifier, and we do NOT share data with advertising networks.

### 2. How we use it

- To provide the App's features: render generations, show your library, debit/refund credits.
- To prevent abuse: rate-limiting, content moderation, and investigating reports.
- To support you: respond to messages you send us at [CONTACT_EMAIL].
- To meet legal obligations: tax records, law-enforcement requests with valid legal process, mandatory reporting (e.g. CSAM).

### 3. Who we share it with

- **Identity:** Clerk (authentication).
- **Hosting & storage:** Cloudflare (Workers, R2 object storage), Neon (Postgres database).
- **AI providers:** Google (Gemini family), Kling.
- **Subscriptions & billing:** RevenueCat, Apple, Google.

We sign data-processing agreements with each provider where applicable. We do not sell your personal data.

### 4. International transfers

Our infrastructure runs on globally-distributed networks (Cloudflare's edge, Neon's US/EU regions). Your data may be processed in countries other than the United Arab Emirates. For transfers regulated by the UAE PDPL we rely on the cross-border transfer mechanisms permitted by Article 22 of the PDPL (transfers to jurisdictions with an adequate level of protection, transfers under standard contractual safeguards, or transfers based on your explicit consent). For EU/UK transfers we use the European Commission's Standard Contractual Clauses or an equivalent safeguard.

### 5. How long we keep it

- **Active accounts:** as long as you keep your account.
- **Deleted accounts:** PII is anonymised immediately; uploaded files and generation outputs are purged from active systems within 30 days of deletion, and from backups within 90 days. We retain anonymised aggregate analytics indefinitely.
- **Reports** of harmful content and the moderation decisions on them are retained for 1 year for safety and audit purposes.

### 6. Your rights

**UAE residents** — under UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (the "PDPL"), you have the right to: (a) request information about how we process your data; (b) ask us to correct inaccurate data; (c) ask us to delete your data; (d) request a portable copy of the data you provided to us; (e) restrict or object to certain processing; and (f) withdraw consent at any time where consent is the basis for processing.

You can exercise all of these inside the App (Profile → Account → Delete account) or by emailing [CONTACT_EMAIL]. We respond within 30 days. If you believe we have not handled your data properly you may contact the UAE Data Office.

**EU/UK residents:** our lawful bases under the GDPR / UK GDPR are contract performance (to provide the App), legitimate interests (security, abuse prevention), legal obligation, and consent (for optional features).

**California residents:** we do not sell or share your personal information as those terms are defined by the CCPA/CPRA.

### 7. Children

The App is not intended for users under 13 (or the minimum digital-consent age in your country). If we learn we have collected personal data from a child below that threshold, we will delete it.

### 8. Security

We use TLS for all traffic, encryption at rest for stored content, scoped credentials for our backend services, and least-privilege access controls for our team. No system is perfectly secure; please use a strong password on your sign-in provider.

### 9. Changes

We may update this Privacy Policy from time to time. When we do, we bump the effective date above and, for material changes, notify you in-app or by email.

### 10. Contact

Questions about your privacy? Email [CONTACT_EMAIL].

---

## AI & Generated Content

**Summary:** How AI generation works in Clickefy, and what it means for you.  
**Effective:** 2026-05-14

### You are using a generative AI app

Every image and video you create in Clickefy is produced by a third-party AI model running on our partners' infrastructure. The output is a probabilistic guess by a model, not a photograph of a real moment.

### Outputs are not always accurate or appropriate

AI-generated outputs can contain factual errors, distorted likenesses, unintended text, or imagery you did not expect. We apply safety filters at multiple layers (the providers' own filters plus our content policy), but no filter is perfect.

Before sharing, posting, or relying on an output, please review it. You are responsible for how you use the content you generate.

### Sensitive subjects

Do not generate content that depicts a real person in a sexual, defamatory, or harassing way; do not generate content involving minors in any inappropriate context; do not use AI to impersonate or mislead. See our Content Policy for the full list.

Suspected CSAM is reported to law enforcement as required by law.

### Inputs you upload

Inputs (photos and videos) are sent to the AI provider chosen for the template you selected. The provider processes the input solely to generate your output, under the data-handling terms in our Privacy Policy. Inputs are also stored in your private folder on our infrastructure so you can re-run or remix later; you can delete them anytime from the Library tab.

### Disclosing AI use

If you publish or share an output in a context where the audience might mistake it for a real photo or video, please disclose that it was AI-generated. Many platforms (and some laws) require this.

---

## Content Policy

**Summary:** What you can and cannot create with Clickefy.  
**Effective:** 2026-05-14

### Hard limits — never allowed

- Sexual or sexualised depictions of minors. Suspected violations are reported to law enforcement and the account is permanently banned.
- Non-consensual intimate imagery of real people (including "deepfake nudes").
- Imagery designed to incite, plan, or glorify violence, terrorism, or self-harm.
- Content that targets a real person with threats, defamation, or sustained harassment.
- Content that violates someone's copyright, trademark, or right of publicity.

### Restricted — flagged for review

- Hate speech: dehumanising slurs or imagery targeting a protected group.
- Graphic violence or gore presented without artistic or editorial context.
- Mature or adult content of consenting adults — we permit tasteful artistic nudity but not explicit pornography. The App's App Store / Play Store rating depends on this policy and we err on the side of suitable-for-12+.
- Imagery of real public figures used in deceptive contexts (e.g. fake political statements).

### Reporting & enforcement

Every generated output has a flag button. Tapping it sends the output to our moderation queue, where a human reviewer decides whether to remove the content, warn the user, or escalate.

Repeated violations result in escalating actions: warning, temporary suspension, permanent ban. Egregious single-incident violations skip to permanent ban.

### How we apply the policy to AI

Templates are reviewed by our team before publication. User inputs are filtered by our AI providers' safety classifiers; outputs that pass those filters but still violate our policy can be reported by any user using the flag button on the result screen.

---

## Copyright & DMCA

**Summary:** How to report copyrighted material on Clickefy.  
**Effective:** 2026-05-14

### Our position

[COMPANY] respects the intellectual-property rights of others and expects users of Clickefy to do the same. We act on clear notices of alleged copyright infringement under UAE Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights, the United States Digital Millennium Copyright Act ("DMCA"), and equivalent laws in other jurisdictions.

### How to file a notice

Send a written notice to [CONTACT_EMAIL] that includes:

1. Your physical or electronic signature.
2. Identification of the copyrighted work you claim was infringed.
3. Identification of the material on Clickefy that allegedly infringes (e.g. the URL or screenshot).
4. Your contact information (full name, address, phone, email).
5. A statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent, or the law.
6. A statement, under penalty of perjury, that the information in the notice is accurate and you are authorised to act on behalf of the copyright owner.

### Counter-notice

If you believe material you created was removed by mistake or misidentification, you can send a counter-notice to [CONTACT_EMAIL]. The notice must identify the removed material, include a statement under penalty of perjury that you have a good-faith belief it was removed in error, and confirm your consent to the jurisdiction of the [EMIRATE_COURTS] (and, where you are a US-based complainant, of the applicable US federal court).

### Repeat infringers

We terminate the accounts of users who are determined to be repeat infringers in appropriate circumstances.

---

## Where these appear in the app

| Location | Link |
|----------|------|
| Profile → Legal & policies | All five documents (`LEGAL_DOC_ORDER`) |
| Auth welcome screen | Terms of Service, Privacy Policy |
| Sign-up flow | Terms / privacy references |

When you change legal text, update `apps/mobile/lib/legal-content.ts`, bump each document's `effectiveDate` on substantive changes, and refresh this file if you want the docs folder to stay in sync.
