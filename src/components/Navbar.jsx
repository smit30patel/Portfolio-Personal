import './Navbar.css';

const Navbar = () => {
    const links = [
        { path: '#home', label: 'Home' },
        { path: '#about', label: 'About' },
        { path: '#projects', label: 'Projects' },
        { path: '#contact', label: 'Contact' },
    ];

    return (
        <header className="navbar glass">
            <div className="container navbar-content">
                <a href="#home" className="logo">Portfolio.</a>
                <nav>
                    <ul className="nav-links">
                        {links.map((link) => (
                            <li key={link.path}>
                                <a href={link.path}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
