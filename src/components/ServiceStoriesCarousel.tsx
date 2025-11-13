import { useState } from "react";
import { Car, Home, Heart, Briefcase, Sprout, Plane, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ServiceStoriesCarousel = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      icon: Car,
      title: "Motor Insurance",
      tagline: "When accidents happen, we're there",
      story: "From car accidents to theft protection, ACA helps get you back on the road with comprehensive motor coverage.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
      color: "from-accent/20 to-primary/30"
    },
    {
      icon: Home,
      title: "Home Insurance",
      tagline: "Your home, rebuilt and restored",
      story: "Fire, theft, or natural disasters - we help rebuild what matters most and protect your family's sanctuary.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      color: "from-primary/30 to-accent/20"
    },
    {
      icon: Heart,
      title: "Medical Insurance",
      tagline: "Healthcare when you need it most",
      story: "From hospital visits to full recovery, ACA ensures you get the medical care you deserve without financial worry.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80",
      color: "from-accent/20 to-primary/30"
    },
    {
      icon: Briefcase,
      title: "Business Insurance",
      tagline: "Your business, protected and thriving",
      story: "Shop fires, theft, or business interruption - we help you reopen and continue serving your community.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
      color: "from-primary/30 to-accent/20"
    },
    {
      icon: Sprout,
      title: "Agriculture Insurance",
      tagline: "From crop failure to bountiful harvest",
      story: "Droughts, pests, or weather damage - ACA supports farmers through challenges to ensure successful harvests.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
      color: "from-accent/20 to-primary/30"
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      tagline: "Safe journeys, worry-free travels",
      story: "Flight delays, medical emergencies abroad, or lost luggage - travel confidently knowing ACA has you covered.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      color: "from-primary/30 to-accent/20"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentItem = stories[currentStory];
  const Icon = currentItem.icon;

  return (
    <section id="service-stories" className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            When the Unexpected Happens, ACA Has You Covered
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real protection for real African lives - from crisis to resolution
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Story Card */}
          <Card className="overflow-hidden border-2 border-accent/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[400px] md:h-auto overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentItem.color} z-10 opacity-80`} />
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                    <Icon className="w-12 h-12 text-accent-foreground" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-background to-secondary/30">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {currentItem.title}
                    </h3>
                    <p className="text-accent text-lg font-semibold italic">
                      {currentItem.tagline}
                    </p>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentItem.story}
                  </p>

                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all"
                    onClick={() => window.location.href = '/services'}
                  >
                    Learn More About {currentItem.title}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full w-14 h-14 bg-background/90 backdrop-blur-sm border-2 border-accent hover:bg-accent hover:scale-110 transition-all pointer-events-auto shadow-xl"
              onClick={prevStory}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full w-14 h-14 bg-background/90 backdrop-blur-sm border-2 border-accent hover:bg-accent hover:scale-110 transition-all pointer-events-auto shadow-xl"
              onClick={nextStory}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Story Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`transition-all rounded-full ${
                  index === currentStory
                    ? "bg-accent w-12 h-3 shadow-lg shadow-accent/50"
                    : "bg-muted hover:bg-accent/50 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStoriesCarousel;
