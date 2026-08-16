import { useState } from 'react';
import { experiences } from '@/config/experience';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ExperiencesSection() {
  const [expandedRole, setExpandedRole] = useState('frontend-ai-intern');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          Where I've Worked
        </h2>
      </div>

      <div className="relative border-l border-border/60 ml-3 space-y-6 pl-6">
        {experiences.map((company) => (
          <div key={company.id} className="relative group">
            {/* Company marker */}
            <div className="absolute -left-[31px] top-1 size-3 rounded-full border-2 border-background bg-foreground/60 group-hover:bg-primary transition-colors" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">
                  <a
                    href={company.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {company.companyName}
                  </a>
                </h3>
                <span className="text-xs text-muted-foreground font-mono">
                  {company.city}
                </span>
              </div>
            </div>

            {/* Positions held at company */}
            <div className="mt-3 space-y-2.5">
              {company.positions.map((pos) => {
                const isExpanded = expandedRole === pos.id;

                return (
                  <div
                    key={pos.id}
                    className="rounded-lg border border-border/50 bg-card/60 overflow-hidden"
                  >
                    <div
                      onClick={() =>
                        setExpandedRole(isExpanded ? null : pos.id)
                      }
                      className="flex items-center justify-between p-3.5 cursor-pointer select-none hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        {company.companyLogo && (
                          <img
                            src={company.companyLogo}
                            alt={company.companyName}
                            className="size-4 rounded-sm object-contain shrink-0"
                          />
                        )}
                        <h4 className="text-xs md:text-sm font-medium text-foreground">
                          {pos.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-muted-foreground">
                          {pos.employmentPeriod.start}{' '}
                          {pos.employmentPeriod.end
                            ? `- ${pos.employmentPeriod.end}`
                            : '- Present'}
                        </span>
                        <ChevronDown
                          className={`size-4 text-muted-foreground transition-transform duration-150 ${
                            isExpanded ? 'rotate-180 text-foreground' : ''
                          }`}
                        />
                      </div>
                    </div>

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
                          className="border-t border-border/40 px-3.5 py-3 bg-muted/10 text-xs md:text-sm text-foreground/85 space-y-2.5 overflow-hidden"
                        >
                          {pos.description && (
                            <p className="leading-relaxed">{pos.description}</p>
                          )}
                          {pos.skills && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {pos.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded px-2 py-0.5 bg-background border border-border/50 font-mono text-[10px] md:text-[11px] text-muted-foreground"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
