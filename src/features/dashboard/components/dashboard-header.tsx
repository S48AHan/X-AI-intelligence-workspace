import { BellIcon, SearchIcon } from "@/shared/ui/icons";

export function DashboardHeader({ section }: { section: string }) {
  return (
    <div className="flex items-center justify-between">
      <div><h3 className="text-xl font-semibold">{section}</h3><div className="mt-0.5 text-[13px] text-t3">Live intelligence across all connected sources</div></div>
      <div className="flex items-center gap-3.5">
        <div className="flex h-9 w-[220px] items-center gap-2 rounded-lg border border-bsubtle bg-surface2 px-3 text-[13px] text-t3"><SearchIcon className="text-t3" />Search insights…</div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-bsubtle bg-surface2 text-t2"><BellIcon /></div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan to-violet" />
      </div>
    </div>
  );
}
