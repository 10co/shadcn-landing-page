import { CTAProps } from '@/features/landing/cta';
import { FeaturesProps } from '@/features/landing/features';
import { FooterProps } from '@/features/landing/footer';
import { HeaderProps } from '@/features/landing/header';
import { HeroProps } from '@/features/landing/hero';
import { PricingProps } from '@/features/landing/pricing';
import { TestimonialsProps } from '@/features/landing/testimonials';

export type WebsiteConfig = {
  header: HeaderProps['data'];
  hero: HeroProps['data'];
  features: FeaturesProps['data'];
  testimonials: TestimonialsProps['data'];
  pricing: PricingProps['data'];
  cta: CTAProps['data'];
  footer: FooterProps['data'];
};
