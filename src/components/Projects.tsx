import Link from "next/link";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projetos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Projetos de referência</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Projetos publicados que comprovam capacidade prática.</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">{project.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">O que este projeto demonstra</p>
                <p className="mt-2 text-sm text-sky-900">{project.demonstrates}</p>
              </div>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center rounded-full border border-sky-300 px-4 py-2 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-600 hover:text-white"
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
