"use client";

import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { AboutPrincipleCard } from "@/components/AboutPrincipleCard";
import { AboutStandards } from "@/components/AboutStandards";
import aboutDataJson from "@/data/aboutData.json";
import type { AboutData } from "@/types/about";
import { Globe2, Sparkles, MapPin, Mail, Phone, ArrowUpRight, Cpu, Layers, Check, X, Terminal, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";

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
  const comparisonSectionRef = useRef<HTMLElement>(null);
  const [isComparisonHovered, setIsComparisonHovered] = useState(false);

  // Smooth springs for golden cursor follower & spotlight
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 220, mass: 0.2 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 220, mass: 0.2 });

  function handleComparisonMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!comparisonSectionRef.current) return;
    const rect = comparisonSectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20 relative overflow-hidden">
        {/* Warm Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full opacity-25 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
          {/* Section 1: Hero & Manifesto */}
          <motion.section
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-black/[0.08] text-amber-800 text-xs font-mono uppercase tracking-wider mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Agency Manifesto // Why We Exist</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#141312] leading-[1.08] text-balance">
              Architectural discipline over{" "}
              <span className="italic font-serif font-light text-amber-700 underline decoration-amber-500/40 decoration-wavy underline-offset-8">
                commodity headcount
              </span>
              .
            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Telos Digital was founded on a singular conviction: modern software development has become too noisy, bloated, and disconnected from genuine engineering craftsmanship. We build lean, high-velocity engines.
            </p>

            {/* Direct Dual Action Row */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141210] text-white font-mono text-xs font-semibold tracking-wider hover:bg-amber-600 transition-all shadow-md active:scale-95"
              >
                <span>EXPLORE PRODUCTION WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 hover:bg-white text-[#141312] font-mono text-xs font-semibold tracking-wider transition-all border border-black/[0.08] shadow-2xs hover:border-amber-500/30"
              >
                <span>HOW WE DELIVER</span>
              </Link>
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
            className="space-y-10"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-5 border-b border-[#C8BCAC]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
                  The Telos Standard
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141312] tracking-tight">
                  How we operate differently
                </h2>
              </div>
              <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed font-normal">
                Rules we live by to ensure every partner receives exceptional code quality, total transparency, and rapid delivery velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {aboutData.principles.map((p, idx) => (
                <AboutPrincipleCard key={p.number} principle={p} index={idx} />
              ))}
            </div>
          </motion.section>
        </div>

        {/* Section 4: The Anti-Agency Model (Full-Width Edge-to-Edge Obsidian Cockpit) */}
        <section
          ref={comparisonSectionRef}
          onMouseMove={handleComparisonMouseMove}
          onMouseEnter={() => setIsComparisonHovered(true)}
          onMouseLeave={() => setIsComparisonHovered(false)}
          className="w-full mt-16 sm:mt-20 relative border-y border-[#B8AA98] bg-[#141210] text-[#FAF7F2] overflow-hidden shadow-[0_10px_30px_rgba(20,19,18,0.06)] cursor-default"
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
              opacity: isComparisonHovered ? 0.28 : 0,
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
              opacity: isComparisonHovered ? 1 : 0,
            }}
          />

          {/* Subtle blueprint grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Ambient directional glows */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
            {/* Header with high-visibility divider */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/20 mb-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>The Anti-Agency Thesis</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Traditional Agencies vs.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 whitespace-nowrap">
                    Telos Digital
                  </span>
                </h2>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed lg:text-right shrink-0">
                Why modern founders avoid bloated retainers and junior outsourcing in favor of our senior architecture group.
              </p>
            </div>

            {/* Vertically Compact Comparison Matrix */}
            <div className="space-y-3.5">
              {(aboutData.comparisonRows || []).map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/40 transition-all items-center shadow-xs"
                >
                  {/* Criterion */}
                  <div className="md:col-span-3 text-xs sm:text-sm font-mono font-bold text-amber-300 flex items-center gap-2">
                    <span className="text-[10px] text-neutral-500 font-mono">0{idx + 1}{" //"}</span>
                    <span>{row.criterion}</span>
                  </div>

                  {/* Traditional Agency Flaw */}
                  <div className="md:col-span-4 flex items-center gap-2.5 text-xs text-rose-300/90 p-3 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <X className="w-4 h-4 text-rose-400 shrink-0" />
                    <span className="line-through decoration-rose-400/60 font-medium">
                      {row.traditional}
                    </span>
                  </div>

                  {/* Telos Advantage */}
                  <div className="md:col-span-5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white p-3 rounded-xl bg-amber-500/15 border border-amber-500/35 shadow-xs">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="tracking-tight text-white">{row.telos}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Studio Coordinates Architectural Showroom (Full-Width Edge-to-Edge - Seamless Blend into CTA) */}
        <section className="w-full relative bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#FAF8F5] text-[#141312] overflow-hidden pb-12 sm:pb-16 pt-16 sm:pt-24">
          {/* Subtle architectural dot grid */}
          <div 
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #b45309 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Ambient directional glow */}
          <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Heading & Live Status */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 font-mono text-xs font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-amber-700" />
                  <span>DIRECT ENGINEERING STUDIO</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141312] leading-[1.12]">
                  Reach our Dhaka Studio &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800">
                    Global Architecture Team.
                  </span>
                </h2>

                <p className="text-[#141312]/75 text-sm sm:text-base font-normal leading-relaxed">
                  No junior liaisons or agency telephone games. Speak directly with our principal software architects for immediate technical evaluation and sprint planning.
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#141312]/70 font-semibold">
                  <Globe2 className="w-4 h-4 text-amber-700" />
                  <span>Serving Global Teams: EST (US) · CET (EU) · GMT+6 (Asia)</span>
                </div>
              </div>

              {/* Right Column: 3 High-Impact Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Location */}
                <div className="p-6 rounded-2xl bg-white/90 border border-black/[0.08] hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-5 shadow-2xs group/card">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-700 group-hover/card:scale-105 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#141312]/50 uppercase tracking-wider font-semibold">HQ</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-amber-700 font-bold mb-1">HEADQUARTERS</div>
                    <div className="text-sm font-bold text-[#141312] leading-snug">
                      Madani Avenue, Dhaka, Bangladesh
                    </div>
                  </div>
                </div>

                {/* Email Dispatch */}
                <div className="p-6 rounded-2xl bg-white/90 border border-black/[0.08] hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-5 shadow-2xs group/card">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-700 group-hover/card:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#141312]/50 uppercase tracking-wider font-semibold">Dispatch</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-amber-700 font-bold mb-1">DIRECT INBOX</div>
                    <a
                      href="mailto:telosdigital@gmail.com"
                      className="text-xs sm:text-sm font-bold text-[#141312] hover:text-amber-700 transition-colors underline decoration-amber-500/40 underline-offset-4 break-all block"
                    >
                      telosdigital@gmail.com
                    </a>
                  </div>
                </div>

                {/* Direct Hotlines */}
                <div className="p-6 rounded-2xl bg-white/90 border border-black/[0.08] hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-5 shadow-2xs group/card">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-700 group-hover/card:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#141312]/50 uppercase tracking-wider font-semibold">Hotlines</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-amber-700 font-bold mb-1">DIRECT ARCHITECT</div>
                    <div className="flex flex-col gap-1 text-xs font-mono font-bold text-[#141312]">
                      <a href="tel:+8801618257217" className="hover:text-amber-700 transition-colors">
                        +880 1618-257217
                      </a>
                      <a href="tel:+8801610108851" className="hover:text-amber-700 transition-colors">
                        +880 1610-108851
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Seamless Blended Conversion CTA */}
        <ConversionCtaBanner
          className="pt-4 pb-20 sm:pb-28 relative bg-[#FAF8F5]"
          badge="Direct Engineering Consult"
          title={
            <>
              Ready to build <br />
              <span className="text-amber-200">without compromise?</span>
            </>
          }
          subtitle="Schedule a 15-minute consultation to review your technical roadmap with our principal engineer."
        />
      </main>

      <Footer />
    </div>
  );
}

