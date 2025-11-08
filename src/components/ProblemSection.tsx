import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertCircle, TrendingDown, GitBranch, Clock } from "lucide-react";

const problems = [
  {
    icon: GitBranch,
    title: "No POS Integration",
    description: "Cashiers manually re-entered orders, causing delays, errors, and reconciliation nightmares for merchants."
  },
  {
    icon: TrendingDown,
    title: "High Drop-Off Rates",
    stat: "54%",
    description: "of users abandoned orders during account verification. The login wall was killing conversion."
  },
  {
    icon: AlertCircle,
    title: "Feature Gaps",
    description: "No takeaway options, guest ordering, or seamless loyalty integration. Competitors offered all of these."
  },
  {
    icon: Clock,
    title: "Operational Inefficiency",
    description: "Merchants couldn't track table-level spend, with orders scattered across invoices."
  }
];

export const ProblemSection = () => {
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
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Context: <span className="text-muted-foreground">STO 1.0</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Grab launched the first version of <span className="text-foreground font-medium">Scan To Order (STO)</span> to help restaurant diners browse, order, and pay via QR code. While it solved the need for contactless ordering, adoption was low. Merchants faced operational pain points and diners dropped off due to friction-filled flows.
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-12">What Went Wrong</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-xl font-semibold">{problem.title}</h4>
                        {problem.stat && (
                          <span className="text-2xl font-bold text-destructive">{problem.stat}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
