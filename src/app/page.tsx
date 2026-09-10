import { Hero } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}