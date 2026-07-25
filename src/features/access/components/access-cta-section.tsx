"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/ui/button";
import { Eyebrow } from "@/shared/ui/eyebrow";

export function AccessCtaSection() {
  return (
    <section className="py-[130px] text-center" id="get-started">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        className="mx-auto flex max-w-[1312px] flex-col items-center gap-[22px] px-16"
      >
        <Eyebrow>Get started</Eyebrow>
        <h2 className="text-[40px] font-semibold leading-[46px] tracking-[-0.015em]">
          See it work on your data.
        </h2>
        <p className="max-w-[480px] text-lg leading-[29px] text-t2">
          A working session, on your data, in under a week. No slide decks — just your signals,
          structured.
        </p>
        <Button className="mt-1.5 h-12 px-7">Request Access</Button>
      </motion.div>
    </section>
  );
}
