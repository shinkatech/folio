import { useState, type FormEvent } from "react";
import { buildWhatsAppUrl, SITE } from "../../config/site";
import { useReveal } from "../../hooks/useReveal";
import { Button } from "../ui/Button";

export const Contact = () => {
  const sectionRef = useReveal<HTMLElement>();
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) return;

    const text = `Olá, sou ${name} (${email}). ${message}`;
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="reveal scroll-mt-24 bg-navy px-4 py-20 text-cream md:px-6 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/50">Contato</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-5xl">
            Tem uma decisão na mesa?
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/65">
            Conte o contexto em poucas linhas. Um sócio responde — sem formulário eterno e sem
            promessa que o escritório não pode cumprir.
          </p>
          <p className="mt-6 text-sm text-cream/50">{SITE.email}</p>
        </div>

        <form
          className="rounded-[1.5rem] border border-cream/10 bg-ink/40 p-6 md:p-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="block text-sm text-cream/70" htmlFor="name">
            Nome
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-2 w-full rounded-2xl border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
              placeholder="Seu nome"
            />
          </label>
          <label className="mt-4 block text-sm text-cream/70" htmlFor="email">
            E-mail
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 w-full rounded-2xl border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
              placeholder="voce@empresa.com"
            />
          </label>
          <label className="mt-4 block text-sm text-cream/70" htmlFor="message">
            Mensagem
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-2 w-full resize-y rounded-2xl border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
              placeholder="O que está em jogo?"
            />
          </label>
          <Button type="submit" variant="light" className="mt-6 w-full focus-visible:ring-offset-navy">
            Enviar pelo WhatsApp
          </Button>
          {sent ? (
            <p className="mt-3 text-center text-sm text-cream/60" role="status">
              Abrimos o WhatsApp com a sua mensagem.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};
