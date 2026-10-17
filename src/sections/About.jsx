import { ArrowUpRight, Code2, Lightbulb, Target } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const values = [
  { icon: Code2, title: "Thoughtful development", text: "Writing readable, maintainable code and choosing practical solutions." },
  { icon: Lightbulb, title: "Curiosity first", text: "Learning new concepts, exploring ideas, and improving through practice." },
  { icon: Target, title: "User-focused mindset", text: "Keeping usability, clarity, and real-world needs at the center." }
];

export default function About({ data }) {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <SectionHeading eyebrow="A little about me" title="Building with purpose." description="A quick introduction to the person behind the code." />
        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="about-lead">{data.about}</p>
            <p>{data.aboutExtra}</p>
            <a className="text-link" href="#contact">More about working together <ArrowUpRight size={16} /></a>
            <div className="stats-grid">
              {data.stats.map((stat) => <div className="stat-card" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
            </div>
          </div>
          <div className="value-list">
            {values.map(({ icon: Icon, title, text }, index) => (
              <article className="value-card reveal" key={title} style={{ "--delay": `${index * 100}ms` }}>
                <span className="value-icon"><Icon size={21} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="value-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}