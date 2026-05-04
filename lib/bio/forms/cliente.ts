import type { FormDef } from "./types";

export const clienteForm: FormDef = {
  persona: "cliente",
  intro: {
    eyebrow: "FORMULÁRIO — QUERO SER CLIENTE",
    title: "Marcas que fazem lives vendem 10x mais",
    body:
      "Preencha abaixo que iremos realizar um estudo para te retornar sobre sua operação de live commerce.",
  },
  steps: [
    {
      kind: "fields",
      title: "Sua marca",
      fields: [
        { id: "nome", label: "Seu nome completo", type: "text", required: true },
        { id: "marca", label: "Nome da empresa/marca", type: "text", required: true },
        { id: "social", label: "Instagram / TikTok", type: "text", required: true, placeholder: "@suamarca" },
        { id: "whatsapp", label: "WhatsApp com DDD", type: "tel", required: true, placeholder: "(11) 99999-9999" },
        {
          id: "segmento",
          label: "Segmento e principais produtos",
          type: "radio",
          required: true,
          options: [
            "Moda e vestuário",
            "Beleza e cosméticos",
            "Casa e decoração",
            "Alimentos e bebidas",
            "Saúde e Bem Estar",
            "Outro",
          ],
        },
        {
          id: "tiktok_shop",
          label: "Já tem conta ativa no TikTok Shop?",
          type: "radio",
          required: true,
          options: ["Sim, já vendo", "Não ainda", "Preciso criar"],
        },
      ],
    },
    {
      kind: "news",
      title: "O mercado em movimento",
      body: [
        "Brasil: 3º maior mercado do TikTok do mundo. 111 mi de usuários, 80% diariamente.",
        "Tempo médio diário no app: 1h35min. Maior que YouTube e Instagram combinados.",
        "Live commerce projeta R$ 39 bi em GMV até 2028 no Brasil.",
      ],
    },
    {
      kind: "fields",
      title: "Sua operação atual",
      fields: [
        {
          id: "frequencia_lives",
          label: "Com que frequência você faz lives hoje?",
          type: "radio",
          required: true,
          options: [
            "Nunca fiz",
            "Já tentei, mas parei",
            "Algumas vezes por mês",
            "1–2x por semana",
            "3x ou mais por semana",
          ],
        },
        {
          id: "fat_por_live",
          label: "Faturamento médio por live",
          type: "radio",
          required: true,
          options: ["Não faço lives", "Até R$ 1.000", "R$ 1.000 – R$ 5.000", "Acima de R$ 5.000"],
        },
        {
          id: "fat_mensal",
          label: "Faturamento mensal total no TikTok Shop",
          type: "radio",
          required: true,
          options: [
            "Ainda não tenho",
            "Até R$ 50.000",
            "R$ 50.000 – R$ 100.000",
            "R$ 100.000 – R$ 500.000",
            "Acima de R$ 500.000",
          ],
        },
        {
          id: "influenciadores",
          label: "Investe em influenciador/afiliados atualmente?",
          type: "radio",
          required: true,
          options: [
            "Sim, tenho influenciadores/afiliados ativos",
            "Não, improviso com quem está disponível",
            "Às vezes contrato alguém",
            "Nunca fiz trabalhos assim",
          ],
        },
      ],
    },
    {
      kind: "fields",
      title: "Seus desafios",
      fields: [
        {
          id: "desafio",
          label: "Principal desafio de vendas em lives?",
          type: "radio",
          required: true,
          options: [
            "Falta de estrutura profissional (iluminação, câmera, cabine)",
            "Falta de apresentador(a) capacitado(a)",
            "Falta de conhecimento e estratégia",
            "Falta de tempo para operar",
            "Resultado abaixo do esperado",
            "Ainda não comecei — não sei informar",
          ],
        },
        {
          id: "objetivo",
          label: "Qual seu principal objetivo com live commerce nos próximos 3 meses?",
          type: "textarea",
          required: true,
          placeholder: "Seja específico — isso define nosso diagnóstico",
        },
        { id: "cidade", label: "Qual cidade você está?", type: "text", required: true, helper: "Verificamos disponibilidade na sua região" },
      ],
    },
  ],
  finalScreen: {
    title: "Diagnóstico solicitado!",
    body:
      "Nossa equipe analisa suas respostas e entra em contato em até 24 horas com um plano personalizado para sua operação.",
    ctaLabel: "Falar com especialista agora",
  },
};
