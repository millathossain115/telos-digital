"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Calendar, ArrowRight, MessageSquare } from "lucide-react";
import { useCalendly } from "@/components/CalendlyProvider";

function InteractiveFooterTitle() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-16 pb-4 flex items-center justify-center select-none overflow-hidden w-full cursor-default group"
    >
      {/* Base Layer: Soft warm dark watermark with subtle ambient breathing pulse */}
      <motion.span
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.012, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="font-extrabold text-[10.2vw] leading-none tracking-tight sm:tracking-tighter text-white text-center uppercase whitespace-nowrap"
        style={{
          willChange: "opacity, transform",
          maskImage: "linear-gradient(to bottom, black 20%, rgba(0,0,0,0.3) 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, rgba(0,0,0,0.3) 65%, transparent 100%)",
        }}
      >
        Telos Digital
      </motion.span>

      {/* Spotlight Shimmer Reveal Layer (Dynamic Mask) */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center pt-16 pb-4"
        style={{
          maskImage: `radial-gradient(340px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(340px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 70%)`,
        }}
      >
        <span
          className="font-extrabold text-[10.2vw] leading-none tracking-tight sm:tracking-tighter text-transparent bg-clip-text text-center uppercase whitespace-nowrap drop-shadow-[0_0_28px_rgba(245,158,11,0.4)]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainBoost'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.25' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainBoost)' opacity='0.75'/%3E%3C/svg%3E"), linear-gradient(to right, #d97706, #fbbf24, #ffffff)`,
            backgroundBlendMode: "color-burn, normal",
          }}
        >
          Telos Digital
        </span>
      </motion.div>
    </div>
  );
}

export function Footer() {
  const { openCalendly } = useCalendly();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <footer
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#100F0E] text-neutral-400 border-t border-white/[0.08] pt-16 pb-24 md:pb-12 relative overflow-hidden"
    >
      {/* Dynamic ambient cursor spotlight on dark footer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 119, 6, 0.08), transparent 70%)`,
        }}
      />

      {/* Subtle top warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-amber-500/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-[#141312] p-[1px]">
                <div className="w-full h-full bg-[#141312] rounded-[11px] flex items-center justify-center">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white text-lg">
                    T
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TELOS <span className="text-amber-500 font-medium">DIGITAL</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Enterprise cloud, AI systems, and digital engineering.
            </p>

            {/* Direct Studio Contact Info */}
            <div className="pt-2 space-y-2.5 text-xs font-mono">
              <div className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Madani Avenue, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="mailto:telosdigitalofficial@gmail.com"
                  className="hover:text-amber-400 transition-colors font-medium underline decoration-amber-500/40 underline-offset-4"
                >
                  telosdigitalofficial@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-neutral-300">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="tel:+8801618257217"
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  +880 1618-257217
                </a>
                <span className="text-neutral-600">/</span>
                <a
                  href="tel:+8801610108851"
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  +880 1610-108851
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-neutral-400 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-amber-400 hover:border-amber-500/40 hover:bg-white/[0.08] transition-all shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-amber-400 hover:border-amber-500/40 hover:bg-white/[0.08] transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-amber-400 hover:border-amber-500/40 hover:bg-white/[0.08] transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801618257217"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.004 0C5.373 0 0 5.373 0 12c0 2.119.555 4.11 1.524 5.839L.004 24l6.335-1.501C8.01 23.444 9.957 24 12.004 24 18.631 24 24 18.627 24 12c0-6.627-5.369-12-11.996-12zm0 22.025c-1.854 0-3.606-.511-5.112-1.399l-.366-.215-3.793.899.914-3.69-.239-.38A9.972 9.972 0 0 1 2.02 12c0-5.505 4.479-9.985 10.005-9.985 5.505 0 9.985 4.48 9.985 9.985 0 5.525-4.48 10.025-10.006 10.025zm5.485-7.465c-.301-.15-1.78-.878-2.056-.979-.276-.101-.476-.15-.677.15-.201.3-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.676-2.086-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.3.302-.501.1-.2.05-.376-.026-.526-.075-.151-.677-1.631-.928-2.238-.244-.592-.493-.51-.678-.52l-.577-.01c-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.482 1.08 2.91 1.23 3.111.151.2 2.127 3.248 5.152 4.555.72.31 1.282.496 1.72.636.724.23 1.382.197 1.902.12.58-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.175-1.431-.075-.126-.276-.201-.577-.351z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#web-saas" className="hover:text-amber-400 transition-colors">Web &amp; SaaS Platforms</Link></li>
              <li><Link href="/services#mobile" className="hover:text-amber-400 transition-colors">Mobile Engineering</Link></li>
              <li><Link href="/services#ui-ux" className="hover:text-amber-400 transition-colors">UI/UX &amp; Design Systems</Link></li>
              <li><Link href="/services#mvp" className="hover:text-amber-400 transition-colors">MVP Accelerator</Link></li>
              <li><Link href="/services#engagement" className="hover:text-amber-400 transition-colors">Dedicated Retainers</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">Agency Manifesto</Link></li>
              <li><Link href="/work" className="hover:text-amber-400 transition-colors">Proven Work</Link></li>
              <li><Link href="/process" className="hover:text-amber-400 transition-colors">How We Ship</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Direct Consultation</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Consultation CTA (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase">
                  Direct Principal Access
                </h4>
              </div>
              <p className="text-xs text-neutral-300 mb-4 leading-relaxed font-normal">
                Book a 30-min architectural session or message directly on WhatsApp. Response within 2 hours.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => openCalendly()}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-[#141312] rounded-lg text-[11px] font-semibold tracking-tight transition-all cursor-pointer font-mono"
              >
                <Calendar className="w-3 h-3 shrink-0" />
                <span>Book Architecture Call</span>
                <ArrowRight className="w-3 h-3 shrink-0" />
              </button>

              <a
                href="https://wa.me/8801618257217"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-white/[0.04] hover:bg-white/[0.08] text-white/90 border border-white/[0.08] hover:border-emerald-500/40 rounded-lg text-[11px] font-medium transition-all"
              >
                <MessageSquare className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>WhatsApp Direct Intake</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} Telos Digital. Built with architectural discipline. All rights reserved.</p>
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Normal // Dhaka, BD</span>
          </div>
        </div>

        {/* Thematic Big Brand Title with Spotlight Reveal */}
        <InteractiveFooterTitle />
      </div>
    </footer>
  );
}
