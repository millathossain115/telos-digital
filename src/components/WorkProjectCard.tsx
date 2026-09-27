"use client";

import type { WorkProject } from "@/types/work";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface WorkProjectCardProps {
  project: WorkProject;
  index: number;
}

export function WorkProjectCard({ project, index }: WorkProjectCardProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "challenge" | "specs"
  >("overview");
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative rounded-3xl border border-[#E6DACD] bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#F2E7DC] shadow-[0_12px_36px_rgba(20,19,18,0.04)] ring-1 ring-inset ring-white/95 hover:shadow-[0_20px_50px_rgba(217,119,6,0.08)] hover:border-amber-500/40 transition-all duration-400 overflow-hidden">
      {/* Hairline amber accent top stroke */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Internal Grid Layout - Compact spacing */}
      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-6 lg:p-7 items-center`}>
        {/* Visual Interactive Column (7 cols) */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          {/* Metadata pill row */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              {project.inHouseProduct ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500 text-[#141210] shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                  <Sparkles className="w-3 h-3 fill-[#141210]" />
                  IN-HOUSE
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide uppercase bg-amber-500/10 text-amber-900 border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-[#141312]/50 font-semibold">
                / {project.year}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/90 text-[#141312]/80 border border-[#E6DACD]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </span>
          </div>

          {/* Project Media Stage with 16:9 studio mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E6DACD] bg-stone-100/40 shadow-sm aspect-[16/9] group-hover:border-amber-500/40 transition-colors duration-400">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              priority={index < 2}
            />

            {/* Subtle bottom vignette to ensure terminal pill legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/75 via-transparent to-transparent opacity-65 group-hover:opacity-45 transition-opacity duration-400 pointer-events-none" />

            {/* Live Link floating trigger */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-[#141312] text-[11px] font-mono font-semibold tracking-wider shadow-sm border border-[#141312]/10 hover:border-amber-600 hover:text-amber-900 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm z-20">
              <span>EXPLORE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
            </a>

            {/* Architecture Highlight overlay badge */}
            <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-[#141312]/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs z-10">
              <div className="flex items-center gap-2 truncate">
                <Terminal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-[10px] text-white/90 truncate">
                  {project.architectureHighlight}
                </span>
              </div>
            </div>
          </div>

          {/* Metric telemetry strip - Compact */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3.5 border-t border-[#E6DACD]">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="px-2.5 py-1.5 rounded-lg bg-white/80 border border-[#E6DACD]/80 shadow-2xs hover:border-amber-500/30 transition-colors">
                <div className="text-[9px] font-mono text-[#141312]/55 uppercase tracking-wider">
                  {m.label}
                </div>
                <div className="text-sm sm:text-base font-bold font-mono text-[#141312] tracking-tight">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right / Information & Case Anatomy (5 cols) */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between self-stretch ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div>
            {/* Client and Title */}
            <div className="text-[11px] font-mono font-bold tracking-wider text-amber-800 uppercase mb-1">
              {project.client}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#141312] tracking-tight leading-snug mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-[13px] text-[#141312]/75 leading-relaxed font-sans mb-3.5 line-clamp-2">
              {project.tagline}
            </p>

            {/* Interactive Tab Selector with active indicator pill */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/[0.04] border border-[#E6DACD] mb-3">
              {(["overview", "challenge", "specs"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 py-1 px-2 rounded-md text-[11px] font-mono font-medium transition-all ${
                    activeTab === tab
                      ? "text-[#141312] font-semibold"
                      : "text-[#141312]/60 hover:text-[#141312]"
                  }`}>
                  {activeTab === tab && (
                    <motion.div
                      layoutId={`active-tab-${project.id}`}
                      className="absolute inset-0 bg-white rounded-md shadow-2xs border border-[#E6DACD]"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </span>
                </button>
              ))}
            </div>

            {/* Interactive Tab Body - Compact */}
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-2.5 text-xs text-[#141312]/80 leading-relaxed">
                  <p className="line-clamp-2">{project.summary}</p>
                  <div>
                    <span className="text-[10px] font-mono text-[#141312]/60 uppercase tracking-wider block mb-1.5 font-bold">
                      Deliverables:
                    </span>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-center gap-1.5 text-[11px] font-medium text-[#141312]/90 truncate">
                          <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "challenge" && (
                <motion.div
                  key="challenge"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[#141312]/90 shadow-2xs">
                    <div className="font-mono text-[10px] font-bold text-amber-800 uppercase mb-0.5">
                      Problem Context
                    </div>
                    <p className="leading-snug text-[11px] line-clamp-2">{project.challenge}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/85 border border-[#E6DACD] text-[#141312]/90 shadow-2xs">
                    <div className="font-mono text-[10px] font-bold text-[#141312] uppercase mb-0.5">
                      Solution
                    </div>
                    <p className="leading-snug text-[11px] line-clamp-2">{project.solution}</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "specs" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#141312]/60 uppercase tracking-wider block mb-1 font-bold">
                      Stack
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white border border-[#E6DACD] text-[11px] font-mono font-medium text-[#141312] shadow-2xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/85 border border-[#E6DACD] text-xs font-mono space-y-0.5 shadow-2xs">
                    <div className="text-[#141312]/50 text-[9px] uppercase">
                      Architecture
                    </div>
                    <div className="font-semibold text-[#141312] text-[11px] truncate">
                      {project.architectureHighlight}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Row - Streamlined */}
          <div className="mt-4 pt-3.5 border-t border-[#E6DACD] flex items-center justify-between gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#141312] text-white font-mono text-[11px] font-semibold tracking-wide hover:bg-amber-600 transition-all shadow-sm active:scale-95">
              <span>LAUNCH LIVE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#141312]/70 hover:text-amber-800 font-semibold transition-colors">
              <span>Build similar</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
