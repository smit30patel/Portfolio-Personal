import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="handdrawn" style={{ fontSize: '1.1rem', color: '#2b2b2b' }}>
                    ✏️ Designed & Built by Smit Patel
                </div>
                <div className="mono" style={{ fontSize: '0.85rem', color: '#52524e' }}>
                    Single-Page Technical Sketchbook Portfolio · Dynamic Role Filter Engine · {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
}
