"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mt-4 text-muted-foreground max-w-[700px]">
            <p>{portfolioData.about.subheading}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border-8 border-muted bg-muted">
              <Image
                src={portfolioData.about.image || "/placeholder.svg"}
                alt={portfolioData.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">{portfolioData.about.heading}</h3>
            <div className="text-muted-foreground space-y-4">
              <p>{portfolioData.about.description}</p>
            </div>

            <Button asChild variant="outline" className="group">
              <Link href="/about" className="flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
