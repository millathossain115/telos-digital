import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { ServicesBento } from "@/components/ServicesBento";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ProcessSection } from "@/components/ProcessSection";
import { FaqSection } from "@/components/FaqSection";
import { ConversionCtaBanner } from "@/components/ConversionCtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col font-sans selection:bg-amber-200 selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* <TechMarquee /> */}
        <ServicesBento />
        <FeaturedWork />
        <ProcessSection />
        <FaqSection />
        <ConversionCtaBanner />
      </main>
      <Footer />
    </div>
  );
}
