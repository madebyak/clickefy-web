import { site } from "./site";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  summary: string;
  effectiveDate: string;
  sections: LegalSection[];
};

function L(text: string): string {
  return text
    .replace(/\[COMPANY\]/g, site.companyLegalName)
    .replace(/\[CONTACT_EMAIL\]/g, site.contactEmail)
    .replace(/\[EMIRATE_COURTS\]/g, site.emirateCourts);
}

function p(text: string): LegalBlock {
  return { type: "p", text: L(text) };
}

function ul(items: string[]): LegalBlock {
  return { type: "ul", items: items.map(L) };
}

export const LEGAL_DOC_ORDER = [
  "terms",
  "privacy",
  "ai-disclosure",
  "content-policy",
  "dmca",
] as const;

export type LegalSlug = (typeof LEGAL_DOC_ORDER)[number];

const terms: LegalDocument = {
  slug: "terms",
  title: "Terms of Service",
  summary: "The agreement between you and Clickefy when you use the app.",
  effectiveDate: "2026-05-14",
  sections: [
    {
      title: "1. Acceptance of these Terms",
      blocks: [
        p(
          'By creating an account, signing in, or using Clickefy ("the App"), you agree to these Terms of Service ("Terms"). If you do not agree, do not use the App. These Terms form a binding agreement between you and [COMPANY] ("we", "us").'
        ),
        p(
          "You must be at least 13 years old, or the minimum digital-consent age in your country, whichever is higher. Users between 13 and 18 must have a parent or legal guardian agree to these Terms on their behalf."
        ),
      ],
    },
    {
      title: "2. Your account",
      blocks: [
        p(
          "You are responsible for keeping your account credentials secure and for all activity that happens under your account."
        ),
        p(
          "You may not share your account, use someone else's account, or create an account on behalf of another person without their explicit consent. We may suspend or terminate accounts that violate these Terms."
        ),
        p(
          "You can delete your account at any time from Profile → Account → Delete account. Deletion is permanent: associated content is removed from our active systems within 30 days, and from backups within 90 days. Anonymised aggregate analytics may be retained."
        ),
      ],
    },
    {
      title: "3. Credits, plans, and refunds",
      blocks: [
        p(
          "Clickefy operates on a credit system. Credits are consumed when you generate content. Subscription plans grant a recurring monthly credit allotment. One-time top-ups never expire."
        ),
        p(
          "Credit costs per generation are displayed before you confirm a job. Once a generation begins, credits are typically non-refundable. If a generation fails for a reason on our side (provider outage, internal error), the credits are automatically refunded to your balance."
        ),
        p(
          "Subscriptions auto-renew through the App Store or Google Play. You can cancel anytime through the platform's subscription settings; cancellation takes effect at the end of the current billing period. We do not offer pro-rated refunds for unused time, but you keep the credits already granted until they are spent. Nothing in this clause limits any non-waivable right you may have under UAE Federal Law No. 15 of 2020 on Consumer Protection or any equivalent law in your country of residence."
        ),
      ],
    },
    {
      title: "4. Acceptable use",
      blocks: [
        p(
          "You agree NOT to use Clickefy to create or distribute content that: (a) depicts minors in any sexual or suggestive context; (b) targets a real person in a sexual, defamatory, harassing, or non-consensual way; (c) incites violence or hatred toward an individual or group; (d) infringes someone else's copyright, trademark, or right of publicity; (e) violates the UAE Federal Decree-Law No. 34 of 2021 on Combating Rumours and Cybercrimes, the UAE's public-decency standards, or any other applicable law in the country where you live or use the App."
        ),
        p("Detailed examples and definitions live in our Content Policy."),
        p(
          "We may remove content and suspend accounts that violate these rules, with or without notice. Egregious violations (e.g. CSAM) are escalated to law-enforcement reporting bodies as required by law."
        ),
      ],
    },
    {
      title: "5. Content ownership",
      blocks: [
        p(
          "You retain ownership of the inputs you upload (photos, prompts, videos). By uploading, you grant us a worldwide, non-exclusive, royalty-free license to process those inputs solely to provide the App's generation features."
        ),
        p(
          "You own the outputs you generate, subject to the AI providers' underlying licenses and any third-party rights in the inputs you supplied. You are responsible for ensuring you have the rights to use any input you upload."
        ),
      ],
    },
    {
      title: "6. Third-party services",
      blocks: [
        p(
          "Clickefy uses third-party AI providers (e.g. Google Gemini, Kling) to generate content. Your inputs and prompts are sent to these providers for the duration of a generation. We do not control how these providers operate beyond contractual data-handling commitments."
        ),
      ],
    },
    {
      title: "7. Disclaimers",
      blocks: [
        p(
          'The App is provided "as is" and "as available". We make no warranty that generations will meet your expectations, that the App will be uninterrupted, or that all bugs will be fixed.'
        ),
        p(
          "AI-generated outputs can be inaccurate, offensive, or unsafe despite our filters. You are responsible for reviewing every output before sharing or relying on it."
        ),
      ],
    },
    {
      title: "8. Limitation of liability",
      blocks: [
        p(
          "To the maximum extent permitted by law, our total liability for any claim arising out of or related to the App is limited to the amount you paid us in the 12 months immediately preceding the event giving rise to the claim, or USD 100, whichever is greater."
        ),
        p(
          "In no event will we be liable for any indirect, incidental, consequential, or punitive damages."
        ),
      ],
    },
    {
      title: "9. Governing law and disputes",
      blocks: [
        p(
          "These Terms are governed by, and construed in accordance with, the federal laws of the United Arab Emirates and the applicable laws of the Emirate in which [COMPANY] is registered. Any dispute arising out of or in connection with these Terms will be submitted to the exclusive jurisdiction of the [EMIRATE_COURTS]."
        ),
        p(
          "If you are a consumer resident outside the UAE, nothing in these Terms removes any mandatory consumer-protection right you have under the law of your country of residence."
        ),
      ],
    },
    {
      title: "10. Changes to these Terms",
      blocks: [
        p(
          "We may update these Terms from time to time. When we do, we will bump the effective date above and, for material changes, notify you in-app or by email before the changes take effect."
        ),
        p("Continued use of the App after an update means you accept the new Terms."),
      ],
    },
    {
      title: "11. Contact",
      blocks: [p("Questions about these Terms? Email [CONTACT_EMAIL].")],
    },
  ],
};

const privacy: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  summary: "What we collect, why, and how we keep it safe.",
  effectiveDate: "2026-05-14",
  sections: [
    {
      title: "1. What we collect",
      blocks: [
        ul([
          "Account info: your email address, display name, and avatar (via Clerk, our identity provider).",
          "Content you submit: photos, videos, and prompts you upload to generate output. These are processed by our AI providers and stored on our infrastructure in your private user-scoped folder.",
          "Generation history: a record of the jobs you run (template id, status, credit cost, timestamp) so we can show your library and bill credits correctly.",
          "Technical data: device model, OS version, language, and crash diagnostics. We do NOT collect IDFA or any tracking identifier, and we do NOT share data with advertising networks.",
        ]),
      ],
    },
    {
      title: "2. How we use it",
      blocks: [
        ul([
          "To provide the App's features: render generations, show your library, debit/refund credits.",
          "To prevent abuse: rate-limiting, content moderation, and investigating reports.",
          "To support you: respond to messages you send us at [CONTACT_EMAIL].",
          "To meet legal obligations: tax records, law-enforcement requests with valid legal process, mandatory reporting (e.g. CSAM).",
        ]),
      ],
    },
    {
      title: "3. Who we share it with",
      blocks: [
        ul([
          "Identity: Clerk (authentication).",
          "Hosting & storage: Cloudflare (Workers, R2 object storage), Neon (Postgres database).",
          "AI providers: Google (Gemini family), Kling.",
          "Subscriptions & billing: RevenueCat, Apple, Google.",
        ]),
        p(
          "We sign data-processing agreements with each provider where applicable. We do not sell your personal data."
        ),
      ],
    },
    {
      title: "4. International transfers",
      blocks: [
        p(
          "Our infrastructure runs on globally-distributed networks (Cloudflare's edge, Neon's US/EU regions). Your data may be processed in countries other than the United Arab Emirates. For transfers regulated by the UAE PDPL we rely on the cross-border transfer mechanisms permitted by Article 22 of the PDPL (transfers to jurisdictions with an adequate level of protection, transfers under standard contractual safeguards, or transfers based on your explicit consent). For EU/UK transfers we use the European Commission's Standard Contractual Clauses or an equivalent safeguard."
        ),
      ],
    },
    {
      title: "5. How long we keep it",
      blocks: [
        ul([
          "Active accounts: as long as you keep your account.",
          "Deleted accounts: PII is anonymised immediately; uploaded files and generation outputs are purged from active systems within 30 days of deletion, and from backups within 90 days. We retain anonymised aggregate analytics indefinitely.",
          "Reports of harmful content and the moderation decisions on them are retained for 1 year for safety and audit purposes.",
        ]),
      ],
    },
    {
      title: "6. Your rights",
      blocks: [
        p(
          'UAE residents — under UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (the "PDPL"), you have the right to: (a) request information about how we process your data; (b) ask us to correct inaccurate data; (c) ask us to delete your data; (d) request a portable copy of the data you provided to us; (e) restrict or object to certain processing; and (f) withdraw consent at any time where consent is the basis for processing.'
        ),
        p(
          "You can exercise all of these inside the App (Profile → Account → Delete account) or by emailing [CONTACT_EMAIL]. We respond within 30 days. If you believe we have not handled your data properly you may contact the UAE Data Office."
        ),
        p(
          "EU/UK residents: our lawful bases under the GDPR / UK GDPR are contract performance (to provide the App), legitimate interests (security, abuse prevention), legal obligation, and consent (for optional features)."
        ),
        p(
          "California residents: we do not sell or share your personal information as those terms are defined by the CCPA/CPRA."
        ),
      ],
    },
    {
      title: "7. Children",
      blocks: [
        p(
          "The App is not intended for users under 13 (or the minimum digital-consent age in your country). If we learn we have collected personal data from a child below that threshold, we will delete it."
        ),
      ],
    },
    {
      title: "8. Security",
      blocks: [
        p(
          "We use TLS for all traffic, encryption at rest for stored content, scoped credentials for our backend services, and least-privilege access controls for our team. No system is perfectly secure; please use a strong password on your sign-in provider."
        ),
      ],
    },
    {
      title: "9. Changes",
      blocks: [
        p(
          "We may update this Privacy Policy from time to time. When we do, we bump the effective date above and, for material changes, notify you in-app or by email."
        ),
      ],
    },
    {
      title: "10. Contact",
      blocks: [p("Questions about your privacy? Email [CONTACT_EMAIL].")],
    },
  ],
};

const aiDisclosure: LegalDocument = {
  slug: "ai-disclosure",
  title: "AI & Generated Content",
  summary: "How AI generation works in Clickefy, and what it means for you.",
  effectiveDate: "2026-05-14",
  sections: [
    {
      title: "You are using a generative AI app",
      blocks: [
        p(
          "Every image and video you create in Clickefy is produced by a third-party AI model running on our partners' infrastructure. The output is a probabilistic guess by a model, not a photograph of a real moment."
        ),
      ],
    },
    {
      title: "Outputs are not always accurate or appropriate",
      blocks: [
        p(
          "AI-generated outputs can contain factual errors, distorted likenesses, unintended text, or imagery you did not expect. We apply safety filters at multiple layers (the providers' own filters plus our content policy), but no filter is perfect."
        ),
        p(
          "Before sharing, posting, or relying on an output, please review it. You are responsible for how you use the content you generate."
        ),
      ],
    },
    {
      title: "Sensitive subjects",
      blocks: [
        p(
          "Do not generate content that depicts a real person in a sexual, defamatory, or harassing way; do not generate content involving minors in any inappropriate context; do not use AI to impersonate or mislead. See our Content Policy for the full list."
        ),
        p("Suspected CSAM is reported to law enforcement as required by law."),
      ],
    },
    {
      title: "Inputs you upload",
      blocks: [
        p(
          "Inputs (photos and videos) are sent to the AI provider chosen for the template you selected. The provider processes the input solely to generate your output, under the data-handling terms in our Privacy Policy. Inputs are also stored in your private folder on our infrastructure so you can re-run or remix later; you can delete them anytime from the Library tab."
        ),
      ],
    },
    {
      title: "Disclosing AI use",
      blocks: [
        p(
          "If you publish or share an output in a context where the audience might mistake it for a real photo or video, please disclose that it was AI-generated. Many platforms (and some laws) require this."
        ),
      ],
    },
  ],
};

const contentPolicy: LegalDocument = {
  slug: "content-policy",
  title: "Content Policy",
  summary: "What you can and cannot create with Clickefy.",
  effectiveDate: "2026-05-14",
  sections: [
    {
      title: "Hard limits — never allowed",
      blocks: [
        ul([
          "Sexual or sexualised depictions of minors. Suspected violations are reported to law enforcement and the account is permanently banned.",
          'Non-consensual intimate imagery of real people (including "deepfake nudes").',
          "Imagery designed to incite, plan, or glorify violence, terrorism, or self-harm.",
          "Content that targets a real person with threats, defamation, or sustained harassment.",
          "Content that violates someone's copyright, trademark, or right of publicity.",
        ]),
      ],
    },
    {
      title: "Restricted — flagged for review",
      blocks: [
        ul([
          "Hate speech: dehumanising slurs or imagery targeting a protected group.",
          "Graphic violence or gore presented without artistic or editorial context.",
          "Mature or adult content of consenting adults — we permit tasteful artistic nudity but not explicit pornography. The App's App Store / Play Store rating depends on this policy and we err on the side of suitable-for-12+.",
          "Imagery of real public figures used in deceptive contexts (e.g. fake political statements).",
        ]),
      ],
    },
    {
      title: "Reporting & enforcement",
      blocks: [
        p(
          "Every generated output has a flag button. Tapping it sends the output to our moderation queue, where a human reviewer decides whether to remove the content, warn the user, or escalate."
        ),
        p(
          "Repeated violations result in escalating actions: warning, temporary suspension, permanent ban. Egregious single-incident violations skip to permanent ban."
        ),
      ],
    },
    {
      title: "How we apply the policy to AI",
      blocks: [
        p(
          "Templates are reviewed by our team before publication. User inputs are filtered by our AI providers' safety classifiers; outputs that pass those filters but still violate our policy can be reported by any user using the flag button on the result screen."
        ),
      ],
    },
  ],
};

const dmca: LegalDocument = {
  slug: "dmca",
  title: "Copyright & DMCA",
  summary: "How to report copyrighted material on Clickefy.",
  effectiveDate: "2026-05-14",
  sections: [
    {
      title: "Our position",
      blocks: [
        p(
          "[COMPANY] respects the intellectual-property rights of others and expects users of Clickefy to do the same. We act on clear notices of alleged copyright infringement under UAE Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights, the United States Digital Millennium Copyright Act (\"DMCA\"), and equivalent laws in other jurisdictions."
        ),
      ],
    },
    {
      title: "How to file a notice",
      blocks: [
        p("Send a written notice to [CONTACT_EMAIL] that includes:"),
        ul([
          "Your physical or electronic signature.",
          "Identification of the copyrighted work you claim was infringed.",
          "Identification of the material on Clickefy that allegedly infringes (e.g. the URL or screenshot).",
          "Your contact information (full name, address, phone, email).",
          "A statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent, or the law.",
          "A statement, under penalty of perjury, that the information in the notice is accurate and you are authorised to act on behalf of the copyright owner.",
        ]),
      ],
    },
    {
      title: "Counter-notice",
      blocks: [
        p(
          "If you believe material you created was removed by mistake or misidentification, you can send a counter-notice to [CONTACT_EMAIL]. The notice must identify the removed material, include a statement under penalty of perjury that you have a good-faith belief it was removed in error, and confirm your consent to the jurisdiction of the [EMIRATE_COURTS] (and, where you are a US-based complainant, of the applicable US federal court)."
        ),
      ],
    },
    {
      title: "Repeat infringers",
      blocks: [
        p(
          "We terminate the accounts of users who are determined to be repeat infringers in appropriate circumstances."
        ),
      ],
    },
  ],
};

export const legalDocuments: Record<LegalSlug, LegalDocument> = {
  terms,
  privacy,
  "ai-disclosure": aiDisclosure,
  "content-policy": contentPolicy,
  dmca,
};

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments[slug as LegalSlug];
}

/** Play Console requires /privacy; other docs live under /legal/[slug]. */
export function legalHref(slug: LegalSlug): string {
  return slug === "privacy" ? "/privacy" : `/legal/${slug}`;
}

export const legalNavItems = LEGAL_DOC_ORDER.map((slug) => ({
  slug,
  href: legalHref(slug),
  title: legalDocuments[slug].title,
}));
