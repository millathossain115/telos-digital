"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { WorkProjectCard } from "@/components/WorkProjectCard";
import workProjectsData from "@/data/workProjects.json";
import type { WorkProject } from "@/types/work";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, ExternalLink, Layers, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

const ALL_PROJECTS = workProjectsData as WorkProject[];

export default function WorkPage() {

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] selection:bg-amber-500/20 selection:text-amber-900 font-sans">
      <Navbar />

      <main className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 overflow-hidden">
        {/* Ambient Antigravity Glows */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-96 right-10 w-96 h-96 bg-amber-400/5 blur-3xl rounded-full pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* System Status Moniker */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#141312]/10 backdrop-blur-md shadow-sm mb-6"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-600" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#141312]/80">
                PROVEN ENGINEERING & PRODUCTION WORK
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </motion.div>

            {/* Unique Thematic Hero Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#141312] leading-[1.08] mb-6"
            >
              Digital engines built to{" "}
              <span className="italic font-serif font-light text-amber-700 underline decoration-amber-500/40 decoration-wavy underline-offset-8">
                outperform
              </span>{" "}
              market limits.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#141312]/75 max-w-2xl font-normal leading-relaxed mb-10"
            >
              From hyperlocal high-throughput multi-vendor commerce to high-conversion ad consultancy platforms and editorial brand flagships. Explore our live production deployments.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-3xl p-2 sm:p-2.5 rounded-2xl bg-gradient-to-b from-[#EFEAE2]/70 to-[#E8E1D6]/85 border border-[#D9CFC4] backdrop-blur-md shadow-[0_12px_36px_rgba(20,19,18,0.04)]"
            >
              <div className="text-center p-3.5 rounded-xl bg-white/80 border border-black/[0.04] shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#141312]">100%</div>
                <div className="text-[10px] font-mono text-[#141312]/60 uppercase tracking-wider mt-0.5 font-semibold">Live Production</div>
              </div>
              <div className="text-center p-3.5 rounded-xl bg-white/80 border border-black/[0.04] shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-700">&lt;200ms</div>
                <div className="text-[10px] font-mono text-[#141312]/60 uppercase tracking-wider mt-0.5 font-semibold">Global Latency</div>
              </div>
              <div className="text-center p-3.5 rounded-xl bg-white/80 border border-black/[0.04] shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#141312]">99.9%</div>
                <div className="text-[10px] font-mono text-[#141312]/60 uppercase tracking-wider mt-0.5 font-semibold">Uptime SLA</div>
              </div>
              <div className="text-center p-3.5 rounded-xl bg-white/80 border border-black/[0.04] shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-700">4.9/5</div>
                <div className="text-[10px] font-mono text-[#141312]/60 uppercase tracking-wider mt-0.5 font-semibold">Client Score</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies / Projects Stream */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {ALL_PROJECTS.map((project, idx) => (
            <WorkProjectCard key={project.id} project={project} index={idx} />
          ))}
        </section>

        {/* Technical Capabilities Full-Width Architecture Workbench */}
        <section className="w-full mt-24 sm:mt-32 relative border-y border-[#DDD3C7] bg-[#141210] text-[#FAF7F2] overflow-hidden">
          {/* Subtle blueprint grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Ambient directional glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
            {/* Top Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs">
                  <Terminal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="tracking-wide uppercase">Bespoke Engineering Division</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Need a custom ecosystem engineered with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                    zero compromises?
                  </span>
                </h2>
                <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
                  We build scalable digital products, high-throughput commerce architectures, and bespoke web platforms from conception to global edge deployment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-amber-500 text-[#141210] font-mono text-xs font-bold tracking-wider hover:bg-amber-400 transition-all shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] active:scale-95"
                >
                  <Cpu className="w-4 h-4 text-[#141210]" />
                  <span>START YOUR PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-mono text-xs font-medium tracking-wider transition-colors border border-white/10"
                >
                  <span>INSPECT OUR PROCESS</span>
                </Link>
              </div>
            </div>

            {/* 3 Pillar Architectural Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/30 transition-all group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 tracking-wider">01 // EDGE</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">High-Throughput Core</h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                  Multi-region edge execution, micro-caching algorithms, and sub-100ms API response pipelines with auto-scaling elasticity.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                  {["Next.js SSR", "Redis Global", "Cloudflare Workers"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/30 transition-all group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 tracking-wider">02 // STACK</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Bespoke Design Systems</h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                  Fluid typography scales, spatial canvas interactions, accessible component tokens, and frictionless UI motion.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                  {["Tailwind Engine", "Framer Motion", "Radix Primitives"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/30 transition-all group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 tracking-wider">03 // RELIABILITY</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Zero-Compromise SLA</h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                  Full test automation, strict TypeScript safety, atomic state hydration, and telemetry observability built in.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                  {["100% Strict TS", "End-to-End Testing", "Telemetry Metrics"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Conversion CTA Banner */}
        <div className="mt-20 sm:mt-24">
          <ConversionCtaBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
}
