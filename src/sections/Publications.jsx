import SectionHeading from '../components/SectionHeading';
import { SectionBackgroundAccents } from '../components/BackgroundAccents';
import { publicationsData } from '../data/portfolioData';
import './Publications.css';

export default function Publications() {
    return (
        <section className="section" id="publications" style={{ position: 'relative', overflow: 'hidden' }}>
            <SectionBackgroundAccents variant="skills" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionHeading title="Publications & Research" eyebrow="Academic Work" />

                <div className="publications__grid">
                    {publicationsData.map((pub) => (
                        <div key={pub.title} className="pub-card">
                            <div className="pub-card__content">
                                <span className="pub-card__year">{pub.year}</span>
                                <h3 className="pub-card__title">{pub.title}</h3>
                                <p className="pub-card__authors">By {pub.authors}</p>
                                <p className="pub-card__journal">{pub.journal}</p>
                                <p className="pub-card__desc">{pub.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sketch-divider" />
        </section>
    );
}
