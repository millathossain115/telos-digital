"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How long does a production MVP typically take to build?",
    a: "Most scoped MVPs ship within 6 to 10 weeks. We structure work into 2-week continuous delivery sprints, meaning you have a testable staging build in your hands starting on Week 2, not at the very end.",
  },
  {
    q: "How does your pricing and engagement model work?",
    a: "We work on transparent sprint-based retainers or fixed-scope milestones for clearly architected projects. No hidden change orders or billable hour surprises. You know exactly what you are paying and what is shipping every two weeks.",
  },
  {
    q: "Do we retain 100% ownership of the code and design assets?",
    a: "Yes, unconditionally. All repositories, Figma design tokens, infrastructure setups, and intellectual property belong to your organization from Day 1. We hand over comprehensive runbooks upon completion.",
  },
  {
    q: "What is your communication and sprint cadence?",
    a: "We integrate directly into your workflow via dedicated Slack/Discord channels, asynchronous Loom walk-throughs, and weekly live demo checkpoints. You communicate directly with the senior engineers writing your code.",
  },
  {
    q: "Can you take over and refactor an existing legacy codebase?",
    a: "Yes. We start with a 5-day Architectural Audit to evaluate security vulnerabilities, technical debt, and test coverage before recommending whether an incremental strangler refactor or dedicated rewrite is most capital-efficient.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 relative bg-[#FAF8F5] border-t border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-amber-700 text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Clarity & Expectations
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#141312] tracking-tight sm:tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base">
            Everything you need to know about partnering with Telos Digital.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-amber-500/40 shadow-md shadow-black/[0.03]"
                    : "bg-white/80 border-black/[0.07] hover:border-black/[0.15] shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#141312] tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-[#141312] text-amber-300 border-[#141312]" : "bg-[#FAF8F5] text-neutral-700 border-black/[0.08]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-black/[0.05]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
