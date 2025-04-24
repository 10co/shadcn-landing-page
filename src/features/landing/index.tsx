/**
 * Home Page Component
 */

'use client';

// Internal imports from feature components
import { useWebsiteConfig } from '@/context/website-config-context';
import { CTA } from '@/features/landing/cta';
import { Features } from '@/features/landing/features';
import { Footer } from '@/features/landing/footer';
import { Header } from '@/features/landing/header';
import { Hero } from '@/features/landing/hero';
import { Pricing } from '@/features/landing/pricing';
import { Testimonials } from '@/features/landing/testimonials';

import { websiteConfig } from '@/config/config';

import { GridBackground } from './components/bg';

export default function LandingPage() {
  const config = useWebsiteConfig();
  return (
    <main className="relative h-full">
      <GridBackground />
      <Header data={config.header} />
      <Hero data={config.hero} />
      <Features data={config.features} />
      <Pricing data={config.pricing} />
      <Testimonials data={config.testimonials} />
      <CTA data={config.cta} />
      <Footer data={config.footer} />
    </main>
  );
}
