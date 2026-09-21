import { about } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t py-16 sm:py-20" style={{ borderColor: "var(--border)" }}>
      <Reveal>
        <h2 id="about-heading" className="text-xl font-medium tracking-tight sm:text-2xl">
          {about.heading}
        </h2>
        <div className="mt-6 max-w-[62ch] space-y-4 text-[16px] leading-relaxed">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} style={{ color: "var(--muted)" }}>
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed" style={{ color: "var(--muted)" }} aria-label="Areas of interest">
          {about.labels.join(" · ")}
        </p>
      </Reveal>
    </section>
  );
}
