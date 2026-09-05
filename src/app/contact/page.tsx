"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Loader2,
  ShieldCheck,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  company: string;
  details: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim()) {
      setErrorMessage("Please fill in your name and email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API pipeline submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Antigravity Ambient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-black/[0.08] text-xs font-mono text-indigo-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>Direct Project Intake // Q4 Open</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight sm:tracking-tighter text-white leading-[1.08] text-balance">
              Let’s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
                uncompromising
              </span>
              .
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed text-pretty">
              Tell us about your technical goals, constraints, and timeline. You’ll speak directly with our principal engineers—zero sales reps.
            </p>
          </div>

          {/* 2-Column Split: Left Agency Details + Right Intake Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Left Column: Agency Details & Direct Booking */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Card 1: Direct Contacts & SLA */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white/80 border border-black/[0.08]/80 backdrop-blur-xl shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]/70">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    Agency Coordinates
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    24h Response SLA
                  </span>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:hello@telosdigital.io"
                    className="group flex items-start gap-4 p-3.5 rounded-2xl bg-[#FAF8F5]/60 border border-black/[0.08]/60 hover:border-indigo-500/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-800/40 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-500">Direct Inquiries</div>
                      <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        hello@telosdigital.io
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#FAF8F5]/60 border border-black/[0.08]/60">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-500">Headquarters & Reach</div>
                      <div className="text-sm font-medium text-neutral-300">
                        Dhaka based, working globally across GMT+6, EST, and CET.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#FAF8F5]/60 border border-black/[0.08]/60">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-800/40 flex items-center justify-center text-purple-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-500">Working Cadence</div>
                      <div className="text-sm font-medium text-neutral-300">
                        Synchronous sprint demos & asynchronous daily Slack updates.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Instant 15-Min Architectural Consult Option */}
              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-neutral-900/50 to-neutral-900/30 border border-indigo-900/40 shadow-xl backdrop-blur-xl space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
                  <Calendar className="w-4 h-4" />
                  <span>Prefer to skip email?</span>
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  Book a 15-minute technical discovery call
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Have an existing codebase or tight product timeline? Jump on a direct video call with our lead architect to evaluate feasibility.
                </p>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-5 rounded-xl bg-neutral-100 hover:bg-white text-neutral-950 font-semibold text-sm shadow-md hover:-tranneutral-y-0.5 active:tranneutral-y-0 transition-all duration-200 gap-2 font-sans"
                >
                  <span>Select Time on Cal.com</span>
                  <ArrowRight className="w-4 h-4 text-neutral-950" />
                </a>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 border border-black/[0.08]/60 text-xs font-mono text-neutral-600">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NDA signed upfront upon request. Full IP protection.</span>
              </div>

            </div>

            {/* Right Column: Interactive Intake Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white/80 border border-black/[0.08]/90 shadow-2xl backdrop-blur-xl relative">
                
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-950/70 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-950/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                      Message Received
                    </h3>
                    <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
                      Thank you, <span className="text-neutral-200 font-medium">{form.name}</span>. Our engineering team will review your specification and reply within 24 hours with architectural feedback.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          company: "",
                          details: "",
                        });
                      }}
                      className="mt-6 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-300 transition-colors"
                    >
                      Send another specification
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    
                    {/* Basic Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-300 flex items-center gap-1">
                          Your Name <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Alex Vance"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5]/80 border border-black/[0.08] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-300 flex items-center gap-1">
                          Business Email <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5]/80 border border-black/[0.08] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neutral-300">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder=""
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5]/80 border border-black/[0.08] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neutral-300 flex items-center justify-between">
                        <span>Project Details</span>
                        <span className="text-neutral-500 text-[11px]">Goals & Timeline</span>
                      </label>
                      <textarea
                        rows={4}
                        value={form.details}
                        onChange={(e) => setForm({ ...form, details: e.target.value })}
                        placeholder="Tell us about the product you want to build, existing stack, and ideal target launch date..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5]/80 border border-black/[0.08] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {errorMessage && (
                      <div className="text-xs font-mono text-rose-400 p-3 rounded-lg bg-rose-950/40 border border-rose-900/60">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/45 hover:-tranneutral-y-0.5 active:tranneutral-y-0 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 flex items-center justify-center gap-2 font-sans"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Transmitting Specification...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Specification</span>
                          <Send className="w-4 h-4 text-indigo-200" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] font-mono text-neutral-500 text-center">
                      🔒 No spam. Your information is strictly used for technical consultation.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
