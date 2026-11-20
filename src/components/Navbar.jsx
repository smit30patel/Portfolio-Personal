import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import './Navbar.css';

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = NAV_ITEMS.map(i => document.querySelector(i.href)).filter(Boolean);
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection('#' + entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    const links = NAV_ITEMS.map(item => (
        <a
            key={item.href}
            href={item.href}
            className={`nav__link${activeSection === item.href ? ' is-active' : ''}`}
            aria-current={activeSection === item.href ? 'true' : undefined}
            onClick={() => setMenuOpen(false)}
        >
            {item.label}
        </a>
    ));

    return (
        <header className={`nav${scrolled || menuOpen ? ' nav--raised' : ''}`}>
            <div className="container nav__inner">
                <a href="#top" className="nav__brand" onClick={() => setMenuOpen(false)}>
                    <Logo size={32} />
                    {profile.name}
                </a>

                <nav className="nav__links" aria-label="Main">{links}</nav>

                <div className="nav__actions">
                    <ThemeToggle />
                    <a
                        href={profile.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--sm"
                    >
                        Resume
                    </a>
                    <button
                        type="button"
                        className="icon-btn icon-btn--sm nav__menu-btn"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setMenuOpen(v => !v)}
                    >
                        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav id="mobile-menu" className="nav__mobile" aria-label="Mobile">
                    <div className="container">{links}</div>
                </nav>
            )}
        </header>
    );
}
