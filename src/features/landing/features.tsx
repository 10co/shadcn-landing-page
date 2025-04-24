'use client';

// External imports
import {
  BarChart3,
  BrainCircuit,
  Inbox,
  LayoutDashboard,
  MessagesSquare,
  Sparkles,
  TimerReset,
  UserCheck,
  Users2,
  Zap,
} from 'lucide-react';

// Internal imports
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <span className="relative">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'text-primary' : ''}>
              {word}{' '}
            </span>
          ))}
        </span>
      </h2>
      <p className="text-muted-foreground mt-4 max-w-2xl text-center text-lg">
        {subtitle}
      </p>
    </div>
  );
};

/**
 * FeatureCard component displaying individual feature with icon and description
 */
const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  return (
    <Card
      key={index}
      className="border-border/50 bg-background/30 hover:border-primary/20 group overflow-hidden rounded-xl border p-1 transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative p-5 backdrop-blur-sm">
        <div className="flex flex-row items-center gap-2">
          <div
            className="group-hover:bg-opacity-80 mb-3 flex flex-row gap-2 h-14 w-14 items-center justify-center rounded-lg transition-all duration-300"
            style={{
              backgroundColor: feature.bgColor,
              color: feature.textColor,
            }}
            aria-hidden="true"
          >
            {feature.icon}
          </div>
          <h2 className="mb-1 text-xl font-semibold tracking-tight">
            {feature.title}
          </h2>
        </div>

        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </Card>
  );
};

export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
};

export type HighlightCapability = {
  icon: React.ReactNode;
  text: string;
};

export type FeatureHighlight = {
  title: string;
  description: string;
  icon: React.ReactNode;
  capabilities: HighlightCapability[];
};

export type FeaturesProps = {
  data: {
    title: string;
    subtitle: string;
    featuresList: Feature[];
    highlight: FeatureHighlight;
  };
};

/**
 * Main Features component
 */
export function Features({ data }: FeaturesProps) {
  const { title, subtitle, featuresList, highlight } = data;

  return (
    <Block id="features" className="" aria-labelledby="features-heading">
      {/* Background elements */}

      <ColorCircle className="top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-purple-500/20 " />
      <ColorCircle className="right-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/20 " />

      <div className="relative ">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Feature highlight */}
        <div className="border-border/50 bg-background/30 mt-24 rounded-xl border p-8 lg:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div
              className="bg-primary/10 flex h-20 w-20 items-center justify-center rounded-lg md:h-24 md:w-24"
              aria-hidden="true"
            >
              {highlight.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold tracking-tight">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground mt-4 text-lg">
                {highlight.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {highlight.capabilities.map((capability, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <span
                      className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full"
                      aria-hidden="true"
                    >
                      {capability.icon}
                    </span>
                    <span className="text-sm font-medium">
                      {capability.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
}
