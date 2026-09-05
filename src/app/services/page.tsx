"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { ServiceModuleCard } from "@/components/ServiceModuleCard";
import { EngagementModelsSection } from "@/components/EngagementModelsSection";
import servicesDataJson from "@/data/servicesData.json";
import type { ServicesData } from "@/types/services";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const servicesData: ServicesData = servicesDataJson as ServicesData;

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesPage() {
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

        {/* Section 1: Overview Header - Distinct Technical Vibe */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 relative z-10"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono text-amber-700 uppercase tracking-wider mb-6 shadow-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Full-Stack & Cloud Capabilities // v2026.1</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight sm:tracking-tighter text-[#141312] leading-[1.05] text-balance">
              Systems built to withstand <br className="hidden sm:inline" />
              scale, concurrency, & time.
            </h1>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-black/[0.06]">
              <div className="space-y-2">
                <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed font-normal text-pretty">
                  We design and ship production software from raw schema architecture and native device threads to automated multi-region deployment runbooks.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold">Direct engineering model:</span>
                  <span className="text-neutral-600">Zero middle managers or sales overhead — 40% to 60% lower cost than traditional agency retainers.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141312] hover:bg-amber-600 text-white font-semibold text-sm shadow-md hover:shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group"
                >
                  <span>Book Consult</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
                </Link>
                <a
                  href="#engagement"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-black/[0.08] hover:border-amber-500/40 hover:text-amber-800 text-[#141312] text-sm font-semibold transition-all duration-200 shadow-xs"
                >
                  <span>Pricing</span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Detailed Service Modules */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20 relative z-10">
          {servicesData.modules.map((module) => (
            <ServiceModuleCard key={module.id} module={module} />
          ))}
        </section>

        {/* Section 3: Engagement Models (Comparison) */}
        <EngagementModelsSection models={servicesData.engagementModels} />

        {/* Section 4: Shared Conversion Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-28 relative z-10">
          <ConversionCtaBanner
            badge="Architecture First"
            title={
              <>
                Have a product in mind? <br />
                <span className="text-amber-200">Let’s map out the technical roadmap.</span>
              </>
            }
            subtitle="Book a 30-minute architectural assessment with our principal engineer. We’ll analyze feasibility, recommend the exact stack, and outline sprint milestones."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
