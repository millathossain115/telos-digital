"use client";

import { useCalendly } from "@/components/CalendlyProvider";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import siteConfig from "@/data/siteConfig.json";
import { ArrowRight, Calendar, Clock, Mail, MapPin } from "lucide-react";

export function ContactCoordinates() {
  const { openCalendly } = useCalendly();

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      {/* Studio Coordinates Box */}
      <div className="group relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#F2E7DC] border border-[#E6DACD] ring-1 ring-inset ring-white/95 shadow-[0_10px_30px_rgba(20,19,18,0.04)] hover:shadow-[0_16px_40px_rgba(217,119,6,0.07)] hover:border-amber-500/40 transition-all duration-300 overflow-hidden space-y-3.5">
        {/* Top subtle hairline amber highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* Ambient corner backlight glow */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500" />
        <div className="pointer-events-none absolute -bottom-14 -left-14 w-36 h-36 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#141312]/[0.06]">
          <span className="text-xs font-mono text-[#141312]/60 uppercase tracking-wider font-semibold">
            Studio Details
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-900 flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {siteConfig.contact.sla}
          </span>
        </div>

        <div className="relative z-10 space-y-2">
          {/* Direct Email */}
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/70 hover:bg-white shadow-2xs hover:shadow-xs transition-all duration-200">
            <a
              href={`mailto:${siteConfig.contact.primaryEmail}`}
              className="flex-1 flex items-center gap-3 min-w-0"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-800 shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  Direct Inquiries
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#141312] hover:text-amber-800 transition-colors truncate">
                  {siteConfig.contact.primaryEmail}
                </div>
              </div>
            </a>
            <CopyEmailButton
              variant="pill"
              email={siteConfig.contact.primaryEmail}
            />
          </div>

          {/* Location */}
          <div className="group/item p-2.5 rounded-2xl bg-white/70 hover:bg-white shadow-2xs hover:shadow-xs transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-800 shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-200">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  Studio Headquarters
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#141312] leading-snug">
                  {siteConfig.contact.address.full}
                </div>
              </div>
            </div>
          </div>

          {/* Hotlines */}
          <div className="p-2.5 rounded-2xl bg-white/70 shadow-2xs space-y-1">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider px-0.5">
              Engineering Hotlines
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {siteConfig.contact.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="px-2.5 py-1.5 rounded-xl bg-[#FAF8F5]/80 text-xs font-mono font-semibold text-[#141312] hover:text-amber-800 hover:bg-white shadow-2xs hover:shadow-xs transition-all duration-200 flex items-center justify-center"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          {/* Cadence */}
          <div className="group/item flex items-center gap-3 p-2.5 rounded-2xl bg-white/70 hover:bg-white shadow-2xs hover:shadow-xs transition-all duration-200">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-800 shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-200">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Cadence
              </div>
              <div className="text-xs font-medium text-neutral-700 leading-tight">
                {siteConfig.contact.cadence}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Call Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-[#141312] text-white border border-black shadow-[0_16px_40px_rgba(20,19,18,0.38)] hover:shadow-[0_24px_60px_rgba(20,19,18,0.52)] hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125 group-hover:bg-amber-500/20" />

        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>Prefer to talk directly?</span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
          Book a 15-minute technical discovery call
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
          Have an existing codebase or tight milestone? Jump on a direct call
          with our lead architect.
        </p>

        <button
          type="button"
          onClick={() => openCalendly()}
          className="inline-flex items-center justify-center w-full py-3 px-5 rounded-xl bg-white text-[#141312] hover:bg-amber-400 hover:text-[#141312] font-semibold text-sm transition-all duration-200 gap-2 shadow-sm cursor-pointer">
          <span>Schedule on Calendly</span>
          <ArrowRight className="w-4 h-4 text-amber-700" />
        </button>
      </div>
    </div>
  );
}
