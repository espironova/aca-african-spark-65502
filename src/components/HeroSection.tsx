import { Car, Home, Heart, Briefcase, Sprout, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const [api, setApi] = useState<any>();

  const services = [
    {
      icon: Car,
      name: "Motor Insurance",
      tagline: "Protect your vehicle and drive with peace of mind",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1920&q=80",
      color: "from-primary/95 via-primary/90 to-primary/85"
    },
    {
      icon: Home,
      name: "Home Insurance",
      tagline: "Safeguard your home and family from unexpected events",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
      color: "from-primary/90 via-primary/85 to-accent/30"
    },
    {
      icon: Heart,
      name: "Medical Insurance",
      tagline: "Reliable healthcare coverage when you need it most",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1920&q=80",
      color: "from-primary/95 via-accent/40 to-primary/85"
    },
    {
      icon: Briefcase,
      name: "Business Insurance",
      tagline: "Secure your business against risks and losses",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1920&q=80",
      color: "from-primary/90 via-primary/85 to-accent/30"
    },
    {
      icon: Sprout,
      name: "Agriculture Insurance",
      tagline: "Protect your crops and livestock from unforeseen challenges",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80",
      color: "from-primary/95 via-primary/90 to-primary/85"
    },
    {
      icon: Plane,
      name: "Travel Insurance",
      tagline: "Travel with confidence knowing you're covered",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80",
      color: "from-primary/90 via-accent/40 to-primary/85"
    }
  ];

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {});
  }, [api]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
        className="w-full h-screen"
      >
        <CarouselContent>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <CarouselItem key={index}>
                <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} z-10`} />
                  </div>

                  {/* Floating Geometric Shapes */}
                  <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 border-4 border-accent/30 rounded-full animate-float" />
                    <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-accent/20 rotate-45 animate-float" style={{ animationDelay: "1s" }} />
                    <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/10 rounded-lg animate-float" style={{ animationDelay: "2s" }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                      {/* Icon */}
                      <div className="flex justify-center mb-4 md:mb-6 animate-fade-in">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-accent animate-pulse-glow">
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                        </div>
                      </div>

                      {/* Headline */}
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-2xl mx-auto leading-snug md:leading-normal animate-fade-in px-4">
                        {service.name}
                      </h1>

                      {/* Tagline */}
                      <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 animate-fade-in max-w-3xl mx-auto font-light leading-relaxed px-4" style={{ animationDelay: "0.2s" }}>
                        {service.tagline}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in pt-4" style={{ animationDelay: "0.4s" }}>
                        <Button 
                          size="lg"
                          className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-lg hover:shadow-accent/50 rounded-full font-semibold w-full sm:w-auto"
                          onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Get a Quote
                        </Button>
                        <Button 
                          size="lg"
                          variant="outline"
                          className="border-2 md:border-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all text-base md:text-lg px-8 md:px-10 py-6 md:py-7 bg-transparent/10 backdrop-blur-sm rounded-full font-semibold w-full sm:w-auto"
                          onClick={() => window.location.href = `/services/${service.name.toLowerCase().split(' ')[0]}`}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 md:h-14 md:w-14 bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/50 hover:bg-accent hover:border-accent text-primary-foreground hover:text-accent-foreground transition-all shadow-xl" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 md:h-14 md:w-14 bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/50 hover:bg-accent hover:border-accent text-primary-foreground hover:text-accent-foreground transition-all shadow-xl" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
