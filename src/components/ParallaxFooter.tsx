"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { finalCta, footer } from "@/content";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ── Social Icons ── */
const socialIcons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  Twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
  LinkedIn: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  YouTube: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
  ),
};

export default function ParallaxFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const layers = layersRef.current;
      if (!layers) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0,
        },
      });

      // Parallax movement for background vs foreground
      const bgLayer = layers.querySelector('[data-parallax="bg"]');
      const contentLayer = layers.querySelector('[data-parallax="content"]');

      if (bgLayer) tl.to(bgLayer, { yPercent: 30, ease: "none" }, 0);
      if (contentLayer) tl.to(contentLayer, { yPercent: -15, ease: "none" }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="parallax-footer relative w-full bg-white">
      {/* ═══ CTA SECTION — with Parallax ═══ */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden z-10">
        <div ref={layersRef} className="absolute inset-0 w-full h-full">
          {/* Layer 1: Background Image */}
          <div data-parallax="bg" className="absolute inset-0 w-full h-[140%] -top-[20%] z-0">
            <img
              src="/1779017604575-a1ee180e-5f1c-4c0d-ac0a-500489b39d78.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Layer 2: CTA Content */}
          <div data-parallax="content" className="relative z-30 h-full flex flex-col items-center justify-center px-8">
            <h2 className="text-[clamp(56px,8vw,112px)] leading-none tracking-tight font-medium text-center text-ink">
              {finalCta.heading}
              <span>
                {finalCta.headingEmphasis}
              </span>
            </h2>
            <div className="mt-5 text-[clamp(19px,2vw,24px)] text-white tracking-tight text-center whitespace-nowrap font-bold">
              {finalCta.subtitle}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/#download"
                className="inline-flex items-center gap-2.5 h-[56px] px-8 rounded-full text-[16px] font-medium bg-violet text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-violet-soft transition-colors"
              >
                {finalCta.ctaPrimary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative bg-white pt-24 pb-12 z-20 border-t border-line/10">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <img src="/logo-black.svg" alt="Clickefy Logo" className="h-6 w-auto" />
              </Link>
              <p className="text-ink-2 text-[16px] leading-relaxed mb-8 max-w-md">
                {footer.tagline}
              </p>
              <div className="flex gap-4">
                {footer.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-violet hover:border-violet hover:text-violet-soft hover:-translate-y-0.5 transition-all"
                    aria-label={social.name}
                  >
                    {socialIcons[social.name]}
                  </a>
                ))}
              </div>
            </div>

            {footer.columns.map((col) => (
              <div key={col.title} className="lg:col-span-1">
                <h4 className="font-mono text-[11px] text-ink-3 tracking-widest uppercase mb-6">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-ink-2 hover:text-violet transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-line flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
              <span className="text-ink-3 text-[14px]">
                {footer.copyright}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
