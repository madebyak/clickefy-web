"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useCases } from '@/content';

export default function UseCases() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 py-[120px] relative"
    >
      <div className="grid gap-4 max-w-[880px] mx-auto text-center">
        <h2 className="text-[clamp(38px,5vw,72px)] leading-none tracking-tight font-medium">
          {useCases.heading}
        </h2>
      </div>

      <div className="mt-16 border-t border-line">
        {useCases.rows.map((r, i) => (
          <motion.div 
            key={r.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeInOut" }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            className="grid grid-cols-[50px_1fr] md:grid-cols-[80px_1.2fr_1.4fr_1fr] items-center py-6 border-b border-line gap-y-2 md:gap-y-0 gap-x-6 transition-colors"
          >
            <div className="font-mono text-xs text-violet font-bold tracking-widest">{String(i+1).padStart(2,'0')} / {String(useCases.rows.length).padStart(2,'0')}</div>
            <div className="text-2xl tracking-tight font-medium col-span-1 md:col-span-1">{r.title}</div>
            <div className="text-ink-3 text-[14.5px] col-start-2 md:col-start-3">{r.body}</div>
            <div className="font-mono text-[11px] text-ink-3 tracking-wider text-left md:text-right col-start-2 md:col-start-4">{r.output}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
