"use client";

import React, { useState } from "react";
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
  Check,
  Wifi,
  Battery,
  Shield,
  Layout,
  RefreshCw,
  Monitor,
  Flame,
  ArrowUpRight,
  Sliders,
  CheckCircle2,
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

/* --- Module 01: Vector Laptop / Monitor Mockup (SaaS Dashboard) --- */
function LaptopMonitorMockup() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Laptop Screen Bezel in light metallic sand */}
      <div className="w-full max-w-[540px] rounded-t-2xl border border-[#D8C9B9] ring-1 ring-inset ring-white bg-[#FAF8F5] p-2 shadow-[0_16px_40px_rgba(35,28,24,0.12)]">
        {/* Web Camera dot */}
        <div className="flex justify-center pb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 border border-neutral-400" />
        </div>

        {/* Display Screen */}
        <div className="rounded-lg bg-white overflow-hidden border border-black/10 text-neutral-800">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-[#F6F2EC] border-b border-black/[0.08]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E8735C]" />
              <span className="w-2 h-2 rounded-full bg-[#E5AC42]" />
              <span className="w-2 h-2 rounded-full bg-[#5FB875]" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-black/[0.06] text-[9px] font-mono text-neutral-500 w-48 justify-center">
              <Lock className="w-2.5 h-2.5 text-emerald-600" />
              <span className="truncate">cloud.telos.sh/dashboard</span>
            </div>
            <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              P95: 38ms
            </span>
          </div>

          {/* SaaS Interface Inside Laptop */}
          <div className="p-3 sm:p-4 space-y-3 bg-[#FAF8F5]">
            {/* Top Metric Cards Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-white border border-black/[0.05] shadow-2xs">
                <span className="text-[8px] font-mono text-neutral-400 block uppercase">Realtime MRR</span>
                <div className="h-3 w-12 bg-amber-500/25 rounded mt-1 animate-pulse" />
                <span className="text-[8px] font-mono text-emerald-600 mt-1 block font-semibold">+32.4%</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-black/[0.05] shadow-2xs">
                <span className="text-[8px] font-mono text-neutral-400 block uppercase">Active Tenants</span>
                <div className="text-[11px] font-mono font-bold text-neutral-900 mt-0.5">14,280</div>
                <span className="text-[8px] font-mono text-neutral-400">PostgreSQL Strict</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-black/[0.05] shadow-2xs">
                <span className="text-[8px] font-mono text-neutral-400 block uppercase">Edge Sync</span>
                <div className="text-[11px] font-mono font-bold text-emerald-600 mt-0.5">100% OK</div>
                <span className="text-[8px] font-mono text-neutral-400">Zero Throttling</span>
              </div>
            </div>

            {/* Vector Telemetry Line Chart */}
            <div className="p-2.5 rounded-xl bg-white border border-black/[0.05] shadow-2xs">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-mono font-semibold text-neutral-600">Throughput Velocity</span>
                <span className="text-[8px] font-mono text-amber-700 bg-amber-500/10 px-1.5 py-0.5 rounded font-bold">Live Stream</span>
              </div>
              <svg className="w-full h-14 overflow-visible" viewBox="0 0 300 55" fill="none">
                <path
                  d="M0 42 C45 38, 75 48, 115 28 C155 8, 185 32, 225 15 C265 4, 285 10, 300 6"
                  stroke="#D97706"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0 42 C45 38, 75 48, 115 28 C155 8, 185 32, 225 15 C265 4, 285 10, 300 6 L300 55 L0 55 Z"
                  fill="url(#laptopAmberGlow)"
                  opacity="0.2"
                />
                <defs>
                  <linearGradient id="laptopAmberGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
                <circle cx="225" cy="15" r="3.5" fill="#D97706" className="animate-ping" />
                <circle cx="225" cy="15" r="2.5" fill="#D97706" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base & Notch Chassis in light metallic sand */}
      <div className="w-[108%] max-w-[590px] h-3 bg-[#E4D8CA] rounded-b-xl border border-[#D8C9B9] shadow-md relative flex justify-center">
        <div className="w-16 h-1 bg-[#C8B8A6] rounded-b-md" />
      </div>
    </div>
  );
}

/* --- Module 02: Dual Mobile Mockups (iOS + Android Side-by-Side) --- */
function DualMobileMockup() {
  const [offline, setOffline] = useState(false);

  return (
    <div className="w-full flex items-center justify-center gap-3 sm:gap-4 py-1">
      {/* 1. iOS Device (Dynamic Island, Rounded Curvature) */}
      <div className="w-[165px] rounded-[30px] border border-[#D8C9B9] ring-1 ring-inset ring-white bg-[#FAF8F5] p-1.5 shadow-[0_14px_32px_-6px_rgba(35,28,24,0.12)] flex flex-col justify-between">
        <div className="rounded-[24px] bg-white overflow-hidden border border-black/[0.05] flex flex-col min-h-[300px] shadow-2xs">
          {/* iOS Status + Dynamic Island */}
          <div className="px-3 pt-2 pb-1 flex items-center justify-between bg-[#FAF8F5] border-b border-black/[0.04]">
            <span className="text-[8px] font-mono font-bold text-neutral-700">9:41</span>
            <div className="w-9 h-2.5 bg-neutral-800 rounded-full" />
            <div className="flex items-center gap-0.5 text-neutral-600">
              <Wifi className="w-2 h-2" />
              <Battery className="w-2 h-2" />
            </div>
          </div>

          {/* iOS App View */}
          <div className="p-2 space-y-2 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono font-bold text-amber-800">Apple iOS</span>
              <span className="text-[7px] font-mono px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-700 font-bold">120Hz</span>
            </div>

            {/* iOS Biometric / Apple Pay card */}
            <div className="p-2 rounded-xl bg-[#FAF8F5] border border-black/[0.04] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold text-neutral-800">FaceID Lock</span>
                <Shield className="w-2.5 h-2.5 text-amber-600" />
              </div>
              <div className="h-1.5 w-full bg-neutral-200 rounded" />
              <div className="h-1.5 w-2/3 bg-neutral-200 rounded" />
            </div>

            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[8px] font-mono text-amber-900 flex items-center justify-between">
              <span>Secure Enclave</span>
              <span className="text-emerald-700 font-bold">PASS</span>
            </div>
          </div>

          {/* iOS Home Indicator */}
          <div className="pb-1 pt-0.5 bg-white flex justify-center border-t border-black/[0.03]">
            <div className="w-12 h-0.5 bg-neutral-700 rounded-full" />
          </div>
        </div>
      </div>

      {/* 2. Android Device (Center Punch-Hole Camera, Material You) */}
      <div className="w-[165px] rounded-[22px] border border-[#D8C9B9] ring-1 ring-inset ring-white bg-[#FAF8F5] p-1.5 shadow-[0_14px_32px_-6px_rgba(35,28,24,0.12)] flex flex-col justify-between">
        <div className="rounded-[18px] bg-white overflow-hidden border border-black/[0.05] flex flex-col min-h-[300px] shadow-2xs">
          {/* Android Status Bar + Center Camera Punch */}
          <div className="px-3 pt-2 pb-1 flex items-center justify-between bg-[#FAF8F5] border-b border-black/[0.04]">
            <span className="text-[8px] font-mono font-bold text-neutral-700">10:00</span>
            <div className="w-2 h-2 rounded-full bg-neutral-700" />
            <div className="flex items-center gap-0.5 text-neutral-600">
              <Wifi className="w-2 h-2" />
              <Battery className="w-2 h-2" />
            </div>
          </div>

          {/* Android App View */}
          <div className="p-2 space-y-2 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono font-bold text-neutral-800">Android</span>
              <button
                type="button"
                onClick={() => setOffline(!offline)}
                className={`text-[7px] font-mono font-bold px-1.5 py-0.5 rounded cursor-pointer ${
                  offline ? "bg-amber-500 text-white" : "bg-neutral-100 text-neutral-700"
                }`}
              >
                {offline ? "SQLite Off" : "Sync On"}
              </button>
            </div>

            {/* Android SQLite / Material Card */}
            <div className="p-2 rounded-xl bg-[#FAF8F5] border border-black/[0.04] space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${offline ? "bg-amber-500" : "bg-emerald-500"}`} />
                <span className="text-[8px] font-bold text-neutral-800">
                  {offline ? "Local Cache" : "Hermes Engine"}
                </span>
              </div>
              <div className="h-1.5 w-full bg-neutral-200 rounded" />
              <div className="h-1.5 w-3/4 bg-neutral-200 rounded" />
            </div>

            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-mono text-emerald-800 flex items-center justify-between">
              <span>Google Play Spec</span>
              <span className="font-bold">v2026.1</span>
            </div>
          </div>

          {/* Android 3-Button Nav Bar */}
          <div className="pb-1.5 pt-1 bg-white flex justify-around items-center border-t border-black/[0.03] text-neutral-400">
            <div className="w-2 h-2 border border-current rounded-xs" />
            <div className="w-2 h-2 border border-current rounded-full" />
            <div className="w-2 h-2 border-l border-b border-current rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Module 03: Dual Mockup (Web Screen + Overlapping Mobile Screen) --- */
function DualResponsiveMockup() {
  return (
    <div className="w-full relative flex items-center justify-center py-4">
      {/* Background Web Browser Screen */}
      <div className="w-full max-w-[440px] rounded-2xl bg-white border border-[#E6DACD] ring-1 ring-inset ring-white p-3 shadow-lg relative z-0">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.06]">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[9px] font-mono text-neutral-400">Desktop 1440px Canvas</span>
          <span className="text-[9px] font-mono font-semibold text-amber-800 bg-amber-500/15 px-1.5 py-0.5 rounded">Figma Tokens</span>
        </div>

        {/* Web Mock Grid */}
        <div className="space-y-2 p-2 bg-[#FAF8F5] rounded-xl border border-black/[0.04]">
          <div className="flex items-center justify-between">
            <div className="h-3 w-28 bg-neutral-800 rounded" />
            <div className="flex gap-1.5">
              <div className="h-3 w-8 bg-amber-500 rounded" />
              <div className="h-3 w-8 bg-neutral-200 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-14 bg-white rounded-lg border border-black/[0.04] p-1.5">
              <div className="h-2 w-10 bg-amber-200 rounded mb-1" />
              <div className="h-1.5 w-14 bg-neutral-200 rounded" />
            </div>
            <div className="h-14 bg-white rounded-lg border border-black/[0.04] p-1.5">
              <div className="h-2 w-10 bg-neutral-200 rounded mb-1" />
              <div className="h-1.5 w-14 bg-neutral-200 rounded" />
            </div>
            <div className="h-14 bg-white rounded-lg border border-black/[0.04] p-1.5">
              <div className="h-2 w-10 bg-neutral-200 rounded mb-1" />
              <div className="h-1.5 w-14 bg-neutral-200 rounded" />
            </div>
          </div>
          {/* Spatial Grid Ruler */}
          <div className="p-1.5 rounded bg-white border border-black/[0.04] flex items-center justify-between text-[8px] font-mono text-neutral-500">
            <span>--spacing-base: 8px;</span>
            <span className="text-emerald-700 font-bold">1:1 Token Parity</span>
          </div>
        </div>
      </div>

      {/* Foreground Overlapping Mobile Device Wireframe (Delicate Titanium / Natural Finish) */}
      <div className="absolute right-0 sm:right-6 -bottom-5 w-[140px] h-[260px] rounded-[30px] border border-[#D8C9B9] ring-1 ring-inset ring-white bg-[#FAF8F5] p-1.5 shadow-[0_16px_36px_rgba(35,28,24,0.12),0_2px_4px_rgba(0,0,0,0.02)] z-10 flex flex-col justify-between">
        {/* Notch / Dynamic Island */}
        <div className="flex items-center justify-between px-2 pt-1 pb-1">
          <span className="text-[7px] font-mono font-bold text-neutral-600">9:41</span>
          <div className="w-10 h-2 bg-neutral-300 rounded-full" />
          <div className="w-2.5 h-1.5 bg-neutral-300 rounded-xs" />
        </div>

        {/* Screen Content */}
        <div className="space-y-1.5 p-2 bg-white rounded-[22px] border border-black/[0.05] flex-1 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between text-[7px] font-mono text-neutral-400 mb-1">
              <span>Mobile Token</span>
              <span className="text-emerald-600 font-bold">1:1 Sync</span>
            </div>
            <div className="h-2 w-14 bg-neutral-800 rounded mb-1.5" />
            <div className="h-10 bg-amber-500/10 rounded-lg border border-amber-500/20 p-1.5 flex flex-col justify-center mb-1.5">
              <div className="h-1.5 w-12 bg-amber-600 rounded mb-1" />
              <div className="h-1 w-16 bg-neutral-300 rounded" />
            </div>
            <div className="h-1.5 w-full bg-neutral-100 rounded mb-1" />
            <div className="h-1.5 w-3/4 bg-neutral-100 rounded" />
          </div>

          {/* Mini Mobile Nav */}
          <div className="pt-1.5 border-t border-black/[0.04] flex justify-around">
            <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-neutral-200" />
            <div className="w-3.5 h-3.5 rounded-full bg-neutral-200" />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="py-1 flex justify-center">
          <div className="w-12 h-0.5 bg-neutral-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* --- Module 04: Legacy System Shifting to Modern Architecture Mockup --- */
function SystemMigrationMockup() {
  const [phase, setPhase] = useState<"legacy" | "transition" | "modern">("transition");

  return (
    <div className="w-full rounded-2xl bg-white/80 backdrop-blur-md border border-[#E6DACD] ring-1 ring-inset ring-white p-4 sm:p-5 shadow-[0_10px_30px_-6px_rgba(35,28,24,0.06)] relative overflow-hidden text-neutral-800">
      {/* Header with interactive state selector */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
        <div className="flex items-center gap-1.5">
          <RefreshCw className="w-3.5 h-3.5 text-amber-700 animate-spin" style={{ animationDuration: "8s" }} />
          <span className="text-[11px] font-mono font-bold text-neutral-800 uppercase tracking-wider">
            Architecture Migration
          </span>
        </div>
        <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-lg border border-black/[0.06] text-[9px] font-mono">
          {(["legacy", "transition", "modern"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPhase(p)}
              className={`px-2 py-0.5 rounded uppercase font-bold transition-all cursor-pointer ${
                phase === p ? "bg-[#141312] text-white" : "text-neutral-400 hover:text-neutral-800"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Before / Migration / After Vector Representation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
        {/* Left: Old Legacy System (Brittle, Monolith, Slow) */}
        <div className={`p-3 rounded-2xl border transition-all ${
          phase === "legacy" ? "border-rose-400 bg-rose-50/50 shadow-sm" : "border-black/[0.06] bg-[#FAF8F5] opacity-60"
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">Legacy Monolith</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-700 font-bold">
              Tech Debt
            </span>
          </div>
          <div className="space-y-1.5 text-[9px] font-mono text-neutral-600">
            <div className="p-1.5 rounded bg-white border border-rose-200">
              ✖ 6–9 months slow release
            </div>
            <div className="p-1.5 rounded bg-white border border-rose-200">
              ✖ Server bottlenecks &amp; timeouts
            </div>
            <div className="p-1.5 rounded bg-white border border-rose-200">
              ✖ Brittle manual deployments
            </div>
          </div>
        </div>

        {/* Right: Modern System (Fast Next.js, Edge, Typed, Fixed Sprints) */}
        <div className={`p-3 rounded-2xl border transition-all ${
          phase === "modern" || phase === "transition"
            ? "border-amber-500/40 bg-gradient-to-br from-white to-amber-50/60 shadow-sm ring-1 ring-amber-500/20"
            : "border-black/[0.06] bg-[#FAF8F5] opacity-60"
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold text-amber-950 uppercase">Telos Accelerator</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-800 font-bold">
              6-Week Launch
            </span>
          </div>
          <div className="space-y-1.5 text-[9px] font-mono text-neutral-800">
            <div className="p-1.5 rounded bg-white border border-amber-500/20 flex items-center justify-between">
              <span>✔ Typed Next.js + Postgres</span>
              <span className="text-emerald-700 font-bold">&lt;80ms</span>
            </div>
            <div className="p-1.5 rounded bg-white border border-amber-500/20 flex items-center justify-between">
              <span>✔ Automated CI/CD Staging</span>
              <span className="text-amber-800 font-bold">14-Day</span>
            </div>
            <div className="p-1.5 rounded bg-white border border-amber-500/20 flex items-center justify-between">
              <span>✔ 100% Full IP Handover</span>
              <span className="text-emerald-700 font-bold">Day 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Progress Indicator */}
      <div className="mt-3.5 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-mono">
        <span className="text-neutral-500">Fixed-Scope Modernization Roadmap</span>
        <span className="text-amber-800 font-bold">Zero Downtime Handover</span>
      </div>
    </div>
  );
}

interface ServiceModuleCardProps {
  module: ServiceModule;
}

export function ServiceModuleCard({ module }: ServiceModuleCardProps) {
  function renderVisual() {
    switch (module.id) {
      case "web-saas":
        return <LaptopMonitorMockup />;
      case "mobile":
        return <DualMobileMockup />;
      case "ui-ux":
        return <DualResponsiveMockup />;
      case "mvp":
        return <SystemMigrationMockup />;
      default:
        return <LaptopMonitorMockup />;
    }
  }

  return (
    <motion.div
      variants={moduleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      id={module.id}
      className="p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#F2E7DC] text-[#141312] border border-[#E6DACD] ring-1 ring-inset ring-white/95 shadow-[0_12px_36px_-6px_rgba(35,28,24,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:border-amber-500/40 hover:shadow-[0_24px_50px_-10px_rgba(217,119,6,0.12)] transition-all duration-300 relative overflow-hidden group backdrop-blur-md"
    >
      {/* Top right subtle ambient warm glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-br from-amber-300/20 via-orange-200/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-tr from-amber-400/10 via-rose-200/10 to-transparent blur-2xl" />

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

      {/* Flexible Grid: Left content auto-flows, Right mockup has natural proportional height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        {/* Left Column: Title, Subtitle, Tech badges & Concise capabilities checklist */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141312] tracking-tight">
              {module.title}
            </h2>
            <p className="mt-1.5 text-sm font-semibold text-amber-800 leading-snug">
              {module.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#3E3834] leading-relaxed font-normal">
            {module.description}
          </p>

          {/* Target Stack Chips */}
          <div className="pt-1">
            <div className="text-[11px] font-mono text-[#7A6F66] uppercase tracking-wider mb-2 font-medium">
              Target Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {module.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/80 border border-black/[0.08] text-[#141312] font-medium shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Compact Highlights Checklist */}
          <div className="pt-2 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {module.capabilities.slice(0, 4).map((cap) => (
              <div key={cap.label} className="flex items-center gap-2 text-[#2A2522]">
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-900 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="font-medium truncate">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Mockup Container */}
        <div className="lg:col-span-6 flex items-center justify-center">
          {renderVisual()}
        </div>
      </div>
    </motion.div>
  );
}
