"use client";

import { Terminal, Code2, Database, Cpu, Layers } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="h-5 w-5 text-amber-500" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    icon: <Terminal className="h-5 w-5 text-amber-500" />,
    technologies: ["Node.js", "REST APIs", "Prisma", "Server Actions"],
  },
  {
    category: "Database & Architecture",
    icon: <Database className="h-5 w-5 text-amber-500" />,
    technologies: ["PostgreSQL", "MySQL", "Better Auth", "RBAC"],
  },
  {
    category: "AI & Automation",
    icon: <Cpu className="h-5 w-5 text-amber-500" />,
    technologies: ["AI APIs", "n8n", "Workflow Automation"],
  },
];

// Simple Layout icon since we didn't import it at the top to avoid clutter, doing it here
function Layout(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="3" x2="21" y1="9" y2="9" />
            <line x1="9" x2="9" y1="21" y2="9" />
        </svg>
    );
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* About Me Text */}
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-amber-400 mb-4">
              <Code2 className="h-3 w-3" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              I build things that people actually use.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              <p>
                I am a Full Stack Developer specializing in creating resilient, production-ready web applications and business systems. With a strong engineering foundation and a focus on practical solutions, I turn complex requirements into robust software.
              </p>
              <p>
                Over the recent months, I have successfully delivered 20+ client projects, ranging from cloud-native Point of Sale systems to multi-tenant management platforms. My approach combines modern frontend architectures with secure, scalable backends and automated workflows.
              </p>
              <p>
                Beyond standard web development, I integrate AI APIs and automation tools (like n8n) to streamline business operations. I believe in writing maintainable code, making informed architectural decisions, and consistently delivering value to end-users.
              </p>
            </div>
          </FadeUp>

          {/* Skills & Tech Stack */}
          <FadeUp delay={0.3}>
             <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-amber-400 mb-4">
              <Layers className="h-3 w-3" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-8">
              Core Technologies
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-amber-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zinc-950 rounded-lg border border-white/5 shadow-inner">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-zinc-300 group-hover:text-white group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
