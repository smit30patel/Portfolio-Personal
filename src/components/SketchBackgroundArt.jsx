import React from 'react';

// Import sketch background images from /img/ directory
import lighthouseImg from '/img/lighthouse-flower.jpeg';
import personBooksImg from '/img/person-with-books.jpeg';
import clocksImg from '/img/clocks-img.jpeg';
import lampTreeImg from '/img/lamp-hang-from-tree.jpeg';
import spartanHelmetImg from '/img/spartan-helmate.jpeg';
import spidermanImg from '/img/spiderman.jpeg';

const SKETCH_IMAGES = {
  lighthouse: lighthouseImg,
  personBooks: personBooksImg,
  clocks: clocksImg,
  lampTree: lampTreeImg,
  spartan: spartanHelmetImg,
  spiderman: spidermanImg,
};

/**
 * Component to position hand-drawn sketch artwork as visible background watermarks
 * matching the pencil technical drawing sketchbook theme on white paper.
 */
export default function SketchBackgroundArt({
  type = 'lighthouse',
  top = '10px',
  right,
  left,
  bottom,
  width = '280px',
  height = 'auto',
  opacity = 0.65, // Increased visibility as requested!
  rotate = '0deg',
}) {
  const imgSrc = SKETCH_IMAGES[type] || lighthouseImg;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top,
        right,
        left,
        bottom,
        width,
        height,
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
        transform: `rotate(${rotate})`,
        mixBlendMode: 'multiply',
        filter: 'contrast(1.25) grayscale(0.65) sepia(0.2)',
        transition: 'opacity 0.3s ease',
      }}
    >
      <img
        src={imgSrc}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '12px',
        }}
      />
    </div>
  );
}
