import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

const merchantBenefits = [
  {
    title: "AI-Driven Upsells",
    description: "Increase AOV through intelligent recommendations using Grab's ecosystem data",
    icon: "✨"
  },
  {
    title: "Contexual Loyalty",
    description: "Enables Grab loyalty within the ordering flow to capture user consent to drive retention",
    icon: "🎯"
  }
];

const customerBenefits = [
  {
    title: "Shared Ordering Experience",
    description: "Plan and modify a shared basket for the table together in real-time reducing total time to order",
    icon: "🧺"
  },
  {
    title: "Personalisation",
    description: "Intelligent and personalised ordering experience based on user preferences and history",
    icon: "📱"
  }
];

export const DifferentiatorSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-16 px-6 border-t border-border bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Differentiators</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-2">
              QR ordering space in 2025 is a crowded space with many high-quality solutions. To stand out, we needed our product to deliver value not just to end consumers but also to merchants. After extensive research and brainstorming, we identified four key differentiators:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">For merchants</h3>
              {merchantBenefits.map((benefit, index) => (
                <Card key={index} className="border rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex gap-3 items-start">
                      <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 font-display">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">For customers</h3>
              {customerBenefits.map((benefit, index) => (
                <Card key={index} className="border rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex gap-3 items-start">
                      <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 font-display">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Placeholder visual area for mockups if needed */}
          {/* <div className="mt-12">
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <div className="text-4xl mb-3">🧩</div>
                <p className="text-xs font-semibold text-muted-foreground mb-1">Differentiator Visual Mock</p>
                <p className="text-xs text-muted-foreground/70">[Replace with merchant/customer mockups]</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
