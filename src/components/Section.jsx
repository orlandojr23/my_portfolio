import { cn } from '@/lib/utils';

export function Section({ children, className, ...props }) {
  return (
    <section
      className={cn('mx-auto max-w-2xl px-6 py-12 md:py-16', className)}
      {...props}
    >
      {children}
    </section>
  );
}
