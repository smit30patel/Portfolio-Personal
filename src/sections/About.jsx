import { FiArrowRight, FiCompass, FiMapPin, FiTool, FiUser, FiZap } from 'react-icons/fi';
import { profile, about, howIBuild } from '../data/portfolio';
import SectionHeader from '../components/SectionHeader';
import { toneStyle } from '../utils/tones';
import './About.css';

function Portrait() {
    return (
        <figure className="about__portrait">
            <div className="avatar">
                <img
                    src={profile.portrait}
                    alt={`Photo of ${profile.name}`}
                    className="avatar__img"
                    width="520"
                    height="520"
                    loading="lazy"
                />
            </div>
            <figcaption>
                <span className="avatar__hint script">that’s me!</span>
                <span className="avatar__location">
                    <FiMapPin aria-hidden="true" /> {profile.location}
                </span>
            </figcaption>
        </figure>
    );
}

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container reveal">
                <SectionHeader index="01" note="nice to meet you" title={<>A bit <span className="em">about me</span></>} />

                <div className="about">
                    <Portrait />

                    <div className="about__cards">
                        <article className="about__card about__card--wide" style={toneStyle(0)}>
                            <h3 className="about__label script"><FiUser aria-hidden="true" /> who I am</h3>
                            <p>{about.whoIAm}</p>
                        </article>

                        <article className="about__card about__card--wide" style={toneStyle(1)}>
                            <h3 className="about__label script"><FiZap aria-hidden="true" /> what I bring</h3>
                            <ul className="about__list about__list--cols">
                                {about.bring.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="about__card" style={toneStyle(2)}>
                            <h3 className="about__label script"><FiCompass aria-hidden="true" /> what I’m looking for</h3>
                            <p>{about.lookingFor}</p>
                            <a href="#contact" className="about__cta">
                                Let’s talk <FiArrowRight aria-hidden="true" />
                            </a>
                        </article>

                        <article className="about__card" style={toneStyle(3)}>
                            <h3 className="about__label script"><FiTool aria-hidden="true" /> how I work</h3>
                            <p>{howIBuild}</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
