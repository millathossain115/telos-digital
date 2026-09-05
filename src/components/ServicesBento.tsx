"use client";

import { Globe, Smartphone, Palette, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.28,
      delayChildren: 0.15,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

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
    <section id="services" className="pt-12 sm:pt-16 pb-28 relative bg-[#FAF8F5] overflow-hidden">
      {/* Subtle warm chromatic light leaks */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-200/30 via-amber-100/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 right-10 w-[500px] h-[300px] bg-amber-100/40 rounded-full blur-[100px]" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        {/* Section Header - Focused Section Identity */}
        <motion.div 
          variants={headerVariants}
          className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 flex flex-col items-center"
        >
          {/* Capsule pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-black/[0.08] backdrop-blur-xl text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
            <span className="text-amber-700 font-medium">Core Capabilities</span>
          </div>

          {/* Clean 1-2 line section heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#141312] leading-tight sm:leading-snug">
            Bespoke systems,{" "}
            <span className="bg-gradient-to-r from-neutral-600 via-neutral-500 to-amber-700 bg-clip-text text-transparent font-normal">
              engineered from zero to production.
            </span>
          </h2>

          {/* Tight subtext */}
          <p className="mt-3.5 text-neutral-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            We don’t use generic templates. Every line of code and user touchpoint is crafted specifically to meet high operational standards.
          </p>
        </motion.div>

        {/* Bento Grid - Luminous Porcelain Glass Slabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 350, damping: 22 },
                }}
                className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl cursor-pointer overflow-hidden
                  bg-white/75
                  backdrop-blur-xl
                  border border-black/[0.07]
                  hover:border-amber-500/40
                  shadow-[0_10px_30px_rgba(20,19,18,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)]
                  hover:shadow-[0_20px_50px_rgba(20,19,18,0.08),0_0_30px_rgba(245,158,11,0.1)]
                  transition-all duration-500"
              >
                {/* Specular razor edge */}
                <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />

                {/* Ambient warm gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-amber-50/20 pointer-events-none" />

                {/* Liquid hover refraction pool */}
                <div
                  className="absolute -top-32 -right-32 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_65%)] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-8">
                    {/* Glass orb icon container */}
                    <div className="w-13 h-13 p-3 rounded-2xl bg-[#FAF8F5] border border-black/[0.08] shadow-sm flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>

                    <span
                      className="text-[11px] font-mono font-medium tracking-wide px-3.5 py-1.5 rounded-full bg-amber-500/[0.08] border border-amber-500/20 text-amber-800 backdrop-blur-sm"
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-semibold text-[#141312] tracking-tight group-hover:text-black transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3.5 text-sm text-neutral-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables with refined divider */}
                  <div className="mt-7 pt-6 border-t border-black/[0.06] space-y-2.5">
                    <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest font-medium">
                      Key Deliverables
                    </p>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-neutral-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag Strip & CTA link */}
                <div className="relative z-10 mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-neutral-700 border border-black/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/[0.08] text-neutral-600 group-hover:bg-[#141312] group-hover:text-amber-300 group-hover:border-[#141312] group-hover:scale-110 transition-all duration-300 shadow-sm"
                    aria-label={`Explore ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
