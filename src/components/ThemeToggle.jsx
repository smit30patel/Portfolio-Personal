import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function getTheme() {
    const chosen = document.documentElement.dataset.theme;
    if (chosen) return chosen;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(getTheme);
    const next = theme === 'dark' ? 'light' : 'dark';

    const toggle = () => {
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem('theme', next);
        } catch {
            // Storage can be unavailable (private mode); the toggle still works for this visit.
        }
        setTheme(next);
    };

    return (
        <button
            type="button"
            className="icon-btn icon-btn--sm"
            onClick={toggle}
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
        >
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
    );
}
