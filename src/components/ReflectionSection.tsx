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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Final Reflection
          </h2>
          
          <p className="text-base leading-relaxed">
            The redesign of STO wasn't just about fixing UX friction—it was about <span className="font-semibold">rethinking the role of data in dining</span>. By merging POS intelligence, ecosystem integration, and customer insights, Grab STO 2.0 transforms every meal into a smarter, more rewarding experience for both diners and merchants.
          </p>
        </div>
      </div>
    </section>
  );
};
