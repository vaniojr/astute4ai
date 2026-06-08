export function About() {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Sobre a Astute4AI</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Transformamos estrategia em produto digital com impacto real.</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-slate-200 shadow-xl sm:p-8">
          <p className="leading-relaxed">
            A Astute4AI e uma iniciativa focada no desenvolvimento de solucoes digitais inteligentes para empresas, empreendedores e projetos em fase inicial ou em expansao.
          </p>
          <p className="mt-4 leading-relaxed">
            Combinamos estrategia, tecnologia e inteligencia artificial para criar produtos digitais uteis, escalaveis e conectados com necessidades reais de mercado.
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            <li>Desenvolvimento sob medida</li>
            <li>Criacao de SaaS</li>
            <li>Automacao de processos</li>
            <li>Uso pratico de IA</li>
            <li>Prototipacao rapida</li>
            <li>MVPs funcionais</li>
            <li>Foco em resultado comercial</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
