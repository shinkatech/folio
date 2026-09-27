import { useState, type KeyboardEvent } from "react";
import { NAV_LINKS } from "../../config/site";
import { BrandLogo } from "../brand/BrandLogo";
import { WhatsAppLink } from "../cta/WhatsAppLink";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => setOpen((value) => !value);
  const handleCloseMenu = () => setOpen(false);

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleToggleMenu();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <BrandLogo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={0}
              className="text-sm text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            >
              {link.label}
            </a>
          ))}
          <WhatsAppLink message="Olá, gostaria de agendar uma conversa com o Folio Advogados." />
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          tabIndex={0}
          onClick={handleToggleMenu}
          onKeyDown={handleToggleKeyDown}
        >
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line px-4 py-5 md:hidden" aria-label="Menu mobile">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  tabIndex={0}
                  onClick={handleCloseMenu}
                  className="text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <WhatsAppLink
                className="w-full"
                message="Olá, gostaria de agendar uma conversa com o Folio Advogados."
              />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
