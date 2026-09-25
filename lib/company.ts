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

// Perfil do Google Meu Negócio (CID fornecido pelo cliente).
export const GOOGLE_BUSINESS_CID = "5579591897828166736";
export const MAPS_URL = `https://maps.google.com/?cid=${GOOGLE_BUSINESS_CID}`;
// O embed por CID abre o mapa-múndi; o embed por nome + endereço crava o pino.
const embedQuery = encodeURIComponent(
  `LiveLab, ${COMPANY.address.street}, ${COMPANY.address.district}, ${COMPANY.address.city} - ${COMPANY.address.state}`
);
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${embedQuery}&output=embed`;

export const SOCIAL = {
  googleBusiness: MAPS_URL,
  instagram: "https://www.instagram.com/livelab.br/",
  instagramHandle: "@livelab.br",
} as const;

// Números da operação informados pelo cliente em 2026-09-25 (acumulado).
export const OPERATION = {
  lives: "1.303",
  hours: "3.829",
  gmv: "R$ 1,23 mi",
  brands: "30+",
  asOf: "set/2026",
} as const;

export const PRESS = [
  {
    outlet: "Empreenda News",
    title: "Blumenau tem a primeira estrutura de Live Commerce no Sul",
    url: "https://empreendanews.com.br/noticia/blumenau-tem-a-primeira-estrutura-de-live-commerce-no-sul",
    date: "30 jun 2026",
  },
] as const;
