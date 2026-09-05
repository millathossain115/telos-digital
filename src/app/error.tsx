"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home, Terminal } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to telemetry service
    console.error("Runtime exception captured:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Red alert ambient spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -tranneutral-x-1/2 -tranneutral-y-1/2 w-[600px] h-[350px] bg-rose-500/15 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-md w-full text-center relative z-10 space-y-6">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-xs font-mono text-rose-300">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
          <span>RUNTIME_EXCEPTION // 500</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Execution Interrupted
        </h1>

        <p className="text-sm text-neutral-600 leading-relaxed text-pretty">
          An unexpected exception was caught by our edge boundary. Our telemetry pipeline has logged this stack trace.
        </p>

        {/* Diagnostic Box */}
        <div className="rounded-2xl bg-white/90 border border-black/[0.08]/80 p-4 font-mono text-xs text-left text-neutral-600">
          <div className="flex items-center justify-between pb-2.5 border-b border-black/[0.08]/70 mb-2.5">
            <span className="flex items-center gap-2 text-neutral-300">
              <Terminal className="w-3.5 h-3.5 text-rose-400" />
              <span>exception_trace</span>
            </span>
            {error.digest && (
              <span className="text-[10px] text-neutral-500">digest: {error.digest.slice(0, 8)}</span>
            )}
          </div>
          <p className="text-rose-300 text-[11px] truncate">
            {error.message || "An unexpected client-side error occurred."}
          </p>
        </div>

        {/* Action Recovery Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-amber-400 hover:text-black shadow-xl shadow-white/5 hover:shadow-amber-500/20 active:scale-[0.98] transition-all duration-200 gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-neutral-950" />
            <span>Retry Operation</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neutral-900/80 hover:bg-amber-600 border border-white/10 hover:border-amber-500/40 text-neutral-300 hover:text-white font-semibold text-sm transition-all duration-200 gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
