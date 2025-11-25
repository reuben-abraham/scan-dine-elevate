import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Bell } from "lucide-react";

/* const findings = [
  {
    stat: "30%",
    description: "reduction in user drop-offs between scan and checkout"
  },
  {
    description: "Faster staff turnaround due to integrated POS flow"
  },
  {
    description: "High merchant satisfaction with invoice consolidation"
  },
  {
    stat: "12%",
    description: "higher selection rates for 'Most Ordered' dishes"
  }
]; */

export const TestingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <section className="border-t border-border relative">
      {/* Background image container with 16:9 aspect ratio */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/src/assets/UT.gif')",
          aspectRatio: "16/9"
        }}
      />
      <div className="container max-w-6xl px-6 relative -mt-[10%] pb-16">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Card className="bg-white">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Testing & Learnings
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                In-person usability testing and interviews with 12 participants
              </p>

               {/* Vibecoded Prototype Callout */}
               <Card className="bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                    {/* Left side - Header + Content (60% width) */}
                    <div className="md:col-span-3 flex flex-col space-y-1.5 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <Badge variant="outline" className="bg-primary/10 border-primary/30">
                          Prototype Testing
                        </Badge>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Vibecoded MVP</span>
                      </div>
                      <h3 className="text-xl font-semibold font-display">Multi-User Shared Basket Simulation</h3>
                      <div className="space-y-6 pt-2">
                        <p className="text-base leading-relaxed">
                          To validate the communal basket concept, we built a scrappy backend prototype that simulated multiple users interacting with a shared basket in real-time. This allowed us to test how users would interact with the shared basket and how it would affect the overall ordering process.
                        </p>
                       
                        <Button 
                          onClick={() => {
                            setShowNotification(true);
                            setTimeout(() => setShowNotification(false), 5000);
                          }}
                          className="mt-4 rounded-full"
                        >
                          <Bell className="h-4 w-4" />
                          Trigger Notification
                        </Button>
                      </div>
                    </div>
                    {/* Right side - Iframe (40% width) */}
                    <div className="md:col-span-2 p-6 relative">
                      <div 
                        className="rounded-lg border border-border overflow-hidden relative"
                        style={{ 
                          aspectRatio: "375/812", 
                          maxHeight: "812px",
                          width: "100%"
                        }}
                      >
                        {/* Snackbar Notification */}
                        {showNotification && (
                          <div className="absolute top-4 left-4 right-4 z-50 bg-gray-800 text-white rounded-xl px-4 py-3 flex items-center justify-between shadow-lg animate-in slide-in-from-top-2 duration-300">
                            <span className="text-sm">1 x Chicken Fried Rice added by Reuben</span>
                            <button
                              onClick={() => setShowNotification(false)}
                              className="ml-4 text-white hover:text-gray-300 transition-colors"
                              aria-label="Close notification"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                        <iframe
                          src="https://scan-to-order.lovable.app/menu"
                          className="w-full h-full border-0"
                          title="Prototype Demo"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Findings */}
              <div className="mb-8 mt-12">
                <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Key Findings</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <Card className="border-l-4 border-l-green-500">
                          <CardContent className="pt-4">
                            <p className="text-sm">
                              <span className="font-semibold">Core Flow:</span> Core flow was smooth and intuitive, with no major issues, users were able to navigate the flow quickly and easily.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-green-500">
                          <CardContent className="pt-4">
                            <p className="text-sm">
                              <span className="font-semibold">Shared Basket:</span> Users liked seeing others items in the basket and being able to modify them in real-time. It worked best in group settings like family or close friends.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="border-l-4 border-l-amber-500">
                          <CardContent className="pt-4">
                            <p className="text-sm">
                              <span className="font-semibold">Item Attribution:</span> Users wanted to know who ordered what in the shared basket to ensure there's no confusion around who owes what.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-red-500">
                          <CardContent className="pt-4">
                            <p className="text-sm">
                              <span className="font-semibold">Payment:</span> Users were unclear on when they were supposed to pay and who is supposed to pay how much.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
              </div>

             
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
