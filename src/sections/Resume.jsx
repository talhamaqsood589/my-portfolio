import { ArrowDownToLine, ArrowUpRight, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="container">
        <div className="resume-banner reveal">
          <div className="resume-decoration resume-decoration--one" />
          <div className="resume-decoration resume-decoration--two" />
          <div className="resume-icon"><FileText size={27} /></div>
          <div className="resume-copy"><p className="eyebrow">Want the details?</p><h2>Let's make the next move.</h2><p>Take a look at my resume for a closer view of my experience, skills, and education.</p></div>
          <div className="resume-actions">
            <a className="button button-light" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowUpRight size={17} /></a>
            <a className="resume-download" href="/resume.pdf" download><ArrowDownToLine size={16} /> Download PDF</a>
          </div>
        </div>
      </div>
    </section>
  );
}