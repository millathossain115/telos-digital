"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-slate-950 text-slate-100 pt-32">
      {/* 21st.dev inspired glow pulse background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 animate-[pulse_8s_ease-in-out_infinite]"
          style={{
            background: `
              radial-gradient(50% 50% at 50% 50%, rgba(99, 102, 241, 0.25), transparent 78%),
              radial-gradient(38% 44% at 62% 54%, rgba(56, 187, 248, 0.15), transparent 76%),
              radial-gradient(34% 40% at 38% 54%, rgba(168, 85, 247, 0.12), transparent 76%)
            `,
            filter: 'blur(48px)'
          }}
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        {/* Large balanced typography like 21st.dev */}
        <motion.h1 variants={itemVariants} className="text-[clamp(40px,6.2vw,72px)] font-medium leading-[1.06] tracking-[-0.022em] text-balance">
          We engineer{" "}
          <em className="font-serif text-[1.08em] font-normal italic leading-[1] text-indigo-400">
            scalable
          </em>
          <br />
          software &amp; interfaces
        </motion.h1>

        <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-[500px] text-[clamp(15px,1.5vw,17px)] font-medium leading-[1.5] tracking-[-0.012em] text-slate-400 text-balance">
          <span className="text-slate-100 shadow-[inset_0_-0.06em_0_0_#818cf8]">Telos Digital</span> partners with founders to ship mission-critical React apps, mobile cores, and refined experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-indigo-500 px-6 text-[14px] font-medium text-white transition hover:bg-indigo-600 active:scale-[0.97]"
          >
            Start a Project
          </Link>
          <Link
            href="#work"
            className="inline-flex h-11 items-center justify-center rounded-full px-6 text-[14px] font-medium text-slate-300 transition hover:bg-white/10 hover:text-white active:scale-[0.97]"
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
        className="relative z-10 mx-auto mt-16 w-full max-w-[1400px] px-0 sm:px-6"
      >
        <div className="relative w-full rounded-t-2xl sm:rounded-2xl border border-white/10 border-b-0 bg-slate-900/50 shadow-2xl backdrop-blur-xl overflow-hidden">
          <img
            src="/assets/images/CRM Hero.jpeg"
            alt="Telos Digital Dashboard Mockup"
            className="w-full h-auto block"
          />
          {/* Blend bottom into background */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        </div>
        {/* Glow below image */}
        <div className="absolute -inset-4 z-[-1] mx-auto w-3/4 blur-3xl rounded-[3rem] bg-indigo-500/20" />
      </motion.div>
    </section>
  );
}
