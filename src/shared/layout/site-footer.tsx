import { siteConfig } from "@/config/site";
import { LogoMark } from "@/shared/ui/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-bsubtle py-8">
      <div className="mx-auto flex max-w-[1312px] items-center justify-between px-16">
        <div className="flex items-center gap-2.5 text-[13px] text-t3">
          <LogoMark size={16} className="text-t3" />
          © 2026 {siteConfig.name} — {siteConfig.productName}
        </div>
        <div className="flex gap-7">
          {siteConfig.footerLinks.map((label) => (
            <a key={label} href="#" className="text-[13px] text-t3 transition-colors hover:text-t2">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
