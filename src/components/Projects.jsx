import React, { useState } from 'react'
import { projects} from '../data/projects'

export default function Projects() {
  const [fullscreenImage, setFullscreenImage] = useState(null)
  return (
    <section id="projects" className="Section">
      <div className="container">
        <h2 className="Section_title">Projects</h2>
        <p className="Section_lead">
          A few highlights of projects I’ve built recently.
        </p>

        <div className="Projects_grid">
          {projects.map((project) => (
            <article key={project.id} className="ProjectCard">
              <div className="ProjectCard_body">
                <h3 className="ProjectCard_title">{project.title}</h3>
                <p className="ProjectCard_description">{project.description}</p>
                <div className="ProjectCard_tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="Tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="ProjectCard_actions">
                {/* {project.liveUrl && (
                  <a
                    className="Button tertiary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )} */}
                {project.repoUrl && (
                  <a
                    className="Button tertiary"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}

                <div className='Pictures'>
                  {project.pictures?.map((picture, index) => (
                    <img
                      key={index}
                      src={picture}
                      alt={`${project.title} ${index + 1}`}
                      className="ProjectCard_image"
                      onClick={() => setFullscreenImage(picture)}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {fullscreenImage && (
        <div className="Fullscreen_overlay" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen view" className="Fullscreen_image" />
          <button className="Fullscreen_close" onClick={() => setFullscreenImage(null)}>✕</button>
        </div>
      )}
    </section>
  )
}
