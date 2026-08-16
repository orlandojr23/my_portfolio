import { cn } from '@/lib/utils';

export function SkillsVenn({
  profileImage,
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
        <span className="absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-xs md:text-sm font-medium text-foreground/70">
          {skills.top}
        </span>

        <span className="absolute top-1/2 left-[12%] -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-medium text-foreground/70">
          {skills.left}
        </span>

        <span className="absolute top-1/2 right-[12%] translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-medium text-foreground/70">
          {skills.right}
        </span>

        <span className="absolute bottom-[12%] left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-pre-wrap text-center text-xs md:text-sm font-medium leading-tight text-foreground/70">
          {skills.bottom}
        </span>

        {/* Center profile avatar with ambient glow ring */}
        <div className="group absolute top-1/2 left-1/2 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-background shadow-2xl ring-2 ring-foreground/20 hover:ring-foreground/50 transition-all duration-300">
          <img
            src={profileImage}
            alt="Orlando Jr. Fornolles Profile"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
