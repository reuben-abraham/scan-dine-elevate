import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const insights = [
  "Guest Ordering: Most platforms didn't require account creation",
  "Upfront Categories: Simplified discovery reduced ordering time",
  "Integrated Payments: Support for local methods like PromptPay and DuitNow",
  "Consolidated Invoicing: All table orders grouped into one bill"
];

export const ResearchSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Competitive Research & Learnings
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            A study across leading Southeast Asian STO solutions (TabSquare, Xilnex, Zeoniq, FeedMe) revealed clear patterns:
          </p>

          <div className="space-y-3 mb-8">
            {insights.map((insight, index) => (
              <div key={index} className="border-l-2 border-foreground pl-4">
                <p className="text-sm">{insight}</p>
              </div>
            ))}
          </div>

          <p className="text-base leading-relaxed">
            These insights formed the foundation for STO 2.0's redesign principles: <span className="font-semibold">reduce friction, improve efficiency, and enhance trust through social proof.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
