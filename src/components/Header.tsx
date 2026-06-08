"use client";

import Link from "next/link";
import { useState } from "react";
import { contact, navItems } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-base font-semibold tracking-wide text-white">
          Astute4AI
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Fale conosco
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-white/20 px-3 py-2 text-sm text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Alternar menu"
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 px-4 py-4 lg:hidden sm:px-6">
          <nav className="flex flex-col gap-3" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-semibold text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Fale conosco
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}