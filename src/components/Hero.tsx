"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Dynamic Grid Background with Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-indigo-500/20 via-cyan-500/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/2 -left-48 w-[450px] h-[450px] bg-indigo-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 -right-48 w-[450px] h-[450px] bg-cyan-600/10 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs sm:text-sm font-mono tracking-tight mb-8 shadow-sm backdrop-blur-md hover:border-slate-700 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-200">Available for Q4 Projects</span>
          <span className="text-slate-600">/</span>
          <span className="text-indigo-400">Limited Capacity</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight sm:tracking-tighter max-w-5xl leading-[1.08] text-white text-balance">
          We engineer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300">
            scalable software
          </span>
          , mobile apps, & refined digital interfaces.
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl font-normal leading-relaxed text-pretty">
          High-performance engineering studio partnering with founders and engineering leaders. Built with{" "}
          <span className="text-slate-200 font-medium">Next.js</span>,{" "}
          <span className="text-slate-200 font-medium">cross-platform mobile</span>, and resilient cloud architectures.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 gap-2.5"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-indigo-200" />
          </Link>
          <Link
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 gap-2"
          >
            <span>View Case Studies</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>Senior Staff Engineers Only</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>100% Code Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Production-Ready in Weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
