import type { LocalizedText, Project } from '../types';

export interface ProjectCategory {
  /** Identidade estável da categoria, independente do idioma exibido. */
  id: string;
  label: LocalizedText;
}

/**
 * Categorias presentes nos projetos cadastrados, na ordem em que aparecem.
 * Assim os filtros acompanham o arquivo de dados sem cadastro paralelo.
 */
export function getProjectCategories(projects: Project[]): ProjectCategory[] {
  const categories = new Map<string, ProjectCategory>();

  for (const project of projects) {
    const id = project.category.pt;
    if (!categories.has(id)) categories.set(id, { id, label: project.category });
  }

  return [...categories.values()];
}

export function filterProjectsByCategory(projects: Project[], categoryId: string | null) {
  if (!categoryId) return projects;
  return projects.filter((project) => project.category.pt === categoryId);
}
