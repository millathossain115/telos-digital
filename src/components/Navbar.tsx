"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(20,19,18,0.03)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Monogram Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-[#141312] p-[1px] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#141312] rounded-[11px] flex items-center justify-center">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white text-lg">
                T
              </span>
            </div>
          </div>
          <span className="text-lg font-bold tracking-tight text-[#141312] flex items-center gap-1.5">
            TELOS <span className="text-amber-600 font-medium text-base tracking-normal">DIGITAL</span>
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 border border-black/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-black px-3.5 py-1.5 rounded-full transition-colors hover:bg-black/[0.04]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Primary Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#141312] hover:bg-black rounded-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 gap-2"
          >
            <span>Let&apos;s Talk</span>
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M3 12h18" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-black hover:bg-black/[0.05] focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5]/98 border-b border-black/[0.08] backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-3 duration-200 shadow-xl shadow-black/5">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:bg-black/[0.04] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 flex flex-col">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#141312] text-white font-semibold text-sm shadow-md gap-2 transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M3 12h18" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
