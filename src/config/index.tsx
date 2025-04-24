import { LanguageOptions } from '@/i18n/config';

import { WebsiteConfig } from '@/types/types';

import websiteConfigEn from './config.en-US';
import websiteConfigZh from './config.zh-CN';

export type ConfigLangKey = LanguageOptions['value'];

type ConfigLang = Record<ConfigLangKey, WebsiteConfig>;

const configLang: ConfigLang = {
  'en-US': websiteConfigEn,
  'zh-CN': websiteConfigZh,
};
export const getWebsiteConfig = (lang: ConfigLangKey) => {
  return configLang[lang] || configLang['en-US'];
};

export default configLang;
