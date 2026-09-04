"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Terminal,
  Activity,
  Layers,
  Cpu,
  Sparkles,
  GitBranch,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"arch" | "mobile" | "perf">("arch");
  const [metricsCount, setMetricsCount] = useState(14.2);

  // Subtle live metrics simulation to make the artifact feel alive
  useEffect(() => {
    const timer = setInterval(() => {
      setMetricsCount((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return Number(Math.max(12.0, Math.min(16.5, prev + delta)).toFixed(2));
      });
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Precision Blueprint Coordinate Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep ambient spotlights */}
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-600/8 blur-[130px] rounded-full" />

        {/* Blueprint architectural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415512_1px,transparent_1px),linear-gradient(to_bottom,#33415512_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Diagonal architectural guide line */}
        <div className="hidden lg:block absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-800/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Asymmetrical 2-Column Split: Editorial Left + Interactive Interactive Lab Console Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Editorial, Typography & Intent) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill with interactive hover */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 text-xs font-mono tracking-tight mb-8 backdrop-blur-md transition-all shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-300">Available for Q4 Projects</span>
              <span className="text-slate-600">/</span>
              <span className="text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 font-medium">
                Reserve Sprint
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            {/* Headline with editorial cadence */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tight sm:tracking-tighter text-white leading-[1.08] max-w-2xl">
              We engineer{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-slate-400">
                  scalable software
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/60 to-transparent" />
              </span>
              , mobile apps, & refined digital interfaces.
            </h1>

            {/* Narrative Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed text-pretty">
              Telos Digital partners with founders and engineering leaders to ship mission-critical software. Architected with{" "}
              <span className="text-slate-200 font-medium">Next.js</span>, resilient cloud pipelines, and fluid{" "}
              <span className="text-slate-200 font-medium">cross-platform mobile</span> codebases.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-slate-700 rounded-xl transition-all duration-200"
              >
                <span>View Case Studies</span>
              </Link>
            </div>

            {/* Quick Proof Strip */}
            <div className="mt-12 pt-8 border-t border-slate-900 w-full flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Zero Outsourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>100% IP Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Bi-Weekly Staging Shipments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Architectural Console */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-slate-800/10 to-cyan-500/20 blur-xl opacity-70" />

            {/* Console Surface Card */}
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    telos-runtime // v4.2.0
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">LIVE CLUSTER</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 border-b border-slate-800/80 bg-slate-900/30 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("arch")}
                  className={`py-2.5 px-3 flex items-center justify-center gap-1.5 border-r border-slate-800/80 transition-colors ${
                    activeTab === "arch"
                      ? "text-white bg-slate-900/80 border-b-2 border-b-indigo-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>

                <button
                  onClick={() => setActiveTab("mobile")}
                  className={`py-2.5 px-3 flex items-center justify-center gap-1.5 border-r border-slate-800/80 transition-colors ${
                    activeTab === "mobile"
                      ? "text-white bg-slate-900/80 border-b-2 border-b-cyan-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Mobile Core</span>
                </button>

                <button
                  onClick={() => setActiveTab("perf")}
                  className={`py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors ${
                    activeTab === "perf"
                      ? "text-white bg-slate-900/80 border-b-2 border-b-emerald-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Telemetry</span>
                </button>
              </div>

              {/* Console Body Area */}
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Tab 1: Architecture View */}
                {activeTab === "arch" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">System Topology</span>
                      <span className="text-xs font-mono text-indigo-400">Global Edge Mesh</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 space-y-2.5 text-xs font-mono">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-2">
                          <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                          edge-gateway / v16.3
                        </span>
                        <span className="text-emerald-400">0.04ms cold-start</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Database Pool (pg_bouncer)</span>
                        <span className="text-slate-200 tabular-nums">98% efficiency</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Cache Hit Ratio (Redis)</span>
                        <span className="text-cyan-400 tabular-nums">99.4%</span>
                      </div>
                    </div>

                    {/* Interactive Blueprint Canvas Indicator */}
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/40 via-slate-900/50 to-slate-900/40 border border-indigo-900/40">
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="text-slate-300">Continuous Delivery Pipeline</span>
                        <span className="text-emerald-400">PASSING (100%)</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Mobile Core View */}
                {activeTab === "mobile" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">Cross-Platform Engine</span>
                      <span className="text-xs font-mono text-cyan-400">React Native / Expo 52</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 space-y-2.5 text-xs font-mono">
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Hermes Engine Bytecode</span>
                        <span className="text-emerald-400">OPTIMIZED</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Offline Sync (SQLite WAL)</span>
                        <span className="text-cyan-300">Zero Conflict</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>FPS Target (ProMotion 120Hz)</span>
                        <span className="text-white tabular-nums">119.8 FPS</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2 text-slate-300 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Native Biometrics & Enclave ready</span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Shared TypeScript state across iOS, Android, and Web clients.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 3: Telemetry View */}
                {activeTab === "perf" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">Live Production Telemetry</span>
                      <span className="text-xs font-mono text-emerald-400">Auto-refresh 2.8s</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/70">
                        <div className="text-[11px] font-mono text-slate-400">P99 LATENCY</div>
                        <div className="text-2xl font-bold font-mono text-indigo-300 tabular-nums mt-1">
                          {metricsCount} ms
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400 mt-0.5">▼ 42% vs baseline</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/70">
                        <div className="text-[11px] font-mono text-slate-400">SUCCESS RATE</div>
                        <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums mt-1">
                          99.99%
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 mt-0.5">2.4M requests/hr</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/50 text-xs font-mono text-slate-400 flex items-center justify-between">
                      <span>Lighthouse Score</span>
                      <span className="text-emerald-400 font-bold">100 / 100 / 100</span>
                    </div>
                  </div>
                )}

                {/* Console Bottom Action Bar */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>Click tabs to explore architecture</span>
                  </div>
                  <Link
                    href="/contact"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium group"
                  >
                    <span>Request audit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Floating Technical Badge Accent */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono font-bold text-white">Full Stack & Mobile</div>
                <div className="text-[11px] font-mono text-slate-400">Next.js · React Native · Cloud</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
