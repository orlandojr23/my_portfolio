import { Mail } from 'lucide-react';
import { USER } from '@/config/user';

export function Footer({ brandName = USER.name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-4 sm:pt-8 pb-12 sm:pb-16 select-none">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 sm:gap-16">
          
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 text-center sm:text-left">
            {/* Socials Column */}
            <div className="space-y-4 flex flex-col items-center sm:items-start w-full">
              <h3 className="font-mono text-[11px] sm:text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Connect
              </h3>
              <div className="flex flex-col items-center sm:items-start gap-3 font-mono text-[11px] sm:text-xs">
                <a
                  href={USER.social?.github || 'https://github.com/orlandojr23'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-foreground hover:underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors w-fit"
                >
                  <svg className="size-3.5 fill-current opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub ↗
                </a>
                <span className="flex items-center gap-1.5 text-muted-foreground/50 tracking-widest uppercase text-[10px] sm:text-[11px] cursor-not-allowed">
                  <svg className="size-3.5 fill-current opacity-80" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn (Soon)
                </span>
                <a
                  href={`mailto:${USER.email}`}
                  className="group flex items-center gap-1.5 text-foreground hover:underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors w-fit"
                >
                  <Mail className="size-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                  Email ↗
                </a>
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&add=orlandojuniorfornolles@gmail.com&text=Meeting%20with%20Orlando"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-foreground hover:underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors w-fit"
                >
                  <svg className="size-3.5 fill-current opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                    <path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"/>
                  </svg>
                  Google Calendar ↗
                </a>
                {USER.social?.twitter && (
                  <a
                    href={USER.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-foreground hover:underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors w-fit"
                  >
                    <svg className="size-3.5 fill-current opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X / Twitter ↗
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 text-muted-foreground/50 border-t border-border/30 pt-6 sm:pt-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">
                © {new Date().getFullYear()} {brandName}
              </p>
              <span className="hidden sm:inline-block text-border">•</span>
              <p className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">
                All rights reserved
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-foreground hover:underline underline-offset-4 decoration-border transition-colors cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
