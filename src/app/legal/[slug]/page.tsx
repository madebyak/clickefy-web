import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocumentBody from "@/components/LegalDocument";
import SubpageLayout, { LegalSidebar } from "@/components/SubpageLayout";
import {
  LEGAL_DOC_ORDER,
  getLegalDocument,
  type LegalSlug,
} from "@/lib/legal-content";
import { redirect } from "next/navigation";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LEGAL_DOC_ORDER.filter((slug) => slug !== "privacy").map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDocument(slug);
  if (!doc) return {};

  return {
    title: `${doc.title} | ${site.name}`,
    description: doc.summary,
    alternates: { canonical: `/legal/${slug}` },
  };
}

export default async function LegalDocPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "privacy") redirect("/privacy");
  const doc = getLegalDocument(slug);
  if (!doc) notFound();

  return (
    <SubpageLayout
      eyebrow="// legal"
      title={doc.title}
      description={doc.summary}
      effectiveDate={doc.effectiveDate}
      sidebar={<LegalSidebar currentSlug={slug as LegalSlug} />}
    >
      <LegalDocumentBody doc={doc} />
    </SubpageLayout>
  );
}
