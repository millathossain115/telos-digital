import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Production engineering case studies, enterprise platforms, and technical architecture delivered by Telos Digital.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
