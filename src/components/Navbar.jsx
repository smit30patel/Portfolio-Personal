import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
    { label: 'About', href: '#about-hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar({ selectedRole, onRoleChange, roles }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
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
            { rootMargin: '-30% 0px -50% 0px' }
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
            <div className="container navbar__inner">
                {/* Logo */}
                <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Smit Patel
                </div>

                {/* Role Selector */}
                {roles && (
                    <div className="navbar__role-selector">
                        <span>Viewing as:</span>
                        <select
                            value={selectedRole}
                            onChange={(e) => onRoleChange(e.target.value)}
                            className="navbar__select"
                            id="navbar-role-select"
                        >
                            {roles.map((r) => (
                                <option key={r.id} value={r.id}>{r.title}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Navigation Links */}
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

                {/* Mobile Toggle */}
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
