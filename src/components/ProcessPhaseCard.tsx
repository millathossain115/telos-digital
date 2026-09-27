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
      viewport={{ once: true, amount: 0.15 }}
      className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#F2E7DC] border border-[#E6DACD] ring-1 ring-inset ring-white/95 shadow-[0_12px_36px_rgba(20,19,18,0.04)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.08)] hover:border-amber-500/40 transition-all duration-400 overflow-hidden"
    >
      {/* Top subtle hairline amber highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Warm corner ambient backlight */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
        {/* Left: Phase Title & Deliverables (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-amber-500 text-[#141210] font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                {phase.step}
              </span>
              <span className="text-[11px] font-mono text-[#141312]/60 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 border border-[#E6DACD]">
                <Clock className="w-3 h-3 text-amber-700" />
                {phase.timeframe}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-800 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#141312] tracking-tight leading-snug">
                  {phase.title}
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[#141312]/75 leading-relaxed">
                {phase.summary}
              </p>
            </div>

            {/* Explicit Deliverables Checklist - Compact 2-column grid */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] font-mono text-[#141312]/55 uppercase tracking-wider font-bold">
                Deliverables & Outputs
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {phase.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/85 border border-[#E6DACD] text-xs text-[#141312]/90 leading-tight shadow-2xs hover:border-amber-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tooling Tags */}
          <div className="pt-2 border-t border-[#E6DACD]">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-[#141312]/55 uppercase tracking-wider font-bold mr-1">
                Tooling:
              </span>
              {phase.tooling.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-[#E6DACD] text-[#141312] shadow-2xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Client Touchpoints & Cadence Box (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-white/80 border border-[#E6DACD] p-5 shadow-2xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E6DACD]">
              <span className="text-xs font-mono text-[#141312] flex items-center gap-1.5 font-bold">
                <Terminal className="w-3.5 h-3.5 text-amber-600" />
                Client Cadence & Feedback
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 font-semibold uppercase">
                Touchpoints
              </span>
            </div>

            <div className="space-y-2">
              {phase.clientTouchpoints.map((tp, idx) => (
                <div
                  key={tp}
                  className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6DACD] text-xs text-[#141312]/85 leading-snug flex items-start gap-2 shadow-2xs hover:border-amber-500/30 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white border border-[#E6DACD] text-[10px] font-mono font-bold text-amber-700 flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{tp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Assurance Pill */}
          <div className="mt-4 pt-3 border-t border-[#E6DACD] flex items-center justify-between text-[11px] font-mono text-[#141312]/60">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Direct Async Channel
            </span>
            <span className="text-amber-800 font-semibold">Slack / Notion / Loom</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


