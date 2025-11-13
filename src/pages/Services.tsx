import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Car, Home, Heart, Briefcase, Sprout, Plane, ArrowRight, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Services = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const services = [
    {
      id: "motor-insurance",
      icon: Car,
      title: "Motor Insurance",
      description: "Whether you drive for personal or business use, we help you find the perfect motor insurance policy",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
      covers: ["Private Car", "Commercial Vehicle", "PSV", "Third-Party or Comprehensive"],
      color: "from-accent/20 to-primary/20"
    },
    {
      id: "home-insurance",
      icon: Home,
      title: "Home Insurance",
      description: "Protect your home and belongings from risks like fire, theft, and natural disasters",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      covers: ["Building & Contents", "Domestic Employee Cover", "Fire & Perils"],
      color: "from-primary/20 to-accent/20"
    },
    {
      id: "medical-insurance",
      icon: Heart,
      title: "Medical & Life Insurance",
      description: "Healthcare is peace of mind. We provide health and life cover for individuals, families, and organizations",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      covers: ["Individual & Family Health", "Group Medical", "Life & Funeral Cover"],
      color: "from-accent/20 to-primary/20"
    },
    {
      id: "business-insurance",
      icon: Briefcase,
      title: "Business Insurance",
      description: "Protect your business and employees against risks like fire, theft, or loss of profit",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80",
      covers: ["Fire & Burglary", "Work Injury Benefits", "Professional Indemnity", "Employer's Liability", "Office & Shop Insurance"],
      color: "from-primary/20 to-accent/20"
    },
    {
      id: "agriculture-insurance",
      icon: Sprout,
      title: "Agriculture Insurance",
      description: "Supporting farmers with insurance that protects crops, livestock, and equipment",
      image: "https://images.unsplash.com/photo-1595855759920-86a36193e735?auto=format&fit=crop&w=1200&q=80",
      covers: ["Livestock", "Crop", "Farm Equipment"],
      color: "from-accent/20 to-primary/20"
    },
    {
      id: "travel-insurance",
      icon: Plane,
      title: "Travel & Other Covers",
      description: "Travel with confidence knowing we cover medical emergencies and losses while abroad",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      covers: ["Travel Medical", "Student Travel", "Domestic Worker & Personal Accident"],
      color: "from-primary/20 to-accent/20"
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

  const quizQuestions = [
    {
      question: "What do you want to protect?",
      options: [
        { label: "My Car", icon: Car, value: "motor" },
        { label: "My Home", icon: Home, value: "home" },
        { label: "My Family's Health", icon: Heart, value: "medical" },
        { label: "My Business", icon: Briefcase, value: "business" }
      ]
    },
    {
      question: "What's most important to you?",
      options: [
        { label: "Affordable Coverage", value: "affordable" },
        { label: "Quick & Easy Process", value: "quick" },
        { label: "Comprehensive Protection", value: "comprehensive" }
      ]
    }
  ];

  const handleQuizAnswer = (value: string) => {
    const newAnswers = [...quizAnswers, value];
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setShowResult(false);
  };

  const getRecommendation = () => {
    const coverType = quizAnswers[0];
    return services.find(s => s.id.includes(coverType)) || services[0];
  };

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=2000&q=80"
            alt="Happy African family protected by insurance"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        </div>
        
        {/* Floating animated icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Car className="absolute top-20 left-10 w-16 h-16 text-accent/30 animate-float" style={{ animationDelay: '0s' }} />
          <Home className="absolute top-40 right-20 w-14 h-14 text-accent/40 animate-float" style={{ animationDelay: '1s' }} />
          <Heart className="absolute bottom-40 left-1/4 w-12 h-12 text-accent/30 animate-float" style={{ animationDelay: '2s' }} />
          <Briefcase className="absolute top-60 right-1/4 w-16 h-16 text-accent/40 animate-float" style={{ animationDelay: '1.5s' }} />
          <Sprout className="absolute bottom-32 right-10 w-14 h-14 text-accent/30 animate-float" style={{ animationDelay: '2.5s' }} />
          <Plane className="absolute top-1/2 left-20 w-12 h-12 text-accent/40 animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Insurance Solutions
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive, affordable, and reliable protection for every Kenyan
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all animate-pulse-glow"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary animate-bounce-subtle"
              onClick={() => window.open('https://wa.me/254722906974', '_blank')}
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

      {/* Interactive Service Cards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click any service to learn more about our coverage options
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="group cursor-pointer overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => scrollToService(service.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} z-10 opacity-90 group-hover:opacity-70 transition-opacity`} />
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                        <Icon className="w-10 h-10 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-20 ${isEven ? 'bg-background' : 'bg-secondary'}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${!isEven ? 'md:order-2' : ''} animate-fade-in`}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl group-hover:shadow-accent/50 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
                      <Icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className={`${!isEven ? 'md:order-1' : ''} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <p className="text-lg font-semibold text-foreground mb-4">Coverage Includes:</p>
                    {service.covers.map((cover) => (
                      <div key={cover} className="flex items-start gap-3 group">
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground">{cover}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get {service.title} Quote
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Interactive Quiz */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Find My Ideal Cover
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Answer a few quick questions to discover the perfect insurance for you
              </p>
            </div>

            {!showResult ? (
              <Card className="p-8 animate-scale-in">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Question {quizStep + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-500 ease-out"
                      style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-8">
                  {quizQuestions[quizStep].question}
                </h3>

                <div className="grid gap-4">
                  {quizQuestions[quizStep].options.map((option) => {
                    const OptionIcon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleQuizAnswer(option.value)}
                        className="p-6 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all group text-left flex items-center gap-4"
                      >
                        {OptionIcon && (
                          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
                            <OptionIcon className="w-6 h-6 text-accent" />
                          </div>
                        )}
                        <span className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Card>
            ) : (
              <Card className="p-8 text-center animate-scale-in">
                {/* Confetti effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-accent rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: `${2 + Math.random()}s`
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    {(() => {
                      const recommendation = getRecommendation();
                      const Icon = recommendation.icon;
                      return <Icon className="w-12 h-12 text-accent" />;
                    })()}
                  </div>

                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    We Recommend: {getRecommendation().title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    {getRecommendation().description}
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                      onClick={() => scrollToService(getRecommendation().id)}
                    >
                      Learn More About This Cover
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      onClick={resetQuiz}
                    >
                      Take Quiz Again
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Partner Carousel */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted Insurance Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We work with Kenya's top insurers for trusted protection
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-slide-in gap-8 py-6">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner}-${index}`}
                  className="flex-shrink-0 bg-background px-8 py-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all group"
                >
                  <p className="text-xl font-bold text-foreground whitespace-nowrap">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=2000&q=80"
            alt="Happy African family"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/80" />
        </div>

        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Ready to protect what matters most?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of Kenyans who trust ACA Insurance for their protection needs
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all animate-pulse-glow"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Quote Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary animate-bounce-subtle"
              onClick={() => window.open('https://wa.me/254722906974', '_blank')}
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

export default Services;