import { useReveal } from "../../hooks/useReveal";
import { WhatsAppLink } from "../cta/WhatsAppLink";

export const About = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section id="sobre" ref={sectionRef} className="reveal scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <img
            src="/media/photos/helena.webp"
            alt="Helena Vale, sócia-fundadora do Folio Advogados"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top"
            width={720}
            height={900}
          />
          <img
            src="/media/photos/about.webp"
            alt=""
            className="absolute -bottom-6 -right-2 hidden h-28 w-40 rounded-2xl object-cover ring-8 ring-cream md:block"
            width={160}
            height={112}
          />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Sobre o escritório</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink md:text-5xl">
            O parceiro certo para a decisão certa
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            O Folio é um escritório boutique. Atendemos um número reduzido de empresas — com a
            disciplina de um conselho e sem o teatro de um escritório gigante. Cada mandato tem sócio
            na mesa, do primeiro rascunho ao closing.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Trabalhamos com societário, contratos e transações. Se o caso pede volume ou outra
            especialidade, indicamos. Preferimos recusar a diluir o padrão.
          </p>
          <div className="mt-8">
            <WhatsAppLink
              variant="ghost"
              label="Falar com um sócio"
              message="Olá, gostaria de conversar com um sócio do Folio Advogados."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
