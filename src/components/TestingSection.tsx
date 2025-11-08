import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const findings = [
  {
    stat: "30%",
    description: "reduction in user drop-offs between scan and checkout"
  },
  {
    description: "Faster staff turnaround due to integrated POS flow"
  },
  {
    description: "High merchant satisfaction with invoice consolidation"
  },
  {
    stat: "12%",
    description: "higher selection rates for 'Most Ordered' dishes"
  }
];

export const TestingSection = () => {
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
            Testing & Learnings
          </h2>

          <div className="text-sm text-muted-foreground mb-8">
            <span className="font-semibold text-foreground">Pilot Markets:</span> Thailand & Malaysia | 
            <span className="font-semibold text-foreground"> Methods:</span> In-restaurant usability tests, task observation, and merchant interviews
          </div>

          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Key Findings</h3>
          <div className="space-y-3">
            {findings.map((finding, index) => (
              <div key={index} className="border-l-2 border-foreground pl-4">
                {finding.stat ? (
                  <p className="text-sm">
                    <span className="font-bold text-lg">{finding.stat}</span> {finding.description}
                  </p>
                ) : (
                  <p className="text-sm">{finding.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
