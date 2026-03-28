"use client";
import Image from 'next/image'
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import areYouCovered from "@/assets/are-you-covered.jpg";

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: "Licensed by IRA",
      description: "Fully licensed and regulated by the Insurance Regulatory Authority of Kenya.",
      stat: "100%",
      statLabel: "Compliant"
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep understanding of Kenyan market needs and risks. We're part of your community.",
      stat: "50K+",
      statLabel: "Clients"
    },
    {
      icon: Heart,
      title: "Personalized Support",
      description: "Dedicated agents who speak your language and understand your unique situation.",
      stat: "24/7",
      statLabel: "Support"
    },
    {
      icon: TrendingUp,
      title: "Trusted 10+ Years",
      description: "Over a decade of serving Kenyan families and businesses with integrity.",
      stat: "10+",
      statLabel: "Years"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background z-10" />
        <Image
          src={areYouCovered}
          alt="Are you covered - Insurance protection"
          fill
          className="object-cover opacity-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose ACA Insurance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for protection and peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border/30 bg-card/50 backdrop-blur-xl hover:border-accent ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-accent mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {feature.statLabel}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
