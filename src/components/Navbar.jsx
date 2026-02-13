import { useState, useEffect } from 'react';
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
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Track active section via IntersectionObserver
    useEffect(() => {
        const sections = NAV_ITEMS.map(i => document.querySelector(i.href)).filter(Boolean);
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection('#' + entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="navbar__inner">
                <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span>SP</span>
                </div>

                <div className={`navbar__links${mobileOpen ? ' open' : ''}`}>
                    {NAV_ITEMS.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`navbar__link${activeSection === item.href ? ' active' : ''}`}
                            onClick={e => handleClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <button
                    className={`navbar__toggle${mobileOpen ? ' open' : ''}`}
                    onClick={() => setMobileOpen(v => !v)}
                    aria-label="Toggle navigation"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
