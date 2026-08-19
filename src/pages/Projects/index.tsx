import { useTranslation } from 'react-i18next';

import { PageHeader } from '../../components/Layout/PageHeader';
import { PageShell } from '../../components/Layout/PageShell';
import { GlowBackdrop } from '../../components/ui/GlowBackdrop';

export function Projects() {
  const { t } = useTranslation();

  return (
    <PageShell>
      <PageHeader
        label={t('sections.projects')}
        title={t('nav.projects')}
        glow={<GlowBackdrop intensity="soft" right="-8%" top="-20%" width="50%" height="60%" duration="23s" />}
      />
    </PageShell>
  );
}
