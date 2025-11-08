import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const evolutions = [
  {
    title: "Simplified Entry",
    description: "Removed landing page; users go straight to the menu with categories and a search bar upfront."
  },
  {
    title: "Seamless Guest Experience",
    description: "No login required for web orders; optional for app users who want deals or loyalty stamps."
  },
  {
    title: "Personalised & Social Menus",
    description: "Integrated sections like 'Most Ordered', 'Recommended for You', and 'Order Again' using Grab data."
  },
  {
    title: "Communal Basket & Smart Invoicing",
    description: "All table orders feed into a single bill to reduce errors and simplify checkout."
  },
  {
    title: "POS Integration",
    description: "Dynamic QR codes auto-generate via POS systems, linking orders directly to kitchens. Merchants gain real-time insights on AOV, spend per table, and table-turn rates."
  }
];

export const SolutionSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Design Evolution
          </h2>

          <div className="space-y-6">
            {evolutions.map((evolution, index) => (
              <div key={index} className="border-l-2 border-foreground pl-4">
                <h3 className="text-base font-semibold mb-1">{evolution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {evolution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
