"use client";

import { ArrowUpRight, Cpu, Layers, Activity } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    id: "strata-cloud",
    client: "Strata Intelligence",
    category: "AI FinTech Platform",
    title: "Real-time algorithmic trading terminal & data streaming engine",
    problem:
      "Legacy latency > 450ms causing order execution slippage during high-volatility market windows.",
    solution:
      "Re-architected client engine with Next.js edge runtime, WebSocket worker threads, and sub-15ms canvas telemetry.",
    stats: [
      { label: "Execution Latency", value: "12ms" },
      { label: "Active Concurrency", value: "140k req/s" },
      { label: "SLA Record", value: "99.995%" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "WebSockets", "TimescaleDB"],
    icon: Activity,
    glow: "from-indigo-500/10 via-purple-500/5 to-transparent",
    borderAccent: "group-hover:border-indigo-500/40",
    visualHeader: "STRATA-TERMINAL // v3.2-PROD",
  },
  {
    id: "kore-mobile",
    client: "Kore Logistics",
    category: "Cross-Platform Mobile Suite",
    title: "Global fleet telematics & offline-first driver operational app",
    problem:
      "Drivers in remote freight corridors experienced frequent offline state data corruption and lost routes.",
    solution:
      "Engineered an offline-first SQLite synchronization engine with deterministic conflict resolution and background GPS tracking.",
    stats: [
      { label: "Fleet Vehicles", value: "24,000+" },
      { label: "Daily Route Syncs", value: "1.2M" },
      { label: "Offline Uptime", value: "100%" },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "AWS IoT Core", "PostgreSQL"],
    icon: Cpu,
    glow: "from-cyan-500/10 via-blue-500/5 to-transparent",
    borderAccent: "group-hover:border-cyan-500/40",
    visualHeader: "KORE-MOBILE-NODE // BUILD 441",
  },
  {
    id: "axon-systems",
    client: "Axon Health",
    category: "Design System & Web Architecture",
    title: "Multi-tenant clinical portal & comprehensive medical design system",
    problem:
      "Disjointed UI across 6 acquired hospital systems failing accessibility audits and clinical onboarding speeds.",
    solution:
      "Crafted an enterprise design system of 120+ accessible tokens and web components, cutting feature delivery cycles by 65%.",
    stats: [
      { label: "Component Tokens", value: "140+" },
      { label: "Audit Compliance", value: "WCAG AAA" },
      { label: "Ship Speed Increase", value: "3.2x" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook", "Figma Tokens"],
    icon: Layers,
    glow: "from-emerald-500/10 via-teal-500/5 to-transparent",
    borderAccent: "group-hover:border-emerald-500/40",
    visualHeader: "AXON-CORE-SYSTEM // REVISION 8",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              Selected Proof
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
              Featured Work
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            Real enterprise challenges solved through rigorous engineering discipline, architectural clarity, and user empathy.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl bg-slate-900/30 border border-slate-800/80 ${project.borderAccent} p-6 sm:p-10 transition-all duration-300 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-black/50`}
              >
                {/* Glow aura */}
                <div
                  className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl ${project.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Context & Narrative */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Top metadata */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
                          {project.client}
                        </span>
                        <span className="text-xs font-mono text-indigo-400">
                          // {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-600 ml-auto">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                        {project.title}
                      </h3>

                      {/* Problem / Solution Narrative */}
                      <div className="mt-6 space-y-3 text-sm leading-relaxed">
                        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-slate-400">
                          <strong className="text-slate-200 font-mono text-xs uppercase tracking-wide block mb-1">
                            The Challenge:
                          </strong>
                          {project.problem}
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-slate-300">
                          <strong className="text-cyan-400 font-mono text-xs uppercase tracking-wide block mb-1">
                            The Technical Solution:
                          </strong>
                          {project.solution}
                        </div>
                      </div>

                      {/* Stats Strip */}
                      <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/60">
                        {project.stats.map((s) => (
                          <div key={s.label}>
                            <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
                              {s.value}
                            </div>
                            <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech tags & link */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/60">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span>Deep Dive</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural Terminal Mockup Card */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-slate-950 border border-slate-800/90 p-4 sm:p-5 shadow-xl group-hover:border-slate-700 transition-colors">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-[11px] font-mono text-slate-500">
                            {project.visualHeader}
                          </span>
                        </div>
                        <Icon className="w-4 h-4 text-slate-500" />
                      </div>

                      {/* Mock Terminal Stream */}
                      <div className="space-y-2 font-mono text-xs text-slate-400">
                        <div className="flex items-center justify-between bg-slate-900/60 px-3 py-2 rounded border border-slate-800/50">
                          <span className="text-slate-500">$ status --cluster</span>
                          <span className="text-emerald-400">OPERATIONAL</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/60 px-3 py-2 rounded border border-slate-800/50">
                          <span className="text-slate-500">sync_strategy</span>
                          <span className="text-cyan-300">DETERMINISTIC</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/60 px-3 py-2 rounded border border-slate-800/50">
                          <span className="text-slate-500">edge_routing</span>
                          <span className="text-indigo-300">ACTIVE [32 nodes]</span>
                        </div>
                        <div className="p-3 rounded bg-slate-900/40 border border-slate-800/40 text-[11px] text-slate-400 font-mono mt-3">
                          <span className="text-emerald-400">✓</span> Test suites passed: 248/248 unit, 42 e2e
                          <br />
                          <span className="text-indigo-400">ℹ</span> Benchmark: zero frame drops on 120Hz display
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
