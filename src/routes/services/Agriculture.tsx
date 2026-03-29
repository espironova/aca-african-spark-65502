import Image from 'next/image'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sprout, Wheat, Tractor, Cloud, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Agriculture = () => {
  const benefits = [
    "Livestock insurance coverage",
    "Crop failure protection",
    "Farm equipment and machinery",
    "Weather-related damage cover",
    "Disease and pest protection",
    "Post-harvest loss coverage"
  ];

  const coverageTypes = [
    { title: "Livestock Cover", description: "Cattle, goats, and poultry protection", icon: Sprout },
    { title: "Crop Insurance", description: "Protection against crop failure", icon: Wheat },
    { title: "Equipment Cover", description: "Tractors and farm machinery", icon: Tractor },
    { title: "Weather Protection", description: "Coverage for weather risks", icon: Cloud }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
          src={"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=80"}
          alt="African farmer in field"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        {/* Animated Leaf Icon */}
        <div className="absolute top-20 left-10 z-10 pointer-events-none">
          <Sprout className="w-16 h-16 text-accent animate-float opacity-70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Sprout className="w-12 h-12 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Agriculture Insurance
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              ACA supports farmers with insurance that protects crops, livestock, and equipment
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all"
                onClick={() => document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Coverage Options
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://wa.me/254722906974', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section id="coverage" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Farm Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protecting Kenya's farmers from field to harvest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card 
                  key={type.title}
                  className="group hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What's Protected
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive coverage for your farming operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={benefit}
                  className="group hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-lg text-foreground font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
          src={"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80"}
          alt="Bountiful harvest"
          fill
          className="object-cover"
          sizes="100vw"
        />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Protect Your Farm and Livelihood
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From crop failure to bountiful harvest - ACA supports Kenyan farmers every step of the way
          </p>

          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all animate-pulse-glow text-lg px-12 py-7"
            onClick={() => window.open('https://wa.me/254722906974', '_blank')}
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Get Your Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agriculture;
