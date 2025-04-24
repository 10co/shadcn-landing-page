import { createContext, useContext, useEffect, useState } from 'react';
import { ConfigLangKey, getWebsiteConfig } from '@/config';
import { useTranslation } from 'react-i18next';

import { WebsiteConfig } from '@/types/types';

export const WebsiteConfigContext = createContext<WebsiteConfig | null>(null);

export const WebsiteConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ConfigLangKey;
  console.log('lang', lang);
  const defaultConfig = getWebsiteConfig(lang);
  const [config, setConfig] = useState<WebsiteConfig>(defaultConfig);
  useEffect(() => {
    setConfig(getWebsiteConfig(lang));
  }, [lang]);

  return (
    <WebsiteConfigContext.Provider value={config}>
      {children}
    </WebsiteConfigContext.Provider>
  );
};

export const useWebsiteConfig = () => {
  const config = useContext(WebsiteConfigContext);
  if (!config) {
    throw new Error('WebsiteConfigContext not found');
  }
  return config;
};
