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
      <div className="mt-5 flex flex-wrap items-center gap-2.5" aria-label={`Links for ${project.name}`}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[#141414] px-3 py-1.5 font-mono text-xs text-[var(--muted)] transition-all duration-200 hover:border-[#383838] hover:bg-[#1f1f1f] hover:text-[var(--foreground)] active:scale-95"
            aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
          >
            <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>GitHub</span>
            <ArrowUpRight
              size={12}
              strokeWidth={2}
              aria-hidden="true"
              className="text-[var(--muted)] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-[var(--foreground)]"
            />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[#141414] px-3 py-1.5 font-mono text-xs text-[var(--muted)] transition-all duration-200 hover:border-[#383838] hover:bg-[#1f1f1f] hover:text-[var(--foreground)] active:scale-95"
            aria-label={`${project.name} live demo (opens in a new tab)`}
          >
            <Globe size={13} strokeWidth={2} aria-hidden="true" className="text-[var(--accent)]" />
            <span>Live Demo</span>
            <ArrowUpRight
              size={12}
              strokeWidth={2}
              aria-hidden="true"
              className="text-[var(--muted)] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-[var(--foreground)]"
            />
          </a>
        )}
      </div>
    </article>
  );
}
