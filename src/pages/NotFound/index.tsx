import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PageShell } from '../../components/Layout/PageShell';
import { Button } from '../../components/ui/Button';
import { SectionLabel } from '../../components/ui/SectionLabel';
import { ROUTES } from '../../routes/paths';
import { NotFoundText, NotFoundTitle, NotFoundWrapper } from './styles';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <PageShell>
      <NotFoundWrapper>
        <SectionLabel tone="accent">404</SectionLabel>
        <NotFoundTitle>{t('notFound.title')}</NotFoundTitle>
        <NotFoundText>{t('notFound.description')}</NotFoundText>
        <Button as={Link} to={ROUTES.home}>
          {t('notFound.action')}
        </Button>
      </NotFoundWrapper>
    </PageShell>
  );
}
