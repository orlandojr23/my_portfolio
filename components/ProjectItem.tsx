import { ArrowUpRight, Globe } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { GithubIcon } from "./Icons";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="group py-10 first:pt-2 sm:py-12">
      <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
        <span className="transition-colors group-hover:text-[var(--accent)]">
          {project.name}
        </span>
      </h3>
      <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
        {project.description}
      </p>
      <p className="mt-4 font-mono text-xs tracking-wide" style={{ color: "var(--muted)" }}>
        {project.stack}
      </p>
      <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2" aria-label={`Links for ${project.name}`}>
        {project.github && (
          <li>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex min-h-11 items-center gap-1.5 text-sm transition-colors hover:text-[var(--foreground)]"
              style={{ color: "var(--muted)" }}
              aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
            >
              <GithubIcon 
                width={14} 
                height={14} 
                strokeWidth={1.75} 
                aria-hidden="true" 
                style={{
                  color: "var(--foreground)",
                  filter: "drop-shadow(1px 1px 0px var(--accent)) drop-shadow(2px 2px 0px rgba(0,0,0,0.1))",
                  transform: "translateY(-1px)"
                }}
              />
              <span className="underline-offset-4 group-hover/link:underline">GitHub</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.75}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </li>
        )}
        {project.live && (
          <li>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex min-h-11 items-center gap-1.5 text-sm transition-colors hover:text-[var(--foreground)]"
              style={{ color: "var(--muted)" }}
              aria-label={`${project.name} live site (opens in a new tab)`}
            >
              <Globe 
                size={14} 
                strokeWidth={1.75} 
                aria-hidden="true" 
                style={{
                  color: "var(--foreground)",
                  filter: "drop-shadow(1px 1px 0px var(--accent)) drop-shadow(2px 2px 0px rgba(0,0,0,0.1))",
                  transform: "translateY(-1px)"
                }}
              />
              <span className="underline-offset-4 group-hover/link:underline">Live</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.75}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </li>
        )}
      </ul>
    </article>
  );
}
