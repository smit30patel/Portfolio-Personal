/* ───────────────────────────────────────────────
   Background Technical & Geometric Vector Accents
   Editorial aesthetic inspired by modern designer portfolios
   ─────────────────────────────────────────────── */

export function HeroBackgroundShapes() {
  return (
    <div className="hero-bg-shapes" aria-hidden="true">
      {/* Large soft circular background blob (like reference photo) */}
      <div className="hero-bg-circle-backdrop" />

      {/* Floating ambient glow orbs */}
      <div className="bg-glow bg-glow--sage-1" />
      <div className="bg-glow bg-glow--warm-1" />

      {/* Editorial top-right technical breadcrumb & wireframe lines (matching reference photo) */}
      <div className="hero-tech-tag">
        <span className="hero-tech-text">DATA › ML › CODE › IMPACT</span>
        <svg className="hero-tech-cross" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1V15M1 8H15" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Geometric line paths & circuit / tech accents */}
      <svg className="hero-vector-lines" width="400" height="400" viewBox="0 0 400 400" fill="none">
        {/* Concentric subtle circles */}
        <circle cx="300" cy="120" r="180" stroke="rgba(93, 122, 93, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="300" cy="120" r="120" stroke="rgba(26, 26, 26, 0.05)" strokeWidth="1" />
        <circle cx="300" cy="120" r="60" stroke="rgba(93, 122, 93, 0.12)" strokeWidth="1" />

        {/* Tech connecting lines & nodes */}
        <path d="M 50 80 L 150 80 L 200 130 H 350" stroke="rgba(93, 122, 93, 0.12)" strokeWidth="1.2" fill="none" />
        <circle cx="150" cy="80" r="3" fill="var(--accent)" opacity="0.4" />
        <circle cx="200" cy="130" r="3" fill="var(--accent)" opacity="0.6" />

        {/* Corner crosses grid */}
        <path d="M 20 200 H 30 M 25 195 V 205" stroke="rgba(26, 26, 26, 0.15)" strokeWidth="1" />
        <path d="M 60 200 H 70 M 65 195 V 205" stroke="rgba(26, 26, 26, 0.15)" strokeWidth="1" />
        <path d="M 20 240 H 30 M 25 235 V 245" stroke="rgba(26, 26, 26, 0.15)" strokeWidth="1" />
        <path d="M 60 240 H 70 M 65 235 V 245" stroke="rgba(26, 26, 26, 0.15)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function SectionBackgroundAccents({ variant = "default" }) {
  if (variant === "experience") {
    return (
      <div className="section-bg-accents" aria-hidden="true">
        <div className="bg-glow bg-glow--sage-2" />
        <svg className="section-vector-right" width="260" height="260" viewBox="0 0 260 260" fill="none">
          <circle cx="200" cy="60" r="140" stroke="rgba(93, 122, 93, 0.07)" strokeWidth="1.5" />
          <circle cx="200" cy="60" r="90" stroke="rgba(93, 122, 93, 0.05)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 200 10 V 110 M 150 60 H 250" stroke="rgba(93, 122, 93, 0.1)" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (variant === "skills") {
    return (
      <div className="section-bg-accents" aria-hidden="true">
        <div className="bg-glow bg-glow--warm-2" />
        <svg className="section-vector-left" width="220" height="220" viewBox="0 0 220 220" fill="none">
          <rect x="20" y="20" width="140" height="140" rx="20" stroke="rgba(93, 122, 93, 0.06)" strokeWidth="1.5" transform="rotate(15 90 90)" />
          <circle cx="160" cy="160" r="40" stroke="rgba(26, 26, 26, 0.04)" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (variant === "projects") {
    return (
      <div className="section-bg-accents" aria-hidden="true">
        <div className="bg-glow bg-glow--sage-3" />
        <svg className="section-vector-right" width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M 50 50 L 250 250 M 250 50 L 50 250" stroke="rgba(93, 122, 93, 0.04)" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="150" cy="150" r="100" stroke="rgba(93, 122, 93, 0.07)" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  return (
    <div className="section-bg-accents" aria-hidden="true">
      <div className="bg-glow bg-glow--warm-1" />
    </div>
  );
}
