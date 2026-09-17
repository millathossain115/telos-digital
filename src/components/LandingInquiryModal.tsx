"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Sparkles, RefreshCw, ArrowRight } from "lucide-react";

interface SlideData {
  badge: string;
  badgeColor: string;
  icon: typeof Sparkles;
  headline: string;
  highlight: string;
  subtext: string;
  buttonLabel: string;
  targetHref: string;
}

const SLIDES: SlideData[] = [
  {
    badge: "0 → 1 Architecture",
    badgeColor: "bg-amber-500/10 text-amber-800 border-amber-500/20",
    icon: Sparkles,
    headline: "Have a project idea",
    highlight: "ready to bring to life?",
    subtext:
      "Turn your concept into a production-grade web application, MVP, or mobile platform with disciplined engineering and zero guesswork.",
    buttonLabel: "Discuss Your Project Idea",
    targetHref: "/contact?intent=new-project",
  },
  {
    badge: "Scale & Modernize",
    badgeColor: "bg-emerald-500/10 text-emerald-800 border-emerald-500/20",
    icon: RefreshCw,
    headline: "Already have a live product",
    highlight: "that needs an upgrade?",
    subtext:
      "Solve performance bottlenecks, modernize UI/UX architecture, eliminate technical debt, and prepare your tech stack to scale seamlessly.",
    buttonLabel: "Modernize Existing Product",
    targetHref: "/contact?intent=existing-upgrade",
  },
];

export function LandingInquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-open on landing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Hands-free auto-switching carousel (every 4.5 seconds)
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const currentSlide = SLIDES[currentIndex];
  const IconComponent = currentSlide.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Subtle Warm Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#12100E]/45 backdrop-blur-md"
          />

          {/* Minimal Floating Hook Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[440px] bg-[#FAF8F5] rounded-3xl border border-[#E7DFD4] shadow-[0_30px_90px_-20px_rgba(35,25,18,0.28),0_0_0_1px_rgba(255,255,255,0.9)_inset] p-7 sm:p-8 text-[#141312] overflow-hidden z-10"
          >
            {/* Ambient Background Warm Radial Glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 bg-amber-400/20 rounded-full blur-2xl transition-all duration-700" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-amber-600/10 rounded-full blur-2xl" />

            {/* Micro Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-neutral-500 hover:text-black flex items-center justify-center transition-all cursor-pointer border border-black/[0.04] z-20"
              aria-label="Close dialog"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Progress Micro-Bar indicating Hands-Free Auto-Rotation */}
            <div className="flex items-center gap-1.5 mb-6 pr-8">
              {SLIDES.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 rounded-full flex-1 overflow-hidden bg-black/[0.06]"
                >
                  {idx === currentIndex ? (
                    <motion.div
                      key={`progress-${currentIndex}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4.5, ease: "linear" }}
                      className="h-full bg-amber-600 rounded-full"
                    />
                  ) : (
                    <div
                      className={`h-full ${
                        idx < currentIndex ? "bg-amber-600/50" : "bg-transparent"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Animated Content Crossfade Container */}
            <div className="relative min-h-[190px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3.5"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span className={currentSlide.badgeColor.replace(/bg-\S+/, "")}>
                      {currentSlide.badge}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-[26px] font-semibold tracking-tight text-[#141312] leading-[1.18]">
                    {currentSlide.headline}{" "}
                    <span className="text-amber-700 italic font-serif font-normal">
                      {currentSlide.highlight}
                    </span>
                  </h3>

                  {/* Hook Subtext */}
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                    {currentSlide.subtext}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Strip: No forms, Direct Navigation Button */}
            <div className="pt-6 mt-4 border-t border-black/[0.06] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors font-mono cursor-pointer"
              >
                Skip
              </button>

              <Link
                href={currentSlide.targetHref}
                onClick={handleClose}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#141312] hover:bg-amber-600 text-white font-medium text-xs shadow-md hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-sans"
              >
                <span>{currentSlide.buttonLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
