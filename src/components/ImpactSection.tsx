import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, AlertCircle, Users, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    stat: "+15%",
    label: "improvement",
    description: "in front-of-house efficiency"
  },
  {
    icon: AlertCircle,
    label: "Reduced",
    description: "order errors by consolidating baskets per table"
  },
  {
    icon: Users,
    label: "Increased",
    description: "customer engagement through loyalty and social proofing"
  },
  {
    icon: DollarSign,
    label: "Higher AOV",
    description: "driven by personalised upsell prompts"
  }
];

export const ImpactSection = () => {
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
            Post-Launch Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            Early rollout data and pilot feedback showed:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-success/10 text-success group-hover:bg-success group-hover:text-white transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      {metric.stat && (
                        <div className="text-4xl font-bold text-success mb-2">{metric.stat}</div>
                      )}
                      <div className="text-xl font-semibold mb-2">{metric.label}</div>
                      <p className="text-muted-foreground">{metric.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-12">
            <p className="text-xl leading-relaxed font-medium">
              STO 2.0 evolved from a functional QR menu into a <span className="text-primary font-bold">data-driven commerce layer</span> for restaurants—seamlessly connecting online and offline dining within Grab's ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
