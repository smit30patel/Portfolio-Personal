import SectionHeading from '../components/SectionHeading';
import { SectionBackgroundAccents } from '../components/BackgroundAccents';
import './Experience.css';

// Single canonical experience — same across all roles, only descriptions differ per role
const EXPERIENCE = [
    {
        period: "Apr 2026 – Present",
        role: "Software Developer Intern",
        company: "99 Yards",
        location: "New York City, NY (Remote)",
        descriptions: {
            data_scientist: [
                "Created backend services and REST APIs using Java, Spring Boot, and TypeScript supporting AI-powered discovery experiences for 100+ brands and suppliers.",
                "Improved API performance by 30% through backend optimization, making high-traffic services faster and more reliable.",
                "Contributed to recommendation system pipelines, analytics workflows, and data discovery features used across the product."
            ],
            full_stack: [
                "Built backend microservices and REST APIs in Java, Spring Boot, and TypeScript supporting AI-powered application experiences for 100+ brands.",
                "Improved API response time by 30% through performance tuning, load optimization, and query refactoring.",
                "Partnered with product managers and designers to ship full-stack features across discovery and search experiences."
            ],
        },
        tags: ["Java", "Spring Boot", "TypeScript", "REST APIs", "Analytics"]
    },
    {
        period: "Oct 2025 – May 2026",
        role: "Founding Engineer",
        company: "Opportunity Hacks × NMTSA",
        location: "Phoenix, AZ — 1st Place Winner",
        descriptions: {
            data_scientist: [
                "Took 1st Place by architecting a custom CMS built from the ground up, solving a multi-year technical roadblock for the organization.",
                "Translated complex stakeholder requirements into a scalable platform architecture enabling non-technical staff to manage patient-facing content independently.",
                "Led end-to-end product delivery from system design to cloud production deployment over an 8-month engagement."
            ],
            full_stack: [
                "Won 1st Place by designing and shipping a full-stack custom CMS that replaced a legacy system causing years of bottlenecks.",
                "Architected scalable backend with cloud storage (AWS S3), admin dashboard, and form management for daily non-profit operations.",
                "Led system design, cloud deployment, and cross-functional delivery from initial hackathon prototype to final production release."
            ],
        },
        tags: ["Next.js", "TypeScript", "AWS S3", "System Architecture", "CMS"]
    },
    {
        period: "Jan 2023 – May 2023",
        role: "Full Stack Intern",
        company: "Arth Info Soft Pvt. Ltd",
        location: "Ahmedabad, India",
        descriptions: {
            data_scientist: [
                "Built full-stack applications using Python, Node.js, and PostgreSQL supporting platforms with over 10,000 monthly users.",
                "Developed reproducible data workflows processing transaction logs, improving backend query throughput and data pipeline reliability.",
                "Deployed containerized services with Docker, supporting scalable cloud infrastructure for production data systems."
            ],
            full_stack: [
                "Built and deployed full-stack applications using Python, Node.js, and PostgreSQL serving 10,000+ monthly users.",
                "Optimized backend services and database queries, significantly improving application response time and stability.",
                "Containerized applications with Docker and integrated cloud deployment pipelines for reliable production delivery."
            ],
        },
        tags: ["Python", "Node.js", "PostgreSQL", "Docker", "Data Pipelines"]
    }
];

export default function Experience({ activeRoleLabel }) {
    const roleKeyMap = {
        'DATA SCIENTIST': 'data_scientist',
        'SOFTWARE ENGINEER': 'full_stack',
    };
    const roleKey = roleKeyMap[activeRoleLabel] || 'data_scientist';

    return (
        <section className="section section--alt" id="experience" style={{ position: 'relative', overflow: 'hidden' }}>
            <SectionBackgroundAccents variant="experience" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionHeading title="Experience" eyebrow="Work History" />

                <div className="experience__timeline">
                    <div className="experience__timeline-line" />

                    <div className="experience__items-wrapper">
                        {EXPERIENCE.map((exp, index) => {
                            const bullets = exp.descriptions[roleKey] || exp.descriptions.data_scientist;
                            return (
                                <div
                                    key={exp.role + index}
                                    className="experience__item"
                                >
                                    {/* Timeline Node */}
                                    <div className="experience__node-ring">
                                        <span className="experience__node-dot" />
                                    </div>

                                    {/* Entry */}
                                    <div className="experience__entry">
                                        <div className="experience__entry-header">
                                            <div>
                                                <span className="experience__period">{exp.period}</span>
                                                <h3 className="experience__title">{exp.role}</h3>
                                                <p className="experience__company">
                                                    {exp.company} <span className="experience__location">— {exp.location}</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bullet list */}
                                        <ul className="experience__bullet-list">
                                            {bullets.map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>

                                        {/* Tags */}
                                        <div className="experience__tags">
                                            {exp.tags.map((tag) => (
                                                <span key={tag} className="sketch-pill">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="sketch-divider" />
        </section>
    );
}
