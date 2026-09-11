"use client";

import { useState } from "react";
import { Project, projectsData } from "@/data/projects";
import { ExternalLink, Layers, Sparkles } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
        </svg>
    );
}

const CATEGORIES = ["All", "Full-Stack", "AI & Systems", "3D & Web"] as const;

function ProjectCard({ project }: { project: Project }) {
    const [imageIndex, setImageIndex] = useState(0);
    const hasMultipleImages = project.imageUrls && project.imageUrls.length > 1;

    return (
        <div className="group flex flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm transition hover:border-emerald-500/40 hover:bg-zinc-900/70">
            <div>
                {/* Project Image */}
                {project.imageUrls && project.imageUrls.length > 0 && (
                    <div className="relative mb-6 w-full h-48 rounded-lg overflow-hidden border border-white/10 group/image">
                        <img 
                            src={project.imageUrls[imageIndex]} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                        />
                        {hasMultipleImages && (
                            <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/image:opacity-100 transition-opacity">
                                <button 
                                    onClick={(e) => { 
                                        e.preventDefault(); 
                                        setImageIndex((prev) => (prev - 1 + project.imageUrls!.length) % project.imageUrls!.length); 
                                    }}
                                    className="bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 backdrop-blur-sm transition z-10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                </button>
                                <button 
                                    onClick={(e) => { 
                                        e.preventDefault(); 
                                        setImageIndex((prev) => (prev + 1) % project.imageUrls!.length); 
                                    }}
                                    className="bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 backdrop-blur-sm transition z-10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                </button>
                            </div>
                        )}
                        {hasMultipleImages && (
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-mono z-10">
                                {imageIndex + 1} / {project.imageUrls!.length}
                            </div>
                        )}
                    </div>
                )}
                
                {/* Category & Badge */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                        <Layers className="h-3.5 w-3.5" />
                        {project.category}
                    </span>
                    {project.featured && (
                        <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
                            Featured
                        </span>
                    )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">
                    {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-zinc-400">
                    {project.tagline}
                </p>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                </p>
            </div>

            {/* Tech Stack Pills & Links */}
            <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] font-mono text-zinc-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-medium">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-zinc-300 hover:text-emerald-400 transition"
                        >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition"
                        >
                            <GithubIcon className="h-3.5 w-3.5" />
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const filteredProjects = projectsData.filter((project) =>
        activeCategory === "All" ? true : project.category === activeCategory
    );

    return (
        <section id="projects" className="py-24 border-t border-white/10 relative">
            <div className="mx-auto max-w-6xl px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-emerald-400">
                            <Sparkles className="h-3 w-3" />
                            <span>Production Work</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                            Featured Projects
                        </h2>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-md px-3.5 py-1.5 text-xs font-mono transition ${isActive
                                            ? "bg-emerald-500 text-zinc-950 font-semibold"
                                            : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}