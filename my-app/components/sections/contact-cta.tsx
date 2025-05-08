"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function ContactCta() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-muted p-8 md:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 dark:from-purple-500/5 dark:to-orange-500/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
              {portfolioData.contact.heading}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[700px]">{portfolioData.contact.subheading}</p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white group">
                <Link href="/contact" className="flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
