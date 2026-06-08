export function ContactForm() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Formulário rápido</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Conte seu projeto em poucos passos</h2>
        <p className="mt-3 text-sm text-slate-700">
          Preencha as informações abaixo para receber uma avaliação inicial da Astute4AI.
        </p>

        <form className="mt-8 grid gap-5" action={`mailto:contato@astute4ai.com`} method="post" encType="text/plain">
          <div className="grid gap-2">
            <label htmlFor="nome" className="text-sm font-medium text-slate-800">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="Seu nome"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="whatsapp" className="text-sm font-medium text-slate-800">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="tipo" className="text-sm font-medium text-slate-800">
              Tipo de projeto
            </label>
            <select
              id="tipo"
              name="tipo"
              required
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="MVP">MVP</option>
              <option value="SaaS">SaaS</option>
              <option value="Automação">Automação</option>
              <option value="Aplicação web">Aplicação web</option>
              <option value="Agente de IA">Agente de IA</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="descricao" className="text-sm font-medium text-slate-800">
              Descrição da ideia
            </label>
            <textarea
              id="descricao"
              name="descricao"
              required
              rows={4}
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="Explique o que você quer criar, automatizar ou melhorar."
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="estagio" className="text-sm font-medium text-slate-800">
              Estágio atual do projeto
            </label>
            <select
              id="estagio"
              name="estagio"
              required
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="Ideia inicial">Ideia inicial</option>
              <option value="Protótipo">Protótipo</option>
              <option value="MVP em andamento">MVP em andamento</option>
              <option value="Produto em operação">Produto em operação</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Solicitar diagnóstico gratuito
          </button>
        </form>
      </div>
    </section>
  );
}
