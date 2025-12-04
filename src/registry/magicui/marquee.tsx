import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends PropsWithChildren {
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  reverse,
  pauseOnHover,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [--gap:2rem] [--duration:30s]",
        reverse && "[--direction:reverse]",
        className,
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-[--gap] animate-marquee [animation-duration:var(--duration)] [animation-direction:var(--direction,normal)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex min-w-full shrink-0 gap-[--gap] animate-marquee [animation-duration:var(--duration)] [animation-direction:var(--direction,normal)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
