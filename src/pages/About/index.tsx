import { useTranslation } from 'react-i18next';

import { PageHeader } from '../../components/Layout/PageHeader';
import { PageShell } from '../../components/Layout/PageShell';
import { GlowBackdrop } from '../../components/ui/GlowBackdrop';
import { portfolioData } from '../../data/portfolio-data';
import { useLocale } from '../../hooks/useLocale';

export function About() {
  const { t } = useTranslation();
  const { localize } = useLocale();
  const { personal } = portfolioData;

  return (
    <PageShell>
      <PageHeader
        label={t('sections.about')}
        title={t('nav.about')}
        description={localize(personal.intro)}
        glow={<GlowBackdrop intensity="soft" left="52%" top="-18%" width="46%" height="52%" duration="24s" />}
      />
    </PageShell>
  );
}
