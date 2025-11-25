import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    stat: "33%",
    description: "Reduction in time to order for all users"
  },
 
  {
    stat: "89%",
    description: "Order completetion rate for all users"
  },
  {
    stat: "25pp",
    description: "Improvement in order coverage per merchant"
  },
  {
    stat: "60%",
    description: "Average merchant adoption rate per POS partner"
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
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Early rollout data and pilot feedback highlighted the following outcomes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-2">
                <CardContent className="py-6 px-5">
                  <div className="flex flex-col items-start">
                    <div className="mb-2">
                      <span className="inline-flex items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-semibold px-2 py-1">
                        {index < 2 ? "PAX" : "MEX"}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-extrabold text-3xl tracking-tight">
                        {metric.stat ? metric.stat : "—"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-snug">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
