"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { nav } from '@/content';

export default function Nav() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 pt-6 px-8 pointer-events-none"
      data-screen-label="Nav"
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        <div className="flex-1 pointer-events-auto">
          <a href="#top" className="fixed pointer-events-auto z-50">
            <img src="/logo-black.svg" alt="Clickefy Logo" className="h-6 w-auto" />
          </a>
        </div>
        
        <div className="pointer-events-auto flex items-center gap-2 p-1.5 rounded-full border border-black/5 bg-white/70 backdrop-blur-lg shadow-sm">
          <div className="hidden md:flex items-center gap-1 px-4">
            {nav.links.map((link) => (
              <motion.a key={link.label} whileHover={{ color: "var(--color-ink)" }} href={link.href} className="px-3 py-2 text-[14px] font-medium text-ink-2 hover:bg-white/5 rounded-full transition-colors">{link.label}</motion.a>
            ))}
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#download" 
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full text-sm font-medium whitespace-nowrap bg-violet text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-violet-soft transition-colors"
          >
            {nav.cta}
          </motion.a>
        </div>
        
        <div className="flex-1 hidden md:block"></div>
      </div>
    </motion.nav>
  );
}
