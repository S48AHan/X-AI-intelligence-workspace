"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { HeroScrollSource } from "../model";
import { clamp } from "@/shared/lib/number";

export function useHeroScrollProgress(heroRef: RefObject<HTMLElement | null>): HeroScrollSource {
  const scrollSource = useRef(0);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const updateProgress = () => {
      const bounds = hero.getBoundingClientRect();
      scrollSource.current = clamp(-bounds.top / (bounds.height * 0.72), 0, 1);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [heroRef]);

  return scrollSource;
}
