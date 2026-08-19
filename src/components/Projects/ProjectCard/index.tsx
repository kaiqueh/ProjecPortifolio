import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import { projectPath } from '../../../routes/paths';
import type { Project } from '../../../types';
import { StatusDot } from '../../ui/StatusDot';
import { Tag } from '../../ui/Tag';
import { ProjectCover } from '../ProjectCover';
import {
  Actions,
  Body,
  Card,
  DetailsCue,
  ExternalLink,
  Meta,
  StackList,
  Status,
  Summary,
  Title,
  TitleLink,
} from './styles';

interface ProjectCardProps {
  project: Project;
}

/**
 * Card da listagem. O destaque cadastrado no projeto define o tamanho e
 * quanta informação técnica aparece já na visão resumida.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const { localize } = useLocale();

  const { highlight } = project;
  const isLarge = highlight === 'large';
  const isWide = highlight === 'wide';

  return (
    <Card $highlight={highlight}>
      <ProjectCover
        image={project.cover}
        height={isLarge ? '300px' : '180px'}
        horizontal={isWide}
      />

      <Body $highlight={highlight}>
        <Meta>
          {isLarge ? (
            <>
              <span>{localize(project.category)}</span>
              {project.status && (
                <Status>
                  <StatusDot size="6px" glow={false} />
                  {localize(project.status)}
                </Status>
              )}
            </>
          ) : (
            <span>
              {[localize(project.category), project.status && localize(project.status)]
                .filter(Boolean)
                .join(' · ')}
            </span>
          )}
        </Meta>

        <Title $highlight={highlight}>
          <TitleLink to={projectPath(project.slug)}>{project.name}</TitleLink>
        </Title>

        <Summary $highlight={highlight}>{localize(project.summary)}</Summary>

        {isLarge && project.stack.length > 0 && (
          <StackList>
            {project.stack.map((technology, index) => (
              <Tag key={`${technology}-${index}`} label={technology} size="sm" />
            ))}
          </StackList>
        )}

        <Actions>
          <DetailsCue aria-hidden="true">{t('projects.details')} →</DetailsCue>
          {isLarge && project.repoUrl && (
            <ExternalLink href={project.repoUrl} target="_blank" rel="noreferrer noopener">
              {t('projects.repo')} ↗
            </ExternalLink>
          )}
          {isLarge && project.liveUrl && (
            <ExternalLink href={project.liveUrl} target="_blank" rel="noreferrer noopener">
              {t('projects.live')} ↗
            </ExternalLink>
          )}
        </Actions>
      </Body>
    </Card>
  );
}
