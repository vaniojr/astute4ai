import { audience } from "@/lib/constants";

export function Audience() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Para quem é</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Astute4AI para quem quer crescer com produto digital.</h2>
          <p className="mt-4 text-slate-700">
            Se você tem uma ideia, processo ou oportunidade de negócio que poderia ganhar escala com tecnologia, a Astute4AI pode ajudar a transformar isso em uma solução digital real.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <ul className="space-y-3 text-sm text-slate-700">
            {audience.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
