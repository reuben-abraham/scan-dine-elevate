import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const insights = [
  "Guest Ordering: Most platforms didn't require account creation",
  "Upfront Categories: Simplified discovery reduced ordering time",
  "Integrated Payments: Support for local methods like PromptPay and DuitNow",
  "Consolidated Invoicing: All table orders grouped into one bill"
];

export const ResearchSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Competitive Research & Learnings
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            A study across leading Southeast Asian STO solutions (TabSquare, Xilnex, Zeoniq, FeedMe) revealed clear patterns:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {insights.map((insight, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">{insight}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-12">
            <p className="text-lg leading-relaxed">
              These insights formed the foundation for STO 2.0's redesign principles: <span className="font-semibold text-primary">reduce friction, improve efficiency, and enhance trust through social proof.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
