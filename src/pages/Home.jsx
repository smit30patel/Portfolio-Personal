const Home = () => {
    return (
        <div className="container" style={{
            padding: '0 1.5rem',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="glass" style={{ padding: '4rem', maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    Crafting Digital <span style={{ color: 'var(--accent-color)' }}>Experiences</span> with Soul.
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', marginInline: 'auto', maxWidth: '600px' }}>
                    Hi, I'm a developer passionate about building premium web applications that feel alive.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="glass btn" style={{ color: 'white' }}>Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
