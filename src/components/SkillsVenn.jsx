import { cn } from '@/lib/utils';

export function SkillsVenn({
  skills = {
    top: 'Frontend Architecture',
    left: 'Design Systems',
    right: 'Developer Tooling',
    bottom: 'Product Thinking\n& User Research',
  },
  className,
}) {
  return (
    <div className={cn('relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg select-none', className)}>
      <div className="relative aspect-square w-full">
        {/* Top circle */}
        <div className="absolute top-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border border-foreground/15 bg-primary/5 transition-colors hover:border-primary/40" />

        {/* Left circle */}
        <div className="absolute top-[22%] left-[2%] h-[55%] w-[55%] rounded-full border border-foreground/15 bg-primary/5 transition-colors hover:border-primary/40" />

        {/* Right circle */}
        <div className="absolute top-[22%] right-[2%] h-[55%] w-[55%] rounded-full border border-foreground/15 bg-primary/5 transition-colors hover:border-primary/40" />

        {/* Bottom circle */}
        <div className="absolute bottom-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border border-foreground/15 bg-primary/5 transition-colors hover:border-primary/40" />

        {/* Skill labels */}
        <span className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[150px] text-center text-[11px] sm:text-xs md:text-sm font-medium text-foreground/75 leading-tight">
          {skills.top}
        </span>

        <span className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 max-w-[85px] sm:max-w-[110px] text-center text-[11px] sm:text-xs md:text-sm font-medium text-foreground/75 leading-tight">
          {skills.left}
        </span>

        <span className="absolute top-1/2 right-[20%] translate-x-1/2 -translate-y-1/2 max-w-[85px] sm:max-w-[110px] text-center text-[11px] sm:text-xs md:text-sm font-medium text-foreground/75 leading-tight">
          {skills.right}
        </span>

        <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 max-w-[150px] whitespace-pre-wrap text-center text-[11px] sm:text-xs md:text-sm font-medium leading-tight text-foreground/75">
          {skills.bottom}
        </span>
      </div>
    </div>
  );
}
