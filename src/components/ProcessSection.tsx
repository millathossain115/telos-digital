"use client";

import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Architecture",
    tagline: "Weeks 1–2",
    description:
      "We unpack product mechanics, data models, edge cases, and threat vectors. We deliver an interactive system diagram and explicit technical specification before writing code.",
    deliverable: "Architecture Blueprint & Schema Map",
    icon: Compass,
  },
  {
    number: "02",
    title: "UI/UX Prototyping",
    tagline: "Weeks 2–3",
    description:
      "Zero placeholder designs. We construct complete user journeys in Figma with real data models, micro-interactions, and tokenized typography systems.",
    deliverable: "Figma Prototype & Design Tokens",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Sprint Execution & Testing",
    tagline: "Weeks 3–8",
    description:
      "Bi-weekly deployments to staging environments. 100% typed TypeScript, automated GitHub Actions CI/CD, and Playwright end-to-end integration tests on every PR.",
    deliverable: "Working Staging Builds & Test Reports",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deployment & SLA Support",
    tagline: "Launch & Beyond",
    description:
      "Zero-downtime cutover to production cloud environments (AWS, Vercel, Supabase). Handover of full IP code ownership, runbooks, and ongoing monitoring SLAs.",
    deliverable: "Production Release & Full IP Handover",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/60 border border-amber-950/40 text-amber-200 text-xs font-mono uppercase tracking-wider mb-4">
            How We Ship
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
            Our Process
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Predictable, transparent, and rigorous. No black-box development or surprise delays.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 hover:border-amber-600/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div>
                  {/* Step Number + Tagline */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-neutral-600 group-hover:text-amber-500 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-neutral-300">
                      {step.tagline}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-amber-950/30 flex items-center justify-center text-amber-200 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                    Core Output:
                  </span>
                  <span className="text-xs font-mono text-amber-200 font-medium">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
