import { FiAward, FiBookOpen } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import AnimatedCard from '../components/AnimatedCard';
import './Education.css';

const degrees = [
    {
        degree: 'M.S. Data Science, Analytics & Engineering',
        school: 'Arizona State University, Tempe, AZ',
        date: 'Aug 2024 – May 2026',
        gpa: '3.56 GPA',
        courses: 'Probabilities & Statistics, Data Driven Optimization, Data Processing, Big Data Analysis, Machine Learning, Data Science, Distributed Systems, Cloud Computing',
    },
    {
        degree: 'B.E. Information Technology',
        school: 'Gujarat Technological University, India',
        date: 'Jul 2019 – Jun 2023',
        gpa: '8.20 / 10 GPA',
        courses: 'Data Structures & Algorithms, Database Management Systems, Web Technologies, Artificial Intelligence',
    },
];

const certifications = [
    { name: 'Hewlett Packard Enterprise: Software Engineering Job Simulation — Forage', date: 'Jan 2026' },
    { name: 'Quantium: Data Analyst Job Simulation — Forage', date: 'Dec 2025' },
    { name: 'UofAlberta: Software Architect — Coursera', date: 'May 2022' },
    { name: 'IBM: Introduction to Data Engineering — Coursera', date: 'Jun 2022' },
    { name: 'IBM: Python for Data Science, AI & Development — Coursera', date: 'Jun 2022' },
];

const achievements = [
    { name: '2× Hackathon Winner (Opportunity Hacks, Sun Hacks)', date: '2025' },
    { name: 'Authored and published literature review on time series forecasting', date: 'Jul 2023' },
];

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <SectionHeading
                    title="Education"
                    subtitle="Academic foundation and credentials."
                />

                <div className="education__cards">
                    {degrees.map((d, i) => (
                        <AnimatedCard key={d.degree} delay={i * 0.1}>
                            <h3 className="edu-card__degree">{d.degree}</h3>
                            <p className="edu-card__school">{d.school}</p>
                            <div className="edu-card__meta">
                                <span>{d.date}</span>
                                <span className="edu-card__meta-divider" />
                                <span>{d.gpa}</span>
                            </div>
                            <p className="edu-card__courses">
                                <span className="edu-card__courses-label">Relevant Courses: </span>
                                {d.courses}
                            </p>
                        </AnimatedCard>
                    ))}
                </div>

                <div className="education__sub-grid">
                    <AnimatedCard delay={0.1}>
                        <div className="edu-sub__title">
                            <FiBookOpen className="edu-sub__icon" /> Certifications
                        </div>
                        <div className="edu-sub__list">
                            {certifications.map(c => (
                                <div key={c.name} className="edu-sub__item">
                                    {c.name}
                                    <span className="edu-sub__item-date">{c.date}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedCard>

                    <AnimatedCard delay={0.2}>
                        <div className="edu-sub__title">
                            <FiAward className="edu-sub__icon" /> Achievements
                        </div>
                        <div className="edu-sub__list">
                            {achievements.map(a => (
                                <div key={a.name} className="edu-sub__item">
                                    {a.name}
                                    <span className="edu-sub__item-date">{a.date}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedCard>
                </div>
            </div>
        </section>
    );
}
