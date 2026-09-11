"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
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

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Front-end state handling
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-24 border-t border-white/10 relative">
            <div className="mx-auto max-w-4xl px-6">
                <FadeUp delay={0.1} className="text-center max-w-xl mx-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                        Let&apos;s build something resilient.
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                        Have a project in mind, an engineering role, or an inquiry? Send a message directly.
                    </p>
                </FadeUp>

                <FadeUp delay={0.2} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Direct Info */}
                    <div className="flex flex-col gap-4">
                        <SpotlightCard className="rounded-xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm">
                            <div className="flex items-center gap-3 text-zinc-300 mb-2">
                                <Mail className="h-5 w-5 text-emerald-400" />
                                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Contact Details</span>
                            </div>
                            
                            <a
                                href="mailto:thantzinphyo.business77@gmail.com"
                                className="block text-sm font-medium text-white hover:text-emerald-400 transition truncate mb-2"
                            >
                                thantzinphyo.business77@gmail.com
                            </a>
                            
                            <a
                                href="tel:+959897632233"
                                className="block text-sm text-zinc-400 hover:text-emerald-400 transition mb-2"
                            >
                                +959 897632233
                            </a>

                            <p className="text-sm text-zinc-400">
                                154st, Tamwe, Yangon
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="rounded-xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm">
                            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Profiles</span>
                            <div className="mt-3 flex items-center gap-4">
                                <a
                                    href="https://github.com/ThantZin01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition"
                                >
                                    <GithubIcon className="h-4 w-4" />
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition"
                                >
                                    <LinkedinIcon className="h-4 w-4" />
                                    LinkedIn
                                </a>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Quick Message Form */}
                    <SpotlightCard className="md:col-span-2 rounded-xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                                <h3 className="mt-4 text-lg font-semibold text-white">Message Received</h3>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Thank you for reaching out. I will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-xs font-mono text-emerald-400 hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Your Name"
                                        className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition relative z-20"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="you@domain.com"
                                        className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition relative z-20"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="What would you like to discuss?"
                                        className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition resize-none relative z-20"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 active:scale-[0.99] relative z-20"
                                >
                                    <Send className="h-4 w-4" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        )}
                    </SpotlightCard>
                </FadeUp>
            </div>
        </section>
    );
}