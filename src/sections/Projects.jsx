import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { SectionBackgroundAccents } from '../components/BackgroundAccents';
import './Projects.css';

export default function Projects({ data, activeRoleLabel }) {
    const projects = data.projects || [];

    return (
        <section className="section section--alt" id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
            <SectionBackgroundAccents variant="projects" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionHeading title="Projects" eyebrow="Selected Work" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeRoleLabel}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="projects__grid"
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-card__content">
                                    <div className="project-card__header-meta">
                                        {project.date && <span>{project.date}</span>}
                                        {project.org && <span className="project-card__org">📍 {project.org}</span>}
                                    </div>

                                    <h3 className="project-card__title">{project.title}</h3>

                                    <ul className="project-card__desc-list">
                                        {project.descPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>

                                    <div className="project-card__tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="sketch-pill">{tag}</span>
                                        ))}
                                    </div>

                                    {/* Action Links */}
                                    <div className="project-card__actions">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sketch-btn"
                                            >
                                                ↗ Code
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sketch-btn sketch-btn--primary"
                                            >
                                                ↗ Live Site
                                            </a>
                                        )}
                                        {project.video && (
                                            <a
                                                href={project.video}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sketch-btn"
                                            >
                                                ▶ Demo
                                            </a>
                                        )}
                                        {project.paper && (
                                            <a
                                                href={project.paper}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sketch-btn"
                                            >
                                                ↗ Architecture
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="sketch-divider" />
        </section>
    );
}
