import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const button = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 text-white",
  {
    variants: {
      variant: {
        primary: "bg-white/10 hover:bg-white/20",
        ghost: "border border-white/20 hover:bg-white/10",
      },
      size: { md: "h-10 px-4", lg: "h-11 px-5" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(button({ variant, size }), className)} {...props} />;
}

export default Button;


