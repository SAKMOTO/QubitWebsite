import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-secondary hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-[hsl(222,47%,4%)] font-semibold px-8 py-6 text-base shadow-[var(--shadow-glow)] hover:scale-105 hover:shadow-[0_0_80px_hsl(var(--primary)/0.5)]",
        heroOutline: "border-2 border-[hsl(190,100%,50%,0.5)] bg-transparent text-foreground hover:bg-[hsl(190,100%,50%,0.1)] hover:border-[hsl(190,100%,50%)] px-8 py-6 text-base font-semibold",
        nav: "text-muted-foreground hover:text-foreground bg-transparent px-4",
        glow: "border border-[hsl(var(--gradient-start))] bg-[hsl(var(--gradient-start)/0.12)] text-primary-foreground hover:bg-[hsl(var(--gradient-start)/0.22)] shadow-[0_0_30px_hsl(var(--primary)/0.35)] hover:shadow-[0_0_45px_hsl(var(--primary)/0.6)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
