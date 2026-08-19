import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { portfolioData } from '../../../data/portfolio-data';
import { NAV_ITEMS, ROUTES } from '../../../routes/paths';
import { LanguageToggle } from '../LanguageToggle';
import { MobileMenu } from '../MobileMenu';
import {
  DesktopLinks,
  DesktopToggle,
  Initials,
  MenuButton,
  MobileControls,
  NavPill,
  NavWrapper,
} from './styles';

/**
 * Navegação principal em pílula de vidro, fixa no topo.
 * No desktop mostra os quatro destinos; no mobile abre o menu em camada.
 */
export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const { initials } = portfolioData.personal;

  return (
    <>
      <NavWrapper aria-label={t('nav.main')}>
        <Initials to={ROUTES.home}>{initials}</Initials>

        <DesktopLinks>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavPill to={item.to} end={item.to === ROUTES.home}>
                {t(item.labelKey)}
              </NavPill>
            </li>
          ))}
        </DesktopLinks>

        <DesktopToggle>
          <LanguageToggle />
        </DesktopToggle>

        <MobileControls>
          <LanguageToggle />
          <MenuButton
            type="button"
            aria-label={t('nav.openMenu')}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            onClick={() => setIsMenuOpen(true)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </MenuButton>
        </MobileControls>
      </NavWrapper>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
