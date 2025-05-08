"use client"

import Link from "next/link"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-lavender/10 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,129,255,0.05),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,216,190,0.05),transparent_40%)]"></div>

      <div className="container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-lavender to-peach bg-clip-text text-transparent">
              {portfolioData.name}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">{portfolioData.about.subheading}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-3">
              {portfolioData.socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <motion.div
                    key={link.platform}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-lavender/20 hover:border-lavender/50 hover:bg-lavender/5"
                    >
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        {Icon && <Icon className="h-5 w-5" />}
                        <span className="sr-only">{link.platform}</span>
                      </Link>
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-lavender/10 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
