import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { CredentialList } from '../../components/About/CredentialList';
import { ExperienceTimeline } from '../../components/About/ExperienceTimeline';
import { SkillCategoryCard } from '../../components/About/SkillCategoryCard';
import { WorkPrincipleCard } from '../../components/About/WorkPrincipleCard';
import { EditorialSection } from '../../components/Layout/EditorialSection';
import { PageHeader } from '../../components/Layout/PageHeader';
import { PageShell } from '../../components/Layout/PageShell';
import { Button } from '../../components/ui/Button';
import { GlowBackdrop } from '../../components/ui/GlowBackdrop';
import { portfolioData } from '../../data/portfolio-data';
import { useLocale } from '../../hooks/useLocale';
import { ROUTES } from '../../routes/paths';
import { GoalsActions, GoalsStatement, PrincipleGrid, SkillGrid } from './styles';

/**
 * Aprofunda o que a Home apresenta: trajetória, competências, forma de
 * trabalho, formação e objetivos profissionais.
 */
export function About() {
  const { t } = useTranslation();
  const { localize } = useLocale();
  const { personal, about } = portfolioData;

  return (
    <PageShell>
      <PageHeader
        label={t('sections.about')}
        title={t('nav.about')}
        description={localize(personal.intro)}
        glow={
          <GlowBackdrop
            intensity="soft"
            left="52%"
            top="-18%"
            width="46%"
            height="52%"
            duration="24s"
          />
        }
      />

      <EditorialSection id="trajetoria" label={t('about.path')}>
        <ExperienceTimeline experiences={about.experiences} />
      </EditorialSection>

      <EditorialSection id="competencias" label={t('about.skills')}>
        <SkillGrid>
          {about.skillCategories.map((category) => (
            <SkillCategoryCard key={category.label.pt} category={category} />
          ))}
        </SkillGrid>
      </EditorialSection>

      <EditorialSection id="forma-de-trabalho" label={t('about.way')}>
        <PrincipleGrid>
          {about.workPrinciples.map((principle, index) => (
            <WorkPrincipleCard key={principle.title.pt} principle={principle} index={index} />
          ))}
        </PrincipleGrid>
      </EditorialSection>

      <EditorialSection id="formacao" label={t('about.education')} columns={2}>
        <CredentialList items={about.education} />
        <CredentialList items={about.certifications} />
      </EditorialSection>

      <EditorialSection id="objetivos" label={t('about.goals')}>
        <GlowBackdrop
          intensity="soft"
          left="-4%"
          bottom="-30%"
          width="44%"
          height="120%"
          duration="26s"
        />
        <div>
          <GoalsStatement>{localize(about.goals)}</GoalsStatement>
          <GoalsActions>
            <Button as={Link} to={ROUTES.projects} size="sm">
              {t('nav.projects')} →
            </Button>
            <Button as={Link} to={ROUTES.contact} variant="ghost" size="sm">
              {t('nav.contact')}
            </Button>
            <Button as={Link} to={ROUTES.home} variant="ghost" size="sm">
              {t('nav.home')}
            </Button>
          </GoalsActions>
        </div>
      </EditorialSection>
    </PageShell>
  );
}
