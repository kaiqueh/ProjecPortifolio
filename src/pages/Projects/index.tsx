import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PageHeader } from '../../components/Layout/PageHeader';
import { PageShell } from '../../components/Layout/PageShell';
import { ProjectFilters } from '../../components/Projects/ProjectFilters';
import { ProjectGrid } from '../../components/Projects/ProjectGrid';
import { GlowBackdrop } from '../../components/ui/GlowBackdrop';
import { portfolioData } from '../../data/portfolio-data';
import { filterProjectsByCategory, getProjectCategories } from '../../utils/projects';

/** Listagem dos projetos, com filtro por categoria. */
export function Projects() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const { projects } = portfolioData;
  const categories = useMemo(() => getProjectCategories(projects), [projects]);
  const visibleProjects = useMemo(
    () => filterProjectsByCategory(projects, activeCategory),
    [projects, activeCategory],
  );

  return (
    <PageShell>
      <PageHeader
        label={t('sections.projects')}
        title={t('nav.projects')}
        asideWidth="auto"
        aside={
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        }
        glow={
          <GlowBackdrop
            intensity="soft"
            right="-8%"
            top="-20%"
            width="50%"
            height="60%"
            duration="23s"
          />
        }
      />

      <ProjectGrid projects={visibleProjects} />
    </PageShell>
  );
}
