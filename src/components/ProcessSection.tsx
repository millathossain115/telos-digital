"use client";

import { useState } from "react";
import { Compass, PenTool, Code2, Rocket, Check, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    phase: "Discovery & Architecture",
    timeline: "Weeks 1–2",
    description:
      "We map out your data models, security boundaries, and edge cases. You receive an interactive system diagram and explicit specs before code is written.",
    deliverable: "Architecture Blueprint & Schema",
    icon: Compass,
    badge: "Foundation",
    theme: {
      iconBg: "bg-amber-500/10 text-amber-700 border-amber-500/25",
      badgeStyle: "bg-amber-50 text-amber-800 border-amber-200",
      accentWash: "from-amber-500/[0.04] via-transparent to-transparent",
      numberColor: "text-amber-200 group-hover:text-amber-600",
      spotlight: "rgba(217, 119, 6, 0.12)",
    },
  },
  {
    number: "02",
    phase: "UI/UX & Design Tokens",
    timeline: "Weeks 2–3",
    description:
      "No placeholder designs. Complete click-through Figma prototypes built with real production variables, responsive layouts, and typed design tokens.",
    deliverable: "Interactive Figma & Tokens",
    icon: PenTool,
    badge: "Interface",
    theme: {
      iconBg: "bg-orange-500/10 text-orange-700 border-orange-500/25",
      badgeStyle: "bg-orange-50 text-orange-800 border-orange-200",
      accentWash: "from-orange-500/[0.04] via-transparent to-transparent",
      numberColor: "text-orange-200 group-hover:text-orange-600",
      spotlight: "rgba(234, 88, 12, 0.12)",
    },
  },
  {
    number: "03",
    phase: "Sprint Execution & CI/CD",
    timeline: "Weeks 3–8",
    description:
      "Bi-weekly deployments to staging environments. 100% typed TypeScript with automated testing pipelines and async video walkthroughs every 14 days.",
    deliverable: "Live Staging Builds Every 14 Days",
    icon: Code2,
    badge: "Velocity",
    theme: {
      iconBg: "bg-blue-500/10 text-blue-700 border-blue-500/25",
      badgeStyle: "bg-blue-50 text-blue-800 border-blue-200",
      accentWash: "from-blue-500/[0.04] via-transparent to-transparent",
      numberColor: "text-blue-200 group-hover:text-blue-600",
      spotlight: "rgba(37, 99, 235, 0.12)",
    },
  },
  {
    number: "04",
    phase: "Launch & IP Handover",
    timeline: "Release & Beyond",
    description:
      "Zero-downtime cutover to cloud production. Complete transfer of 100% source code ownership, documentation runbooks, and ongoing monitoring support.",
    deliverable: "Production Release & Full IP Rights",
    icon: Rocket,
    badge: "Production",
    theme: {
      iconBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
      badgeStyle: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentWash: "from-emerald-500/[0.04] via-transparent to-transparent",
      numberColor: "text-emerald-200 group-hover:text-emerald-600",
      spotlight: "rgba(5, 150, 105, 0.12)",
    },
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ProcessCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 380, damping: 26 },
      }}
      className="group relative rounded-3xl bg-[#FFFFFF] border border-black/[0.08] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(20,19,18,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(20,19,18,0.12)] transition-all duration-500 overflow-hidden"
    >
      {/* Top ambient color wash */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${step.theme.accentWash}`} />

      {/* Dynamic cursor spotlight with step theme glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-10"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${step.theme.spotlight}, transparent 70%)`,
        }}
      />

      {/* Top row */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          {/* Luminous Orb Icon */}
          <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105 ${step.theme.iconBg}`}>
            <Icon className="w-5 h-5 transition-transform group-hover:rotate-6" />
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono px-2.5 py-1 rounded-full border font-semibold ${step.theme.badgeStyle}`}>
              {step.badge}
            </span>
            <span className={`font-mono text-2xl font-bold transition-colors ${step.theme.numberColor}`}>
              {step.number}
            </span>
          </div>
        </div>

        {/* Timeline badge */}
        <div className="inline-block text-[11px] font-mono font-medium text-neutral-600 bg-[#FAF8F5] px-2.5 py-0.5 rounded-md border border-black/[0.06] mb-3">
          {step.timeline}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#141312] tracking-tight mb-2.5 group-hover:text-black transition-colors">
          {step.phase}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
          {step.description}
        </p>
      </div>

      {/* Bottom deliverable footer */}
      <div className="relative z-10 pt-5 border-t border-black/[0.06] bg-[#FAF8F5]/60 -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 px-7 sm:px-8 py-5">
        <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
          Key Deliverable:
        </div>
        <div className="text-xs font-semibold text-[#141312] leading-snug">
          {step.deliverable}
        </div>
      </div>
    </motion.div>
  );
}


export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 relative bg-[#FAF8F5] overflow-hidden">
      {/* Warm ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[850px] h-[500px] bg-gradient-to-tr from-amber-200/15 via-[#FAF8F5] to-amber-100/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            How We Ship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.03em] text-[#141312] leading-[1.15]">
            How we ship,{" "}
            <span className="font-serif italic font-normal text-amber-700">from zero to release</span>.
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Predictable sprints, bi-weekly live staging demos, and zero black-box surprises.
          </p>
        </div>

        {/* 4 Cards Grid with progression connection line */}
        <div className="relative">
          {/* Subtle horizontal timeline connector line behind cards on desktop */}
          <div className="hidden lg:block absolute top-14 inset-x-12 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent pointer-events-none -z-0" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {STEPS.map((step, idx) => (
              <ProcessCard key={step.number} step={step} index={idx} />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 rounded-2xl bg-[#FFFFFF] border border-black/[0.08] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_2px_12px_rgba(20,19,18,0.03)]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs sm:text-sm text-neutral-700 font-medium">
              Ready to turn your roadmap into production software? Average kickoff takes under 5 business days.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full bg-[#141312] text-white hover:bg-neutral-800 transition whitespace-nowrap shadow-sm active:scale-95"
          >
            Schedule a Kickoff
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

