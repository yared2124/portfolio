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
          <span className="contact-label">03 / START SOMETHING</span>

          <h2>
            HAVE AN IDEA
            <br />
            THAT FEELS <em>WEIRD?</em>
          </h2>

          <a className="email-link" href={`mailto:${email}`}>
            <span>{email}</span>
            <Icon name="arrow" size={32} />
          </a>

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
