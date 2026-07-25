import type { FlowStage as FlowStageModel } from "../model/flow-types";
import { cn } from "@/shared/lib/cn";
import { FlowVisual } from "./flow-visual";
import styles from "../insight-flow.module.css";

export function FlowStage({ stage, reversed }: { stage: FlowStageModel; reversed: boolean }) {
  return (
    <article data-flow-stage className={cn(styles.stage, reversed && styles.reversed)} tabIndex={0}>
      <div className={styles.node} />
      <div className={styles.visual}><FlowVisual visual={stage.visual} /></div>
      <div className={`${styles.body} flex flex-col gap-3.5`}>
        <span className="font-mono text-[13px] tracking-[0.14em] text-cyan">{stage.number}</span>
        <h3 className="text-[28px] font-semibold leading-[34px] tracking-[-0.01em]">{stage.title}</h3>
        <p className="max-w-[430px] text-base leading-[26px] text-t2">{stage.description}</p>
        <span className="mt-1.5 inline-flex items-center gap-2 font-mono text-[13px] text-t3"><span className={`${styles.arrow} text-cyan`}>→</span><b className="font-medium text-cyan">{stage.hint.value}</b> {stage.hint.label}</span>
      </div>
    </article>
  );
}
