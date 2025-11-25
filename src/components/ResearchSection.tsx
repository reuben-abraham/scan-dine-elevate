import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle, AlertTriangle } from "lucide-react";

const competitors = [
  {
    name: "TabSquare",
    image: "tabsquare.png",
    strengths: [
      "Deep menu customization lets restaurants express their brand identity",
      "Strong recommendation & upselling nudges on menu",
      "Extensive metadata to support complex add-ons"
    ],
    improvements: [
      "No quick switch for takeaway or per-item takeaway routing."
    ]
  },
  {
    name: "Xilnex",
    image: "xilnex.png",
    strengths: [
      "Live order status tracking keeps staff and diners aligned."
    ],
    improvements: [
      "Basic search capabilities, no intelligentranking or context matching",
      "Interface often feels glitchy and difficult to use"
    ]
  },
  {
    name: "FeedMe",
    image: "feedme.png",
    strengths: [
      "Rich merchant profiles highlight story, hours, and operational detail.",
      "Semantic search and sorting help guests surface dishes fast.",
      "Built-in membership programme keeps loyalty within the flow."
    ],
    improvements: [
      "Personalisation is limited, the same menu appears for every guest."
    ]
  }
];

export const ResearchSection = () => {
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
            Competitive Research & Learnings
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            To do this the right way this time, we looked at leading Southeast Asian STO solutions, went down to the field to see how people actually order, and identified common patterns.
          </p>

          {/* Competitor Analysis Section */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Competitor Insights</h3>
            <div className="mb-8 relative">
              <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-4 md:gap-6 pr-6 md:pr-12">
                  {competitors.map((competitor, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-shadow rounded-2xl min-w-[300px] md:min-w-[460px]"
                    >
                    <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                      <img
                        src={`/images/competitors/${competitor.image}`}
                        alt={`${competitor.name} product screen`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      
                    </div>
                    <CardHeader className="pb-3">
                      <h4 className="font-semibold text-lg">{competitor.name}</h4>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {competitor.strengths.map((strength, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500 mt-0.5" />
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                      {competitor.improvements.length > 0 && (
                        <ul className="space-y-2 pt-3 border-t border-border/60">
                          {competitor.improvements.map((improvement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 flex-shrink-0 text-amber-500 mt-0.5" />
                              <span>{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 pointer-events-none" />
            </div>
          </div>

          {/* Field Learnings - User Insights */}
          <div className="mb-12 relative left-1/2 w-screen -translate-x-1/2">
            <div className="relative overflow-hidden h-[42rem] md:h-[48rem]">
              <img
                src="/images/field-learnings-bg.jpg"
                alt="Group ordering field learning backdrop"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="relative flex h-full items-end px-6 py-12 sm:px-10 md:px-14 lg:px-20">
                <div className="bg-background border border-border/60 p-6 sm:p-8 w-full max-w-6xl mx-auto">
                  <h3 className="text-lg font-semibold mb-3 uppercase tracking-wider">Field Learnings — User Insights</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div className="lg:col-span-3 space-y-6">
                      <p className="text-base leading-relaxed">
                        We went down to the field to see how people actually order in group dining. This helped us understand the gaps in current offerings. We realised how dynamic the ordering process in store could be, from indivudals to groups, cafes to buffets, there's a lot of nuance in how people order.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Card className="border-l-4 border-l-primary">
                          <CardContent className="pt-4">
                            <p className="text-sm">
                              <span className="font-semibold">Family Group Dining:</span> One coordinator goes around the table asking for everyone's orders
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-primary">
                          <CardContent className="pt-4">
                            <p className="text-sm">
                              <span className="font-semibold">Friends Group Dining:</span> Confusion around how to split the bill and what to order for the table
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-primary">
                          <CardContent className="pt-4">
                            <p className="text-sm">
                              <span className="font-semibold">Solo Dining:</span> Lack of clarity around potion sizes
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
