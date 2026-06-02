import type { Metadata } from "next";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import { legalNavItems } from "@/lib/legal-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Legal & policies | ${site.name}`,
  description:
    "Terms of Service, Privacy Policy, AI disclosure, Content Policy, and Copyright information for Clickefy.",
  alternates: { canonical: "/legal" },
};

export default function LegalIndexPage() {
  return (
    <SubpageLayout
      eyebrow="// legal"
      title={
        <>
          Legal & <br />
          policies.
        </>
      }
      description="The same legal pack you see in the Clickefy mobile app."
    >
      <ul className="divide-y divide-line">
        {legalNavItems.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.href}
              className="group flex items-center justify-between py-8 text-left transition-colors"
            >
              <span className="text-[21px] tracking-tight font-medium text-ink group-hover:text-violet transition-colors">
                {item.title}
              </span>
              <span className="text-ink-3 group-hover:text-violet transition-colors text-[20px]">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </SubpageLayout>
  );
}
