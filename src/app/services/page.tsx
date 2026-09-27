"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { ServiceModuleCard } from "@/components/ServiceModuleCard";
import { EngagementModelsSection } from "@/components/EngagementModelsSection";
import servicesDataJson from "@/data/servicesData.json";
import type { ServicesData } from "@/types/services";
import { ArrowRight, Activity, Server, Smartphone, Database, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
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
                <span>Full-Stack Engineering // v2026.1</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-semibold tracking-[-0.035em] text-[#141312] leading-[1.08] text-balance">
                Systems built for{" "}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                  high concurrency
                </span>
                , scale, and longevity.
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed font-normal text-pretty">
                We design and ship mission-critical software—from database schema modeling to hardware-threaded mobile cores and multi-region runbooks.
              </p>

              {/* Action Buttons & Trust Line */}
              <div className="pt-1 space-y-3">
                <div className="flex flex-wrap items-center gap-3.5">
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

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Direct Principal Engineer dialogue • Zero account executives • 100% IP Handover</span>
                </div>
              </div>

            </div>

            {/* Right: Live Vector Architecture Topology Diagram */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#F2E7DC] text-[#141312] border border-[#E6DACD] ring-1 ring-inset ring-white/95 shadow-[0_20px_50px_rgba(35,28,24,0.08)] relative overflow-hidden backdrop-blur-md">
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-black/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider">
                      Live Architecture Topology
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 rounded-full">
                    Telemetry 38ms
                  </span>
                </div>

                {/* Vector Visual Network Nodes */}
                <div className="space-y-3 relative">
                  {/* Node 1: Multi-Client */}
                  <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-neutral-900 block">Client Layer</span>
                        <span className="text-[10px] font-mono text-neutral-400">Next.js 16 Web • Expo 52 iOS/Android</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">
                      120Hz
                    </span>
                  </div>

                  {/* SVG Connecting Flow Lines with Pulsing Data Dot */}
                  <div className="h-6 flex justify-center items-center relative">
                    <svg className="h-full w-32 overflow-visible" viewBox="0 0 100 24" fill="none">
                      <line x1="50" y1="0" x2="50" y2="24" stroke="#D8C9B9" strokeWidth="2" strokeDasharray="3 3" />
                      <circle cx="50" cy="12" r="3" fill="#D97706" className="animate-ping" />
                      <circle cx="50" cy="12" r="2" fill="#D97706" />
                    </svg>
                  </div>

                  {/* Node 2: Edge Router & Microservices */}
                  <div className="p-3 rounded-2xl bg-white border border-amber-500/30 shadow-xs flex items-center justify-between ring-1 ring-amber-500/15">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/35 flex items-center justify-center text-amber-900">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-neutral-900 block">Edge Routing &amp; Auth Gate</span>
                        <span className="text-[10px] font-mono text-neutral-400">WebAuthn Passkeys • Zod Contracts</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-amber-800 bg-amber-500/15 px-2 py-0.5 rounded font-bold">
                      P95 &lt; 40ms
                    </span>
                  </div>

                  {/* SVG Connecting Flow Lines */}
                  <div className="h-6 flex justify-center items-center relative">
                    <svg className="h-full w-32 overflow-visible" viewBox="0 0 100 24" fill="none">
                      <line x1="50" y1="0" x2="50" y2="24" stroke="#D8C9B9" strokeWidth="2" strokeDasharray="3 3" />
                      <circle cx="50" cy="12" r="3" fill="#10B981" className="animate-ping" />
                      <circle cx="50" cy="12" r="2" fill="#10B981" />
                    </svg>
                  </div>

                  {/* Node 3: Persistence Database */}
                  <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-800">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-neutral-900 block">Data Persistence</span>
                        <span className="text-[10px] font-mono text-neutral-400">PostgreSQL Strict • TimescaleDB • Redis</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">
                      Multi-Tenant
                    </span>
                  </div>
                </div>

                {/* Footer spec tag */}
                <div className="mt-4 pt-3.5 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Zero Single Point of Failure</span>
                  <span className="text-amber-800 font-bold">Continuous CI/CD</span>
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
                Let’s map out the{" "}
                <em className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">
                  technical roadmap
                </em>
                .
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
