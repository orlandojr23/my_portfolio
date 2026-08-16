import { USER } from '@/config/user';
import { ArrowUp, CalendarDays } from 'lucide-react';

export function WordmarkFooter({ brandName = USER.name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full pt-12 pb-16 select-none overflow-hidden border-t border-border/40">
      <div className="flex flex-wrap items-center justify-between gap-y-3 px-6 mb-10 max-w-2xl mx-auto text-xs text-muted-foreground">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {USER.social.github && (
            <div
              className="flex items-center gap-1.5 text-muted-foreground transition-colors cursor-default"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </div>
          )}
          {USER.social.linkedin && (
            <div
              className="flex items-center gap-1.5 text-muted-foreground transition-colors cursor-default"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </div>
          )}
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&add=orlandojuniorfornolles@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <CalendarDays className="size-3.5" />
            <span>Google Calendar</span>
          </a>
          {USER.social.twitter && (
            <a
              href={USER.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X / Twitter</span>
            </a>
          )}
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors font-mono"
        >
          <span>Back to top</span>
          <ArrowUp className="size-3.5" />
        </button>
      </div>

      <div className="text-center px-4 my-2">
        <h1 className="w-full flex justify-center overflow-hidden">
          <span className="sr-only">{brandName}</span>
          <svg
            viewBox="0 0 1100 110"
            className="w-full max-w-6xl h-auto select-none pointer-events-none"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-extrabold uppercase fill-foreground/20 dark:fill-foreground/30 transition-colors"
              style={{
                fontSize: '70px',
                letterSpacing: '-0.03em',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontWeight: 900,
              }}
            >
              {brandName}
            </text>
          </svg>
        </h1>
        <p className="text-[10px] font-mono text-muted-foreground/60 mt-4 tracking-wide break-words">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
