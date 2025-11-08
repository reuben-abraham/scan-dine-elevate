import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ReflectionSection = () => {
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
            Final Reflection
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <p className="text-xl leading-relaxed text-foreground/90">
              The redesign of STO wasn't just about fixing UX friction—it was about <span className="text-primary font-semibold">rethinking the role of data in dining</span>. By merging POS intelligence, ecosystem integration, and customer insights, Grab STO 2.0 transforms every meal into a smarter, more rewarding experience for both diners and merchants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
