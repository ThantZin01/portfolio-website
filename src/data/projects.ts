export interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    category: "Full-Stack Development" | "AI & System";
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrls?: string[];
    featured?: boolean;
}

export const projectsData: Project[] = [
    {
        id: "dormitory-management-system",
        title: "Dormitory Management System",
        tagline: "Multi-tenant student residence portal.",
        description: "Centralized administrative platform with role-based access control, automated student room allocation, and billing records.",
        category: "Full-Stack Development",
        techStack: ["Next.js", "Prisma", "Better Auth", "Tailwind CSS"],
        liveUrl: "", 
        githubUrl: "",
        imageUrls: [
            "/images/dormitory-system/login.png",
            "/images/dormitory-system/dashboard.png",
            "/images/dormitory-system/setting.png",
            "/images/dormitory-system/waterbottle.png"
        ],
        featured: true,
    },
    {
        id: "morning-haze-cafe-system",
        title: "Morning Haze Cafe System",
        tagline: "Cloud-native Point of Sale system.",
        description: "High-throughput web POS built for real-time ordering, automated inventory deduction, and fast offline-first resilience.",
        category: "Full-Stack Development",
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        liveUrl: "",
        githubUrl: "",
        imageUrls: [
            "/images/morning-haze/login.png",
            "/images/morning-haze/dashboard.png",
            "/images/morning-haze/reports.png",
            "/images/morning-haze/history.png"
        ],
        featured: true,
    },
    {
        id: "grokroast",
        title: "GrokRoast",
        tagline: "AI-powered brutally honest feedback.",
        description: "An interactive, 3D web experience that leverages simulated AI to critique or praise your ideas with immersive graphics and audio.",
        category: "AI & System",
        techStack: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
        liveUrl: "",
        githubUrl: "",
        featured: true,
    },
];