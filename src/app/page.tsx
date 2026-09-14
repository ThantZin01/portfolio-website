import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { AnimatedBackground } from "@/components/animations/BackgroundEffects";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col relative">
            <AnimatedBackground />
            <Hero />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
}