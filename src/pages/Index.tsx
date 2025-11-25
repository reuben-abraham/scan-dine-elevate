import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ResearchSection } from "@/components/ResearchSection";
import { DifferentiatorSection } from "@/components/DifferentiatorSection";
import { GoalsSection } from "@/components/GoalsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestingSection } from "@/components/TestingSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ReflectionSection } from "@/components/ReflectionSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <ResearchSection />
      <DifferentiatorSection />
      <GoalsSection />
      <SolutionSection />
      <TestingSection />
      <ImpactSection />
      <ReflectionSection />
    </main>
  );
};

export default Index;
