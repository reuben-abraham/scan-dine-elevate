import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  {
    stat: "+15%",
    description: "improvement in front-of-house efficiency"
  },
  {
    description: "Reduced order errors by consolidating baskets per table"
  },
  {
    description: "Increased customer engagement through loyalty and social proofing"
  },
  {
    description: "Higher AOV driven by personalised upsell prompts"
  }
];

export const ImpactSection = () => {
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
            Post-Launch Impact
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Early rollout data and pilot feedback showed:
          </p>

          <div className="space-y-3 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="border-l-2 border-foreground pl-4">
                {metric.stat ? (
                  <p className="text-sm">
                    <span className="font-bold text-lg">{metric.stat}</span> {metric.description}
                  </p>
                ) : (
                  <p className="text-sm">{metric.description}</p>
                )}
              </div>
            ))}
          </div>

          <p className="text-base leading-relaxed">
            STO 2.0 evolved from a functional QR menu into a <span className="font-semibold">data-driven commerce layer</span> for restaurants—seamlessly connecting online and offline dining within Grab's ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};
