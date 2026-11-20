// Rotating text colors. Components set `--tone` on an element and CSS reads
// `var(--tone)`, so each card/section gets its own color from one palette.
const TONES = ['--c-teal', '--c-violet', '--c-amber', '--c-rose', '--c-sky'];

export const toneStyle = (index) => ({ '--tone': `var(${TONES[index % TONES.length]})` });
