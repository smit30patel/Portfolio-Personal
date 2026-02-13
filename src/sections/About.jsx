import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import './About.css';

const stats = [
    { number: '2×', label: 'Hackathon Winner' },
    { number: '1', label: 'Published Paper' },
    { number: 'MS', label: 'Graduating 2026' },
    { number: '3.5+', label: 'GPA at ASU' },
];

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <SectionHeading
                    title="About Me"
                    subtitle="Engineer by craft, scientist by curiosity."
                />

                <div className="about__grid">
                    <motion.div
                        className="about__image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about__image-wrapper">
                            <img src="/images/profile.png" alt="Smit Patel" className="about__image" />
                        </div>
                    </motion.div>

                    <div className="about__content">
                        <motion.div
                            className="about__narrative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p>
                                I'm a graduate student at <strong>Arizona State University</strong> pursuing an M.S. in
                                Data Science, Analytics & Engineering, graduating May 2026. My foundation in Information
                                Technology from Gujarat Technological University gives me a <strong>full-stack engineering
                                    perspective</strong>, while my graduate work deepens my expertise in statistical modeling,
                                machine learning, and scalable data pipelines.
                            </p>
                            <p>
                                I gravitate toward problems at the intersection of <strong>software engineering</strong> and{' '}
                                <strong>data science</strong> to build production-grade applications that are powered by
                                intelligent models underneath. Whether it's architecting a serverless CMS for a nonprofit
                                or designing ML pipelines that evaluate exercise form from video, I care about writing
                                <strong> reliable, testable code</strong> that serves real users.
                            </p>
                            <p>
                                Outside of code, I've <strong>authored a published literature review</strong> on time
                                series forecasting and won <strong>two hackathons</strong> (not by working alone, but by
                                collaborating effectively in high-pressure Agile environments.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about__stats"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="about__stat-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                                >
                                    <div className="about__stat-number">{stat.number}</div>
                                    <div className="about__stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
