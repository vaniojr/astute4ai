import { trustPoints } from "@/lib/constants";

export function Trust() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Confiança</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Por que escolher a Astute4AI?</h2>
        <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
