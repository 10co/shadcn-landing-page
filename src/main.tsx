import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { createI18n } from './i18n/config.ts';

import './styles/globals.css';

import { ThemeProvider } from '@/context/theme-context';
import { WebsiteConfigProvider } from '@/context/website-config-context';

createI18n();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <WebsiteConfigProvider>
        <App />
      </WebsiteConfigProvider>
    </ThemeProvider>
  </StrictMode>,
);
