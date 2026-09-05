"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ArrowUpRight, Filter, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type CategoryFilter =
  | "All"
  | "Web & SaaS"
  | "Mobile Engineering"
  | "Design Systems";

const CASE_STUDIES = [
  {
    id: "strata-cloud",
    title: "Algorithmic Trading Terminal & High-Frequency Streaming Engine",
    client: "Strata Intelligence",
    year: "2026",
    category: "Web & SaaS",
    tagline: "Sub-15ms WebSocket data streaming for quantitative traders",
    overview:
      "Strata required an institutional-grade web interface to stream thousands of financial order book updates simultaneously without dropping browser frames on high-refresh displays.",
    architectureHighlight:
      "Zero-copy binary WebSockets · Web Workers · OffscreenCanvas telemetry",
    problem:
      "Legacy React application experienced garbage collection spikes, UI stuttering, and render lag (>450ms) during volatile market opens.",
    solution:
      "Engineered a dedicated Next.js App Router client with isolated Web Worker threads handling raw WebSocket parsing. Rendered charts directly to HTML5 Canvas outside the React lifecycle.",
    metrics: [
      { label: "P99 Client Latency", value: "12ms" },
      { label: "Event Concurrency", value: "140k req/s" },
      { label: "Frame Rate", value: "120 FPS Solid" },
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "WebSockets",
      "Redis",
      "TimescaleDB",
    ],
    terminalLog: "STRATA-NODE // RUNTIME: OPTIMIZED",
    image: "/assets/images/CRM Hero.jpeg",
  },
  {
    id: "kore-mobile",
    title: "Offline-First Freight Telematics & Route Dispatch Suite",
    client: "Kore Logistics",
    year: "2025",
    category: "Mobile Engineering",
    tagline:
      "Deterministic SQLite sync and background GPS tracking across 24k vehicles",
    overview:
      "A mission-critical cross-platform mobile suite used daily by commercial freight drivers traversing low-connectivity cross-border shipping corridors.",
    architectureHighlight:
      "Local-first SQLite WAL mode · Conflict-free replication · Hermes engine",
    problem:
      "Intermittent cellular dead zones caused driver route desynchronization, lost fuel receipts, and duplicated cargo drop entries.",
    solution:
      "Developed a custom offline-first replication engine in React Native using SQLite and encrypted local key-value stores. Mutations queue deterministically and resolve on heartbeat recovery.",
    metrics: [
      { label: "Active Fleet Vehicles", value: "24,000+" },
      { label: "Daily Sync Records", value: "1.2M+" },
      { label: "Offline Availability", value: "100%" },
    ],
    techStack: [
      "React Native",
      "Expo 52",
      "TypeScript",
      "SQLite",
      "Node.js",
      "AWS IoT Core",
    ],
    terminalLog: "KORE-MOBILE-NODE // BUILD: RELEASE-STABLE",
  },
  {
    id: "axon-systems",
    title: "Multi-Tenant Clinical Workspace & Medical Design System",
    client: "Axon Health",
    year: "2025",
    category: "Design Systems",
    tagline:
      "140+ accessible Figma tokens translated directly to production React components",
    overview:
      "Axon consolidated 6 regional hospital acquisition platforms into a unified clinical EHR workspace adhering to strict HIPAA, accessibility, and speed constraints.",
    architectureHighlight:
      "WCAG AAA accessible · Automated token pipelines · Radix UI primitives",
    problem:
      "Disjointed UI component divergence caused clinical onboarding errors, audit compliance penalties, and a 6-month backlog on new electronic health record features.",
    solution:
      "Architected a tokenized design system using Figma variables, Radix UI primitives, and Tailwind CSS. Synchronized design tokens straight into GitHub via automated continuous integration.",
    metrics: [
      { label: "Component Tokens", value: "140+" },
      { label: "Accessibility Tier", value: "WCAG AAA" },
      { label: "Release Velocity", value: "3.2x Faster" },
    ],
    techStack: [
      "Figma Tokens",
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "Storybook",
      "TypeScript",
    ],
    terminalLog: "AXON-SYSTEM // TOKEN-SYNC: VERIFIED",
  },
  {
    id: "vectra-infra",
    title: "Autonomous Cloud Governance & Cost Optimization Engine",
    client: "Vectra Systems",
    year: "2024",
    category: "Web & SaaS",
    tagline:
      "Automated multi-cloud resource auditing and real-time infrastructure cost reduction",
    overview:
      "A developer platform providing engineering teams with instant visibility into idle AWS and GCP cloud resources with single-click rightsizing workflows.",
    architectureHighlight:
      "Event-driven serverless mesh · Stripe billing metering · Supabase RLS",
    problem:
      "Mid-market enterprise customers were unknowingly bleeding hundreds of thousands of dollars each quarter on orphaned test environments and unindexed database IOPS.",
    solution:
      "Constructed an event-driven analytical backend that ingests AWS CloudWatch and Cost Explorer APIs, normalizes telemetry, and presents prioritized rightsizing actions with automated execution.",
    metrics: [
      { label: "Avg Cost Reduction", value: "38%" },
      { label: "Analyzed Resources", value: "2.8M+" },
      { label: "Audit Turnaround", value: "< 90s" },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "AWS Lambda",
      "Tailwind",
    ],
    terminalLog: "VECTRA-AUDIT // SCAN-RATE: ACTIVE",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Antigravity Atmospheric Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full" />
          <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-600/8 blur-[140px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Header & Mission */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Selected Case Studies // Proven Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight sm:tracking-tighter text-white leading-[1.08] text-balance">
              Systems engineered to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
                perform under pressure
              </span>
              .
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed text-pretty">
              Explore deep dives into how we solve architectural bottlenecks,
              eliminate latency, and ship resilient digital products.
            </p>
          </div>

          {/* Interactive Filter Strip */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-900">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {(
              [
                "All",
                "Web & SaaS",
                "Mobile Engineering",
                "Design Systems",
              ] as CategoryFilter[]
            ).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                  activeFilter === filter
                    ? "bg-slate-800 text-cyan-300 border-cyan-500/70 shadow-sm"
                    : "bg-slate-900/40 text-slate-400 border-slate-800/80 hover:border-slate-700 hover:text-white"
                }`}>
                {filter}
              </button>
            ))}
          </div>

          {/* Case Studies Stack */}
          <div className="space-y-12">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="group p-8 sm:p-12 rounded-3xl bg-slate-900/30 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 backdrop-blur-md relative overflow-hidden shadow-2xl">
                {/* Subtle back illumination on hover */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left: Metadata & Narrative (7 Cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-medium">
                        {project.client}
                      </span>
                      <span className="text-xs font-mono text-indigo-400">
                        {"// "}
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500 ml-auto">
                        {project.year}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-cyan-300 font-mono">
                        {project.tagline}
                      </p>
                      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    {/* Challenge & Solution Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/70 space-y-1.5">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          The Bottleneck
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-indigo-900/50 space-y-1.5">
                        <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
                          Architectural Execution
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Metrics & Architecture Terminal (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    {project.image && (
                      <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl relative w-full aspect-[4/3] group-hover:border-slate-700/80 transition-colors">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    {/* Architectural Console Preview */}
                    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs text-slate-400 space-y-3 shadow-xl">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-[10px] text-slate-500">
                            {project.terminalLog}
                          </span>
                        </div>
                        <Terminal className="w-3.5 h-3.5 text-slate-500" />
                      </div>

                      <div className="space-y-1.5 text-[11px]">
                        <div className="text-slate-500">
                          {"// Key Architecture Directive"}
                        </div>
                        <div className="text-slate-200">
                          {project.architectureHighlight}
                        </div>
                        <div className="text-emerald-400 pt-1">
                          ✓ Automated CI/CD verification passed
                        </div>
                      </div>
                    </div>

                    {/* Quantitative Results Strip */}
                    <div className="grid grid-cols-3 gap-3 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-lg sm:text-xl font-semibold font-mono text-white tracking-tight tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 mt-1 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-sm font-semibold text-slate-300 hover:text-white transition-all group/cta">
                      <span>Discuss a project like this</span>
                      <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Conversion Section */}
          <section className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-cyan-950/80 border border-slate-800/80 shadow-2xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
              Have an ambitious technical challenge?
            </h2>
            <p className="mt-4 text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Let’s examine your system requirements, evaluate data flows, and
              engineer an architecture designed for long-term reliability.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 shadow-xl shadow-white/5 hover:-translate-y-0.5 transition-all duration-200 gap-2">
                <span>Book Technical Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200">
                <span>View All Services</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
