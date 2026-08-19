import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditorialSection } from '../../components/Layout/EditorialSection';
import { PageShell } from '../../components/Layout/PageShell';
import { ProjectAICard } from '../../components/Projects/ProjectAICard';
import { ProjectChallenges } from '../../components/Projects/ProjectChallenges';
import { ProjectDetailHeader } from '../../components/Projects/ProjectDetailHeader';
import { ProjectMedia } from '../../components/Projects/ProjectMedia';
import { ProjectTechnologies } from '../../components/Projects/ProjectTechnologies';
import { portfolioData } from '../../data/portfolio-data';
import { useLocale } from '../../hooks/useLocale';
import { ROUTES } from '../../routes/paths';
import { NotFound } from '../NotFound';
import {
  ContextGrid,
  ContextParagraph,
  DetailFooter,
  DetailSections,
  FeatureItem,
  FooterLink,
  ResultsPanel,
  RoleItem,
} from './styles';

/** Página de um projeto: contexto, participação, técnica e resultados. */
export function ProjectDetail() {
  const { t } = useTranslation();
  const { localize } = useLocale();
  const { slug } = useParams();

  const project = portfolioData.projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;

  const { detail } = project;

  return (
    <PageShell showFooter={false}>
      <ProjectDetailHeader project={project} />
      <ProjectMedia cover={project.cover} gallery={detail.gallery} />

      <DetailSections>
        <EditorialSection id="contexto" label={t('projectDetail.context')} divider={false}>
          <ContextGrid>
            {detail.context.map((paragraph, index) => (
              <ContextParagraph key={index}>{localize(paragraph)}</ContextParagraph>
            ))}
          </ContextGrid>
        </EditorialSection>

        <EditorialSection id="participacao" label={t('projectDetail.role')} divider={false}>
          <ol>
            {detail.role.map((item, index) => (
              <RoleItem key={index}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {localize(item)}
              </RoleItem>
            ))}
          </ol>
        </EditorialSection>

        <EditorialSection id="arquitetura" label={t('projectDetail.architecture')} divider={false}>
          <ProjectTechnologies
            technologies={detail.technologies}
            architecture={detail.architecture}
          />
        </EditorialSection>

        <EditorialSection id="funcionalidades" label={t('projectDetail.features')} divider={false}>
          <ul>
            {detail.features.map((feature, index) => (
              <FeatureItem key={index}>{localize(feature)}</FeatureItem>
            ))}
          </ul>
        </EditorialSection>

        {detail.challenges.length > 0 && (
          <EditorialSection id="desafios" label={t('projectDetail.challenges')} divider={false}>
            <ProjectChallenges challenges={detail.challenges} />
          </EditorialSection>
        )}

        <EditorialSection id="resultados" label={t('projectDetail.results')} divider={false}>
          <ResultsPanel>{localize(detail.results)}</ResultsPanel>
        </EditorialSection>

        {detail.ai && (
          <EditorialSection id="ia" label={t('projectDetail.ai')} divider={false}>
            <ProjectAICard ai={detail.ai} />
          </EditorialSection>
        )}
      </DetailSections>

      <DetailFooter aria-label={t('projectDetail.back')}>
        <FooterLink to={ROUTES.projects}>← {t('projectDetail.back')}</FooterLink>
        <FooterLink to={ROUTES.contact} $accent>
          {t('nav.contact')} →
        </FooterLink>
      </DetailFooter>
    </PageShell>
  );
}
