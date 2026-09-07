import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy",
  description:
    "Why Telos Digital exists: Senior engineering craftsmanship, zero bloated overhead, and 100% unconditional day-one IP ownership.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
