import { motion, AnimatePresence } from 'framer-motion';
import { HeroBackgroundShapes } from '../components/BackgroundAccents';
import './Hero.css';

export default function Hero({ selectedRole, onRoleChange, roles, data }) {
    const heroData = data.hero;

    // Fixed highlights shown regardless of role
    const highlights = [
        { value: "M.S.", label: "Data Science @ ASU" },
        { value: "3.5+", label: "GPA at ASU" },
        { value: "1", label: "Published Review" },
        { value: "2×", label: "Hackathon Winner" },
        { value: "3+", label: "Yrs Data Science & AI" },
    ];

    return (
        <section className="hero section" id="about-hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <HeroBackgroundShapes />
            <div className="container hero__container">
                <div className="hero__grid">

                    {/* Left Column: Profile Photo */}
                    <motion.div
                        className="hero__avatar-col"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="hero__photo-frame">
                            <img
                                src="/img/profile_pic_croped.png"
                                alt="Smit Patel"
                                className="hero__photo"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Bio & Role Filter */}
                    <motion.div
                        className="hero__content-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                    >
                        {/* Eyebrow */}
                        <span className="eyebrow">👋 Hello, I'm</span>

                        {/* Name */}
                        <h1 className="hero__name">Smit Patel</h1>

                        {/* Dynamic Role Title */}
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={selectedRole + '-role'}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2 }}
                                className="hero__role-title"
                            >
                                {heroData.roleTitle}
                                <span className="hero__role-sep"> — </span>
                                <span className="hero__tagline-inline">{heroData.tagline}</span>
                            </motion.p>
                        </AnimatePresence>

                        {/* Role Dropdown */}
                        <div className="hero__filter-card">
                            <label className="hero__filter-label" htmlFor="role-dropdown">
                                🔍 Viewing portfolio for:
                            </label>
                            <div className="hero__select-wrapper">
                                <select
                                    id="role-dropdown"
                                    value={selectedRole}
                                    onChange={(e) => onRoleChange(e.target.value)}
                                    className="sketch-select full-width"
                                >
                                    {roles.map((r) => (
                                        <option key={r.id} value={r.id}>
                                            {r.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Dynamic Bio */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedRole}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="hero__dynamic-bio"
                            >
                                <p>{heroData.bioParagraph}</p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Fixed Highlights */}
                        <div className="hero__highlights-grid">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="hero__highlight-item">
                                    <span className="hero__highlight-value">{item.value}</span>
                                    <span className="hero__highlight-label">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hero__actions">
                            <a href="#projects" className="sketch-btn sketch-btn--primary">
                                View Projects →
                            </a>
                            <a href="#contact" className="sketch-btn sketch-btn--white">
                                Get In Touch
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="sketch-divider" />
        </section>
    );
}
