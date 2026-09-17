"use client";

import { useRef, useState } from "react";
import { ShieldAlert, X, Check } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { AboutComparisonRow } from "@/types/about";

interface AboutComparisonSectionProps {
  comparisonRows: AboutComparisonRow[];
}

export function AboutComparisonSection({
  comparisonRows = [],
}: AboutComparisonSectionProps) {
  const comparisonSectionRef = useRef<HTMLElement>(null);
  const [isComparisonHovered, setIsComparisonHovered] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 220, mass: 0.2 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 220, mass: 0.2 });

  function handleComparisonMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!comparisonSectionRef.current) return;
    const rect = comparisonSectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={comparisonSectionRef}
      onMouseMove={handleComparisonMouseMove}
      onMouseEnter={() => setIsComparisonHovered(true)}
      onMouseLeave={() => setIsComparisonHovered(false)}
      className="w-full relative bg-[#141312] text-white overflow-hidden transition-colors"
    >
      {/* Warm Golden Cursor Follower Flare */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute w-[650px] h-[650px] rounded-full blur-[140px] z-10 transition-opacity duration-300"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isComparisonHovered ? 0.28 : 0,
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, rgba(217, 119, 6, 0.25) 40%, transparent 70%)",
        }}
      />

      {/* Precision Micro-Ring Cursor Follower */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute w-6 h-6 rounded-full border border-amber-400/70 z-20 transition-opacity duration-300 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isComparisonHovered ? 1 : 0,
        }}
      />

      {/* Subtle blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f59e0b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Ambient directional glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
        {/* Header with high-visibility divider */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/20 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>The Anti-Agency Thesis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Traditional Agencies vs.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 whitespace-nowrap">
                Telos Digital
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed lg:text-right shrink-0">
            Why modern founders avoid bloated retainers and junior outsourcing in favor of our senior architecture group.
          </p>
        </div>

        {/* Vertically Compact Comparison Matrix */}
        <div className="space-y-3.5">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/40 transition-all items-center shadow-xs"
            >
              {/* Criterion */}
              <div className="md:col-span-3 text-xs sm:text-sm font-mono font-bold text-amber-300 flex items-center gap-2">
                <span className="text-[10px] text-neutral-500 font-mono">
                  0{idx + 1}
                  {" //"}
                </span>
                <span>{row.criterion}</span>
              </div>

              {/* Traditional Agency Flaw */}
              <div className="md:col-span-4 flex items-center gap-2.5 text-xs text-rose-300/90 p-3 rounded-xl bg-rose-950/20 border border-rose-500/20">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="line-through decoration-rose-400/60 font-medium">
                  {row.traditional}
                </span>
              </div>

              {/* Telos Advantage */}
              <div className="md:col-span-5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white p-3 rounded-xl bg-amber-500/15 border border-amber-500/35 shadow-xs">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="tracking-tight text-white">{row.telos}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
