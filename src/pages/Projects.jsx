const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A modern shopping experience built with React and Node.js. Features include real-time inventory and secure payments.',
            tags: ['React', 'Node.js', 'Stripe']
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Clean and intuitive productivity tool. utilizing local storage and drag-and-drop interfaces.',
            tags: ['Vue.js', 'Firebase', 'Tailwind']
        },
        {
            id: 3,
            title: 'Portfolio v1',
            description: 'My previous portfolio website showcasing early work and design evolution.',
            tags: ['HTML/CSS', 'JavaScript']
        }
    ];

    return (
        <div className="container" style={{ padding: '6rem 1.5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Featured <span style={{ color: 'var(--accent-color)' }}>Work</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map(project => (
                    <div key={project.id} className="glass" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
                        <div style={{
                            height: '180px',
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{ fontSize: '0.8rem', opacity: 0.7 }}>#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
