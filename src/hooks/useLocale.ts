import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { Locale, LocalizedText } from '../types';

/**
 * Idioma ativo e o resolvedor dos textos bilíngues vindos de
 * `portfolio-data.ts`. Os rótulos fixos da interface continuam vindo do
 * `t()` do i18next.
 */
export function useLocale() {
  const { i18n } = useTranslation();

  const locale: Locale = i18n.language.startsWith('en') ? 'en' : 'pt';

  const changeLocale = useCallback(
    (next: Locale) => {
      if (next !== locale) void i18n.changeLanguage(next);
    },
    [i18n, locale],
  );

  const localize = useCallback((text: LocalizedText) => text[locale], [locale]);

  return { locale, changeLocale, localize };
}
