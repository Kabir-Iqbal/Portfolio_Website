"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function SkillsPreview() {
  // Get a subset of skills for the preview
  const previewSkills = portfolioData.skills.slice(0, 8)

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="mt-4 text-muted-foreground max-w-[700px]">
            <p>Technologies and tools I work with</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {previewSkills.map((skill) => (
            <Badge
              key={skill.name}
              className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500/10 to-orange-500/10 hover:from-purple-500/20 hover:to-orange-500/20 border-purple-500/20"
            >
              {skill.name}
            </Badge>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Button asChild variant="outline" className="group">
            <Link href="/skills" className="flex items-center">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
