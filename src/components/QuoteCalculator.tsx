import { useState } from "react";
import { Car, Home, Heart, Briefcase, Sprout, Plane, Calculator, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type InsuranceType = "motor" | "home" | "medical" | "business" | "agriculture" | "travel";

interface QuoteState {
  step: number;
  type: InsuranceType | null;
  coverage: string;
  duration: string;
  extras: string[];
}

const insuranceTypes = [
  { id: "motor" as const, icon: Car, label: "Motor", color: "from-accent/20 to-accent/5" },
  { id: "home" as const, icon: Home, label: "Home", color: "from-accent/20 to-accent/5" },
  { id: "medical" as const, icon: Heart, label: "Medical", color: "from-accent/20 to-accent/5" },
  { id: "business" as const, icon: Briefcase, label: "Business", color: "from-accent/20 to-accent/5" },
  { id: "agriculture" as const, icon: Sprout, label: "Agriculture", color: "from-accent/20 to-accent/5" },
  { id: "travel" as const, icon: Plane, label: "Travel", color: "from-accent/20 to-accent/5" },
];

const coverageLevels = [
  { id: "basic", label: "Basic", description: "Essential coverage", multiplier: 1 },
  { id: "standard", label: "Standard", description: "Recommended protection", multiplier: 1.5 },
  { id: "premium", label: "Premium", description: "Maximum coverage", multiplier: 2.2 },
];

const durations = [
  { id: "monthly", label: "Monthly", multiplier: 1 },
  { id: "quarterly", label: "Quarterly", multiplier: 2.8 },
  { id: "annual", label: "Annual", multiplier: 10 },
];

const basePrices: Record<InsuranceType, number> = {
  motor: 3500,
  home: 2800,
  medical: 4200,
  business: 5500,
  agriculture: 2200,
  travel: 1800,
};

const QuoteCalculator = () => {
  const [state, setState] = useState<QuoteState>({
    step: 1,
    type: null,
    coverage: "",
    duration: "",
    extras: [],
  });

  const calculatePrice = () => {
    if (!state.type || !state.coverage || !state.duration) return 0;
    const base = basePrices[state.type];
    const covMultiplier = coverageLevels.find(c => c.id === state.coverage)?.multiplier || 1;
    const durMultiplier = durations.find(d => d.id === state.duration)?.multiplier || 1;
    return Math.round(base * covMultiplier * durMultiplier);
  };

  const canProceed = () => {
    if (state.step === 1) return !!state.type;
    if (state.step === 2) return !!state.coverage;
    if (state.step === 3) return !!state.duration;
    return true;
  };

  return (
    <section id="quote" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            Instant Estimate
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Your Insurance Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer a few quick questions to get an instant estimate
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  state.step >= s
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {state.step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${((state.step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <Card className="max-w-3xl mx-auto border-2 border-accent/10 bg-card/80 backdrop-blur-xl shadow-2xl">
          <CardContent className="p-8">
            {/* Step 1: Insurance Type */}
            {state.step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-foreground text-center">What do you want to insure?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {insuranceTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setState(s => ({ ...s, type: type.id }))}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                          state.type === type.id
                            ? "border-accent bg-accent/10 shadow-lg"
                            : "border-border bg-card hover:border-accent/50"
                        }`}
                      >
                        <Icon className={`w-10 h-10 mx-auto mb-3 ${state.type === type.id ? "text-accent" : "text-muted-foreground"}`} />
                        <span className={`font-semibold ${state.type === type.id ? "text-accent" : "text-foreground"}`}>{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Coverage Level */}
            {state.step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-foreground text-center">Choose your coverage level</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {coverageLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setState(s => ({ ...s, coverage: level.id }))}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 text-left ${
                        state.coverage === level.id
                          ? "border-accent bg-accent/10 shadow-lg"
                          : "border-border bg-card hover:border-accent/50"
                      }`}
                    >
                      <div className={`text-xl font-bold mb-1 ${state.coverage === level.id ? "text-accent" : "text-foreground"}`}>{level.label}</div>
                      <div className="text-sm text-muted-foreground">{level.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Duration */}
            {state.step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-foreground text-center">Select payment frequency</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {durations.map((dur) => (
                    <button
                      key={dur.id}
                      onClick={() => setState(s => ({ ...s, duration: dur.id }))}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        state.duration === dur.id
                          ? "border-accent bg-accent/10 shadow-lg"
                          : "border-border bg-card hover:border-accent/50"
                      }`}
                    >
                      <div className={`text-xl font-bold ${state.duration === dur.id ? "text-accent" : "text-foreground"}`}>{dur.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Result */}
            {state.step === 4 && (
              <div className="text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Your Estimated Quote</h3>
                <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
                  <div className="text-sm text-muted-foreground mb-1">Estimated Premium</div>
                  <div className="text-5xl font-bold text-accent mb-2">
                    KES {calculatePrice().toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {coverageLevels.find(c => c.id === state.coverage)?.label} • {durations.find(d => d.id === state.duration)?.label}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">This is an estimate. Contact us for a personalized quote.</p>
                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg rounded-full font-semibold"
                  onClick={() => window.location.href = "/contact"}
                >
                  Get Personalized Quote
                </Button>
              </div>
            )}

            {/* Navigation */}
            {state.step < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setState(s => ({ ...s, step: s.step - 1 }))}
                  disabled={state.step === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button
                  onClick={() => setState(s => ({ ...s, step: s.step + 1 }))}
                  disabled={!canProceed()}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                >
                  {state.step === 3 ? "Get Quote" : "Next"} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {state.step === 4 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setState({ step: 1, type: null, coverage: "", duration: "", extras: [] })}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors underline"
                >
                  Start Over
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteCalculator;
