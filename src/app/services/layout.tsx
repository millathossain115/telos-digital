import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Full-stack web architecture, high-performance mobile engineering, cloud infrastructure, and enterprise design systems.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
