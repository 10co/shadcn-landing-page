'use client';

// External imports
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
// Internal imports
import { Button } from '@/components/ui/button';
import { Link } from '@/components/next-link';

import { ColorCircle } from './components/bg';

/**
 * CTAButton component for consistent call-to-action buttons
 * Reused from Hero component for consistency across the site
 */
const CTAButton = ({
  children,
  variant = 'default',
  href,
  icon,
}: {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  href?: string;
  icon?: React.ReactNode;
}) => {
  const buttonClass = cn(
    'h-16 px-8 text-base font-semibold tracking-wide uppercase sm:text-lg',
    variant === 'outline' && 'hover:bg-background/5 border-2',
  );

  const button = (
    <Button size="lg" variant={variant as any} className={buttonClass}>
      {icon && (
        <span
          className="bg-primary-foreground/10 mr-3 -ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      {children}
    </Button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};

export type CTAButtonConfig = {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'outline';
};

export type CTAProps = {
  data: {
    title: string;
    description: string;
    primaryCTA: CTAButtonConfig;
    secondaryCTA: CTAButtonConfig;
    trialText: string;
  };
};

/**
 * Main CTA component
 */
export function CTA({ data }: CTAProps) {
  const { title, description, primaryCTA, secondaryCTA, trialText } = data;

  return (
    <section className="relative" aria-labelledby="cta-heading">
      {/* Background elements */}

      <ColorCircle className=" bottom-1/4 left-1/4  h-72 w-72  bg-primary/20 "></ColorCircle>
      <ColorCircle className=" top-1/4 right-1/4  h-72 w-72  bg-orange-500/20"></ColorCircle>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl ">
            <div className="border-border/50 bg-background/30 rounded-xl border p-8 sm:p-12 lg:p-16 shadow-lg ">
              <div className="mx-auto max-w-xl lg:max-w-none backdrop-blur-md">
                <h2
                  id="cta-heading"
                  className="text-center text-2xl font-bold tracking-tight uppercase sm:text-3xl lg:text-4xl"
                >
                  {title}
                </h2>
                <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-center text-lg">
                  {description}
                </p>
                <div className="relative mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-6">
                  {/* Decorative elements around buttons */}
                  <div
                    className="border-primary/30 absolute -top-4 -left-4 h-4 w-4 border-t-2 border-l-2"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="border-primary/30 absolute -right-4 -bottom-4 h-4 w-4 border-r-2 border-b-2"
                    aria-hidden="true"
                  ></div>

                  <CTAButton href={primaryCTA.href} icon={primaryCTA.icon}>
                    {primaryCTA.text}
                  </CTAButton>

                  <CTAButton variant={secondaryCTA.variant}>
                    {secondaryCTA.text}
                  </CTAButton>
                </div>
                <p className="text-muted-foreground mt-6 text-center text-sm">
                  {trialText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
