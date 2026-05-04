import type { FormDef } from "./types";

export const franqueadoForm: FormDef = {
  persona: "franqueado",
  intro: {
    eyebrow: "FORMULÁRIO — QUERO SER FRANQUEADO",
    title: "A Primeira Franquia de Live Commerce do Brasil",
    body:
      "Em 2016, a China lançou o live commerce. Hoje, representa 60% do e-commerce do país — US$ 807 bi/ano em vendas ao vivo. Em maio/2025, o TikTok Shop chegou ao Brasil: saltou de US$ 1mi para US$ 46mi em 3 meses. Crescimento de 4.500%. A LiveLab é a primeira franquia de live commerce do Brasil — você está olhando para ela no início de tudo.",
  },
  steps: [
    {
      kind: "fields",
      title: "Quem é você",
      fields: [
        { id: "nome", label: "Seu nome completo", type: "text", required: true },
        { id: "cidade", label: "Cidade onde gostaria de abrir sua franquia", type: "text", required: true },
        {
          id: "situacao",
          label: "Qual sua situação atual?",
          type: "radio",
          required: true,
          options: [
            "Empregado(a) buscando independência financeira",
            "Já empreendo e busco nova oportunidade",
            "Investidor(a) buscando diversificação",
            "Ambos — empreendo e tenho CLT",
          ],
        },
        {
          id: "experiencia_franquia",
          label: "Já teve experiência com franquias ou negócios próprios?",
          type: "radio",
          required: true,
          options: [
            "Sim, tenho experiência",
            "Não, seria meu primeiro negócio",
            "Já tive, mas não estou operando atualmente",
          ],
        },
        {
          id: "conhece_live_commerce",
          label: "Você conhece o mercado de live commerce?",
          type: "radio",
          required: true,
          options: [
            "Sim, acompanho de perto",
            "Conheço superficialmente",
            "Acabei de descobrir — e fiquei impressionado(a)",
          ],
        },
      ],
    },
    {
      kind: "news",
      title: "Dados de mercado",
      body: [
        "TikTok Shop supera Shein e Sephora nos EUA em 2024. Black Friday: US$ 100 mi em um único dia.",
        "Mercado americano cresce 37% ao ano — maior CAGR entre todas as grandes economias.",
        "Brasil é o 3º maior mercado do TikTok do mundo: 111 mi de usuários, 80% acessam todo dia.",
        "Projeção de R$ 39 bi em GMV até 2028. Não é tendência. É realidade. Está acontecendo agora.",
      ],
    },
    {
      kind: "fields",
      title: "Seu perfil de investidor",
      fields: [
        {
          id: "capital",
          label: "Perfil de capital disponível para investimento",
          type: "radio",
          required: true,
          options: ["Até R$ 40.000", "Entre R$ 40.000 e R$ 80.000", "Acima de R$ 80.000"],
        },
        {
          id: "prazo_inicio",
          label: "Em quanto tempo pretende iniciar?",
          type: "radio",
          required: true,
          options: [
            "Imediatamente — estou pronto(a)",
            "Em 1 a 3 meses",
            "Em 3 a 6 meses",
            "Ainda estou avaliando",
          ],
        },
        {
          id: "espaco_fisico",
          label: "Tem ou consegue um espaço físico para a operação?",
          type: "radio",
          required: true,
          options: [
            "Sim, já tenho um espaço disponível",
            "Não tenho, mas estou procurando",
            "Preciso de orientação",
          ],
        },
        {
          id: "socios",
          label: "Tem sócio(s) para esse negócio?",
          type: "radio",
          required: true,
          options: ["Sim", "Não, seguirei sozinho(a)", "Talvez — ainda avaliando"],
        },
        {
          id: "atrativos",
          label: "O que mais te atrai na LiveLab?",
          type: "checkbox",
          options: [
            "Mercado em crescimento — oceano azul",
            "Baixo investimento com alta lucratividade",
            "Suporte completo e metodologia validada",
            "Ser pioneiro(a) na minha cidade",
            "Payback rápido e receita recorrente",
          ],
        },
        {
          id: "receio",
          label: "Qual seu maior receio em relação ao investimento?",
          type: "textarea",
          placeholder: "Seja honesto — nosso time está aqui para isso",
        },
      ],
    },
    {
      kind: "news",
      title: "Números reais",
      body: [
        "Franquias de baixo investimento com payback abaixo de 12 meses são as mais atrativas (ABF).",
        "3 cabines / 8 clientes → fixo ~R$ 48k/mês + comissão até R$ 96k/mês",
        "5 cabines / 12 clientes → fixo ~R$ 72k/mês + comissão até R$ 144k/mês",
        "10 cabines / 25 clientes → fixo ~R$ 120k/mês + comissão até R$ 300k/mês",
        "Payback médio até 6 meses. Receita recorrente desde o primeiro cliente. Metodologia validada em R$ 10mi+ em GMV.",
      ],
    },
    {
      kind: "fields",
      title: "Seu nível de decisão",
      fields: [
        {
          id: "interesse",
          label: "Após tudo que viu, qual seu nível de interesse?",
          type: "radio",
          required: true,
          options: [
            "Alto — quero conversar com um especialista agora",
            "Médio — quero mais informações antes de decidir",
            "Ainda avaliando — mas quero acompanhar",
          ],
        },
        { id: "whatsapp", label: "WhatsApp com DDD", type: "tel", required: true, placeholder: "(11) 99999-9999" },
        {
          id: "horario",
          label: "Melhor horário para nosso especialista entrar em contato",
          type: "radio",
          required: true,
          options: ["Manhã (8h–12h)", "Tarde (12h–18h)", "Noite (18h–21h)", "Qualquer horário"],
        },
      ],
    },
  ],
  finalScreen: {
    title: "Seu perfil foi recebido!",
    body:
      "Nosso especialista vai analisar suas respostas e entrar em contato em até 24 horas. Em 2016, quem abriu o primeiro estúdio de live commerce na China construiu um império. Em 2025, essa janela está aberta no Brasil — e fecha para os que esperam.",
    ctaLabel: "Falar com especialista agora",
  },
};
