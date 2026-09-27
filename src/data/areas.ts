export type PracticeArea = {
  id: string;
  label: string;
  icon: "scale" | "contract" | "merge" | "court" | "tax";
};

export const practiceAreas: PracticeArea[] = [
  { id: "societario", label: "Societário", icon: "scale" },
  { id: "contratos", label: "Contratos", icon: "contract" },
  { id: "ma", label: "M&A", icon: "merge" },
  { id: "contencioso", label: "Contencioso", icon: "court" },
  { id: "tributario", label: "Tributário", icon: "tax" },
];
