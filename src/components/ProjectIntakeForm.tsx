"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ProjectIntakeFormProps {
  recipientEmail?: string;
  displayEmail?: string;
}

export function ProjectIntakeForm({
  recipientEmail = "millathossain115@gmail.com",
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
        const subject = encodeURIComponent(
          `Project Intake: ${form.name} via Telos Digital`,
        );
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\nProject Scope & Message:\n${form.message}`,
        );
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          result.error || "Failed to send message. Please try again.",
        );
      }
    } catch {
      const subject = encodeURIComponent(
        `Project Intake: ${form.name} via Telos Digital`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nProject Scope & Message:\n${form.message}`,
      );
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#F2E7DC] border border-[#E6DACD] ring-1 ring-inset ring-white/95 shadow-[0_12px_36px_rgba(20,19,18,0.04)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.08)] hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group">
      {/* Top subtle hairline amber highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Warm ambient corner glows */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

      {isSubmitted ? (
        <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-300 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-semibold text-[#141312] tracking-tight">
            Message Received
          </h3>
          <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
            Thank you,{" "}
            <span className="text-[#141312] font-semibold">{form.name}</span>.
            Our lead architect will review your message and reply to{" "}
            <span className="text-[#141312] font-semibold">{form.email}</span>{" "}
            within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setForm({ name: "", email: "", message: "" });
            }}
            className="mt-4 px-5 py-2.5 rounded-xl bg-white hover:bg-amber-600 hover:text-white border border-[#E6DACD] text-xs font-mono text-neutral-800 transition-all cursor-pointer shadow-2xs"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
          <div className="flex items-center justify-between pb-3.5 border-b border-[#141312]/[0.06]">
            <h2 className="text-lg font-semibold text-[#141312] tracking-tight">
              Project Intake
            </h2>
            <span className="text-xs font-mono text-amber-900 bg-amber-500/10 px-2.5 py-1 rounded-full font-semibold">
              Direct to engineering
            </span>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#141312]/70 flex items-center gap-1 font-semibold">
              <span>Your Name</span>
              <span className="text-amber-700">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Alex Vance"
              className="w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-white/80 hover:bg-white focus:bg-white border border-[#141312]/[0.08] text-sm text-[#141312] placeholder-neutral-400 focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 shadow-2xs transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#141312]/70 flex items-center gap-1 font-semibold">
              <span>Email Address</span>
              <span className="text-amber-700">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="alex@company.com"
              className="w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-white/80 hover:bg-white focus:bg-white border border-[#141312]/[0.08] text-sm text-[#141312] placeholder-neutral-400 focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 shadow-2xs transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#141312]/70 flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1">
                <span>How can we help?</span>
                <span className="text-amber-700">*</span>
              </span>
              <span className="text-neutral-500 text-[11px] font-normal">
                Scope, goals or timeline
              </span>
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about the product you want to build, challenges with your existing stack, or your target launch date..."
              className="w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-white/80 hover:bg-white focus:bg-white border border-[#141312]/[0.08] text-sm text-[#141312] placeholder-neutral-400 focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 shadow-2xs transition-all resize-none leading-relaxed"
            />
          </div>

          {errorMessage && (
            <div className="text-xs font-mono text-rose-700 p-3 rounded-xl bg-rose-50 border border-rose-200">
              {errorMessage}
            </div>
          )}

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
