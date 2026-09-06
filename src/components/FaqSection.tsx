"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageSquareQuote,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    id: "mvp-timeline",
    q: "How long does a production MVP typically take to build?",
    a: "Most scoped MVPs ship within 6 to 10 weeks. We structure work into 2-week continuous delivery sprints, meaning you have a testable staging build in your hands starting on Week 2, not at the very end.",
  },
  {
    id: "pricing-model",
    q: "How does your pricing and engagement model work?",
    a: "We work on transparent sprint-based retainers or fixed-scope milestones for clearly architected projects. No hidden change orders or billable hour surprises. You know exactly what you are paying and what is shipping every two weeks.",
  },
  {
    id: "ip-ownership",
    q: "Do we retain 100% ownership of the code and design assets?",
    a: "Yes, unconditionally. All repositories, Figma design tokens, infrastructure setups, and intellectual property belong to your organization from Day 1. We hand over comprehensive runbooks upon completion.",
  },
  {
    id: "cadence-comm",
    q: "What is your communication and sprint cadence?",
    a: "We integrate directly into your workflow via dedicated Slack/Discord channels, asynchronous Loom walk-throughs, and weekly live demo checkpoints. You communicate directly with the senior engineers writing your code.",
  },
  {
    id: "legacy-code",
    q: "Can you take over and refactor an existing legacy codebase?",
    a: "Yes. We start with a 5-day Architectural Audit to evaluate security vulnerabilities, technical debt, and test coverage before recommending whether an incremental strangler refactor or dedicated rewrite is most capital-efficient.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const leftColVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 relative bg-[#FAF8F5] overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Heading + Context Info */}
          <motion.div
            variants={leftColVariants}
            className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-5 shadow-sm">
                <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Clarity & Transparency</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141312] tracking-tight sm:tracking-tighter leading-[1.12]">
                Frequently Asked <br className="hidden sm:inline" />
                Questions.
              </h2>

              <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
                Everything you need to know about our sprint cadence, delivery
                guarantees, and how we engineer products from day one.
              </p>
            </div>

            {/* Direct Contact Card - Anchored at bottom with thematic gradient & ambient glow */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EA] to-[#F3E7D7] border border-amber-900/[0.1] shadow-[0_8px_24px_rgba(217,119,6,0.06)] hover:shadow-[0_12px_32px_rgba(217,119,6,0.12)] hover:border-amber-600/30 transition-all duration-400 relative overflow-hidden group">
              {/* Top ambient corner glow */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/10 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125" />

              {/* Top hairline border shimmer on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500" />

              <div className="flex items-center gap-3 mb-2.5 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquareQuote className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#141312]">
                    Have a custom question?
                  </h4>
                  <p className="text-[11px] text-amber-800/80 font-mono font-medium">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3.5 relative z-10">
                Can’t find the exact answer you need? Chat directly with our
                engineering leadership.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141312] group-hover:text-amber-800 transition-colors group/link relative z-10">
                <span>Speak with an Architect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 text-amber-700" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: FAQs Accordion List */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={faq.id}
                  variants={faqItemVariants}
                  className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                    isOpen
                      ? "bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EA] to-[#F5ECE0] border-amber-900/[0.12] shadow-[0_12px_32px_rgba(217,119,6,0.08)]"
                      : "bg-white border-black/[0.07] hover:bg-gradient-to-br hover:from-white hover:via-[#FDFBF7] hover:to-[#F7F2EB] hover:border-black/[0.12] hover:shadow-[0_8px_24px_rgba(20,19,18,0.06)] hover:-translate-y-0.5 shadow-xs"
                  }`}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4.5 sm:py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer select-none"
                    aria-expanded={isOpen}>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-amber-600/80 shrink-0 font-medium">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base sm:text-[17px] font-semibold text-[#141312] tracking-tight leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#141312] text-amber-300 border-[#141312] shadow-sm"
                          : "bg-[#FAF8F5] text-neutral-600 border-black/[0.08] hover:bg-neutral-100"
                      }`}>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden">
                        <div className="px-6 sm:px-7 pb-5 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-black/[0.05]">
                          <p className="pl-7 sm:pl-8">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
