import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import './Contact.css';

const links = [
    {
        label: 'Email',
        value: 'smitpatel30071@gmail.com',
        href: 'mailto:smitpatel30071@gmail.com',
        icon: <FiMail />,
    },
    {
        label: 'Phone',
        value: '480-803-4141',
        href: 'tel:+14808034141',
        icon: <FiPhone />,
    },
    {
        label: 'GitHub',
        value: 'smit30patel',
        href: 'https://github.com/smit30patel',
        icon: <FiGithub />,
    },
    {
        label: 'LinkedIn',
        value: 'smit3062',
        href: 'https://linkedin.com/in/smit3062',
        icon: <FiLinkedin />,
    },
];

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        // Add FormSubmit configurations
        data._subject = `New Feedback from ${data.user_name}`;
        data._template = "table";

        try {
            const response = await fetch("https://formsubmit.co/ajax/smitpatel30071@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.error("Form error:", error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Open to opportunities, collaborations, and conversations."
                />

                <div className="contact__content">
                    <div className="contact__grid">
                        {links.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="contact-link"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <div className="contact-link__icon">{link.icon}</div>
                                <div>
                                    <div className="contact-link__label">{link.label}</div>
                                    <div className="contact-link__value">{link.value}</div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.form
                        ref={form}
                        onSubmit={handleSubmit}
                        className="contact__form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3 className="contact__form-title">Send Me a Message</h3>

                        {/* Honeypot to prevent spam */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        {/* Disable Captcha for cleaner UI (optional) */}
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-group">
                            <label htmlFor="user_name">Name</label>
                            <input type="text" name="user_name" id="user_name" required placeholder="Your Name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required placeholder="your.email@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="5" required placeholder="Hello, I'd like to discuss..."></textarea>
                        </div>

                        <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : (
                                <>
                                    Send Message <FiSend />
                                </>
                            )}
                        </button>

                        {status === 'success' && <p className="form-status success">Message sent successfully!</p>}
                        {status === 'error' && <p className="form-status error">Failed to send. Please try again.</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
