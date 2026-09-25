import { WHATSAPP_DISPLAY, WHATSAPP_PHONE } from "@/lib/contact";

// Dados do Comprovante de Inscrição (Receita Federal). Fonte única para rodapé, contato e schema.
export const COMPANY = {
  legalName: "LIVELAB FRANCHISING LTDA",
  brand: "LiveLab",
  cnpj: "66.390.001/0001-06",
  foundingDate: "2026-04-22",
  email: "contato@grupolivelab.com.br",
  phone: `+${WHATSAPP_PHONE}`,
  phoneDisplay: WHATSAPP_DISPLAY,
  address: {
    street: "R. Buenos Aires, 145, Térreo",
    district: "Ponta Aguda",
    city: "Blumenau",
    state: "SC",
    postalCode: "89051-050",
  },
} as const;

export const COMPANY_ADDRESS_LINE = `${COMPANY.address.street} · ${COMPANY.address.district} · ${COMPANY.address.city}/${COMPANY.address.state} · CEP ${COMPANY.address.postalCode}`;

const mapsQuery = encodeURIComponent(
  `${COMPANY.address.street}, ${COMPANY.address.district}, ${COMPANY.address.city} - ${COMPANY.address.state}, ${COMPANY.address.postalCode}`
);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
