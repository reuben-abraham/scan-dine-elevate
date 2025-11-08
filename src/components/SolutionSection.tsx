import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import posIllustration from "@/assets/pos-illustration.jpg";
import { Layout, UserCircle2, ThumbsUp, ShoppingCart, Zap } from "lucide-react";

const evolutions = [
  {
    icon: Layout,
    title: "Simplified Entry",
    description: "Removed landing page; users go straight to the menu with categories and a search bar upfront."
  },
  {
    icon: UserCircle2,
    title: "Seamless Guest Experience",
    description: "No login required for web orders; optional for app users who want deals or loyalty stamps."
  },
  {
    icon: ThumbsUp,
    title: "Personalised & Social Menus",
    description: "Integrated sections like 'Most Ordered', 'Recommended for You', and 'Order Again' using Grab data."
  },
  {
    icon: ShoppingCart,
    title: "Communal Basket & Smart Invoicing",
    description: "All table orders feed into a single bill to reduce errors and simplify checkout."
  },
  {
    icon: Zap,
    title: "POS Integration",
    description: "Dynamic QR codes auto-generate via POS systems, linking orders directly to kitchens. Merchants gain real-time insights on AOV, spend per table, and table-turn rates."
  }
];

export const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Design Evolution
          </h2>

          <div className="space-y-8 mb-16">
            {evolutions.map((evolution, index) => {
              const Icon = evolution.icon;
              return (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="flex gap-8 items-start p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{evolution.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {evolution.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
            <img 
              src={posIllustration} 
              alt="POS Integration Architecture" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
