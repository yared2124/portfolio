# Yared — Creative Technologist Portfolio

A high-fidelity **Neo-Brutalist & Cyber-Editorial** portfolio built with **React 19**, **TypeScript**, and **Vite**, containerized with **Docker** and **Docker Compose**.

Inspired by the design of `award-slam-87647109.figma.site`.

---

## ⚡ Quick Start with Docker

The application runs entirely within Docker:

```bash
# Start container in detached mode
docker compose up -d

# View real-time logs
docker compose logs -f

# Stop the container
docker compose down
```

The portfolio is live at: **[http://localhost:5174](http://localhost:5174)**

> *Note: Container port `5173` is mapped to host port `5174` to prevent port collision with other local services.*

---

## 🎨 Visual Identity & Design System

* **Dual Theme Engine**: Seamless light (`#f3f4dc` warm parchment) and dark (`#101011` void obsidian) mode with `localStorage` persistence and system preference fallback.
* **Curated Palette**:
  * `--acid`: `#d9ff43` (electric chartreuse)
  * `--violet`: `#7447ff` (digital violet)
  * `--orange`: `#ff5b35` (international safety orange)
  * `--ink`: `#0b0b0c` (high-contrast near-black)
* **Typography**:
  * Headings: **Syne** (Google Fonts, 500/600/700/800) with tight tracking and fluid `clamp()` sizing.
  * Meta & Code: **DM Mono** (Google Fonts, 300/400/500).
* **Atmospheric Effects**:
  * **SVG Noise Overlay**: Subtle 4.5% fractal noise grain for a tactile editorial feel.
  * **Pointer-Tracking Glow**: Dynamic radial gradient tracking pointer coordinates via CSS variables `--mouse-x` and `--mouse-y`.
  * **Generative CSS Art**:
    * **Neura**: Multi-stop radial gradients, floating sine-wave orbs with specular shadows, and animated scanning laser.
    * **FORM / 01**: Fluid liquid-metal chrome blob animated with `@keyframes morph`.
    * **Synapse**: High-voltage acid radar rings and pulsing core with interactive status chips.

---

## 🤖 Interactive "ASK MY AI" Assistant

Fixed neo-brutalist trigger button (`box-shadow: 5px 5px 0 var(--ink)`) opening an expandable chat drawer with:
* Real-time thinking simulation
* Quick suggestion prompt chips
* Contextual keyword intelligence to answer questions about projects, availability, and skills.

---

## 📁 Project Structure

```
Portfolio/
├── compose.yaml                # Docker Compose orchestration (port 5174:5173)
├── Dockerfile                  # Node 22 Alpine dev container
├── .dockerignore               # Docker build exclusions
├── index.html                  # Fonts (Syne, DM Mono) & SEO metadata
├── vite.config.ts              # Vite configured for Docker 0.0.0.0 & polling
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # App layout, theme state, pointer tracking
│   ├── index.css               # Design tokens, keyframe animations, responsive grid
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth (profile, projects, stack, AI answers)
│   └── components/
│       ├── Icons.tsx           # Typed SVG icons
│       ├── Navbar.tsx          # Monogram, nav anchors, availability dot, theme switch
│       ├── Hero.tsx            # Monumental typography, AI NATIVE badge, scroll CTA
│       ├── WorkSection.tsx     # Asymmetric project grid & CSS generative visuals
│       ├── TechStack.tsx       # Acid lime infinite marquee ribbon
│       ├── AboutSection.tsx    # Editorial statement, capabilities, infinite ticker
│       ├── ContactSection.tsx  # Oversized email CTA & 5-column social cards
│       └── AiAssistant.tsx     # Interactive neo-brutalist chat assistant
```

---

## ✏️ Customizing Your Content

All personal content, project descriptions, skills, social profiles, and AI responses live in **[src/data/portfolioData.ts](file:///home/yared2124/Projects/Portfolio/src/data/portfolioData.ts)**. 

Because Docker mounts the project directory as a live volume with polling enabled, any changes you save are hot-reloaded instantly in your browser!
