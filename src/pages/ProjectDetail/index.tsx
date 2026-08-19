import { useParams } from 'react-router-dom';

import { PageShell } from '../../components/Layout/PageShell';
import { SectionLabel } from '../../components/ui/SectionLabel';
import { portfolioData } from '../../data/portfolio-data';
import { NotFound } from '../NotFound';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = portfolioData.projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  return (
    <PageShell>
      <SectionLabel>{project.name}</SectionLabel>
    </PageShell>
  );
}
