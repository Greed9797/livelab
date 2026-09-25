export const WHATSAPP_PHONE = "5568992523482";
export const WHATSAPP_DISPLAY = "+55 68 99252-3482";

function buildWhatsappUrl(message?: string) {
  const url = new URL(`https://wa.me/${WHATSAPP_PHONE}`);

  if (message) {
    url.searchParams.set("text", message);
  }

  return url.toString();
}

// Mensagens da home começam com "Vi o site" para separar o lead do site do lead da bio
// (a bio monta as próprias mensagens em lib/bio/links.ts e só importa WHATSAPP_PHONE daqui).
export const WHATSAPP_URL = buildWhatsappUrl(
  "Oi! Vi o site da LiveLab e quero tirar uma dúvida."
);
export const WHATSAPP_SALES_URL = buildWhatsappUrl(
  "Oi! Vi o site e quero vender em live com a LiveLab. Minha marca é: "
);
export const WHATSAPP_FRANCHISE_URL = buildWhatsappUrl(
  "Oi! Vi o site e quero abrir uma LiveLab. Minha cidade é: "
);
export const WHATSAPP_FRANCHISE_INVEST_URL = buildWhatsappUrl(
  "Oi! Vi o site e quero entender o investimento pra abrir uma LiveLab. Minha cidade é: "
);
