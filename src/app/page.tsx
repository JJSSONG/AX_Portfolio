import HeroSection from "../components/sections/hero";
import AboutSection from "../components/sections/about";
import SnapshotSection from "../components/sections/snapshot";
import ExpertiseSection from "../components/sections/expertise";
import ProjectsSection from "../components/sections/projects";
import CareerSection from "../components/sections/career";
import TechStackSection from "../components/sections/tech-stack";
import AXVisionSection from "../components/sections/ax-vision";
import PhilosophySection from "../components/sections/philosophy";
import ContactSection from "../components/sections/contact";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SnapshotSection />
      <ExpertiseSection />
      <ProjectsSection />
      <CareerSection />
      <TechStackSection />
      <AXVisionSection />
      <PhilosophySection />
      <ContactSection />
    </main>
  );
}
