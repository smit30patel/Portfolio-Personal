import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero__content">
                    {/* Left Column: Typography */}
                    <motion.div
                        className="hero__text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero__title">
                            Designing Logic.<br />
                            <span className="gradient-text">Building Future.</span>
                        </h1>
                        <p className="hero__subtitle">
                            I am <strong>Smit Patel</strong> a Full Stack Engineer & Data Scientist transforming complex data into elegant software solutions.
                        </p>

                        <div className="hero__actions">
                            <a href="#projects" className="btn btn--primary">View Projects</a>
                            <a href="#about" className="btn btn--secondary">More About Me</a>
                        </div>

                        <div className="hero__status-pill">
                            <span className="pulsing-dot"></span>
                            Available for 2026 Opportunities
                        </div>
                    </motion.div>

                    {/* Right Column: Creative Visual (Code Card) */}
                    <motion.div
                        className="hero__visual"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="code-card">
                            <div className="code-card__header">
                                <span className="code-card__dot red"></span>
                                <span className="code-card__dot yellow"></span>
                                <span className="code-card__dot green"></span>
                                <span className="code-card__title">smit_patel.js</span>
                            </div>
                            <div className="code-card__body">
                                <pre>
                                    <code>
                                        <span className="k">const</span> <span className="v">engineer</span> <span class="o">=</span> <span class="p">{'{'}</span>
                                        <span className="k">name</span>: <span className="s">'Smit Patel'</span>,
                                        <span className="k">education</span>: <span className="s">'MS @ ASU'</span>,
                                        <span className="k">focus</span>: [
                                        <span className="s">'Software Engineering'</span>,
                                        <span className="s">'Data Science'</span>,
                                        <span className="s">'Cloud Architecture'</span>
                                        ],
                                        <span className="k">status</span>: <span className="s">'Building cool things'</span>
                                        <span class="p">{'}'}</span>;
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
