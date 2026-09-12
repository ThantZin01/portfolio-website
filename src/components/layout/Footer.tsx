import { Terminal, Mail } from "lucide-react";
import Link from "next/link";

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

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-zinc-950 pt-16 pb-8 overflow-hidden">
            {/* Glowing top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[3px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent blur-sm" />

            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-mono text-sm tracking-wider font-semibold text-white w-fit">
                            <Terminal className="h-5 w-5 text-amber-500" />
                            <span>PORTFOLIO<span className="text-amber-500">.</span></span>
                        </Link>
                        <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                            Building resilient, high-performance web applications and software solutions with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold mb-4">Navigation</h4>
                        <nav className="flex flex-col gap-2 text-sm text-zinc-400">
                            <Link href="/#projects" className="hover:text-amber-400 transition-colors w-fit">Projects</Link>
                            <Link href="/#experience" className="hover:text-amber-400 transition-colors w-fit">Experience</Link>
                            <Link href="/#contact" className="hover:text-amber-400 transition-colors w-fit">Contact</Link>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/ThantZin01" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all">
                                <GithubIcon className="h-4 w-4" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all">
                                <LinkedinIcon className="h-4 w-4" />
                            </a>
                            <a href="mailto:thantzinphyo.business77@gmail.com" className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all">
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
                    <p>© {new Date().getFullYear()} Thant Zin Phyo. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                        <span>System Status: Optimal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}