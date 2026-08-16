import { useState } from 'react';
import { PROJECTS } from '@/config/projects';
import { ExternalLink, ChevronDown, FolderGit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState(PROJECTS[0]?.id || 'bin-go-website');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          Things I've Built
        </h2>
      </div>

      <div className="space-y-3">
        {PROJECTS.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <div
              key={project.id}
              className="group rounded-xl border border-border/60 bg-card overflow-hidden transition-colors hover:border-border"
            >
              {/* Card Header */}
              <div
                onClick={() => toggleExpand(project.id)}
                className="flex items-start justify-between p-3.5 sm:p-4 gap-2.5 cursor-pointer select-none hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="size-8 sm:size-9 rounded-lg object-contain bg-card border border-border/50 shrink-0 shadow-xs mt-0.5"
                    />
                  ) : (
                    <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg bg-muted border border-border shrink-0 mt-0.5">
                      <FolderGit2 className="size-4 text-muted-foreground" />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h3 className="font-semibold text-sm md:text-base text-foreground leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-[11px] sm:text-xs font-mono text-muted-foreground">
                        {project.period.start}{' '}
                        {project.period.end
                          ? `- ${project.period.end}`
                          : '- Present'}
                      </span>
                    </div>
                    {project.shortDescription && (
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-1 mt-1">
                        {project.shortDescription}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="View GitHub Repository"
                      className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <svg className="size-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}

                  {project.link && !project.inDevelopment ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Open Project Link"
                      className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  ) : (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      title="Live demo in development"
                      className="p-1.5 rounded-md text-muted-foreground/30 cursor-not-allowed select-none"
                    >
                      <ExternalLink className="size-4" />
                    </div>
                  )}

                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-foreground' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { duration: 0.01 },
                    }}
                    className="border-t border-border/40 px-3.5 sm:px-4 py-3 sm:py-3.5 bg-muted/20"
                  >
                    {project.description && (
                      <div className="text-xs md:text-sm text-foreground/85 leading-relaxed whitespace-pre-line mb-3 font-sans">
                        {project.description}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-border/60 bg-background px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
