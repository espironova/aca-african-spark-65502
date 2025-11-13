import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import acaLogo from "@/assets/aca-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Motor Insurance", link: "/services/motor" },
    { name: "Home Insurance", link: "/services/home" },
    { name: "Medical & Life Insurance", link: "/services/medical" },
    { name: "Business Insurance", link: "/services/business" },
    { name: "Agriculture Insurance", link: "/services/agriculture" },
    { name: "Travel & Other Covers", link: "/services/travel" }
  ];

  const resources = [
    { name: "FAQs", link: "#faqs" },
    { name: "Blog / Insights", link: "#blog" },
    { name: "Claim Process", link: "#claims" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-primary shadow-lg py-3" : "bg-primary/95 py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img 
              src={acaLogo} 
              alt="ACA Insurance - The Future is Safe" 
              className="h-14 md:h-16 transform group-hover:scale-105 transition-transform"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className="text-primary-foreground hover:text-accent transition-colors font-medium" activeClassName="text-accent">
              Home
            </NavLink>
            <NavLink to="/about" className="text-primary-foreground hover:text-accent transition-colors font-medium" activeClassName="text-accent">
              About Us
            </NavLink>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-primary-foreground hover:text-accent transition-colors font-medium flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border-2 border-accent/20 rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                  {services.map((service) => (
                    <NavLink
                      key={service.name}
                      to={service.link}
                      className="block px-4 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            
            <NavLink to="/contact" className="text-primary-foreground hover:text-accent transition-colors font-medium" activeClassName="text-accent">
              Contact
            </NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all"
              onClick={() => window.location.href = '#quote'}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className="text-primary-foreground hover:text-accent transition-colors" activeClassName="text-accent">
                Home
              </NavLink>
              <NavLink to="/about" className="text-primary-foreground hover:text-accent transition-colors" activeClassName="text-accent">
                About Us
              </NavLink>
              <NavLink to="/services" className="text-primary-foreground hover:text-accent transition-colors" activeClassName="text-accent">
                Services
              </NavLink>
              {services.map((service) => (
                <NavLink
                  key={service.name}
                  to={service.link}
                  className="text-primary-foreground hover:text-accent transition-colors pl-4 text-sm"
                >
                  • {service.name}
                </NavLink>
              ))}
              <NavLink to="/contact" className="text-primary-foreground hover:text-accent transition-colors" activeClassName="text-accent">
                Contact
              </NavLink>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
