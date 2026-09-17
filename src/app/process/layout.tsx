import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery Process & Engineering Standards",
  description:
    "Our engineering delivery cycle for greenfield builds and legacy modernization: Architecture, redesign & rebranding, 14-day production sprints, CI/CD, and zero-downtime releases.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
