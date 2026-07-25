"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/shared/ui/button";
import { LogoMark } from "@/shared/ui/icons";

export function SiteHeader() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
      aria-label="Primary navigation"
      className="sticky top-4 z-30 mx-auto mt-4 flex h-16 w-[calc(100%-48px)] max-w-[1312px] items-center rounded-[18px] border border-bdefault bg-[rgba(12,14,18,0.6)] shadow-[0_10px_34px_-10px_rgba(0,0,0,0.7)] backdrop-blur-[18px] backdrop-saturate-[160%]"
    >
      <div className="flex w-full items-center justify-between px-[22px]">
        <a href="#top" className="flex items-center gap-2.5 text-lg font-semibold text-t1">
          <LogoMark className="text-cyan" />
          X-AI
        </a>
        <div className="flex items-center gap-9">
          <div className="hidden gap-8 md:flex">
            {siteConfig.navigation.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-t2 transition-colors hover:text-t1">
                {link.label}
              </a>
            ))}
          </div>
          <Button className="h-10">Request Access</Button>
        </div>
      </div>
    </motion.nav>
  );
}
