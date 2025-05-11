"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { portfolioData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const textY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,129,255,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(147,129,255,0.05),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,216,190,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(255,216,190,0.05),transparent_40%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-lavender to-peach bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mt-4 text-muted-foreground max-w-[700px]">
            <p>{portfolioData.about.subheading}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ scale: imageScale, opacity: imageOpacity }}>
            <div className="relative aspect-square overflow-hidden rounded-2xl border-8 border-muted bg-muted group">
              <Image
                src={portfolioData.about.image }
                alt={portfolioData.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lavender/10 to-peach/10 mix-blend-overlay"></div>

              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-lavender to-peach rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-peach to-lavender rounded-full blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
            </div>
          </motion.div>

          <motion.div style={{ opacity: textOpacity, y: textY }} className="space-y-6">
            <h3 className="text-2xl font-bold">{portfolioData.about.heading}</h3>
            <div className="text-muted-foreground space-y-4">
              <p>{portfolioData.about.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="overflow-hidden border-lavender/20 hover:border-lavender/40 transition-colors group">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold bg-gradient-to-r from-lavender to-lavender/70 bg-clip-text text-transparent">
                      {portfolioData.projects.length}+
                    </div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-peach/20 hover:border-peach/40 transition-colors group">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-peach/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold bg-gradient-to-r from-peach to-peach/70 bg-clip-text text-transparent">
                      1+
                    </div>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold bg-gradient-to-r from-lavender to-lavender/70 bg-clip-text text-transparent">
                Education
              </h4>
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card
                      className={cn(
                        "border-lavender/10 hover:border-lavender/30 transition-all duration-300 hover:shadow-md",
                        "relative overflow-hidden",
                      )}
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lavender to-peach"></div>
                      <CardContent className="p-6">
                        <h5 className="font-bold">{edu.degree}</h5>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}, {edu.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.startDate} - {edu.endDate}
                        </p>
                        {edu.description && <p className="mt-2 text-sm">{edu.description}</p>}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-semibold bg-gradient-to-r from-peach to-peach/70 bg-clip-text text-transparent">
                Personal Interests
              </h4>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-peach/10 hover:border-peach/30 transition-all duration-300 hover:shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-peach to-lavender"></div>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lavender to-peach mr-2"></div>
                        Exploring new technologies and frameworks
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lavender to-peach mr-2"></div>
                        Contributing to open-source projects
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lavender to-peach mr-2"></div>
                        Attending tech conferences and meetups
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lavender to-peach mr-2"></div>
                        Hiking and outdoor adventures
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lavender to-peach mr-2"></div>
                        Reading books on technology and personal development
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lavender to-peach mr-2"></div>
                        Photography and visual design
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
