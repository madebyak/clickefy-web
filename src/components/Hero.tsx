"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { hero } from '@/content';

function PhoneApp() {
  return (
    <div
      className="relative w-full aspect-[9/19.5] bg-[#0c0c14] rounded-[44px] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.2)] overflow-hidden origin-center"
      style={{ clipPath: "inset(0 round 44px)", border: "2px solid #1e1e2a", transform: "translateZ(0)" }}
    >
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[30%] h-[22px] bg-black rounded-full z-20" />
      <div className="absolute inset-2 rounded-[36px] bg-[#0c0c14] overflow-hidden">
        <img
          src="/IMG_7994.png"
          alt="Clickefy App Preview"
          className="w-full h-full object-cover rounded-[36px] scale-[1.05]"
        />
      </div>
    </div>
  );
}

function SidePhone({ title, tag, imgSrc }: { title: string, tag: string, imgSrc?: string }) {
  return (
    <div
      className="relative w-full aspect-[9/19.5] bg-[#0c0c14] rounded-[44px] border border-black/5 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.1)] overflow-hidden origin-center [transform:translateZ(0)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]"
    >
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[30%] h-[22px] bg-black rounded-full z-20" />
      <div className="absolute inset-2 rounded-[36px] bg-[#0c0c14] overflow-hidden">
        {imgSrc ? (
          <img src={imgSrc} alt={title} className="w-full h-full object-cover rounded-[36px]" />
        ) : (
          <div className="w-full h-full flex flex-col p-5 pt-[46px] gap-2.5 bg-white">
            <div className="font-mono text-[9px] text-ink-3 tracking-widest">{tag}</div>
            <div className="text-sm tracking-tight font-medium">{title}</div>
            <div className="flex-1 rounded-[10px] flex items-center justify-center text-ink-4 font-mono text-[9px] tracking-widest bg-[#f0f0f5]">
              <span>{tag}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="pt-[200px] pb-[120px] relative overflow-x-clip max-w-[1240px] mx-auto px-8" id="top">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center max-w-4xl z-10 relative"
        >
          <span className="inline-flex items-center gap-2.5 py-1.5 px-3 pl-2.5 rounded-full border border-line-2 bg-white/5 font-mono text-[11.5px] tracking-wider text-ink-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet" />
            {hero.badge.text}
            <span className="text-ink-4">·</span>
            {hero.badge.suffix}
          </span>
          <h1 className="mt-7 text-[clamp(48px,8.4vw,112px)] leading-[0.98] tracking-tight font-medium">
            {hero.heading}
            <span className="block text-ink tracking-tight pr-1">{hero.headingEmphasis}</span>
          </h1>
          <p className="mt-7 text-[clamp(17px,1.4vw,20px)] leading-relaxed text-ink-2 max-w-[56ch]">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#download"
              className="inline-flex items-center gap-2.5 h-[52px] px-[22px] rounded-full text-[15px] font-medium bg-violet text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-violet-soft transition-colors"
            >
              {hero.ctaPrimary}
            </motion.a>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2.5 text-ink-3 text-[13.5px]">
            {hero.notes.map((note, i) => (
              <React.Fragment key={note}>
                {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-ink-4" />}
                <span>{note}</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="group relative flex items-end justify-center -space-x-[60px] mt-24 mb-8 w-full max-w-[800px] mx-auto z-0"
        >
          {/* Ambient Studio Lighting Glow */}
          <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-110">
            <div className="absolute transition-transform duration-1000 ease-out group-hover:translate-x-16 group-hover:-translate-y-12">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-[450px] h-[450px] bg-violet/70 rounded-full blur-[90px] -translate-x-24 -translate-y-12"
                style={{ willChange: "transform, opacity" }}
              />
            </div>
            <div className="absolute transition-transform duration-1000 ease-out group-hover:-translate-x-16 group-hover:translate-y-16">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-[400px] h-[400px] bg-violet/50 rounded-full blur-[90px] translate-x-32 translate-y-20"
                style={{ willChange: "transform, opacity" }}
              />
            </div>
          </div>

          {/* Floating Prompt Tags */}
          {[
            { text: "Studio Photoshoot", top: "15%", left: "2%", delay: 0, duration: 4 },
            { text: "4:5 Post", top: "45%", left: "-8%", delay: 1, duration: 5 },
            { text: "Motion Clips", top: "20%", right: "0%", delay: 0.5, duration: 4.5 },
            { text: "Campaign Look", top: "55%", right: "-10%", delay: 1.5, duration: 5.5 },
            { text: "Product Catalog", top: "80%", right: "8%", delay: 0.8, duration: 4.2 },
            { text: "Carousel Templates", top: "85%", left: "6%", delay: 2, duration: 5 },
          ].map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0]
              }}
              transition={{
                opacity: { duration: 1, delay: 0.8 + tag.delay },
                scale: { duration: 1, delay: 0.8 + tag.delay, type: "spring" },
                y: { duration: tag.duration, repeat: Infinity, ease: "easeInOut", delay: tag.delay }
              }}
              className="hidden md:flex absolute items-center gap-2 px-3.5 py-2 rounded-full border border-black/5 bg-white/80 backdrop-blur-md shadow-sm text-[10px] font-mono text-ink-3 tracking-wider whitespace-nowrap pointer-events-none z-0"
              style={{ top: tag.top, left: tag.left, right: tag.right, willChange: "transform, opacity" }}
            >
              {tag.text}
            </motion.div>
          ))}

          <div className="w-[200px] animate-float-left relative z-0">
            <SidePhone title="Catalog still" tag="STILL · 1:1" imgSrc="/IMG_8110.PNG" />
          </div>
          <div className="w-[240px] animate-float-center relative z-10 shadow-2xl rounded-[44px]">
            <PhoneApp />
          </div>
          <div className="w-[200px] animate-float-right relative z-0">
            <SidePhone title="Scroll-stopper" tag="MOTION · 9:16" imgSrc="/IMG_8112.PNG" />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
