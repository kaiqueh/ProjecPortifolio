import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Main, Page, SkipLink } from './styles';

interface PageShellProps {
  children: ReactNode;
  /** A página de contato já encerra com seus próprios canais. */
  showFooter?: boolean;
}

/** Estrutura comum a todas as páginas: navegação, conteúdo e rodapé. */
export function PageShell({ children, showFooter = true }: PageShellProps) {
  const { t } = useTranslation();

  useScrollToTop();

  return (
    <Page>
      <SkipLink href="#conteudo">{t('nav.skipToContent')}</SkipLink>
      <Navbar />
      <Main id="conteudo">{children}</Main>
      {showFooter && <Footer />}
    </Page>
  );
}
