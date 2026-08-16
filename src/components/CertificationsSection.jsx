import { CERTIFICATIONS } from '@/config/certifications';
import { Award, ExternalLink } from 'lucide-react';

export function CertificationsSection() {
  if (!CERTIFICATIONS || CERTIFICATIONS.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          Certifications & Credentials
        </h2>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-1">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="group rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-border/90"
          >
            <div className="flex items-start justify-between gap-3.5">
              <div className="flex items-start gap-3.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-muted border border-border shrink-0 mt-0.5">
                  <Award className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>

                <div>
                  <h3 className="font-semibold text-sm md:text-base text-foreground">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs md:text-sm text-muted-foreground">
                      {cert.issuer}
                    </span>
                    {cert.date && (
                      <span className="text-xs font-mono text-muted-foreground/75">
                        • {cert.date}
                      </span>
                    )}
                  </div>

                  {cert.description && (
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded px-2 py-0.5 bg-background border border-border/50 font-mono text-[10px] md:text-[11px] text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
                >
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
