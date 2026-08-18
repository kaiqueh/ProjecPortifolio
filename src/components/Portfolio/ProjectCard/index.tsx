import { useTranslation } from 'react-i18next';
import type { Project } from '../../../types';
import * as S from './styles';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export function ProjectCard({ project, isActive }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <S.Card $isActive={isActive}>
      <S.Number>{project.number}</S.Number>
      <S.Title>{project.title}</S.Title>
      <S.Description>{project.description}</S.Description>
      <S.Tech>{project.technologies.join(', ')}</S.Tech>
      <S.Links>
        {project.liveUrl && (
          <S.LinkIcon href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <i className="bx bx-link-external" />
            <S.Tooltip>{t('portfolio.liveProject')}</S.Tooltip>
          </S.LinkIcon>
        )}
        <S.LinkIcon href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github" />
          <S.Tooltip>{t('portfolio.githubRepo')}</S.Tooltip>
        </S.LinkIcon>
      </S.Links>
    </S.Card>
  );
}
