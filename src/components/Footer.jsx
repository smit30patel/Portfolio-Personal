import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p className="footer__copy">© {new Date().getFullYear()} Smit Patel. Built with React & intention.</p>
                <div className="footer__socials">
                    <a href="https://github.com/smit30patel" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/smit3062" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>
                    <a href="mailto:spate348@asu.edu" className="footer__social-link" aria-label="Email">
                        <FiMail />
                    </a>
                </div>
            </div>
        </footer>
    );
}
