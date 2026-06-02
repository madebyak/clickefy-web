import type { Metadata } from "next";
import { faqItems } from "@/content";
export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Clickefy — credits, commercial rights, generation speed, exports, and subscriptions.",
  alternates: { canonical: "/faq" },
};

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FaqJsonLd />
      {children}
    </>
  );
}
