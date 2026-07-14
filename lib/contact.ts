export const WHATSAPP_PHONE = "5568992523482";
export const WHATSAPP_DISPLAY = "+55 68 99252-3482";

function buildWhatsappUrl(message?: string) {
  const url = new URL(`https://wa.me/${WHATSAPP_PHONE}`);

  if (message) {
    url.searchParams.set("text", message);
  }

  return url.toString();
}

export const WHATSAPP_URL = buildWhatsappUrl();
export const WHATSAPP_FRANCHISE_URL = buildWhatsappUrl(
  "Quero franquear a Livelab"
);
export const WHATSAPP_SALES_URL = buildWhatsappUrl(
  "Quero vender ao vivo com a Livelab"
);
