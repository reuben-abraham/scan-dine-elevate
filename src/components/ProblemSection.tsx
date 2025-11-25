import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-12 px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Context: STO 1.0
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Grab launched the first version of Scan To Order (STO) to help restaurant diners browse, order, and pay via QR code. While it solved the need for contactless ordering, adoption was low. Merchants faced operational pain points and diners dropped off due to friction-filled flows.
            </p>

            <h3 className="text-xl font-bold mb-4">What Went Wrong</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-foreground pl-4">
                <h4 className="font-semibold mb-1">54% User Drop-Off </h4>
                <p className="text-sm text-muted-foreground"> Majoritycof users abandoned orders during account verification. The login wall was killing conversion.
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-4">
                <h4 className="font-semibold mb-1">Feature Gaps</h4>
                <p className="text-sm text-muted-foreground">
                  No takeaway options, guest ordering, or payment method localisation. Competitors offered all of these.
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-4">
                <h4 className="font-semibold mb-1">No POS Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Cashiers manually re-entered orders, causing delays, errors, and reconciliation nightmares for merchants.
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-4">
                <h4 className="font-semibold mb-1">Operational Inefficiency</h4>
                <p className="text-sm text-muted-foreground">
                  Merchants couldn't track table-level spend, with orders scattered across invoices.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src="/src/assets/Context.png" alt="Context: STO 1.0" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
