export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "scale" | "contract" | "merge";
};

export const services: Service[] = [
  {
    id: "societario",
    title: "Societário e governança",
    description:
      "Constituição, acordos de sócios e conselhos com regras claras — para a empresa crescer sem ruído interno.",
    icon: "scale",
  },
  {
    id: "contratos",
    title: "Contratos empresariais",
    description:
      "Operação, fornecedores e parcerias com risco alocado com precisão. Texto que se sustenta quando a relação muda.",
    icon: "contract",
  },
  {
    id: "ma",
    title: "Fusões e aquisições",
    description:
      "Due diligence, estruturação e fechamento. Acompanhamos a transação do primeiro term sheet ao closing.",
    icon: "merge",
  },
];
