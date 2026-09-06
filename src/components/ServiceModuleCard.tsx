"use client";

import Link from "next/link";
import {
  Database,
  Code2,
  Globe,
  Lock,
  CreditCard,
  Smartphone,
  WifiOff,
  Bell,
  Rocket,
  Layers,
  Palette,
  Terminal,
  Calendar,
  Zap,
  ArrowRight,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { ServiceModule } from "@/types/services";

const CAPABILITY_ICON_MAP = {
  database: Database,
  code2: Code2,
  globe: Globe,
  lock: Lock,
  creditCard: CreditCard,
  smartphone: Smartphone,
  wifiOff: WifiOff,
  bell: Bell,
  rocket: Rocket,
  layers: Layers,
  palette: Palette,
  terminal: Terminal,
  calendar: Calendar,
  zap: Zap,
};

const moduleVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

interface ServiceModuleCardProps {
  module: ServiceModule;
}

export function ServiceModuleCard({ module }: ServiceModuleCardProps) {
  return (
    <motion.div
      variants={moduleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      id={module.id}
      className="p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#F5EFEB] via-[#EFE7DF] to-[#E8DDD2] text-[#141312] border border-[#D8C7B5]/70 shadow-[0_16px_40px_rgba(20,19,18,0.06)] hover:border-amber-500/50 hover:shadow-[0_20px_50px_rgba(217,119,6,0.12)] transition-all duration-300 relative overflow-hidden group backdrop-blur-md"
    >
      {/* Subtle Antigravity Ambient Light */}
      <div className="absolute top-0 right-1/4 w-96 h-48 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-72 h-40 bg-white/40 blur-2xl pointer-events-none rounded-full" />

      {/* Top Banner Row: Module ID + Metric + Cost Advantage + High-Impact CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-black/[0.08] relative z-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#141312] text-white shadow-xs">
            {module.tag}
          </span>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/15 border border-amber-600/25 text-amber-900 font-semibold">
            {module.metric}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-600/15 border border-emerald-600/25 text-emerald-900 font-medium hidden sm:inline-flex items-center gap-1">
            <span>40-60% less than legacy agencies</span>
          </span>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#141312] hover:bg-amber-600 text-white text-xs font-mono font-semibold tracking-wider transition-all duration-200 shadow-md hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] group/btn shrink-0"
        >
          <span>BUILD WITH TELOS</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
        </Link>
      </div>

      {/* Main Grid: Left summary (5 cols), Right 2-col capability pills (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
        {/* Left Column: Title, Subtitle, Tech badges */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141312] tracking-tight">
              {module.title}
            </h2>
            <p className="mt-1.5 text-sm font-semibold text-amber-800 leading-snug">
              {module.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#3E3834] leading-relaxed font-normal">
            {module.description}
          </p>

          <div className="pt-2">
            <div className="text-[11px] font-mono text-[#7A6F66] uppercase tracking-wider mb-2 font-medium">
              Target Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {module.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/70 border border-black/[0.08] text-[#141312] font-medium shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 2-Column Capability Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {module.capabilities.map((cap) => {
            const Icon =
              CAPABILITY_ICON_MAP[cap.icon as keyof typeof CAPABILITY_ICON_MAP] || Code2;
            return (
              <div
                key={cap.label}
                className="p-3.5 rounded-2xl bg-white/60 border border-black/[0.07] hover:border-amber-500/40 hover:bg-white/80 transition-all flex flex-col justify-between shadow-2xs"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 mb-2.5 shadow-2xs">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#141312] leading-tight">
                    {cap.label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#524A44] leading-relaxed mt-1">
                    {cap.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
