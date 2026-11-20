import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile, highlights, terminalSummary } from '../data/portfolio';
import { toneStyle } from '../utils/tones';
import './Hero.css';

function JsonValue({ value }) {
    if (Array.isArray(value)) {
        return (
            <>
                <span className="t-punc">[</span>
                {value.map((item, i) => (
                    <span key={item}>
                        <span className="t-str">"{item}"</span>
                        {i < value.length - 1 && <span className="t-punc">, </span>}
                    </span>
                ))}
                <span className="t-punc">]</span>
            </>
        );
    }
    return <span className="t-str">"{value}"</span>;
}

function TerminalCard() {
    return (
        <div className="terminal-wrap">
            <p className="terminal__note script" aria-hidden="true">the quick version ↘</p>
            <figure className="terminal" aria-label="Profile summary">
                <div className="terminal__bar" aria-hidden="true">
                    <span /><span /><span />
                    <span className="terminal__title">~/smit/profile.json</span>
                </div>
                <pre className="terminal__body">
                    <code>
                        <span className="t-prompt">$ </span>cat profile.json{'\n'}
                        <span className="t-punc">{'{'}</span>{'\n'}
                        {terminalSummary.map(([key, value], i) => (
                            <span key={key} className="terminal__line">
                                <span className="t-key">"{key}"</span>
                                <span className="t-punc">: </span>
                                <JsonValue value={value} />
                                {i < terminalSummary.length - 1 && <span className="t-punc">,</span>}
                            </span>
                        ))}
                        <span className="t-punc">{'}'}</span>{'\n'}
                        <span className="t-prompt">$ </span><span className="terminal__cursor" aria-hidden="true" />
                    </code>
                </pre>
            </figure>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero__backdrop" aria-hidden="true" />
            <div className="hero__glow" aria-hidden="true" />

            <div className="container">
                <div className="hero__inner">
                    <div className="hero__copy">
                        <a href="#contact" className="status-pill">
                            <span className="status-pill__dot" aria-hidden="true" />
                            {profile.openTo}
                        </a>

                        <p className="hero__hello script">hi there, I’m</p>
                        <h1 className="hero__name">{profile.name}</h1>
                        <p className="hero__title">
                            <span className="hero__title-main">Software Engineer</span>
                            <span className="hero__title-sub">
                                <span className="hero__title-backend">Backend</span>
                                <span className="hero__amp">&amp;</span>
                                <span className="em hero__title-ai">AI</span>
                                {' '}Engineer
                            </span>
                        </p>
                        <p className="hero__intro">
                            {profile.intro.map((part) =>
                                typeof part === 'string' ? (
                                    part
                                ) : (
                                    <span key={part[0]} className={`hero__mark hero__mark--${part[1]}`}>
                                        {part[0]}
                                    </span>
                                )
                            )}
                        </p>

                        <div className="hero__actions">
                            <a
                                href={profile.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary"
                            >
                                <FiDownload aria-hidden="true" /> Resume
                            </a>
                            <a href="#projects" className="btn">
                                View projects <FiArrowRight aria-hidden="true" />
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn"
                                aria-label="GitHub"
                            >
                                <FiGithub aria-hidden="true" />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <TerminalCard />
                </div>

                <dl className="stats">
                    {highlights.map((item, i) => (
                        <div key={item.label} className="stats__item" style={toneStyle(i)}>
                            <dt>{item.label}</dt>
                            <dd>{item.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
