export function About() {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Sobre a Astute4AI</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Transformamos ideias, processos e oportunidades em produtos digitais prontos para crescer.</h2>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-xl sm:p-8">
          <p className="leading-relaxed">
            A Astute4AI é uma iniciativa focada no desenvolvimento de soluções digitais inteligentes para empresas, empreendedores e projetos em fase inicial ou em expansão.
          </p>
          <p className="mt-4 leading-relaxed">
            Combinamos estratégia, tecnologia e inteligência artificial para criar produtos digitais úteis, escaláveis e conectados com necessidades reais de mercado.
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            <li>Desenvolvimento sob medida</li>
            <li>Criação de SaaS</li>
            <li>Automação de processos</li>
            <li>Uso prático de IA</li>
            <li>Prototipação rápida</li>
            <li>MVPs funcionais</li>
            <li>Foco em resultado comercial</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
