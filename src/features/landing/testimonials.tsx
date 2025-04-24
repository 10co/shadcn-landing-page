'use client';

// External imports
import { QuoteIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Internal imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

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

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export type TestimonialsProps = {
  data: {
    title: string;
    subtitle: string;
    testimonialsList: Testimonial[];
  };
};

/**
 * TestimonialCard component for displaying individual customer testimonial
 */
const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  const { t } = useTranslation();
  return (
    <Card
      key={index}
      className="border-border/50 bg-background/30 hover:border-primary/20 group overflow-hidden rounded-xl border p-1 transition-all duration-300 hover:shadow-lg"
    >
      <CardContent className="p-6 h-full">
        <div className="flex flex-col justify-between gap-5 backdrop-blur-sm h-full">
          <div className="flex items-center justify-between">
            <div
              className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full transition-all"
              aria-hidden="true"
            >
              <QuoteIcon className="text-primary h-6 w-6" />
            </div>
            <div className="text-muted-foreground text-right text-sm tracking-wide italic">
              {t('testimonials.clientTestimonial')}
            </div>
          </div>

          <p className="text-foreground text-lg">
            <span aria-hidden="true">&ldquo;</span>
            <span>{testimonial.quote}</span>
            <span aria-hidden="true">&ldquo;</span>
          </p>

          <div className="flex items-center gap-4 border-t pt-5">
            <Avatar className="border-border/50 h-12 w-12 border-2">
              <AvatarImage
                src={testimonial.avatar}
                alt={`${testimonial.author}'s avatar`}
              />
              <AvatarFallback className="bg-primary/5 text-primary font-semibold">
                {testimonial.author.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold tracking-tight">
                {testimonial.author}
              </div>
              <div className="text-muted-foreground text-sm">
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * Main Testimonials component
 */
export function Testimonials({ data }: TestimonialsProps) {
  const { title, subtitle, testimonialsList } = data;

  return (
    <Block
      id="testimonials"
      className=""
      aria-labelledby="testimonials-heading"
    >
      {/* Background elements */}

      <ColorCircle className="bg-primary/20 absolute right-1/4 bottom-1/4  h-72 w-72  "></ColorCircle>
      <ColorCircle className="top-1/4 left-1/4  h-72 w-72  bg-yellow-500/20"></ColorCircle>

      <div className="relative">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsList.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </Block>
  );
}
