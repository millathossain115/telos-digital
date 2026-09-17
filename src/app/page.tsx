import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { Footer } from "@/components/Footer";

const ComparisonMatrix = dynamic(
  () => import("@/components/ComparisonMatrix").then((mod) => mod.ComparisonMatrix),
  {
    loading: () => <div className="py-24" />,
  }
);

const ProcessSection = dynamic(
  () => import("@/components/ProcessSection").then((mod) => mod.ProcessSection),
  {
    loading: () => <div className="py-24" />,
  }
);

const FaqSection = dynamic(
  () => import("@/components/FaqSection").then((mod) => mod.FaqSection),
  {
    loading: () => <div className="py-24" />,
  }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-amber-200 selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* <TechMarquee /> */}
        <ServicesBento />
        <ComparisonMatrix />
        <ProcessSection />
        <FaqSection />
        <ConversionCtaBanner />
      </main>
      <Footer />
    </div>
  );
}
