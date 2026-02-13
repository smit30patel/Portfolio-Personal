import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }) {
    return (
        <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            style={{
                marginBottom: 'var(--space-3xl)',
            }}
        >
            <h2
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--fs-4xl)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.2,
                }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'var(--fs-lg)',
                        marginTop: 'var(--space-sm)',
                        maxWidth: '600px',
                    }}
                >
                    {subtitle}
                </p>
            )}

        </motion.div>
    );
}
