import { SkillsSection } from "@/components/sections/skills-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { FloatingNav } from "@/components/floating-nav"

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageHeader title="My Skills" description="Technologies and tools I work with" pattern="skills" />
      <main className="flex-1">
        <SkillsSection />
      </main>
      <FloatingNav />
      <SiteFooter />
    </div>
  )
}


// // app/skills/page.tsx
// export default function SkillsPage() {
//   return <h1>Skills Page</h1>;
// }