import type { ReactNode } from "react";

export function IconChip({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] border border-bdefault bg-elevated">
      {children}
    </div>
  );
}
