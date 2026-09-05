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
      className="p-8 sm:p-12 rounded-3xl bg-[#F3EFEA] border border-black/[0.08] hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden shadow-[0_12px_40px_rgba(20,19,18,0.03)] group"
    >
      {/* Warm corner ambient backlight */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
        {/* Left: Phase Title & Scope (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 font-semibold">
              {phase.step}
            </span>
            <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              {phase.timeframe}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center text-amber-700 shadow-xs">
                <IconComponent className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#141312] tracking-tight leading-snug">
                {phase.title}
              </h2>
            </div>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              {phase.summary}
            </p>
          </div>

          {/* Explicit Deliverables Checklist */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-medium">
              Tangible Deliverables
            </div>
            <div className="space-y-2.5">
              {phase.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tooling Tags */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-medium">
              Stack & Tooling
            </div>
            <div className="flex flex-wrap gap-2">
              {phase.tooling.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-white border border-black/[0.07] text-neutral-700 shadow-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Client Touchpoints & Workflow (5 Cols) with weightless floating motion */}
        <div className="lg:col-span-5 space-y-5">
          <motion.div
            animate={{
              y: [0, -14],
            }}
            transition={{
              duration: 2.2 + (index % 2) * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.45, 0.05, 0.55, 0.95],
              delay: index * 0.25,
            }}
            whileHover={{ y: 0, transition: { duration: 0.2, ease: "easeOut" } }}
            style={{ willChange: "transform" }}
            className="rounded-2xl bg-white border border-black/[0.08] p-6 sm:p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
              <span className="text-xs font-mono text-neutral-600 flex items-center gap-2 font-medium">
                <Terminal className="w-3.5 h-3.5 text-amber-600" />
                Client Interaction Cadence
              </span>
              <span className="text-[11px] font-mono text-amber-700 font-semibold uppercase">Touchpoints</span>
            </div>

            <div className="space-y-3">
              {phase.clientTouchpoints.map((tp) => (
                <div
                  key={tp}
                  className="p-3.5 rounded-xl bg-[#FAF8F5] border border-black/[0.05] text-xs sm:text-sm text-neutral-700 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
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


