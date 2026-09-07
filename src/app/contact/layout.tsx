import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Project Intake",
  description:
    "Direct engineering intake. Submit your project requirements or book a technical discovery call with our principal engineer.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
