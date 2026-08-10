import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { SectionBackgroundAccents } from '../components/BackgroundAccents';
import './Skills.css';

export default function Skills({ data, activeRoleLabel }) {
    const skillGroups = data.skills || [];

    return (
        <section className="section" id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
            <SectionBackgroundAccents variant="skills" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionHeading title="Skills" eyebrow="Technical Expertise" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeRoleLabel}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="skills__grid"
                    >
                        {skillGroups.map((group) => (
                            <div key={group.category} className="skills__category-block">
                                <h3 className="skills__category-title">{group.category}</h3>

                                <ol className="skills__items-container">
                                    {group.skills.map((skill, idx) => (
                                        <li key={skill.name} className="skills__item">
                                            <span className="skills__item-number">{idx + 1}.</span>
                                            <span className="skills__item-name">{skill.name}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="sketch-divider" />
        </section>
    );
}
