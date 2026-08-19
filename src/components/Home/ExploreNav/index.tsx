import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../../routes/paths';
import { SectionLabel } from '../../ui/SectionLabel';
import {
  ExploreList,
  ExploreRow,
  ExploreSection,
  RowArrow,
  RowDescription,
  RowIndex,
  RowTitle,
} from './styles';

/** Destinos da Home, com a numeração editorial das seções. */
const EXPLORE_ITEMS = [
  { index: '02', to: ROUTES.about, labelKey: 'nav.about', descriptionKey: 'home.aboutDesc' },
  {
    index: '03',
    to: ROUTES.projects,
    labelKey: 'nav.projects',
    descriptionKey: 'home.projectsDesc',
  },
  { index: '04', to: ROUTES.contact, labelKey: 'nav.contact', descriptionKey: 'home.contactDesc' },
] as const;

/** Lista que direciona a Home para as demais páginas do portfólio. */
export function ExploreNav() {
  const { t } = useTranslation();

  return (
    <ExploreSection aria-labelledby="explorar">
      <SectionLabel id="explorar">{t('home.explore')}</SectionLabel>

      <ExploreList>
        {EXPLORE_ITEMS.map((item) => (
          <li key={item.to}>
            <ExploreRow to={item.to}>
              <RowIndex>{item.index}</RowIndex>
              <RowTitle>{t(item.labelKey)}</RowTitle>
              <RowDescription>{t(item.descriptionKey)}</RowDescription>
              <RowArrow aria-hidden="true">→</RowArrow>
            </ExploreRow>
          </li>
        ))}
      </ExploreList>
    </ExploreSection>
  );
}
