"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/content";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="max-w-[880px] flex flex-col border-t border-line">
      {faqItems.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-b border-line">
            <button
              type="button"
              className={`w-full flex items-center justify-between text-left py-8 transition-colors ${isOpen ? "text-violet" : "text-ink hover:text-violet"}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="text-[21px] tracking-tight font-medium pr-8">{it.q}</span>
              <span
                className={`text-[24px] font-light text-ink-3 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-10 pt-2 text-[17px] leading-relaxed text-ink-2 max-w-[75ch]">
                    {it.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
