"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
  variant?: "dark" | "light" | "pill" | "iconOnly";
  showLabel?: boolean;
}

export function CopyEmailButton({
  email = "telosdigitalofficial@gmail.com",
  className = "",
  variant = "dark",
  showLabel = false,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  if (variant === "iconOnly") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Email copied!" : "Copy email address to clipboard"}
        title={copied ? "Copied!" : "Copy email to clipboard"}
        className={`inline-flex items-center justify-center w-5 h-5 rounded transition-all duration-150 cursor-pointer ${
          copied
            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
            : "text-white/60 hover:text-white hover:bg-white/10"
        } ${className}`}
      >
        {copied ? (
          <Check className="w-3 h-3 text-emerald-400" />
        ) : (
          <Copy className="w-3 h-3" />
        )}
      </button>
    );
  }

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Email copied!" : "Copy email address"}
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono transition-all duration-200 cursor-pointer ${
          copied
            ? "bg-emerald-500/20 text-emerald-700 border border-emerald-500/30"
            : "bg-black/[0.04] hover:bg-amber-500/15 text-neutral-600 hover:text-amber-900 border border-black/[0.06]"
        } ${className}`}
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-emerald-600" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3 text-neutral-500" />
            <span>Copy</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copied!" : "Copy email address"}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
        variant === "light"
          ? copied
            ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
            : "bg-white/80 hover:bg-amber-50 text-neutral-700 hover:text-amber-900 border border-black/[0.08] shadow-2xs"
          : copied
          ? "bg-emerald-950/60 text-emerald-400 border border-emerald-500/40"
          : "bg-white/[0.08] hover:bg-white/[0.16] text-neutral-300 hover:text-white border border-white/10"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-500" />
          <span className="font-semibold text-[11px]">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 opacity-70" />
          {showLabel && <span className="text-[11px]">Copy</span>}
        </>
      )}
    </button>
  );
}
