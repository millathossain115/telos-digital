import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Standard Typography Architecture:
 * - Sans / Display & Body: Geist (Primary default) & Inter (Dense UI/dashboard option)
 * - Mono / Technical Accents & Badges: Geist Mono (Primary) & JetBrains Mono (Code/terminal accent)
 */

export const fontGeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const fontGeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const fontJetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});
