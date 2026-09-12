export interface ModuleDetail {
  title: string;
  description: string;
  features: string[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  techStackDetailed: { category: string; technologies: string[] }[];
  erDiagramUrl?: string;
  useCaseDiagramUrl?: string;
  modules: ModuleDetail[];
  codeExplanation: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "morning-haze-cafe-system": {
    id: "morning-haze-cafe-system",
    title: "Morning Haze Cafe POS System",
    tagline: "Cloud-native Point of Sale system.",
    overview: "A high-throughput web POS built for real-time ordering, automated inventory deduction, and fast offline-first resilience. Designed to streamline operations for cafe staff and administrators.",
    techStackDetailed: [
      {
        category: "Frontend",
        technologies: ["Next.js 15", "React 19", "Tailwind CSS", "Lucide React"]
      },
      {
        category: "Backend & Database",
        technologies: ["Prisma ORM", "PostgreSQL", "Next.js Server Actions"]
      },
      {
        category: "Security & Storage",
        technologies: ["Bcryptjs", "Zod", "Vercel Blob"]
      }
    ],
    erDiagramUrl: "/images/morning-haze/er-diagram.jpg",
    useCaseDiagramUrl: "/images/morning-haze/use-case-diagram.jpg",
    modules: [
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Secure authentication and authorization system distinguishing between Cashiers and Administrators.",
        features: ["Secure login with bcrypt password hashing", "Role-specific dashboard routing", "Session validation"]
      },
      {
        title: "Order & Payment Processing",
        description: "Core POS functionality allowing cashiers to take orders, calculate totals, and process payments.",
        features: ["Cart management (add, update, remove items)", "Tax and total calculations", "Payment recording and receipt generation"]
      },
      {
        title: "Menu & Category Management",
        description: "Administrative tools to control the product offerings visible to cashiers.",
        features: ["CRUD operations for Categories", "CRUD operations for Menu Items", "Image uploading via Vercel Blob"]
      },
      {
        title: "Inventory Tracking",
        description: "Automated stock management that tracks raw materials and final product availability.",
        features: ["Real-time stock deduction upon order completion", "Low stock alerts and reorder levels", "Manual stock adjustments by admins"]
      }
    ],
    codeExplanation: `
### Server Actions and Prisma Integration
The application leverages Next.js Server Actions for form submissions and data mutations, ensuring type safety from the client to the database. Prisma ORM is used for robust database modeling.

\`\`\`typescript
// Example: Creating an order transaction
export async function createOrder(data: OrderInput) {
  return await prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        cashierId: data.cashierId,
        totalAmount: data.total,
        orderStatus: 'COMPLETED',
        orderItems: {
          create: data.items.map(item => ({
             menuItemId: item.id,
             quantity: item.quantity,
             unitPrice: item.price,
             subTotal: item.price * item.quantity
          }))
        }
      }
    });
    
    // Deduct inventory
    for (const item of data.items) {
      await tx.inventory.update({
        where: { menuItemId: item.id },
        data: { stockQuantity: { decrement: item.quantity } }
      });
    }
    return order;
  });
}
\`\`\`

### Dynamic UI with Tailwind CSS
The UI is fully responsive, built with Tailwind CSS. It uses CSS Grid for the POS layout, allowing cashiers to quickly access categories and menu items on touch devices.
    `,
    githubUrl: "https://github.com/ThantZin01/morning-haze-pos",
    liveUrl: ""
  },
  "dormitory-management-system": {
    id: "dormitory-management-system",
    title: "Dormitory Management System",
    tagline: "Multi-tenant student residence portal.",
    overview: "A centralized administrative platform designed to manage student dormitories. It features role-based access control, automated student room allocation, billing records, and tracking for shared expenses and utilities.",
    techStackDetailed: [
      {
        category: "Frontend",
        technologies: ["Next.js 16", "React 19", "Tailwind CSS 4", "Recharts"]
      },
      {
        category: "Backend & Database",
        technologies: ["Neon Serverless Postgres", "Prisma ORM", "Next.js Server Actions"]
      },
      {
        category: "Security & Storage",
        technologies: ["Better Auth", "Bcryptjs", "Zod"]
      }
    ],
    erDiagramUrl: "/images/dormitory-system/er-diagram.jpg",
    useCaseDiagramUrl: "/images/dormitory-system/use-case-diagram.jpg",
    modules: [
      {
        title: "User Management & RBAC",
        description: "Authentication powered by better-auth, distinguishing between Students and Administrators with secure session management.",
        features: ["Secure login and registration", "Role-specific views", "Session tracking"]
      },
      {
        title: "Resident & Room Tracking",
        description: "Manages student profiles, emergency contacts, room assignments, and move-in dates.",
        features: ["Profile management", "Room allocation tracking", "Active status toggling"]
      },
      {
        title: "Billing & Shared Expenses",
        description: "Comprehensive financial tracking for dormitory fees, shared utility purchases (water), and other expenses.",
        features: ["Record dormitory fee payments", "Calculate cost-per-person for shared expenses", "Track water bottle purchases"]
      },
      {
        title: "Chore Management",
        description: "System to track and assign daily/weekly chores like garbage disposal among residents.",
        features: ["Record garbage throwing turns", "Add notes to chores", "View chore history"]
      }
    ],
    codeExplanation: `
### Better Auth Integration
The application uses the modern \`better-auth\` library for secure authentication, providing a robust session-based login system out of the box.

\`\`\`typescript
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },
});
\`\`\`

### Neon Database & Prisma
By utilizing \`@neondatabase/serverless\` alongside Prisma's driver adapters, the application achieves extremely fast database connections in a serverless environment, drastically reducing cold start latency.
    `,
    githubUrl: "https://github.com/ThantZin01/dms-system",
    liveUrl: ""
  },
  "grokroast": {
    id: "grokroast",
    title: "GrokRoast",
    tagline: "AI-powered brutally honest feedback.",
    overview: "An interactive, 3D web experience that leverages simulated AI to critique or praise your ideas, bio, and routines. It blends high-end 3D visual storytelling with text-to-speech audio for a fully immersive web application.",
    techStackDetailed: [
      {
        category: "Frontend",
        technologies: ["React 19", "Vite", "Tailwind CSS", "Framer Motion"]
      },
      {
        category: "3D & Graphics",
        technologies: ["Three.js", "React Three Fiber", "React Three Drei", "Canvas Confetti"]
      },
      {
        category: "Audio & Utilities",
        technologies: ["Web Speech API", "HTML-to-Image", "Lucide React"]
      }
    ],
    erDiagramUrl: "/images/grokroast/er-diagram.jpg",
    useCaseDiagramUrl: "/images/grokroast/use-case-diagram.jpg",
    modules: [
      {
        title: "3D Core Rendering (GrokCore3D)",
        description: "A hardware-accelerated 3D environment powered by React Three Fiber and Three.js, responding dynamically to application state.",
        features: ["Custom mesh generation", "Dynamic lighting and shadows", "Interactive camera controls"]
      },
      {
        title: "AI Response Engine",
        description: "Simulates LLM-style roasting or boosting by generating dynamic text verdicts based on the provided user prompts.",
        features: ["Context-aware text generation", "Survival score calculations", "Configurable feedback modes"]
      },
      {
        title: "Voice Synthesis System",
        description: "Utilizes the browser's native Web Speech API to read the verdicts aloud with robotic, cyberpunk voice filters.",
        features: ["Cross-browser speech synthesis", "Real-time playback controls", "Voice muting and queuing"]
      },
      {
        title: "Interactive UI & Animations",
        description: "Sleek, neon-themed user interface driven by Framer Motion, with particle effects provided by canvas-confetti.",
        features: ["Fluid layout transitions", "Survival Gauge visualizer", "Export to image capability"]
      }
    ],
    codeExplanation: `
### React Three Fiber Integration
The application uses \`@react-three/fiber\` to bridge the declarative world of React with the imperative world of Three.js. This allows 3D scenes to react seamlessly to standard React state changes (like switching between "Roast" and "Boost" modes).

### Web Speech API Implementation
The Voice Synthesis module wraps the browser's native \`speechSynthesis\` interface, carefully managing voice selection and ensuring playback can be interrupted dynamically when the user requests a new verdict.

\`\`\`typescript
export const speakCritique = (text: string, mode: "roast" | "boost", onEnd: () => void) => {
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Select a voice that matches the vibe
  const voices = speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.name.includes("Google") || v.lang === "en-US");
  if (preferredVoice) utterance.voice = preferredVoice;

  utterance.pitch = mode === "roast" ? 0.8 : 1.2;
  utterance.rate = 1.05;
  utterance.onend = onEnd;

  speechSynthesis.cancel(); // Clear queue
  speechSynthesis.speak(utterance);
};
\`\`\`
    `,
    githubUrl: "https://github.com/ThantZin01/GrokRoast",
    liveUrl: ""
  }
};
