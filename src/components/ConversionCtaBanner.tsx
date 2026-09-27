"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, Clock, FileCode } from "lucide-react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useCalendly } from "@/components/CalendlyProvider";

const bannerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

interface ConversionCtaBannerProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function ConversionCtaBanner({
  badge = "Direct Engineering Consult",
  title,
  subtitle = "Book a 30-minute architectural assessment with our principal engineer. We’ll evaluate feasibility, recommend the exact stack, and outline sprint milestones.",
  className = "py-20 sm:py-28 relative bg-[#FAF8F5]",
}: ConversionCtaBannerProps) {
  const { openCalendly } = useCalendly();
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for golden cursor follower & spotlight
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 220, mass: 0.2 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 220, mass: 0.2 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={bannerRef}
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{
            y: -4,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          className="group relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#201A14] via-[#14110E] to-[#0A0908] text-white overflow-hidden shadow-[0_28px_80px_rgba(217,119,6,0.22),0_0_35px_rgba(245,158,11,0.12)] border-2 border-amber-500/80 hover:border-amber-400 hover:shadow-[0_36px_90px_rgba(217,119,6,0.30),0_0_50px_rgba(245,158,11,0.22)] transition-all duration-500 cursor-default"
        >
          {/* Interactive Golden Spotlight Tracker Follows Cursor */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[100px] z-[1] transition-opacity duration-500"
            style={{
              left: smoothX,
              top: smoothY,
              translateX: "-50%",
              translateY: "-50%",
              opacity: isHovered ? 0.35 : 0,
              background: "radial-gradient(circle, rgba(245, 158, 11, 0.65) 0%, rgba(217, 119, 6, 0.3) 40%, transparent 70%)",
            }}
          />

          {/* Precision Micro-Ring Cursor Follower */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute w-6 h-6 rounded-full border border-amber-400/80 z-20 transition-opacity duration-300 shadow-[0_0_14px_rgba(245,158,11,0.6)]"
            style={{
              left: smoothX,
              top: smoothY,
              translateX: "-50%",
              translateY: "-50%",
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Top highlight shine line on hover */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/80 transition-all duration-700" />

          {/* Luminous warm amber ambient glows - expand on hover */}
          <div
            className="pointer-events-none absolute -bottom-28 -right-28 w-[420px] h-[420px] rounded-full opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 blur-3xl"
            style={{
              background: "radial-gradient(circle, #f59e0b 0%, #d97706 40%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -top-28 -left-28 w-96 h-96 rounded-full opacity-25 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 blur-3xl"
            style={{
              background: "radial-gradient(circle, #d97706 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-amber-400/30 text-xs font-mono tracking-wider uppercase text-amber-300 mb-6 shadow-sm backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{badge}</span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-[46px] font-semibold tracking-[-0.035em] leading-[1.14] text-white text-balance"
              >
                {title || (
                  <>
                    Have a product in mind? <br />
                    Let’s map out the{" "}
                    <em className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">
                      technical roadmap
                    </em>
                    .
                  </>
                )}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mt-5 text-sm sm:text-base text-neutral-300/90 leading-relaxed max-w-xl font-normal text-balance"
              >
                {subtitle}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
              >
                <button
                  type="button"
                  onClick={() => openCalendly()}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#141312] font-mono font-bold text-xs sm:text-sm tracking-wider hover:brightness-110 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all shadow-md active:scale-[0.98] gap-2.5 group/btn cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#141312]" />
                  <span>Book Roadmap Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/[0.14] bg-white/[0.04] text-neutral-200 font-mono text-xs sm:text-sm tracking-wider hover:bg-white/[0.08] hover:text-white hover:border-white/30 transition-all"
                >
                  <span>Send Technical Spec</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Feature Card: Roadmap Scope Checklist */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-amber-500/25 ring-1 ring-inset ring-amber-400/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <FileCode className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Assessment Package</span>
                    <span className="text-[10px] font-mono text-neutral-400">Zero Obligation</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                  Free 48h Turnaround
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-white">Direct Principal Architect Review</p>
                    <p className="text-[11px] text-neutral-400">No account managers or sales discovery reps</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-white">Full NDA &amp; IP Protection</p>
                    <p className="text-[11px] text-neutral-400">Pre-signed mutual confidentiality agreement</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-white">Timeline &amp; Stack Feasibility</p>
                    <p className="text-[11px] text-neutral-400">Fixed-price milestone estimates within 48 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


