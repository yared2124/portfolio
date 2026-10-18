import React from 'react'
import { Icon } from './Icons'

interface NavbarProps {
  initials: string
  isDark: boolean
  onToggleTheme: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ initials, isDark, onToggleTheme }) => {
  return (
    <nav className="nav shell" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Back to top">
        <span>{initials}</span>
        <i />
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
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
          <Icon name={isDark ? "sun" : "moon"} size={17} />
        </button>
      </div>
    </nav>
  )
}
