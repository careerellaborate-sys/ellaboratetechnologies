import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ellaborate Technologies | AI, IoT & Autonomous Systems Engineering",
  description:
    "Precision engineering for AI, IoT, and autonomous technologies. We build intelligent systems that power high-performance enterprises. AI development company in India.",
  alternates: { canonical: "https://ellaboratetechnologies.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ellaboratetechnologies.com/#organization",
      name: "Ellaborate Technologies",
      url: "https://ellaboratetechnologies.com",
      logo: "https://ellaboratetechnologies.com/og/default.png",
      description: "Precision engineering for AI, IoT, and autonomous technologies.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-99999-99999",
        contactType: "customer service",
      },
      sameAs: [
        "https://linkedin.com/company/ellaboratetechnologies",
        "https://twitter.com/ellaboratetech",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ellaboratetechnologies.com/#website",
      url: "https://ellaboratetechnologies.com",
      name: "Ellaborate Technologies",
      publisher: { "@id": "https://ellaboratetechnologies.com/#organization" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesSection />
      <TechStackSection />
      <CaseStudiesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
