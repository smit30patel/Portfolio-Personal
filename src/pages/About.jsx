const About = () => {
    const skills = [
        'React', 'JavaScript', 'CSS3', 'Node.js', 'Vite', 'Git', 'UI/UX Design'
    ];

    return (
        <div className="container" style={{ padding: '6rem 1.5rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass" style={{ padding: '3rem', maxWidth: '1000px', width: '100%' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>About <span style={{ color: 'var(--accent-color)' }}>Me</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            I am a creative developer who loves to bridge the gap between design and engineering. With a strong eye for detail and a passion for clean code, I build digital experiences that are not only functional but also beautiful and immersive.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            When I'm not coding, you can find me exploring new design trends, contributing to open source, or gaming.
                        </p>

                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>Key Skills</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {skills.map(skill => (
                                <span key={skill} style={{
                                    background: 'rgba(255,255,255,0.5)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '99px',
                                    fontSize: '0.9rem',
                                    color: 'var(--accent-color)',
                                    fontWeight: '500',
                                    border: '1px solid rgba(255,255,255,0.6)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        height: '300px',
                        background: 'rgba(255,255,255,0.3)',
                        borderRadius: '16px',
                        border: '2px dashed rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)'
                    }}>
                        [Profile Image Placeholder]
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
