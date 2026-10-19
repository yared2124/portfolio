export interface Project {
  number: string
  title: string
  type: string
  description: string
  extendedDescription?: string[]
  tags: string[]
  visualType?: 'neura' | 'form' | 'synapse' | 'image'
  imageUrl?: string
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
  stats?: {
    counterKey?: string
    label?: string
  }
}

export const portfolioData: PortfolioData = {
  stats: {
    counterKey: "yared-aregayehu-portfolio-views",
    label: "Views",
  },
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
      title: "VideoTrust AI",
      type: "AI EXTENSION & ENGINE",
      description: "A Chrome extension and backend built to call out YouTube clickbait and fake engagement. It scans transcripts and community discussions in under two seconds so you know if a video is actually worth watching.",
      extendedDescription: [
        "Lightning-fast analysis: Pulls the video transcript, metadata, and hundreds of comments in under two seconds without hitting YouTube quota limits.",
        "Clickbait detector: Uses Gemini AI to compare what the video title promises against what's actually spoken in the video.",
        "Bot & scam cleaner: Filters out copy-pasted bot comments, fake engagement rings, and Telegram trading traps.",
        "Smooth Chrome extension: Fits naturally right beside YouTube's player with an expandable drawer that never lags or shifts your page.",
        "Built-in MCP server: Lets you run video integrity checks straight from AI coding tools like Claude Desktop and Cursor.",
      ],
      tags: ["TypeScript", "Fastify", "Gemini AI", "Manifest V3", "Redis", "Docker"],
      imageUrl: "/videotrust.png",
      liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7509130946252767232/",
      githubUrl: "https://github.com/yared2124/VideoTrust-AI-",
    },
    {
      number: "02",
      title: "Backend Engineer Hub",
      type: "SYSTEMS & OPEN LEARNING",
      description: "An open-access roadmap and interactive platform built to help engineers move past toy CRUD apps to architecting resilient, high-throughput distributed systems.",
      extendedDescription: [
        "7 Mastery Phases & 31 Deep-Dives: Progresses from CPU/RAM latency and raw TCP/IP sockets to distributed locks, transactional outboxes, and multi-region databases.",
        "Multi-Language Blueprints: 93 production implementations provided side-by-side in Go, TypeScript (Node.js), and Python.",
        "7 Production Capstones: Step-by-step specifications for industry-grade projects like reverse proxies, double-entry financial ledgers, and zero-trust IAM gateways.",
        "Interactive Interview Simulator: 93 technical oral defense questions with timed evaluation rubrics to sharpen staff-level whiteboard communication.",
        "Zero-Barrier Access: No logins, paywalls, or tracking cookies—with keyboard shortcuts (⌘K command palette) and full local storage sync.",
      ],
      tags: ["Next.js", "TypeScript", "Distributed Systems", "Tailwind CSS", "Go", "Python"],
      imageUrl: "/backend-roadmap.png",
      liveUrl: "https://roadmap-backend-engineers.vercel.app",
      githubUrl: "https://github.com/yared2124/Roadmap-Backend-Engineers",
    },
    {
      number: "03",
      title: "Neura",
      type: "AI EXPERIENCE",
      description: "An adaptive learning environment that dynamically reshapes its mental models around the way each human mind learns.",
      extendedDescription: [
        "Real-time semantic knowledge graph that reorganizes node clusters based on user comprehension velocity.",
        "Interactive HTML5 Canvas spatial environment with custom physics-based edge spring simulations.",
        "Local-first state architecture with encrypted offline caching and seamless cloud synchronization.",
      ],
      tags: ["TypeScript", "React", "AI Agent", "Canvas API"],
      visualType: "neura",
      liveUrl: "#",
      githubUrl: "https://github.com/yared2124",
    },
    {
      number: "04",
      title: "FORM / 01",
      type: "GENERATIVE IDENTITY",
      description: "A living algorithmic identity system sculpted from audio input, kinetic velocity, and collective real-time telemetry.",
      extendedDescription: [
        "Custom GLSL procedural liquid-chrome shader responding dynamically to ambient audio frequencies.",
        "Variable kinetic typography engine calculating letter-spacing and weight shifts from cursor trajectory.",
        "SVG vector export pipeline allowing designers to freeze and capture generative artifacts for print media.",
      ],
      tags: ["WebGL", "Generative Art", "Audio Reactive", "GLSL"],
      visualType: "form",
      liveUrl: "#",
      githubUrl: "https://github.com/yared2124",
    },
    {
      number: "05",
      title: "Synapse",
      type: "PRODUCT DESIGN",
      description: "A zero-friction collaboration canvas where humans and autonomous AI models brainstorm and build side by side.",
      extendedDescription: [
        "Sub-50ms multiplayer synchronization engine built on WebSockets and conflict-free replicated data types (CRDTs).",
        "Context-aware AI co-agent capable of synthesizing sprawling sticky-note clusters into structured architectural briefs.",
        "Design system crafted with high-contrast tactile widgets, keyboard shortcut palettes, and fluid viewport navigation.",
      ],
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
    "tell me about videotrust ai": "VideoTrust AI is an AI-powered YouTube integrity system and Manifest V3 extension. It ingests video transcripts and comments in under 2 seconds, runs Gemini text embeddings to calculate title-transcript semantic divergence, detects bot farms, and produces an explainable Trust Score with WATCH, MAYBE, or SKIP verdicts.",
    "tell me about backend engineer hub": "Backend Engineer Hub is an open-access learning platform and master roadmap for distributed systems engineers. It spans 7 architectural phases, 31 deep-dives, 93 multi-language blueprints (Go, TypeScript, Python), 7 industry capstones, and an interactive oral interview defense simulator.",
    "what are your latest projects?": "My featured work includes VideoTrust AI (real-time YouTube clickbait and bot detection), Backend Engineer Hub (open-access distributed systems roadmap), Neura (adaptive learning models), FORM / 01 (generative identity), and Synapse (human-AI collaboration canvas).",
  },
}
