"use client";

import { Check, X, ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";
import { motion, type Variants } from "framer-motion";
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
  return (
    <section id="comparison" className="py-24 sm:py-32 relative bg-[#FAF8F5] overflow-hidden">
      {/* Background warm ambient bloom */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-amber-100/25 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFEA] border border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.03)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-neutral-800">
              The Comparison
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.03em] text-[#141312] leading-[1.15]">
            Comparing your options to{" "}
            <span className="font-serif italic font-normal text-amber-700">build and scale</span>.
          </h2>

          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
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
            className="rounded-3xl bg-[#FFFFFF] border border-black/[0.08] p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(20,19,18,0.03)] hover:shadow-md transition-shadow"
          >
            <div>
              {/* Header */}
              <div className="pb-6 mb-6 border-b border-black/[0.06]">
                <div className="text-xs font-mono text-neutral-400 font-semibold tracking-wider uppercase mb-1">
                  Alternative 01
                </div>
                <h3 className="text-xl font-bold text-[#141312]">Traditional Agency</h3>
                <p className="text-xs text-neutral-500 mt-1">High overhead, layers of account managers</p>
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
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-400">
                      <X className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-neutral-700">{item.label}</div>
                      <div className="text-xs text-neutral-500">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] text-center">
              <span className="text-xs text-neutral-400 font-mono">Best for: Enterprise RFPs &amp; slide decks</span>
            </div>
          </motion.div>

          {/* Card 2: TELOS DIGITAL (Elevated Center Card) */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-[#FFFFFF] border-2 border-amber-600/60 p-8 sm:p-9 flex flex-col justify-between shadow-[0_20px_50px_rgba(217,119,6,0.1),0_4px_20px_rgba(20,19,18,0.06)] relative overflow-hidden lg:-translate-y-2"
          >
            {/* Top Pill Highlight */}
            <div className="absolute top-0 right-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-b-xl bg-amber-600 text-white font-mono text-[10px] uppercase font-bold tracking-wider shadow-sm">
                <Award className="w-3 h-3" />
                Recommended
              </span>
            </div>

            <div>
              {/* Header */}
              <div className="pb-6 mb-6 border-b border-black/[0.06]">
                <div className="text-xs font-mono text-amber-700 font-semibold tracking-wider uppercase mb-1 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-amber-600" />
                  The Telos Standard
                </div>
                <h3 className="text-2xl font-bold text-[#141312]">Telos Digital</h3>
                <p className="text-xs text-neutral-600 mt-1">Direct partnership with senior software architects</p>
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
                  <div key={item.label} className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-black/[0.04]">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#141312]">{item.label}</div>
                      <div className="text-xs text-neutral-600">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06]">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141312] text-white text-xs font-semibold hover:bg-amber-600 hover:shadow-amber-500/20 transition shadow-sm active:scale-95"
              >
                <span>Partner with Telos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Freelancers */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-[#FFFFFF] border border-black/[0.08] p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(20,19,18,0.03)] hover:shadow-md transition-shadow"
          >
            <div>
              {/* Header */}
              <div className="pb-6 mb-6 border-b border-black/[0.06]">
                <div className="text-xs font-mono text-neutral-400 font-semibold tracking-wider uppercase mb-1">
                  Alternative 02
                </div>
                <h3 className="text-xl font-bold text-[#141312]">Freelancers &amp; Upwork</h3>
                <p className="text-xs text-neutral-500 mt-1">Solo contributors, high coordination burden</p>
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
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-400">
                      <X className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-neutral-700">{item.label}</div>
                      <div className="text-xs text-neutral-500">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] text-center">
              <span className="text-xs text-neutral-400 font-mono">Best for: Small one-off bug fixes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


