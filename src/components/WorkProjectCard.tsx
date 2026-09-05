"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight, Cpu, Layers, Sparkles, Terminal } from "lucide-react";
import type { WorkProject } from "@/types/work";

interface WorkProjectCardProps {
  project: WorkProject;
  index: number;
}

export function WorkProjectCard({ project, index }: WorkProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "challenge" | "specs">("overview");
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-[#141312]/10 bg-[#FAF8F5]/90 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Subtle top indicator bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500/30 via-amber-500 to-amber-600/40 opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Internal Grid Layout */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-stretch`}>
        {/* Left / Visual Interactive Column (7 cols) */}
        <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          {/* Metadata pill row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-amber-500/10 text-amber-800 border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#141312]/50 font-semibold">
                / {project.year}
              </span>
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#141312]/5 text-[#141312]/70 border border-[#141312]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </span>
          </div>

          {/* Project Media Stage with Spatial Hover */}
          <div className="relative rounded-2xl overflow-hidden border border-[#141312]/10 bg-[#141312]/5 shadow-inner aspect-[16/10] group-hover:border-amber-500/40 transition-colors duration-500">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              priority={index < 2}
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Live Link floating trigger */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF8F5]/95 hover:bg-white text-[#141312] text-xs font-mono font-semibold tracking-wider shadow-lg border border-[#141312]/15 hover:border-amber-600 transition-all hover:scale-105 active:scale-95"
            >
              <span>EXPLORE LIVE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
            </a>

            {/* Architecture Highlight overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#141312]/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 truncate">
                <Terminal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-[11px] text-white/90 truncate">
                  {project.architectureHighlight}
                </span>
              </div>
            </div>
          </div>

          {/* Metric telemetry strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-[#141312]/10">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/70 border border-[#141312]/5 shadow-sm"
              >
                <div className="text-[11px] font-mono text-[#141312]/60 uppercase tracking-wider mb-1">
                  {m.label}
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-[#141312] tracking-tight">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right / Information & Case Anatomy (5 cols) */}
        <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div>
            {/* Client and Title */}
            <div className="mb-2 text-xs font-mono font-semibold tracking-wider text-amber-700 uppercase">
              {project.client}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141312] tracking-tight leading-snug mb-3">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#141312]/80 leading-relaxed font-sans mb-6">
              {project.tagline}
            </p>

            {/* Interactive Tab Selector */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#141312]/5 border border-[#141312]/10 mb-5">
              {(["overview", "challenge", "specs"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeTab === tab
                      ? "bg-white text-[#141312] shadow-sm font-semibold border border-[#141312]/10"
                      : "text-[#141312]/60 hover:text-[#141312]"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Interactive Tab Body */}
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 text-xs sm:text-sm text-[#141312]/80 leading-relaxed"
                >
                  <p>{project.summary}</p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#141312]/60 uppercase tracking-wider block mb-2 font-semibold">
                      Key Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {project.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs font-medium text-[#141312]/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "challenge" && (
                <motion.div
                  key="challenge"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 text-xs sm:text-sm"
                >
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#141312]/90">
                    <div className="font-mono text-[11px] font-bold text-amber-800 uppercase mb-1">
                      Problem Context
                    </div>
                    <p className="leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#141312]/5 border border-[#141312]/10 text-[#141312]/90">
                    <div className="font-mono text-[11px] font-bold text-[#141312] uppercase mb-1">
                      Architectural Solution
                    </div>
                    <p className="leading-relaxed">{project.solution}</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "specs" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-[11px] font-mono text-[#141312]/60 uppercase tracking-wider block mb-2 font-semibold">
                      Production Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-[#141312]/10 text-xs font-mono font-medium text-[#141312]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#141312]/10 text-xs font-mono space-y-1">
                    <div className="text-[#141312]/50 text-[10px] uppercase">Infrastructure</div>
                    <div className="font-bold text-[#141312]">{project.architectureHighlight}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-[#141312]/10 flex items-center justify-between gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141312] text-white font-mono text-xs font-semibold tracking-wide hover:bg-amber-600 transition-colors shadow-md active:scale-95"
            >
              <span>LAUNCH LIVE PLATFORM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#141312]/70 hover:text-amber-700 font-semibold transition-colors"
            >
              <span>Build similar</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
