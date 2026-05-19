"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pillars } from '@/content';

const slideshowImages = [
  "/Section 1/1779108865817-31932812-2fe0-4008-b4c0-13c033f9a71c.png",
  "/Section 1/1779109432222-9666b59a-8d54-402b-8bdc-84bea3cb16a3.png",
  "/Section 1/1779109031354-d6d97afd-3501-496c-91f3-0e04a0052da1.png",
  "/Section 1/1779109186559-d8c6062b-6a11-45bf-a134-4a6a00339884.png",
  "/Section 1/1779109253413-e4eac7e0-4ce3-44ed-a8c5-ee9bd2a1d16e.png",
  "/Section 1/1779109544441-94df60c0-a7d3-44ad-ab90-7b18217908b0.png",
  "/Section 1/1779109732839-e5207d1a-60fd-4475-9275-c4164f196c55.png"
];

export default function Pillars() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % slideshowImages.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 pt-0 pb-20 relative"
    >
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-7 rounded-[24px] border border-line bg-panel flex flex-col gap-4 min-h-[380px]"
        >
          <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden grid place-items-center bg-[#161620] relative">
            <img 
              src={slideshowImages[currentImageIdx]}
              alt="Studio quality shot"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3 className="text-[22px] leading-[1.2] tracking-tight font-medium">{pillars[0].title}</h3>
          <p className="text-ink-3 text-sm m-0">{pillars[0].body}</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="p-7 rounded-[24px] border border-line bg-panel flex flex-col gap-4 min-h-[380px]"
        >
          <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden grid place-items-center bg-[#1a1410] relative">
            <video 
              src="/Section2/1779112808716-effcc786-944b-4fac-8465-c977ca8f5110.mp4"
              autoPlay
              muted
              playsInline
              loop
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3 className="text-[22px] leading-[1.2] tracking-tight font-medium">{pillars[1].title}</h3>
          <p className="text-ink-3 text-sm m-0">{pillars[1].body}</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="p-7 rounded-[24px] border border-line bg-panel flex flex-col gap-4 min-h-[380px]"
        >
          <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden grid grid-cols-[1.4fr_1fr] grid-rows-2 gap-1.5 bg-panel">
            <div className="row-span-2 rounded-lg overflow-hidden bg-[#18181f] relative">
              <img 
                src="/Section3/1779116309219-1ab8e762-0b3d-4ccc-8fcc-d3a58bfb419b (1).png" 
                alt="Tall layout frame" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="rounded-lg overflow-hidden bg-[#18181f] relative">
              <img 
                src="/Section3/1779116511715-e2b8752b-6ead-426c-a94e-aa2e568d4c9e.png" 
                alt="Visual set item 1" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="rounded-lg overflow-hidden bg-[#18181f] relative">
              <img 
                src="/Section3/1779116705455-0bca3b8a-040e-451b-9d37-d5e653c3bd79.png" 
                alt="Visual set item 2" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <h3 className="text-[22px] leading-[1.2] tracking-tight font-medium">{pillars[2].title}</h3>
          <p className="text-ink-3 text-sm m-0">{pillars[2].body}</p>
        </motion.div>

      </div>
    </motion.section>
  );
}
