import React from 'react'

interface TechStackProps {
  stack: string[]
}

export const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  // Duplicate array to achieve seamless infinite marquee loop
  const duplicatedStack = [...stack, ...stack]

  return (
    <section className="stack-section" aria-label="Technology stack">
      <div className="stack-intro shell">
        <span>TOOLS / TECHNOLOGIES</span>
        <p>Built fast. Engineered thoughtfully. Always exploring what's next.</p>
      </div>

      <div className="stack-marquee">
        <div className="stack-track">
          {duplicatedStack.map((tech, index) => {
            const displayIndex = String((index % stack.length) + 1).padStart(2, '0')
            return (
              <div
                className="stack-item"
                key={`${tech}-${index}`}
                aria-hidden={index >= stack.length}
              >
                <span>{displayIndex}</span>
                <strong>{tech}</strong>
                <i />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
