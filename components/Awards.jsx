"use client";

import Image from "next/image";
import Reveal from "./Reveal";
export default function Awards() {
  return (
    <section
      id="awards"
      aria-labelledby="awards-heading"
      className="border-t py-16 sm:py-20 scroll-mt-20"
      style={{ borderColor: "var(--border)" }}
    >
      <Reveal>
        <h2
          id="awards-heading"
          className="text-xl font-medium tracking-tight sm:text-2xl mb-8"
        >
          Awards & Recognition
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="relative overflow-hidden rounded-2xl border p-3 sm:p-5"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--card-bg)",
          }}
        >
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div
              className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border sm:w-1/2 shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <Image
                src="/profile2.jpg"
                alt="Awards in DevOps and Web Development"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center px-2 pb-4 sm:px-0 sm:pb-0">
              <h3 className="mb-2 text-xl font-bold leading-snug tracking-tight text-[var(--foreground)]">
                DevOps of the Year <br className="hidden lg:block" />& Best in
                Website Development
              </h3>
              <div
                className="mb-5 text-sm font-medium opacity-80"
                style={{ color: "var(--foreground)" }}
              >
                Southwestern University PHINMA &bull; September 6, 2026
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <strong
                    className="block text-sm mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    Best in Website Development
                  </strong>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    "In recognition of your outstanding proficiency, dedication,
                    and excellence as a Web Developer, demonstrating exceptional
                    skills in website development, problem-solving, and
                    commitment to creating functional and engaging web
                    solutions."
                  </p>
                </div>
                <div>
                  <strong
                    className="block text-sm mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    DevOps of the Year
                  </strong>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    "In recognition of your outstanding proficiency, dedication,
                    and excellence in DevOps, demonstrating exceptional skills
                    in automation, deployment, system reliability, and
                    commitment to efficient software delivery."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
