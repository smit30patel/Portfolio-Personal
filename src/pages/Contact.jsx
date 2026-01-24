const Contact = () => {
    return (
        <div className="container" style={{ padding: '6rem 1.5rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass" style={{ padding: '3rem', maxWidth: '600px', width: '100%' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Get in <span style={{ color: 'var(--accent-color)' }}>Touch</span></h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                    Have a project in mind or just want to chat? Send me a message!
                </p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                        <input type="text" placeholder="John Doe" style={{
                            background: 'rgba(255,255,255,0.5)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            padding: '1rem',
                            color: 'var(--text-primary)',
                            outline: 'none',
                            fontFamily: 'inherit'
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                        <input type="email" placeholder="john@example.com" style={{
                            background: 'rgba(255,255,255,0.5)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            padding: '1rem',
                            color: 'var(--text-primary)',
                            outline: 'none',
                            fontFamily: 'inherit'
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                        <textarea rows="5" placeholder="Tell me about your project..." style={{
                            background: 'rgba(255,255,255,0.5)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            padding: '1rem',
                            color: 'var(--text-primary)',
                            outline: 'none',
                            fontFamily: 'inherit',
                            resize: 'vertical'
                        }}></textarea>
                    </div>

                    <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
