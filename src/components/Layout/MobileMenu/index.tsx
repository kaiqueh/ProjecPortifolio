import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { portfolioData } from '../../../data/portfolio-data';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { NAV_ITEMS, ROUTES } from '../../../routes/paths';
import { LanguageToggle } from '../LanguageToggle';
import {
  CloseButton,
  MenuFooter,
  MenuHeader,
  MenuInitials,
  MenuItem,
  MenuLinks,
  MenuList,
  Overlay,
} from './styles';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Menu de navegação em camada sobreposta, usado em telas pequenas. */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(isOpen);

  // Fecha ao trocar de página, para o menu não continuar sobre o conteúdo.
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { initials, cvUrl, socialLinks } = portfolioData.personal;

  return (
    <Overlay id="menu-mobile" role="dialog" aria-modal="true" aria-label={t('nav.main')}>
      <MenuHeader>
        <MenuInitials>{initials}</MenuInitials>
        <CloseButton ref={closeButtonRef} type="button" aria-label={t('nav.closeMenu')} onClick={onClose}>
          ×
        </CloseButton>
      </MenuHeader>

      <MenuList>
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <MenuItem to={item.to} end={item.to === ROUTES.home} onClick={onClose}>
              {t(item.labelKey)}
              <span>{item.index}</span>
            </MenuItem>
          </li>
        ))}
      </MenuList>

      <MenuFooter>
        <LanguageToggle variant="expanded" />
        <MenuLinks>
          {socialLinks.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noreferrer noopener">
              {link.platform}
            </a>
          ))}
          <a href={cvUrl} download>
            {t('home.cv')}
          </a>
        </MenuLinks>
      </MenuFooter>
    </Overlay>
  );
}
