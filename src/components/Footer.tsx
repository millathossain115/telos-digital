"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

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
      {/* Base Layer: Soft warm dark watermark blended to bottom */}
      <span
        className="font-extrabold text-[10.2vw] leading-none tracking-tight sm:tracking-tighter text-white/[0.06] text-center uppercase whitespace-nowrap transition-colors duration-500"
        style={{
          maskImage: "linear-gradient(to bottom, black 20%, rgba(0,0,0,0.3) 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, rgba(0,0,0,0.3) 65%, transparent 100%)",
        }}
      >
        Telos Digital
      </span>

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
  return (
    <footer className="bg-[#100F0E] text-neutral-400 border-t border-white/[0.08] pt-16 pb-12 relative overflow-hidden">
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
                  href="mailto:telosdigital@gmail.com"
                  className="hover:text-amber-400 transition-colors font-medium underline decoration-amber-500/40 underline-offset-4"
                >
                  telosdigital@gmail.com
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
                  <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.175.2-.3.301-.5.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.244-.589-.493-.509-.678-.519l-.578-.01c-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.512c0 1.482 1.08 2.912 1.23 3.113.15.2 2.126 3.246 5.15 4.553.72.31 1.282.496 1.72.636.724.23 1.382.197 1.902.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.432-.076-.125-.276-.2-.577-.35zm-5.421 7.403c-2.006 0-3.968-.539-5.69-1.56l-.408-.242-4.224 1.108 1.127-4.118-.266-.423c-1.121-1.784-1.713-3.856-1.713-5.978 0-6.16 5.013-11.172 11.174-11.172 2.984 0 5.789 1.162 7.898 3.272s3.272 4.914 3.272 7.899c0 6.161-5.012 11.172-11.17 11.172zm9.516-20.688c-2.542-2.544-5.922-3.945-9.516-3.945-7.414 0-13.447 6.033-13.447 13.447 0 2.37.618 4.683 1.792 6.721l-1.903 6.953 7.114-1.865c1.97 1.074 4.195 1.639 6.444 1.639 7.415 0 13.447-6.033 13.447-13.447 0-3.593-1.399-6.973-3.941-9.518z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">Cloud Migration</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">AI & Automation</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">DevOps Pipeline</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">Data Analytics</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-amber-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/process" className="hover:text-amber-400 transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Quick Touch (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Engineering Dispatch</h4>
            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              Bi-weekly technical essays on cloud scalability, distributed architecture, and AI infrastructure.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter work email"
                className="w-full bg-white/[0.05] border border-white/[0.12] rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
              />
              <button className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-[#141312] rounded-lg text-xs font-semibold shadow-sm hover:shadow-amber-500/20 transition-all cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Telos Digital Inc. Madani Avenue, Dhaka. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Security</a>
          </div>
        </div>

        {/* Thematic Big Brand Title with Spotlight Reveal */}
        <InteractiveFooterTitle />
      </div>
    </footer>
  );
}
