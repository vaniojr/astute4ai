import Link from "next/link";
import { contact, heroTags } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-24">
      <div className="hero-orb hero-orb--one" aria-hidden />
      <div className="hero-orb hero-orb--two" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Tecnologia aplicada ao crescimento
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Solucoes digitais com IA para transformar ideias em negocios reais.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            A Astute4AI cria plataformas web, SaaS, automacoes e experiencias digitais inteligentes para empresas que querem vender mais, operar melhor e escalar com tecnologia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Quero criar meu projeto
            </Link>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300 hover:text-cyan-200"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Stack Astute4AI</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {heroTags.map((tag) => (
                <div
                  key={tag}
                  className="floating-card rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 text-center text-sm font-medium text-slate-100"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/15 bg-slate-900/80 p-4">
              <p className="text-sm text-slate-300">Do prototipo ao SaaS, ajudamos negocios a sair do papel com velocidade e foco comercial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
