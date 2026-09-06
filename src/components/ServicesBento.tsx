"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Check,
  CheckCircle2,
  Smartphone,
  LayoutGrid,
  Layers,
  Database,
  Globe,
  TrendingUp,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface ServiceItem {
  id: string;
  tag: string;
  badge: string;
  icon: typeof Zap;
  title: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  ctaText: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-apps",
    tag: "01",
    badge: "Web & SaaS",
    icon: Zap,
    title: "Web Platforms & SaaS",
    description: "Fast Next.js portals, dashboards, and automated Stripe billing built for concurrency.",
    deliverables: [
      "Sub-second page speeds & 99+ Score",
      "Stripe billing, invoices & auth",
      "Real-time admin metrics & telemetry",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    ctaText: "Build Web App",
  },
  {
    id: "mobile-apps",
    tag: "02",
    badge: "iOS & Android",
    icon: Smartphone,
    title: "iOS & Android Apps",
    description: "Single-codebase mobile apps launched on App Store and Google Play with smooth gestures.",
    deliverables: [
      "Dual App Store & Google Play launch",
      "FaceID / Biometric authentication",
      "Offline sync & push notification triggers",
    ],
    techStack: ["React Native", "Expo", "SQLite", "Nativewind"],
    ctaText: "Build Mobile App",
  },
  {
    id: "ui-ux",
    tag: "03",
    badge: "Design Systems",
    icon: LayoutGrid,
    title: "UI/UX & Design Systems",
    description: "Atomic Figma components and fluid tokens mapped 1:1 with production Tailwind code.",
    deliverables: [
      "Production-ready Figma UI component kit",
      "Fluid typography & 8pt token library",
      "Clean interactive responsive prototypes",
    ],
    techStack: ["Figma", "Design Tokens", "Tailwind", "Framer Motion"],
    ctaText: "Design Audit",
  },
];

function ThematicCard({ service }: { service: ServiceItem }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 350, damping: 24 },
      }}
      className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#F5EFEB] via-[#EFE7DF] to-[#E8DDD2] border border-[#D8C7B5]/80 p-6 sm:p-7 min-h-[460px] shadow-[0_12px_30px_rgba(20,19,18,0.06)] hover:border-amber-500/50 hover:shadow-[0_20px_45px_rgba(217,119,6,0.12)] transition-all duration-300 overflow-hidden"
    >
      {/* Dynamic interactive spotlight gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(380px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 119, 6, 0.12), transparent 70%)`,
        }}
      />

      {/* Warm Ambient Light */}
      <div className="absolute top-0 right-0 w-52 h-32 bg-amber-500/[0.08] blur-xl pointer-events-none rounded-full" />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Header Row: Number + Badge */}
          <div className="flex items-center justify-between gap-2 mb-5 pb-3.5 border-b border-black/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/90 border border-black/[0.08] flex items-center justify-center text-amber-800 shadow-2xs group-hover:bg-amber-500 group-hover:text-white transition-all duration-200">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs text-[#7A6F66] font-semibold tracking-wider">
                CAPABILITY // {service.tag}
              </span>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/15 text-amber-900 text-xs font-semibold border border-amber-600/20">
              {service.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#141312] tracking-tight mb-2.5 group-hover:text-amber-950 transition-colors leading-snug">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-[#3E3834] leading-relaxed mb-6 font-normal">
            {service.description}
          </p>

          {/* Deliverables Checklist */}
          <div className="space-y-2.5 pt-4 border-t border-black/[0.07] mb-6">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-[#7A6F66] font-semibold mb-1">
              KEY DELIVERABLES:
            </span>
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs text-[#2A2624] font-medium leading-relaxed">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-900">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Tech Stack & CTA */}
        <div className="pt-4 border-t border-black/[0.07]">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[11px] font-mono font-medium text-[#141312] bg-white/70 rounded-md border border-black/[0.07] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Primary Action Button */}
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#141312] hover:bg-amber-600 text-white text-xs font-mono font-semibold tracking-wider transition-all duration-200 shadow-sm hover:shadow-amber-500/20 active:scale-[0.98] group/btn"
          >
            <span>{service.ctaText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-white transition-all group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesBento() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden">
      {/* Editorial grid watermark */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(20, 19, 18, 0.07) 1px, transparent 0)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Atmospheric warm ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[850px] h-[500px] bg-gradient-to-tr from-amber-200/20 via-[#FAF8F5] to-amber-100/25 rounded-full blur-[140px]" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-black/[0.07]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFEA] border border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.03)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
              <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-neutral-800">
                Services &amp; Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.03em] text-[#141312] leading-[1.14]">
              What we build for you,{" "}
              <span className="font-serif italic font-normal text-amber-700">from idea to live product</span>.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Direct principal engineering. Predictable milestone delivery, zero junior handoffs, and software engineered to scale effortlessly.
          </p>
        </div>

        {/* Thematic 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SERVICES_DATA.map((service) => (
            <ThematicCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="relative mt-12 rounded-3xl border border-[#D8C7B5]/80 bg-gradient-to-br from-[#FAF6F0] via-[#F4ECE2] to-[#ECE2D2] p-7 sm:p-10 text-[#141312] shadow-[0_14px_35px_rgba(20,19,18,0.04)] overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              {/* Top provenance tag */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#141312]/10 text-xs font-mono font-medium text-[#141312]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  Engineering Advisory
                </span>
                <span className="text-xs font-mono text-[#141312]/50">
                  Direct review · No sales intermediaries
                </span>
              </div>

              {/* Natural Editorial Heading */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141312] leading-snug">
                  Have an existing product or specific roadmap in mind?
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#141312]/75 leading-relaxed font-sans">
                  Share your GitHub repo, Figma files, or architectural specs. Our principal engineer personally reviews bottlenecks, estimates timelines, and delivers an honest 48-hour feasibility roadmap.
                </p>
              </div>

              {/* Commitment Bullets */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs font-mono text-[#141312]/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                  Strict NDA Protection
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                  Realistic milestone estimates
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                  Direct engineer dialogue
                </span>
              </div>
            </div>

            {/* Action Side */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141312] hover:bg-amber-600 text-white text-xs font-mono font-semibold tracking-wider transition-all duration-200 shadow-md hover:shadow-amber-500/20 active:scale-95 group/btn"
              >
                <span>Request Code Review</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-white transition-all group-hover/btn:translate-x-0.5" />
              </Link>
              <span className="text-[11px] font-mono text-[#141312]/50 text-center lg:text-right">
                Avg. response: &lt; 4 hours
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
