"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactCoordinates } from "@/components/ContactCoordinates";
import { ProjectIntakeForm } from "@/components/ProjectIntakeForm";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Warm ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>Direct Engineering Intake</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight sm:tracking-tighter text-[#141312] leading-[1.08] text-balance">
                Let’s build something{" "}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                  uncompromising
                </span>
                .
              </h1>

              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed text-pretty max-w-2xl">
                Tell us about your product goals, constraints, and timeline. You’ll speak directly with our principal engineers—zero sales fluff.
              </p>
            </motion.div>

            {/* 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              {/* Left Column: Coordinates + Calendly Direct Call */}
              <motion.div variants={itemVariants} className="lg:col-span-5 h-full">
                <ContactCoordinates />
              </motion.div>

              {/* Right Column: 3-Field Intake Form */}
              <motion.div variants={itemVariants} className="lg:col-span-7 h-full">
                <ProjectIntakeForm
                  recipientEmail="millathossain115@gmail.com"
                  displayEmail="telosdigitalofficial@gmail.com"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
