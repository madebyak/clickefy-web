"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { finalCta } from '@/content';

export default function FinalCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 py-[160px] text-center flex flex-col items-center"
    >
      <h2 className="text-[clamp(56px,8vw,112px)] leading-none tracking-tight font-medium">
        {finalCta.heading}<span>{finalCta.headingEmphasis}</span>
      </h2>
      <div className="mt-4 text-[clamp(19px,2vw,24px)] text-ink-2 tracking-tight">{finalCta.subtitle}</div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#download" 
          className="inline-flex items-center gap-2.5 h-[56px] px-8 rounded-full text-[16px] font-medium bg-violet text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-8px_rgba(110,60,255,0.55)] hover:bg-violet-soft transition-colors"
        >
          {finalCta.ctaPrimary}
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.28)" }}
          whileTap={{ scale: 0.95 }}
          href="#templates" 
          className="inline-flex items-center gap-2.5 h-[56px] px-8 rounded-full text-[16px] font-medium bg-transparent text-ink border border-line-2 transition-colors"
        >
          {finalCta.ctaSecondary}
        </motion.a>
      </div>
    </motion.section>
  );
}
