import { cn } from '@/lib/utils';

export function NextLink({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  href: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        'cursor-pointer',
        'hover:underline',
        'transition-colors',
        'duration-200',
        'ease-in-out',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
export const Link = NextLink;
