import Link from "next/link";
import { Terminal, Home, Briefcase, Layers, Mail } from "lucide-react";

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

export function Navbar() {
    return (
        <>
            {/* Desktop Top Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 relative">
                    
                    {/* Logo - Left */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="flex items-center gap-2 font-mono text-sm tracking-wider font-semibold text-white group">
                            <Terminal className="h-4 w-4 text-amber-500 group-hover:text-amber-400 transition-colors" />
                            <span>PORTFOLIO<span className="text-amber-500">.</span></span>
                        </Link>
                    </div>

                    {/* Links - Center (Hidden on mobile) */}
                    <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-zinc-400">
                        <Link href="/" className="relative group px-1 py-2 transition-colors hover:text-white">
                            Home
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                        </Link>
                        <Link href="/#experience" className="relative group px-1 py-2 transition-colors hover:text-white">
                            Experience
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                        </Link>
                        <Link href="/#projects" className="relative group px-1 py-2 transition-colors hover:text-white">
                            Projects
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                        </Link>
                        <Link href="/#contact" className="relative group px-1 py-2 transition-colors hover:text-white">
                            Contact
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                        </Link>
                    </nav>

                    {/* Right side - Status & Social */}
                    <div className="flex-1 flex items-center justify-end gap-4">
                        <a
                            href="https://github.com/ThantZin01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 transition-colors hover:text-white p-2 hover:bg-white/5 rounded-lg"
                        >
                            <GithubIcon className="h-4 w-4" />
                        </a>
                        <div className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs text-amber-400 font-mono shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                            <span className="hidden sm:inline">24/7 Live</span>
                            <span className="sm:hidden">Live</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Bottom Navigation Bar */}
            <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
                <nav className="flex items-center justify-around bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-3 shadow-2xl">
                    <Link href="/" className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-amber-400 transition-colors">
                        <Home className="h-5 w-5" />
                        <span className="text-[10px] font-medium">Home</span>
                    </Link>
                    <Link href="/#experience" className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-amber-400 transition-colors">
                        <Briefcase className="h-5 w-5" />
                        <span className="text-[10px] font-medium">Experience</span>
                    </Link>
                    <Link href="/#projects" className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-amber-400 transition-colors">
                        <Layers className="h-5 w-5" />
                        <span className="text-[10px] font-medium">Projects</span>
                    </Link>
                    <Link href="/#contact" className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-amber-400 transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="text-[10px] font-medium">Contact</span>
                    </Link>
                </nav>
            </div>
        </>
    );
}