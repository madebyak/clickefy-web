import type { MetadataRoute } from "next";
import { LEGAL_DOC_ORDER } from "@/lib/legal-content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const legalRoutes = LEGAL_DOC_ORDER.filter((slug) => slug !== "privacy").map(
    (slug) => ({
      url: `${base}/legal/${slug}`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })
  );

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/account-deletion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/legal`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...legalRoutes,
  ];
}
