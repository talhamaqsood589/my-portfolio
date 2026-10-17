import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";

export default function Hero({ data }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability-pill"><span className="status-dot" />{data.availability}</div>
          <p className="hero-kicker"><Sparkles size={16} /> Hello, I'm</p>
          <h1>{data.name.split(" ")[0]} <span className="text-gradient">{data.name.split(" ").slice(1).join(" ") || data.name}</span></h1>
          <h2><span className="hero-role">{data.role}</span><span className="cursor">.</span></h2>
          <p className="hero-description">{data.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={17} /> View resume</a>
          </div>
          <div className="hero-social-proof">
            <div className="avatar-stack" aria-hidden="true"><span>T</span><span>M</span><span>+</span></div>
            <p><strong>Full Stack Web Development.</strong><br />Building complete applications through practice and teamwork.</p>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-glow hero-glow--one" />
          <div className="visual-orbit visual-orbit--outer" />
          <div className="visual-orbit visual-orbit--inner" />
          <div className="profile-photo-wrap" aria-label={`Profile photo for ${data.name}`}>
            <span className="profile-photo-placeholder" aria-hidden="true">{data.initials}</span>
            <img
              className="profile-photo"
              src={data.profileImage}
              alt={`${data.name} profile`}
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          </div>
          <div className="profile-card">
            <div className="profile-card-top"><span className="window-dot window-dot--red" /><span className="window-dot window-dot--yellow" /><span className="window-dot window-dot--green" /><span className="profile-card-label">developer.js</span></div>
            <div className="code-window">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
              <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">'{data.name}'</span>,</p>
              <p><span className="code-muted">03</span> &nbsp; role: <span className="code-green">'{data.role}'</span>,</p>
              <p><span className="code-muted">04</span> &nbsp; location: <span className="code-green">'{data.location}'</span>,</p>
              <p><span className="code-muted">05</span> &nbsp; mindset: <span className="code-green">'always learning'</span></p>
              <p><span className="code-muted">06</span> {"};"}</p>
              <p className="code-comment"><span className="code-muted">07</span> // building useful digital experiences</p>
              <p><span className="code-muted">08</span> <span className="code-purple">export default</span> developer;</p>
            </div>
            <div className="profile-card-bottom"><span className="terminal-prompt">●</span> Open to job & internship opportunities <span className="terminal-blink">_</span></div>
          </div>
          <div className="floating-chip floating-chip--top"><span className="chip-icon chip-icon--blue">{"</>"}</span><span><strong>Web development</strong><small>React · JavaScript · CSS</small></span></div>
          <div className="floating-chip floating-chip--bottom"><span className="chip-icon chip-icon--green">✦</span><span><strong>Always learning</strong><small>Full-stack development</small></span></div>
          <div className="hero-location"><span className="location-dot" /> {data.location}</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
    </section>
  );
}
