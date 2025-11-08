import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { GoalsSection } from "@/components/GoalsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { DifferentiatorSection } from "@/components/DifferentiatorSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestingSection } from "@/components/TestingSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ReflectionSection } from "@/components/ReflectionSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <GoalsSection />
      <ResearchSection />
      <DifferentiatorSection />
      <SolutionSection />
      <TestingSection />
      <ImpactSection />
      <ReflectionSection />
    </main>
  );
};

export default Index;
