import Link from "next/link";
import { Terminal } from "lucide-react";

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
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#090a0f]/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-mono text-sm tracking-wider font-semibold text-white">
                    <Terminal className="h-4 w-4 text-emerald-400" />
                    <span>PORTFOLIO<span className="text-emerald-400">.</span></span>
                </Link>

                {/* Links */}
                <nav className="flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Link href="#projects" className="transition-colors hover:text-white">
                        Projects
                    </Link>
                    <Link href="#contact" className="transition-colors hover:text-white">
                        Contact
                    </Link>
                </nav>

                {/* Right side status badge */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-white"
                    >
                        <GithubIcon className="h-4 w-4" />
                    </a>
                    <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        24/7 Live
                    </div>
                </div>
            </div>
        </header>
    );
}