/** Endereços das páginas. Centralizados para evitar strings soltas nos links. */
export const ROUTES = {
  home: '/',
  about: '/sobre',
  projects: '/projetos',
  projectDetail: '/projetos/:slug',
  contact: '/contato',
} as const;

export function projectPath(slug: string) {
  return `${ROUTES.projects}/${slug}`;
}

/** Itens da navegação principal, na ordem editorial das seções. */
export const NAV_ITEMS = [
  { to: ROUTES.home, labelKey: 'nav.home', index: '01' },
  { to: ROUTES.about, labelKey: 'nav.about', index: '02' },
  { to: ROUTES.projects, labelKey: 'nav.projects', index: '03' },
  { to: ROUTES.contact, labelKey: 'nav.contact', index: '04' },
] as const;
