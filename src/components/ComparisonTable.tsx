import { Check, X, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type ServiceKey = "motor" | "home" | "medical" | "business" | "agriculture" | "travel";

const services: { id: ServiceKey; label: string }[] = [
  { id: "motor", label: "Motor" },
  { id: "home", label: "Home" },
  { id: "medical", label: "Medical" },
  { id: "business", label: "Business" },
  { id: "agriculture", label: "Agriculture" },
  { id: "travel", label: "Travel" },
];

interface PlanFeature {
  name: string;
  basic: boolean | string;
  standard: boolean | string;
  premium: boolean | string;
}

const planData: Record<ServiceKey, { prices: [string, string, string]; features: PlanFeature[] }> = {
  motor: {
    prices: ["KES 3,500/mo", "KES 5,250/mo", "KES 7,700/mo"],
    features: [
      { name: "Third-party liability", basic: true, standard: true, premium: true },
      { name: "Collision damage", basic: false, standard: true, premium: true },
      { name: "Theft protection", basic: false, standard: true, premium: true },
      { name: "Windscreen cover", basic: false, standard: false, premium: true },
      { name: "Roadside assistance", basic: false, standard: "Limited", premium: "24/7" },
      { name: "Courtesy vehicle", basic: false, standard: false, premium: true },
    ],
  },
  home: {
    prices: ["KES 2,800/mo", "KES 4,200/mo", "KES 6,160/mo"],
    features: [
      { name: "Fire damage", basic: true, standard: true, premium: true },
      { name: "Theft & burglary", basic: true, standard: true, premium: true },
      { name: "Natural disasters", basic: false, standard: true, premium: true },
      { name: "Personal belongings", basic: false, standard: "Up to 500K", premium: "Up to 2M" },
      { name: "Liability cover", basic: false, standard: false, premium: true },
      { name: "Temporary accommodation", basic: false, standard: false, premium: true },
    ],
  },
  medical: {
    prices: ["KES 4,200/mo", "KES 6,300/mo", "KES 9,240/mo"],
    features: [
      { name: "Outpatient care", basic: true, standard: true, premium: true },
      { name: "Inpatient cover", basic: "Up to 500K", standard: "Up to 2M", premium: "Up to 10M" },
      { name: "Maternity", basic: false, standard: true, premium: true },
      { name: "Dental & optical", basic: false, standard: false, premium: true },
      { name: "Mental health", basic: false, standard: "Limited", premium: true },
      { name: "International cover", basic: false, standard: false, premium: true },
    ],
  },
  business: {
    prices: ["KES 5,500/mo", "KES 8,250/mo", "KES 12,100/mo"],
    features: [
      { name: "Property damage", basic: true, standard: true, premium: true },
      { name: "Liability cover", basic: true, standard: true, premium: true },
      { name: "Business interruption", basic: false, standard: true, premium: true },
      { name: "Employee cover", basic: false, standard: "Up to 10", premium: "Unlimited" },
      { name: "Cyber insurance", basic: false, standard: false, premium: true },
      { name: "Legal expenses", basic: false, standard: false, premium: true },
    ],
  },
  agriculture: {
    prices: ["KES 2,200/mo", "KES 3,300/mo", "KES 4,840/mo"],
    features: [
      { name: "Crop damage", basic: true, standard: true, premium: true },
      { name: "Livestock cover", basic: false, standard: true, premium: true },
      { name: "Equipment", basic: false, standard: true, premium: true },
      { name: "Weather index", basic: false, standard: false, premium: true },
      { name: "Transit cover", basic: false, standard: false, premium: true },
      { name: "Revenue protection", basic: false, standard: false, premium: true },
    ],
  },
  travel: {
    prices: ["KES 1,800/mo", "KES 2,700/mo", "KES 3,960/mo"],
    features: [
      { name: "Medical emergency", basic: true, standard: true, premium: true },
      { name: "Trip cancellation", basic: false, standard: true, premium: true },
      { name: "Lost baggage", basic: false, standard: true, premium: true },
      { name: "Flight delay", basic: false, standard: false, premium: true },
      { name: "Adventure sports", basic: false, standard: false, premium: true },
      { name: "Evacuation cover", basic: false, standard: false, premium: true },
    ],
  },
};

const renderValue = (val: boolean | string) => {
  if (val === true) return <Check className="w-5 h-5 text-accent mx-auto" />;
  if (val === false) return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm font-medium text-accent">{val}</span>;
};

const ComparisonTable = () => {
  const [selected, setSelected] = useState<ServiceKey>("motor");
  const data = planData[selected];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Compare Insurance Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the right coverage tier for your needs and budget
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selected === s.id
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-xl border-2 border-accent/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-border">
              <div className="p-5 font-semibold text-foreground">Features</div>
              {["Basic", "Standard", "Premium"].map((tier, i) => (
                <div key={tier} className={`p-5 text-center ${i === 2 ? "bg-accent/5" : ""}`}>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {i === 2 && <Star className="w-4 h-4 text-accent fill-accent" />}
                    <span className={`font-bold text-lg ${i === 2 ? "text-accent" : "text-foreground"}`}>{tier}</span>
                  </div>
                  <div className={`text-sm font-semibold ${i === 2 ? "text-accent" : "text-muted-foreground"}`}>
                    {data.prices[i]}
                  </div>
                </div>
              ))}
            </div>

            {/* Rows */}
            {data.features.map((feature, i) => (
              <div
                key={feature.name}
                className={`grid grid-cols-4 border-b border-border/50 last:border-0 ${i % 2 === 0 ? "bg-transparent" : "bg-muted/30"}`}
              >
                <div className="p-4 text-sm font-medium text-foreground">{feature.name}</div>
                <div className="p-4 text-center">{renderValue(feature.basic)}</div>
                <div className="p-4 text-center">{renderValue(feature.standard)}</div>
                <div className={`p-4 text-center ${""}`}>{renderValue(feature.premium)}</div>
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-4 border-t border-border bg-muted/20">
              <div className="p-5" />
              {["basic", "standard", "premium"].map((tier, i) => (
                <div key={tier} className="p-5 text-center">
                  <Button
                    className={`rounded-full text-sm ${
                      i === 2
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    size="sm"
                    onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Choose Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
