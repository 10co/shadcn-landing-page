import { cn } from '@/lib/utils';

export function Block({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32',
        className,
      )}
      aria-labelledby={`${id}-heading`}
    >
      {children}
    </section>
  );
}
