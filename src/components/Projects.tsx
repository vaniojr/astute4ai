import Link from "next/link";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projetos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Projetos de referencia</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Capacidade pratica ja validada em produtos reais.</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">{project.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center rounded-full border border-cyan-300/50 px-4 py-2 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-300 hover:text-slate-950"
              >
                {project.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
