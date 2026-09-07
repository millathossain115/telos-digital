"use client";

import { Terminal, Code2, Lock, GitCommit, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { AboutPrinciple } from "@/types/about";

const ICON_MAP = {
  terminal: Terminal,
  code2: Code2,
  lock: Lock,
  gitCommit: GitCommit,
};

const PRINCIPLE_SPECS: Record<string, { badge: string; metrics: string; highlight: string }> = {
  "01": { badge: "Zero Junior Arbitrage", metrics: "Staff / Principal Only", highlight: "Direct architect commit access" },
  "02": { badge: "Zero-Assumption Runtime", metrics: "100% Strict Type Coverage", highlight: "Automated CI/CD & Zod validation" },
  "03": { badge: "Clean IP Transfer", metrics: "Day-One Legal Ownership", highlight: "Full git history & cloud credentials" },
  "04": { badge: "High Signal Velocity", metrics: "14-Day Sprint Cycles", highlight: "Async Loom & live preview staging" },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

interface AboutPrincipleCardProps {
  principle: AboutPrinciple;
  index: number;
}

export function AboutPrincipleCard({ principle, index }: AboutPrincipleCardProps) {
  const IconComponent = ICON_MAP[principle.icon as keyof typeof ICON_MAP] || Terminal;
  const spec = PRINCIPLE_SPECS[principle.number] || {
    badge: "Engineering Standard",
    metrics: "Production Grade",
    highlight: "Deterministic Execution",
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative rounded-[2rem] p-6 sm:p-7 bg-gradient-to-br from-[#FFFFFF] via-[#FAF6F0] to-[#F1E9DE] border border-[#DDD3C7] hover:border-amber-500/50 shadow-[0_12px_36px_rgba(20,19,18,0.04)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
    >
      {/* Top illuminated line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

      {/* Spatial ambient glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl opacity-40 group-hover:opacity-90 group-hover:scale-125 transition-all duration-700" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 bg-amber-600/5 rounded-full blur-xl opacity-30" />

      <div className="relative z-10">
        {/* Header telemetry pill row */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-amber-700 shadow-2xs group-hover:scale-105 group-hover:bg-[#141210] group-hover:text-amber-300 group-hover:border-[#141210] transition-all duration-300">
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wide uppercase bg-amber-500/10 text-amber-900 border border-amber-500/25 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
              {spec.badge}
            </span>
            <span className="text-xs font-mono text-[#141312]/40 font-bold">
              #{principle.number}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1 mb-3">
          <div className="text-[10px] font-mono font-bold tracking-wider text-amber-700 uppercase">
            {principle.tagline}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#141312] tracking-tight group-hover:text-amber-950 transition-colors">
            {principle.title}
          </h3>
        </div>

        {/* Description - Compact & Punchy */}
        <p className="text-xs sm:text-sm text-[#141312]/75 leading-relaxed font-sans font-normal mb-5">
          {principle.description}
        </p>
      </div>

      {/* Bottom Spec Footer Strip */}
      <div className="relative z-10 pt-3.5 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono">
        <div className="text-[#141312]/70 flex items-center gap-1.5 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span className="truncate font-medium">{spec.highlight}</span>
        </div>
        <span className="font-bold text-amber-900 bg-white/90 px-2 py-0.5 rounded-md border border-black/[0.06] text-[11px] shrink-0 ml-2 shadow-2xs">
          {spec.metrics}
        </span>
      </div>
    </motion.div>
  );
}

