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
  Send,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useCalendly } from "@/components/CalendlyProvider";
import siteConfig from "@/data/siteConfig.json";

/* =========================================================================
   TYPES & ANIMATIONS
   ========================================================================= */

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ProjectIntakeFormProps {
  recipientEmail?: string;
  displayEmail?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* =========================================================================
   REUSABLE COMPONENT: ContactCoordinates
   ========================================================================= */

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
          <a
            href={`mailto:${siteConfig.contact.primaryEmail}`}
            className="group flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-black/[0.06] hover:border-amber-500/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-200">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-500">Direct Inquiries</div>
              <div className="text-xs sm:text-sm font-semibold text-[#141312] group-hover:text-amber-800 transition-colors">
                {siteConfig.contact.primaryEmail}
              </div>
            </div>
          </a>

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

/* =========================================================================
   REUSABLE COMPONENT: ProjectIntakeForm
   ========================================================================= */

export function ProjectIntakeForm({
  recipientEmail = "millathossain115@gmail.com",
  displayEmail = "telosdigitalofficial@gmail.com",
}: ProjectIntakeFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setIsSubmitted(true);
      } else if (result.missingConfig) {
        // RESEND_API_KEY not yet in .env.local -> graceful fallback to opening mail client
        const subject = encodeURIComponent(`Project Intake: ${form.name} via Telos Digital`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\nProject Scope & Message:\n${form.message}`
        );
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch {
      // Network error -> fallback to client mailto
      const subject = encodeURIComponent(`Project Intake: ${form.name} via Telos Digital`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nProject Scope & Message:\n${form.message}`
      );
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FAF6F0] via-[#F4ECE2] to-[#E9DFD0] border border-amber-900/10 shadow-[0_20px_50px_rgba(30,20,10,0.12)] hover:shadow-[0_30px_70px_rgba(30,20,10,0.18)] hover:border-amber-900/30 transition-all duration-300 relative overflow-hidden group">
      {/* Subtle top-right warm ambient light */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-110" />

      {isSubmitted ? (
        <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-300 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/90 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-semibold text-[#141312] tracking-tight">
            Message Received
          </h3>
          <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
            Thank you, <span className="text-[#141312] font-semibold">{form.name}</span>. Our lead architect will review your message and reply to <span className="text-[#141312] font-semibold">{form.email}</span> within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setForm({ name: "", email: "", message: "" });
            }}
            className="mt-4 px-5 py-2.5 rounded-xl bg-white/90 hover:bg-amber-600 hover:text-white hover:border-amber-600 border border-amber-900/15 text-xs font-mono text-neutral-800 transition-all cursor-pointer shadow-xs"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="flex items-center justify-between pb-3.5 border-b border-amber-900/10">
            <h2 className="text-lg font-semibold text-[#141312] tracking-tight">
              Project Intake
            </h2>
            <span className="text-xs font-mono text-amber-900/80 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full font-medium">
              Direct to engineering
            </span>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-700 flex items-center gap-1 font-medium">
              <span>Your Name</span>
              <span className="text-amber-700">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Alex Vance"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-amber-900/15 text-sm text-[#141312] placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 shadow-inner/5 transition-all"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-700 flex items-center gap-1 font-medium">
              <span>Email Address</span>
              <span className="text-amber-700">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="alex@company.com"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-amber-900/15 text-sm text-[#141312] placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 shadow-inner/5 transition-all"
            />
          </div>

          {/* Message Text Field */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-700 flex items-center justify-between font-medium">
              <span className="flex items-center gap-1">
                <span>How can we help?</span>
                <span className="text-amber-700">*</span>
              </span>
              <span className="text-neutral-500 text-[11px] font-normal">Scope, goals or timeline</span>
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about the product you want to build, challenges with your existing stack, or your target launch date..."
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-amber-900/15 text-sm text-[#141312] placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 shadow-inner/5 transition-all resize-none leading-relaxed"
            />
          </div>

          {errorMessage && (
            <div className="text-xs font-mono text-rose-700 p-3 rounded-xl bg-rose-50 border border-rose-200">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#141312] hover:bg-amber-600 text-white shadow-md hover:shadow-amber-500/20 hover:scale-[1.005] active:scale-[0.995] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Sending message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4 text-amber-400" />
              </>
            )}
          </button>

          <p className="text-[11px] font-mono text-neutral-500 text-center">
            Strictly confidential. Direct engineering response within 24 hours.
          </p>
        </form>
      )}
    </div>
  );
}

/* =========================================================================
   PAGE ROOT: ContactPage
   ========================================================================= */

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Warm ambient glows matching homepage */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>Direct Engineering Intake</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight sm:tracking-tighter text-[#141312] leading-[1.08] text-balance">
                Let’s build something{" "}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                  uncompromising
                </span>
                .
              </h1>

              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed text-pretty max-w-2xl">
                Tell us about your product goals, constraints, and timeline. You’ll speak directly with our principal engineers—zero sales fluff.
              </p>
            </motion.div>

            {/* 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              {/* Left Column: Coordinates + Calendly Direct Call */}
              <motion.div variants={itemVariants} className="lg:col-span-5 h-full">
                <ContactCoordinates />
              </motion.div>

              {/* Right Column: 3-Field Intake Form */}
              <motion.div variants={itemVariants} className="lg:col-span-7 h-full">
                <ProjectIntakeForm
                  recipientEmail="millathossain115@gmail.com"
                  displayEmail="telosdigitalofficial@gmail.com"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

