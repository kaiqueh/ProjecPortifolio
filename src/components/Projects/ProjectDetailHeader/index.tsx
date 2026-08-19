import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import { ROUTES } from '../../../routes/paths';
import type { Project } from '../../../types';
import { Button } from '../../ui/Button';
import { GlowBackdrop } from '../../ui/GlowBackdrop';
import { Actions, BackLink, HeaderGrid, HeaderWrapper, Meta, Summary, Title } from './styles';

interface ProjectDetailHeaderProps {
  project: Project;
}

/** Abertura da página de detalhe: retorno à lista, identificação e acessos. */
export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  const { t } = useTranslation();
  const { localize } = useLocale();

  const meta = [localize(project.category), project.status && localize(project.status)]
    .filter(Boolean)
    .join(' · ');

  return (
    <HeaderWrapper>
      <GlowBackdrop intensity="soft" left="40%" top="-24%" width="48%" height="66%" duration="25s" />

      <BackLink to={ROUTES.projects}>← {t('projectDetail.back')}</BackLink>

      <HeaderGrid>
        <div>
          <Meta>{meta}</Meta>
          <Title>{project.name}</Title>
        </div>

        <div>
          <Summary>{localize(project.summary)}</Summary>
          <Actions>
            {project.liveUrl && (
              <Button
                as="a"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t('projects.live')} ↗
              </Button>
            )}
            {project.repoUrl && (
              <Button
                as="a"
                size="sm"
                variant="ghost"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t('projects.repo')} ↗
              </Button>
            )}
          </Actions>
        </div>
      </HeaderGrid>
    </HeaderWrapper>
  );
}
