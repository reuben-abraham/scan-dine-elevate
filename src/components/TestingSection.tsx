import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, MapPin, Users, Lightbulb } from "lucide-react";

const findings = [
  {
    stat: "30%",
    description: "reduction in user drop-offs between scan and checkout"
  },
  {
    icon: CheckCircle2,
    description: "Faster staff turnaround due to integrated POS flow"
  },
  {
    icon: CheckCircle2,
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
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Testing & Learnings
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pilot Markets</p>
                <p className="font-semibold">Thailand & Malaysia</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
              <Users className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Methods</p>
                <p className="font-semibold">In-restaurant usability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
              <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Research</p>
                <p className="font-semibold">Task observation & interviews</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-8">Key Findings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {findings.map((finding, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                {finding.stat ? (
                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">{finding.stat}</div>
                    <p className="text-lg text-muted-foreground">{finding.description}</p>
                  </div>
                ) : (
                  <div className="flex items-start gap-4">
                    {finding.icon && <finding.icon className="w-6 h-6 text-success flex-shrink-0 mt-1" />}
                    <p className="text-lg">{finding.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
