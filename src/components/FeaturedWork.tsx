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
    glow: "from-white/10 via-amber-600/5 to-transparent",
    borderAccent: "group-hover:border-amber-600/40",
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
    glow: "from-amber-600/10 via-white/5 to-transparent",
    borderAccent: "group-hover:border-amber-600/40",
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
    glow: "from-white/10 via-amber-600/5 to-transparent",
    borderAccent: "group-hover:border-amber-600/40",
    visualHeader: "AXON-CORE-SYSTEM // REVISION 8",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 relative bg-neutral-950/60 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/60 border border-amber-950/40 text-amber-200 text-xs font-mono uppercase tracking-wider mb-4">
              Selected Proof
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
              Featured Work
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base leading-relaxed">
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
                className={`group relative rounded-3xl bg-neutral-900/30 border border-neutral-800/80 ${project.borderAccent} p-6 sm:p-10 transition-all duration-300 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-black/50`}
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
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700 text-neutral-300">
                          {project.client}
                        </span>
                        <span className="text-xs font-mono text-amber-500">
                          // {project.category}
                        </span>
                        <span className="text-xs font-mono text-neutral-600 ml-auto">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-100 transition-colors">
                        {project.title}
                      </h3>

                      {/* Problem / Solution Narrative */}
                      <div className="mt-6 space-y-3 text-sm leading-relaxed">
                        <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/60 text-neutral-400">
                          <strong className="text-neutral-200 font-mono text-xs uppercase tracking-wide block mb-1">
                            The Challenge:
                          </strong>
                          {project.problem}
                        </div>
                        <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/60 text-neutral-300">
                          <strong className="text-amber-500 font-mono text-xs uppercase tracking-wide block mb-1">
                            The Technical Solution:
                          </strong>
                          {project.solution}
                        </div>
                      </div>

                      {/* Stats Strip */}
                      <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800/60">
                        {project.stats.map((s) => (
                          <div key={s.label}>
                            <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
                              {s.value}
                            </div>
                            <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech tags & link */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-800/60">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-950 text-neutral-300 border border-neutral-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-white transition-colors group-hover:tranneutral-x-1 duration-200"
                      >
                        <span>Deep Dive</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural Terminal Mockup Card */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-neutral-950 border border-neutral-800/90 p-4 sm:p-5 shadow-xl group-hover:border-neutral-700 transition-colors">
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-[11px] font-mono text-neutral-500">
                            {project.visualHeader}
                          </span>
                        </div>
                        <Icon className="w-4 h-4 text-neutral-500" />
                      </div>

                      {/* Mock Terminal Stream */}
                      <div className="space-y-2 font-mono text-xs text-neutral-400">
                        <div className="flex items-center justify-between bg-neutral-900/60 px-3 py-2 rounded border border-neutral-800/50">
                          <span className="text-neutral-500">$ status --cluster</span>
                          <span className="text-emerald-400">OPERATIONAL</span>
                        </div>
                        <div className="flex items-center justify-between bg-neutral-900/60 px-3 py-2 rounded border border-neutral-800/50">
                          <span className="text-neutral-500">sync_strategy</span>
                          <span className="text-amber-200">DETERMINISTIC</span>
                        </div>
                        <div className="flex items-center justify-between bg-neutral-900/60 px-3 py-2 rounded border border-neutral-800/50">
                          <span className="text-neutral-500">edge_routing</span>
                          <span className="text-amber-200">ACTIVE [32 nodes]</span>
                        </div>
                        <div className="p-3 rounded bg-neutral-900/40 border border-neutral-800/40 text-[11px] text-neutral-400 font-mono mt-3">
                          <span className="text-emerald-400">✓</span> Test suites passed: 248/248 unit, 42 e2e
                          <br />
                          <span className="text-amber-500">ℹ</span> Benchmark: zero frame drops on 120Hz display
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
