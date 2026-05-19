"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { intelligence } from '@/content';

const RoutingAnimation = () => {
  const d1 = "M 210 120 C 240 120, 240 50, 290 50";
  const d2 = "M 210 120 L 290 120";
  const d3 = "M 210 120 C 240 120, 240 190, 290 190";

  const lineAnim = { pathLength: [0, 1, 1], opacity: [0, 1, 0] };
  const lineTrans = (delay: number) => ({
    duration: 1.5,
    repeat: Infinity,
    times: [0, 0.6, 1],
    ease: "easeInOut" as const,
    delay,
    repeatDelay: 4.5,
  });

  const boxAnim = { 
    scale: [1, 1, 1.05, 1, 1],
    borderColor: [
      "rgba(0,0,0,0.1)", 
      "rgba(0,0,0,0.1)", 
      "rgba(124,58,237,0.8)", 
      "rgba(0,0,0,0.1)", 
      "rgba(0,0,0,0.1)"
    ],
    boxShadow: [
      "0 1px 2px 0 rgba(0,0,0,0.05)", 
      "0 1px 2px 0 rgba(0,0,0,0.05)", 
      "0 0 16px 2px rgba(124,58,237,0.35)", 
      "0 1px 2px 0 rgba(0,0,0,0.05)", 
      "0 1px 2px 0 rgba(0,0,0,0.05)"
    ]
  };
  
  const boxTrans = (delay: number) => ({
    duration: 1.5,
    repeat: Infinity,
    times: [0, 0.4, 0.6, 0.9, 1],
    ease: "easeInOut" as const,
    delay,
    repeatDelay: 4.5,
  });

  return (
    <div className="h-full w-full flex items-center justify-center p-6 md:p-10 relative">
      <svg viewBox="0 0 420 240" className="w-full max-w-[460px] overflow-visible">
        {/* Base Lines */}
        <path d="M 156 120 L 190 120" stroke="currentColor" className="text-black/10" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        <path d={d1} stroke="currentColor" className="text-black/10" strokeWidth="1.5" fill="none" />
        <path d={d2} stroke="currentColor" className="text-black/10" strokeWidth="1.5" fill="none" />
        <path d={d3} stroke="currentColor" className="text-black/10" strokeWidth="1.5" fill="none" />

        {/* Pulse 1 */}
        <motion.path d="M 156 120 L 190 120" stroke="#7c3aed" strokeWidth="2" fill="none"
          animate={lineAnim} transition={lineTrans(0)}
        />
        <motion.path d={d1} stroke="#7c3aed" strokeWidth="2" fill="none"
          animate={lineAnim} transition={lineTrans(0)}
        />

        {/* Pulse 2 */}
        <motion.path d="M 156 120 L 190 120" stroke="#7c3aed" strokeWidth="2" fill="none"
          animate={lineAnim} transition={lineTrans(2)}
        />
        <motion.path d={d2} stroke="#7c3aed" strokeWidth="2" fill="none"
          animate={lineAnim} transition={lineTrans(2)}
        />

        {/* Pulse 3 */}
        <motion.path d="M 156 120 L 190 120" stroke="#7c3aed" strokeWidth="2" fill="none"
          animate={lineAnim} transition={lineTrans(4)}
        />
        <motion.path d={d3} stroke="#7c3aed" strokeWidth="2" fill="none"
          animate={lineAnim} transition={lineTrans(4)}
        />

        {/* Nodes */}
        {/* Source Image Placeholder */}
        <foreignObject x="12" y="17" width="160" height="206">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[120px] h-[166px] rounded-xl flex items-center justify-center shadow-lg overflow-hidden relative">
               <img src="/IMG_7978.jpg" alt="Source" className="w-full h-full object-cover select-none pointer-events-none absolute inset-0" />
            </div>
          </div>
        </foreignObject>

        {/* Router Hub */}
        <foreignObject x="170" y="90" width="60" height="60">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div 
              className="w-[20px] h-[20px] border rounded-full flex items-center justify-center bg-white"
              animate={{ 
                scale: [1, 1.15, 1], 
                borderColor: ["rgba(0,0,0,0.1)", "rgba(124,58,237,0.4)", "rgba(0,0,0,0.1)"] 
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0 }}
            >
               <div className="w-1.5 h-1.5 bg-violet rounded-full" />
            </motion.div>
          </div>
        </foreignObject>

        {/* Dest 1: Motion */}
        <foreignObject x="270" y="17" width="140" height="66">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div 
              className="w-[100px] h-[26px] bg-white border rounded-md flex items-center px-2.5"
              animate={boxAnim} transition={boxTrans(0)}
            >
               <div className="w-1.5 h-1.5 rounded-full bg-violet/80 mr-2 flex-none" />
               <span className="font-mono text-[8.5px] tracking-wide text-ink-2 truncate">Motion Studio</span>
            </motion.div>
          </div>
        </foreignObject>

        {/* Dest 2: Stills */}
        <foreignObject x="270" y="87" width="140" height="66">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div 
              className="w-[100px] h-[26px] bg-white border rounded-md flex items-center px-2.5"
              animate={boxAnim} transition={boxTrans(2)}
            >
               <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80 mr-2 flex-none" />
               <span className="font-mono text-[8.5px] tracking-wide text-ink-2 truncate">High-Res Stills</span>
            </motion.div>
          </div>
        </foreignObject>

        {/* Dest 3: Texture */}
        <foreignObject x="270" y="157" width="140" height="66">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div 
              className="w-[100px] h-[26px] bg-white border rounded-md flex items-center px-2.5"
              animate={boxAnim} transition={boxTrans(4)}
            >
               <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mr-2 flex-none" />
               <span className="font-mono text-[8.5px] tracking-wide text-ink-2 truncate">Texture Engine</span>
            </motion.div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

const cardUIs = [
  // Model routing
  (
    <RoutingAnimation key="routing" />
  ),
  // Composition
  (
    <div key="composition" className="h-full flex items-end justify-center gap-3 p-6 md:p-10 pb-10">
      {[
        { w: "w-[48px] sm:w-[64px] md:w-[84px]", ratio: "9:16", aspect: "aspect-[9/16]", imgSrc: "/1779017177562-641e7b90-1d74-4e64-98a2-d80d0de5c984.png" },
        { w: "w-[56px] sm:w-[75px] md:w-[96px]", ratio: "4:5", aspect: "aspect-[4/5]", imgSrc: "/1779017056071-c6c0ca78-5cea-4c79-85c1-bbe004d76cf2.png" },
        { w: "w-[70px] sm:w-[90px] md:w-[120px]", ratio: "1:1", aspect: "aspect-[1/1]", imgSrc: "/1779017002084-2e9e1c9d-a6dd-4fba-a203-2460acfad1b9.png" },
        { w: "w-[120px] sm:w-[160px] md:w-[200px]", ratio: "16:9", aspect: "aspect-[16/9]", imgSrc: "/1779017234043-358f8ab0-9aab-475a-897c-2c2f74c38bfd.png" },
      ].map((f) => (
        <div key={f.ratio} className="flex flex-col items-center gap-2">
          <div
            className={`${f.w} ${f.aspect} rounded-xl flex items-end justify-end bg-[#1a1622] overflow-hidden relative`}
          >
            <img 
              src={f.imgSrc} 
              alt={f.ratio} 
              className="w-full h-full object-cover select-none pointer-events-none" 
            />
          </div>
          <span className="font-mono text-[10px] text-ink-3">{f.ratio}</span>
        </div>
      ))}
    </div>
  ),
  // Brand fidelity
  (
    <div key="fidelity" className="h-full flex flex-col justify-center gap-5 p-6 md:p-10">
      <div className="flex items-center justify-center gap-4">
        {/* References (2 images) */}
        <div className="flex gap-3">
          {[
            "/1779024111005-26683983-759d-4951-8140-92a3a9181cb7.png",
            "/1779024557691-09a0008f-de9a-4aac-a854-64cb12c698af.png"
          ].map((src, idx) => (
            <div key={idx} className="w-[76px] sm:w-[96px] aspect-[3/4] rounded-xl overflow-hidden relative shadow-sm">
              <img src={src} alt={`Ref ${idx+1}`} className="w-full h-full object-cover select-none pointer-events-none absolute inset-0" />
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="text-ink-3 font-mono text-lg px-2 flex-none">→</div>

        {/* Result Image */}
        <div className="w-[100px] sm:w-[130px] aspect-[3/4] rounded-xl overflow-hidden relative shadow-md">
          <img 
            src="/1779024406310-1de2a2ee-cd30-415f-b0f7-b25345cce407.png" 
            alt="Result" 
            className="w-full h-full object-cover select-none pointer-events-none absolute inset-0" 
          />
        </div>
      </div>
      <div className="flex justify-between font-mono text-[11px] text-ink-3">
        <span>2 references</span>
        <span>palette · light · styling</span>
      </div>
    </div>
  ),
  // Iteration
  (
    <div key="iteration" className="h-full flex flex-col justify-center gap-5 p-6 md:p-10">
      <div className="flex gap-3">
        {[
          { label: "v1", imgSrc: "/1779019817939-8a4017a4-ffda-46a0-bc57-24e438df6588.png" },
          { label: "v2", imgSrc: "/1779021613583-8251f06d-1055-4fe8-87ab-5442def4875e.png" },
          { label: "v3", imgSrc: "/1779021541278-c933aabf-168a-47f2-97c8-63c52d5b110e.png" },
        ].map((v) => (
          <div key={v.label}
            className="flex-1 aspect-square rounded-xl relative overflow-hidden bg-[#1a1622]"
          >
            <img 
              src={v.imgSrc} 
              alt={v.label} 
              className="w-full h-full object-cover select-none pointer-events-none absolute inset-0"
            />
            <span className="absolute top-1.5 left-2 font-mono text-[10px] text-white z-10 drop-shadow-md">{v.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between font-mono text-[11px] text-ink-3">
        <span>locked: product</span><span>swapping: background, light</span>
      </div>
    </div>
  ),
];

const accents = [
  "rgba(110,60,255,0.12)",
  "rgba(20,180,140,0.09)",
  "rgba(255,120,60,0.08)",
  "rgba(80,140,255,0.09)",
];

export default function Intelligence() {
  return (
    <section className="max-w-[1240px] mx-auto px-8 py-[120px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center max-w-[640px] mx-auto mb-16"
      >
        <h2 className="text-[clamp(38px,5vw,72px)] leading-none tracking-tight font-medium">
          {intelligence.heading}
          <span>{intelligence.headingEmphasis}</span>
        </h2>
        <p className="text-[clamp(17px,1.4vw,20px)] leading-relaxed text-ink-2 mt-5">
          {intelligence.subtitle}
        </p>
      </motion.div>

      {/* Stacked cards */}
      <div className="flex flex-col gap-4">
        {intelligence.cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.07 }}
            className="group rounded-[24px] border border-line overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[320px] bg-panel"
          >
            {/* Left — text */}
            <div className="flex flex-col justify-center p-8 md:p-12 gap-4">
              <span className="inline-block font-mono text-[11px] tracking-widest uppercase text-violet font-bold">
                {card.label}
              </span>
              <h3 className="text-[clamp(22px,2.2vw,28px)] leading-tight tracking-tight font-medium">
                {card.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-3 max-w-[42ch]">
                {card.body}
              </p>
            </div>

            {/* Right — decorative UI */}
            <div
              className="border-t md:border-t-0 md:border-l border-line min-h-[220px] bg-white"
            >
              {cardUIs[i]}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
