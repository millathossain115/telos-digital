"use client";

import { Globe, Smartphone, Palette, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    id: "web-saas",
    title: "Full-Stack Web & SaaS Platforms",
    badge: "Architecture & Scale",
    description:
      "Enterprise web applications engineered for speed, high concurrency, and uptime. From complex dashboard mechanics to multi-tenant SaaS architecture.",
    deliverables: [
      "Server-Driven Next.js Architecture",
      "Robust REST & GraphQL APIs",
      "Database Schema & Real-time Sync",
      "Stripe / Billing Integration",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    icon: Globe,
    accentClass: "from-white/10 via-amber-600/5 to-transparent",
    borderHover: "group-hover:border-amber-600/50",
    badgeColor: "text-amber-200 bg-zinc-900/60 border-amber-950/50",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    badge: "iOS & Android Native",
    description:
      "Fluid, 60fps mobile products with hardware-level polish. Shared TypeScript core with tailored platform gestures, offline-first storage, and push workflows.",
    deliverables: [
      "React Native & Expo Ecosystem",
      "Biometric & Secure Enclave Auth",
      "Offline Sync & SQLite Cache",
      "App Store & Google Play Pipelines",
    ],
    tech: ["React Native", "Expo", "iOS", "Android"],
    icon: Smartphone,
    accentClass: "from-amber-600/10 via-white/5 to-transparent",
    borderHover: "group-hover:border-amber-600/50",
    badgeColor: "text-amber-200 bg-zinc-900/60 border-amber-950/50",
  },
  {
    id: "design-systems",
    title: "UI/UX Design Systems & Prototyping",
    badge: "Digital Precision",
    description:
      "Engineered interface systems bridging design and production code. High-fidelity Figma tokens translated directly into accessible, reusable component libraries.",
    deliverables: [
      "Atomic Component Architecture",
      "Interactive High-Fidelity Prototypes",
      "WCAG 2.1 AA Accessibility",
      "Design Token Automation",
    ],
    tech: ["Figma", "Tailwind CSS", "Storybook", "Radix UI"],
    icon: Palette,
    accentClass: "from-white/10 via-amber-600/5 to-transparent",
    borderHover: "group-hover:border-amber-600/50",
    badgeColor: "text-amber-200 bg-zinc-900/60 border-amber-950/50",
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="py-24 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/60 border border-amber-950/40 text-amber-200 text-xs font-mono uppercase tracking-wider mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
              Bespoke systems, <br className="hidden sm:inline" />
              <span className="text-neutral-400 font-normal">engineered from zero to production.</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base leading-relaxed">
            We don’t use generic templates. Every line of code and user touchpoint is crafted specifically to meet high operational standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 ${service.borderHover} transition-all duration-300 backdrop-blur-sm overflow-hidden hover:-tranneutral-y-1 hover:shadow-2xl hover:shadow-black/40`}
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl ${service.accentClass} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-neutral-200" />
                    </div>
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-6 border-t border-neutral-800/60 space-y-2.5">
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      Key Deliverables
                    </p>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag Strip & CTA link */}
                <div className="mt-8 pt-6 border-t border-neutral-800/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-950/80 text-neutral-400 border border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                    aria-label={`Explore ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
