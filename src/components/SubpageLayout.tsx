import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { legalNavItems } from "@/lib/legal-content";

type SubpageLayoutProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  effectiveDate?: string;
  children: ReactNode;
  sidebar?: ReactNode;
};

export default function SubpageLayout({
  eyebrow,
  title,
  description,
  effectiveDate,
  children,
  sidebar,
}: SubpageLayoutProps) {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="max-w-[1240px] mx-auto px-8 pt-[160px] pb-[120px]">
        <div className="grid gap-6 max-w-[880px] mb-16">
          <span className="inline-block font-mono text-[11.5px] tracking-[0.06em] text-ink-3">
            {eyebrow}
          </span>
          <h1 className="text-[clamp(44px,6vw,84px)] leading-[0.9] tracking-tight font-medium">
            {title}
          </h1>
          {description && (
            <p className="text-[19px] text-ink-2 max-w-[540px] mt-2">{description}</p>
          )}
          {effectiveDate && (
            <p className="font-mono text-[12px] text-ink-3 tracking-wide">
              Effective {effectiveDate}
            </p>
          )}
        </div>

        <div className={sidebar ? "grid lg:grid-cols-[220px_1fr] gap-16 items-start" : ""}>
          {sidebar && (
            <aside className="lg:sticky lg:top-32">{sidebar}</aside>
          )}
          <div className="min-w-0 border-t border-line pt-12">{children}</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export function LegalSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <nav aria-label="Legal documents" className="flex flex-col gap-1">
      <span className="font-mono text-[11px] text-ink-3 tracking-widest uppercase mb-4">
        Legal
      </span>
      {legalNavItems.map((item) => (
        <Link
          key={item.slug}
          href={item.href}
          className={`text-[14px] py-2 px-3 rounded-lg transition-colors ${
            item.slug === currentSlug
              ? "bg-panel text-ink font-medium"
              : "text-ink-2 hover:text-violet hover:bg-panel/60"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
