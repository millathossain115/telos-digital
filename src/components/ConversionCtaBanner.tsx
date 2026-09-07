"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
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
          className="group relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#3A1F13] via-[#2D180E] to-[#1F1009] text-white overflow-hidden shadow-[0_28px_80px_rgba(58,31,19,0.28)] hover:shadow-[0_36px_90px_rgba(217,119,6,0.28)] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-500 cursor-default"
        >
          {/* Interactive Golden Spotlight Tracker Follows Cursor */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute w-[550px] h-[550px] rounded-full blur-[90px] z-[1] transition-opacity duration-500"
            style={{
              left: smoothX,
              top: smoothY,
              translateX: "-50%",
              translateY: "-50%",
              opacity: isHovered ? 0.3 : 0,
              background: "radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, rgba(217, 119, 6, 0.25) 40%, transparent 70%)",
            }}
          />

          {/* Precision Micro-Ring Cursor Follower */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute w-6 h-6 rounded-full border border-amber-400/70 z-20 transition-opacity duration-300 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
            style={{
              left: smoothX,
              top: smoothY,
              translateX: "-50%",
              translateY: "-50%",
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Top highlight shine line on hover */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/70 transition-all duration-700" />

          {/* Luminous warm amber ambient glows - expand on hover */}
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-40 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700 blur-3xl"
            style={{
              background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-25 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 blur-3xl"
            style={{
              background: "radial-gradient(circle, #d97706 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-amber-400 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{badge}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-semibold tracking-tight sm:tracking-tighter leading-[1.12] text-white"
            >
              {title || (
                <>
                  Have a product in mind? <br />
                  <span className="text-amber-200">
                    Let’s map out the technical roadmap.
                  </span>
                </>
              )}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                type="button"
                onClick={() => openCalendly()}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white text-[#141312] font-semibold text-sm sm:text-base hover:bg-amber-400 hover:text-[#141312] transition-all shadow-lg hover:shadow-amber-500/20 gap-2.5 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>Book Technical Roadmap Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/20 text-neutral-200 font-medium text-sm sm:text-base hover:bg-white/10 hover:text-white transition-colors"
              >
                <span>Send Specification RFQ</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


