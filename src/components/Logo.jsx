import { useId } from 'react';

// Same mark as public/favicon.svg: an "S" drawn as a three-node data
// pipeline (in → transform → out). useId keeps the gradient id unique.
export default function Logo({ size = 32 }) {
    const gradientId = useId();

    return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="logo">
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8F8CFF" />
                    <stop offset="0.55" stopColor="#F78FC4" />
                    <stop offset="1" stopColor="#FBBF24" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill="#0F1222" />
            <path
                className="logo__flow"
                d="M42 17H28a8.5 8.5 0 0 0 0 17h8a8.5 8.5 0 0 1 0 17H22"
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="46" cy="17" r="5" fill="#8F8CFF" />
            <circle cx="32" cy="34" r="4.5" fill="#0F1222" stroke="#F78FC4" strokeWidth="3" />
            <circle cx="18" cy="51" r="5" fill="#FBBF24" />
        </svg>
    );
}
