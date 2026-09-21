import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import ScrollRestoration from "@/components/ScrollRestoration";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <main
      id="main"
      className="mx-auto w-full max-w-[900px] px-5 pb-10 sm:px-8"
    >
      <ScrollRestoration />
      <div id="top" aria-hidden="true" />
      <Hero />
      <About />
      <TechStack />
      <Awards />
      <Projects />
      <footer
        className="border-t py-10 text-sm"
        style={{ borderColor: "var(--border)", color: "var(--muted)" }}
      >
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </main>
  );
}
