import { BadgeCheck, BriefcaseBusiness, GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Experience({ items }) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading eyebrow="My journey" title="Experience, education & certification." description="My professional experience, education, training, and certification." />
        <div className="timeline">
          {items.map((item, index) => {
            const Icon = item.type === "experience" ? BriefcaseBusiness : item.type === "certification" ? BadgeCheck : GraduationCap;
            const typeLabel = item.type === "experience" ? "Experience" : item.type === "certification" ? "Certification" : "Education";
            return (
              <article className="timeline-item reveal" key={`${item.title}-${index}`} style={{ "--delay": `${index * 100}ms` }}>
                <div className="timeline-marker"><Icon size={19} /></div>
                <div className="timeline-card">
                  <div className="timeline-meta"><span className="timeline-type">{typeLabel}</span><span>{item.date}</span></div>
                  <h3>{item.title}</h3>
                  <p className="timeline-organization">{item.organization}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
