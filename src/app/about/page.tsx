"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { AboutPrincipleCard } from "@/components/AboutPrincipleCard";
import { AboutStandards } from "@/components/AboutStandards";
import { AboutComparisonSection } from "@/components/AboutComparisonSection";
import { AboutStudioShowroom } from "@/components/AboutStudioShowroom";
import aboutDataJson from "@/data/aboutData.json";
import type { AboutData } from "@/types/about";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const aboutData: AboutData = aboutDataJson as AboutData;

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20 relative overflow-hidden">
        {/* Warm Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
          {/* Section 1: Hero & Manifesto */}
          <motion.section
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-black/[0.08] text-amber-800 text-xs font-mono uppercase tracking-wider mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Agency Manifesto // Why We Exist</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#141312] leading-[1.08] text-balance">
              Architectural discipline over{" "}
              <span className="italic font-serif font-light text-amber-700 underline decoration-amber-500/40 decoration-wavy underline-offset-8">
                commodity headcount
              </span>
              .
            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Telos Digital was founded on a singular conviction: modern software development has become too noisy, bloated, and disconnected from genuine engineering craftsmanship. We build lean, high-velocity engines.
            </p>

            {/* Direct Dual Action Row */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141210] text-white font-mono text-xs font-semibold tracking-wider hover:bg-amber-600 transition-all shadow-md active:scale-95"
              >
                <span>EXPLORE PRODUCTION WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 hover:bg-white text-[#141312] font-mono text-xs font-semibold tracking-wider transition-all border border-black/[0.08] shadow-2xs hover:border-amber-500/30"
              >
                <span>HOW WE DELIVER</span>
              </Link>
            </div>
          </motion.section>

          {/* Section 2: Core Engineering Standards Bar */}
          <AboutStandards standards={aboutData.standards} />

          {/* Section 3: Operating Principles (The Telos Standard) */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-5 border-b border-[#C8BCAC]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
                  The Telos Standard
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141312] tracking-tight">
                  How we operate differently
                </h2>
              </div>
              <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed font-normal">
                Rules we live by to ensure every partner receives exceptional code quality, total transparency, and rapid delivery velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {aboutData.principles.map((p, idx) => (
                <AboutPrincipleCard key={p.number} principle={p} index={idx} />
              ))}
            </div>
          </motion.section>
        </div>

        {/* Section 4: The Anti-Agency Model (Extracted Standalone Component) */}
        <div className="mt-16 sm:mt-20">
          <AboutComparisonSection comparisonRows={aboutData.comparisonRows || []} />
        </div>

        {/* Section 5: Studio Coordinates Showroom (Extracted Standalone Component) */}
        <AboutStudioShowroom />

        {/* Section 6: Seamless Blended Conversion CTA */}
        <ConversionCtaBanner
          className="pt-4 pb-20 sm:pb-28 relative bg-[#FAF8F5]"
          badge="Direct Engineering Consult"
          title={
            <>
              Ready to build <br />
              <span className="text-amber-200">without compromise?</span>
            </>
          }
          subtitle="Schedule a 15-minute consultation to review your technical roadmap with our principal engineer."
        />
      </main>

      <Footer />
    </div>
  );
}
