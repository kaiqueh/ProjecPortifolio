import { useTranslation } from 'react-i18next';

import type { Project } from '../../../types';
import { ProjectCard } from '../ProjectCard';
import { EmptyState, Grid, GridItem } from './styles';

interface ProjectGridProps {
  projects: Project[];
}

/** Listagem dos projetos em grid assimétrico. */
export function ProjectGrid({ projects }: ProjectGridProps) {
  const { t } = useTranslation();

  if (projects.length === 0) return <EmptyState>{t('projects.empty')}</EmptyState>;

  return (
    <Grid>
      {projects.map((project) => (
        <GridItem key={project.slug} data-highlight={project.highlight}>
          <ProjectCard project={project} />
        </GridItem>
      ))}
    </Grid>
  );
}
