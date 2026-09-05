"use client";

import { Terminal, Code2, Lock, GitCommit } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { AboutPrinciple } from "@/types/about";

const ICON_MAP = {
  terminal: Terminal,
  code2: Code2,
  lock: Lock,
  gitCommit: GitCommit,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

interface AboutPrincipleCardProps {
  principle: AboutPrinciple;
  index: number;
}

export function AboutPrincipleCard({ principle, index }: AboutPrincipleCardProps) {
  const IconComponent = ICON_MAP[principle.icon as keyof typeof ICON_MAP] || Terminal;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="p-8 sm:p-10 rounded-3xl bg-[#F3EFEA] border border-black/[0.08] hover:border-amber-500/30 transition-all duration-300 relative group overflow-hidden shadow-[0_12px_36px_rgba(20,19,18,0.03)] flex flex-col justify-between"
    >
      {/* Subtle warm backlight on hover */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center text-amber-700 shadow-xs group-hover:scale-105 transition-transform">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 font-medium">
            {principle.tagline}
          </span>
        </div>

        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-xs font-mono text-amber-600 font-semibold">
            {principle.number}
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#141312] tracking-tight">
            {principle.title}
          </h3>
        </div>

        <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
          {principle.description}
        </p>
      </div>
    </motion.div>
  );
}
