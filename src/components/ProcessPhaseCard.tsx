"use client";

import { Compass, PenTool, Code2, Rocket, Clock, CheckCircle2, Terminal } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { ProcessPhase } from "@/types/process";

const ICON_MAP = {
  compass: Compass,
  penTool: PenTool,
  code2: Code2,
  rocket: Rocket,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

interface ProcessPhaseCardProps {
  phase: ProcessPhase;
  index: number;
}

export function ProcessPhaseCard({ phase, index }: ProcessPhaseCardProps) {
  const IconComponent = ICON_MAP[phase.icon as keyof typeof ICON_MAP] || Compass;

  return (
    <motion.section
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative p-6 sm:p-9 rounded-[2rem] bg-gradient-to-br from-[#F7F2EB] via-[#F2ECE3] to-[#EAE1D5] border border-[#DDD3C7]/90 hover:border-amber-500/40 transition-all duration-500 shadow-[0_4px_6px_-1px_rgba(20,19,18,0.03),0_18px_45px_-6px_rgba(40,28,15,0.08),0_30px_70px_-12px_rgba(217,119,6,0.06)] hover:shadow-[0_8px_12px_-2px_rgba(20,19,18,0.04),0_24px_55px_-4px_rgba(40,28,15,0.12),0_36px_85px_-10px_rgba(217,119,6,0.14)] overflow-hidden"
    >
      {/* Top subtle border highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Warm corner ambient backlight */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 blur-3xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-600/5 blur-3xl opacity-30 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
        {/* Left: Phase Title & Scope (7 Cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-white/90 border border-amber-600/20 text-amber-900 font-semibold shadow-xs backdrop-blur-xs">
              {phase.step}
            </span>
            <span className="text-xs font-mono text-neutral-600 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 border border-black/[0.04]">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              {phase.timeframe}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-amber-500/20 flex items-center justify-center text-amber-700 shadow-sm group-hover:scale-105 group-hover:border-amber-500/40 transition-all duration-300">
                <IconComponent className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#141312] tracking-tight leading-snug">
                {phase.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {phase.summary}
            </p>
          </div>

          {/* Explicit Deliverables Checklist - Compact 2-column grid */}
          <div className="space-y-2 pt-1">
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider font-medium">
              Tangible Deliverables
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {phase.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/75 border border-black/[0.04] text-xs text-neutral-700 leading-snug hover:bg-white/95 transition-all shadow-[0_2px_6px_rgba(20,19,18,0.02)] hover:shadow-[0_4px_12px_rgba(20,19,18,0.05)]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tooling Tags */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider font-medium">
              Stack & Tooling
            </div>
            <div className="flex flex-wrap gap-1.5">
              {phase.tooling.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/80 border border-black/[0.07] text-neutral-700 shadow-xs font-medium hover:border-amber-500/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Client Touchpoints & Workflow (5 Cols) */}
        <div className="lg:col-span-5">
          <motion.div
            animate={{
              y: [0, -16, 0],
              rotate: [0, -0.75, 0.75, 0],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.18,
            }}
            whileHover={{ y: -4, rotate: 0, transition: { duration: 0.2, ease: "easeOut" } }}
            style={{ willChange: "transform" }}
            className="rounded-2xl bg-gradient-to-b from-white via-[#FCFAF7] to-[#F7F3EC] border border-black/[0.08] p-5 sm:p-6 space-y-3.5 shadow-[0_12px_28px_-4px_rgba(30,20,12,0.1),0_24px_52px_-8px_rgba(217,119,6,0.16)] hover:border-amber-500/40 hover:shadow-[0_16px_36px_-4px_rgba(30,20,12,0.14),0_30px_60px_-6px_rgba(217,119,6,0.22)] transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-black/[0.06]">
              <span className="text-xs font-mono text-neutral-700 flex items-center gap-2 font-medium">
                <Terminal className="w-3.5 h-3.5 text-amber-600" />
                Client Cadence
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-800 font-semibold uppercase">
                Touchpoints
              </span>
            </div>

            <div className="space-y-2">
              {phase.clientTouchpoints.map((tp) => (
                <div
                  key={tp}
                  className="p-2.5 rounded-xl bg-white/90 border border-black/[0.05] text-xs text-neutral-700 leading-snug flex items-start gap-2 shadow-xs hover:border-amber-500/30 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                  <span>{tp}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}


