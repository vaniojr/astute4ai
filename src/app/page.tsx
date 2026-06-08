import { About } from "@/components/About";
import { Audience } from "@/components/Audience";
import { ContactCTA } from "@/components/ContactCTA";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Solutions } from "@/components/Solutions";

export default function Home() {
  return (
    <div className="relative">
      <a href="#inicio" className="sr-only focus:not-sr-only">
        Ir para o conteudo principal
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Projects />
        <Process />
        <Audience />
        <Differentials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
