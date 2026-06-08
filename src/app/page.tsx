import { About } from "@/components/About";
import { Audience } from "@/components/Audience";
import { ContactCTA } from "@/components/ContactCTA";
import { DiagnosisOffer } from "@/components/DiagnosisOffer";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProjectTypes } from "@/components/ProjectTypes";
import { Projects } from "@/components/Projects";
import { Solutions } from "@/components/Solutions";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <div className="relative">
      <a href="#inicio" className="sr-only focus:not-sr-only">
        Ir para o conteúdo principal
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <DiagnosisOffer />
        <Solutions />
        <ProjectTypes />
        <Projects />
        <Trust />
        <Process />
        <Audience />
        <Differentials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
