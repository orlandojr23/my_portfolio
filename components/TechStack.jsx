import { techStack } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="border-t py-16 sm:py-20"
      style={{ borderColor: "var(--border)" }}
    >
      <Reveal>
        <h2
          id="stack-heading"
          className="text-xl font-medium tracking-tight sm:text-2xl"
        >
          Tech Stack
        </h2>
        <dl className="mt-8 space-y-5">
          {techStack.map((row) => (
            <div
              key={row.group}
              className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr] sm:gap-4"
            >
              <dt
                className="font-mono text-xs tracking-[0.14em] uppercase pt-1"
                style={{ color: "var(--muted)" }}
              >
                {row.group}
              </dt>
              <dd className="flex flex-wrap items-center gap-2 text-[15px] leading-relaxed">
                {row.items.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <item.icon
                      size={16}
                      className="opacity-90"
                      style={{
                        color: "var(--foreground)",
                        filter:
                          "drop-shadow(1px 1px 0px var(--accent)) drop-shadow(2px 2px 0px rgba(0,0,0,0.1))",
                        transform: "translateY(-1px)",
                      }}
                    />

                    <span>{item.name}</span>
                    {i < row.items.length - 1 && (
                      <span className="ml-2 opacity-40" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </div>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
