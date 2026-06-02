import type { Metadata } from "next";
import AccountDeletionBody from "@/components/AccountDeletionBody";
import SubpageLayout from "@/components/SubpageLayout";
import { accountDeletionPage } from "@/lib/account-deletion-content";

export const metadata: Metadata = {
  title: accountDeletionPage.title,
  description:
    "How to delete your Clickefy account and personal data — in the app or by email.",
  alternates: { canonical: "/account-deletion" },
  robots: { index: true, follow: true },
};

export default function AccountDeletionPage() {
  return (
    <SubpageLayout
      eyebrow="// account & data"
      title={accountDeletionPage.title}
    >
      <AccountDeletionBody />
    </SubpageLayout>
  );
}
