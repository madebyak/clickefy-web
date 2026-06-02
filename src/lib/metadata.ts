import type { Metadata } from "next";
import { site } from "./site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — AI product studio for brands`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — AI product studio for brands`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI product studio for brands`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
