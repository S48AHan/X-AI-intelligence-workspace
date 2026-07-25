import { AccessCtaSection } from "@/features/access";
import { DashboardSection } from "@/features/dashboard";
import { HeroSection } from "@/features/hero";
import { InsightFlowSection } from "@/features/insight-flow";
import { KnowledgeGraphSection } from "@/features/knowledge-graph";
import { SiteFooter } from "@/shared/layout/site-footer";
import { SiteHeader } from "@/shared/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <InsightFlowSection />
        <DashboardSection />
        <KnowledgeGraphSection />
        <AccessCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
