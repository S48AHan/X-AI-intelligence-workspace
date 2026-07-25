import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  muted?: boolean;
  className?: string;
}

export function Eyebrow({ children, muted = false, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.12em]",
        muted ? "text-t2" : "text-cyan",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" />
      {children}
    </span>
  );
}
