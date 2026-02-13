import { FiCode, FiLayout, FiServer, FiCpu, FiCloud, FiDatabase } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import AnimatedCard from '../components/AnimatedCard';
import './Skills.css';

const skillGroups = [
    {
        title: 'Languages',
        icon: <FiCode />,
        items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Java', 'C++', 'R'],
    },
    {
        title: 'Frontend',
        icon: <FiLayout />,
        items: ['React.js', 'Next.js', 'Angular.js', 'HTML', 'CSS', 'Tailwind', 'Redux'],
    },
    {
        title: 'Backend',
        icon: <FiServer />,
        items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JWT / OAuth', 'Maven', 'Gradle'],
    },
    {
        title: 'Data & ML',
        icon: <FiCpu />,
        items: ['PyTorch', 'Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Predictive Modeling', 'A/B Testing', 'Statistical Analysis'],
    },
    {
        title: 'Cloud & DevOps',
        icon: <FiCloud />,
        items: ['AWS (EC2, S3, RDS)', 'Azure', 'Docker', 'CI/CD', 'Kafka', 'Airflow', 'Git', 'Agile/Scrum'],
    },
    {
        title: 'Databases',
        icon: <FiDatabase />,
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake', 'Hadoop', 'Spark'],
    },
];

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <SectionHeading
                    title="Skills"
                    subtitle="Technologies I work with daily."
                />

                <div className="skills__grid">
                    {skillGroups.map((group, i) => (
                        <AnimatedCard key={group.title} delay={i * 0.08}>
                            <div className="skill-group__title">
                                <span className="skill-group__icon">{group.icon}</span>
                                {group.title}
                            </div>
                            <div className="skill-group__items">
                                {group.items.map(item => (
                                    <span key={item} className="skill-badge">{item}</span>
                                ))}
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
