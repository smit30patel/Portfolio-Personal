import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { experience } from '../data/portfolio';
import SectionHeader from '../components/SectionHeader';
import { toneStyle } from '../utils/tones';
import './Experience.css';

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container reveal">
                <SectionHeader
                    index="02"
                    title={<>Where I’ve <span className="em">shipped</span></>}
                    lead="APIs, data models, and AI pipelines in production — at startups and for a nonprofit."
                />

                <ol className="timeline">
                    {experience.map((exp, i) => (
                        <li key={exp.company} className="timeline__item" style={toneStyle(i)}>
                            <span className={`timeline__marker${i === 0 ? ' is-current' : ''}`} aria-hidden="true" />

                            <article className="xp">
                                <header className="xp__head">
                                    <div>
                                        <h3 className="xp__role">{exp.role}</h3>
                                        <p className="xp__company">{exp.company}</p>
                                    </div>
                                    <p className="xp__meta">
                                        <span className="mono">{exp.period}</span>
                                        <span>{exp.location}</span>
                                    </p>
                                </header>

                                <ul className="xp__points">
                                    {exp.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>

                                <footer className="xp__foot">
                                    <ul className="chips" aria-label="Technologies">
                                        {exp.tags.map((tag) => (
                                            <li key={tag} className="chip">{tag}</li>
                                        ))}
                                    </ul>

                                    {(exp.live || exp.github) && (
                                        <div className="xp__links">
                                            {exp.live && (
                                                <a href={exp.live} target="_blank" rel="noopener noreferrer" className="btn btn--sm">
                                                    <FiExternalLink aria-hidden="true" /> Live site
                                                </a>
                                            )}
                                            {exp.github && (
                                                <a href={exp.github} target="_blank" rel="noopener noreferrer" className="btn btn--sm">
                                                    <FiGithub aria-hidden="true" /> Code
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </footer>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
