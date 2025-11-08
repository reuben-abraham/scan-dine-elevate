import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-sto.jpg";

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Grab Scan To Order 2.0" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>
      
      <div 
        ref={ref}
        className={`relative z-10 container max-w-5xl px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-4">
          UX Case Study
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
          Grab Scan To Order 2.0
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Elevating the In-Store Experience
        </p>
        <div className="mt-12 flex flex-wrap gap-3 justify-center text-sm">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            Product Design
          </span>
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            User Research
          </span>
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            Data-Driven UX
          </span>
        </div>
      </div>
    </section>
  );
};
