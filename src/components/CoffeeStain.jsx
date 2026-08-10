import React from 'react';

/**
 * Hand-tinted coffee ring vignette SVG generator
 * Provides subtle paper texture depth reminiscent of coffee cup rings on sketchbooks.
 */
export default function CoffeeStain({ top = '0%', right = '0%', size = 180, opacity = 0.2 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: top,
        right: right,
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: 'none',
        opacity: opacity,
        zIndex: 0,
        transform: 'rotate(15deg)'
      }}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        {/* Primary Outer Coffee Ring */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#8b5a2b"
          strokeWidth="6"
          strokeDasharray="25, 4, 45, 8, 80, 5"
          opacity="0.6"
          filter="blur(1px)"
        />
        {/* Inner Splatter & Gradients */}
        <circle
          cx="100"
          cy="100"
          r="83"
          fill="none"
          stroke="#704214"
          strokeWidth="2.5"
          strokeDasharray="120, 10, 30, 5"
          opacity="0.8"
        />
        <circle cx="140" cy="50" r="3.5" fill="#704214" opacity="0.4" />
        <circle cx="148" cy="58" r="2" fill="#704214" opacity="0.3" />
        <circle cx="55" cy="140" r="4" fill="#704214" opacity="0.3" />
        <circle cx="48" cy="148" r="2" fill="#704214" opacity="0.25" />
      </svg>
    </div>
  );
}
