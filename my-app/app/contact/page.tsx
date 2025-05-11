import { ContactSection } from "@/components/sections/contact-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { FloatingNav } from "@/components/floating-nav"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageHeader title="Contact Me" description="Let's work together on your next project" pattern="contact" />
      <main className="flex-1">
        <ContactSection />
      </main>
      <FloatingNav />
      <SiteFooter />
    </div>
  )
}


// // app/contact/page.tsx
// export default function ContactPage() {
//   return <h1>Contact Page</h1>;
// }