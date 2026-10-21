import React from 'react'
import type { AboutStat, AboutPillar } from '../data/portfolioData'

interface AboutSectionProps {
  headline?: string
  emphasis?: string
  bio: string
  services: string[]
  story?: string[]
  stats?: AboutStat[]
  pillars?: AboutPillar[]
  education?: string
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  bio,
  services,
  story,
  stats,
  pillars,
  education,
}) => {
  return (
    <section className="about-section shell" id="about">
      <div className="section-heading light">
        <span>03 / ABOUT & PHILOSOPHY</span>
        <p>Software Engineer · Backend Systems &amp; Applied AI</p>
      </div>

      <div className="about-grid">
        {/* Left Side: Profile & Environment Dossier */}
        <div className="about-profile-panel">
          <div className="about-panel-header">
            <span className="about-panel-tag">ENGINEER DOSSIER</span>
          </div>

          <h2 className="about-compact-title">
            <span className="about-title-line">SYSTEMS &amp; INTELLIGENCE</span>
            <span className="about-title-line">WITH PURPOSE.</span>
          </h2>

          <div className="about-terminal-tag">
            <span className="terminal-prompt">$</span>
            <code>arch-linux // omarchy // hyprland // terminal-first</code>
          </div>

          {education && (
            <div className="about-education-card">
              <span className="edu-icon" aria-hidden="true">🏛</span>
              <span className="about-edu-text">{education}</span>
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="about-stats-grid" aria-label="Key engineering highlights">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat-card">
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Compact Editorial Flow (Preserves all text without stretching down) */}
        <div className="about-copy">
          <div className="about-lead-card">
            <p className="about-lead">{bio}</p>
          </div>

          {story && story.length > 0 && (
            <div className="about-story-container">
              {/* Dual-column subgrid for the narrative blocks */}
              <div className="about-story-cols">
                {story.slice(0, 2).map((paragraph, idx) => (
                  <div key={idx} className="about-story-block">
                    <span className="story-idx-num">0{idx + 1} // FOCUS</span>
                    <p className="about-paragraph">{paragraph}</p>
                  </div>
                ))}
              </div>

              {/* Trajectory Banner for the 90-day curriculum */}
              {story[2] && (
                <div className="about-trajectory-card">
                  <div className="trajectory-header">
                    <span className="trajectory-badge">03 // CURRENT TRAJECTORY</span>
                  </div>
                  <p className="about-paragraph">{story[2]}</p>
                </div>
              )}
            </div>
          )}

          <div className="about-services-wrap">
            <span className="about-services-title">CORE CAPABILITIES &amp; FOCUS</span>
            <div className="about-services-pills">
              {services.map((service) => (
                <span key={service} className="service-pill">
                  <span className="service-arrow" aria-hidden="true">→</span>
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {pillars && pillars.length > 0 && (
        <div className="about-pillars-container">
          <div className="about-pillars-heading">
            <span className="pillars-badge">ARCHITECTURAL PILLARS</span>
            <h3>How I approach engineering production systems</h3>
          </div>
          <div className="about-pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="about-pillar-card">
                <span className="pillar-num">{pillar.number}</span>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
