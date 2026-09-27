import { practiceAreas } from "../../data/areas";
import { ContractIcon, CourtIcon, MergeIcon, ScaleIcon, TaxIcon } from "../ui/Icons";

const icons = {
  scale: ScaleIcon,
  contract: ContractIcon,
  merge: MergeIcon,
  court: CourtIcon,
  tax: TaxIcon,
} as const;

export const PracticeBar = () => (
  <section className="bg-navy" aria-label="Áreas de atuação">
    <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-6 md:px-6">
      {practiceAreas.map((area) => {
        const Icon = icons[area.icon];
        return (
          <li key={area.id} className="flex items-center gap-3 text-cream">
            <Icon className="h-5 w-5 text-cream/70" />
            <span className="text-sm tracking-wide">{area.label}</span>
          </li>
        );
      })}
    </ul>
  </section>
);
