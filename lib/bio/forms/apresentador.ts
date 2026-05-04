import type { FormDef } from "./types";

export const apresentadorForm: FormDef = {
  persona: "apresentador",
  intro: {
    eyebrow: "CANDIDATURA — APRESENTADOR(A)",
    title: "Seja a voz de marcas que vendem milhões ao vivo",
    body:
      "Esse formulário substitui o currículo. Preencha com atenção — cada campo conta na avaliação do seu perfil.",
  },
  steps: [
    {
      kind: "fields",
      title: "Quem é você",
      fields: [
        { id: "nome", label: "Nome completo", type: "text", required: true },
        { id: "cidade_estado", label: "Cidade / Estado", type: "text", required: true },
        { id: "idade", label: "Idade", type: "text", required: true, placeholder: "Ex: 28" },
        { id: "whatsapp", label: "WhatsApp com DDD", type: "tel", required: true, placeholder: "(11) 99999-9999" },
        { id: "email", label: "E-mail", type: "email", required: true },
        {
          id: "extrovertido",
          label: "Você se considera extrovertido(a)?",
          type: "radio",
          required: true,
          options: [
            "Sim, claramente — adoro ser o centro das atenções",
            "Sou comunicativo(a) dependendo do ambiente",
            "Sou mais reservado(a), mas me solto na frente da câmera",
            "Estou desenvolvendo essa habilidade",
          ],
        },
        {
          id: "energia",
          label: "Como descreveria sua energia em câmera?",
          type: "radio",
          required: true,
          options: [
            "Alta energia — animado(a), acelerado(a), contagiante",
            "Técnico(a) e persuasivo(a) — mais informação que emoção",
            "Equilibrado(a) — adapto ao produto e ao público",
            "Ainda estou descobrindo meu estilo",
          ],
        },
      ],
    },
    {
      kind: "fields",
      title: "Sua experiência",
      fields: [
        {
          id: "ja_faz_lives",
          label: "Já faz lives? Em qual plataforma?",
          type: "radio",
          required: true,
          options: [
            "Sim, regularmente no TikTok",
            "Sim, regularmente no Instagram",
            "Sim, em mais de uma plataforma",
            "Já fiz, mas parei",
            "Nunca fiz — mas quero começar",
          ],
        },
        {
          id: "maior_resultado",
          label: "Maior resultado em lives",
          type: "textarea",
          placeholder: "Vendas geradas, espectadores, engajamento. Se nunca fez, escreva: \"Nunca fiz lives ainda.\"",
          required: true,
        },
        {
          id: "exp_vendas",
          label: "Experiência com vendas, atendimento ou varejo?",
          type: "radio",
          required: true,
          options: [
            "Sim, trabalhei diretamente com vendas",
            "Sim, atendimento ao cliente",
            "Sim, varejo presencial",
            "Não tenho experiência formal, mas tenho facilidade natural",
            "Não tenho experiência na área",
          ],
        },
        {
          id: "historico",
          label: "Histórico profissional e experiências relevantes",
          type: "textarea",
          required: true,
          placeholder: "Empregos, freelas, projetos, cursos. Isso substitui o currículo.",
        },
      ],
    },
    {
      kind: "fields",
      title: "Seu perfil como apresentador",
      fields: [
        {
          id: "segmentos",
          label: "Quais segmentos mais domina?",
          type: "checkbox",
          options: [
            "Moda e vestuário",
            "Beleza e cosméticos",
            "Casa e decoração",
            "Tecnologia e eletrônicos",
            "Alimentos e bebidas",
            "Esporte e bem-estar",
            "Games e entretenimento",
            "Outros",
          ],
        },
        {
          id: "tem_audiencia",
          label: "Tem seguidores nas redes sociais?",
          type: "radio",
          required: true,
          options: [
            "Sim, tenho audiência relevante",
            "Tenho perfis mas poucos seguidores",
            "Não tenho — foco em resultado, não em seguidor",
          ],
        },
        { id: "redes_seguidores", label: "Onde e quantos seguidores?", type: "text", placeholder: "TikTok, Instagram, YouTube etc." },
        {
          id: "deslocamento",
          label: "Consegue trabalhar presencialmente em estúdio?",
          type: "radio",
          required: true,
          options: ["Sim, sem problema", "Sim, mas depende da localização", "Tenho limitações — quero entender melhor"],
        },
        {
          id: "disponibilidade",
          label: "Disponibilidade de horários",
          type: "radio",
          required: true,
          options: [
            "Integral — qualquer horário",
            "Manhã e tarde (até 18h)",
            "Tarde e noite (a partir de 13h)",
            "Somente alguns dias da semana — flexível",
            "Fins de semana também",
          ],
        },
      ],
    },
    {
      kind: "fields",
      title: "Portfólio",
      fields: [
        { id: "tiktok_ig", label: "Seu TikTok e seu Instagram", type: "text", required: true, placeholder: "@usuario_tiktok / @usuario_ig" },
        {
          id: "link_video",
          label: "Link de live, vídeo ou apresentação sua",
          type: "text",
          placeholder: "Pode ser qualquer coisa que mostre você falando em câmera. Se não tiver, escreva: \"Não tenho ainda.\"",
          required: true,
        },
      ],
    },
    {
      kind: "fields",
      title: "A pergunta mais importante",
      fields: [
        {
          id: "pitch_30s",
          label: "Se tivesse 30 segundos ao vivo agora para se apresentar à LiveLab, o que diria?",
          type: "textarea",
          required: true,
          placeholder: "Escreva exatamente como falaria. Mesma energia, ritmo, personalidade.",
        },
        {
          id: "por_que_contratar",
          label: "Por que a LiveLab deveria te contratar?",
          type: "textarea",
          required: true,
          placeholder: "Sem modéstia. Nos convença. O que te torna diferente.",
        },
      ],
    },
  ],
  finalScreen: {
    title: "Candidatura recebida!",
    body:
      "Nossa equipe avalia seu perfil com atenção e entra em contato com os próximos passos. Candidatos selecionados serão chamados para uma avaliação ao vivo — esteja preparado(a).",
    ctaLabel: "Falar com Lucas no WhatsApp",
  },
};
