import Link from "next/link";
import { contact, navItems, projects } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-slate-950">Astute4AI</p>
          <p className="mt-3 max-w-md text-sm text-slate-700">Soluções digitais com inteligência artificial para negócios reais.</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-sky-700">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">Projetos</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {projects.map((project) => (
              <li key={project.href}>
                <Link href={project.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-700">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-700">
            <Link href={`mailto:${contact.email}`} className="transition-colors hover:text-sky-700">
              {contact.email}
            </Link>
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-6xl text-xs text-slate-500">© 2026 Astute4AI. Todos os direitos reservados.</p>
    </footer>
  );
}
