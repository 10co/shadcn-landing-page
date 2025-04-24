'use client';

// External imports
import { Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Internal imports
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons';
import { Link } from '@/components/next-link';

import { ColorCircle } from './components/bg';

export type FooterLink = {
  name: string;
  href: string;
};

export type SocialLink = FooterLink & {
  openInNewTab?: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

export type FooterProps = {
  data: {
    logo: {
      icon: React.ReactNode;
      text: string;
    };
    description: string;
    navigation: {
      product: FooterLink[];
      company: FooterLink[];
      support: FooterLink[];
      legal: FooterLink[];
      social: SocialLink[];
    };
    copyright: string;
  };
};

/**
 * FooterHeading component for consistent section headings
 */
const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
    {children}
  </h3>
);

/**
 * FooterLink component for consistent link styling
 */
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
  >
    {children}
  </Link>
);

/**
 * Main Footer component
 */
export function Footer({ data }: FooterProps) {
  const { logo, description, navigation, copyright } = data;
  const { t } = useTranslation();
  return (
    <footer
      className="border-border/50 relative border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Background elements */}

      <ColorCircle className="bg-primary/10 top-1/4 right-1/8 -z-10 h-64 w-64 "></ColorCircle>
      <ColorCircle className=" bottom-1/4 left-1/8 -z-10 h-64 w-64 bg-blue-500/10 "></ColorCircle>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-8">
            <div className="flex items-center">
              <div
                className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg"
                aria-hidden="true"
              >
                {logo.icon}
              </div>
              <span className="ml-4 text-xl font-bold tracking-tight">
                {logo.text}
              </span>
            </div>
            <p className="text-muted-foreground text-base">{description}</p>
            <div className="flex space-x-5">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={item.name}
                  target={item.openInNewTab ? '_blank' : '_self'}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeading>{t('footer.product')}</FooterHeading>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeading>{t('footer.company')}</FooterHeading>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeading>{t('footer.support')}</FooterHeading>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeading>{t('footer.legal')}</FooterHeading>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-border/50 mt-12 border-t pt-8">
          <p className="text-muted-foreground text-center text-sm">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
