import { toneStyle } from '../utils/tones';

// `title` is a node so a heading can carry one italic-serif emphasis word.
export default function SectionHeader({ index, title, note, lead }) {
    return (
        <header className="section-header" style={toneStyle(Number(index) - 1)}>
            <span className="section-header__index">
                {index}
                {note && <span className="section-header__note">{note}</span>}
            </span>
            <h2 className="section-header__title">{title}</h2>
            {lead && <p className="section-header__lead">{lead}</p>}
        </header>
    );
}
