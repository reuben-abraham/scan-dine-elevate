import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const GoalsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-16 px-6 bg-inverted">
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Goal: Redefining STO for 2.0
          </h2>
          
          <div className="mb-12">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">Problem Statement</h3>
            <p className="text-lg leading-relaxed">
              How might we rebuild STO into a merchant-first, data-driven solution that reduces friction for diners and boosts average order value (AOV) through personalisation and ecosystem integration?
            </p>
          </div>

          <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider opacity-70">Design Goals</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-white pl-4">
              <p className="text-base">Streamline ordering and payment to reduce user drop-offs</p>
            </div>
            <div className="border-l-2 border-white pl-4">
              <p className="text-base">Integrate tightly with POS systems to improve merchant efficiency</p>
            </div>
            <div className="border-l-2 border-white pl-4">
              <p className="text-base">Leverage Grab's data for personalisation and loyalty uplift</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
