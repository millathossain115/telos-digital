"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Check,
  TrendingUp,
  Activity,
  Smartphone,
  LayoutGrid,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
        transition: { type: "spring", stiffness: 380, damping: 26 },
      }}
      className={`group relative rounded-3xl bg-[#FFFFFF] border border-black/[0.08] transition-all duration-500 overflow-hidden shadow-[0_4px_20px_rgba(20,19,18,0.04)] hover:shadow-[0_28px_60px_-12px_rgba(20,19,18,0.14),0_12px_24px_-8px_rgba(20,19,18,0.08)] ${className}`}
    >

      {/* Dynamic interactive spotlight gradient following cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 119, 6, 0.07), transparent 70%)`,
        }}
      />

      {children}
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
                Services &amp; Scope
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.03em] text-[#141312] leading-[1.14]">
              What we build for you,{" "}
              <span className="font-serif italic font-normal text-amber-700">from idea to live product</span>.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Clear deliverables, transparent progress, and software designed to grow your business without breaking.
          </p>
        </div>

        {/* Bento Grid: 1 Hero 12-col card + 2 complementary 6-col cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Web Applications & SaaS Platforms (12 Cols) */}
          <BentoCard className="lg:col-span-12 flex flex-col lg:flex-row">
            {/* Left Content Column */}
            <div className="p-8 sm:p-12 lg:w-7/12 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-xs text-neutral-500 font-semibold tracking-widest">
                    CAPABILITY // 01
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-medium border border-amber-500/20 group-hover:bg-amber-500/15 transition-colors">
                    <Zap className="w-3.5 h-3.5 text-amber-700" />
                    Web Apps &amp; SaaS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-[#141312] tracking-tight mb-3 group-hover:text-black transition-colors">
                  Custom Web Platforms &amp; Software
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  From customer portals and subscription platforms to internal operations tools. We build fast, reliable websites and web apps that convert visitors and run smoothly 24/7.
                </p>

                {/* Plain-English Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "Fast loading pages that rank high on Google",
                    "Secure customer login & role permissions",
                    "Automated billing & Stripe payment checkout",
                    "Real-time analytics & admin dashboard",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 font-medium">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 group-hover:scale-110 transition-transform">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag strip & CTA link */}
              <div className="pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {["SaaS Dashboards", "Customer Portals", "E-Commerce", "Admin Panels"].map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 text-xs font-medium text-neutral-700 bg-[#F5F2ED] rounded-lg border border-black/[0.06] group-hover:border-black/10 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141312] hover:text-amber-700 transition-colors uppercase tracking-wider font-mono group/btn"
                >
                  Build a Web Platform
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </div>
            </div>

            {/* Right Live Platform Health & Product Snapshot */}
            <div className="lg:w-5/12 bg-[#F6F3EE] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/[0.07] relative overflow-hidden group-hover:bg-[#F2ECE4] transition-colors duration-500">
              <div>
                {/* Snapshot card header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/[0.06]">
                  <div>
                    <span className="text-xs font-semibold text-[#141312] block">Live Product Overview</span>
                    <span className="text-[11px] text-neutral-500">Real-time health &amp; user metrics</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300/60 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    All Systems Live
                  </span>
                </div>

                {/* Dashboard Metric Blocks */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-black/[0.06] shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between text-neutral-500 mb-1">
                      <span className="text-[11px] font-medium">Page Speed Score</span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-xl font-bold text-[#141312]">99<span className="text-xs text-neutral-400 font-normal">/100</span></div>
                    <span className="text-[10px] text-emerald-600 font-medium">Instant load time</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-black/[0.06] shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between text-neutral-500 mb-1">
                      <span className="text-[11px] font-medium">System Uptime</span>
                      <Activity className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <div className="text-xl font-bold text-[#141312]">99.99%</div>
                    <span className="text-[10px] text-neutral-500">Zero maintenance drift</span>
                  </div>
                </div>

                {/* Visual Workflow Steps */}
                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm space-y-3 group-hover:border-black/10 transition-colors">
                  <div className="text-xs font-semibold text-[#141312] flex items-center justify-between">
                    <span>What You Get Delivered:</span>
                    <span className="text-[10px] font-mono text-neutral-400">Turnkey</span>
                  </div>

                  {[
                    { title: "User Signup & Onboarding", detail: "Self-serve customer onboarding flow" },
                    { title: "Stripe Subscription Flow", detail: "Automated billing, invoices & upgrades" },
                    { title: "Founder Admin Center", detail: "Manage customers, revenue & logs" },
                  ].map((step) => (
                    <div key={step.title} className="flex items-center justify-between py-1.5 border-b border-black/[0.04] last:border-0">
                      <div className="pr-2">
                        <div className="text-xs font-medium text-[#141312]">{step.title}</div>
                        <div className="text-[11px] text-neutral-500">{step.detail}</div>
                      </div>
                      <span className="shrink-0 text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                        Included
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-5 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Full code ownership &amp; zero vendor lock-in
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Mobile Apps (6 Cols) */}
          <BentoCard className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs text-neutral-500 font-semibold tracking-widest">
                  CAPABILITY // 02
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-medium border border-amber-500/20 group-hover:bg-amber-500/15 transition-colors">
                  <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                  iOS &amp; Android
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-[#141312] tracking-tight mb-3 group-hover:text-black transition-colors">
                iOS &amp; Android Mobile Apps
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                A single codebase that launches beautifully on both Apple App Store and Google Play. Smooth gestures, offline support, and push notifications your users will love.
              </p>

              {/* Mobile Preview Surface */}
              <div className="rounded-2xl bg-[#F6F3EE] border border-black/[0.06] p-4 sm:p-5 mb-6 group-hover:bg-[#F2ECE4] transition-colors duration-500">
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#141312] border-b border-black/[0.06] pb-2">
                  <span>MOBILE EXPERIENCE</span>
                  <span className="text-amber-800 text-[11px] font-mono">APP STORE READY</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { title: "One Codebase for Both Platforms", desc: "Cuts development cost and update time in half" },
                    { title: "Biometric Login & Push Alerts", desc: "Instant FaceID, fingerprint, and re-engagement alerts" },
                    { title: "Works Even When Offline", desc: "Users keep working, data syncs when reconnected" },
                  ].map((feat) => (
                    <div key={feat.title} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-black/[0.05] shadow-xs group-hover:shadow-sm transition-all">
                      <div>
                        <div className="text-xs font-semibold text-[#141312]">{feat.title}</div>
                        <div className="text-[11px] text-neutral-500">{feat.desc}</div>
                      </div>
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {["Apple App Store", "Google Play", "Push Notifications", "Offline Sync"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-medium text-neutral-700 bg-[#F5F2ED] rounded-lg border border-black/[0.06] group-hover:border-black/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="p-2.5 rounded-xl bg-[#F3EFEA] hover:bg-[#141312] hover:text-white transition-all duration-300 group-hover:scale-105"
                aria-label="Build mobile apps"
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </BentoCard>

          {/* Card 3: UI/UX & Design Systems (6 Cols) */}
          <BentoCard className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs text-neutral-500 font-semibold tracking-widest">
                  CAPABILITY // 03
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-medium border border-amber-500/20 group-hover:bg-amber-500/15 transition-colors">
                  <LayoutGrid className="w-3.5 h-3.5 text-amber-700" />
                  Product Design
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-[#141312] tracking-tight mb-3 group-hover:text-black transition-colors">
                UI/UX Design &amp; Brand Systems
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                We design interfaces that feel effortless to use. Interactive Figma prototypes, reusable component libraries, and clean typography tailored to your exact brand tone.
              </p>

              {/* Design System Preview Surface */}
              <div className="rounded-2xl bg-[#F6F3EE] border border-black/[0.06] p-4 sm:p-5 mb-6 group-hover:bg-[#F2ECE4] transition-colors duration-500">
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#141312] border-b border-black/[0.06] pb-2">
                  <span>BRAND &amp; DESIGN SYSTEM</span>
                  <span className="text-neutral-600 text-[11px] font-medium">PIXEL-PERFECT FIGMA</span>
                </div>

                {/* Harmonious Palette Preview */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="h-10 rounded-xl bg-[#141312] p-1.5 flex flex-col justify-between text-[9px] font-medium text-white shadow-xs group-hover:scale-[1.02] transition-transform">
                    <span>Obsidian</span>
                    <span className="opacity-70">Dark</span>
                  </div>
                  <div className="h-10 rounded-xl bg-[#F3EFEA] border border-black/10 p-1.5 flex flex-col justify-between text-[9px] font-medium text-neutral-700 shadow-xs group-hover:scale-[1.02] transition-transform">
                    <span>Sand</span>
                    <span className="opacity-70">Surface</span>
                  </div>
                  <div className="h-10 rounded-xl bg-amber-600 p-1.5 flex flex-col justify-between text-[9px] font-medium text-white shadow-xs group-hover:scale-[1.02] transition-transform">
                    <span>Amber</span>
                    <span className="opacity-70">Accent</span>
                  </div>
                  <div className="h-10 rounded-xl bg-emerald-600 p-1.5 flex flex-col justify-between text-[9px] font-medium text-white shadow-xs group-hover:scale-[1.02] transition-transform">
                    <span>Emerald</span>
                    <span className="opacity-70">Success</span>
                  </div>
                </div>

                {/* Component preview */}
                <div className="p-3 bg-white rounded-xl border border-black/[0.05] flex items-center justify-between shadow-xs group-hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#141312]">Ready-to-Code Components</div>
                      <div className="text-[11px] text-neutral-500">Buttons, forms, modals &amp; navigation</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Validated
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {["Interactive Figma", "Component Library", "Responsive Layouts", "Typography"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-medium text-neutral-700 bg-[#F5F2ED] rounded-lg border border-black/[0.06] group-hover:border-black/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="p-2.5 rounded-xl bg-[#F3EFEA] hover:bg-[#141312] hover:text-white transition-all duration-300 group-hover:scale-105"
                aria-label="Design systems consultation"
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </BentoCard>

        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="mt-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.08] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_2px_12px_rgba(20,19,18,0.03)] hover:shadow-[0_8px_24px_rgba(20,19,18,0.06)] hover:border-black/20 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F5F2ED] border border-black/[0.06] flex items-center justify-center text-[#141312] shrink-0">
              <Layers className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-[#141312] font-semibold">
                Have an existing product or specific roadmap in mind?
              </p>
              <p className="text-xs text-neutral-500">
                We review your current code or product specs and provide an honest roadmap in 48 hours.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full bg-[#141312] text-white hover:bg-neutral-800 transition whitespace-nowrap shadow-sm active:scale-95"
          >
            Schedule a Discovery Call
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}


