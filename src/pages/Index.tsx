import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceStoriesCarousel from "@/components/ServiceStoriesCarousel";
import ServicesSection from "@/components/ServicesSection";
import QuoteCalculator from "@/components/QuoteCalculator";
import ComparisonTable from "@/components/ComparisonTable";
import HowItWorksSection from "@/components/HowItWorksSection";
import ClaimsTimeline from "@/components/ClaimsTimeline";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuizSection from "@/components/QuizSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add schema markup for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      "name": "ACA Insurance Agency",
      "description": "Trusted Kenyan insurance provider offering motor, home, medical, life, business, and agriculture insurance.",
      "url": "https://www.acainsuranceagency.co.ke",
      "telephone": "+254700000000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "CBD",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      },
      "areaServed": "Kenya",
      "priceRange": "$$"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServiceStoriesCarousel />
        <ServicesSection />
        <ComparisonTable />
        <QuoteCalculator />
        <HowItWorksSection />
        <ClaimsTimeline />
        <WhyChooseSection />
        <TestimonialsSection />
        <QuizSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
