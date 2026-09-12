"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Layers,
  Briefcase,
  GitMerge,
  Info,
  Home,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const BOTTOM_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Process", href: "/process", icon: GitMerge },
  { label: "About", href: "/about", icon: Info },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div
      role="navigation"
      aria-label="Mobile navigation bar"
      className="md:hidden fixed bottom-3 inset-x-0 z-40 flex justify-center px-4 pointer-events-none select-none"
    >
      <div className="relative w-full max-w-[380px] pointer-events-auto">
        {/* Soft Transparent Warm Amber/Gold Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-500/25 via-amber-400/20 to-amber-600/25 blur-xl -z-20 pointer-events-none opacity-80"
        />

        {/* Secondary subtle diffuse aura for deep spatial immersion */}
        <div
          aria-hidden="true"
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-amber-500/25 blur-2xl -z-20 pointer-events-none"
        />

        {/* Dock Shell */}
        <div className="w-full bg-[#141312]/85 backdrop-blur-2xl border border-white/10 rounded-full p-1.5 shadow-[0_16px_40px_-10px_rgba(20,19,18,0.5),0_0_0_1px_rgba(255,255,255,0.06)_inset] flex items-center justify-around gap-1 relative">
          {BOTTOM_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex flex-col items-center justify-center py-1.5 px-2 rounded-full transition-all duration-200 group flex-1 ${
                isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {/* Active Item Card: Pure Liquid Transparent Without Border */}
              {isActive && (
                <motion.span
                  layoutId="mobileNavActivePill"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-white/[0.08] backdrop-blur-md shadow-[0_2px_12px_rgba(255,255,255,0.08)_inset,0_4px_16px_rgba(0,0,0,0.3)] -z-10"
                />
              )}

              <div className="relative flex items-center justify-center">
                <Icon
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isActive
                      ? "text-amber-400 scale-110"
                      : "text-white/60 group-hover:text-white/90 group-hover:scale-105"
                  }`}
                />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.95)] animate-pulse" />
                )}
              </div>

              <span
                className={`text-[10px] tracking-tight font-medium mt-0.5 leading-none transition-colors ${
                  isActive
                    ? "font-semibold text-white"
                    : "text-white/60 group-hover:text-white/90"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
}
