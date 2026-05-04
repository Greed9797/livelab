export type FieldType = "text" | "textarea" | "tel" | "email" | "radio" | "checkbox";

export interface FieldDef {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  helper?: string;
}

export interface NewsBlock {
  kind: "news";
  title: string;
  body: string[];
}

export interface FieldsBlock {
  kind: "fields";
  title: string;
  fields: FieldDef[];
}

export type Step = NewsBlock | FieldsBlock;

export interface FormDef {
  persona: import("../whatsapp").Persona;
  intro: { eyebrow: string; title: string; body: string };
  steps: Step[];
  finalScreen: { title: string; body: string; ctaLabel: string };
}

export type FormValues = Record<string, string | string[]>;
