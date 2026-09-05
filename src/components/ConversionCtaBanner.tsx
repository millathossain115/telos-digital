"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion, type Variants } from "framer-motion";

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

export function ConversionCtaBanner() {
  return (
    <section className="py-20 sm:py-28 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#3A1F13] via-[#2D180E] to-[#1F1009] text-white overflow-hidden shadow-[0_28px_80px_rgba(58,31,19,0.28)] border border-amber-500/20"
        >
          {/* Luminous warm amber ambient glows */}
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-25 blur-3xl"
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
              <span>Direct Engineering Consult</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-semibold tracking-tight sm:tracking-tighter leading-[1.12] text-white"
            >
              Have a product in mind? <br />
              <span className="text-amber-200">
                Let’s map out the technical roadmap.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal"
            >
              Book a 30-minute architectural assessment with our principal engineer. We’ll evaluate feasibility, recommend the exact stack, and outline sprint milestones.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white text-[#141312] font-semibold text-sm sm:text-base hover:bg-neutral-100 transition-colors shadow-sm gap-2.5 group"
              >
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Book Technical Roadmap Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

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


