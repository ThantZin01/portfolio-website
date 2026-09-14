"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Embers() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number, delay: number, xOffset: number }>>([]);

  useEffect(() => {
    // Generate random particles (embers) on client-side to avoid hydration mismatch
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
      xOffset: Math.random() * 40 - 20,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-amber-500/30 blur-[1px] shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, bottom: `-${p.y}%` }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, p.xOffset, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-zinc-950">
      
      {/* Cinematic Film Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />

      {/* Tech Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_80%,transparent_100%)] opacity-100" />

      {/* Dynamic Data Streams (Glowing Lines) */}
      <motion.div
        className="absolute top-0 left-[15%] w-[2px] h-[40vh] bg-gradient-to-b from-transparent via-amber-500 to-transparent blur-[1px] opacity-80"
        animate={{ y: ["-40vh", "130vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      <motion.div
        className="absolute top-0 right-[25%] w-[3px] h-[50vh] bg-gradient-to-b from-transparent via-amber-400 to-transparent blur-[2px] opacity-100"
        animate={{ y: ["-50vh", "140vh"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 3 }}
      />
      <motion.div
        className="absolute top-0 left-[75%] w-[2px] h-[30vh] bg-gradient-to-b from-transparent via-amber-600 to-transparent blur-[1px] opacity-90"
        animate={{ y: ["-30vh", "120vh"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0 }}
      />

      {/* Subtle Amber Glows */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-10 blur-[120px]"
        style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-[10%] -right-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-15 blur-[150px]"
        style={{
            background: "radial-gradient(circle, rgba(217, 119, 6, 0.25) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.05, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Floating Embers */}
      <Embers />
    </div>
  );
}
