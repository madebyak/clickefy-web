"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/content';

export default function Testimonials() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Calculate rotation angles (cap at 20 degrees max)
    const rX = -(mouseY / height) * 30;
    const rY = (mouseX / width) * 30;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 py-[120px] relative"
    >
      <div className="text-center max-w-[800px] mx-auto mb-14">
        <h2 className="text-[clamp(38px,5vw,72px)] leading-none tracking-tight font-medium">
          {testimonials.heading}
        </h2>
      </div>

      <div className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {testimonials.quotes.map((x, i) => (
          <motion.div 
            key={x.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="break-inside-avoid p-6 rounded-[18px] border border-violet bg-panel flex flex-col gap-4 transition-colors"
          >
            <div className="text-base leading-relaxed text-ink tracking-tight">&quot;{x.quote}&quot;</div>
            <div className="flex items-center gap-3">
              {x.avatar ? (
                <img src={x.avatar} alt={x.name} className="w-9 h-9 rounded-full object-cover border border-line-2" />
              ) : (
                <div className="w-9 h-9 rounded-full bg-[#f0f0f5] border border-line-2 grid place-items-center font-display text-base text-ink-2">
                  {x.initial}
                </div>
              )}
              <div>
                <div className="text-sm font-medium">{x.name}</div>
                <div className="text-[12.5px] text-ink-3">{x.role}</div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ═══ Concept 1 (Frameless & Aligned): Interactive 3D Rotated Overlay ═══ */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
          className="break-inside-avoid p-6 flex flex-col justify-between min-h-[260px] cursor-pointer relative group select-none"
        >
          <motion.div
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
            style={{ transformStyle: "preserve-3d" }}
            className="w-full h-full flex flex-col justify-between gap-6 relative"
          >
            {/* Texts at the top (perfectly aligned with neighboring reviews) */}
            <div className="text-left w-full" style={{ transform: "translateZ(20px)" }}>
              <div className="text-[11.5px] font-mono text-violet font-bold uppercase tracking-wider mb-2">Your brand could be next</div>
              <div className="text-[15.5px] leading-relaxed font-medium text-ink tracking-tight">
                We’d love to hear about what you create.
              </div>
            </div>

            {/* Visual stacked elements at the bottom (aligned with neighboring avatars) */}
            <div className="relative w-full h-16 flex items-center justify-start pl-6 mt-2" style={{ transformStyle: "preserve-3d" }}>
              {/* "Before" Card (Underneath, rotated left) */}
              <div 
                style={{ transform: "rotate(-10deg) translateZ(10px) translateX(-15px)" }}
                className="absolute w-24 h-14 rounded-lg border border-line bg-white flex flex-col justify-between p-2 shadow-sm transition-transform group-hover:scale-105"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-black/5" />
                <div className="font-mono text-[7px] text-ink-4 tracking-wider uppercase font-semibold">campaign set</div>
              </div>

              {/* "After" Card (On top, rotated right, floating high in 3D) */}
              <div 
                style={{ transform: "rotate(6deg) translateZ(30px) translateX(25px)" }}
                className="absolute w-24 h-14 rounded-lg bg-violet text-white flex flex-col justify-between p-2 shadow-[0_12px_24px_-4px_rgba(110,60,255,0.3)] border border-violet-soft/20 transition-transform group-hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <div className="w-3 h-3 rounded-full bg-white/20 flex items-center justify-center text-[7px]">✨</div>
                  <div className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
                </div>
                <div className="font-mono text-[7px] text-white/90 tracking-wider uppercase font-bold">STUDIO HERO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
