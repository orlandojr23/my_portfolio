import { cn } from '@/lib/utils';

export default function Separator({ className }) {
  return (
    <div
      className={cn(
        'relative w-full border-t border-border/60 my-0',
        className
      )}
    />
  );
}
