import type { ReactNode } from "react";
import { accountDeletionPage } from "@/lib/account-deletion-content";
import { site } from "@/lib/site";

function renderEmail(text: string) {
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

export default function AccountDeletionBody() {
  const { intro, sections, contact } = accountDeletionPage;

  return (
    <article className="max-w-[880px] space-y-12 text-[17px] leading-relaxed text-ink-2">
      <p>{renderEmail(intro)}</p>

      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-[22px] tracking-tight font-medium text-ink mb-5">
            {section.title}
          </h2>
          {"steps" in section && section.steps && (
            <ol className="list-decimal pl-6 space-y-2">
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          )}
          {"paragraphs" in section &&
            section.paragraphs?.map((para) => (
              <p key={para}>{renderEmail(para)}</p>
            ))}
          {"items" in section && section.items && (
            <ul className="list-disc pl-6 space-y-2 marker:text-ink-3">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <p className="pt-4 border-t border-line">{renderEmail(contact)}</p>
    </article>
  );
}
