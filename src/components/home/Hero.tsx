import { SITE } from "../../config/site";
import { WhatsAppLink } from "../cta/WhatsAppLink";

const stats = [
  { value: "18+", label: "anos de mesa" },
  { value: "240+", label: "mandatos" },
  { value: "90+", label: "empresas" },
] as const;

export const Hero = () => (
  <section className="relative overflow-hidden px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20">
    <p
      className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 font-display text-[28vw] font-medium leading-none text-ink/[0.04] select-none"
      aria-hidden="true"
    >
      FOLIO
    </p>

    <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Direito empresarial</p>
        <h1 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          {SITE.tagline}
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          Societário, contratos e M&A para empresas que precisam de clareza antes de assinar — e de
          firmeza depois.
        </p>
        <div className="mt-8">
          <WhatsAppLink message="Olá, gostaria de agendar uma conversa com o Folio Advogados." />
        </div>
        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</dt>
              <dd className="mt-2 font-display text-3xl text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative md:col-span-6">
        <div className="relative mx-auto aspect-[4/5] max-w-md md:max-w-none">
          <img
            src="/media/photos/justice.webp"
            alt="Estátua da Justiça em bronze"
            className="h-full w-full object-contain object-bottom"
            width={720}
            height={900}
          />
          <img
            src="/media/photos/helena.webp"
            alt="Helena Vale, sócia-fundadora do Folio"
            className="absolute right-2 top-4 h-24 w-24 rounded-full object-cover ring-4 ring-cream md:right-8 md:top-8 md:h-32 md:w-32"
            width={128}
            height={128}
          />
          <img
            src="/media/photos/gavel.webp"
            alt=""
            className="absolute bottom-6 left-0 hidden h-20 w-28 rounded-2xl object-cover md:block"
            width={112}
            height={80}
          />
        </div>
      </div>
    </div>
  </section>
);
