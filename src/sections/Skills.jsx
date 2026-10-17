import { ArrowUpRight, Layers3 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="My toolkit" title="Skills that bring ideas to life." description="A snapshot of the technologies and tools I use. Update these lists to reflect your current strengths." />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card reveal" key={group.title} style={{ "--delay": `${index * 80}ms` }}>
              <div className="skill-card-head"><span className="skill-icon"><Layers3 size={20} /></span><span className="skill-count">0{index + 1}</span></div>
              <h3>{group.title}</h3>
              <div className="skill-items">{group.items.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="skills-note reveal"><span className="note-mark">+</span><p>My toolkit keeps growing. I'm always open to learning the right technology for the problem.</p><a href="#projects" aria-label="View projects"><ArrowUpRight size={18} /></a></div>
      </div>
    </section>
  );
}