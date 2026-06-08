import { differentials } from "@/lib/constants";

export function Differentials() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Diferenciais</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tecnologia com visao de negocio e foco em conversao.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
