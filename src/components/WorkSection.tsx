import React from 'react'
import { Project } from '../data/portfolioData'
import { Icon } from './Icons'

interface WorkSectionProps {
  projects: Project[]
}

const ProjectVisual: React.FC<{ type: Project['visualType']; title: string }> = ({
  type,
  title,
}) => {
  switch (type) {
    case 'neura':
      return (
        <div className="neura-art" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="neura-word">{title.toUpperCase()}</div>
          <div className="scan-line" />
        </div>
      )

    case 'form':
      return (
        <div className="form-art" aria-hidden="true">
          <div className="chrome-shape" />
          <span>FORM</span>
          <i>02</i>
        </div>
      )

    case 'synapse':
      return (
        <div className="synapse-art" aria-hidden="true">
          <div className="synapse-ring ring-one" />
          <div className="synapse-ring ring-two" />
          <div className="synapse-core" />
          <span className="synapse-label label-one">IDEATE</span>
          <span className="synapse-label label-two">SYNTHESIZE</span>
          <span className="synapse-label label-three">CREATE</span>
        </div>
      )

    default:
      return null
  }
}

export const WorkSection: React.FC<WorkSectionProps> = ({ projects }) => {
  return (
    <section className="work-section shell" id="work">
      <div className="section-heading">
        <span>01 / SELECTED WORK</span>
        <p>Experiments in systems, autonomous intelligence, and human possibility.</p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-visual">
              <ProjectVisual type={project.visualType} title={project.title} />
            </div>

            <div className="project-info">
              <span className="project-number">{project.number}</span>

              <div className="project-details">
                <span className="project-type">{project.type}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    className="project-link-btn"
                    href={project.liveUrl || '#'}
                    aria-label={`Explore ${project.title}`}
                    title={`Explore ${project.title}`}
                  >
                    <Icon name="arrow" size={20} />
                  </a>

                  {project.githubUrl && (
                    <a
                      className="project-link-btn"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} code on GitHub`}
                      title="Source code"
                    >
                      <Icon name="github" size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
