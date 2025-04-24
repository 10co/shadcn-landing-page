'use client';

// External imports
import { useState } from 'react';
import { Menu, Zap } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/use-active-section';
// Internal imports
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/language-toggle';
import { ModeToggle } from '@/components/mode-toggle';
import { Link } from '@/components/next-link';

export type NavItem = {
  name: string;
  href: string;
};

export type HeaderProps = {
  data: {
    logo: {
      icon: React.ReactNode;
      text: string;
    };
    navItems: NavItem[];
    cta: {
      signIn: {
        text: string;
        href: string;
      };
      getStarted: {
        text: string;
        href: string;
      };
    };
  };
};

/**
 * NavLink component for consistent styling of navigation links
 */
const NavLink = ({
  href,
  isActive,
  onClick,
  children,
}: {
  href: string;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative rounded-md px-4 py-2 text-sm font-medium tracking-wide transition-all',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:bg-background/80 hover:text-foreground',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

export function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logo, navItems, cta } = data;
  const { activeHash } = useActiveSection(navItems.map((item) => item.href));

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed inset-x-0 top-4 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-background/10 border-border/30 relative rounded-full border shadow-lg backdrop-blur-xl">
            <nav
              className="flex h-12 items-center justify-between px-4 sm:px-6"
              aria-label="Main navigation"
            >
              {/* Logo */}
              <Link
                href="/"
                className="group flex items-center gap-2.5"
                aria-label="Piper homepage"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                    {logo.icon}
                  </div>
                  <span className="text-lg font-bold tracking-tight">
                    {logo.text}
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => {
                  const isActive = activeHash === item.href;
                  return (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      isActive={isActive}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>

              {/* Desktop CTA */}
              <div className="hidden items-center gap-3 md:flex">
                <Button variant="ghost" className="font-medium tracking-wide">
                  {cta.signIn.text}
                </Button>
                <Link href={cta.getStarted.href}>
                  <Button className="px-4 font-medium tracking-wide">
                    {cta.getStarted.text}
                  </Button>
                </Link>
                <LanguageToggle />

                <ModeToggle />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-background/80 rounded-full p-2 transition-colors md:hidden"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu
                  className="text-muted-foreground h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-background/80 fixed inset-0 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="bg-background/95 border-border/50 fixed inset-x-0 top-0 border-b p-6">
            <div className="mt-20 flex flex-col gap-2 space-y-1">
              {navItems.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    isActive={isActive}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <div className="border-border/50 mt-6 grid grid-cols-2 gap-3 border-t pt-6">
                <Button
                  variant="outline"
                  className="w-full font-medium tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cta.signIn.text}
                </Button>
                <Link href={cta.getStarted.href} className="w-full">
                  <Button
                    className="w-full font-medium tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {cta.getStarted.text}
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-end pt-6">
                <LanguageToggle />
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
