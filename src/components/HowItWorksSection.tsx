"use client";
import Image from 'next/image'
import { Search, FileCheck, Shield } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      title: "Choose Cover",
      description: "Browse our insurance options and find the perfect coverage for your needs."
    },
    {
      icon: FileCheck,
      title: "Get Quote",
      description: "Receive a personalized quote instantly. No hidden fees, transparent pricing."
    },
    {
      icon: Shield,
      title: "Stay Protected",
      description: "Enjoy peace of mind knowing you're covered by Kenya's trusted insurer."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <Image
          src={"https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1920&q=80"}
          alt="Nairobi cityscape"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Getting insured is simple and straightforward
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-accent/30 -translate-y-1/2">
            <div 
              className={`h-full bg-accent transition-all duration-2000 ${isVisible ? 'w-full' : 'w-0'}`}
              style={{ transitionDuration: '2s' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`text-center transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 0.3}s` }}
                >
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-12 h-12 text-accent-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center font-bold text-primary text-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
