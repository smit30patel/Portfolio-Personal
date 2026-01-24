import { useEffect, useRef } from 'react';
import './FluidBackground.css';

const FluidBackground = () => {
    return (
        <div className="sky-background">
            <div className="sun"></div>
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>
            <div className="glass-overlay"></div>
        </div>
    );
};

export default FluidBackground;
