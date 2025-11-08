import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, TrendingUp, Database } from "lucide-react";

const goals = [
  {
    icon: TrendingUp,
    text: "Streamline ordering and payment to reduce user drop-offs"
  },
  {
    icon: Database,
    text: "Integrate tightly with POS systems to improve merchant efficiency"
  },
  {
    icon: Target,
    text: "Leverage Grab's data for personalisation and loyalty uplift"
  }
];

export const GoalsSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Goal: <span className="text-gradient">Redefining STO for 2.0</span>
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Problem Statement</h3>
            <p className="text-lg text-foreground/90 leading-relaxed italic">
              How might we rebuild STO into a merchant-first, data-driven solution that reduces friction for diners and boosts average order value (AOV) through personalisation and ecosystem integration?
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-8">Design Goals</h3>
          <div className="space-y-4">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
                >
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium">{goal.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
