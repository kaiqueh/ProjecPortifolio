import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt.json';
import en from './locales/en.json';
import type { Locale } from '../types';

const STORAGE_KEY = 'portfolio:locale';
const SUPPORTED_LOCALES: Locale[] = ['pt', 'en'];

/** Idioma salvo pelo visitante, com o do navegador como segunda opção. */
function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'pt';

  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;

  return window.navigator.language.startsWith('en') ? 'en' : 'pt';
}

const initialLocale = resolveInitialLocale();

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: initialLocale,
  fallbackLng: 'pt',
  supportedLngs: SUPPORTED_LOCALES,
  interpolation: {
    escapeValue: false,
  },
});

/** Mantém o idioma do documento e a preferência do visitante sincronizados. */
function syncDocumentLocale(locale: string) {
  if (typeof document === 'undefined') return;

  document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR';
  window.localStorage.setItem(STORAGE_KEY, locale);
}

syncDocumentLocale(initialLocale);
i18n.on('languageChanged', syncDocumentLocale);

export default i18n;
