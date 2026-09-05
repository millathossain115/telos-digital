"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Globe,
  Smartphone,
  Palette,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Code2,
  Database,
  Lock,
  CreditCard,
  WifiOff,
  Bell,
  Check,
  Zap,
  Calendar,
  Layers,
  Terminal,
} from "lucide-react";

const MODULES = [
  {
    id: "web-saas",
    tag: "MODULE 01",
    title: "Custom Web & SaaS Development",
    subtitle: "Enterprise-grade web systems engineered for scale, concurrency, and security.",
    description:
      "We design and build complete cloud architectures from the schema layer to server-driven interfaces. Every platform is built for resilience under traffic spikes, multi-tenant data isolation, and low-latency interaction.",
    capabilities: [
      {
        icon: Database,
        label: "Database & Schema Architecture",
        detail: "PostgreSQL & TimescaleDB modeling with connection pooling, migrations, and strict indexing.",
      },
      {
        icon: Code2,
        label: "REST & GraphQL API Design",
        detail: "Type-safe RPC contracts with Zod validation, rate limiting, and OpenAPI specifications.",
      },
      {
        icon: Globe,
        label: "SSR / SSG & Edge Routing",
        detail: "Next.js App Router with React Server Components, streaming suspense, and CDN edge caching.",
      },
      {
        icon: Lock,
        label: "Auth & Enterprise RBAC",
        detail: "OAuth2, WebAuthn passkeys, multi-factor security, and granular permission matrices.",
      },
      {
        icon: CreditCard,
        label: "Billing & Subscription Engines",
        detail: "Stripe Billing, usage-based metering, webhook reconciliation, and automated invoicing.",
      },
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "AWS / Vercel"],
    metric: "< 80ms P95 API Latency",
    reverse: false,
  },
  {
    id: "mobile",
    tag: "MODULE 02",
    title: "Mobile Engineering",
    subtitle: "Hardware-accelerated mobile apps for iOS and Android from a single shared TypeScript core.",
    description:
      "We avoid sluggish web-wrappers. We build high-performance mobile apps using React Native and Expo with native platform modules, offline-first SQLite sync, and buttery-smooth 60fps gestures.",
    capabilities: [
      {
        icon: Smartphone,
        label: "Cross-Platform Single Codebase",
        detail: "React Native with 90%+ code sharing between iOS and Android without sacrificing platform UX.",
      },
      {
        icon: WifiOff,
        label: "Offline-First SQLite Synchronization",
        detail: "Local-first persistence with deterministic conflict-free replication when network returns.",
      },
      {
        icon: Bell,
        label: "Push Notifications & Background Tasks",
        detail: "APNs & FCM integration with automated user notification schedules and silent sync workers.",
      },
      {
        icon: Lock,
        label: "Biometric & Secure Enclave Security",
        detail: "FaceID, TouchID, and Android BiometricPrompt with cryptographic hardware token storage.",
      },
      {
        icon: Rocket,
        label: "App Store & Google Play Compliance",
        detail: "Full handling of review audits, privacy manifests, EAS CI/CD build channels, and rollout flags.",
      },
    ],
    techStack: ["React Native", "Expo 52", "Hermes Bytecode", "SQLite", "EAS Build"],
    metric: "120Hz ProMotion Native Feel",
    reverse: true,
  },
  {
    id: "ui-ux",
    tag: "MODULE 03",
    title: "UI/UX & Product Strategy",
    subtitle: "Precision interface systems designed to bridge product vision and production code.",
    description:
      "Design without technical grounding leads to broken implementations. We design in tight coordination with engineering constraints, delivering tokenized design systems, WCAG 2.1 AA accessibility, and click-through prototypes.",
    capabilities: [
      {
        icon: Layers,
        label: "Wireframing & Information Architecture",
        detail: "User journey mapping, state charts, and ergonomic screen hierarchy before visual styling.",
      },
      {
        icon: Palette,
        label: "Design Tokens & System Architecture",
        detail: "Semantic color ramps, typography scales, and spacing tokens synced from Figma directly to code.",
      },
      {
        icon: Terminal,
        label: "Production Figma Component Libraries",
        detail: "Strict auto-layout, nested variant sets, and dev-mode ready assets with zero ambiguity.",
      },
      {
        icon: CheckCircle2,
        label: "Usability & Accessibility Audits",
        detail: "Screen-reader audits, contrast validation, and keyboard navigation testing across viewports.",
      },
    ],
    techStack: ["Figma Enterprise", "Radix Primitives", "Tailwind CSS", "Storybook", "WCAG 2.1"],
    metric: "100% Token-to-Code Parity",
    reverse: false,
  },
  {
    id: "mvp",
    tag: "MODULE 04",
    title: "MVP Accelerator",
    subtitle: "6-week fixed-scope delivery designed for pre-seed and seed stage startups.",
    description:
      "Speed is oxygen for early ventures. The MVP Accelerator eliminates scope creep and engineering paralysis. We lock a clear specification, ship working builds every 14 days, and launch a production product ready for real paying users.",
    capabilities: [
      {
        icon: Calendar,
        label: "Week 1–2: Architecture & Specification",
        detail: "System design, core data schemas, wireframes, and fixed delivery contract agreement.",
      },
      {
        icon: Code2,
        label: "Week 3–4: Core Feature Sprint",
        detail: "Authentication, primary user workflows, external API integrations, and database migrations.",
      },
      {
        icon: Zap,
        label: "Week 5: Polish, Billing & Edge Cases",
        detail: "Stripe checkout, responsive optimization, error logging, and analytics instrumentation.",
      },
      {
        icon: Rocket,
        label: "Week 6: Production Launch & Handover",
        detail: "DNS cutover, security audit, documentation runbooks, and 100% intellectual property transfer.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Supabase / PostgreSQL", "Stripe", "PostHog", "Resend"],
    metric: "Fixed 6-Week Turnaround",
    reverse: true,
  },
];

const ENGAGEMENT_MODELS = [
  {
    name: "Fixed-Scope Project",
    tagline: "For well-defined MVPs and complete system overhauls",
    bestFor: "Pre-seed/Seed MVPs, ground-up rebuilds, and discrete product releases.",
    features: [
      "Explicit technical specification & fixed milestone scope",
      "Guaranteed timeline and predetermined delivery date",
      "Bi-weekly interactive demo walkthroughs",
      "Rigorous end-to-end automated test suite",
      "100% code IP and documentation handover",
      "30-day post-launch warranty & bug-fix SLA",
    ],
    ctaText: "Request Scope Proposal",
    highlight: false,
  },
  {
    name: "Dedicated Sprint Retainer",
    tagline: "For continuous feature velocity and senior technical leadership",
    bestFor: "Post-revenue startups and scaleups needing dedicated staff engineering power without recruiting overhead.",
    features: [
      "Dedicated senior staff engineers committed to your team",
      "Bi-weekly sprint planning, backlog grooming & deployments",
      "Direct integration into your Slack/Discord & GitHub workflow",
      "Architectural guidance, code reviews & team mentorship",
      "Flexible priority re-allocation between web, mobile & cloud",
      "Pause or cancel anytime with simple 14-day notice",
    ],
    ctaText: "Book Retainer Consult",
    highlight: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Section 1: Overview Header */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-indigo-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>Technical Capabilities // End-to-End</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight sm:tracking-tighter text-white max-w-4xl mx-auto leading-[1.08] text-balance">
            Engineered for founders who care about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
              architectural integrity
            </span>
            .
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed text-pretty">
            From initial database schema and API contracts to pixel-perfect mobile gestures and zero-downtime deployment pipelines.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-100 shadow-xl shadow-indigo-500/10 hover:-tranneutral-y-0.5 transition-all duration-200"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#engagement"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-sm font-semibold transition-all duration-200"
            >
              <span>Compare Engagement Models</span>
            </a>
          </div>
        </section>

        {/* Section 2: Detailed Service Modules (Alternating Layouts) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
          {MODULES.map((module) => (
            <div
              key={module.id}
              id={module.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-neutral-900/20 border border-neutral-800/80 backdrop-blur-sm relative overflow-hidden`}
            >
              {/* Content Column */}
              <div
                className={`lg:col-span-7 flex flex-col justify-between ${
                  module.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-800/50 text-indigo-300">
                      {module.tag}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {module.metric}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight sm:tracking-tighter">
                    {module.title}
                  </h2>

                  <p className="mt-2 text-sm sm:text-base font-medium text-indigo-300">
                    {module.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Capabilities Accordion / Grid */}
                  <div className="mt-8 space-y-3.5">
                    {module.capabilities.map((cap) => {
                      const Icon = cap.icon;
                      return (
                        <div
                          key={cap.label}
                          className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/60"
                        >
                          <div className="w-8 h-8 rounded-lg bg-indigo-950/40 border border-indigo-800/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-neutral-200">
                              {cap.label}
                            </div>
                            <div className="text-xs text-neutral-400 leading-relaxed mt-0.5">
                              {cap.detail}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Tech Badges & CTA */}
                <div className="mt-8 pt-6 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {module.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 group"
                  >
                    <span>Request Spec</span>
                    <ArrowRight className="w-4 h-4 group-hover:tranneutral-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Architecture Preview Column */}
              <div
                className={`lg:col-span-5 ${
                  module.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800/90 p-6 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      TELOS-SPEC // {module.id.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-4 font-mono text-xs text-neutral-400">
                    <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                      <span className="text-neutral-500">pipeline_status</span>
                      <span className="text-emerald-400 font-semibold">VALIDATED</span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-2">
                      <div className="text-neutral-400 text-[11px] uppercase tracking-wider">
                        Architectural Directives
                      </div>
                      <div className="text-neutral-300">✓ Type safety across client & server</div>
                      <div className="text-neutral-300">✓ Automatic database migration checks</div>
                      <div className="text-neutral-300">✓ Zero third-party tracker bloat</div>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-neutral-900/40 to-cyan-950/40 border border-indigo-900/50">
                      <div className="text-xs text-neutral-300 font-sans font-semibold mb-1">
                        Senior Engineering Promise
                      </div>
                      <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                        Every implementation is reviewed and stamped by a senior staff engineer with zero outsourced code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Section 3: Engagement Models (Comparison) */}
        <section id="engagement" className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              Engagement Models
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
              Transparent ways to partner
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              Predictable costs, clearly defined milestones, and zero junior agency handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.name}
                className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl border transition-all duration-300 backdrop-blur-md ${
                  model.highlight
                    ? "bg-neutral-900/50 border-indigo-500/50 shadow-2xl shadow-indigo-950/40 ring-1 ring-indigo-500/30"
                    : "bg-neutral-900/25 border-neutral-800/80 hover:border-neutral-700"
                }`}
              >
                {model.highlight && (
                  <div className="absolute -top-3.5 right-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-600 text-white font-semibold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {model.name}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 mt-1">
                    {model.tagline}
                  </p>
                  <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                    {model.bestFor}
                  </p>

                  <div className="mt-8 pt-6 border-t border-neutral-800/60 space-y-3">
                    <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                      What is included:
                    </div>
                    {model.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-neutral-800/60">
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 gap-2 ${
                      model.highlight
                        ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30"
                        : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700 hover:text-white"
                    }`}
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
