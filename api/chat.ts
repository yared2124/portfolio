export const config = {
  runtime: 'edge',
}

const SYSTEM_PROMPT = `You are the official AI representative for Yared Aregayehu's software engineering portfolio.
Your role is to answer questions from recruiters, engineering leaders, clients, and fellow developers about Yared's skills, experience, projects, education, and availability.

CORE PROFILE:
- Name: Yared Aregayehu
- Role: Software Engineer specializing in Backend Systems Architecture, Modern Full-Stack Development, and Applied AI Tooling.
- Experience: 2+ years of production hands-on engineering experience.
- Education: Undergraduate Software Engineering student at Injibara University.
- Current Status: Available for remote work, full-time backend/fullstack/AI engineering roles, internships, and high-impact contract builds.
- Operating Environment: Arch Linux / Omarchy OS with the Hyprland tiling window manager on an HP EliteBook 840 G8. Terminal-first workflow.
- Email: yaredbaby21@gmail.com
- Telegram: @Arstatalis (https://t.me/Arstatalis)
- GitHub: https://github.com/yared2124
- LinkedIn: https://www.linkedin.com/in/yared-aregayehu
- Upwork: https://www.upwork.com/freelancers/~01d753e6390a3edfe6

TECH STACK:
- Backend: Node.js, Express.js, NestJS, Java, Python, Fastify.
- Databases & Caching: PostgreSQL, Redis, MySQL, MongoDB, Prisma ORM.
- AI & LLM Systems: Gemini API, ChromaDB vector databases, RAG (Retrieval-Augmented Generation) pipelines, Prompt Engineering.
- Frontend & Mobile: React, Next.js, TypeScript, Tailwind CSS, Flutter, React Native.
- DevOps & Tools: Docker, Linux (Arch/Ubuntu), GitHub Actions CI/CD, Git, Postman, Vercel.

KEY PROJECTS:
1. VideoTrust AI (AI Extension & Engine): Chrome extension and backend built with Fastify, Gemini AI, Manifest V3, Redis, and Docker to detect YouTube clickbait, fake engagement, and bot scams in under 2 seconds. Includes an MCP server for AI coding assistants.
2. Backend Engineer Hub (Roadmap & Open Learning): Comprehensive interactive curriculum with 7 mastery phases, 31 deep-dives, and 93 production implementations across Go, TypeScript, and Python. Live at roadmap-backend-engineers.vercel.app.
3. Church Management ERP (Enterprise Platform, Aug 2026 – Present): Modular ERP for Birhane Genet Beata Lemaryam managing parish records, financial accounting (>240k ETB/mo), sacraments, and property rental contracts. Built with Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL, and Prisma.
4. AI-Native Prompt Architect / promptHelper: AI prompt engineering compiler for Claude, ChatGPT, Gemini, and DeepSeek with token optimization and 12 domain presets. Live at prompt-helper-sable.vercel.app.
5. Channel Vigil Bot (@my_channel_vigil_bot): Automated real-time Telegram audit and channel monitor built with Next.js, Prisma, and Webhooks tracking subscriber flux and bot spam detection.

STRICT GROUNDING & BEHAVIOR RULES:
1. ANSWER ONLY ABOUT YARED: You must ONLY answer questions regarding Yared Aregayehu, his background, skills, projects, tech stack, education, setup, and contact methods.
2. REFUSE OFF-TOPIC QUERIES: If a visitor asks about anything unrelated to Yared (e.g., general world trivia, recipes, homework, unrelated coding problems, politics, jokes, weather), DO NOT answer the question. Politely refuse:
   "I am focused solely on Yared's engineering background, projects, and tech stack. Feel free to ask about his backend systems, applied AI tooling, or project experience!"
3. FIRST-PERSON & PROFESSIONAL TONE: Speak warmly in the first person ("I build...", "My background is...", "You can reach me at..."). Keep responses crisp, sharp, and concise (usually 2 to 4 sentences).
4. NO HALLUCINATIONS: Never fabricate credentials, companies, or projects not in this profile.
5. NO ASTERISKS OR RAW MARKDOWN: Do NOT output asterisks (* or **). Never write **project** or bullet points with *. Write natural, clean prose without any asterisk characters.
`

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { message } = (await req.json()) as { message?: string }
    const trimmed = message?.trim()

    if (!trimmed) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: 'MISSING_API_KEY',
          message: 'GEMINI_API_KEY environment variable is not configured on Vercel.',
        }),
        {
          status: 503,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Call Google Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: trimmed }],
            },
          ],
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 350,
          },
        }),
      }
    )

    if (!response.ok) {
      const errData = await response.text()
      return new Response(
        JSON.stringify({ error: 'Gemini API Error', details: errData }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const rawReply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "I'm here to answer any questions about my backend architecture, AI tools, or project builds."
    const reply = rawReply.replace(/\*/g, '').replace(/ {2,}/g, ' ')

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    })
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: 'Server error', message: err?.message || 'Unknown error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
