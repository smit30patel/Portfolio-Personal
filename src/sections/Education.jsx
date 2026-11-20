import { FiBookOpen } from 'react-icons/fi';
import { education, publications } from '../data/portfolio';
import SectionHeader from '../components/SectionHeader';
import { toneStyle } from '../utils/tones';
import './Education.css';

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container reveal">
                <SectionHeader index="05" title={<>Where I <span className="em">studied</span></>} />

                <div className="edu">
                    {education.map((edu, i) => (
                        <article key={edu.degree} className="edu__card" style={toneStyle(i + 1)}>
                            <div className="edu__top">
                                <span className="mono">{edu.period}</span>
                                <span className="mono">GPA {edu.gpa}</span>
                            </div>
                            <h3 className="edu__degree">{edu.degree}</h3>
                            <p className="edu__school">{edu.school}</p>
                            {edu.detail && <p className="edu__detail">{edu.detail}</p>}
                            <p className="edu__location">{edu.location}</p>
                        </article>
                    ))}
                </div>

                {publications.map((pub) => (
                    <article key={pub.title} className="pub" style={toneStyle(3)}>
                        <span className="pub__icon" aria-hidden="true"><FiBookOpen /></span>
                        <div>
                            <p className="pub__label mono">Publication · {pub.date}</p>
                            <h3 className="pub__title">{pub.title}</h3>
                            <p className="pub__venue">{pub.venue}</p>
                            <p className="pub__summary">{pub.summary}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
