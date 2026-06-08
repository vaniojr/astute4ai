import Link from "next/link";
import { contact } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section id="contato" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-slate-900 to-blue-950 p-8 shadow-2xl sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Contato</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tem uma ideia ou processo que poderia virar uma solucao digital?</h2>
        <p className="mt-4 max-w-3xl text-slate-200">
          Vamos conversar sobre como a Astute4AI pode ajudar a transformar sua necessidade em um produto web, SaaS ou automacao com inteligencia artificial.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Falar com a Astute4AI
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300 hover:text-cyan-200"
          >
            Enviar uma ideia de projeto
          </Link>
        </div>
      </div>
    </section>
  );
}
