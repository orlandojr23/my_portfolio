import { TESTIMONIALS } from '@/config/testimonials';
import { Quote } from 'lucide-react';

export function TestimonialsMarquee() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Kind Words & Endorsements
        </h2>
      </div>

      <div className="relative overflow-hidden w-full py-2">
        <div className="flex w-max space-x-4 animate-marquee hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-72 shrink-0 rounded-xl border border-border/60 bg-card p-4 shadow-sm hover:border-primary/40 transition-colors"
            >
              <Quote className="size-4 text-muted-foreground/40 mb-2" />
              <p className="text-xs text-foreground/80 leading-relaxed italic mb-3">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-2.5">
                {item.authorAvatar && (
                  <img
                    src={item.authorAvatar}
                    alt={item.authorName}
                    className="size-7 rounded-full object-cover border border-border"
                  />
                )}
                <div>
                  <h4 className="text-xs font-semibold text-foreground">
                    {item.authorName}
                  </h4>
                  <p className="text-[10px] text-muted-foreground font-mono">
                    {item.authorTagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mask gradients for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />
      </div>
    </div>
  );
}
