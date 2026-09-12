"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ProjectBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      
      {/* Cinematic Film Grain */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay z-10"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />

      {/* Tech Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_80%,transparent_100%)] opacity-100" />

      {/* Dynamic Data Streams (Glowing Lines) */}
      <motion.div
        className="absolute top-0 left-[20%] w-[2px] h-[40vh] bg-gradient-to-b from-transparent via-amber-500 to-transparent blur-[1px] opacity-80"
        animate={{ y: ["-40vh", "130vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      <motion.div
        className="absolute top-0 right-[30%] w-[3px] h-[50vh] bg-gradient-to-b from-transparent via-amber-400 to-transparent blur-[2px] opacity-100"
        animate={{ y: ["-50vh", "140vh"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 3 }}
      />
      <motion.div
        className="absolute top-0 left-[60%] w-[2px] h-[30vh] bg-gradient-to-b from-transparent via-amber-600 to-transparent blur-[1px] opacity-90"
        animate={{ y: ["-30vh", "120vh"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0 }}
      />

      {/* Majestic Top Glow */}
      <motion.div 
        className="absolute left-1/2 -top-[10%] -translate-x-1/2 w-[140vw] h-[60vw] rounded-[100%] mix-blend-screen opacity-40"
        style={{
            background: "radial-gradient(ellipse at top, rgba(245, 158, 11, 0.6) 0%, transparent 70%)",
            filter: "blur(100px)",
        }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
