import type { PortfolioData } from '../types';

/**
 * Central de dados do portfólio.
 *
 * Este é o único arquivo que precisa ser editado para atualizar o site:
 * nome, trajetória, competências, projetos e canais de contato. Nenhum
 * componente ou estilo precisa ser tocado.
 *
 * Todo texto de conteúdo é bilíngue: `{ pt: '...', en: '...' }`.
 * Os valores entre colchetes são apenas marcadores e devem ser substituídos.
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: '[NOME PROFISSIONAL]',
    initials: '[IN]',
    role: {
      pt: '[PROFISSÃO / ESPECIALIDADE]',
      en: '[ROLE / SPECIALTY]',
    },
    availability: {
      pt: '[DISPONIBILIDADE]',
      en: '[AVAILABILITY]',
    },
    location: {
      pt: '[LOCALIZAÇÃO]',
      en: '[LOCATION]',
    },
    summary: {
      pt: '[Breve descrição da atuação profissional atual e direcionamento de carreira.]',
      en: '[Short description of the current professional work and career direction.]',
    },
    intro: {
      pt: '[Explicação mais completa sobre a área de atuação, contexto do momento profissional atual, principais interesses e tipo de oportunidade de interesse.]',
      en: '[Fuller explanation of the field of work, current professional moment, main interests and the kind of opportunity of interest.]',
    },
    email: '[E-MAIL PROFISSIONAL]',
    cvUrl: '/curriculo.pdf',
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: '[URL DO LINKEDIN]',
        purpose: { pt: 'Rede profissional', en: 'Professional network' },
      },
      {
        platform: 'GitHub',
        url: '[URL DO GITHUB]',
        purpose: { pt: 'Repositórios e código', en: 'Repositories and code' },
      },
    ],
  },

  about: {
    // Da experiência mais recente para a mais antiga.
    experiences: [
      {
        period: '[PERÍODO]',
        role: { pt: '[CARGO OU FUNÇÃO]', en: '[ROLE OR POSITION]' },
        company: '[EMPRESA OU CONTEXTO]',
        description: {
          pt: '[Principais responsabilidades, projetos, produtos ou segmentos em que houve atuação.]',
          en: '[Main responsibilities, projects, products or segments worked on.]',
        },
      },
    ],

    // Uma categoria por bloco: linguagens, frameworks, bancos, testes...
    skillCategories: [
      {
        label: { pt: '[CATEGORIA — EX.: LINGUAGENS]', en: '[CATEGORY — E.G. LANGUAGES]' },
        skills: [{ name: '[TECNOLOGIA]' }],
      },
      {
        label: { pt: '[CATEGORIA — EX.: FRAMEWORKS]', en: '[CATEGORY — E.G. FRAMEWORKS]' },
        skills: [{ name: '[TECNOLOGIA]' }],
      },
    ],

    workPrinciples: [
      {
        title: { pt: '[CARACTERÍSTICA]', en: '[TRAIT]' },
        description: {
          pt: '[Descrição fornecida pelo desenvolvedor.]',
          en: '[Description provided by the developer.]',
        },
      },
    ],

    education: [
      {
        title: { pt: '[FORMAÇÃO ACADÊMICA]', en: '[ACADEMIC BACKGROUND]' },
        institution: '[INSTITUIÇÃO]',
        period: '[PERÍODO]',
      },
    ],

    certifications: [
      {
        title: { pt: '[CERTIFICAÇÃO]', en: '[CERTIFICATION]' },
        issuer: '[EMISSOR]',
        year: '[ANO]',
      },
    ],

    goals: {
      pt: '[Áreas em que deseja evoluir, tipos de projeto de interesse e direcionamento desejado para a carreira.]',
      en: '[Areas to grow in, kinds of projects of interest and the desired career direction.]',
    },
  },

  /**
   * Cada projeto vira um card na listagem e uma página em /projetos/:slug.
   * `highlight` controla o tamanho do card: 'large' (4 colunas),
   * 'wide' (3 colunas) ou 'medium' (2 colunas).
   */
  projects: [
    {
      slug: 'projeto-01',
      name: '[PROJETO 01]',
      category: { pt: '[CATEGORIA]', en: '[CATEGORY]' },
      status: { pt: '[STATUS]', en: '[STATUS]' },
      summary: {
        pt: '[Descrição curta e objetivo principal do projeto.]',
        en: '[Short description and main goal of the project.]',
      },
      stack: ['[TECNOLOGIA]', '[TECNOLOGIA]', '[TECNOLOGIA]'],
      repoUrl: '[URL DO REPOSITÓRIO]',
      liveUrl: '[URL DA APLICAÇÃO]',
      cover: {
        src: '',
        alt: { pt: '[Imagem do projeto 01]', en: '[Project 01 image]' },
      },
      highlight: 'large',
      detail: {
        context: [
          {
            pt: '[O que é o projeto e qual problema ele resolve.]',
            en: '[What the project is and which problem it solves.]',
          },
          {
            pt: '[Para quem foi desenvolvido e qual era o objetivo principal.]',
            en: '[Who it was built for and what the main goal was.]',
          },
        ],
        role: [
          {
            pt: '[Responsabilidades assumidas e partes desenvolvidas.]',
            en: '[Responsibilities taken on and parts developed.]',
          },
          {
            pt: '[Trabalho individual ou colaborativo e principais decisões técnicas.]',
            en: '[Individual or collaborative work and main technical decisions.]',
          },
        ],
        technologies: [
          {
            name: '[TECNOLOGIA]',
            role: { pt: '[Função no projeto.]', en: '[Role in the project.]' },
          },
        ],
        architecture: {
          structure: { pt: '[ESTRUTURA UTILIZADA]', en: '[STRUCTURE USED]' },
          integrations: { pt: '[SERVIÇOS EXTERNOS]', en: '[EXTERNAL SERVICES]' },
          deploy: { pt: '[HOSPEDAGEM]', en: '[HOSTING]' },
        },
        features: [
          { pt: '[FUNCIONALIDADE PRINCIPAL]', en: '[MAIN FEATURE]' },
          { pt: '[FLUXO IMPORTANTE]', en: '[KEY FLOW]' },
          { pt: '[DIFERENCIAL TÉCNICO]', en: '[TECHNICAL DIFFERENTIATOR]' },
        ],
        challenges: [
          {
            challenge: {
              pt: '[Dificuldade encontrada e como foi analisada.]',
              en: '[Difficulty found and how it was analysed.]',
            },
            solution: {
              pt: '[Solução implementada, alternativas consideradas e aprendizados.]',
              en: '[Solution implemented, alternatives considered and lessons learned.]',
            },
          },
        ],
        results: {
          pt: '[Resultados técnicos e para usuários, conforme informado pelo desenvolvedor. Métricas apenas quando existirem dados.]',
          en: '[Technical and user-facing results as informed by the developer. Metrics only when data exists.]',
        },
        // Preencher apenas se houve uso de IA no projeto; caso contrário, `null`.
        ai: {
          tools: {
            pt: '[Ferramentas utilizadas, etapas e tipo de apoio: pesquisa, planejamento, geração de código, refatoração, testes, documentação ou revisão.]',
            en: '[Tools used, stages and type of support: research, planning, code generation, refactoring, testing, documentation or review.]',
          },
          review: {
            pt: '[Partes revisadas e validadas pelo desenvolvedor e decisões técnicas assumidas.]',
            en: '[Parts reviewed and validated by the developer and technical decisions taken.]',
          },
          // Só informe um número quando houver estimativa real e explicada.
          percentage: null,
          percentageNote: {
            pt: '[Estimativa de participação da inteligência artificial, apresentada somente se fornecida, com explicação de como foi calculada.]',
            en: '[Estimated AI involvement, shown only when provided, with an explanation of how it was calculated.]',
          },
        },
        gallery: [],
      },
    },
  ],

  contact: {
    intro: {
      pt: '[Breve explicação sobre o objetivo da página e tipos de contato aceitos.]',
      en: '[Short explanation of the goal of this page and the kinds of contact accepted.]',
    },
    emailNote: {
      pt: '[O e-mail é um canal alternativo ao formulário.]',
      en: '[Email is an alternative channel to the form.]',
    },
    availability: {
      pt: '[Tipos de trabalho, modalidade e localização ou fuso horário.]',
      en: '[Types of work, working model and location or time zone.]',
    },
    privacy: {
      pt: '[Como os dados enviados pelo formulário serão utilizados.]',
      en: '[How the data sent through the form will be used.]',
    },
  },
};
