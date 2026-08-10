import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { SectionBackgroundAccents } from '../components/BackgroundAccents';
import './Contact.css';

const EMAIL = 'smitpatel30071@gmail.com';
const PHONE = '+1 480-803-4141';

const SOCIALS = [
    {
        icon: '⌥',
        label: 'GitHub',
        sub: '@smit30patel',
        href: 'https://github.com/smit30patel',
        newTab: true
    },
    {
        icon: '◈',
        label: 'LinkedIn',
        sub: '/in/smit3062',
        href: 'https://www.linkedin.com/in/smit3062',
        newTab: true
    },
    {
        icon: '✦',
        label: 'Medium',
        sub: 'Occasional hobby writing',
        href: 'https://medium.com/@smitpatel30071',
        newTab: true
    },
    {
        icon: '◉',
        label: 'Substack',
        sub: 'Occasional hobby writing',
        href: 'https://substack.com/@originalsmit',
        newTab: true
    },
];

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    return (
        <section className="section section--alt" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
            <SectionBackgroundAccents variant="experience" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionHeading title="Get In Touch" eyebrow="Contact & Social" />

                <div className="contact__layout">

                    {/* Direct contact */}
                    <motion.div
                        className="contact__direct"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Email — copyable */}
                        <div className="contact__info-block">
                            <span className="contact__label">Email</span>
                            <div className="contact__email-row">
                                <span className="contact__email-text">{EMAIL}</span>
                                <button
                                    onClick={handleCopyEmail}
                                    className="sketch-btn contact__copy-btn"
                                    aria-label="Copy email"
                                    id="copy-email-btn"
                                >
                                    {copied ? '✓ Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="contact__info-block">
                            <span className="contact__label">Phone</span>
                            <a href="tel:+14808034141" className="contact__phone-text">{PHONE}</a>
                        </div>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        className="contact__socials"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <span className="contact__label">Find me online</span>
                        <div className="contact__social-grid">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.newTab ? '_blank' : undefined}
                                    rel={s.newTab ? 'noopener noreferrer' : undefined}
                                    className="contact__social-card"
                                    id={`social-${s.label.toLowerCase()}`}
                                >
                                    <span className="contact__social-icon">{s.icon}</span>
                                    <div>
                                        <span className="contact__social-label">{s.label}</span>
                                        <span className="contact__social-sub">{s.sub}</span>
                                    </div>
                                    <span className="contact__social-arrow">→</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
