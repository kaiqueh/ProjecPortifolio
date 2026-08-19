/** Idiomas suportados pelo portfólio. */
export type Locale = 'pt' | 'en';

/** Texto de conteúdo que existe nos dois idiomas. */
export interface LocalizedText {
  pt: string;
  en: string;
}

export interface SocialLink {
  /** Nome exibido da rede: 'LinkedIn', 'GitHub'. */
  platform: string;
  url: string;
  /** Finalidade da rede, mostrada junto ao link na página de contato. */
  purpose: LocalizedText;
}

export interface PersonalInfo {
  name: string;
  /** Iniciais exibidas na navegação. */
  initials: string;
  /** Profissão, cargo ou especialidade atual. */
  role: LocalizedText;
  /** Situação profissional atual, exibida como status na Home. */
  availability: LocalizedText;
  location: LocalizedText;
  /** Descrição curta da atuação — abertura da Home. */
  summary: LocalizedText;
  /** Apresentação mais completa — abertura da página Sobre mim. */
  intro: LocalizedText;
  email: string;
  /** Caminho do currículo em PDF dentro de /public. */
  cvUrl: string;
  socialLinks: SocialLink[];
}

export interface Experience {
  period: string;
  role: LocalizedText;
  /** Empresa ou contexto em que a função foi exercida. */
  company: string;
  description: LocalizedText;
}

export interface Skill {
  name: string;
  /** Caminho opcional de um ícone em /public. */
  icon?: string;
}

export interface SkillCategory {
  /** Ex.: linguagens, frameworks, bancos de dados, testes. */
  label: LocalizedText;
  skills: Skill[];
}

export interface WorkPrinciple {
  title: LocalizedText;
  description: LocalizedText;
}

export interface Education {
  title: LocalizedText;
  institution: string;
  period: string;
}

export interface Certification {
  title: LocalizedText;
  issuer: string;
  year: string;
}

export interface AboutContent {
  experiences: Experience[];
  skillCategories: SkillCategory[];
  workPrinciples: WorkPrinciple[];
  education: Education[];
  certifications: Certification[];
  goals: LocalizedText;
}

export interface ProjectImage {
  /** Caminho da imagem em /public. Vazio exibe o placeholder do layout. */
  src: string;
  /** Texto alternativo — obrigatório para acessibilidade. */
  alt: LocalizedText;
}

export interface ProjectTechnology {
  name: string;
  /** Função dessa tecnologia dentro do projeto. */
  role: LocalizedText;
}

export interface ProjectArchitecture {
  structure: LocalizedText;
  integrations: LocalizedText;
  deploy: LocalizedText;
}

export interface ProjectChallenge {
  challenge: LocalizedText;
  solution: LocalizedText;
}

/**
 * Uso de inteligência artificial no projeto.
 * `percentage` só deve ser preenchido quando houver uma estimativa real,
 * sempre acompanhada da explicação em `percentageNote`.
 */
export interface ProjectAIUsage {
  tools: LocalizedText;
  review: LocalizedText;
  percentage: number | null;
  percentageNote: LocalizedText;
}

export interface ProjectDetail {
  /** Parágrafos de contexto: o que é o projeto e que problema resolve. */
  context: LocalizedText[];
  /** Participação do desenvolvedor, item a item. */
  role: LocalizedText[];
  technologies: ProjectTechnology[];
  architecture: ProjectArchitecture;
  features: LocalizedText[];
  challenges: ProjectChallenge[];
  results: LocalizedText;
  /** `null` quando não houve uso de inteligência artificial. */
  ai: ProjectAIUsage | null;
  gallery: ProjectImage[];
}

/** Tamanho do card na listagem: large ocupa 4 colunas, wide 3 e medium 2. */
export type ProjectHighlight = 'large' | 'wide' | 'medium';

export interface Project {
  /** Identificador da URL: /projetos/:slug */
  slug: string;
  name: string;
  category: LocalizedText;
  /** Situação do projeto. `null` quando não for relevante. */
  status: LocalizedText | null;
  summary: LocalizedText;
  /** Tecnologias em destaque no card da listagem. */
  stack: string[];
  repoUrl: string | null;
  liveUrl: string | null;
  cover: ProjectImage;
  highlight: ProjectHighlight;
  detail: ProjectDetail;
}

export interface ContactContent {
  intro: LocalizedText;
  /** Observação de que o e-mail é um canal alternativo ao formulário. */
  emailNote: LocalizedText;
  availability: LocalizedText;
  privacy: LocalizedText;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutContent;
  projects: Project[];
  contact: ContactContent;
}
