export type TemplateType = "free" | "premium";

export type TemplateCategory =
  | "Restaurant"
  | "Healthcare"
  | "Real Estate"
  | "Fitness"
  | "Salon & Spa"
  | "Beauty"
  | "Fashion"
  | "Education";

export interface Template {
  id: string;
  name: string;
  category: TemplateCategory;
  type: TemplateType;
  popularity: number;
  added: string;
  previewGradient: string;
  image?: string;
}

export const CATEGORIES: TemplateCategory[] = [
  "Restaurant",
  "Healthcare",
  "Real Estate",
  "Fitness",
  "Salon & Spa",
  "Beauty",
  "Fashion",
  "Education",
];
