"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#FAF8F5] text-[#141312] pt-32">
      {/* Warm ambient light leak */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute top-1/3 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: `
              radial-gradient(50% 50% at 50% 50%, rgba(212, 175, 55, 0.08), transparent 70%),
              radial-gradient(40% 40% at 65% 45%, rgba(245, 239, 230, 0.9), transparent 75%),
              radial-gradient(35% 35% at 35% 45%, rgba(235, 229, 220, 0.6), transparent 75%)
            `,
            filter: 'blur(50px)'
          }}
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        {/* Large balanced typography */}
        <motion.h1 variants={itemVariants} className="text-[clamp(40px,6.2vw,72px)] font-medium leading-[1.06] tracking-[-0.022em] text-[#141312] text-balance">
          We engineer{" "}
          <em className="font-serif text-[1.08em] font-normal italic leading-[1] text-amber-600">
            scalable
          </em>
          <br />
          software &amp; interfaces
        </motion.h1>

        <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-[520px] text-[clamp(15px,1.5vw,17px)] font-normal leading-[1.6] tracking-[-0.012em] text-neutral-600 text-balance">
          <span className="font-semibold text-[#141312] shadow-[inset_0_-0.06em_0_0_#d97706]">Telos Digital</span> partners with founders to ship mission-critical React apps, mobile cores, and refined experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#141312] px-6 text-[14px] font-medium text-white shadow-md hover:bg-amber-600 hover:shadow-amber-500/25 transition-all active:scale-[0.97]"
          >
            Start a Project
          </Link>
          <Link
            href="/work"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white/80 border border-black/[0.08] px-6 text-[14px] font-medium text-neutral-800 shadow-sm transition hover:bg-white hover:text-amber-800 hover:border-amber-500/40 active:scale-[0.97]"
          >
            View Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Big Dashboard Photo */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="relative z-10 mx-auto mt-16 w-full max-w-[1400px] px-4 sm:px-6"
      >
        {/* Golden oval glow at the top center of the dashboard image */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[200px] bg-amber-400/25 blur-[90px] rounded-[100%] pointer-events-none z-[-1]" />

        <div 
          className="relative w-full rounded-t-2xl sm:rounded-t-3xl border-t border-x border-b-0 border-black/[0.08] border-t-amber-500/40 bg-white/80 shadow-[0_20px_50px_rgba(20,19,18,0.04)] backdrop-blur-xl overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent_98%)]"
        >
          <img
            src="/assets/images/CRm hero Light.jpeg"
            alt="Telos Digital Dashboard Mockup"
            className="w-full h-auto block"
          />
          {/* Seamless fade mask */}
          <div className="absolute inset-x-0 bottom-0 h-48 sm:h-80 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none" />
        </div>
        {/* Soft warm shadow below image */}
        <div className="absolute -inset-4 z-[-1] mx-auto w-3/4 blur-3xl rounded-[3rem] bg-amber-500/[0.04]" />
      </motion.div>
    </section>
  );
}
