import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import type { ProjectArchitecture, ProjectTechnology } from '../../../types';
import {
  ArchitectureSummary,
  SummaryPair,
  TechCard,
  TechGrid,
  TechName,
  TechRole,
} from './styles';

interface ProjectTechnologiesProps {
  technologies: ProjectTechnology[];
  architecture: ProjectArchitecture;
}

/** Tecnologias com a função de cada uma, seguidas do resumo de arquitetura. */
export function ProjectTechnologies({ technologies, architecture }: ProjectTechnologiesProps) {
  const { t } = useTranslation();
  const { localize } = useLocale();

  const summary = [
    { label: t('projectDetail.structure'), value: localize(architecture.structure) },
    { label: t('projectDetail.integrations'), value: localize(architecture.integrations) },
    { label: t('projectDetail.deploy'), value: localize(architecture.deploy) },
  ];

  return (
    <div>
      <TechGrid>
        {technologies.map((technology, index) => (
          <TechCard key={`${technology.name}-${index}`}>
            <TechName>{technology.name}</TechName>
            <TechRole>{localize(technology.role)}</TechRole>
          </TechCard>
        ))}
      </TechGrid>

      <ArchitectureSummary>
        {summary.map((item) => (
          <SummaryPair key={item.label}>
            <dt>{item.label}:</dt>
            <dd>{item.value}</dd>
          </SummaryPair>
        ))}
      </ArchitectureSummary>
    </div>
  );
}
