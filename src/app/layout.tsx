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
  title: "Astute4AI | MVPs, SaaS, automações e soluções digitais com IA",
  description:
    "A Astute4AI transforma ideias, processos e oportunidades em produtos digitais, MVPs, SaaS, automações e aplicações web com inteligência artificial.",
  keywords: [
    "Astute4AI",
    "inteligência artificial para negócios",
    "desenvolvimento SaaS",
    "automação empresarial",
    "aplicações web",
    "sistemas sob medida",
    "agentes de IA",
    "transformação digital",
    "MVP para startups",
    "tecnologia para empresas",
  ],
  openGraph: {
    title: "Astute4AI | MVPs, SaaS, automações e soluções digitais com IA",
    description:
      "A Astute4AI transforma ideias, processos e oportunidades em produtos digitais, MVPs, SaaS, automações e aplicações web com inteligência artificial.",
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
      <body className="min-h-full bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
