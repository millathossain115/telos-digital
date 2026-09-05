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
    <section id="process" className="py-28 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            How We Ship
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#141312] tracking-tight sm:tracking-tighter">
            Our Process
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Predictable, transparent, and rigorous. No black-box development or surprise delays.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-white border border-black/[0.08] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_15px_35px_rgba(20,19,18,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-bold text-neutral-300 group-hover:text-amber-600 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.07] flex items-center justify-center text-neutral-700 group-hover:text-amber-600 group-hover:border-amber-500/30 transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-mono text-amber-700 font-semibold mb-2">
                    {step.tagline}
                  </div>
                  <h3 className="text-lg font-bold text-[#141312] tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-black/[0.06] text-xs font-mono text-neutral-700">
                  <span className="text-neutral-400 block mb-1">Deliverable:</span>
                  <span className="font-semibold text-[#141312]">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
