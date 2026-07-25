"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useHeroScrollProgress } from "../hooks/use-hero-scroll-progress";
import { Eyebrow } from "@/shared/ui/eyebrow";
import styles from "../hero.module.css";

const HeroCanvas = dynamic(() => import("./hero-canvas"), { ssr: false });
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.2, 0.7, 0.2, 1] as const } } };

export function HeroSection() {
  const heroRef   = useRef<HTMLElement>(null);
  const scrollSource = useHeroScrollProgress(heroRef);

  return (
    <header ref={heroRef} id="top" className="relative flex min-h-[calc(100svh-80px)] flex-col justify-center overflow-hidden px-0 py-36 text-center md:min-h-[800px] md:py-[190px]">
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[680px] w-[min(1200px,100vw)] -translate-x-1/2 rounded-full bg-cyan/[0.09] blur-[170px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_46%_39%_at_50%_52%,rgba(8,9,11,0.88)_0%,rgba(8,9,11,0.46)_56%,transparent_100%)]" />
      <div className={`${styles.canvas} absolute inset-0`}><HeroCanvas scrollSource={scrollSource} /></div>
      <motion.div variants={container} initial="hidden" animate="show" className="pointer-events-none relative z-[2] mx-auto flex max-w-[1312px] flex-col items-center gap-6 px-6 md:gap-7 md:px-16">
        <motion.div variants={item}><Eyebrow>Intelligence Workspace</Eyebrow></motion.div>
        <motion.h1 variants={item} className="max-w-[820px] text-[clamp(2.7rem,5vw,3.75rem)] font-semibold leading-[1.07] tracking-[-0.02em]">Turn raw data into decisions.</motion.h1>
        <motion.p variants={item} className="max-w-[600px] text-base leading-7 text-t2 md:text-lg md:leading-[29px]">X-AI ingests, structures, and reasons over every signal your business produces — turning scattered raw data into decisions your team can act on today.</motion.p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }} className="pointer-events-none absolute bottom-10 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-3"><span className="font-mono text-[10px] tracking-[0.24em] text-t3">SCROLL</span><span className="h-[46px] w-px bg-gradient-to-b from-cyan to-transparent" /></motion.div>
    </header>
  );
}
