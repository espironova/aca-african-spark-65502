import { FileText, Search, ClipboardCheck, Banknote, CheckCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const steps = [
  {
    icon: FileText,
    title: "File Your Claim",
    description: "Submit your claim online, by phone, or visit any ACA branch. Provide details and supporting documents.",
    duration: "Day 1",
  },
  {
    icon: Search,
    title: "Claim Assessment",
    description: "Our team reviews your claim and may schedule an assessment visit if needed.",
    duration: "Day 2-5",
  },
  {
    icon: ClipboardCheck,
    title: "Verification",
    description: "We verify all documentation and assess the claim against your policy coverage.",
    duration: "Day 5-10",
  },
  {
    icon: Banknote,
    title: "Approval & Processing",
    description: "Once verified, your claim is approved and payment is processed promptly.",
    duration: "Day 10-14",
  },
  {
    icon: CheckCircle,
    title: "Payment Received",
    description: "Funds are deposited directly to your M-Pesa or bank account. Claim closed.",
    duration: "Day 14-21",
  },
];

const ClaimsTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, i]);
            }, i * 300);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="claims" ref={sectionRef} className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            How Our Claims Process Works
          </h2>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            From filing to payment — transparent, fast, and hassle-free
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 md:-translate-x-px" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(i);
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-start gap-8">
                  <div className={`${isEven ? "text-right" : "order-3 text-left"}`}>
                    <div className={`bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-6 inline-block ${isEven ? "ml-auto" : "mr-auto"}`}>
                      <div className="text-xs font-bold text-accent mb-2">{step.duration}</div>
                      <h3 className="text-lg font-bold text-primary-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-primary-foreground/70">{step.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isVisible ? "bg-accent shadow-lg shadow-accent/30 scale-100" : "bg-muted scale-75"
                    }`}>
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>

                  <div className={`${isEven ? "order-3" : ""}`} />
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex gap-4 pl-0">
                  <div className="flex flex-col items-center z-10 shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isVisible ? "bg-accent shadow-lg shadow-accent/30" : "bg-muted"
                    }`}>
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-5">
                    <div className="text-xs font-bold text-accent mb-2">{step.duration}</div>
                    <h3 className="text-lg font-bold text-primary-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClaimsTimeline;
