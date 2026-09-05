"use client";

import { Check, X, Shield, Zap, Clock, Users, Layers } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

interface MetricRow {
  dimension: string;
  icon: React.ElementType;
  telos: {
    highlight: string;
    sub: string;
    badge?: string;
  };
  traditionalAgency: {
    text: string;
    sub: string;
  };
  freelancers: {
    text: string;
    sub: string;
  };
}

const COMPARISON_ROWS: MetricRow[] = [
  {
    dimension: "Engineering Pedigree",
    icon: Users,
    telos: {
      highlight: "100% Staff & Principal",
      sub: "Zero junior delegation; battle-tested architects only",
      badge: "Staff-Level",
    },
    traditionalAgency: {
      text: "Junior & Outsourced Pools",
      sub: "Senior pitch team, junior execution",
    },
    freelancers: {
      text: "Unverified / Solo",
      sub: "Solo skill ceiling without peer review",
    },
  },
  {
    dimension: "Delivery Velocity",
    icon: Zap,
    telos: {
      highlight: "6–10 Weeks to Production",
      sub: "Working staging builds deployed every 14 days",
      badge: "2x Faster",
    },
    traditionalAgency: {
      text: "5–9 Months",
      sub: "Bloated discovery phases and endless decks",
    },
    freelancers: {
      text: "Unpredictable Milestones",
      sub: "Frequent context switching across projects",
    },
  },
  {
    dimension: "IP & Asset Ownership",
    icon: Shield,
    telos: {
      highlight: "Day-One 100% Handover",
      sub: "Zero licensing lock-in; code, tokens & schema are yours",
      badge: "Full Rights",
    },
    traditionalAgency: {
      text: "Conditional or Final Only",
      sub: "Proprietary internal libraries retained",
    },
    freelancers: {
      text: "Informal / High Legal Risk",
      sub: "Patchy IP assignments and contracts",
    },
  },
  {
    dimension: "Code Quality & Testing",
    icon: Layers,
    telos: {
      highlight: "Strict TS + Automated CI/CD",
      sub: "100% typed, automated Playwright test coverage",
      badge: "Production-Grade",
    },
    traditionalAgency: {
      text: "Template-Heavy Hacks",
      sub: "Rushed MVPs that require full rebuilds",
    },
    freelancers: {
      text: "Inconsistent Architecture",
      sub: "Minimal unit/e2e tests or documentation",
    },
  },
  {
    dimension: "Communication Cadence",
    icon: Clock,
    telos: {
      highlight: "Direct Engineer Access",
      sub: "Dedicated Slack/Discord + async Loom walkthroughs",
      badge: "Direct",
    },
    traditionalAgency: {
      text: "Project Managers Filter",
      sub: "Weekly delayed status calls through intermediaries",
    },
    freelancers: {
      text: "Fragmented / Ghosting Risk",
      sub: "Unreliable availability with zero team redundancy",
    },
  },
];

export function ComparisonMatrix() {
  return (
    <section id="comparison" className="py-28 relative bg-[#FAF8F5] border-t border-black/[0.06] overflow-hidden">
      {/* Background warm ambient bloom */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-100/30 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] backdrop-blur-xl text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
            <span className="text-amber-800 font-medium">Why Telos Digital</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#141312] leading-tight sm:leading-tight">
            How we compare against{" "}
            <span className="bg-gradient-to-r from-neutral-600 via-neutral-500 to-amber-700 bg-clip-text text-transparent font-normal">
              conventional models.
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-3.5 text-neutral-600 max-w-xl text-sm sm:text-base leading-relaxed">
            Eliminating agency bloat and freelancer unreliability with senior-staff engineering precision and unconditional transparency.
          </motion.p>
        </motion.div>

        {/* Comparison Matrix Table Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="relative rounded-3xl bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(20,19,18,0.05)] overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black/[0.07] bg-[#F7F4EE]/50">
            <div className="hidden md:block md:col-span-4 p-6 sm:p-7 text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
              Operational Criteria
            </div>

            {/* Telos Column Header (Highlighted) */}
            <div className="md:col-span-4 p-6 sm:p-7 bg-amber-500/[0.06] border-x border-amber-500/20 relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-lg text-[#141312] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Telos Digital
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-[11px] font-mono font-medium">
                  Recommended
                </span>
              </div>
              <p className="text-xs text-neutral-600 mt-1">Dedicated senior staff engineering core</p>
            </div>

            {/* Traditional Agency */}
            <div className="hidden md:block md:col-span-2 p-6 sm:p-7 border-r border-black/[0.07]">
              <span className="font-semibold text-sm text-neutral-700 block">Traditional Agency</span>
              <p className="text-[11px] text-neutral-400 mt-0.5">High overhead</p>
            </div>

            {/* Freelancers */}
            <div className="hidden md:block md:col-span-2 p-6 sm:p-7">
              <span className="font-semibold text-sm text-neutral-700 block">Freelancer Networks</span>
              <p className="text-[11px] text-neutral-400 mt-0.5">Solo contributors</p>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-black/[0.06]">
            {COMPARISON_ROWS.map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.dimension}
                  className="grid grid-cols-1 md:grid-cols-12 items-center hover:bg-[#FAF8F5]/60 transition-colors"
                >
                  {/* Dimension Column */}
                  <div className="md:col-span-4 p-6 sm:p-7 flex items-start sm:items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.08] flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#141312]">
                        {row.dimension}
                      </h4>
                    </div>
                  </div>

                  {/* Telos Hero Column */}
                  <div className="md:col-span-4 p-6 sm:p-7 bg-amber-500/[0.03] md:border-x border-amber-500/20 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-amber-700 stroke-[2.5]" />
                      </div>
                      <span className="font-bold text-sm sm:text-base text-[#141312]">
                        {row.telos.highlight}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-1 pl-7">
                      {row.telos.sub}
                    </p>
                  </div>

                  {/* Traditional Agency Column */}
                  <div className="md:col-span-2 p-6 sm:p-7 md:border-r border-black/[0.06] flex flex-col justify-center border-t md:border-t-0">
                    <span className="text-xs font-mono uppercase text-neutral-400 md:hidden mb-1">Traditional Agency:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                        <X className="w-3 h-3 text-neutral-400" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-neutral-700">
                        {row.traditionalAgency.text}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 mt-0.5 pl-6">
                      {row.traditionalAgency.sub}
                    </p>
                  </div>

                  {/* Freelancers Column */}
                  <div className="md:col-span-2 p-6 sm:p-7 flex flex-col justify-center border-t md:border-t-0">
                    <span className="text-xs font-mono uppercase text-neutral-400 md:hidden mb-1">Freelancers:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                        <X className="w-3 h-3 text-neutral-400" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-neutral-700">
                        {row.freelancers.text}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 mt-0.5 pl-6">
                      {row.freelancers.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
