export interface Project {
  number: string
  title: string
  type: string
  timeline?: string
  status?: string
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
      title: "Church Management ERP",
      type: "ENTERPRISE SYSTEM & PLATFORM",
      timeline: "Aug 2026 – Present",
      status: "In Progress",
      description: "An ongoing Church Management ERP platform engineered for Birhane Genet Beata Lemaryam (started August 2026, currently under active development) to streamline parish administration, membership records, sacraments, property rentals, and church finances.",
      extendedDescription: [
        "Current Status (Aug 2026 – Present): Actively developing modular features progressively, starting from the core analytics dashboard and establishing the reusable design system.",
        "Parish & Membership Management: Centralized directory for thousands of registered members, family units, and historical contribution tracking.",
        "Sacraments & Registry: End-to-end administration for Baptism, Marriage, Burial, and official ecclesiastical certificate generation.",
        "Financial Analytics & Accounting: Real-time dashboards monitoring monthly income (over 240k ETB/mo), expense tracking against budgets, and approval chains.",
        "Properties & Tenant Leasing: Comprehensive management of church-owned properties, rental units, tenant contracts, and automated overdue rent alerts.",
        "Modern Stack & Design System: Built with Next.js App Router, TypeScript, and a unified Tailwind CSS design-token system supporting both English and Amharic.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Docker"],
      imageUrl: "/church-erp.png",
      liveUrl: "https://github.com/yared2124/church-erp",
      githubUrl: "https://github.com/yared2124/church-erp",
    },
    {
      number: "04",
      title: "AI-Native Prompt Architect",
      type: "AI PROMPT ENGINE & TOOL",
      description: "An AI-native prompt engineering platform that transforms casual, ambiguous input into optimized, model-specific prompts tailored for Claude, ChatGPT, Gemini, and DeepSeek under real constraints.",
      extendedDescription: [
        "10 Foundation Model Compilers: Compiles prompts adhering to model-specific idioms—Claude semantic XML tags, OpenAI strict JSON schemas, DeepSeek mathematical logic, and Gemini multi-turn reasoning.",
        "4 Engineering Strategies: Choose between Standard Smart, Token Saver (30%–50% token reduction), Production Strict (type-safety, error handling & tests), and Deep Reasoning.",
        "12 Domain Contexts & 1-Click Presets: Instant specialized presets across Coding, Distributed Systems, Data Analytics, Creative Writing, and technical oral defenses.",
        "Real-Time Token & Constraint Analytics: Measures token counts before & after, calculates compression savings, and extracts explicit roles, constraints, and schemas.",
        "Zero-Friction Local Library: Save, organize, export (JSON), and copy engineered prompts directly in the browser with zero server database overhead.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Prompt Engineering", "Jest"],
      imageUrl: "/prompt-helper.png",
      liveUrl: "https://prompt-helper-sable.vercel.app/",
      githubUrl: "https://github.com/yared2124/Prompt-helper",
    },
    {
      number: "05",
      title: "Channel Vigil Bot",
      type: "TELEGRAM BOT & TELEMETRY",
      description: "An automated real-time Telegram audit and channel monitoring bot (@my_channel_vigil_bot) that delivers instant alerts and audit trails whenever members join or leave monitored channels.",
      extendedDescription: [
        "Instant Join & Leave Alerts: Dispatches immediate real-time notifications with user names, Telegram handles, unique user IDs, and UTC event timestamps.",
        "Automated Bot Detection: Flags incoming accounts to determine whether joins originate from real users or automated spam/bot accounts.",
        "Multi-Channel Telemetry: Concurrently monitors multiple Telegram channels and supergroups under a single centralized bot instance.",
        "Persistent Audit Logging: Built with Prisma ORM to track historical member flux, subscriber trends, and channel growth analytics.",
        "Resilient Webhook Architecture: Built on Next.js/Node.js to handle high-frequency subscriber churn without hitting Telegram API rate limits.",
      ],
      tags: ["Telegram Bot API", "TypeScript", "Next.js", "Prisma", "Node.js", "Webhooks"],
      imageUrl: "/channel-vigil.png",
      liveUrl: "https://t.me/my_channel_vigil_bot",
      githubUrl: "https://github.com/yared2124/Channel-Vigil-bot",
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
    "tell me about church erp": "Church Management ERP is a full enterprise parish administration platform developed for Birhane Genet Beata Lemaryam. It features centralized member & family registries, sacramental records (Baptism, Marriage, Burial), real-time financial accounting & budget analytics, and tenant leasing with automated payment alerts.",
    "tell me about prompt helper": "PromptHelper (AI-Native Prompt Architect) is a developer platform that transforms plain-language inputs into optimized, model-specific prompts tailored for Claude, ChatGPT, Gemini, and DeepSeek. It features 10 model compilers, 4 prompting strategies (including token compression up to 50%), real-time token analytics, and 1-click domain presets.",
    "tell me about channel vigil bot": "Channel Vigil Bot (@my_channel_vigil_bot) is an automated Telegram channel telemetry and security bot. It monitors subscriber join and leave events in real time, provides bot account detection, logs user IDs and timestamps, and creates transparent audit trails for channel administrators.",
    "what are your latest projects?": "My featured work includes VideoTrust AI (real-time YouTube clickbait and bot detection), Backend Engineer Hub (open-access distributed systems roadmap), Church Management ERP (enterprise parish & financial platform), AI-Native Prompt Architect (model-specific prompt engineering engine), and Channel Vigil Bot (Telegram channel security and telemetry).",
  },
}
