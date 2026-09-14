import { notFound } from "next/navigation";
import { projectDetails } from "@/data/projectDetails";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, Database, Layout, Shield, Server, CheckCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { ProjectBackground } from "@/components/animations/ProjectBackground";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((id) => ({
    id: id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectDetails[resolvedParams.id];

  if (!project) {
    notFound();
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="h-5 w-5 text-amber-400" />;
      case "Backend & Database":
        return <Database className="h-5 w-5 text-amber-400" />;
      case "Security & Storage":
        return <Shield className="h-5 w-5 text-amber-400" />;
      default:
        return <Server className="h-5 w-5 text-amber-400" />;
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-amber-500/30 pb-24 relative">
      <ProjectBackground />
      {/* Hero Section */}
      <div className="relative border-b border-white/10 bg-zinc-900/30 backdrop-blur-sm pt-32 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/80 to-transparent"></div>
          <div className="relative mx-auto max-w-5xl px-6">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-amber-400 transition mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-amber-400 font-mono mb-6">{project.tagline}</p>
          <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed mb-6">
            {project.overview}
          </p>

          {project.myContribution && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 max-w-3xl mb-6">
              <h3 className="text-sm font-semibold text-amber-400 mb-2 font-mono uppercase tracking-wider">My Contribution</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 mt-8">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-sm font-semibold">
                <Code2 className="h-4 w-4" />
                Source Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-zinc-950 hover:bg-amber-400 transition text-sm font-semibold">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 mt-16 space-y-24">
        
        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
            <Code2 className="h-6 w-6 text-amber-500" />
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.techStackDetailed.map((stack) => (
              <div key={stack.category} className="p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20 hover:border-amber-500/50 hover:shadow-amber-500/10 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  {getCategoryIcon(stack.category)}
                  <h3 className="font-semibold text-white">{stack.category}</h3>
                </div>
                <ul className="space-y-2 relative z-10">
                  {stack.technologies.map(tech => (
                    <li key={tech} className="flex items-center gap-2 text-sm text-zinc-400 font-mono">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Diagrams */}
        {(project.erDiagramUrl || project.useCaseDiagramUrl) && (
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
              <Layout className="h-6 w-6 text-amber-500" />
              System Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.erDiagramUrl && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-zinc-300">Entity-Relationship Diagram</h3>
                  <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-md p-2 shadow-xl shadow-black/30">
                    <img src={project.erDiagramUrl} alt="ER Diagram" className="w-full h-auto rounded-2xl" />
                  </div>
                </div>
              )}
              {project.useCaseDiagramUrl && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-zinc-300">Use Case Diagram</h3>
                  <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-md p-2 shadow-xl shadow-black/30">
                    <img src={project.useCaseDiagramUrl} alt="Use Case Diagram" className="w-full h-auto rounded-2xl" />
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Modules */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
            <Server className="h-6 w-6 text-amber-500" />
            Core Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.modules.map((module) => (
              <div key={module.title} className="p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20 relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[40px] group-hover:bg-amber-500/20 transition duration-500" />
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{module.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative z-10">{module.description}</p>
                <ul className="space-y-3 relative z-10">
                  {module.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Code Explanation */}
        {project.codeExplanation && (
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
              <Code2 className="h-6 w-6 text-amber-500" />
              Deep Dive & Code Explanation
            </h2>
            <div className="prose prose-invert prose-amber max-w-none prose-pre:bg-zinc-900/40 prose-pre:backdrop-blur-md prose-pre:border prose-pre:border-white/10 prose-pre:shadow-xl prose-pre:shadow-black/20 prose-pre:rounded-3xl">
              <ReactMarkdown>{project.codeExplanation}</ReactMarkdown>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
