"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { socialProof } from '@/content';

export default function SocialProof() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 pt-[120px] pb-0 relative text-center flex flex-col items-center"
    >
      <div className="grid gap-4 max-w-[880px] justify-items-center">
        <h2 className="text-[clamp(38px,5vw,72px)] leading-tight tracking-tight font-medium text-black">
          {socialProof.headingPlain}{socialProof.headingEmphasis}{socialProof.headingEnd}
        </h2>
        <p className="mt-3 text-[clamp(17px,1.4vw,20px)] leading-relaxed text-ink-2 max-w-[56ch]">
          {socialProof.subtitle}
        </p>
      </div>
    </motion.section>
  );
}
