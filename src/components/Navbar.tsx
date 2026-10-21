import React, { useState, useEffect } from 'react'
import { Icon } from './Icons'
import { VisitorCounter } from './VisitorCounter'

interface NavbarProps {
  name?: string
  initials?: string
  isDark: boolean
  onToggleTheme: () => void
  stats?: {
    counterKey?: string
    label?: string
  }
}

export const Navbar: React.FC<NavbarProps> = ({
  name = 'Yared Aregayehu',
  isDark,
  onToggleTheme,
  stats,
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on Escape key or on window resize to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-expanded' : ''}`}>
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label={`${name} — Back to top`} onClick={closeMenu}>
            <span className="brand-verified" title="Verified" aria-label="Verified profile">
              <Icon name="verified" size={16} />
            </span>
            <span className="brand-name">{name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <a href="#work">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <VisitorCounter counterKey={stats?.counterKey} label={stats?.label} />

            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <Icon name={isDark ? "sun" : "moon"} size={15} />
            </button>

            {/* Three small lines hamburger button */}
            <button
              className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown / drawer menu */}
        <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <div className="mobile-nav-content shell">
            <div className="mobile-nav-header-tag">
              <span>// NAVIGATION</span>
            </div>
            <div className="mobile-nav-links">
              <a href="#work" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">01</span>
                <span className="mobile-nav-label">Projects</span>
                <Icon name="arrow" size={15} className="mobile-nav-arrow" />
              </a>
              <a href="#skills" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">02</span>
                <span className="mobile-nav-label">Skills</span>
                <Icon name="arrow" size={15} className="mobile-nav-arrow" />
              </a>
              <a href="#about" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">03</span>
                <span className="mobile-nav-label">About</span>
                <Icon name="arrow" size={15} className="mobile-nav-arrow" />
              </a>
              <a href="#contact" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">04</span>
                <span className="mobile-nav-label">Contact</span>
                <Icon name="arrow" size={15} className="mobile-nav-arrow" />
              </a>
            </div>

            <div className="mobile-nav-footer">
              <div className="mobile-nav-status">
                <span className="availability-dot" />
                <span>Available for Remote work</span>
              </div>
              <a href="mailto:yaredbaby21@gmail.com" className="mobile-nav-email">
                yaredbaby21@gmail.com
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`mobile-nav-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}
