"use client";

import { useRef } from "react";
import { Eyebrow } from "@/shared/ui/eyebrow";
import { useFlowScrollTimeline } from "../hooks/use-flow-scroll-timeline";
import { FLOW_STAGES } from "../model/flow-data";
import { FlowStage } from "./flow-stage";
import styles from "../insight-flow.module.css";

export function InsightFlowSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  useFlowScrollTimeline(trackRef, fillRef, styles.entered, styles.active);

  return (
    <section className="border-t border-bsubtle py-[120px]" id="workspace">
      <div className="mx-auto max-w-[1312px] px-16">
        <div className="mb-14 flex max-w-[680px] flex-col gap-[18px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-[40px] font-semibold leading-[46px] tracking-[-0.015em]">From signal to decision, in three moves.</h2>
          <p className="text-lg leading-[29px] text-t2">Scroll the pipeline. Each stage draws itself as raw signal is ingested, reasoned over, and returned as action.</p>
        </div>
        <div ref={trackRef} className={styles.track}>
          <div className={styles.spine}><div ref={fillRef} className={styles.spineFill} /></div>
          {FLOW_STAGES.map((stage, index) => <FlowStage key={stage.visual} stage={stage} reversed={index === 1} />)}
        </div>
      </div>
    </section>
  );
}
