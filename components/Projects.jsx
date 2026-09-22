import { projects } from "@/data/portfolio";
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t py-16 sm:py-20 scroll-mt-20"
      style={{ borderColor: "var(--border)" }}
    >
      <Reveal>
        <h2
          id="projects-heading"
          className="text-xl font-medium tracking-tight sm:text-2xl"
        >
          Projects
        </h2>
      </Reveal>
      <div className="mt-6">
        {projects.map((project, i) => (
          <Reveal key={project.name}>
            <div
              className={i === 0 ? "" : "border-t"}
              style={{ borderColor: "var(--border)" }}
            >
              <ProjectItem project={project} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
