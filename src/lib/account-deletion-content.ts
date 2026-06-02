import { site } from "./site";

export const accountDeletionPage = {
  title: "Delete your Clickefy account and data",
  intro: `Clickefy is operated by ${site.companyLegalName}. This page explains how to delete your Clickefy account and the personal data associated with it.`,
  sections: [
    {
      title: "Option 1 — Delete it yourself inside the app (fastest)",
      steps: [
        "Open the Clickefy app.",
        "Go to Profile.",
        "Tap Account → Delete account.",
        "Confirm. Your account is scheduled for deletion immediately.",
      ],
    },
    {
      title: "Option 2 — Request deletion by email",
      paragraphs: [
        `If you no longer have the app installed or can't sign in, email ${site.contactEmail} from the email address on your Clickefy account with the subject "Delete my account". We verify ownership of the address and process the request. We respond within 30 days.`,
      ],
    },
    {
      title: "What gets deleted",
      items: [
        "Your account and profile (email, display name, avatar).",
        "Photos and videos you uploaded as inputs.",
        "Your generation history and generated outputs.",
        "Your remaining credit balance.",
      ],
    },
    {
      title: "What we keep, and for how long",
      items: [
        "Personal data is anonymised immediately on deletion.",
        "Uploaded files and generated outputs are purged from active systems within 30 days, and from backups within 90 days.",
        "Anonymised, aggregate analytics that can no longer identify you may be retained.",
        "Records we are legally required to keep (e.g. tax/transaction records) and safety/moderation reports are retained only as long as the law requires (moderation reports up to 1 year).",
      ],
    },
  ],
  contact: `Questions about deletion or your data: ${site.contactEmail}`,
} as const;
