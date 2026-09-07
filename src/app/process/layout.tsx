import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery Process & Standards",
  description:
    "Our 4-phase engineering delivery cycle: Architecture, 14-day production sprints, CI/CD verification, and SLA maintenance.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
