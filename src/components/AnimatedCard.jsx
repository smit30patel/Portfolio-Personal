import { motion } from 'framer-motion';

export default function AnimatedCard({ children, className = '', delay = 0 }) {
    return (
        <motion.div
            className={`animated-card ${className}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{
                y: -4,
                transition: { duration: 0.25 },
            }}
            style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                transition: 'border-color var(--transition-base), box-shadow var(--transition-base)',
                cursor: 'default',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.boxShadow = '0 8px 32px var(--accent-glow)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {children}
        </motion.div>
    );
}
