"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { logoStrip } from '@/content';

export default function LogoStrip() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 py-20"
    >
      <div className="text-center text-ink-3 text-[13.5px]">{logoStrip.tagline}</div>
      <div className="mt-9 flex flex-wrap justify-center gap-x-10 gap-y-3 text-ink-2">
        {logoStrip.logos.map((l, i) => (
          <motion.div 
            key={l} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            className="h-7 flex items-center text-[17px] font-medium tracking-tight cursor-default"
          >
            {l}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
