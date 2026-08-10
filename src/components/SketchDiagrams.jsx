import React from 'react';

/**
 * Hand-drawn SVG Technical Diagrams for Project previews and Publications
 * Features wobbly sketch lines, node dots, arrows, and technical annotations.
 */

// 1. Neural Network / NLP Sketch
export function NeuralNetworkSketch() {
  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <rect x="5" y="5" width="310" height="190" fill="#faf8f2" stroke="#33332d" strokeWidth="1.8" rx="8" strokeDasharray="600" strokeDashoffset="0" />
      
      {/* Input Layer */}
      <g stroke="#33332d" strokeWidth="1.8" fill="#f6f4ee">
        <circle cx="50" cy="50" r="14" />
        <circle cx="50" cy="100" r="14" />
        <circle cx="50" cy="150" r="14" />
      </g>
      <text x="50" y="25" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">Input</text>

      {/* Hidden Layer 1 */}
      <g stroke="#33332d" strokeWidth="1.8" fill="#eef0eb">
        <circle cx="130" cy="35" r="13" />
        <circle cx="130" cy="75" r="13" />
        <circle cx="130" cy="120" r="13" />
        <circle cx="130" cy="160" r="13" />
      </g>
      <text x="130" y="16" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">VLM Hidden</text>

      {/* Hidden Layer 2 */}
      <g stroke="#33332d" strokeWidth="1.8" fill="#eef0eb">
        <circle cx="210" cy="45" r="13" />
        <circle cx="210" cy="100" r="13" />
        <circle cx="210" cy="155" r="13" />
      </g>

      {/* Output Layer */}
      <g stroke="#33332d" strokeWidth="2" fill="#2e7d32">
        <circle cx="280" cy="75" r="14" fill="#2e7d32" opacity="0.15" />
        <circle cx="280" cy="75" r="14" stroke="#2e7d32" fill="none" />
        <circle cx="280" cy="125" r="14" fill="#0277bd" opacity="0.15" />
        <circle cx="280" cy="125" r="14" stroke="#0277bd" fill="none" />
      </g>
      <text x="280" y="25" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">Score / AQA</text>

      {/* Wobbly Connection Lines */}
      <path d="M64 50 L117 35 M64 50 L117 75 M64 50 L117 120" stroke="#33332d" strokeWidth="1.2" opacity="0.75" fill="none" strokeDasharray="3,2" />
      <path d="M64 100 L117 35 M64 100 L117 75 M64 100 L117 120 M64 100 L117 160" stroke="#33332d" strokeWidth="1.2" opacity="0.75" fill="none" />
      <path d="M64 150 L117 75 M64 150 L117 120 M64 150 L117 160" stroke="#33332d" strokeWidth="1.2" opacity="0.75" fill="none" strokeDasharray="3,2" />

      <path d="M143 35 L197 45 M143 75 L197 100 M143 120 L197 100 M143 160 L197 155" stroke="#33332d" strokeWidth="1.2" opacity="0.75" fill="none" />
      <path d="M223 45 L266 75 M223 100 L266 75 M223 100 L266 125 M223 155 L266 125" stroke="#33332d" strokeWidth="1.4" opacity="0.85" fill="none" />

      {/* Annotation */}
      <path d="M150 182 Q 180 188, 220 182" stroke="#33332d" strokeWidth="1" fill="none" strokeDasharray="2,2" />
      <text x="160" y="194" fontFamily="'Architects Daughter', cursive" fontSize="10" fill="#52524e">Loss: 0.042 (converged)</text>
    </svg>
  );
}

// 2. Geospatial & Flowchart Segmentation Sketch
export function GeospatialSegmentationSketch() {
  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="310" height="190" fill="#faf8f2" stroke="#33332d" strokeWidth="1.8" rx="8" />
      
      {/* Flow Nodes */}
      <rect x="25" y="25" width="70" height="38" rx="6" stroke="#33332d" strokeWidth="1.8" fill="#eef0eb" />
      <text x="60" y="48" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">Raw Logs</text>

      <path d="M95 44 L135 44" stroke="#33332d" strokeWidth="1.8" markerEnd="url(#arrow)" fill="none" />

      <rect x="135" y="25" width="75" height="38" rx="6" stroke="#33332d" strokeWidth="1.8" fill="#eef0eb" />
      <text x="172" y="48" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">RFM Filter</text>

      <path d="M210 44 L245 44 L245 80" stroke="#33332d" strokeWidth="1.8" fill="none" />

      {/* Cluster Map Box */}
      <rect x="40" y="90" width="240" height="95" rx="8" stroke="#33332d" strokeWidth="1.8" fill="#ffffff" strokeDasharray="4,3" />
      <text x="50" y="108" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">Customer Clusters (Store A/B)</text>

      {/* Cluster dots */}
      {/* Cluster 1 (Green) */}
      <circle cx="80" cy="135" r="5" fill="#2e7d32" opacity="0.8" />
      <circle cx="95" cy="145" r="6" fill="#2e7d32" opacity="0.8" />
      <circle cx="110" cy="130" r="4" fill="#2e7d32" opacity="0.8" />
      <circle cx="90" cy="160" r="5" fill="#2e7d32" opacity="0.8" />
      <ellipse cx="95" cy="142" rx="35" ry="25" stroke="#2e7d32" strokeWidth="1.2" fill="none" strokeDasharray="3,2" />
      <text x="95" y="178" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="9" fill="#2e7d32">High Value</text>

      {/* Cluster 2 (Blue) */}
      <circle cx="210" cy="130" r="5" fill="#0277bd" opacity="0.8" />
      <circle cx="225" cy="145" r="6" fill="#0277bd" opacity="0.8" />
      <circle cx="240" cy="125" r="4" fill="#0277bd" opacity="0.8" />
      <circle cx="220" cy="155" r="5" fill="#0277bd" opacity="0.8" />
      <ellipse cx="225" cy="140" rx="35" ry="25" stroke="#0277bd" strokeWidth="1.2" fill="none" strokeDasharray="3,2" />
      <text x="225" y="178" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="9" fill="#0277bd">At Risk</text>

      {/* Arrow Marker */}
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#33332d" />
        </marker>
      </defs>
    </svg>
  );
}

// 3. Scatter Plot Sketch
export function ScatterPlotSketch() {
  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="310" height="190" fill="#faf8f2" stroke="#33332d" strokeWidth="1.8" rx="8" />
      
      {/* Axes */}
      <path d="M 45 160 L 290 160" stroke="#33332d" strokeWidth="2" />
      <path d="M 45 160 L 45 25" stroke="#33332d" strokeWidth="2" />
      
      {/* Ticks & Labels */}
      <text x="165" y="185" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">Transact Volume (X)</text>
      <text x="20" y="95" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d" transform="rotate(-90 20 95)">Retention %</text>

      {/* Grid Lines */}
      <line x1="45" y1="125" x2="290" y2="125" stroke="#33332d" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.3" />
      <line x1="45" y1="85" x2="290" y2="85" stroke="#33332d" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.3" />
      <line x1="45" y1="45" x2="290" y2="45" stroke="#33332d" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.3" />

      {/* Regression Line */}
      <path d="M 55 145 Q 160 95, 275 40" stroke="#1565c0" strokeWidth="2.2" fill="none" />
      
      {/* Confidence Interval Shadow */}
      <path d="M 55 155 Q 160 105, 275 30 L 275 50 Q 160 85, 55 135 Z" fill="#1565c0" opacity="0.1" />

      {/* Scatter Points */}
      <circle cx="65" cy="142" r="4.5" fill="#33332d" />
      <circle cx="85" cy="130" r="4.5" fill="#33332d" />
      <circle cx="105" cy="138" r="4.5" fill="#33332d" />
      <circle cx="120" cy="110" r="4.5" fill="#1565c0" />
      <circle cx="145" cy="100" r="4.5" fill="#33332d" />
      <circle cx="165" cy="92" r="4.5" fill="#1565c0" />
      <circle cx="190" cy="80" r="4.5" fill="#33332d" />
      <circle cx="210" cy="65" r="4.5" fill="#1565c0" />
      <circle cx="240" cy="52" r="4.5" fill="#33332d" />
      <circle cx="265" cy="42" r="4.5" fill="#1565c0" />

      {/* Annotation */}
      <text x="210" y="32" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#1565c0">R² = 0.89 (p &lt; 0.01)</text>
    </svg>
  );
}

// 4. Serverless Architecture Diagram
export function ServerlessArchitectureSketch() {
  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="310" height="190" fill="#faf8f2" stroke="#33332d" strokeWidth="1.8" rx="8" />
      
      {/* Client Box */}
      <rect x="20" y="70" width="65" height="50" rx="6" stroke="#33332d" strokeWidth="1.8" fill="#eef0eb" />
      <text x="52" y="92" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="10" fill="#33332d">Next.js 14</text>
      <text x="52" y="107" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="9" fill="#52524e">Client/CMS</text>

      {/* Arrow */}
      <path d="M85 95 L125 95" stroke="#33332d" strokeWidth="1.8" fill="none" strokeDasharray="3,2" />

      {/* Lambda / Serverless Box */}
      <rect x="125" y="60" width="80" height="70" rx="8" stroke="#33332d" strokeWidth="1.8" fill="#ffffff" />
      <text x="165" y="85" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">AWS Lambda</text>
      <text x="165" y="100" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="9" fill="#2e7d32">RBAC Router</text>
      <text x="165" y="115" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="9" fill="#52524e">API Gateway</text>

      {/* Arrow Top to S3 */}
      <path d="M190 60 L230 35" stroke="#33332d" strokeWidth="1.8" fill="none" />

      {/* Arrow Bottom to DynamoDB */}
      <path d="M190 130 L230 155" stroke="#33332d" strokeWidth="1.8" fill="none" />

      {/* AWS S3 */}
      <rect x="230" y="15" width="70" height="40" rx="6" stroke="#33332d" strokeWidth="1.8" fill="#eef0eb" />
      <text x="265" y="38" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="10" fill="#33332d">AWS S3 Media</text>

      {/* AWS DynamoDB Cylinder */}
      <g fill="#eef0eb" stroke="#33332d" strokeWidth="1.8">
        <path d="M 230 145 C 230 138, 300 138, 300 145 L 300 175 C 300 182, 230 182, 230 175 Z" />
        <ellipse cx="265" cy="145" rx="35" ry="7" />
      </g>
      <text x="265" y="165" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="10" fill="#33332d">DynamoDB</text>
    </svg>
  );
}

// 5. Autism Wellness / Multimodal AI Sketch
export function AutismWellnessSketch() {
  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="310" height="190" fill="#faf8f2" stroke="#33332d" strokeWidth="1.8" rx="8" />

      {/* Voice Wave Signal */}
      <path d="M 25 100 Q 45 40, 65 100 T 105 100 T 145 100 T 185 100 T 225 100 T 265 100 T 295 100" stroke="#6a1b9a" strokeWidth="2.2" fill="none" />
      
      {/* Emotion Sentiment Bar overlay */}
      <rect x="30" y="140" width="260" height="35" rx="6" stroke="#33332d" strokeWidth="1.6" fill="#ffffff" />
      <rect x="35" y="145" width="100" height="25" rx="4" fill="#2e7d32" opacity="0.3" />
      <rect x="140" y="145" width="70" height="25" rx="4" fill="#0277bd" opacity="0.3" />
      <rect x="215" y="145" width="70" height="25" rx="4" fill="#6a1b9a" opacity="0.3" />

      <text x="85" y="162" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="10" fill="#2e7d32">Calm: 65%</text>
      <text x="175" y="162" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="10" fill="#0277bd">Focus: 25%</text>
      <text x="250" y="162" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="10" fill="#6a1b9a">Hume AI</text>

      <text x="160" y="32" textAnchor="middle" fontFamily="'Architects Daughter', cursive" fontSize="11" fill="#33332d">Real-time Acoustic Emotion Scoring</text>
    </svg>
  );
}

// 6. Publication Mini Graph Sketch
export function PublicationGraphSketch({ type = "time_series" }) {
  if (type === "scatter") {
    return (
      <svg viewBox="0 0 160 80" width="100%" height="80" xmlns="http://www.w3.org/2000/svg">
        <path d="M 15 70 L 150 70" stroke="#33332d" strokeWidth="1.4" />
        <path d="M 15 70 L 15 10" stroke="#33332d" strokeWidth="1.4" />
        <circle cx="35" cy="55" r="3" fill="#2e7d32" />
        <circle cx="55" cy="48" r="3" fill="#33332d" />
        <circle cx="75" cy="40" r="3" fill="#2e7d32" />
        <circle cx="95" cy="30" r="3" fill="#33332d" />
        <circle cx="115" cy="22" r="3" fill="#2e7d32" />
        <path d="M 25 65 L 140 18" stroke="#2e7d32" strokeWidth="1.6" strokeDasharray="3,2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 160 80" width="100%" height="80" xmlns="http://www.w3.org/2000/svg">
      <path d="M 15 70 L 150 70" stroke="#33332d" strokeWidth="1.4" />
      <path d="M 15 70 L 15 10" stroke="#33332d" strokeWidth="1.4" />
      <path d="M 20 60 Q 45 20, 70 50 T 120 25 T 145 15" stroke="#1565c0" strokeWidth="1.8" fill="none" />
      <path d="M 20 65 Q 45 45, 70 58 T 120 40 T 145 30" stroke="#33332d" strokeWidth="1.2" strokeDasharray="3,2" fill="none" />
    </svg>
  );
}
