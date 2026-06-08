import Link from "next/link";
import { contact, heroTags } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-24">
      <div className="hero-orb hero-orb--one" aria-hidden />
      <div className="hero-orb hero-orb--two" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center rounded-full border border-sky-300/50 bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800">
            MVPs, SaaS e IA para negócios
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Transformamos ideias em MVPs, SaaS e automações com IA.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            A Astute4AI cria produtos digitais, aplicações web e soluções inteligentes para empresas e empreendedores que querem validar, vender e escalar com tecnologia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Solicitar diagnóstico gratuito
            </Link>
            <Link
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:text-sky-700"
            >
              Avaliar minha ideia
            </Link>
            <Link
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:text-sky-700"
            >
              Quero criar meu SaaS
            </Link>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:text-sky-700"
            >
              Conhecer projetos
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-2xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Como entregamos valor</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {heroTags.map((tag) => (
                <div
                  key={tag}
                  className="floating-card rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-center text-sm font-medium text-sky-900"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-700">Transformamos ideias, processos e oportunidades em soluções digitais focadas em validação, receita e crescimento.</p>
            </div>
            <Link
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Quero automatizar meu negócio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
