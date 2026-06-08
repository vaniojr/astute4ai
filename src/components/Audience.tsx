import { audience } from "@/lib/constants";

export function Audience() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Para quem e</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Astute4AI para quem quer crescer com produto digital.</h2>
          <p className="mt-4 text-slate-300">
            Se voce tem uma ideia, processo ou oportunidade de negocio que poderia ganhar escala com tecnologia, a Astute4AI pode ajudar a transformar isso em uma solucao digital real.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl sm:p-8">
          <ul className="space-y-3 text-sm text-slate-200">
            {audience.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
