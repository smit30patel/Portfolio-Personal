import SectionHeading from '../components/SectionHeading';
import AnimatedCard from '../components/AnimatedCard';
import './Experience.css';

const experience = {
    title: 'Full Stack Intern',
    company: 'Arth InfoSoft Pvt. Ltd — Ahmedabad, India',
    date: 'Jan 2023 – May 2023',
    bullets: [
        'Developed and maintained full-stack features for production applications, collaborating within an Agile team to deliver reliable, scalable solutions.',
        'Designed RESTful APIs with authentication, validation, and security best practices to ensure data integrity.',
        'Built reproducible data pipelines using Python and SQL, processing datasets with 100K+ rows and improving data processing efficiency by ~30%.',
        'Automated ETL workflows and data QA checks using Airflow, Kafka, and Docker, reducing processing time by ~40%.',
        'Optimized database queries and backend workflows, reducing API response times by 10%.',
        'Containerized services with Docker and supported CI/CD pipelines for staging and production deployments.',
    ],
    tags: ['Python', 'SQL', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Airflow', 'Kafka', 'REST APIs', 'CI/CD'],
};

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHeading
                    title="Experience"
                    subtitle="Where I've put theory into practice."
                />

                <AnimatedCard>
                    <div className="experience__card">
                        <div className="experience__content">
                            <div className="experience__header">
                                <h3 className="experience__title">{experience.title}</h3>
                                <span className="experience__date">{experience.date}</span>
                            </div>
                            <p className="experience__company">{experience.company}</p>
                            <div className="experience__bullets">
                                {experience.bullets.map((bullet, i) => (
                                    <p key={i} className="experience__bullet">{bullet}</p>
                                ))}
                            </div>
                            <div className="experience__tags">
                                {experience.tags.map(tag => (
                                    <span key={tag} className="experience__tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="experience__image-wrapper">
                            <img
                                src="/images/talking_to_people.png"
                                alt="Collaborating with team"
                                className="experience__image"
                            />
                        </div>
                    </div>
                </AnimatedCard>
            </div>
        </section>
    );
}
