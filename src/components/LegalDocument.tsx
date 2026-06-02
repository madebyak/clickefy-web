import type { ReactNode } from "react";
import type { LegalDocument as LegalDoc } from "@/lib/legal-content";
import { site } from "@/lib/site";

function renderInlineEmail(text: string) {
  const email = site.contactEmail;
  const parts = text.split(email);
  if (parts.length === 1) return text;

  return parts.flatMap((part, i) => {
    const nodes: ReactNode[] = [part];
    if (i < parts.length - 1) {
      nodes.push(
        <a
          key={`email-${i}`}
          href={`mailto:${email}`}
          className="text-violet hover:text-violet-soft underline underline-offset-2"
        >
          {email}
        </a>
      );
    }
    return nodes;
  });
}

export default function LegalDocumentBody({ doc }: { doc: LegalDoc }) {
  return (
    <article className="max-w-[880px]">
      {doc.sections.map((section) => (
        <section key={section.title} className="mb-12 last:mb-0">
          <h2 className="text-[22px] tracking-tight font-medium text-ink mb-5">
            {section.title}
          </h2>
          <div className="space-y-4 text-[17px] leading-relaxed text-ink-2">
            {section.blocks.map((block, i) => {
              if (block.type === "p") {
                return (
                  <p key={i}>{renderInlineEmail(block.text)}</p>
                );
              }
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 marker:text-ink-3">
                  {block.items.map((item, j) => (
                    <li key={j}>{renderInlineEmail(item)}</li>
                  ))}
                </ul>
              );
            })}
          </div>
        </section>
      ))}
    </article>
  );
}
