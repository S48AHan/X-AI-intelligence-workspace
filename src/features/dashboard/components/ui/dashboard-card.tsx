import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface DashboardCardProps {
  title: string;
  meta?: ReactNode;
  legend?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function DashboardCard({ title, meta, legend, children, className }: DashboardCardProps) {
  return (
    <div className={cn("flex flex-col gap-4 rounded-md border border-bsubtle bg-surface2 p-5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold text-t1">{title}</span>
        {legend}
        {meta && <span className="font-mono text-xs text-t3">{meta}</span>}
      </div>
      {children}
    </div>
  );
}
