import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-sto.jpg";

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-16 px-6">
      <div 
        ref={ref}
        className={`container max-w-6xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase mb-3">
          UX Case Study
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Grab Scan To Order 2.0
        </h1>
        <p className="text-lg text-muted-foreground">
          Elevating the In-Store Experience
        </p>
      </div>
    </section>
  );
};
