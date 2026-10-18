import React from 'react'

interface AboutSectionProps {
  headline: string
  emphasis: string
  bio: string
  services: string[]
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  headline,
  emphasis,
  bio,
  services,
}) => {
  return (
    <section className="about-section shell" id="about">
      <div className="section-heading light">
        <span>02 / APPROACH</span>
        <p>Part systems thinker, part interface architect, always curious.</p>
      </div>

      <div className="about-grid">
        <h2>
          {headline}
          <br />
          <em>{emphasis}</em>
          <br />
          FEEL INEVITABLE.
        </h2>

        <div className="about-copy">
          <p>{bio}</p>

          <div className="services">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>
            DESIGN WHAT'S NEXT — CODE WHAT'S POSSIBLE — DESIGN WHAT'S NEXT — CODE WHAT'S POSSIBLE —&nbsp;
          </span>
          <span>
            DESIGN WHAT'S NEXT — CODE WHAT'S POSSIBLE — DESIGN WHAT'S NEXT — CODE WHAT'S POSSIBLE —&nbsp;
          </span>
        </div>
      </div>
    </section>
  )
}
