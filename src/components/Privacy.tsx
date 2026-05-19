"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { privacy } from '@/content';

export default function Privacy() {
  const [revealed, setRevealed] = useState<number | null>(null);

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
          {privacy.heading}<span className="tracking-tight">{privacy.headingEmphasis}</span>
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-0 border-y border-line">
        {privacy.items.map((p, i) => (
          <motion.div 
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            onMouseEnter={() => setRevealed(i)}
            onMouseLeave={() => setRevealed(null)}
            onClick={() => setRevealed(revealed === i ? null : i)}
            className="cursor-pointer py-7 px-5 border-r border-line last:border-r-0 max-md:border-r-0 max-md:border-b max-md:last:border-b-0 flex flex-col gap-3"
          >
            <span className="font-mono text-[11px] text-violet tracking-widest font-bold">{String(i+1).padStart(2,'0')}</span>
            <div className="grid grid-cols-1 grid-rows-1 items-start">
              <motion.h4 
                initial={{ opacity: 1 }}
                animate={{ opacity: revealed === i ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="col-start-1 row-start-1 text-[17px] font-medium tracking-tight leading-tight"
              >
                {p.title}
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: revealed === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="col-start-1 row-start-1 text-ink-3 text-[13.5px] m-0"
              >
                {p.body}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.section>
  );
}
