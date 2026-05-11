import HeroSection from "@/components/sections/hero";
import SnapshotSection from "@/components/sections/snapshot";
import AboutSection from "@/components/sections/about";
import ExpertiseSection from "@/components/sections/expertise";
import ProjectsSection from "@/components/sections/projects";
import PhilosophySection from "@/components/sections/philosophy";
import AXVisionSection from "@/components/sections/ax-vision";
import TechStackSection from "@/components/sections/tech-stack";
import CareerSection from "@/components/sections/career";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <SnapshotSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <PhilosophySection />
      <AXVisionSection />
      <TechStackSection />
      <CareerSection />
      <ContactSection />
    </main>
  );
}
