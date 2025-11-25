import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ReflectionSection = () => {
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
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-muted-foreground">
              Final Reflection
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              The redesign of STO wasn't just about fixing UX friction, it was about <span className="font-semibold text-foreground/80">rethinking the role of data in dining</span>. By merging POS intelligence, ecosystem integration, and customer insights, Grab STO 2.0 transforms every meal into a smarter, more rewarding experience for both diners and merchants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
