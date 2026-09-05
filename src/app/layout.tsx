import type { Metadata } from "next";
import {
  fontGeistSans,
  fontGeistMono,
  fontInter,
  fontJetBrainsMono,
} from "./fonts";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: "Telos Digital - Architecting Digital Transformation",
  description:
    "Enterprise-grade cloud architectures, AI automation, and next-generation software solutions.",
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
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
