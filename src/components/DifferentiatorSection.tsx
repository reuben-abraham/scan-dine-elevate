import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dataIllustration from "@/assets/data-illustration.jpg";
import { Sparkles, TrendingUp, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    text: "Increases AOV through AI-driven upsells"
  },
  {
    icon: MessageSquare,
    text: "Encourages review loops that power future conversions"
  },
  {
    icon: Sparkles,
    text: "Enables targeted deals and loyalty rewards within the same flow"
  }
];

export const DifferentiatorSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Differentiator: <span className="text-gradient">Data as the Growth Engine</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                STO 2.0 plays to Grab's unique strength—<span className="text-foreground font-semibold">customer data</span>. By combining insights from delivery and dine-out behaviour, STO 2.0 personalises menu recommendations, surfaces popular items, and displays user-generated reviews.
              </p>
              <p className="text-lg text-foreground font-medium mb-8">
                This transforms every menu into a dynamic growth tool that:
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <img 
                src={dataIllustration} 
                alt="Data visualization" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
                >
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
