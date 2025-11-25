import { useEffect, useRef, useState, ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";

type BeforeAfterSlide = {
  title: string;
  description: string | ReactNode;
  beforeLabel: string;
  afterLabel: string;
  beforeImage?: string;
  afterImage?: string;
};

const slides: BeforeAfterSlide[] = [
  {
    title: "Landing Page",
    description: "Scanning QR lands users directly-to-menu with items exposed reduces time to first action.",
    beforeLabel: "Landing page → Menu",
    afterLabel: "Scan → Menu (categories + search)",
    beforeImage: "/STO1Landing.png",
    afterImage: "/STO2Menu.png"
  },
  {
    title: "Rich Menu",
    description: "Visual categories and upfront search bar reduces time to first action.",
    beforeLabel: "Login required",
    afterLabel: "Guest checkout + optional login",
    beforeImage: "/STO1Menu.png",
    afterImage: "/STO2Menu.png"
  },
  {
    title: "Group ordering",
    description: (
      <>
        Common shared basket for the table reduces back and forth between people and gets everyone on the same page.
        <br /><br />
        Smart recommendations based on past order history as well as store data to upsell auxiliary items.
      </>
    ),
    beforeLabel: "Individual baskets",
    afterLabel: "Communal basket + smart invoice",
    beforeImage: "/STO1Basket.png",
    afterImage: "/STO2Basket.png"
  },
  {
    title: "Unobtrusive Loyalty & Deals",
    description: "Your deals and loyalty program nudges don't distract you from the ordering flow. However, most users are likely to check the bill before proceeding to pay and here's where we prominently show your rewards and deals.",
    beforeLabel: "Login required",
    afterLabel: "Guest checkout + optional login",
    beforeImage: "/STO1Bill.png",
    afterImage: "/STO2Bill.png"
  }
];

export const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [api1, setApi1] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const justClosedRef = useRef(false);

  // Sync both carousels and update button states
  useEffect(() => {
    if (!api1 || !api2) {
      return;
    }

    const updateState = () => {
      setCanScrollPrev(api1.canScrollPrev());
      setCanScrollNext(api1.canScrollNext());
    };

    updateState();

    // Sync api2 to api1 (only sync from api1 to api2 to avoid loops)
    const onSelect = () => {
      const selectedIndex = api1.selectedScrollSnap();
      if (api2 && api2.selectedScrollSnap() !== selectedIndex) {
        api2.scrollTo(selectedIndex);
      }
      updateState();
    };

    api1.on("select", onSelect);

    return () => {
      api1.off("select", onSelect);
    };
  }, [api1, api2]);

  const scrollPrev = () => {
    if (api1 && api1.canScrollPrev()) {
      api1.scrollPrev();
      // api2 will sync via the onSelect handler
    }
  };

  const scrollNext = () => {
    if (api1 && api1.canScrollNext()) {
      api1.scrollNext();
      // api2 will sync via the onSelect handler
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 px-6 border-t border-border bg-black ${hovering ? "cursor-pointer" : "cursor-default"}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={(e) => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onClick={(e) => { 
        // Only open if modal is closed, click is not from a button, and we didn't just close it
        if (!open && !(e.target as HTMLElement).closest('button') && !justClosedRef.current) {
          setOpen(true);
        }
        // Reset the flag after a short delay
        if (justClosedRef.current) {
          setTimeout(() => {
            justClosedRef.current = false;
          }, 200);
        }
      }}
    >
      <div className="container max-w-6xl">
        <div 
          ref={ref}
          className={`group relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="p-6 md:p-8 min-h-[28rem]">
            {/* Summary + mockup right */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-3 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Design Evolution
                </h2>
                <h3 className="text-lg font-semibold text-white">What changed</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  STO 2.0 streamlines entry, reduces friction at checkout, and supports group dining with shared context.
                  Below are the core changes that materially improved speed, clarity, and conversion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="rounded-lg border bg-neutral-800 border-neutral-700 text-white shadow-sm border-l-4 border-l-dark">
                    <CardContent className="pt-4">
                      <p className="text-sm">Faster entry to a searchable, categorized menu</p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-lg border bg-neutral-800 border-neutral-700 text-white shadow-sm border-l-4 border-l-dark">
                    <CardContent className="pt-4">
                      <p className="text-sm">Guest checkout by default; login optional for rewards</p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-lg border bg-neutral-800 border-neutral-700 text-white shadow-sm border-l-4 border-l-dark">
                    <CardContent className="pt-4">
                      <p className="text-sm">Shared table basket with consolidated invoice</p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-lg border bg-neutral-800 border-neutral-700 text-white shadow-sm border-l-4 border-l-dark">
                    <CardContent className="pt-4">
                      <p className="text-sm">Recommendations and social proof at decision moments</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="md:col-span-2 flex items-start">
                <img 
                  src="/src/assets/STO2.png" 
                  alt="Design Evolution Mock" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          {/* Walkthrough dialog with 60/40 split */}
          <Dialog open={open} onOpenChange={(newOpen) => {
            if (!newOpen) {
              // Mark that we just closed the modal to prevent immediate reopening
              justClosedRef.current = true;
            }
            setOpen(newOpen);
          }}>
            <DialogContent className="p-0 transition-all duration-300 max-w-[70vw] max-h-[80vh]">
              <div className="relative">
                <div className="grid grid-cols-5">
                  {/* 60% area: before/after screens */}
                  <div className="col-span-3 border-r border-border">
                    <Carousel setApi={setApi1}>
                      <CarouselContent>
                        {slides.map((slide, i) => (
                          <CarouselItem key={i} className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-muted rounded-md border border-border flex items-center justify-center relative overflow-hidden" style={{ aspectRatio: "375/812" }}>
                                <div className="absolute top-2 left-2 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                                  BEFORE
                                </div>
                                <img 
                                  src={slide.beforeImage || "/placeholder.svg"} 
                                  alt="Before screen" 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="bg-muted rounded-md border border-border flex items-center justify-center relative overflow-hidden" style={{ aspectRatio: "375/812" }}>
                                <div className="absolute top-2 left-2 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                                  AFTER
                                </div>
                                <img 
                                  src={slide.afterImage || "/placeholder.svg"} 
                                  alt="After screen" 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                  {/* 40% area: text highlights */}
                  <div className="col-span-2 p-6 relative">
                    <Carousel setApi={setApi2}>
                      <CarouselContent>
                        {slides.map((slide, i) => (
                          <CarouselItem key={i}>
                            <div className="space-y-3">
                              <h4 className="text-xl font-semibold">{slide.title}</h4>
                              <p className="text-base text-muted-foreground leading-relaxed">
                                {slide.description}
                              </p>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
                {/* Navigation buttons at bottom of modal */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[60]">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-background"
                    disabled={!canScrollPrev}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollPrev();
                    }}
                    type="button"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous slide</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-background"
                    disabled={!canScrollNext}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollNext();
                    }}
                    type="button"
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next slide</span>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* Floating follow-cursor button positioned relative to the section (matches cursorPos space) */}
      <Button 
        variant="default"
        className={`pointer-events-none absolute z-20 rounded-full gap-2 bg-white text-black ${hovering ? "opacity-100" : "opacity-0"} transition-opacity`}
        style={{ left: `${cursorPos.x + 8}px`, top: `${cursorPos.y + 8}px` }}
        onClick={() => setOpen(true)}
      >
        <Play className="h-4 w-4 text-black" />
        Start walkthrough
      </Button>
    </section>
  );
};
