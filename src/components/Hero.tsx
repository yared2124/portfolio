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
  targetRoles?: string
}

export const Hero: React.FC<HeroProps> = ({
  name = 'Yared',
  role,
  location,
  bio,
  avatar = '/profile.jpg',
  targetRoles,
}) => {
  return (
    <section className="hero shell" id="top">
      <div className="eyebrow">
        <span>{role}</span>
        <span>{location}</span>
      </div>

      <div className="hero-main">
        <div className="hero-body">
          <span className="hero-greeting">CREATIVE TECHNOLOGIST & ENGINEER</span>
          <h1 className="hero-name">
            {name}
            <span className="hero-name-period">.</span>
          </h1>
          <p className="hero-bio">{bio}</p>
        </div>

        <div className="hero-avatar-frame">
          <div className="hero-ring" aria-hidden="true" />
          <div className="hero-avatar-glow" aria-hidden="true" />
          <div className="hero-avatar-circle">
            <img
              src={avatar}
              alt={name}
              className="hero-avatar-img"
              width={420}
              height={420}
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-foot-left">
          <div className="hero-motto">
            <span className="motto-line" aria-hidden="true" />
            <span className="motto-text">Work smarter, not harder</span>
            <span className="motto-line" aria-hidden="true" />
          </div>

          {targetRoles && (
            <div className="hero-target-roles">
              <span className="hero-target-dot" aria-hidden="true" />
              <span>{targetRoles}</span>
            </div>
          )}
        </div>

        <a className="circle-link" href="#work" aria-label="Explore selected projects">
          <Icon name="arrow" size={24} />
        </a>
      </div>
    </section>
  )
}
