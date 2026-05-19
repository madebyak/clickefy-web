"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { featureGrid } from '@/content';
import { Library, Images, Film, Crop, Bookmark, Folder, Bell, Download } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  library: <Library className="w-4.5 h-4.5 text-violet stroke-[2.5]" />,
  images: <Images className="w-4.5 h-4.5 text-violet stroke-[2.5]" />,
  film: <Film className="w-4.5 h-4.5 text-violet stroke-[2.5]" />,
  crop: <Crop className="w-4.5 h-4.5 text-violet stroke-[2.5]" />,
  bookmark: <Bookmark className="w-4.5 h-4.5 text-violet stroke-[2.5]" />,
  folder: <Folder className="w-4.5 h-4.5 text-violet stroke-[2.5]" />,
  bell: <Bell className="w-4.5 h-4.5 text-violet stroke-[2.5]" />,
  download: <Download className="w-4.5 h-4.5 text-violet stroke-[2.5]" />,
};

export default function FeatureGrid() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1240px] mx-auto px-8 py-[120px] relative" 
      id="features"
    >
      <div className="text-center max-w-[800px] mx-auto mb-14">
        <h2 className="text-[clamp(38px,5vw,72px)] leading-none tracking-tight font-medium">
          {featureGrid.heading}
        </h2>
        <p className="mt-5 text-[clamp(17px,1.4vw,20px)] leading-relaxed text-ink-2 mx-auto">
          {featureGrid.subtitle}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden">
        {featureGrid.features.map((f, i) => (
          <motion.div 
            key={f.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ backgroundColor: "var(--color-bg-2)" }}
            className="bg-bg p-7 pb-8 min-h-[200px] flex flex-col gap-3.5 transition-colors"
          >
            <div className="w-9 h-9 rounded-[10px] border border-violet/20 bg-violet/[0.02] grid place-items-center">
              {iconMap[f.icon]}
            </div>
            <h4 className="text-base font-medium tracking-tight leading-tight">{f.title}</h4>
            <p className="text-ink-3 text-[13.5px] leading-relaxed m-0">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
