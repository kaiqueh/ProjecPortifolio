import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import { LanguageButton, ToggleGroup } from './styles';

interface LanguageToggleProps {
  /** `compact` é a pílula da navegação; `expanded` é usado no menu mobile. */
  variant?: 'compact' | 'expanded';
}

/** Alternância entre português e inglês. */
export function LanguageToggle({ variant = 'compact' }: LanguageToggleProps) {
  const { t } = useTranslation();
  const { locale, changeLocale } = useLocale();

  return (
    <ToggleGroup role="group" aria-label={t('nav.language')} $variant={variant}>
      <LanguageButton
        type="button"
        lang="pt"
        aria-pressed={locale === 'pt'}
        title={t('nav.switchToPt')}
        onClick={() => changeLocale('pt')}
        $active={locale === 'pt'}
        $variant={variant}
      >
        PT
      </LanguageButton>
      <LanguageButton
        type="button"
        lang="en"
        aria-pressed={locale === 'en'}
        title={t('nav.switchToEn')}
        onClick={() => changeLocale('en')}
        $active={locale === 'en'}
        $variant={variant}
      >
        EN
      </LanguageButton>
    </ToggleGroup>
  );
}
