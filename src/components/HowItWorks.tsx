"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { howItWorks } from '@/content';

/* ── Mini phone mockup inside each card ── */
function PhoneMockup({ label, ratio, tag, imgSrc }: { label: string; ratio: string; tag: string; imgSrc?: string }) {
  return (
    <div className="relative w-[160px] mx-auto aspect-[9/19.5] bg-[#0c0c14] rounded-[28px] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Notch */}
      <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[30%] h-[14px] bg-black rounded-full z-20" />
      {/* Screen */}
      <div className="absolute inset-[5px] rounded-[22px] bg-[#0a0a12] overflow-hidden flex flex-col">
        {imgSrc ? (
          <img 
            src={imgSrc} 
            alt={label} 
            className="w-full h-full object-cover select-none pointer-events-none" 
          />
        ) : (
          <>
            <div className="h-[36px] px-3 pt-[22px] flex justify-between items-center font-mono text-[7px] text-ink-3">
              <span>9:41</span>
              <span>Clickefy</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-3 gap-2">
              <div
                className="w-full rounded-[8px] relative flex items-center justify-center text-ink-4 font-mono text-[7px] tracking-widest aspect-[4/3] bg-[#1a1622]"
              >
                <span>{ratio}</span>
              </div>
              <div className="flex items-center justify-between w-full font-mono text-[6.5px] text-ink-3 px-0.5">
                <span>{label}</span>
                <span className="px-1 py-0.5 rounded bg-violet/20 text-violet-soft text-[6px]">{tag}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const phoneMockups = [
  { label: 'template · browse', ratio: 'CATALOG · 4:5', tag: 'template', imgSrc: '/IMG_7970.png' },
  { label: 'upload · set ratio', ratio: 'UPLOAD · 1:1', tag: 'photo', imgSrc: '/IMG_7973.png' },
  { label: 'export · download', ratio: 'RENDER · 16:9', tag: 'export', imgSrc: '/IMG_7975.png' },
];

export default function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="max-w-[1240px] mx-auto px-8 py-[120px] relative"
      id="how"
    >
      {/* ── Centered heading ── */}
      <div className="text-center max-w-[720px] mx-auto mb-16">
        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-tight font-medium">
          {howItWorks.heading}{' '}
          <span className="block">{howItWorks.headingLine2}</span>
        </h2>
        <p className="mt-5 text-[clamp(15px,1.2vw,18px)] text-ink-3 leading-relaxed max-w-[52ch] mx-auto whitespace-pre-line">
          {howItWorks.subtitle}
        </p>
      </div>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {howItWorks.steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="group relative rounded-[24px] bg-panel border border-line p-8 pb-0 flex flex-col overflow-hidden"
          >
            {/* Text content */}
            <div className="flex flex-col gap-3 mb-8">
              <h3 className="text-[22px] tracking-tight font-medium">{s.title}</h3>
              <p className="text-ink-3 text-[15px] leading-relaxed m-0">{s.body}</p>
            </div>

            {/* Phone mockup — anchored to bottom of card */}
            <div className="mt-auto pt-4 flex justify-center translate-y-[20px] group-hover:translate-y-[10px] transition-transform duration-500 ease-out">
              <PhoneMockup 
                label={phoneMockups[i].label} 
                ratio={phoneMockups[i].ratio} 
                tag={phoneMockups[i].tag} 
                imgSrc={phoneMockups[i].imgSrc} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
