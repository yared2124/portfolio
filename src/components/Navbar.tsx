import React, { useState, useEffect } from 'react'
import { Icon } from './Icons'

interface NavbarProps {
  name?: string
  initials?: string
  isDark: boolean
  onToggleTheme: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  name = 'Yared Aregayehu',
  isDark,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label={`${name} — Back to top`}>
          <span className="brand-verified" title="Verified" aria-label="Verified profile">
            <Icon name="verified" size={16} />
          </span>
          <span className="brand-name">{name}</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <a className="availability" href="#contact">
            <span className="availability-dot" />
            <span>Available for work</span>
          </a>

          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Icon name={isDark ? "sun" : "moon"} size={15} />
          </button>
        </div>
      </nav>
    </header>
  )
}
