"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Compass,
  PenTool,
  Code2,
  Rocket,
  CheckCircle2,
  Terminal,
  Layers,
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Sparkles,
  Clock,
} from "lucide-react";

const PHASES = [
  {
    step: "PHASE 01",
    timeframe: "Weeks 1–2",
    title: "Discovery, Technical Architecture & Data Modeling",
    summary:
      "We eliminate ambiguity before writing code. We dissect your business logic, evaluate technical feasibility, and produce an explicit architectural blueprint.",
    icon: Compass,
    deliverables: [
      "Interactive system architecture diagram & data flow topology",
      "PostgreSQL / database schema definition & migration strategy",
      "API contract specifications (REST, GraphQL, or tRPC)",
      "Threat modeling, rate limiting & enterprise RBAC plan",
    ],
    clientTouchpoints: [
      "Initial 90-minute architecture workshop",
      "Async Loom review of proposed entity relationships",
      "Formal specification sign-off",
    ],
    tooling: ["Figma Architecture", "dbdiagram.io", "Notion Spec", "GitHub Projects"],
  },
  {
    step: "PHASE 02",
    timeframe: "Weeks 2–3",
    title: "High-Fidelity UI/UX Prototyping & Design Systems",
    summary:
      "No placeholder designs or aesthetic vanity. We design directly against real-world frontend constraints, producing tokenized component systems ready for React.",
    icon: PenTool,
    deliverables: [
      "Click-through interactive prototype in Figma covering all primary user journeys",
      "Complete design token library: typography, semantic colors, spacing scales",
      "Zero-ambiguity auto-layout components with hover, active, and error states",
      "WCAG 2.1 AA accessibility & contrast validation audit",
    ],
    clientTouchpoints: [
      "Weekly design walkthrough demo",
      "Direct Figma comment review & approval",
      "Prototype test session with team stakeholders",
    ],
    tooling: ["Figma Enterprise", "Radix UI Primitives", "Tailwind CSS Tokens"],
  },
  {
    step: "PHASE 03",
    timeframe: "Weeks 3–8",
    title: "Sprint Execution, Continuous Staging & Automated Testing",
    summary:
      "Rapid bi-weekly delivery cycles. Every pull request triggers an automated preview deployment, strict TypeScript validation, and end-to-end integration tests.",
    icon: Code2,
    deliverables: [
      "Bi-weekly staging environment updates on live URLs for hands-on review",
      "100% strictly typed TypeScript codebase with zero runtime type leaks",
      "Automated Playwright integration tests covering mission-critical user paths",
      "GitHub Actions CI/CD pipelines executing linting, unit tests, and build audits",
    ],
    clientTouchpoints: [
      "Every 14 days: live milestone demo & sprint retrospective",
      "Direct engineer Slack/Discord channel for async questions",
      "Live preview deployment links for every active feature branch",
    ],
    tooling: ["Next.js 16", "React Native", "Playwright", "GitHub Actions", "Vercel / AWS"],
  },
  {
    step: "PHASE 04",
    timeframe: "Launch & Beyond",
    title: "Production Cutover, Security Audit & IP Handover",
    summary:
      "We orchestrate a seamless zero-downtime release to production cloud infrastructure, followed by complete transfer of all code repositories and documentation runbooks.",
    icon: Rocket,
    deliverables: [
      "Zero-downtime DNS cutover and CDN edge caching configuration",
      "Cloud infrastructure provisioning (AWS, Supabase, Vercel, Redis)",
      "Comprehensive engineering runbook, environment setup & deploy guide",
      "Unconditional transfer of repository ownership and all API keys",
      "30-day post-launch warranty and bug-fix SLA guarantee",
    ],
    clientTouchpoints: [
      "Final pre-flight security and load testing review",
      "Live production deployment monitoring session",
      "Formal handoff walkthrough & team training session",
    ],
    tooling: ["AWS Route 53", "Supabase", "Cloudflare", "PostHog", "Sentry"],
  },
];

const COLLABORATION_RULES = [
  {
    title: "Direct Engineer Access",
    desc: "No middlemen or account executives playing telephone. You communicate directly with the senior developers writing your code.",
  },
  {
    title: "Live Staging Previews",
    desc: "Never wait weeks to see work. Every pull request automatically generates a live, interactive preview URL you can test immediately.",
  },
  {
    title: "Day-One IP Ownership",
    desc: "All repositories, Figma files, database schemas, and intellectual property belong to you unconditionally from day one.",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Antigravity Ambient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-24 left-1/3 w-[700px] h-[450px] bg-indigo-600/10 blur-[150px] rounded-full" />
          <div className="absolute top-2/3 right-10 w-[550px] h-[450px] bg-cyan-600/8 blur-[130px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
          
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-indigo-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>Engineering Execution // How We Ship</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight sm:tracking-tighter text-white leading-[1.08] text-balance">
              Predictable, transparent, &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
                engineered for zero friction
              </span>
              .
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed text-pretty">
              We eliminate black-box development and surprise scope inflation. Here is the step-by-step roadmap of how we take your vision from technical architecture to a resilient production deployment.
            </p>
          </div>

          {/* Core Collaboration Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-7 sm:p-9 rounded-3xl bg-neutral-900/30 border border-neutral-800/80 backdrop-blur-md">
            {COLLABORATION_RULES.map((rule) => (
              <div key={rule.title} className="space-y-2 border-l border-neutral-800/80 pl-5">
                <div className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{rule.title}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Phases Timeline Stack */}
          <div className="space-y-16">
            {PHASES.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <section
                  key={phase.step}
                  className="p-8 sm:p-12 rounded-3xl bg-neutral-900/25 border border-neutral-800/80 hover:border-neutral-700/80 transition-all duration-300 backdrop-blur-sm relative overflow-hidden shadow-2xl"
                >
                  {/* Subtle hover backlight */}
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/10 blur-3xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    
                    {/* Left: Phase Title & Scope (7 Cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 font-medium">
                          {phase.step}
                        </span>
                        <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          {phase.timeframe}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                          {phase.title}
                        </h2>
                        <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                          {phase.summary}
                        </p>
                      </div>

                      {/* Explicit Deliverables Checklist */}
                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                          Tangible Deliverables
                        </div>
                        <div className="space-y-2.5">
                          {phase.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tooling Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {phase.tooling.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-400"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Client Touchpoints & Workflow (5 Cols) */}
                    <div className="lg:col-span-5 space-y-5">
                      <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                          <span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
                            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                            Client Interaction Cadence
                          </span>
                          <span className="text-[11px] font-mono text-cyan-400">TOUCHPOINTS</span>
                        </div>

                        <div className="space-y-3">
                          {phase.clientTouchpoints.map((tp) => (
                            <div
                              key={tp}
                              className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/60 text-xs text-neutral-300 leading-relaxed flex items-start gap-2.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                              <span>{tp}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 text-[11px] font-mono text-neutral-500 border-t border-neutral-800/60">
                          ✓ Weekly updates delivered asynchronously with Loom video demonstrations
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
              );
            })}
          </div>

          {/* Bottom Conversion Banner */}
          <section className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-indigo-950/80 via-neutral-900/90 to-cyan-950/80 border border-neutral-800/80 shadow-2xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
              Ready to begin Phase 01?
            </h2>
            <p className="mt-4 text-neutral-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Book an initial 15-minute technical discovery call to review requirements and schedule your sprint roadmap.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-100 shadow-xl shadow-white/5 hover:-tranneutral-y-0.5 transition-all duration-200 gap-2"
              >
                <span>Schedule Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <span>Review Case Studies</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
