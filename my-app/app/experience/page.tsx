import { ExperienceSection } from "@/components/sections/experience-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { FloatingNav } from "@/components/floating-nav"

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageHeader title="Experience" description="My professional journey and education" pattern="experience" />
      <main className="flex-1">
        <ExperienceSection />
      </main>
      <FloatingNav />
      <SiteFooter />
    </div>
  )
}
