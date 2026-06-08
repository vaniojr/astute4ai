import { projectTypes } from "@/lib/constants";

export function ProjectTypes() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Escopo de entrega</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Tipos de projetos que podemos criar</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectTypes.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
              <p className="text-sm font-medium text-slate-800">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
