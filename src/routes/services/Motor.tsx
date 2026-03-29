import Image from 'next/image'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Car, Shield, Users, Zap, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Motor = () => {
  const benefits = [
    "Comprehensive accident coverage",
    "Third-party liability protection",
    "Theft and vandalism cover",
    "Windscreen and glass damage",
    "Emergency roadside assistance",
    "Personal accident benefits"
  ];

  const vehicleTypes = [
    { title: "Private Cars", description: "Personal vehicles for daily use", icon: Car },
    { title: "Commercial Vehicles", description: "Trucks, vans, and delivery vehicles", icon: Shield },
    { title: "PSV (Matatus & Buses)", description: "Public service vehicles", icon: Users },
    { title: "Motorcycles", description: "Two-wheelers and boda bodas", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
          src={"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80"}
          alt="African driver with car"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        {/* Animated Car Icon */}
        <div className="absolute top-20 left-0 right-0 z-10 overflow-hidden pointer-events-none">
          <Car className="w-16 h-16 text-accent animate-slide-in opacity-70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Car className="w-12 h-12 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Motor Insurance
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Whether you drive for personal or business use, ACA helps you find the perfect motor insurance policy
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

      {/* Vehicle Types */}
      <section id="coverage" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              We Cover All Vehicle Types
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive and third-party coverage for every vehicle on Kenyan roads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((type, index) => {
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
                What's Included
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive protection for you and your vehicle
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
          src={"https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=2000&q=80"}
          alt="Happy driver"
          fill
          className="object-cover"
          sizes="100vw"
        />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Get Your Motor Insurance Quote Today
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Drive with confidence knowing you're protected by ACA Insurance
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

export default Motor;
