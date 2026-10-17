import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ projects }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects I've worked on." description="A selection of projects that show how I approach design, functionality, and problem-solving." />
        <div className="project-toolbar reveal">
          <p><span className="project-count">{String(visibleProjects.length).padStart(2, "0")}</span> projects shown</p>
          <div className="filter-list" aria-label="Filter projects">
            {categories.map((category) => <button key={category} className={`filter-button ${filter === category ? "filter-button--active" : ""}`} onClick={() => setFilter(category)}>{category}</button>)}
          </div>
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
      </div>
    </section>
  );
}