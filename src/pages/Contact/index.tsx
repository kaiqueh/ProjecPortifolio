import { useTranslation } from 'react-i18next';

import { PageHeader } from '../../components/Layout/PageHeader';
import { PageShell } from '../../components/Layout/PageShell';
import { GlowBackdrop } from '../../components/ui/GlowBackdrop';
import { portfolioData } from '../../data/portfolio-data';
import { useLocale } from '../../hooks/useLocale';

export function Contact() {
  const { t } = useTranslation();
  const { localize } = useLocale();

  return (
    <PageShell showFooter={false}>
      <PageHeader
        label={t('sections.contact')}
        title={t('nav.contact')}
        description={localize(portfolioData.contact.intro)}
        glow={<GlowBackdrop intensity="strong" left="-6%" bottom="-40%" width="56%" height="110%" duration="20s" />}
      />
    </PageShell>
  );
}
