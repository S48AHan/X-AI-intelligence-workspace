import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "ghost" | "secondary";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-cyan text-[#062024] hover:brightness-110",
  ghost: "bg-transparent text-t2 border-bsubtle hover:text-t1 hover:border-bdefault",
  secondary: "bg-surface2 text-t1 border-bdefault hover:border-bstrong",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({
  children,
  variant = "primary",
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-transparent px-[22px] text-sm font-semibold transition-[filter,color,border-color] duration-200",
        variantClasses[variant],
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
