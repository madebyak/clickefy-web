"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { pricing } from '@/content';

export default function Pricing() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 py-[120px] relative" 
      id="pricing"
    >
      <div className="text-center max-w-[800px] mx-auto mb-14">
        <h2 className="text-[clamp(38px,5vw,72px)] leading-none tracking-tight font-medium">
          {pricing.heading}
        </h2>
        <p className="mt-5 text-[clamp(17px,1.4vw,20px)] leading-relaxed text-ink-2 max-w-[50ch] mx-auto">
          {pricing.subtitle}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricing.tiers.map((t, i) => (
          <motion.div 
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={`p-7 pt-7 pb-7.5 rounded-[22px] border flex flex-col gap-4 relative transition-colors ${
              t.style === 'recommended' 
                ? 'border-violet/60 bg-violet/[0.05]' 
                : t.style === 'best'
                  ? 'border-gold/50 bg-gold/[0.05]'
                  : 'border-line bg-panel hover:border-line-2'
            }`}
          >
            {t.badge && (
              <span className={`absolute -top-2.5 left-6 h-[22px] px-2.5 rounded-full font-mono text-[10.5px] tracking-widest inline-flex items-center ${
                t.style === 'recommended' ? 'bg-violet text-white' : 'bg-gold text-[#1a1208]'
              }`}>
                {t.badge}
              </span>
            )}
            <div className="text-sm text-ink-2 tracking-wide">{t.name}</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[44px] tracking-tight font-medium">{t.price}</span>
              <span className="text-[13px] text-ink-3">{t.period}</span>
            </div>
            <div className="text-ink-3 text-[13.5px]">{t.description}</div>
            <ul className="flex flex-col gap-2.5 mt-2 flex-1">
              {t.features.map(f => (
                <li key={f} className="text-[13.5px] text-ink-2 flex gap-2.5 items-start">
                  <span className={`flex-none w-3.5 h-3.5 mt-[3px] rounded-full border ${
                    t.style === 'best' 
                      ? 'bg-gold/20 border-gold/50' 
                      : 'bg-violet/20 border-violet/45'
                  }`} />
                  {f}
                </li>
              ))}
            </ul>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#" 
              className={`mt-4 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full text-[14.5px] font-medium transition-colors w-full ${
                t.style === 'recommended' 
                  ? 'bg-violet text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-violet-soft' 
                  : 'bg-transparent text-ink border border-line-2 hover:bg-violet hover:text-white hover:border-violet'
              }`}
            >
              {t.cta}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
