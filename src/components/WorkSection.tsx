import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { Project } from '../data/portfolioData'
import { Icon } from './Icons'

interface WorkSectionProps {
  projects: Project[]
}

const ProjectVisual: React.FC<{
  type?: Project['visualType']
  title: string
  imageUrl?: string
}> = ({ type, title, imageUrl }) => {
  if (imageUrl) {
    return (
      <div className="project-image-wrapper">
        <img
          src={imageUrl}
          alt={title}
          className="project-image-img"
          loading="lazy"
        />
      </div>
    )
  }

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
  const [expandedProjects, setExpandedProjects] = React.useState<Record<string, boolean>>({})

  const toggleExpand = (title: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <section className="work-section shell" id="work">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>01 / PROJECTS</span>
        <p>Experiments in systems, autonomous intelligence, and human possibility.</p>
      </motion.div>

      <div className="project-list">
        {projects.map((project, index) => {
          const isExpanded = Boolean(expandedProjects[project.title])
          const isRev = index % 2 === 1

          return (
            <article
              className={`project ${isRev ? 'project--rev' : ''}`}
              key={project.title}
            >
              <motion.div
                className="project-visual"
                initial={{ opacity: 0, x: isRev ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectVisual
                  type={project.visualType}
                  title={project.title}
                  imageUrl={project.imageUrl}
                />
              </motion.div>

              <motion.div
                className="project-info"
                initial={{ opacity: 0, x: isRev ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <span className="project-number">{project.number}</span>

                <div className="project-details">
                  <div className="project-meta-row">
                    <span className="project-type">{project.type}</span>
                    {project.timeline && (
                      <span className="project-timeline">
                        <span className="timeline-dot" aria-hidden="true" />
                        {project.timeline}
                      </span>
                    )}
                    {project.status && (
                      <span className="project-status-pill">{project.status}</span>
                    )}
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>

                  {project.extendedDescription && project.extendedDescription.length > 0 && (
                    <div className="project-read-more-wrap">
                      <button
                        type="button"
                        className={`project-read-more-btn ${isExpanded ? 'active' : ''}`}
                        onClick={() => toggleExpand(project.title)}
                        aria-expanded={isExpanded}
                      >
                        <span className="read-more-icon">
                          <Icon name={isExpanded ? 'close' : 'plus'} size={11} />
                        </span>
                        <span>{isExpanded ? 'READ LESS' : 'READ MORE DETAILS'}</span>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            className="project-extended-desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <ul>
                              {project.extendedDescription.map((item, idx) => (
                                <li key={idx}>
                                  <span className="bullet-dash" aria-hidden="true">/</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      className="project-link-btn"
                      href={project.liveUrl || '#'}
                      target={project.liveUrl?.startsWith('http') ? '_blank' : undefined}
                      rel={project.liveUrl?.startsWith('http') ? 'noreferrer' : undefined}
                      aria-label={
                        project.liveUrl?.includes('linkedin')
                          ? `Watch ${project.title} video demo on LinkedIn`
                          : `Visit live ${project.title}`
                      }
                      title={
                        project.liveUrl?.includes('linkedin')
                          ? 'Watch video demo on LinkedIn'
                          : project.liveUrl?.includes('t.me')
                          ? 'Launch Telegram Bot (@my_channel_vigil_bot)'
                          : project.liveUrl?.startsWith('http')
                          ? 'Visit live app'
                          : `Explore ${project.title}`
                      }
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
              </motion.div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
