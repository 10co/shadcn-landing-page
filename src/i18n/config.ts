import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en-US/common.json';
import zhCommon from './locales/zh-CN/common.json';

export const defaultNS = 'common';
const resources = {
  'en-US': {
    common: enCommon,
  },
  'zh-CN': {
    common: zhCommon,
  },
} as const;
export type LanguageOptions = {
  label: string;
  value: keyof typeof resources;
};
export const languages: LanguageOptions[] = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '简体中文',
    value: 'zh-CN',
  },
];

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en-US'];
    language: LanguageOptions['value'];
  }
}

const StorageKey = 'i18nextLng';

export const createI18n = () => {
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: {
        order: ['localStorage', 'navigator'],
        lookupLocalStorage: StorageKey,
        caches: ['localStorage'],
      },
      debug: process.env.NODE_ENV === 'development',
      resources,
      defaultNS,
    });
};

export const changeLanguage = (language: LanguageOptions['value']) => {
  i18next.changeLanguage(language);
  localStorage.setItem(StorageKey, language);
};

export const getCurrentLanguage = (): LanguageOptions['value'] => {
  return (
    (localStorage.getItem(StorageKey) as LanguageOptions['value']) || 'en-US'
  );
};
