"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Home, Heart, Briefcase, DollarSign, Zap, Shield } from "lucide-react";

const QuizSection = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    protection: "",
    priority: ""
  });
  const [result, setResult] = useState<any>(null);

  const protectionOptions = [
    { id: "car", label: "My Car", icon: Car },
    { id: "home", label: "My Home", icon: Home },
    { id: "family", label: "My Family", icon: Heart },
    { id: "business", label: "My Business", icon: Briefcase }
  ];

  const priorityOptions = [
    { id: "lowcost", label: "Low Cost", icon: DollarSign },
    { id: "quick", label: "Quick Cover", icon: Zap },
    { id: "full", label: "Full Protection", icon: Shield }
  ];

  const recommendations: Record<string, any> = {
    "car-lowcost": { title: "Third Party Motor Insurance", description: "Affordable essential coverage for your vehicle" },
    "car-quick": { title: "Comprehensive Motor Insurance", description: "Fast approval with full vehicle protection" },
    "car-full": { title: "Premium Motor Insurance", description: "Complete coverage including all risks" },
    "home-lowcost": { title: "Basic Home Insurance", description: "Essential property protection at low cost" },
    "home-quick": { title: "Standard Home Insurance", description: "Quick setup with comprehensive coverage" },
    "home-full": { title: "Premium Home Insurance", description: "Full protection for your property and belongings" },
    "family-lowcost": { title: "Basic Medical Cover", description: "Affordable healthcare for your family" },
    "family-quick": { title: "Family Health Package", description: "Quick enrollment with essential medical benefits" },
    "family-full": { title: "Comprehensive Life & Medical", description: "Complete health and life protection" },
    "business-lowcost": { title: "Small Business Package", description: "Essential coverage for growing businesses" },
    "business-quick": { title: "Business Essentials", description: "Fast business protection setup" },
    "business-full": { title: "Enterprise Protection Suite", description: "Complete business risk management" }
  };

  const handleProtectionSelect = (id: string) => {
    setSelections({ ...selections, protection: id });
    setStep(2);
  };

  const handlePrioritySelect = (id: string) => {
    setSelections({ ...selections, priority: id });
    const key = `${selections.protection}-${id}`;
    setResult(recommendations[key]);
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setSelections({ protection: "", priority: "" });
    setResult(null);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find My Cover
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer 2 quick questions to discover your perfect insurance plan
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">Step {step} of 3</span>
              <span className="text-sm font-medium text-muted-foreground">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: What to Protect */}
          {step === 1 && (
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What do you want to protect?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {protectionOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleProtectionSelect(option.id)}
                        className="group p-6 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-105"
                      >
                        <Icon className="w-12 h-12 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-lg font-semibold text-foreground">{option.label}</p>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Priority */}
          {step === 2 && (
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What's most important to you?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {priorityOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handlePrioritySelect(option.id)}
                        className="group p-6 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-105"
                      >
                        <Icon className="w-12 h-12 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-lg font-semibold text-foreground">{option.label}</p>
                      </button>
                    );
                  })}
                </div>
                <div className="text-center mt-6">
                  <Button variant="ghost" onClick={() => setStep(1)}>
                    ← Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Result */}
          {step === 3 && result && (
            <Card className="animate-scale-in border-4 border-accent relative overflow-hidden">
              {/* Confetti Effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-accent rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>

              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Shield className="w-10 h-10 text-accent-foreground" />
                </div>
                <CardTitle className="text-3xl text-foreground mb-2">Your Perfect Match!</CardTitle>
                <p className="text-muted-foreground">We recommend:</p>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">{result.title}</h3>
                  <p className="text-lg text-foreground">{result.description}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get My Quote
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={resetQuiz}
                  >
                    Start Over
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
