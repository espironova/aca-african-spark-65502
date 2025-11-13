import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 722 906 974", "+254 733 000 000"],
      action: "tel:+254722906974"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@acainsuranceagency.co.ke", "support@acainsuranceagency.co.ke"],
      action: "mailto:info@acainsuranceagency.co.ke"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["CBD, Nairobi", "Kenya"],
      action: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=2000&q=80"
            alt="Nairobi Skyline"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're here to help protect what matters most to you
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.title}
                  className="group hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(info.action, '_blank')}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-lg border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 text-lg border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 text-lg border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="text-lg border-2 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all text-lg py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold text-foreground mb-6">Visit Our Office</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Located in the heart of Nairobi's CBD, we're easy to find and ready to serve you.
              </p>

              <Card className="overflow-hidden border-2 border-accent/20 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.82804635092!2d36.70730744956052!3d-1.3028617540103258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ACA Insurance Agency Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </Card>

              <div className="mt-8 p-6 bg-secondary rounded-lg border-2 border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong className="text-foreground">Saturday:</strong> 9:00 AM - 1:00 PM</p>
                  <p><strong className="text-foreground">Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <button
        onClick={() => window.open('https://wa.me/254722906974', '_blank')}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>

      <Footer />
    </div>
  );
};

export default Contact;
