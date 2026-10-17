import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-image-wrap">
        <img
          className="project-image"
          src={project.image || "/images/projects/project-placeholder.svg"}
          alt={project.imageAlt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.parentElement.classList.add("project-image-fallback");
          }}
        />
        <span className="project-number">{project.number}</span>
        <span className="project-image-label">Project preview</span>
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">
          {project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
        </div>
        {(project.github || project.demo) && (
          <div className="project-links">
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={16} /></a>}
          </div>
        )}
      </div>
    </article>
  );
}
