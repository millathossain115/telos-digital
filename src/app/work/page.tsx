"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { WorkProjectCard } from "@/components/WorkProjectCard";
import workProjectsData from "@/data/workProjects.json";
import type { WorkProject } from "@/types/work";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, ExternalLink, Filter, Layers, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

const ALL_PROJECTS = workProjectsData as WorkProject[];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(ALL_PROJECTS.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl p-3 rounded-2xl bg-white/80 border border-[#141312]/10 backdrop-blur-md shadow-sm"
            >
              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#141312]">100%</div>
                <div className="text-[11px] font-mono text-[#141312]/60 uppercase mt-0.5">Live Production</div>
              </div>
              <div className="text-center p-3 border-l border-[#141312]/10">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-700">&lt;200ms</div>
                <div className="text-[11px] font-mono text-[#141312]/60 uppercase mt-0.5">Global Latency</div>
              </div>
              <div className="text-center p-3 border-l border-[#141312]/10">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#141312]">99.9%</div>
                <div className="text-[11px] font-mono text-[#141312]/60 uppercase mt-0.5">Uptime SLA</div>
              </div>
              <div className="text-center p-3 border-l border-[#141312]/10">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-700">4.9/5</div>
                <div className="text-[11px] font-mono text-[#141312]/60 uppercase mt-0.5">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-white/80 border border-[#141312]/10 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-2 px-3 py-1 text-xs font-mono font-semibold text-[#141312]/70">
              <Filter className="w-3.5 h-3.5 text-amber-600" />
              <span>FILTER ARCHITECTURE:</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-[#141312] text-white font-semibold shadow-md"
                      : "bg-[#141312]/5 text-[#141312]/70 hover:bg-[#141312]/10 hover:text-[#141312]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies / Projects Stream */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {filteredProjects.map((project, idx) => (
            <WorkProjectCard key={project.id} project={project} index={idx} />
          ))}
        </section>

        {/* Technical Capabilities Intermission Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <div className="rounded-3xl p-8 sm:p-12 bg-[#141312] text-[#FAF8F5] relative overflow-hidden shadow-2xl border border-white/10">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono text-xs">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>CUSTOM SOFTWARE ARCHITECTURE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Need a custom ecosystem engineered with zero compromises?
                </h2>
                <p className="text-sm sm:text-base text-white/70 max-w-xl font-light leading-relaxed">
                  We build scalable digital products, high-throughput commerce architectures, and bespoke web platforms from conception to global edge deployment.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-[#141312] font-mono text-xs font-bold tracking-wider hover:bg-amber-400 transition-all shadow-lg active:scale-95"
                >
                  <span>START YOUR PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-medium tracking-wider transition-colors border border-white/10"
                >
                  <span>INSPECT OUR PROCESS</span>
                </Link>
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
