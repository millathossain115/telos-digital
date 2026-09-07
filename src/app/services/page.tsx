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
        {/* Warm Golden Ambient Glows - Seamlessly Blended */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Main Top Center Golden Orb - ultra-feathered */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] rounded-full opacity-50 blur-[140px]"
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.08) 35%, rgba(217, 119, 6, 0.02) 65%, transparent 100%)",
            }}
          />
          {/* Right-side Golden Flare - ultra-feathered */}
          <div
            className="absolute top-10 right-0 w-[750px] h-[650px] rounded-full opacity-35 blur-[130px]"
            style={{
              background: "radial-gradient(circle at center, rgba(251, 191, 36, 0.18) 0%, rgba(217, 119, 6, 0.06) 40%, transparent 80%)",
            }}
          />
          {/* Soft Left Fill - ultra-feathered */}
          <div
            className="absolute top-20 -left-20 w-[550px] h-[500px] rounded-full opacity-25 blur-[120px]"
            style={{
              background: "radial-gradient(circle at center, rgba(245, 158, 11, 0.12) 0%, rgba(217, 119, 6, 0.03) 45%, transparent 75%)",
            }}
          />
        </div>

        {/* Section 1: Overview Header - Premium Architectural Hero */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 lg:mb-28 z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono text-amber-800 uppercase tracking-wider shadow-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>Full-Stack & Cloud Capabilities // v2026.1</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-tight sm:tracking-tighter text-[#141312] leading-[1.04] text-balance">
                Systems built to withstand{" "}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                  concurrency
                </span>
                , scale, &amp; time.
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed font-normal text-pretty">
                We design and ship mission-critical production software—from raw schema models and native hardware threads to multi-region automated deployment runbooks.
              </p>

              {/* Direct Engineering Model Highlight */}
              <div className="p-4 rounded-2xl bg-white border border-black/[0.07] shadow-xs flex items-start sm:items-center gap-3.5 max-w-xl">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1 sm:mt-0 animate-pulse" />
                <div className="text-xs font-mono leading-relaxed text-neutral-700">
                  <span className="font-semibold text-[#141312] uppercase tracking-wide">Direct Principal Access: </span>
                  Zero account executives or agency overhead. Direct commit access with principal engineers.
                </div>
              </div>

              {/* Action Buttons & Quick Nav */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#141312] hover:bg-amber-600 text-white font-semibold text-sm shadow-[0_4px_16px_rgba(20,19,18,0.2)] hover:shadow-[0_8px_24px_rgba(217,119,6,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group"
                >
                  <span>Book Technical Consult</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
                </Link>
                <a
                  href="#engagement"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-black/[0.08] hover:border-amber-500/40 hover:text-amber-800 text-[#141312] text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md"
                >
                  <span>Compare Models</span>
                </a>
              </div>

              {/* Quick Filter Anchors */}
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500">
                <span className="uppercase tracking-wider mr-1 text-[11px] font-medium">Quick Jump:</span>
                {[
                  { label: "SaaS & Web", href: "#web-saas" },
                  { label: "Mobile Native", href: "#mobile" },
                  { label: "DevOps & Cloud", href: "#devops" },
                  { label: "Design Systems", href: "#design" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3 py-1 rounded-lg bg-neutral-100/80 hover:bg-white hover:text-amber-800 hover:border-amber-500/30 border border-transparent text-neutral-700 transition-all font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Interactive Architecture Telemetry Card */}
            <div className="lg:col-span-5 relative">
              {/* Outer Golden Aura - Pronounced Breathing Motion */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.95, 0.35],
                  scale: [0.96, 1.06, 0.96],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-tr from-amber-500/35 via-amber-400/25 to-transparent rounded-3xl blur-2xl pointer-events-none"
              />

              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#1A1816]/95 via-[#141312]/95 to-[#0E0D0C]/95 text-white border border-amber-500/25 shadow-[0_20px_50px_rgba(20,19,18,0.4)] relative overflow-hidden group">
                {/* Corner golden flare - Breathing in sync */}
                <motion.div
                  animate={{
                    opacity: [0.4, 0.9, 0.4],
                    scale: [0.95, 1.15, 0.95],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-10 -right-10 w-64 h-64 bg-radial from-amber-400/35 via-amber-500/15 to-transparent blur-2xl pointer-events-none"
                />
                {/* Internal golden ambient glow */}
                <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-radial from-amber-600/15 via-transparent to-transparent pointer-events-none blur-2xl" />

                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-neutral-300 uppercase tracking-wider font-semibold">
                      Engineering Blueprint
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                    Production Grade
                  </span>
                </div>

                <div className="space-y-3 relative z-10">
                  {[
                    {
                      label: "01. Architecture & Schema",
                      value: "Strict TypeScript + PostgreSQL",
                      status: "Type-Safe",
                    },
                    {
                      label: "02. Runtime Latency",
                      value: "< 80ms P95 Edge API responses",
                      status: "Optimized",
                    },
                    {
                      label: "03. Mobile Frame Budget",
                      value: "120Hz ProMotion Native Thread",
                      status: "60-120 FPS",
                    },
                    {
                      label: "04. Delivery Cadence",
                      value: "14-Day Production Sprints",
                      status: "Continuous CI",
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="group/item relative p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md border border-white/[0.05] hover:border-white/[0.15] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1 relative z-10">
                        <span>{stat.label}</span>
                        <span className="text-[10px] text-amber-300/90 bg-amber-500/10 border border-amber-500/15 px-2 py-0.5 rounded-full font-medium">
                          {stat.status}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-white tracking-tight relative z-10 group-hover/item:text-amber-100 transition-colors">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400 relative z-10">
                  <span>Stack: Next.js • React Native • AWS</span>
                  <span className="text-amber-400">100% IP Handover</span>
                </div>
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
