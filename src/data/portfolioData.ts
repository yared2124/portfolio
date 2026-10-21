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

export interface AboutStat {
  value: string
  label: string
}

export interface AboutPillar {
  number: string
  title: string
  desc: string
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
    targetRoles?: string
    aboutStory?: string[]
    aboutStats?: AboutStat[]
    aboutPillars?: AboutPillar[]
    education?: string
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
    label: "Visits",
  },
  profile: {
    name: "Yared Aregayehu",
    initials: "YA",
    avatar: "/profile.jpg",
    role: "Software Engineer · Backend & AI Systems",
    location: "Available for Remote work",
    heroHeadline: "FUTURES",
    heroSubheadline: "with intelligence",
    heroBio: "Software engineer with 2+ years of experience building robust backend systems, modern full-stack applications, and applied AI tooling.",
    targetRoles: "Looking for fullstack, backend or AI roles",
    aboutHeadline: "SYSTEMS &",
    aboutEmphasis: "INTELLIGENCE",
    aboutBio: "Software engineer with 2+ years of hands-on experience operating at the intersection of backend systems architecture, modern full-stack engineering, and applied AI tooling.",
    education: "Software Engineering Student at Injibara University",
    aboutStory: [
      "With 2+ years of engineering experience, I develop software with a terminal-first mindset on Arch Linux / Omarchy OS with the Hyprland tiling window manager. My core focus is architecting resilient backends, tuning relational and key-value databases, and integrating deterministic AI workflows.",
      "My recent builds include promptHelper (AI prompt optimization platform), 'በህግ አምላክ' (Amharic legal assistant with FastAPI and ChromaDB RAG), PROPERTYMANAGER (RBAC-driven property platform), and omarchy-daily-focus (native desktop Linux utility).",
      "I am currently executing a rigorous 90-day backend engineering mastery curriculum covering advanced Linux systems, network protocols, Docker, PostgreSQL tuning, Redis caching, Kafka, and Kubernetes."
    ],
    aboutStats: [
      { value: "2+ Years", label: "Software Engineering" },
      { value: "90-Day", label: "Backend Mastery Track" },
      { value: "Arch + Hyprland", label: "Terminal-First Environment" },
      { value: "Backend + AI", label: "Core Specialization" },
    ],
    aboutPillars: [
      {
        number: "01",
        title: "Backend & Systems",
        desc: "Node.js, Express.js, NestJS, and Java for algorithmic problem-solving, clean MVC patterns, and high-throughput API architectures.",
      },
      {
        number: "02",
        title: "Data Layers & Caching",
        desc: "PostgreSQL, MySQL, MongoDB, Redis for caching and rate limiting, and Prisma ORM for type-safe data modeling.",
      },
      {
        number: "03",
        title: "Applied AI & RAG",
        desc: "Gemini API integrations, ChromaDB vector databases, and localized RAG pipelines for domain-specific intelligence.",
      },
      {
        number: "04",
        title: "Linux & DevOps Rig",
        desc: "Docker containerization, GitHub Actions CI/CD, Ubuntu server virtualization, and deep hands-on Linux administration.",
      },
    ],
    email: "yaredbaby21@gmail.com",
  },
  services: [
    "Backend Systems Architecture",
    "Full-Stack Web Development",
    "Mobile App Development",
    "Applied AI & RAG Tooling",
    "Database Modeling & Caching",
    "Linux & Docker DevOps",
    "API & Microservice Design",
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
      id: "mobile",
      name: "Mobile Development",
      description: "Cross-platform mobile engineering for iOS and Android",
      items: [
        { name: "Flutter", icon: "flutter", category: "Mobile Development" },
        { name: "React Native", icon: "reactnative", category: "Mobile Development" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      description: "Scalable APIs, resilient services & databases",
      items: [
        { name: "Node.js", icon: "nodejs", category: "Backend" },
        { name: "Python", icon: "python", category: "Backend" },
        { name: "Express.js", icon: "expressjs", category: "Backend" },
        { name: "NestJS", icon: "nestjs", category: "Backend" },
        { name: "Java", icon: "java", category: "Backend" },
        { name: "PostgreSQL", icon: "postgresql", category: "Backend" },
        { name: "MySQL", icon: "mysql", category: "Backend" },
        { name: "MongoDB", icon: "mongodb", category: "Backend" },
        { name: "Redis", icon: "redis", category: "Backend" },
        { name: "Prisma", icon: "prisma", category: "Backend" },
      ],
    },
    {
      id: "devops",
      name: "DevOps / Infrastructure",
      description: "Containerization, orchestration & automated CI/CD",
      items: [
        { name: "Docker", icon: "docker", category: "DevOps / Infrastructure" },
        { name: "Linux / Arch", icon: "linux", category: "DevOps / Infrastructure" },
        { name: "VirtualBox", icon: "virtualbox", category: "DevOps / Infrastructure" },
        { name: "GitHub Actions", icon: "githubactions", category: "DevOps / Infrastructure" },
        { name: "Vercel", icon: "vercel", category: "DevOps / Infrastructure" },
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
      name: "Tools / Environment",
      description: "Modern developer environment & team toolchains",
      items: [
        { name: "Arch Linux + Hyprland", icon: "arch", category: "Tools / Environment" },
        { name: "VS Code", icon: "vscode", category: "Tools / Environment" },
        { name: "Antigravity IDE", icon: "ide", category: "Tools / Environment" },
        { name: "Postman", icon: "postman", category: "Tools / Environment" },
        { name: "Figma", icon: "figma", category: "Tools / Environment" },
        { name: "Slack", icon: "slack", category: "Tools / Environment" },
      ],
    },
  ],
  stack: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Flutter",
    "React Native",
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
    { name: "upwork", label: "Upwork", href: "https://www.upwork.com/freelancers/~01d753e6390a3edfe6" },
    { name: "telegram", label: "Telegram", href: "https://t.me/Arstatalis" },
    { name: "mail", label: "Email", href: "mailto:yaredbaby21@gmail.com" },
  ],
  defaultAiMessage: "I build robust backend systems, applied AI tooling, and modern full-stack web applications.",
  aiResponses: {
    "who is yared?": "Yared Aregayehu is a Software Engineer with 2+ years of experience operating at the intersection of backend systems architecture, modern full-stack engineering, and applied AI tooling on a customized Arch Linux / Hyprland rig. He is an undergraduate software engineering student at Injibara University.",
    "what do you do?": "I architect scalable backend services with Node.js, Express, NestJS, and Java; design data layers with PostgreSQL, Redis, and Prisma; build frontends with React and Next.js; and develop applied AI tools with Gemini, ChromaDB, and RAG pipelines.",
    "tell me about yourself": "I'm a software engineer with 2+ years of experience building terminal-first on Arch Linux, studying software engineering at Injibara University, executing a 90-day backend engineering mastery curriculum, and creating practical tools like promptHelper, 'በህግ አምላክ' (Amharic legal RAG), and PROPERTYMANAGER.",
    "what is your education?": "I am currently an undergraduate Software Engineering student at Injibara University, pairing deep academic engineering fundamentals with 2+ years of hands-on production system development.",
    "education": "Undergraduate Software Engineering student at Injibara University.",
    "are you available?": "Yes! Looking for fullstack, backend or AI roles (open for internships, full-time engineering, contract roles, and collaborative builds).",
    "what is your tech stack?": "Backend (Node.js, Express.js, NestJS, Java, PostgreSQL, MySQL, MongoDB, Redis, Prisma), Mobile (Flutter, React Native), Frontend (React, Next.js, TypeScript, Tailwind CSS), DevOps (Docker, Linux/Arch, VirtualBox, GitHub Actions), and AI (Gemini API, ChromaDB RAG).",
    "tell me about your environment": "I work on an HP EliteBook 840 G8 running Arch Linux / Omarchy OS with the Hyprland tiling window manager, using VS Code, Antigravity IDE, Docker, and terminal automation.",
    "tell me about prompthelper": "promptHelper is an AI-native prompt engineering and optimization platform built with Next.js, TypeScript, Tailwind CSS, and the Gemini API, deployed on Vercel (prompt-helper-sable.vercel.app).",
    "tell me about your projects": "Key builds include promptHelper (AI prompt compiler), 'በህግ አምላክ' (Amharic legal assistant with FastAPI and ChromaDB RAG), PROPERTYMANAGER (RBAC property platform), omarchy-daily-focus (Hyprland desktop utility), and VideoTrust AI (YouTube integrity analyzer).",
  },
}
