import Link from "next/link";
import { contact } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section id="contato" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-sky-200 bg-gradient-to-r from-white to-sky-50 p-8 shadow-2xl sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Contato</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Sua ideia pode virar o próximo produto digital da Astute4AI.</h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Conte o que você quer criar, automatizar ou melhorar. Vamos avaliar juntos o melhor caminho para transformar isso em uma solução real.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={contact.formAnchor}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Solicitar diagnóstico gratuito
          </Link>
          <a
            href="#projetos"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:text-sky-700"
          >
            Ver projetos
          </a>
        </div>
      </div>
    </section>
  );
}
