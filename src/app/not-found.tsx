"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Home, Terminal, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Antigravity Deep Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -tranneutral-x-1/2 -tranneutral-y-1/2 w-[600px] h-[350px] bg-rose-500/10 blur-[140px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -tranneutral-x-1/2 w-[500px] h-[250px] bg-indigo-600/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-xl w-full mx-auto text-center relative z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-black/[0.08] text-xs font-mono text-rose-400 mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>HTTP_STATUS // 404_NOT_FOUND</span>
          </div>

          {/* Large Monospace Error Code */}
          <div className="font-mono text-7xl sm:text-9xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600 tabular-nums">
            404
          </div>

          {/* Error Message */}
          <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Route Resolution Failed
          </h1>

          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed text-pretty">
            The requested URI path does not map to any active cluster or edge handler. The endpoint may have been deprecated or moved.
          </p>

          {/* Terminal Diagnostics Card */}
          <div className="mt-8 text-left rounded-2xl bg-white/85 border border-black/[0.08]/80 p-4 font-mono text-xs text-neutral-600 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]/70 mb-3">
              <span className="flex items-center gap-2 text-neutral-300">
                <Terminal className="w-3.5 h-3.5 text-rose-400" />
                <span>telemetry_log</span>
              </span>
              <span className="text-[11px] text-neutral-500">err_code: E_ROUTE_MISSING</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div><span className="text-neutral-500">$ lookup:</span> requested_resource = null</div>
              <div><span className="text-neutral-500">$ status:</span> terminated_with_fallback</div>
              <div className="text-emerald-400">✓ system_core: healthy [all clusters active]</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-100 shadow-xl shadow-white/5 hover:-tranneutral-y-0.5 active:tranneutral-y-0 transition-all duration-200 gap-2"
            >
              <Home className="w-4 h-4 text-neutral-950" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-black/[0.08] hover:border-neutral-700 text-neutral-300 hover:text-white font-semibold text-sm transition-all duration-200 gap-2"
            >
              <span>Explore Services</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
