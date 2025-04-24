// @/features/landing/components/bg.tsx

import { cn } from "@/lib/utils";

export function Background() {
  return (
    <>
      {/* Background elements */}
      <GridBackground className="opacity-50" />
      
    </>
  );
}

type GridBackgroundProps = {
  className?: string;
};

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px]",
          className
        )}
        aria-hidden="true"
      ></div>
    </>
  );
}

type ColorCircleProps = {
  className?: string;
};

export function ColorCircle({ className }: ColorCircleProps) {
  return (
    <div
      className={cn(
        "absolute -z-10 h-16 w-16 rounded-full  blur-2xl md:h-72 md:w-72 bg-yellow-400/20",
        className
      )}
      aria-hidden="true"
    ></div>
  )
}
