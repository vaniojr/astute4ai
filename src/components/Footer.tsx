import Link from "next/link";
import { contact, navItems, projects } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-white">Astute4AI</p>
          <p className="mt-3 max-w-md text-sm text-slate-300">Solucoes digitais com inteligencia artificial para negocios reais.</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">Navegacao</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-cyan-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">Projetos</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {projects.map((project) => (
              <li key={project.href}>
                <Link href={project.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan-200">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-300">
            <Link href={`mailto:${contact.email}`} className="transition-colors hover:text-cyan-200">
              {contact.email}
            </Link>
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-6xl text-xs text-slate-500">© 2026 Astute4AI. Todos os direitos reservados.</p>
    </footer>
  );
}
