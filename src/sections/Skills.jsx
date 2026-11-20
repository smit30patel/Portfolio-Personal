import { skills } from '../data/portfolio';
import SectionHeader from '../components/SectionHeader';
import { toneStyle } from '../utils/tones';
import './Skills.css';

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container reveal">
                <SectionHeader index="04" title={<>Tools of the <span className="em">trade</span></>} lead="The tools behind the work above." />

                <div className="skills">
                    {skills.map(({ group, items }, i) => (
                        <div key={group} className="skills__group" style={toneStyle(i)}>
                            <h3 className="skills__title mono">{group}</h3>
                            <ul className="skills__items">
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
