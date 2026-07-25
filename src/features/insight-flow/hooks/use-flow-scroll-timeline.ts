"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useFlowScrollTimeline(trackRef: RefObject<HTMLDivElement | null>, fillRef: RefObject<HTMLDivElement | null>, enteredClass: string, activeClass: string) {
  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;
    gsap.registerPlugin(ScrollTrigger);
    const stages = gsap.utils.toArray<HTMLElement>("[data-flow-stage]", track);
    const context = gsap.context(() => {
      stages.forEach((stage) => ScrollTrigger.create({ trigger: stage, start: "top 80%", onEnter: () => stage.classList.add(enteredClass) }));
      gsap.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: track, start: "top center", end: "bottom center", scrub: true } });
      ScrollTrigger.create({
        trigger: track, start: "top bottom", end: "bottom top",
        onUpdate: () => {
          const center = window.innerHeight * 0.5;
          let closestIndex = -1;
          let closestDistance = Infinity;
          stages.forEach((stage, index) => {
            const bounds = stage.getBoundingClientRect();
            if (bounds.top < window.innerHeight && bounds.bottom > 0) {
              const distance = Math.abs(bounds.top + bounds.height / 2 - center);
              if (distance < closestDistance) { closestDistance = distance; closestIndex = index; }
            }
          });
          stages.forEach((stage, index) => stage.classList.toggle(activeClass, index === closestIndex));
        },
      });
    }, track);
    return () => context.revert();
  }, [activeClass, enteredClass, fillRef, trackRef]);
}
