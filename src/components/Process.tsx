import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <section id="processo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Como trabalhamos</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Um processo simples para tirar sua ideia do papel.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">Etapa {index + 1}</span>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
