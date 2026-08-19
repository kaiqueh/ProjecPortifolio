import { useTranslation } from 'react-i18next';

import { PageShell } from '../../components/Layout/PageShell';
import { SectionLabel } from '../../components/ui/SectionLabel';

export function Home() {
  const { t } = useTranslation();

  return (
    <PageShell>
      <SectionLabel>{t('sections.home')}</SectionLabel>
    </PageShell>
  );
}
