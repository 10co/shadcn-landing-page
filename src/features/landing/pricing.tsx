'use client';

// External imports
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
// Internal imports
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { ColorCircle } from './components/bg';
import { Block } from './components/block';

/**
 * SectionTitle component for consistent headings across sections
 */
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
        <span className="relative">{title}</span>
      </h2>
      <p className="text-muted-foreground mt-4 max-w-2xl text-center text-lg">
        {subtitle}
      </p>
    </div>
  );
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
};

export type CustomPlan = {
  title: string;
  description: string;
  buttonText: string;
};

export type PricingProps = {
  data: {
    title: string;
    subtitle: string;
    tiers: PricingTier[];
    customPlan: CustomPlan;
  };
};

/**
 * PricingCard component for displaying individual pricing tier
 */
const PricingCard = ({ tier, index }: { tier: PricingTier; index: number }) => {
  const { t } = useTranslation();
  return (
    <Card
      key={index}
      className={cn(
        'relative flex flex-col justify-between overflow-hidden border transition-all duration-300 hover:shadow-lg bg-background/30',
        tier.popular
          ? 'border-primary shadow-md'
          : 'border-border/50 hover:border-primary/20',
      )}
    >
      {tier.popular && (
        <div
          className="absolute -top-10 -right-10 overflow-hidden"
          aria-label="Popular plan"
        >
          <div className="bg-primary flex h-32 w-32 translate-x-2 -translate-y-2 rotate-45 items-center justify-center">
            <span className="text-primary-foreground mt-16 text-sm font-semibold">
              {t('pricing.popular')}
            </span>
          </div>
        </div>
      )}
      <CardHeader className={cn('p-6', tier.popular ? 'bg-primary/5' : '')}>
        <CardTitle>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              {tier.popular && (
                <Sparkles className="text-primary h-5 w-5" aria-hidden="true" />
              )}
              <h3 className="text-xl font-bold tracking-tight">{tier.name}</h3>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-bold">{tier.price}</span>
              {tier.price !== 'Custom' && (
                <span className="text-muted-foreground text-sm">
                  /{t('pricing.month')}
                </span>
              )}
            </div>
          </div>
        </CardTitle>
        <p className="text-muted-foreground mt-2">{tier.description}</p>
      </CardHeader>
      <CardContent className="flex-1 p-6 pt-0 backdrop-blur-md">
        <ul className="space-y-3" aria-label={`Features for ${tier.name} plan`}>
          {tier.features.map((feature: string, j: number) => (
            <li key={j} className="flex items-center gap-2.5">
              <div
                className="bg-primary/10 flex h-5 w-5 items-center justify-center rounded-full"
                aria-hidden="true"
              >
                <Check className="text-primary h-3 w-3" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className={cn(
            'h-12 w-full font-semibold tracking-wide',
            tier.name === 'Enterprise' ? 'gap-2' : '',
          )}
          size="lg"
          variant={tier.popular ? 'default' : 'outline'}
        >
          {tier.cta}
          {tier.name === 'Enterprise' && (
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

/**
 * Main Pricing component
 */
export function Pricing({ data }: PricingProps) {
  const { title, subtitle, tiers, customPlan } = data;

  return (
    <Block id="pricing" className="" aria-labelledby="pricing-heading">
      <ColorCircle className="bg-primary/20 top-1/4 left-1/4 h-72 w-72 "></ColorCircle>
      <ColorCircle className="bg-yellow-500/20 right-1/4 bottom-1/4 h-72 w-72 "></ColorCircle>

      <div className="relative">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <PricingCard key={i} tier={tier} index={i} />
          ))}
        </div>

        {/* Custom plan section */}
        <div className="border-border/50 bg-background/30 mt-24 rounded-xl border p-8 text-center">
          <h3 className="text-2xl font-bold tracking-tight" id="custom-plan">
            {customPlan.title}
          </h3>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-lg">
            {customPlan.description}
          </p>
          <Button
            className="mt-8 h-14 px-8 font-semibold tracking-wide"
            size="lg"
            variant="outline"
          >
            {customPlan.buttonText}
          </Button>
        </div>
      </div>
    </Block>
  );
}
