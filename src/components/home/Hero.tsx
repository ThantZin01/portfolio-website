"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles, MapPin, Mail, Globe } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

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

export function Hero() {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <section className="relative overflow-hidden py-16 md:py-32">
            <div className="relative mx-auto max-w-5xl px-6">
                
                {/* Bento Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Main Intro Card (Spans 2 cols) */}
                    <div className="md:col-span-2 p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-amber-500/20 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <FadeUp delay={0.1}>
                            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono text-amber-400 mb-8">
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>Full Stack Developer | AI & Automation</span>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white md:leading-tight">
                                Hi, I&apos;m <span className="text-amber-400 whitespace-nowrap">Thant Zin Phyo</span><br/>
                                Building practical, scalable applications.
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <p className="mt-6 max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed">
                                Building production-ready web applications, business systems, and AI-powered automation for real-world clients.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.4}>
                            <div className="mt-10 flex flex-wrap items-center gap-4 relative z-10">
                                <Link
                                    href="#projects"
                                    className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-amber-400 active:scale-95 shadow-lg shadow-amber-500/20"
                                >
                                    <span>View Projects</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                                <a
                                    href="https://github.com/ThantZin01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
                                >
                                    <GithubIcon className="h-4 w-4 text-amber-400" />
                                    <span>GitHub</span>
                                </a>

                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
                                >
                                    <Code2 className="h-4 w-4 text-amber-400" />
                                    <span>Contact Me</span>
                                </Link>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right Column (Profile & Info Bento) */}
                    <div className="flex flex-col gap-6">
                        
                        {/* Profile 3D Flip Card */}
                        <FadeUp delay={0.3} className="h-[280px] w-full [perspective:1000px] group">
                            <div 
                                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer ${isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'}`}
                                onClick={() => setIsFlipped(!isFlipped)}
                            >
                                
                                {/* Front: Real Photo */}
                                <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur-md [backface-visibility:hidden]">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Thant Zin Phyo"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 text-center">
                                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-300 bg-zinc-950/60 px-3 py-1 rounded-full backdrop-blur-md">
                                            <span className="hidden sm:inline">Hover Me</span>
                                            <span className="sm:hidden">Tap Me</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Back: Cartoon Photo */}
                                <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-amber-500/30 bg-zinc-900/40 backdrop-blur-md [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                                    <img
                                        src="/images/avatar-cartoon.jpg"
                                        alt="Thant Zin Phyo Cartoon"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </FadeUp>

                        {/* Quick Stats Bento */}
                        <FadeUp delay={0.5} className="flex-1 p-6 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md flex flex-col justify-center gap-4 hover:border-amber-500/20 transition-colors duration-500">
                            <div className="flex items-center gap-3 text-zinc-300">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 border border-white/5">
                                    <MapPin className="h-4 w-4 text-amber-500" />
                                </div>
                                <span className="text-sm font-medium">Yangon, Myanmar</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 border border-white/5">
                                    <Mail className="h-4 w-4 text-amber-500" />
                                </div>
                                <a href="mailto:thantzinphyo.business77@gmail.com" className="text-sm font-medium hover:text-amber-400 transition-colors truncate">thantzinphyo.business77@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 border border-white/5">
                                    <Globe className="h-4 w-4 text-amber-500" />
                                </div>
                                <a href="https://github.com/ThantZin01" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-amber-400 transition-colors">github.com/ThantZin01</a>
                            </div>
                        </FadeUp>

                    </div>
                </div>
            </div>
        </section>
    );
}