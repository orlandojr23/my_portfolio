import { cn } from '@/lib/utils';

export function Section({ children, className, ...props }) {
  return (
    <section
      className={cn('mx-auto max-w-2xl px-4 sm:px-6 py-10 sm:py-12 md:py-16', className)}
      {...props}
    >
      {children}
    </section>
  );
}
