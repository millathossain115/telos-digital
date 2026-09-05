"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { AboutPrincipleCard } from "@/components/AboutPrincipleCard";
import { AboutStandards } from "@/components/AboutStandards";
import aboutDataJson from "@/data/aboutData.json";
import type { AboutData } from "@/types/about";
import { Globe2, Sparkles, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const aboutData: AboutData = aboutDataJson as AboutData;

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        {/* Warm Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-28">
          {/* Section 1: Hero & Manifesto */}
          <motion.section
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Agency Manifesto // Why We Exist</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight sm:tracking-tighter text-[#141312] leading-[1.08] text-balance">
              Architectural discipline over <br className="hidden sm:inline" />
              <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                commodity headcount
              </span>
              .
            </h1>

            <p className="mt-7 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed text-pretty max-w-2xl mx-auto font-normal">
              Telos Digital was founded on a simple premise: modern software development has become too noisy, bloated, and disconnected from genuine engineering craftsmanship. We exist to fix that.
            </p>

            <div className="mt-8 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#F3EFEA] border border-black/[0.06] text-xs font-mono text-neutral-600 shadow-xs">
              <Globe2 className="w-4 h-4 text-amber-600" />
              <span>Studio: Madani Avenue, Dhaka, Bangladesh · Serving global teams across EST, CET, and GMT+6</span>
            </div>
          </motion.section>

          {/* Section 2: Core Engineering Standards Bar */}
          <AboutStandards standards={aboutData.standards} />

          {/* Section 3: Operating Principles (The Telos Standard) */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-black/[0.06]">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-4 shadow-xs font-medium">
                  The Telos Standard
                </div>
                <h2 className="text-3xl sm:text-5xl font-semibold text-[#141312] tracking-tight sm:tracking-tighter">
                  How we operate differently
                </h2>
              </div>
              <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed">
                Rules we live by to ensure every client receives exceptional code quality, total transparency, and rapid delivery velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {aboutData.principles.map((p, idx) => (
                <AboutPrincipleCard key={p.number} principle={p} index={idx} />
              ))}
            </div>
          </motion.section>

          {/* Section 4: Technical Leadership Note */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#FAF6F0] via-[#F4ECE2] to-[#E9DFD0] border border-amber-900/15 shadow-[0_16px_45px_rgba(30,20,10,0.06)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-mono uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{aboutData.quote.badge}</span>
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#141312] leading-relaxed text-pretty font-serif italic">
                “{aboutData.quote.text}”
              </blockquote>

              <div className="pt-6 border-t border-amber-900/10 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-[#141312] p-[1px] shadow-sm">
                  <div className="w-full h-full bg-[#141312] rounded-[11px] flex items-center justify-center font-bold text-amber-300 text-base">
                    T
                  </div>
                </div>
                <div>
                  <div className="text-base font-semibold text-[#141312]">
                    {aboutData.quote.author}
                  </div>
                  <div className="text-xs font-mono text-neutral-600">
                    {aboutData.quote.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Studio Coordinates & Direct Hotlines */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-[0_8px_30px_rgba(20,19,18,0.03)] relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-mono uppercase tracking-wider font-semibold">
                  <Globe2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Direct Engineering Studio</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#141312] tracking-tight">
                  Reach our engineering room
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  Drop by our Dhaka headquarters or contact our lead architects directly for project feasibility reviews.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 max-w-2xl">
                {/* Address */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.06] flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>Headquarters</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#141312] leading-snug">
                    Madani Avenue, Dhaka, Bangladesh
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.06] flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono">
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    <span>Direct Dispatch</span>
                  </div>
                  <a
                    href="mailto:telosdigital@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-[#141312] hover:text-amber-600 transition-colors underline decoration-amber-500/30 underline-offset-2 break-all"
                  >
                    telosdigital@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.06] flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Engineering Hotline</span>
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-mono font-semibold text-[#141312]">
                    <a href="tel:+8801618257217" className="hover:text-amber-600 transition-colors">
                      +880 1618-257217
                    </a>
                    <a href="tel:+8801610108851" className="hover:text-amber-600 transition-colors">
                      +880 1610-108851
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 6: Shared Conversion Banner Component */}
          <ConversionCtaBanner
            badge="Partner With Telos"
            title={
              <>
                Ready to build <br />
                <span className="text-amber-200">without compromise?</span>
              </>
            }
            subtitle="Schedule a 15-minute consultation to review your technical roadmap with our principal engineer."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
