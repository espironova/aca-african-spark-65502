import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Curved Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1440V0C1440 0 1080 48 720 48C360 48 0 0 0 0V48Z" fill="hsl(var(--primary))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">ACA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">ACA Insurance</h3>
                <p className="text-sm text-primary-foreground/80">Trusted. Reliable. Local.</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Protecting Kenyan families and businesses with affordable, comprehensive insurance solutions since 2010.
            </p>
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-lg border border-accent/30">
              <span className="text-accent text-2xl">✓</span>
              <span className="text-sm font-medium">Licensed by IRA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Get a Quote", "Claims", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                     className="text-primary-foreground/80 hover:text-accent transition-colors hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Motor Insurance",
                "Home Insurance", 
                "Medical & Life",
                "Business Insurance",
                "Agriculture Insurance",
                "Travel Insurance"
              ].map((service) => (
                <li key={service}>
                  <a href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                     className="text-primary-foreground/80 hover:text-accent transition-colors hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-sm text-primary-foreground/80">Blessed House, Opp. Garden City, Thika Road, 2nd Flr Room 205</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">+254 0113 417658</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">info@acainsuranceagency.co.ke</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" }
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kenya Map Illustration */}
        <div className="flex justify-center mb-8 opacity-20">
          <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
            <path d="M100 30 L140 60 L135 90 L110 120 L70 115 L50 85 L55 55 Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse" />
            <circle cx="100" cy="75" r="5" fill="currentColor" className="animate-pulse-glow">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm text-center md:text-left">
            © {currentYear} ACA Insurance Agency. All rights reserved.
          </p>
          <div className="text-sm text-primary-foreground/80">
            Powered by{" "}
            <a 
              href="https://www.espiranova.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              EspiraNova
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-accent hover:bg-accent/90 shadow-2xl animate-pulse-glow z-50 group"
        onClick={() => window.open('https://wa.me/254113417658', '_blank')}
      >
        <MessageCircle className="w-8 h-8 text-accent-foreground group-hover:scale-110 transition-transform" />
      </Button>
    </footer>
  );
};

export default Footer;
