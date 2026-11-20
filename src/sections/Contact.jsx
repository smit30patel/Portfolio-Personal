import { useState } from 'react';
import {
    FiArrowUpRight, FiCheck, FiCopy, FiEdit3, FiFileText, FiGithub, FiLinkedin, FiMapPin, FiPhone,
} from 'react-icons/fi';
import { profile, writing } from '../data/portfolio';
import SectionHeader from '../components/SectionHeader';
import './Contact.css';

const LINKS = [
    { label: 'GitHub', handle: '@smit30patel', href: profile.github, icon: FiGithub },
    { label: 'LinkedIn', handle: '/in/smit3062', href: profile.linkedin, icon: FiLinkedin },
    { label: 'Resume', handle: 'PDF · 1 page', href: profile.resume, icon: FiFileText },
    ...writing.map((w) => ({ ...w, icon: FiEdit3 })),
];

export default function Contact() {
    const [copyState, setCopyState] = useState('idle');

    const handleCopyEmail = () => {
        navigator.clipboard
            .writeText(profile.email)
            .then(() => setCopyState('copied'))
            .catch(() => setCopyState('failed'))
            .finally(() => setTimeout(() => setCopyState('idle'), 2500));
    };

    const copyLabel = { idle: 'Copy email', copied: 'Copied', failed: 'Copy failed' }[copyState];

    return (
        <section className="section" id="contact">
            <div className="container reveal">
                <SectionHeader index="06" note="say hi!" title={<>Let’s <span className="em">talk</span></>} />

                <div className="contact">
                    <div className="contact__cta">
                        <p className="contact__lead">
                            I’m looking for full-time or internship software engineering roles focused on backend and AI.
                            Email is the fastest way to reach me.
                        </p>

                        <a href={`mailto:${profile.email}`} className="contact__email">
                            {profile.email}
                            <FiArrowUpRight aria-hidden="true" />
                        </a>

                        <div className="contact__actions">
                            <button type="button" onClick={handleCopyEmail} className="btn btn--sm">
                                {copyState === 'copied'
                                    ? <FiCheck aria-hidden="true" />
                                    : <FiCopy aria-hidden="true" />}
                                {copyLabel}
                            </button>
                            <span className="visually-hidden" aria-live="polite">
                                {copyState === 'copied' ? 'Email copied to clipboard' : ''}
                            </span>
                            <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="contact__meta">
                                <FiPhone aria-hidden="true" /> {profile.phone}
                            </a>
                            <span className="contact__meta">
                                <FiMapPin aria-hidden="true" /> {profile.location}
                            </span>
                        </div>
                    </div>

                    <ul className="contact__links">
                        {LINKS.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="contact__link">
                                    <link.icon aria-hidden="true" className="contact__link-icon" />
                                    <span className="contact__link-text">
                                        <span className="contact__link-label">{link.label}</span>
                                        <span className="contact__link-handle">{link.handle}</span>
                                    </span>
                                    <FiArrowUpRight aria-hidden="true" className="contact__link-arrow" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
