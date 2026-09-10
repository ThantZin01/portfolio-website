export interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    category: "Full-Stack" | "AI & Systems" | "3D & Web";
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
    {
        id: "morning-haze-pos",
        title: "Morning Haze Café POS",
        tagline: "Cloud-native Point of Sale system.",
        description: "High-throughput web POS built for real-time ordering, automated inventory deduction, and fast offline-first resilience.",
        category: "Full-Stack",
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "ai-rag-pipeline",
        title: "Autonomous AI Knowledge Engine",
        tagline: "Semantic search and document reasoning agent.",
        description: "Low-latency retrieval-augmented generation engine utilizing vector embeddings for structured domain queries.",
        category: "AI & Systems",
        techStack: ["Python", "FastAPI", "Vector DB", "Docker"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "dormitory-management-system",
        title: "Dormitory Management System",
        tagline: "Multi-tenant student residence portal.",
        description: "Centralized administrative platform with role-based access control, automated student room allocation, and billing records.",
        category: "Full-Stack",
        techStack: ["Next.js", "Prisma", "Better Auth", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        id: "interactive-3d-web-scene",
        title: "Interactive 3D Web Canvas",
        tagline: "WebGL asset visualization.",
        description: "Real-time 3D model visualizer supporting dynamic lighting, custom GLTF shaders, and hardware-accelerated animations.",
        category: "3D & Web",
        techStack: ["Three.js", "React Three Fiber", "GLSL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
];