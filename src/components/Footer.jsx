import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p>© {new Date().getFullYear()} {profile.name}</p>
                <p className="footer__thanks script">thanks for stopping by!</p>
                <p className="footer__built mono">Built with React + Vite</p>
                <a href="#top" className="footer__top">
                    Back to top <FiArrowUp aria-hidden="true" />
                </a>
            </div>
        </footer>
    );
}
