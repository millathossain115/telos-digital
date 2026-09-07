"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { EngagementModel } from "@/types/services";

interface EngagementModelsSectionProps {
  models: EngagementModel[];
}

export function EngagementModelsSection({ models }: EngagementModelsSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <section
      id="engagement"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full py-24 sm:py-32 my-20 bg-gradient-to-b from-[#141210] via-[#1E1B17] to-[#2E2822] border-y border-amber-500/20 overflow-hidden"
    >
      {/* Interactive cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 119, 6, 0.18), transparent 70%)`,
        }}
      />

      {/* Subtle background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-600/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-32 right-10 w-[500px] h-[300px] bg-amber-600/15 blur-[120px] rounded-full" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-xs font-medium backdrop-blur-sm">
            Engagement Models
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight sm:tracking-tighter">
            Transparent ways to partner
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Predictable sprint retainers or fixed-scope milestones with zero junior handoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch pt-4">
          {models.map((model) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl border transition-all duration-300 backdrop-blur-md ${
                model.highlight
                  ? "bg-[#1E1B18]/90 border-amber-500/50 shadow-[0_20px_50px_rgba(217,119,6,0.12)] ring-1 ring-amber-500/30 hover:border-amber-400/80"
                  : "bg-[#181614]/80 border-white/[0.08] hover:border-amber-500/30 shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
              }`}
            >
              {/* Highlight card subtle ambient glow */}
              {model.highlight && (
                <div className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl group-hover:bg-amber-500/25 transition-all duration-500 overflow-hidden" />
              )}

              {model.highlight && (
                <div className="absolute -top-3.5 right-8 z-20">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full bg-amber-500 text-[#141210] font-bold shadow-lg shadow-amber-500/30 block">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {model.name}
                </h3>
                <p className="text-xs font-mono text-amber-400 mt-1 font-medium">
                  {model.tagline}
                </p>
                <p className="text-sm text-neutral-300 mt-4 leading-relaxed">
                  {model.bestFor}
                </p>

                <div className="mt-8 pt-6 border-t border-white/[0.1] space-y-3">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-medium">
                    What is included:
                  </div>
                  {model.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/[0.1] relative z-10">
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 gap-2 cursor-pointer ${
                    model.highlight
                      ? "bg-amber-500 text-[#141210] font-bold hover:bg-amber-400 hover:shadow-[0_0_24px_rgba(245,158,11,0.4)] shadow-md hover:scale-[1.01] active:scale-[0.99]"
                      : "bg-white/[0.06] text-white hover:bg-white/[0.12] hover:border-amber-500/40 border border-white/[0.12] shadow-xs hover:text-amber-300"
                  }`}
                >
                  <span>{model.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-current" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

