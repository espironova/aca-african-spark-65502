import { Car, Home, Heart, Briefcase, Sprout, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import motorInsurance from "@/assets/motor-insurance.jpg";
import homeInsurance from "@/assets/home-insurance.jfif";
import medicalInsurance from "@/assets/medical-insurance.jpg";
import businessInsurance from "@/assets/business-insurance.webp";
import travelInsurance from "@/assets/travel-insurance.jfif";

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Comprehensive coverage for your vehicle. Protect against accidents, theft, and third-party liability.",
      image: motorInsurance,
      color: "from-accent/20 to-primary/20"
    },
    {
      icon: Home,
      title: "Home Insurance",
      description: "Safeguard your property and belongings. Coverage for fire, theft, natural disasters and more.",
      image: homeInsurance,
      color: "from-primary/20 to-accent/20"
    },
    {
      icon: Heart,
      title: "Medical & Life Insurance",
      description: "Health and life protection for you and your family. Peace of mind for the unexpected.",
      image: medicalInsurance,
      color: "from-accent/20 to-primary/20"
    },
    {
      icon: Briefcase,
      title: "Business Insurance",
      description: "Protect your enterprise from risks. Coverage for property, liability, and business interruption.",
      image: businessInsurance,
      color: "from-primary/20 to-accent/20"
    },
    {
      icon: Sprout,
      title: "Agriculture Insurance",
      description: "Coverage for farmers and agribusinesses. Protect crops, livestock, and farming equipment.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
      color: "from-accent/20 to-primary/20"
    },
    {
      icon: Plane,
      title: "Travel & Other Covers",
      description: "Travel insurance and specialized coverage. Stay protected wherever life takes you.",
      image: travelInsurance,
      color: "from-primary/20 to-accent/20"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Insurance Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage tailored for Kenyan families and businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group cursor-pointer overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} z-10 opacity-90 group-hover:opacity-80 transition-opacity`} />
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
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

export default ServicesSection;
