export type Partner = {
  slug: string;
  name: string;
  role: string;
  photoSrc: string;
};

export const partners: Partner[] = [
  {
    slug: "helena-vale",
    name: "Helena Vale",
    role: "Sócia-fundadora · Societário",
    photoSrc: "/media/photos/helena.webp",
  },
  {
    slug: "ricardo-leme",
    name: "Ricardo Leme",
    role: "Sócio · M&A",
    photoSrc: "/media/photos/ricardo.webp",
  },
  {
    slug: "marina-costa",
    name: "Marina Costa",
    role: "Sócia · Contratos",
    photoSrc: "/media/photos/marina.webp",
  },
];
