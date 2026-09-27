import { SITE } from "../../config/site";

type BrandLogoProps = {
  className?: string;
  inverted?: boolean;
};

export const BrandLogo = ({ className = "", inverted = false }: BrandLogoProps) => (
  <a
    href="#topo"
    className={`inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${className}`}
    aria-label={`${SITE.name} — voltar ao início`}
    tabIndex={0}
  >
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-full border ${
        inverted ? "border-cream/30 text-cream" : "border-ink/15 text-ink"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M12 3v14M8 21h8M5 9h14M7 9l-2.5 5h5L7 9Zm10 0-2.5 5h5L17 9Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className={`font-display text-xl tracking-tight ${inverted ? "text-cream" : "text-ink"}`}>
      {SITE.shortName}
    </span>
  </a>
);
