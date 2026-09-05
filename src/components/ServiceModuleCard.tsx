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
      className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-[0_10px_30px_rgba(20,19,18,0.03)] hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Top Banner Row: Module ID + Metric + CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-black/[0.06]">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#141312] text-white">
            {module.tag}
          </span>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 font-semibold">
            {module.metric}
          </span>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141312] hover:text-amber-700 transition-colors group/link font-mono"
        >
          <span>Request Technical Spec</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Main Grid: Left summary (4 cols), Right 2-col compact capability pills (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Title, Subtitle, Tech badges (4 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141312] tracking-tight">
              {module.title}
            </h2>
            <p className="mt-1.5 text-sm font-medium text-amber-800/90 leading-snug">
              {module.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            {module.description}
          </p>

          <div className="pt-2">
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-2 font-medium">
              Target Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {module.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#FAF8F5] border border-black/[0.07] text-neutral-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 2-Column Capability Grid (7 cols) - compact & concise */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {module.capabilities.map((cap) => {
            const Icon =
              CAPABILITY_ICON_MAP[cap.icon as keyof typeof CAPABILITY_ICON_MAP] || Code2;
            return (
              <div
                key={cap.label}
                className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-black/[0.05] hover:border-black/[0.12] transition-colors flex flex-col justify-between"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center text-amber-700 mb-2.5 shadow-2xs">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#141312] leading-tight">
                    {cap.label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed mt-1">
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
