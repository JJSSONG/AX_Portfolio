import HeroSection from "../src/components/sections/hero";
import SnapshotSection from "../src/components/sections/snapshot";
import AboutSection from "../src/components/sections/about";
import ExpertiseSection from "../src/components/sections/expertise";
import ProjectsSection from "../src/components/sections/projects";
import PhilosophySection from "../src/components/sections/philosophy";
import AXVisionSection from "../src/components/sections/ax-vision";
import TechStackSection from "../src/components/sections/tech-stack";
import CareerSection from "../src/components/sections/career";
import ContactSection from "../src/components/sections/contact";

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
