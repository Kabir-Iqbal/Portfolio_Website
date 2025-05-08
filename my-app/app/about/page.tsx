import { AboutSection } from "@/components/sections/about-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { FloatingNav } from "@/components/floating-nav"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageHeader title="About Me" description="Learn more about my background and experience" pattern="about" />
      <main className="flex-1">
        <AboutSection />
      </main>
      <FloatingNav />
      <SiteFooter />
    </div>
  )
}
