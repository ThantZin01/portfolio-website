import Link from "next/link";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Tilt } from "@/components/animations/Tilt";
import { FadeUp } from "@/components/animations/FadeUp";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            {/* Ambient background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 h-72 w-96 rounded-full bg-emerald-500/10 blur-[100px]"
            />

            <div className="relative mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                
                {/* Text Content */}
                <div className="flex-1">
                    <FadeUp delay={0.1}>
                        {/* Eyebrow badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-400">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Software Engineer</span>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        {/* Main headline */}
                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:leading-tight">
                            Hi, I&apos;m <span className="text-emerald-400">Thant Zin Phyo.</span><br/>
                            Building practical, scalable applications.
                        </h1>
                    </FadeUp>

                    <FadeUp delay={0.3}>
                        {/* Supporting bio */}
                        <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
                            Software Engineer with hands-on experience designing, developing, and deploying complete software solutions for clients. Skilled across frontend, backend, databases, APIs, AI integration, and automation.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.4}>
                        {/* Call to action buttons */}
                        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 active:scale-95"
                            >
                                <span>Explore Projects</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
                            >
                                <Code2 className="h-4 w-4 text-emerald-400" />
                                <span>Contact Me</span>
                            </Link>
                        </div>
                    </FadeUp>
                </div>

                {/* Profile Photo */}
                <FadeUp delay={0.3} className="md:w-1/3 flex justify-center shrink-0">
                    <Tilt className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-emerald-500/20 bg-zinc-800">
                        <img 
                            src="/images/profile.jpg" 
                            alt="Thant Zin Phyo" 
                            className="w-full h-full rounded-full object-cover object-top"
                        />
                    </Tilt>
                </FadeUp>
            </div>
        </section>
    );
}