import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Contact({ data }) {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <SectionHeading eyebrow="Get in touch" title="Let's connect." description="Have a question, an idea, or want to talk about a web project? I'd be happy to hear from you." centered />
        <div className="contact-grid">
          <div className="contact-copy reveal">
            <h3>Let's start a conversation.</h3>
            <p>Feel free to get in touch if you would like to discuss a website, share an idea, or ask a question about my work.</p>
            <div className="contact-email contact-detail-row"><span className="contact-email-icon"><Mail size={20} /></span><span><small>Email address</small><strong>{data.email}</strong></span></div>
            <div className="contact-email contact-detail-row"><span className="contact-email-icon"><Phone size={19} /></span><span><small>Phone number</small><strong>{data.phone}</strong></span></div>
            <div className="contact-location"><MapPin size={17} /><span>{data.location}</span></div>
            <div className="social-links">
              <a href={data.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
            </div>
          </div>
          <div className="contact-note-card reveal">
            <span className="contact-note-icon"><Mail size={23} /></span>
            <p className="contact-note-label">Contact details</p>
            <h3>Good things start with a hello.</h3>
            <p>If you have a question, feedback, or a project idea, you are welcome to reach out. I enjoy connecting with people, exchanging ideas, and discussing how technology can solve everyday problems.</p>
            <p>Use the contact details on the left and I will get back to you when I can.</p>
            <div className="contact-note-decoration">{"{ }"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
