import { solutions } from "@/lib/constants";

export function Solutions() {
  return (
    <section id="solucoes" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Solucoes</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Criamos solucoes com IA para gerar eficiencia, vendas e escala.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl transition-transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{solution.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-cyan-100">
                {solution.examples.map((example) => (
                  <li key={example} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1">
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
