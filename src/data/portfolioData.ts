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
  }
  services: string[]
  stack: string[]
  projects: Project[]
  socials: SocialLink[]
  aiResponses: Record<string, string>
  defaultAiMessage: string
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Yared",
    initials: "YA",
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
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Docker",
    "Tailwind",
    "Node.js",
    "Python",
    "OpenAI / Claude",
    "Figma",
    "Framer Motion",
    "PostgreSQL",
    "GraphQL",
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
      githubUrl: "https://github.com/",
    },
    {
      number: "02",
      title: "FORM / 01",
      type: "GENERATIVE IDENTITY",
      description: "A living algorithmic identity system sculpted from audio input, kinetic velocity, and collective real-time telemetry.",
      tags: ["WebGL", "Generative Art", "Audio Reactive", "GLSL"],
      visualType: "form",
      liveUrl: "#",
      githubUrl: "https://github.com/",
    },
    {
      number: "03",
      title: "Synapse",
      type: "PRODUCT DESIGN",
      description: "A zero-friction collaboration canvas where humans and autonomous AI models brainstorm and build side by side.",
      tags: ["Product Design", "Next.js", "WebSockets", "Multiplayer"],
      visualType: "synapse",
      liveUrl: "#",
      githubUrl: "https://github.com/",
    },
  ],
  socials: [
    { name: "github", label: "GitHub", href: "https://github.com/" },
    { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
    { name: "upwork", label: "Upwork", href: "https://www.upwork.com/" },
    { name: "telegram", label: "Telegram", href: "https://t.me/" },
    { name: "mail", label: "Email", href: "mailto:hello@yared.design" },
  ],
  defaultAiMessage: "I turn ambitious ideas into expressive digital products — from first prototype to polished production launch.",
  aiResponses: {
    "what do you do?": "I operate at the intersection of product design, creative engineering, and AI systems. I craft resilient frontends, memorable visual languages, and human-first AI interactions.",
    "are you available?": "Yes! Currently accepting select contract commissions, technical advisory roles, and high-impact design engineering projects for 2025/2026.",
    "why ai?": "Because computing is moving from static commands to fluid semantic intelligence. Building interfaces that feel alive requires reimagining how humans and models collaborate.",
    "what is your tech stack?": "My primary stack revolves around TypeScript, React, Next.js, Docker, Python, Node.js, and modern AI/LLM orchestration APIs.",
  },
}
