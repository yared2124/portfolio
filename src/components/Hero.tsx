import React from 'react'
import { Icon } from './Icons'

interface HeroProps {
  name?: string
  role: string
  location: string
  headline?: string
  subheadline?: string
  bio: string
  avatar?: string
}

export const Hero: React.FC<HeroProps> = ({
  name = 'Yared',
  role,
  location,
  bio,
  avatar = '/profile.jpg',
}) => {
  return (
    <section className="hero shell" id="top">
      <div className="eyebrow">
        <span>{role}</span>
        <span>{location}</span>
      </div>

      <div className="hero-main">
        <div className="hero-avatar-frame">
          <div className="hero-avatar-glow" aria-hidden="true" />
          <div className="hero-avatar-circle">
            <img
              src={avatar}
              alt={name}
              className="hero-avatar-img"
              width={220}
              height={220}
              loading="eager"
            />
          </div>
        </div>

        <div className="hero-body">
          <span className="hero-greeting">CREATIVE TECHNOLOGIST & ENGINEER</span>
          <h1 className="hero-name">
            {name}
            <span className="hero-name-period">.</span>
          </h1>
          <p className="hero-bio">{bio}</p>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-status">
          <span className="hero-status-dot" />
          <span>Available for select engineering & design work</span>
        </div>
        <a className="circle-link" href="#work" aria-label="Explore selected work">
          <Icon name="arrow" size={24} />
        </a>
      </div>

      <div className="scroll-note">SCROLL TO EXPLORE</div>
    </section>
  )
}
