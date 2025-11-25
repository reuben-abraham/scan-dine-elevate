import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

export const GoalsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-16 px-6">
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Card className="bg-neutral-700">
            <CardContent className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Goal: Redefining STO for 2025
              </h2>
              
              <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-70 text-white">Problem Statement</h3>
                <p className="text-lg leading-relaxed text-white">
                  How might we rebuild STO into a merchant-first, data-driven solution that reduces friction for diners and boosts average order value (AOV) through personalisation and ecosystem integration?
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
