import React from 'react'
import type { SocialLink } from '../data/portfolioData'
import { Icon } from './Icons'

interface ContactSectionProps {
  email: string
  socials: SocialLink[]
  name?: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  socials,
}) => {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-inner">
        <div className="contact-body">
          <div className="contact-header-row">
            <span className="contact-label">04 / GET IN TOUCH</span>
            <div className="contact-status-pill">
              <span className="contact-status-dot" aria-hidden="true" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>

          <h2>
            LET'S BUILD
            <br />
            SOMETHING <em>RESILIENT.</em>
          </h2>

          <p className="contact-subtext">
            Whether you are looking to architect robust backend systems, deploy applied AI tooling, build modern full-stack web platforms, or explore technical collaboration—my inbox is always open.
          </p>

          <div className="contact-meta-row">
            <span className="contact-meta-item">
              <strong>LOCATION:</strong> Available for Remote work
            </span>
            <span className="contact-meta-item">
              <strong>RESPONSE:</strong> Usually within 24 hours
            </span>
          </div>

          <div className="social-links" aria-label="Social profiles and channels">
            {socials.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon name={link.name} size={22} />
                <span>{link.label}</span>
                <Icon name="arrow" size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
