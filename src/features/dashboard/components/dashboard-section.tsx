import { Eyebrow } from "@/shared/ui/eyebrow";
import { DashboardShell } from "./dashboard-shell";

export function DashboardSection() {
  return (
    <section className="border-t border-bsubtle py-[120px]" id="platform">
      <div className="mx-auto max-w-[1312px] px-16">
        <div className="mb-14 flex max-w-[680px] flex-col gap-[18px]">
          <Eyebrow>The workspace</Eyebrow>
          <h2 className="text-[40px] font-semibold leading-[46px] tracking-[-0.015em]">One surface for every decision.</h2>
          <p className="text-lg leading-[29px] text-t2">Datasets, models, and insights in a single calm interface — built for the people who have to act on what the data says.</p>
        </div>
        <DashboardShell />
      </div>
    </section>
  );
}
