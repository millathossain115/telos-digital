"use client";

import { motion } from "framer-motion";
import type { AboutStandard } from "@/types/about";
import { Users, Timer, ShieldCheck, Globe, Sparkles } from "lucide-react";

interface AboutStandardsProps {
  standards: AboutStandard[];
}

const STANDARD_ICONS: Record<string, typeof Users> = {
  model: Users,
  cadence: Timer,
  ip: ShieldCheck,
  coverage: Globe,
};

export function AboutStandards({ standards }: AboutStandardsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-3 sm:p-4 rounded-[2.25rem] bg-gradient-to-b from-[#FAF7F2] via-[#F4ECE1] to-[#EAE0D3] border border-[#DDD3C7] shadow-[0_16px_45px_rgba(20,19,18,0.05)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {standards.map((std, idx) => {
          const Icon = STANDARD_ICONS[std.id] || Sparkles;

          return (
            <motion.div
              key={std.id}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className="relative rounded-2xl p-5 sm:p-6 bg-white/95 border border-black/[0.06] hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden shadow-2xs"
            >
              {/* Subtle ambient glow on hover */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-28 h-28 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Top Row: Icon + Label + Pulse */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700 group-hover:scale-110 group-hover:bg-[#141210] group-hover:text-amber-300 group-hover:border-[#141210] transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-amber-900 uppercase tracking-wider font-bold">
                    {std.label}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
              </div>

              {/* Value */}
              <div className="my-1">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#141312] tracking-tight group-hover:text-amber-900 transition-colors">
                  {std.value}
                </div>
              </div>

              {/* Detail Pill Footer */}
              <div className="text-xs text-[#141312]/75 mt-3 font-mono border-t border-black/[0.06] pt-2.5 font-medium flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-amber-600/60" />
                <span className="truncate">{std.detail}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

