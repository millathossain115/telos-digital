"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { ProcessPhaseCard } from "@/components/ProcessPhaseCard";
import processPhasesData from "@/data/processPhases.json";
import collaborationRulesData from "@/data/collaborationRules.json";
import type { ProcessPhase, CollaborationRule } from "@/types/process";
import { ShieldCheck, Zap, GitBranch } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const PHASES: ProcessPhase[] = processPhasesData as ProcessPhase[];
const COLLABORATION_RULES: CollaborationRule[] = collaborationRulesData as CollaborationRule[];

const RULE_ICON_MAP = {
  zap: Zap,
  gitBranch: GitBranch,
  shieldCheck: ShieldCheck,
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        {/* Warm Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-24">
          {/* Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Engineering Execution // How We Ship</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight sm:tracking-tighter text-[#141312] leading-[1.08] text-balance">
              Predictable, transparent, & <br className="hidden sm:inline" />
              <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                engineered for zero friction
              </span>
              .
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed text-pretty max-w-2xl">
              We eliminate black-box development and surprise scope inflation. Here is the step-by-step roadmap of how we take your vision from technical architecture to a resilient production deployment.
            </p>
          </motion.div>

          {/* Core Collaboration Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 p-7 sm:p-9 rounded-3xl bg-[#F3EFEA] border border-black/[0.08] shadow-[0_12px_36px_rgba(20,19,18,0.03)]"
          >
            {COLLABORATION_RULES.map((rule) => {
              const RuleIcon = RULE_ICON_MAP[rule.icon as keyof typeof RULE_ICON_MAP] || Zap;
              return (
                <div key={rule.id} className="space-y-2.5 border-l border-black/[0.08] pl-5">
                  <div className="text-sm sm:text-base font-semibold text-[#141312] tracking-tight flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 shrink-0">
                      <RuleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{rule.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* 4 Phases Timeline Stack */}
          <div className="space-y-12 sm:space-y-16">
            {PHASES.map((phase, idx) => (
              <ProcessPhaseCard key={phase.id} phase={phase} index={idx} />
            ))}
          </div>

          {/* Bottom Conversion Banner Component */}
          <ConversionCtaBanner
            badge="Phase 01 Onboarding"
            title={
              <>
                Ready to begin <span className="text-amber-200">Phase 01?</span>
              </>
            }
            subtitle="Book an initial 15-minute technical discovery call to review specifications and schedule your architecture blueprint sprint."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
