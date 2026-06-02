import type { Metadata } from "next";
import LegalDocumentBody from "@/components/LegalDocument";
import SubpageLayout, { LegalSidebar } from "@/components/SubpageLayout";
import { legalDocuments } from "@/lib/legal-content";

const doc = legalDocuments.privacy;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.summary,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <SubpageLayout
      eyebrow="// legal"
      title={doc.title}
      description={doc.summary}
      effectiveDate={doc.effectiveDate}
      sidebar={<LegalSidebar currentSlug="privacy" />}
    >
      <LegalDocumentBody doc={doc} />
    </SubpageLayout>
  );
}
