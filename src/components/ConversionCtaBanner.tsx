"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export function ConversionCtaBanner() {
  return (
    <section className="py-24 relative bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-[#141312] border border-black overflow-hidden shadow-[0_25px_60px_rgba(20,19,18,0.15)]">
          {/* Ambient Glows */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-500/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-200 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Direct Engineering Consult</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter leading-[1.1] text-balance">
              Have a product in mind? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400">
                Let’s map out the technical roadmap.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty">
              Book a 30-minute architectural assessment with our principal engineer. We’ll analyze feasibility, recommend the exact stack, and outline sprint milestones.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#141312] bg-[#FAF8F5] hover:bg-white rounded-xl shadow-lg transition-all duration-200 gap-2.5"
              >
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Book Technical Roadmap Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 gap-2"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Send Specification RFQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
