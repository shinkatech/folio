import { NAV_LINKS, SITE } from "../../config/site";
import { BrandLogo } from "../brand/BrandLogo";

export const Footer = () => (
  <footer className="border-t border-cream/10 bg-navy text-cream">
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <BrandLogo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">{SITE.tagline}</p>
          <p className="mt-3 text-sm text-cream/55">{SITE.address}</p>
          <p className="mt-1 text-sm text-cream/55">{SITE.oab}</p>
        </div>

        <nav className="flex flex-wrap items-center gap-5 text-sm" aria-label="Rodapé">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={0}
              className="text-cream/70 transition hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-16 font-display text-[18vw] leading-none tracking-tight text-cream/10 md:text-[12rem]">
        {SITE.shortName}
      </p>

      <a
        href={SITE.shinkaUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        className="mt-8 inline-flex items-center gap-2.5 text-xs text-cream/50 transition hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
        aria-label={`Desenvolvido por ${SITE.shinkaName} — abre em nova aba`}
      >
        <img src={SITE.shinkaIconSrc} alt="" className="h-6 w-6 rounded-md" width={24} height={24} />
        <span>
          Desenvolvido por <span className="font-medium text-cream">{SITE.shinkaName}</span>
        </span>
      </a>
    </div>
  </footer>
);
