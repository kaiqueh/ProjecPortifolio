import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import type { ProjectCategory } from '../../../utils/projects';
import { FilterButton, FilterList } from './styles';

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  /** `null` representa a opção "todos". */
  activeCategory: string | null;
  onChange: (categoryId: string | null) => void;
}

/** Filtros por categoria dos projetos. */
export function ProjectFilters({ categories, activeCategory, onChange }: ProjectFiltersProps) {
  const { t } = useTranslation();
  const { localize } = useLocale();

  return (
    <FilterList role="group" aria-label={t('projects.filterLabel')}>
      <FilterButton
        type="button"
        aria-pressed={activeCategory === null}
        onClick={() => onChange(null)}
        $active={activeCategory === null}
      >
        {t('projects.all')}
      </FilterButton>

      {categories.map((category) => (
        <FilterButton
          key={category.id}
          type="button"
          aria-pressed={activeCategory === category.id}
          onClick={() => onChange(category.id)}
          $active={activeCategory === category.id}
        >
          {localize(category.label)}
        </FilterButton>
      ))}
    </FilterList>
  );
}
