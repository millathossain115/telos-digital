"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { EngagementModel } from "@/types/services";

interface EngagementModelsSectionProps {
  models: EngagementModel[];
}

export function EngagementModelsSection({ models }: EngagementModelsSectionProps) {
  return (
    <section id="engagement" className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-4 shadow-xs font-medium">
          Engagement Models
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-[#141312] tracking-tight sm:tracking-tighter">
          Transparent ways to partner
        </h2>
        <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
          Predictable sprint retainers or fixed-scope milestones with zero junior handoffs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {models.map((model) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl border transition-all duration-300 ${
              model.highlight
                ? "bg-white border-amber-500/50 shadow-xl shadow-amber-900/[0.04] ring-1 ring-amber-500/30"
                : "bg-[#F3EFEA] border-black/[0.08] hover:border-black/[0.14] shadow-xs"
            }`}
          >
            {model.highlight && (
              <div className="absolute -top-3.5 right-8">
                <span className="text-[11px] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#141312] text-amber-300 font-semibold shadow-md">
                  Most Popular
                </span>
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold text-[#141312] tracking-tight">
                {model.name}
              </h3>
              <p className="text-xs font-mono text-amber-700 mt-1 font-medium">
                {model.tagline}
              </p>
              <p className="text-sm text-neutral-600 mt-4 leading-relaxed">
                {model.bestFor}
              </p>

              <div className="mt-8 pt-6 border-t border-black/[0.08] space-y-3">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2 font-medium">
                  What is included:
                </div>
                {model.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-black/[0.08]">
              <Link
                href="/contact"
                className={`w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 gap-2 cursor-pointer ${
                  model.highlight
                    ? "bg-[#141312] text-white hover:bg-amber-600 hover:shadow-amber-500/20 shadow-md hover:scale-[1.01] active:scale-[0.99]"
                    : "bg-white text-[#141312] hover:bg-amber-50/80 hover:border-amber-500/40 hover:text-amber-900 border border-black/[0.08] shadow-xs"
                }`}
              >
                <span>{model.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-amber-500" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
