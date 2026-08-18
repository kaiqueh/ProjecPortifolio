import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

type SectionName = 'home' | 'resume' | 'portfolio' | 'contact';

interface HeaderProps {
  activeSection: SectionName;
  onNavigate: (section: SectionName) => void;
}

const sections: SectionName[] = ['home', 'resume', 'portfolio', 'contact'];

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  const handleNavigate = (section: SectionName) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <S.Container $isVisible>
      <S.Logo onClick={() => handleNavigate('home')}>
        {/* Replace with your name/logo */}
      </S.Logo>

      <S.MenuIcon
        className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <S.Nav $isOpen={menuOpen}>
        {sections.map((section) => (
          <a
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => handleNavigate(section)}
          >
            {t(`nav.${section}`)}
          </a>
        ))}
        <S.LangToggle onClick={toggleLanguage}>
          {i18n.language === 'pt' ? 'EN' : 'PT'}
        </S.LangToggle>
      </S.Nav>
    </S.Container>
  );
}
