export type Persona = "cliente" | "franqueado" | "apresentador";

export const CONTACTS: Record<Persona, { name: string; phone: string }> = {
  cliente: { name: "Léo", phone: "5547989117580" },
  franqueado: { name: "Luan", phone: "5527997473956" },
  apresentador: { name: "Lucas", phone: "5568992523482" },
};

export function buildWhatsappUrl(persona: Persona, leadName: string): string {
  const c = CONTACTS[persona];
  const messages: Record<Persona, string> = {
    cliente: `Olá ${c.name}! Sou ${leadName} e acabei de preencher o formulário de cliente LiveLab. Quero conversar sobre live commerce.`,
    franqueado: `Olá ${c.name}! Sou ${leadName} e acabei de preencher o formulário de franqueado LiveLab. Quero conhecer melhor a oportunidade.`,
    apresentador: `Olá ${c.name}! Sou ${leadName} e acabei de me candidatar como apresentador(a) na LiveLab.`,
  };
  return `https://wa.me/${c.phone}?text=${encodeURIComponent(messages[persona])}`;
}
