import { services } from "../../data/services";
import { useReveal } from "../../hooks/useReveal";
import { ContractIcon, MergeIcon, ScaleIcon } from "../ui/Icons";

const icons = {
  scale: ScaleIcon,
  contract: ContractIcon,
  merge: MergeIcon,
} as const;

export const Services = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section id="areas" ref={sectionRef} className="reveal scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">O que fazemos</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight tracking-tight text-ink md:text-5xl">
          Três frentes. Nenhum desvio.
        </h2>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <li key={service.id} className="rounded-[1.5rem] border border-line bg-cream-2 p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
