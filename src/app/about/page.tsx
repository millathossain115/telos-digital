"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  Cpu,
  GitCommit,
  Terminal,
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Globe2,
  Lock,
} from "lucide-react";

const PRINCIPLES = [
  {
    number: "01",
    title: "Zero Junior Outsourcing",
    tagline: "Staff-Level Pedigree",
    description:
      "Traditional agencies win contracts with senior pitch decks and delegate delivery to junior freelancers. At Telos, every architectural decision and line of code is produced by battle-tested staff engineers.",
    icon: Terminal,
  },
  {
    number: "02",
    title: "Deterministic Type Safety",
    tagline: "Zero-Assumption Codebases",
    description:
      "We reject loose typing and fragile assumptions. Our systems enforce strict end-to-end TypeScript, runtime Zod validation, automated CI/CD checks, and Playwright integration tests.",
    icon: Code2,
  },
  {
    number: "03",
    title: "100% Unconditional IP Ownership",
    tagline: "Day-One Asset Transfer",
    description:
      "Your company owns every commit, Figma token, cloud infrastructure definition, and database migration from the instant it is committed. No vendor lock-in or proprietary licensing traps.",
    icon: Lock,
  },
  {
    number: "04",
    title: "High Signal, Low Noise",
    tagline: "Async-First Operating Model",
    description:
      "We replace bloated status meetings with asynchronous Loom walkthroughs, live staging branch previews, and direct Slack/Discord channels with your engineers.",
    icon: GitCommit,
  },
];

const ENGINEERING_STANDARDS = [
  { label: "Engineering Model", value: "Senior Staff Only", detail: "Zero outsourced or junior labor" },
  { label: "Delivery Cadence", value: "14-Day Sprints", detail: "Continuous working staging deploys" },
  { label: "IP Protection", value: "100% Day-One", detail: "Full legal copyright & repo handover" },
  { label: "Global Coverage", value: "EST · CET · GMT+6", detail: "Synchronous + async overlap" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Ambient Atmospheric Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/3 w-[700px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-20 right-10 w-[550px] h-[450px] bg-cyan-600/8 blur-[130px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
          
          {/* Section 1: Hero & Manifesto */}
          <section className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-black/[0.08] text-xs font-mono text-indigo-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>Agency Manifesto // Why We Exist</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight sm:tracking-tighter text-white leading-[1.08] text-balance">
              Architectural discipline over{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
                commodity headcount
              </span>
              .
            </h1>

            <p className="mt-7 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed text-pretty max-w-2xl mx-auto">
              Telos Digital was founded on a simple premise: modern software development has become too noisy, bloated, and disconnected from genuine engineering craftsmanship. We exist to fix that.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 text-xs font-mono text-neutral-500">
              <Globe2 className="w-4 h-4 text-neutral-600" />
              <span>Headquartered in Dhaka · Serving clients across US (EST), Europe (CET), and APAC (GMT+6)</span>
            </div>
          </section>

          {/* Section 2: Core Engineering Standards Bar */}
          <section className="p-7 sm:p-9 rounded-3xl bg-white/70 border border-black/[0.08]/80 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {ENGINEERING_STANDARDS.map((std) => (
                <div key={std.label} className="flex flex-col justify-between border-l border-black/[0.08]/80 pl-5">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    {std.label}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold text-white tracking-tight mt-1">
                    {std.value}
                  </div>
                  <div className="text-xs text-neutral-600 mt-1 font-mono">
                    {std.detail}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Operating Principles (The Telos Standard) */}
          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
                  The Telos Standard
                </div>
                <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
                  How we operate differently
                </h2>
              </div>
              <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed">
                Rules we live by to ensure every client receives exceptional code quality, total transparency, and rapid delivery velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRINCIPLES.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.number}
                    className="p-8 sm:p-10 rounded-3xl bg-neutral-900/25 border border-black/[0.08]/80 hover:border-neutral-700 transition-all duration-300 backdrop-blur-sm relative group"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-indigo-950/40 border border-indigo-800/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-800/60 text-neutral-600">
                        {p.tagline}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 4: Technical Leadership Note */}
          <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900/60 via-indigo-950/20 to-neutral-900/60 border border-black/[0.08]/80 backdrop-blur-xl">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
                <Sparkles className="w-4 h-4" />
                <span>Founding Perspective</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-normal text-neutral-200 leading-relaxed text-pretty">
                “We don’t believe in massive headcount bloat or account executives acting as telephone games between founders and engineers. When you partner with us, you speak directly with the people architecting your databases, designing your interfaces, and pushing to production.”
              </blockquote>

              <div className="pt-4 border-t border-black/[0.08]/60 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
                  <div className="w-full h-full bg-[#FAF8F5] rounded-[11px] flex items-center justify-center font-bold text-white text-base">
                    T
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Engineering Leadership</div>
                  <div className="text-xs font-mono text-neutral-600">Telos Digital Architecture Group</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Conversion Banner */}
          <section className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-indigo-950/80 via-neutral-900/90 to-cyan-950/80 border border-black/[0.08]/80 shadow-2xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
              Ready to build without compromise?
            </h2>
            <p className="mt-4 text-neutral-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Schedule a 15-minute consultation to review your technical goals with our principal engineer.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-100 shadow-xl shadow-white/5 hover:-tranneutral-y-0.5 transition-all duration-200 gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-neutral-900/80 border border-black/[0.08] hover:border-neutral-700 text-neutral-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
