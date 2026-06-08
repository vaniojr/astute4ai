import { solutions } from "@/lib/constants";

export function Solutions() {
  return (
    <section id="solucoes" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Soluções</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Da ideia ao lançamento: soluções para validar, vender e escalar.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-slate-950">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{solution.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-sky-900">
                {solution.examples.map((example) => (
                  <li key={example} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1">
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
