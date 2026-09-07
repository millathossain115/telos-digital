"use client";

import { createContext, useContext, useState } from "react";

interface CalendlyContextType {
  openCalendly: (url?: string) => void;
}

const DEFAULT_CALENDLY_URL = "https://calendly.com/millathossain115/30min";

const CalendlyContext = createContext<CalendlyContextType>({
  openCalendly: () => {},
});

export function useCalendly() {
  return useContext(CalendlyContext);
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget: () => void;
    };
  }
}

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(DEFAULT_CALENDLY_URL);

  const openCalendly = (url?: string) => {
    const targetUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_CALENDLY_URL;
    setCurrentUrl(targetUrl);
    setIsOpen(true);
  };

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] sm:h-[85vh] max-h-[850px] bg-[#141312] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Title and Internal Close Button */}
            <div className="px-5 py-3.5 bg-[#1C1A18] border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-medium tracking-wider text-amber-300 uppercase">
                  Technical Discovery // 30-Min Call
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#141312] text-xs font-mono font-semibold transition-all duration-150 cursor-pointer border border-white/15"
                aria-label="Close modal"
              >
                <span>Close</span>
                <span className="text-sm font-bold leading-none">✕</span>
              </button>
            </div>

            {/* Calendly iFrame inside the modal */}
            <div className="w-full flex-1 bg-white relative">
              <iframe
                src={currentUrl}
                className="w-full h-full border-0"
                title="Schedule Discovery Call"
              />
            </div>
          </div>
        </div>
      )}
    </CalendlyContext.Provider>
  );
}
