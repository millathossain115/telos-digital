import { Terminal, Globe2, MapPin, Mail, Phone } from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function AboutStudioShowroom() {
  return (
    <section className="w-full relative bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#FAF8F5] text-[#141312] overflow-hidden pb-12 sm:pb-16 pt-16 sm:pt-24">
      {/* Subtle architectural dot grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #b45309 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Ambient directional glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Heading & Live Status */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 font-mono text-xs font-semibold">
              <Terminal className="w-3.5 h-3.5 text-amber-700" />
              <span>DIRECT ENGINEERING STUDIO</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141312] leading-[1.12]">
              Reach our Dhaka Studio &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800">
                Global Architecture Team.
              </span>
            </h2>

            <p className="text-[#141312]/75 text-sm sm:text-base font-normal leading-relaxed">
              No junior liaisons or agency telephone games. Speak directly with our principal software architects for immediate technical evaluation and sprint planning.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#141312]/70 font-semibold">
              <Globe2 className="w-4 h-4 text-amber-700" />
              <span>Serving Global Teams: EST (US) · CET (EU) · GMT+6 (Asia)</span>
            </div>
          </div>

          {/* Right Column: 3 High-Impact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Location */}
            <div className="p-6 rounded-2xl bg-white/90 border border-black/[0.08] hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-5 shadow-2xs group/card">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-700 group-hover/card:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#141312]/50 uppercase tracking-wider font-semibold">
                  HQ
                </span>
              </div>
              <div>
                <div className="text-[11px] font-mono text-amber-700 font-bold mb-1">
                  HEADQUARTERS
                </div>
                <div className="text-sm font-bold text-[#141312] leading-snug">
                  Madani Avenue, Dhaka, Bangladesh
                </div>
              </div>
            </div>

            {/* Email Dispatch */}
            <div className="p-6 rounded-2xl bg-white/90 border border-black/[0.08] hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-5 shadow-2xs group/card">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-700 group-hover/card:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-[#141312]/50 uppercase tracking-wider font-semibold">
                    Dispatch
                  </span>
                  <CopyEmailButton variant="pill" email="telosdigitalofficial@gmail.com" />
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-amber-700 font-bold mb-1">
                  DIRECT INBOX
                </div>
                <a
                  href="mailto:telosdigitalofficial@gmail.com"
                  className="text-xs sm:text-sm font-bold text-[#141312] hover:text-amber-700 transition-colors underline decoration-amber-500/40 underline-offset-4 break-all block"
                >
                  telosdigitalofficial@gmail.com
                </a>
              </div>
            </div>

            {/* Direct Hotlines */}
            <div className="p-6 rounded-2xl bg-white/90 border border-black/[0.08] hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-5 shadow-2xs group/card">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-700 group-hover/card:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[#141312]/50 uppercase tracking-wider font-semibold">
                  Hotlines
                </span>
              </div>
              <div>
                <div className="text-[11px] font-mono text-amber-700 font-bold mb-1">
                  DIRECT ARCHITECT
                </div>
                <div className="flex flex-col gap-1 text-xs font-mono font-bold text-[#141312]">
                  <a href="tel:+8801618257217" className="hover:text-amber-700 transition-colors">
                    +880 1618-257217
                  </a>
                  <a href="tel:+8801610108851" className="hover:text-amber-700 transition-colors">
                    +880 1610-108851
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
