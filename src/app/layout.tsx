import type { Metadata } from "next";
import {
  fontGeistSans,
  fontGeistMono,
  fontInter,
  fontJetBrainsMono,
} from "./fonts";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Telos Digital | Software Architecture & Product Engineering",
    template: "%s | Telos Digital",
  },
  description:
    "Production software engineering studio. Full-stack cloud web systems, native mobile apps, and refined UI/UX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontGeistSans.variable} ${fontGeistMono.variable} ${fontInter.variable} ${fontJetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#141312] font-sans antialiased">
        <CalendlyProvider>
          {children}
          <FloatingWhatsApp />
        </CalendlyProvider>
        <Analytics />
      </body>
    </html>
  );
}
