export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#090a0f] py-8">
            <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
                <p>© {new Date().getFullYear()} Designed for 24/7 Edge High Availability.</p>
                <div className="flex items-center gap-6">
                    <span>Next.js • Edge Ready</span>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-300 transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}