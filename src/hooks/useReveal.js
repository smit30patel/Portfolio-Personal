import { useEffect } from 'react';

// Fades `.reveal` elements in as they scroll into view. Only static section
// wrappers use the class, so elements rendered later (e.g. filtered projects)
// never get stuck hidden.
export default function useReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal');

        if (!('IntersectionObserver' in window)) {
            elements.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Also reveal anything already scrolled past (restored scroll
                    // position, hot reload), so a section can't stay hidden above.
                    if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px' }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}
