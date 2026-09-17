import type { Metadata } from "next";
import {
  fontGeistSans,
  fontGeistMono,
  fontInter,
  fontJetBrainsMono,
} from "./fonts";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.telosdigital.agency"),
  title: {
    default: "Telos Digital | Software Architecture & Product Engineering Studio",
    template: "%s | Telos Digital",
  },
  description:
    "Production software engineering studio. Full-stack cloud web systems, high-speed retail commerce, native mobile apps, and refined digital products.",
  keywords: [
    "Telos Digital",
    "software engineering studio",
    "Next.js agency",
    "web development Bangladesh",
    "full-stack engineering",
    "React developers",
    "cloud architecture",
    "Telos Cart",
    "mobile app development",
    "enterprise software development",
  ],
  authors: [{ name: "Telos Digital", url: "https://www.telosdigital.agency" }],
  creator: "Telos Digital",
  publisher: "Telos Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.telosdigital.agency",
    siteName: "Telos Digital",
    title: "Telos Digital | Software Architecture & Product Engineering",
    description:
      "Production software engineering studio. Full-stack cloud web systems, high-speed retail commerce, native mobile apps, and refined digital products.",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Telos Digital — Software Architecture & Product Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telos Digital | Software Architecture & Product Engineering",
    description:
      "Production software engineering studio. Full-stack cloud web systems, high-speed retail commerce, native mobile apps, and refined digital products.",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.telosdigital.agency/#organization",
      name: "Telos Digital",
      url: "https://www.telosdigital.agency",
      logo: "https://www.telosdigital.agency/icon.svg",
      description:
        "Production software engineering studio. Full-stack cloud web systems, native mobile apps, and refined UI/UX.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Madani Avenue",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801618257217",
        contactType: "customer service",
        availableLanguage: ["English", "Bengali"],
      },
      sameAs: [
        "https://www.teloscart.website/",
        "https://facebook.com",
        "https://linkedin.com",
        "https://instagram.com",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.telosdigital.agency/#service",
      name: "Telos Digital Software Engineering",
      url: "https://www.telosdigital.agency",
      image: "https://www.telosdigital.agency/icon.svg",
      priceRange: "$$$$",
      telephone: "+8801618257217",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Madani Avenue",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering & Architecture Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Web Architecture",
              description: "Custom Next.js, React, Node.js, and cloud application engineering.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "High-Performance Mobile Engineering",
              description: "Native iOS (Swift) and React Native cross-platform application development.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise Commerce & Retail Systems",
              description: "Scalable e-commerce infrastructure, inventory synchronization, and custom checkout flows.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Infrastructure & DevOps",
              description: "Automated CI/CD pipelines, container orchestration, and serverless architectures.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.telosdigital.agency/#website",
      url: "https://www.telosdigital.agency",
      name: "Telos Digital",
      publisher: {
        "@id": "https://www.telosdigital.agency/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontGeistSans.variable} ${fontGeistMono.variable} ${fontInter.variable} ${fontJetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#141312] font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CalendlyProvider>
          {children}
          <FloatingWhatsApp />
          <MobileBottomNav />
        </CalendlyProvider>
        <Analytics />
      </body>
    </html>
  );
}
