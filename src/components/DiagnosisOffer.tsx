import Link from "next/link";
import { contact } from "@/lib/constants";

export function DiagnosisOffer() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 to-indigo-50 p-8 shadow-xl sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Oferta inicial</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Comece com um diagnóstico da sua ideia</h2>
        <p className="mt-4 max-w-4xl text-slate-700">
          Você não precisa chegar com tudo definido. Envie sua ideia, processo ou desafio, e avaliamos juntos qual caminho faz mais sentido: landing page, MVP, SaaS, automação ou agente de IA.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Solicitar diagnóstico
          </Link>
          <Link
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:text-sky-700"
          >
            Tenho uma ideia de projeto
          </Link>
        </div>
      </div>
    </section>
  );
}
