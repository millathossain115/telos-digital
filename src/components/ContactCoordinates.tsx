"use client";

import { Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { useCalendly } from "@/components/CalendlyProvider";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import siteConfig from "@/data/siteConfig.json";

export function ContactCoordinates() {
  const { openCalendly } = useCalendly();

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      {/* Studio Coordinates Box */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[#F3EFEA] border border-black/[0.08] shadow-[0_8px_30px_rgba(20,19,18,0.08)] hover:shadow-[0_20px_50px_rgba(20,19,18,0.14)] hover:border-amber-900/25 transition-all duration-300 space-y-3.5">
        <div className="flex items-center justify-between pb-3 border-b border-black/[0.07]">
          <span className="text-xs font-mono text-neutral-600 uppercase tracking-wider font-medium">
            Studio Details
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {siteConfig.contact.sla}
          </span>
        </div>

        <div className="space-y-2">
          {/* Direct Email */}
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white border border-black/[0.06] hover:border-amber-500/40 hover:shadow-md transition-all duration-200">
            <a
              href={`mailto:${siteConfig.contact.primaryEmail}`}
              className="flex-1 flex items-center gap-3 min-w-0"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-neutral-500">Direct Inquiries</div>
                <div className="text-xs sm:text-sm font-semibold text-[#141312] hover:text-amber-800 transition-colors truncate">
                  {siteConfig.contact.primaryEmail}
                </div>
              </div>
            </a>
            <CopyEmailButton variant="pill" email={siteConfig.contact.primaryEmail} />
          </div>

          {/* Location */}
          <div className="group p-2.5 rounded-2xl bg-white border border-black/[0.06] hover:border-amber-500/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-200">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500">Studio Headquarters</div>
                <div className="text-xs sm:text-sm font-semibold text-[#141312] leading-snug">
                  {siteConfig.contact.address.full}
                </div>
              </div>
            </div>
          </div>

          {/* Hotlines */}
          <div className="p-2.5 rounded-2xl bg-white border border-black/[0.06] shadow-xs space-y-1">
            <div className="text-[10px] font-mono text-neutral-500 px-1">Engineering Hotlines</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {siteConfig.contact.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="px-2.5 py-1.5 rounded-xl bg-[#FAF8F5] border border-black/[0.06] text-xs font-mono font-semibold text-[#141312] hover:text-amber-800 hover:border-amber-500/40 hover:bg-white hover:shadow-xs transition-all duration-200 flex items-center justify-center"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          {/* Cadence */}
          <div className="group flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-black/[0.06] hover:border-amber-500/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-200">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-500">Cadence</div>
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
          Have an existing codebase or tight milestone? Jump on a direct call with our lead architect.
        </p>

        <button
          type="button"
          onClick={() => openCalendly()}
          className="inline-flex items-center justify-center w-full py-3 px-5 rounded-xl bg-white text-[#141312] hover:bg-amber-400 hover:text-[#141312] font-semibold text-sm transition-all duration-200 gap-2 shadow-sm cursor-pointer"
        >
          <span>Schedule on Calendly</span>
          <ArrowRight className="w-4 h-4 text-amber-700" />
        </button>
      </div>
    </div>
  );
}
