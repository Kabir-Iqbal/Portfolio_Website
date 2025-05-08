import { ProjectsSection } from "@/components/sections/projects-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { FloatingNav } from "@/components/floating-nav"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageHeader title="My Projects" description="A showcase of my recent work" pattern="projects" />
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <FloatingNav />
      <SiteFooter />
    </div>
  )
}
