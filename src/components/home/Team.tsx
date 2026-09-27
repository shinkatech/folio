import { partners } from "../../data/team";
import { useReveal } from "../../hooks/useReveal";

export const Team = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section id="equipe" ref={sectionRef} className="reveal scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Quem assina</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight tracking-tight text-ink md:text-5xl">
          Sócios na mesa. Sem rodízio de estagiário.
        </h2>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <li key={partner.slug} className="overflow-hidden rounded-[1.5rem] bg-navy">
              <img
                src={partner.photoSrc}
                alt={`Retrato de ${partner.name}`}
                className="aspect-[3/4] w-full object-cover"
                width={480}
                height={640}
              />
              <div className="px-6 py-5">
                <h3 className="font-display text-2xl text-cream">{partner.name}</h3>
                <p className="mt-1 text-sm text-cream/60">{partner.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
