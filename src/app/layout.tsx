import type { Metadata } from "next";
import {
  fontGeistSans,
  fontGeistMono,
  fontInter,
  fontJetBrainsMono,
} from "./fonts";
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
      className={`${fontGeistSans.variable} ${fontGeistMono.variable} ${fontInter.variable} ${fontJetBrainsMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 font-sans">{children}</body>
    </html>
  );
}
