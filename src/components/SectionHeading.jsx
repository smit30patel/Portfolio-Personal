import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, eyebrow }) {
    return (
        <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            style={{
                marginBottom: '2.75rem',
                textAlign: 'left',
                position: 'relative'
            }}
        >
            {eyebrow && (
                <span className="eyebrow">{eyebrow}</span>
            )}
            <h2
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--fs-4xl)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    display: 'block',
                }}
            >
                {title}
            </h2>

            {/* Thin sage accent rule */}
            <div style={{
                width: '40px',
                height: '3px',
                backgroundColor: 'var(--accent)',
                borderRadius: '2px',
                marginTop: '0.75rem'
            }} />

            {subtitle && (
                <p
                    style={{
                        color: 'var(--text-muted)',
                        fontSize: 'var(--fs-lg)',
                        marginTop: '0.85rem',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                        fontWeight: 400,
                    }}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
