"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Eyebrow } from "@/shared/ui/eyebrow";

const GraphScene = dynamic(() => import("./graph-scene"), { ssr: false });

export function KnowledgeGraphSection() {
  return (
    <section className="relative overflow-hidden border-t border-bsubtle py-30 text-center" id="docs">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-180 w-180 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_62%)] blur-2xl" />
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }} className="relative z-2 mx-auto max-w-328 px-16">
        <Eyebrow>Signature intelligence graph</Eyebrow>
        <h2 className="mt-4.5 text-[40px] font-semibold leading-11.5 tracking-[-0.015em]">Structure emerges.</h2>
        <p className="mx-auto mt-4 max-w-145 text-lg leading-7.25 text-t2">Every concept X-AI reasons over — sources, embeddings, agents, decisions — as one living knowledge graph that self-organizes in real time. <span className="text-t3">Drag to orbit · hover a node.</span></p>
      </motion.div>
      <div className="relative mt-14 h-165 cursor-grab active:cursor-grabbing"><GraphScene /></div>
    </section>
  );
}
