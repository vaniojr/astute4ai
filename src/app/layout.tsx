import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astute4AI | Solucoes digitais com IA, SaaS e automacao",
  description:
    "A Astute4AI desenvolve plataformas web, SaaS, automacoes e solucoes com inteligencia artificial para empresas, empreendedores e negocios em crescimento.",
  keywords: [
    "Astute4AI",
    "inteligencia artificial para negocios",
    "desenvolvimento SaaS",
    "automacao empresarial",
    "aplicacoes web",
    "sistemas sob medida",
    "agentes de IA",
    "transformacao digital",
    "MVP para startups",
    "tecnologia para empresas",
  ],
  openGraph: {
    title: "Astute4AI | Solucoes digitais inteligentes",
    description:
      "Transformamos ideias, processos e oportunidades em produtos digitais com IA, SaaS e automacao.",
    type: "website",
    locale: "pt_BR",
    url: "https://astute4ai.com",
    siteName: "Astute4AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
