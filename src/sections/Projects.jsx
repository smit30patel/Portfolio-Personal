import SectionHeading from '../components/SectionHeading';
import AnimatedCard from '../components/AnimatedCard';
import './Projects.css';

const projects = [
    {
        title: 'AI-Powered Exercise Form Evaluation',
        org: 'ASU Capstone',
        type: 'Machine Learning',
        date: 'Jan 2026 – Present',
        accent: 'linear-gradient(135deg, #6366f1, #a855f7)',
        desc: 'End-to-end multimodal ML pipeline for a mobile exercise analysis app. Applied Vision-Language Models (VLMs) and Action Quality Assessment methods to evaluate exercise form from video. Built motion tracking and rhythm-based center-of-mass analytics with real-time interpretable feedback for end users.',
        tags: ['Python', 'PyTorch', 'VLMs', 'Computer Vision', 'Data Pipelines', 'YouTube Scraping'],
    },
    {
        title: 'NMTSA Website',
        org: 'Opportunity Hacks — Nonprofit',
        type: 'Full Stack',
        date: 'Oct 2025 – Present',
        accent: 'linear-gradient(135deg, #34d399, #06b6d4)',
        desc: 'Production-grade serverless full-stack web application for a neurologic music therapy organization. Custom headless CMS with AWS DynamoDB and S3, admin dashboard with role-based access control, and multilingual content management for non-technical staff.',
        tags: ['Next.js 14', 'TypeScript', 'AWS DynamoDB', 'S3', 'Serverless', 'RBAC'],
    },
    {
        title: 'Retail Store Optimization Analysis',
        org: 'Quantium',
        type: 'Data Analysis',
        date: 'Nov 2025 – Dec 2025',
        accent: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        desc: 'Developed standardized performance indicators from 10,000+ transaction-level records. Designed a quasi-experimental A/B analysis comparing intervention stores against control locations, identifying a 5–8% improvement. Created reproducible visualizations that informed executive recommendations.',
        tags: ['Python', 'A/B Testing', 'Statistical Analysis', 'Data Visualization', 'Pandas'],
    },
    {
        title: 'AI Doctor Chatbot',
        org: 'Personal Project',
        type: 'Mobile App / AI',
        date: '2024',
        accent: 'linear-gradient(135deg, #3b82f6, #10b981)',
        desc: 'An AI-powered virtual assistant designed to provide medical information and guidance. Integrated BioBERT for biomedical text mining and question answering within a Flutter mobile application.',
        tags: ['Flutter', 'Firebase', 'Python', 'BioBERT', 'NLP'],
    },
    {
        title: 'SONA Space (Spark-AI)',
        org: 'Spark AI',
        type: 'Full Stack / AI',
        date: '2025',
        accent: 'linear-gradient(135deg, #f472b6, #9333ea)',
        desc: 'An AI-powered emotional wellness platform for adults with autism. Features real-time voice conversations, emotion analysis, and behavioral insights using Hume AI and OpenAI within a Next.js application.',
        tags: ['Next.js 16', 'TypeScript', 'Supabase', 'Hume AI', 'OpenAI'],
    },
    {
        title: 'Customer Churn Analysis',
        org: 'Data Science Project',
        type: 'Data Analysis',
        date: '2024',
        accent: 'linear-gradient(135deg, #f97316, #db2777)',
        desc: 'End-to-end data pipeline analyzing customer behavior to identify churn risks. Implemented RFM segmentation and machine learning models to predict at-risk customers and visualize insights via Power BI.',
        tags: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'RFM Analysis'],
    },
    {
        title: 'Wooden Wardrobe',
        org: 'WiCS Hackathon \'25',
        type: 'Full Stack',
        date: 'Feb 2025',
        accent: 'linear-gradient(135deg, #d97706, #78350f)',
        desc: 'A wardrobe management application helping users organize clothing and generate outfit recommendations. Features smart color detection, weather-based suggestions, and a wooden-themed UI.',
        tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <SectionHeading
                    title="Projects"
                    subtitle="Selected work across engineering and data science."
                />

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <AnimatedCard key={project.title} delay={i * 0.1} className="project-card">
                            <div className="project-card__accent" style={{ background: project.accent }} />
                            <span className="project-card__type">{project.type}</span>
                            <h3 className="project-card__title">{project.title}</h3>
                            <p className="project-card__org">{project.org} · {project.date}</p>
                            <p className="project-card__desc">{project.desc}</p>
                            <div className="project-card__tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-card__tag">{tag}</span>
                                ))}
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
