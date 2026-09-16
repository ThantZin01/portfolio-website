"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

const experienceData = [
  {
    title: "Software Engineer",
    company: "Areative Digital",
    date: "July 2026 - Current",
    description: "Designing and implementing scalable full-stack applications, robust databases, and business automation systems for production environments.",
    icon: <Briefcase className="h-5 w-5 text-amber-500" />,
  },
  {
    title: "Full Stack Developer",
    company: "Freelancer",
    date: "Dec 2024 - Current",
    description: "Delivered 20+ client projects within a recent 3-month period. Specialized in custom business systems, POS platforms, e-commerce, and AI workflow automation.",
    icon: <Briefcase className="h-5 w-5 text-amber-500" />,
  },
];

const educationData = [
  {
    title: "HND in Computing (Level-5)",
    company: "NiT College",
    date: "2025-2026",
    description: "Advanced studies in computing, focusing on software development and system architecture.",
    icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
  },
  {
    title: "HND in Computing (Level-4)",
    company: "iNet College",
    date: "2024-2025",
    description: "Foundational studies in computer science, software engineering, and core IT principles.",
    icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // The line grows as you scroll down
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-white/10 relative" ref={containerRef}>
      <div className="mx-auto max-w-6xl px-6 relative">
        <FadeUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-20 text-center relative z-20">
            Experience & Education
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
            
          {/* Work Experience */}
          <div className="relative">
            {/* Scroll-Linked Glowing Line (Left side for desktop, hidden on mobile for cleaner look) */}
            <div className="absolute left-6 top-16 bottom-0 w-[2px] bg-white/5 hidden sm:block">
                <motion.div 
                    className="absolute top-0 left-0 w-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]" 
                    style={{ height: lineHeight, opacity: glowOpacity }}
                />
            </div>

            <h3 className="text-2xl font-semibold text-white flex items-center gap-3 border-b border-white/10 pb-4 mb-8 sm:ml-16">
              <Briefcase className="h-6 w-6 text-amber-500" />
              Work Experience
            </h3>
            
            <div className="flex flex-col gap-10">
              {experienceData.map((item, index) => (
                <div key={index} className="relative sm:pl-16">
                    {/* Timeline Node */}
                    <motion.div 
                        className="absolute left-[20px] top-6 w-3 h-3 rounded-full bg-amber-500 hidden sm:block shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2, type: "spring" }}
                    />
                    
                    <FadeUp delay={0.1 * index}>
                        <div className="p-5 md:p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-xl hover:border-amber-500/30 transition-all duration-500 relative group overflow-hidden hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-[#09090b] rounded-lg shadow-inner border border-white/5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                                            {item.title}
                                            {item.company === "Freelancer" && (
                                                <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500 border border-amber-500/20">
                                                    20+ Projects Delivered
                                                </span>
                                            )}
                                        </h4>
                                        <span className="text-sm font-medium text-amber-500/80">{item.company}</span>
                                    </div>
                                </div>
                                <p className="text-xs font-mono text-slate-500 mb-4 ml-[52px]">{item.date}</p>
                                <p className="text-sm text-slate-300 ml-[52px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="relative mt-12 md:mt-0">
            {/* Scroll-Linked Glowing Line */}
            <div className="absolute left-6 top-16 bottom-0 w-[2px] bg-white/5 hidden sm:block">
                <motion.div 
                    className="absolute top-0 left-0 w-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]" 
                    style={{ height: lineHeight, opacity: glowOpacity }}
                />
            </div>

            <h3 className="text-2xl font-semibold text-white flex items-center gap-3 border-b border-white/10 pb-4 mb-8 sm:ml-16">
              <GraduationCap className="h-6 w-6 text-amber-500" />
              Education
            </h3>
            
            <div className="flex flex-col gap-10">
              {educationData.map((item, index) => (
                <div key={index} className="relative sm:pl-16">
                    {/* Timeline Node */}
                    <motion.div 
                        className="absolute left-[20px] top-6 w-3 h-3 rounded-full bg-amber-500 hidden sm:block shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2, type: "spring" }}
                    />

                    <FadeUp delay={0.1 * index}>
                        <div className="p-5 md:p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-xl hover:border-amber-500/30 transition-all duration-500 relative group overflow-hidden hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-[#09090b] rounded-lg shadow-inner border border-white/5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{item.title}</h4>
                                        <span className="text-sm font-medium text-amber-500/80">{item.company}</span>
                                    </div>
                                </div>
                                <p className="text-xs font-mono text-slate-500 mb-4 ml-[52px]">{item.date}</p>
                                <p className="text-sm text-slate-300 ml-[52px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
