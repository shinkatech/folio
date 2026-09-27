export const SITE = {
  name: "Folio Advogados",
  shortName: "Folio",
  tagline: "Excelência jurídica a serviço de quem decide.",
  whatsapp: "5511999999999",
  email: "contato@folioadvogados.com.br",
  address: "Av. Brigadeiro Faria Lima, 3477 — Itaim Bibi, São Paulo/SP",
  oab: "OAB/SP 000.000",
  shinkaName: "ShinkaTech",
  shinkaUrl: "https://www.shinkatech.com.br/",
  shinkaIconSrc: "/media/brand/shinka.svg",
} as const;

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
] as const;

export const buildWhatsAppUrl = (message: string) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
};
