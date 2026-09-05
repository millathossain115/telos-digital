"use client";

import { motion } from "framer-motion";
import type { AboutStandard } from "@/types/about";

interface AboutStandardsProps {
  standards: AboutStandard[];
}

export function AboutStandards({ standards }: AboutStandardsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-7 sm:p-9 rounded-3xl bg-[#F3EFEA] border border-black/[0.08] shadow-[0_12px_36px_rgba(20,19,18,0.03)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {standards.map((std) => (
          <div
            key={std.id}
            className="flex flex-col justify-between border-l border-black/[0.08] pl-5"
          >
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider font-medium">
              {std.label}
            </div>
            <div className="text-xl sm:text-2xl font-semibold text-[#141312] tracking-tight mt-1.5">
              {std.value}
            </div>
            <div className="text-xs text-neutral-600 mt-1 font-mono">
              {std.detail}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
