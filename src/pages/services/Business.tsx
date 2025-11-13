import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, Shield, Building, Hammer, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Business = () => {
  const benefits = [
    "Fire and burglary protection",
    "Business interruption cover",
    "Work injury benefits (WIBA)",
    "Professional indemnity",
    "Employer's liability",
    "Equipment and machinery cover"
  ];

  const coverageTypes = [
    { title: "Shop Insurance", description: "Retail and small business cover", icon: Building },
    { title: "Office Coverage", description: "Professional workspace protection", icon: Briefcase },
    { title: "Equipment Cover", description: "Tools and machinery insurance", icon: Hammer },
    { title: "Liability Protection", description: "Legal and professional indemnity", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=2000&q=80"
            alt="African business owner"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        {/* Animated Briefcase Icon */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <Briefcase className="w-20 h-20 text-accent animate-spin-slow opacity-70" style={{ animationDuration: '8s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Briefcase className="w-12 h-12 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Business Insurance
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Protect your business and employees against risks like fire, theft, or loss of profit
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
              Comprehensive Business Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to established enterprises, we secure your business future
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

          {/* Business Counter */}
          <div className="mt-16 text-center">
            <Card className="inline-block border-2 border-accent/30 shadow-xl animate-pulse-glow">
              <CardContent className="p-8">
                <p className="text-5xl md:text-7xl font-bold text-accent mb-2">500+</p>
                <p className="text-xl text-muted-foreground">Kenyan Businesses Protected</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What's Included
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive coverage for your business operations
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
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80"
            alt="Successful business team"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Secure Your Business Future Today
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From small shops to large enterprises, ACA Insurance has your business covered
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

export default Business;
