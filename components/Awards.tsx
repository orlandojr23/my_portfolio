"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ weight: "500", subsets: ["latin"] });

export default function Awards() {
  return (
    <section id="awards" className="mb-24 scroll-mt-24 sm:mb-32">
      <Reveal>
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Awards & Recognition</h2>
      </Reveal>
      
      <Reveal delay={0.1}>
        <div 
          className="relative overflow-hidden rounded-2xl border p-2 sm:p-4"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--card-bg)",
          }}
        >
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border sm:w-1/2 shadow-sm" style={{ borderColor: "var(--border)" }}>
              <Image
                src="/profile2.jpg"
                alt="Awards in DevOps and Web Development"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center px-2 pb-4 sm:px-0 sm:pb-0">
              <h3 
                className={`mb-2 text-xl font-bold leading-snug tracking-wide ${fredoka.className}`}
                style={{ textShadow: "1px 1px 0px var(--accent), 2px 2px 0px rgba(0,0,0,0.1)" }}
              >
                DevOps of the Year <br className="hidden lg:block"/>& Best in Website Development
              </h3>
              <div className="mb-5 text-sm font-medium opacity-80" style={{ color: "var(--foreground)" }}>
                Southwestern University PHINMA &bull; September 6, 2026
              </div>
              
              <div className="flex flex-col gap-4">
                <div>
                  <strong className="block text-sm mb-1" style={{ color: "var(--foreground)" }}>Best in Website Development</strong>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    "In recognition of your outstanding proficiency, dedication, and excellence as a Web Developer, demonstrating exceptional skills in website development, problem-solving, and commitment to creating functional and engaging web solutions."
                  </p>
                </div>
                <div>
                  <strong className="block text-sm mb-1" style={{ color: "var(--foreground)" }}>DevOps of the Year</strong>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    "In recognition of your outstanding proficiency, dedication, and excellence in DevOps, demonstrating exceptional skills in automation, deployment, system reliability, and commitment to efficient software delivery."
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
