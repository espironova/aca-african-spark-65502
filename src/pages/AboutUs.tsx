import { NavLink } from "@/components/NavLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Target, Heart, Lightbulb, Users, TrendingUp, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our dealings"
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for excellence in service delivery and customer satisfaction"
    },
    {
      icon: Heart,
      title: "Care",
      description: "We genuinely care about protecting what matters most to our clients"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace innovation to deliver modern insurance solutions"
    }
  ];

  const team = [
    {
      name: "James Mwangi",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=400&q=80",
      bio: "15+ years leading insurance innovation in Kenya"
    },
    {
      name: "Grace Otieno",
      position: "Head of Client Relations",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
      bio: "Passionate about delivering exceptional customer experiences"
    },
    {
      name: "David Kimani",
      position: "Senior Insurance Advisor",
      image: "https://images.unsplash.com/photo-1600603405959-6d623e92445c?auto=format&fit=crop&w=400&q=80",
      bio: "Specialized in business and commercial insurance solutions"
    },
    {
      name: "Mary Wanjiru",
      position: "Claims Manager",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80",
      bio: "Ensuring fast and fair claim settlements for our clients"
    }
  ];

  const partners = [
    "Jubilee Insurance",
    "CIC Insurance",
    "Britam",
    "APA Insurance",
    "Madison Insurance",
    "ICEA Lion",
    "GA Insurance",
    "Saham Insurance"
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: "Licensed by IRA",
      description: "Fully licensed and regulated by the Insurance Regulatory Authority"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailored insurance solutions that match your unique needs"
    },
    {
      icon: CheckCircle2,
      title: "Wide Range of Covers",
      description: "Access to comprehensive insurance products from leading insurers"
    },
    {
      icon: TrendingUp,
      title: "Fast Claim Assistance",
      description: "Quick and efficient support when you need it most"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=2000&q=80"
            alt="ACA Insurance Team - African Professionals"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trusted Insurance Partners for Kenyan Families, Businesses, and Communities
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-4xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            ACA Insurance Agency is a licensed intermediary by the Insurance Regulatory Authority (IRA), 
            dedicated to helping Kenyans protect what matters most — their homes, health, businesses, and livelihoods.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all">
              <Users className="mr-2 h-5 w-5" />
              Meet Our Team
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open('https://wa.me/254113417658', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to an Advisor
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
            <div className="w-8 h-12 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary-foreground rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="ACA Insurance professionals collaborating in Kenya"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ACA Insurance Agency is a leading insurance solutions provider in Kenya. We partner with top 
                insurance companies to give our clients flexible and affordable policies tailored to their needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to simplify insurance by providing expert advice, personalized service, and 
                dependable support. We believe every Kenyan deserves access to quality protection that safeguards 
                their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our mission, vision, and core values guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:border-accent transition-all duration-300 hover:shadow-xl animate-fade-in">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver accessible, reliable, and affordable insurance to every Kenyan.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:border-accent transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <Lightbulb className="w-16 h-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted, customer-centered insurance agency in Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:border-accent transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, Excellence, Care, and Innovation in everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="group hover:border-accent transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-accent rounded-full" />
          <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-accent rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 border-4 border-accent rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet the People Behind ACA
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a team of passionate insurance advisors and customer champions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="group hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-primary-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Insurance Partners
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We proudly partner with leading insurers to bring you trusted coverage options
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-slide-in gap-12 py-8">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner}-${index}`}
                  className="flex-shrink-0 bg-background/10 backdrop-blur-sm px-8 py-6 rounded-lg hover:bg-background/20 transition-all group"
                >
                  <p className="text-2xl font-bold text-primary-foreground whitespace-nowrap group-hover:scale-110 transition-transform inline-block">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ACA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional insurance experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card 
                  key={reason.title}
                  className="group hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=2000&q=80"
            alt="Happy Kenyan family"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-accent/80" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Join Thousands of Kenyans Who Trust ACA Insurance
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Protect what matters most with personalized, affordable coverage
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all animate-pulse-glow"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary animate-bounce-subtle"
              onClick={() => window.open('https://wa.me/254113417658', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;