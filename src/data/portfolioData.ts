export interface Project {
  number: string
  title: string
  type: string
  description: string
  tags: string[]
  visualType: 'neura' | 'form' | 'synapse'
  liveUrl?: string
  githubUrl?: string
}

export interface SocialLink {
  name: 'github' | 'linkedin' | 'upwork' | 'telegram' | 'mail'
  label: string
  href: string
}

export interface TechItem {
  name: string
  icon: string
  category: string
  badge?: string
}

export interface TechCategory {
  id: string
  name: string
  description?: string
  items: TechItem[]
}

export interface PortfolioData {
  profile: {
    name: string
    initials: string
    role: string
    location: string
    heroHeadline: string
    heroSubheadline: string
    heroBio: string
    aboutHeadline: string
    aboutEmphasis: string
    aboutBio: string
    email: string
    avatar?: string
  }
  services: string[]
  stack: string[]
  techCategories: TechCategory[]
  projects: Project[]
  socials: SocialLink[]
  aiResponses: Record<string, string>
  defaultAiMessage: string
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Yared Aregayehu",
    initials: "YA",
    avatar: "/profile.jpg",
    role: "Designer + Creative Technologist",
    location: "Based Everywhere",
    heroHeadline: "FUTURES",
    heroSubheadline: "with intelligence",
    heroBio: "I'm Yared — an independent creative technologist building vivid identities, digital products, and impossible-feeling interfaces.",
    aboutHeadline: "MAKING THE",
    aboutEmphasis: "UNEXPECTED",
    aboutBio: "I partner with ambitious teams to turn emerging technology into experiences people can feel. Strategy, architecture, interface, and motion — engineered as one coherent idea.",
    email: "hello@yared.design",
  },
  services: [
    "Creative Direction",
    "Product Design",
    "AI Prototyping",
    "Full-Stack Engineering",
    "Visual Identity",
    "Design Systems",
  ],
  techCategories: [
    {
      id: "frontend",
      name: "Frontend",
      description: "Interactive, fluid, high-performance interfaces",
      items: [
        { name: "JavaScript", icon: "javascript", category: "Frontend" },
        { name: "TypeScript", icon: "typescript", category: "Frontend" },
        { name: "React", icon: "react", category: "Frontend" },
        { name: "Next.js", icon: "nextjs", category: "Frontend" },
        { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      description: "Scalable APIs, resilient services & databases",
      items: [
        { name: "Node.js", icon: "nodejs", category: "Backend" },
        { name: "Express.js", icon: "expressjs", category: "Backend" },
        { name: "NestJS", icon: "nestjs", category: "Backend" },
        { name: "Supabase", icon: "supabase", category: "Backend" },
        { name: "PostgreSQL", icon: "postgresql", category: "Backend" },
        { name: "MongoDB", icon: "mongodb", category: "Backend" },
        { name: "Redis", icon: "redis", category: "Backend" },
        { name: "GraphQL", icon: "graphql", category: "Backend" },
        { name: "Prisma", icon: "prisma", category: "Backend" },
      ],
    },
    {
      id: "devops",
      name: "DevOps / Deployment",
      description: "Containerization, orchestration & automated CI/CD",
      items: [
        { name: "Docker", icon: "docker", category: "DevOps / Deployment" },
        { name: "Kubernetes", icon: "kubernetes", category: "DevOps / Deployment" },
        { name: "Vercel", icon: "vercel", category: "DevOps / Deployment" },
        { name: "GitHub Actions", icon: "githubactions", category: "DevOps / Deployment" },
      ],
    },
    {
      id: "vcs",
      name: "Version Control / Collaboration",
      description: "Distributed workflow, code review & versioning",
      items: [
        { name: "Git", icon: "git", category: "Version Control / Collaboration" },
        { name: "GitHub", icon: "github", category: "Version Control / Collaboration" },
      ],
    },
    {
      id: "tools",
      name: "Tools / Utilities",
      description: "Modern developer environment & team toolchains",
      items: [
        { name: "VS Code", icon: "vscode", category: "Tools / Utilities" },
        { name: "Postman", icon: "postman", category: "Tools / Utilities" },
        { name: "Figma", icon: "figma", category: "Tools / Utilities" },
        { name: "Chrome DevTools", icon: "chromedevtools", category: "Tools / Utilities" },
        { name: "Slack", icon: "slack", category: "Tools / Utilities" },
      ],
    },
  ],
  stack: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "NestJS",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "GraphQL",
    "Prisma",
    "Docker",
    "Kubernetes",
    "Vercel",
    "GitHub Actions",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
    "Chrome DevTools",
    "Slack",
  ],
  projects: [
    {
      number: "01",
      title: "Neura",
      type: "AI EXPERIENCE",
      description: "An adaptive learning environment that dynamically reshapes its mental models around the way each human mind learns.",
      tags: ["TypeScript", "React", "AI Agent", "Canvas API"],
      visualType: "neura",
      liveUrl: "#",
      githubUrl: "https://github.com/yared2124",
    },
    {
      number: "02",
      title: "FORM / 01",
      type: "GENERATIVE IDENTITY",
      description: "A living algorithmic identity system sculpted from audio input, kinetic velocity, and collective real-time telemetry.",
      tags: ["WebGL", "Generative Art", "Audio Reactive", "GLSL"],
      visualType: "form",
      liveUrl: "#",
      githubUrl: "https://github.com/yared2124",
    },
    {
      number: "03",
      title: "Synapse",
      type: "PRODUCT DESIGN",
      description: "A zero-friction collaboration canvas where humans and autonomous AI models brainstorm and build side by side.",
      tags: ["Product Design", "Next.js", "WebSockets", "Multiplayer"],
      visualType: "synapse",
      liveUrl: "#",
      githubUrl: "https://github.com/yared2124",
    },
  ],
  socials: [
    { name: "github", label: "GitHub", href: "https://github.com/yared2124" },
    { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/yared-aregayehu" },
    { name: "upwork", label: "Upwork", href: "https://www.upwork.com/" },
    { name: "telegram", label: "Telegram", href: "https://t.me/" },
    { name: "mail", label: "Email", href: "mailto:hello@yared.design" },
  ],
  defaultAiMessage: "I turn ambitious ideas into expressive digital products — from first prototype to polished production launch.",
  aiResponses: {
    "what do you do?": "I operate at the intersection of product design, creative engineering, and AI systems. I craft resilient frontends, memorable visual languages, and human-first AI interactions.",
    "are you available?": "Yes! Currently accepting select contract commissions, technical advisory roles, and high-impact design engineering projects for 2025/2026.",
    "why ai?": "Because computing is moving from static commands to fluid semantic intelligence. Building interfaces that feel alive requires reimagining how humans and models collaborate.",
    "what is your tech stack?": "My stack covers Frontend (JavaScript, TypeScript, React, Next.js, Tailwind CSS), Backend (Node.js, Express.js, NestJS, Supabase, PostgreSQL, MongoDB, Redis, GraphQL, Prisma), DevOps (Docker, Kubernetes, Vercel, GitHub Actions), and industry-standard toolchains (Git, GitHub, VS Code, Postman, Figma, Chrome DevTools, Slack).",
  },
}
