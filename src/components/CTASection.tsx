import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Award } from "lucide-react";

const CTASection = () => {
  return (
    <section id="quote" className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Ready to protect what matters most?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Get personalized insurance coverage today. Our local experts are here to help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-all text-lg px-10 py-6 shadow-2xl group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Talk to Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all text-lg px-10 py-6 bg-transparent group"
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-3 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Award className="w-6 h-6" />
            <span className="text-sm font-medium">Licensed by IRA Kenya • Trusted Since 2010</span>
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Phone className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <h4 className="font-semibold text-primary-foreground mb-2">Call Us</h4>
              <p className="text-primary-foreground/80">+254 700 000 000</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <MessageCircle className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <h4 className="font-semibold text-primary-foreground mb-2">WhatsApp</h4>
              <p className="text-primary-foreground/80">Chat instantly</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Award className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <h4 className="font-semibold text-primary-foreground mb-2">Visit Office</h4>
              <p className="text-primary-foreground/80">Nairobi CBD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
