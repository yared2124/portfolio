import React from 'react'
import { Icon } from './Icons'

interface HeroProps {
  role: string
  location: string
  headline: string
  subheadline: string
  bio: string
}

export const Hero: React.FC<HeroProps> = ({
  role,
  location,
  headline,
  subheadline,
  bio,
}) => {
  return (
    <section className="hero shell" id="top">
      <div className="eyebrow">
        <span>{role}</span>
        <span>{location}</span>
      </div>

      <div className="hero-copy">
        <p className="hero-kicker">I design</p>
        <h1>
          {headline}
          <span className="period">.</span>
        </h1>

        <div className="hero-bottom-line">
          <p>{subheadline}</p>
          <div className="ai-stamp">
            <Icon name="spark" size={14} />
            <span>AI NATIVE</span>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <p>{bio}</p>
        <a className="circle-link" href="#work" aria-label="Explore selected work">
          <Icon name="arrow" size={24} />
        </a>
      </div>

      <div className="scroll-note">SCROLL TO EXPLORE</div>
    </section>
  )
}
