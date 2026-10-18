import { useState, useEffect } from 'react'
import { portfolioData } from './data/portfolioData'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkSection } from './components/WorkSection'
import { TechStack } from './components/TechStack'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { AiAssistant } from './components/AiAssistant'

export function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true
    const saved = window.localStorage.getItem('portfolio-theme')
    if (saved) return saved === 'dark'
    return true
  })

  // Synchronize pointer glow coordinates
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  // Synchronize theme state with dataset and localStorage
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [isDark])

  const { profile, projects, stack, services, socials, defaultAiMessage, aiResponses } =
    portfolioData

  return (
    <main>
      {/* Background grain and cursor glow */}
      <div className="noise" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      {/* Navigation */}
      <Navbar
        initials={profile.initials}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      {/* Hero Section */}
      <Hero
        role={profile.role}
        location={profile.location}
        headline={profile.heroHeadline}
        subheadline={profile.heroSubheadline}
        bio={profile.heroBio}
      />

      {/* 01 / Selected Work */}
      <WorkSection projects={projects} />

      {/* Technology Stack Marquee */}
      <TechStack stack={stack} />

      {/* 02 / Approach & Philosophy */}
      <AboutSection
        headline={profile.aboutHeadline}
        emphasis={profile.aboutEmphasis}
        bio={profile.aboutBio}
        services={services}
      />

      {/* 03 / Contact & Socials */}
      <ContactSection
        email={profile.email}
        socials={socials}
        name={profile.name}
      />

      {/* Floating AI Assistant ("ASK MY AI") */}
      <AiAssistant
        name={profile.name}
        defaultMessage={defaultAiMessage}
        responses={aiResponses}
      />
    </main>
  )
}

export default App
