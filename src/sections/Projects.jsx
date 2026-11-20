import { useState } from 'react';
import { FiExternalLink, FiGithub, FiPlay } from 'react-icons/fi';
import { projects, projectFilters } from '../data/portfolio';
import SectionHeader from '../components/SectionHeader';
import { toneStyle } from '../utils/tones';
import './Projects.css';

const DETAIL_ROWS = [
    ['built', 'Built'],
    ['insight', 'Key insight'],
    ['decision', 'Key decision'],
    ['deployment', 'Deployment'],
];

function ProjectLinks({ project }) {
    return (
        <div className="project-links">
            {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                    <FiExternalLink aria-hidden="true" /> Live
                </a>
            )}
            {project.video && (
                <a href={project.video} target="_blank" rel="noopener noreferrer" className="btn btn--sm">
                    <FiPlay aria-hidden="true" /> Demo
                </a>
            )}
            {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--sm">
                    <FiGithub aria-hidden="true" /> Code
                </a>
            )}
        </div>
    );
}

function Chips({ items }) {
    if (!items?.length) return null;
    return (
        <ul className="chips" aria-label="Stack">
            {items.map((item) => (
                <li key={item} className="chip">{item}</li>
            ))}
        </ul>
    );
}

function CaseStudy({ project, index }) {
    return (
        <article className="case" style={toneStyle(index)}>
            <div className="case__aside">
                <p className="case__context mono">{project.context}</p>
                <h3 className="case__title">{project.title}</h3>
                <p className="case__problem">{project.problem}</p>
                <Chips items={project.stack} />
                <ProjectLinks project={project} />
            </div>

            <dl className="case__details">
                {DETAIL_ROWS.filter(([key]) => project[key]).map(([key, label]) => (
                    <div key={key} className={`case__row${key === 'insight' ? ' case__row--insight' : ''}`}>
                        <dt className="mono">{label}</dt>
                        <dd>{project[key]}</dd>
                    </div>
                ))}
            </dl>
        </article>
    );
}

function ProjectCard({ project, index }) {
    return (
        <article className="card" style={toneStyle(index)}>
            <header className="card__head">
                <h4 className="card__title">{project.title}</h4>
                {project.date && <span className="card__date mono">{project.date}</span>}
            </header>
            <p className="card__summary">{project.summary}</p>
            <footer className="card__foot">
                <Chips items={project.tags} />
                <ProjectLinks project={project} />
            </footer>
        </article>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const matches = (p) => filter === 'All' || p.categories.includes(filter);
    const countFor = (f) => (f === 'All' ? projects.length : projects.filter((p) => p.categories.includes(f)).length);

    const featured = projects.filter((p) => p.featured && matches(p));
    const rest = projects.filter((p) => !p.featured && matches(p));

    return (
        <section className="section" id="projects">
            <div className="container reveal">
                <SectionHeader
                    index="03"
                    note="pick a filter ↓"
                    title={<>Things I’ve <span className="em">built</span></>}
                    lead="Case studies first, then everything else I’ve built. Filter by focus area."
                />

                <div className="filters" role="group" aria-label="Filter projects by area">
                    {projectFilters.map((f) => (
                        <button
                            key={f}
                            type="button"
                            className="filter"
                            aria-pressed={filter === f}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                            <span className="filter__count mono">{countFor(f)}</span>
                        </button>
                    ))}
                </div>

                <p className="visually-hidden" aria-live="polite">
                    Showing {featured.length + rest.length} projects
                </p>

                {featured.length > 0 && (
                    <div className="cases">
                        {featured.map((project, i) => (
                            <CaseStudy key={project.id} project={project} index={i} />
                        ))}
                    </div>
                )}

                {rest.length > 0 && (
                    <>
                        <h3 className="projects__subhead">
                            More projects <span className="mono">({rest.length})</span>
                        </h3>
                        <div className="cards">
                            {rest.map((project, i) => (
                                <ProjectCard key={project.id} project={project} index={i + 2} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
