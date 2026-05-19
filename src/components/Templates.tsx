"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { templates } from '@/content';

const cats = [
  { name: templates.categories[0], c1: "#1f1825", c2: "#0d0d15", imgSrc: "/Skin%20Care.png" },
  { name: templates.categories[1], c1: "#221a1a", c2: "#0d0d15", imgSrc: "/Fashion.png" },
  { name: templates.categories[2], c1: "#1f1a14", c2: "#0d0d15", imgSrc: "/food%20and%20drinks.png" },
  { name: templates.categories[3], c1: "#141a22", c2: "#0d0d15", imgSrc: "/Tech.png" },
  { name: templates.categories[4], c1: "#1c1a14", c2: "#0d0d15", imgSrc: "/1779009984632-17812ded-6d85-45bd-acde-5fe425014ee5.png" },
  { name: templates.categories[5], c1: "#171c1a", c2: "#0d0d15", imgSrc: "/Untitled%20design.png" },
  { name: templates.categories[6], c1: "#1d1722", c2: "#0d0d15", imgSrc: "/Jewelry.png" },
  { name: templates.categories[7], c1: "#1a1716", c2: "#0d0d15", imgSrc: "/Pets.png" },
];

const TemplateSet = () => (
  <div className="flex gap-4 pr-4">
    {cats.map((c, i) => (
      <motion.a 
        href="#" 
        key={c.name}
        whileHover={{ y: -4 }}
        className="w-[260px] md:w-[300px] shrink-0 aspect-[4/5] rounded-[20px] overflow-hidden bg-[#0e0e16] relative transition-all block group"
      >
        {!c.imgSrc && (
          <div 
            className="absolute inset-0 transition-opacity group-hover:opacity-80 bg-[#161621]" 
          />
        )}
        {c.imgSrc && (
          <img 
            src={c.imgSrc} 
            alt={c.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        )}
        <div className="absolute top-4 left-4 font-mono text-[10.5px] text-white tracking-widest z-10 drop-shadow-md">
          {String(i+1).padStart(2,'0')} · vertical
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[19px] tracking-tight font-medium z-10 text-white drop-shadow-md">
          <span>{c.name}</span>
          <span className="text-white/70 text-sm group-hover:translate-x-[3px] transition-transform">
            →
          </span>
        </div>
      </motion.a>
    ))}
  </div>
);

export default function Templates() {

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 py-[120px] relative" 
      id="templates"
    >
      <div className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-6 mb-16">
        <div className="grid gap-4">
          <h2 className="text-[clamp(38px,5vw,72px)] leading-tight tracking-tight font-medium">
            {templates.heading}
          </h2>
        </div>
        <p className="text-[clamp(17px,1.4vw,20px)] leading-relaxed text-ink-2 m-0">
          {templates.subtitle}
        </p>
      </div>

      <div 
        className="mt-16 w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden flex py-4" 
      >
        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          <TemplateSet />
          <TemplateSet />
        </motion.div>
      </div>
    </motion.section>
  );
}
