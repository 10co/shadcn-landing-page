'use client';

// External imports
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
// Internal imports
import { Button } from '@/components/ui/button';
import { Link } from '@/components/next-link';

import { ColorCircle } from './components/bg';
import { Block } from './components/block';

/**
 * HeroTitle component displaying the main heading with styled text
 */
const HeroTitle = ({
  titleMain,
  titleHighlighted,
  titleTrailing,
}: {
  titleMain: string;
  titleHighlighted: string;
  titleTrailing: string;
}) => {
  return (
    <div className="relative">
      <h1 className="inline-block max-w-6xl leading-none font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        <div className="relative mb-3 pb-2 text-center text-4xl sm:text-5xl md:mb-5 md:text-6xl">
          <span className="inline-block">{titleMain}</span>
        </div>
        <div className="mt-1 block text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-primary text-primary-foreground relative inline-block px-4 py-1">
            {titleHighlighted}
          </span>
          <span className="text-foreground ml-2 inline-block uppercase">
            {titleTrailing}
          </span>
        </div>
      </h1>
    </div>
  );
};

/**
 * BadgeLabel component for displaying feature announcement badges
 */
const BadgeLabel = ({ text }: { text: string }) => {
  return (
    <div
      className="border-border bg-background mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
      role="note"
    >
      <span
        className="bg-primary flex h-2 w-2 rounded-full"
        aria-hidden="true"
      ></span>
      <span className="text-muted-foreground text-xs font-medium">{text}</span>
    </div>
  );
};

/**
 * CTAButton component for consistent call-to-action buttons
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

export type Statistic = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

export type HeroProps = {
  data: {
    badgeText?: string;
    titleMain: string;
    titleHighlighted: string;
    titleTrailing: string;
    description: string;
    primaryCTA: {
      text: string;
      href: string;
    };
    secondaryCTA: {
      text: string;
      href?: string;
    };
    trialText: string;
    statistics: Statistic[];
  };
};
/**
 * Main Hero component combining all elements
 */
export function Hero({ data }: HeroProps) {
  const {
    badgeText,
    titleMain,
    titleHighlighted,
    titleTrailing,
    description,
    primaryCTA,
    secondaryCTA,
    trialText,
    statistics,
  } = data;
  return (
    <Block
      id="home"
      className="pt-24 sm:px-6 sm:pt-28 lg:pt-32 md:min-h-screen lg:min-h-screen"
    >
      {/* Background elements */}
      <ColorCircle className="bg-yellow-400/20 top-0 right-0" />
      <ColorCircle className="bg-primary/20 bottom-16 left-0" />

      <div className="relative flex  flex-col items-center ">
        <div className="flex flex-col items-center text-center">
          {badgeText && <BadgeLabel text={badgeText} />}

          <HeroTitle
            titleMain={titleMain}
            titleHighlighted={titleHighlighted}
            titleTrailing={titleTrailing}
          />

          <p className="text-muted-foreground mt-8 max-w-2xl text-center text-lg">
            {description}
          </p>

          <div className="relative mt-12 flex flex-col gap-5 sm:flex-row sm:gap-6">
            {/* Decorative elements around buttons */}
            <div
              className="border-primary/30 absolute -top-4 -left-4 h-4 w-4 border-t-2 border-l-2"
              aria-hidden="true"
            ></div>
            <div
              className="border-primary/30 absolute -right-4 -bottom-4 h-4 w-4 border-r-2 border-b-2"
              aria-hidden="true"
            ></div>

            <CTAButton
              href={primaryCTA.href}
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              {primaryCTA.text}
            </CTAButton>

            <CTAButton variant="outline">{secondaryCTA.text}</CTAButton>
          </div>

          <p className="text-muted-foreground mt-4 text-sm">{trialText}</p>

          {/* Stats bar */}
          <div
            className="border-border/50 bg-background/50 mt-16 flex flex-wrap items-center justify-center gap-6 rounded-lg border p-4 sm:gap-10 md:gap-16"
            aria-label="Key statistics"
          >
            {statistics.map((stat, index) => (
              <div className="text-center" key={index}>
                <div className="flex items-center justify-center gap-1.5">
                  {stat.icon}
                  <p className="text-lg font-bold">{stat.value}</p>
                </div>
                <p className="text-muted-foreground text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
}
