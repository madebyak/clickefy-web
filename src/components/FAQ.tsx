"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);
  
  const items = [
    { q: "How is this different from a generic AI image tool?", a: "Clickefy is a templated product studio, not a prompt box. Every template is tuned by category for light, surface, and pacing — and the engine routes each job to the right underlying model so you don't have to know one from another." },
    { q: "Do I keep the rights to what I generate?", a: "Yes. Full commercial rights to every image and clip. No watermarks, no royalty splits, no exclusivity claims on your imagery." },
    { q: "Are my uploads used to train your models?", a: "No. Uploads aren't used to train public models. Your product photos and references stay in your project." },
    { q: "How long does a generation take?", a: "Stills land in 20–25 seconds. Motion clips land in 30–40 seconds. Render queue is prioritized for Pro tiers." },
    { q: "What resolutions can I export at?", a: "Free exports at 1080p. Pro tiers export at up to 4K for stills and 1080p for motion, with platform-specific presets for every major surface." },
    { q: "Can I match a moodboard or past campaign?", a: "Yes. Drop up to five references and the engine will read palette, lighting, and styling cues — without altering the product itself." },
    { q: "Is there a desktop version?", a: "Clickefy is mobile-first today — iOS and Android. A desktop companion for projects and exports is on the roadmap for late 2026." },
    { q: "What if I cancel?", a: "You keep every export already in your library. Saved templates and projects stay readable, and you can re-upgrade any time without losing them." },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 py-[120px] relative" 
      id="faq"
    >
      <div className="grid gap-4 max-w-[880px]">
        <span className="inline-block font-mono text-[11.5px] tracking-[0.06em] text-ink-3">
          {"// frequently asked"}
        </span>
        <h2 className="text-[clamp(38px,5vw,72px)] leading-none tracking-tight font-medium">
          Questions, answered.
        </h2>
      </div>

      <div className="mt-14 max-w-[880px] flex flex-col border-t border-line">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-line">
              <button 
                className={`w-full flex items-center justify-between text-left py-6 transition-colors ${isOpen ? 'text-white' : 'text-ink hover:text-white'}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="text-[19px] tracking-tight font-medium pr-8">{it.q}</span>
                <span className={`text-[24px] font-light text-ink-3 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pt-2 text-[15.5px] leading-relaxed text-ink-2 max-w-[70ch]">
                      {it.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
