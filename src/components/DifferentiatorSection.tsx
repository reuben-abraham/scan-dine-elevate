import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  "Increases AOV through AI-driven upsells",
  "Encourages review loops that power future conversions",
  "Enables targeted deals and loyalty rewards within the same flow"
];

export const DifferentiatorSection = () => {
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
            Our Differentiator: Data as the Growth Engine
          </h2>
          
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            STO 2.0 plays to Grab's unique strength—<span className="text-foreground font-semibold">customer data</span>. By combining insights from delivery and dine-out behaviour, STO 2.0 personalises menu recommendations, surfaces popular items, and displays user-generated reviews.
          </p>

          <p className="text-base font-medium mb-6">
            This transforms every menu into a dynamic growth tool that:
          </p>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="border-l-2 border-foreground pl-4">
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
