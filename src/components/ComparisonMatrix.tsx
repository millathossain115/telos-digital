"use client";

import { useState, useRef } from "react";
import { Check, X, ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import Link from "next/link";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ComparisonMatrix() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for golden cursor spotlight
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 220, mass: 0.2 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 220, mass: 0.2 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      id="comparison"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-24 sm:py-32 relative bg-[#100F0E] text-white overflow-hidden border-y border-white/[0.08] cursor-default"
    >
      {/* Precision hairline dark grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-hairline-dark opacity-40" />

      {/* Interactive Golden Spotlight Tracker Follows Cursor */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[100px] z-[1] transition-opacity duration-500"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 0.28 : 0,
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, rgba(217, 119, 6, 0.25) 40%, transparent 70%)",
        }}
      />

      {/* Precision Micro-Ring Cursor Follower */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute w-6 h-6 rounded-full border border-amber-400/60 z-20 transition-opacity duration-300 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Dynamic Golden Gradient Glow Motions (Antigravity Floating Lights) */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        {/* Primary golden pulse orb */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.12, 0.95, 1],
            opacity: [0.35, 0.55, 0.38, 0.35],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(217, 119, 6, 0.45) 0%, rgba(180, 83, 9, 0.25) 45%, transparent 70%)",
          }}
        />

        {/* Secondary warm gold orb */}
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 40, -35, 0],
            scale: [0.95, 1.15, 1, 0.95],
            opacity: [0.25, 0.45, 0.3, 0.25],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[400px] rounded-full blur-[160px]"
          style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(217, 119, 6, 0.15) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-amber-400/25 shadow-sm mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-amber-200">
              The Comparison
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.03em] text-white leading-[1.15]">
            Comparing your options to{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              build and scale
            </span>.
          </h2>

          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            See how Telos Digital stacks up against traditional agencies and freelance networks across what actually matters.
          </p>
        </motion.div>

        {/* 3-Column Visual Comparison Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {/* Card 1: Traditional Agency */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-[#171614]/80 backdrop-blur-xl border border-white/[0.08] p-8 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/[0.16] transition-all"
          >
            <div>
              {/* Header */}
              <div className="pb-6 mb-6 border-b border-white/[0.08]">
                <div className="text-xs font-mono text-neutral-500 font-semibold tracking-wider uppercase mb-1">
                  Alternative 01
                </div>
                <h3 className="text-xl font-bold text-white">Traditional Agency</h3>
                <p className="text-xs text-neutral-400 mt-1">High overhead, layers of account managers</p>
              </div>

              {/* Specs */}
              <div className="space-y-4">
                {[
                  { label: "Team", val: "Senior pitch, junior builders", bad: true },
                  { label: "Speed", val: "5 to 9 months to launch", bad: true },
                  { label: "IP Ownership", val: "Retained proprietary frameworks", bad: true },
                  { label: "Code Quality", val: "Brittle MVPs, high rewrite debt", bad: true },
                  { label: "Access", val: "Filtered through project managers", bad: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0 text-rose-400">
                      <X className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-neutral-300">{item.label}</div>
                      <div className="text-xs text-neutral-500">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] text-center">
              <span className="text-xs text-neutral-500 font-mono">Best for: Enterprise RFPs &amp; slide decks</span>
            </div>
          </motion.div>

          {/* Card 2: TELOS DIGITAL (Grounded Center Card with Golden Gradient Border & Glow) */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-gradient-to-b from-[#221C14] via-[#1A1612] to-[#141210] border-2 border-amber-500/80 p-8 sm:p-9 flex flex-col justify-between shadow-[0_24px_60px_rgba(217,119,6,0.22),0_0_35px_rgba(245,158,11,0.15)] relative overflow-hidden lg:-translate-y-2 backdrop-blur-xl"
          >
            {/* Top golden shimmer gradient */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-36 bg-amber-400/25 blur-3xl rounded-full" />

            {/* Top Pill Highlight */}
            <div className="absolute top-0 right-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-b-xl bg-gradient-to-r from-amber-500 to-amber-600 text-[#141312] font-mono text-[10px] uppercase font-bold tracking-wider shadow-md">
                <Award className="w-3 h-3" />
                Recommended
              </span>
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="pb-6 mb-6 border-b border-amber-500/20">
                <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase mb-1 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-amber-400" />
                  The Telos Standard
                </div>
                <h3 className="text-2xl font-bold text-white">Telos Digital</h3>
                <p className="text-xs text-neutral-300 mt-1">Direct partnership with senior software architects</p>
              </div>

              {/* Specs */}
              <div className="space-y-4">
                {[
                  { label: "Team", val: "100% Staff & Principal engineers only" },
                  { label: "Speed", val: "Production ready in 6–10 weeks" },
                  { label: "IP Ownership", val: "100% full source & asset handover Day 1" },
                  { label: "Code Quality", val: "Typed Next.js & automated test suite" },
                  { label: "Access", val: "Direct Slack channel with your engineers" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.05] border border-amber-500/20">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">{item.label}</div>
                      <div className="text-xs text-amber-100/70">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-500/20 relative z-10">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#141312] text-xs font-bold hover:brightness-110 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all shadow-md active:scale-95"
              >
                <span>Partner with Telos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Freelancers */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-[#171614]/80 backdrop-blur-xl border border-white/[0.08] p-8 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/[0.16] transition-all"
          >
            <div>
              {/* Header */}
              <div className="pb-6 mb-6 border-b border-white/[0.08]">
                <div className="text-xs font-mono text-neutral-500 font-semibold tracking-wider uppercase mb-1">
                  Alternative 02
                </div>
                <h3 className="text-xl font-bold text-white">Freelancers &amp; Upwork</h3>
                <p className="text-xs text-neutral-400 mt-1">Solo contributors, high coordination burden</p>
              </div>

              {/* Specs */}
              <div className="space-y-4">
                {[
                  { label: "Team", val: "Solo skill ceiling, zero peer audits", bad: true },
                  { label: "Speed", val: "Unpredictable milestones & split hours", bad: true },
                  { label: "IP Ownership", val: "High legal and contract risk", bad: true },
                  { label: "Code Quality", val: "Inconsistent patterns, minimal tests", bad: true },
                  { label: "Access", val: "Fragmented hours, risk of ghosting", bad: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0 text-rose-400">
                      <X className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-neutral-300">{item.label}</div>
                      <div className="text-xs text-neutral-500">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] text-center">
              <span className="text-xs text-neutral-500 font-mono">Best for: Small one-off bug fixes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


