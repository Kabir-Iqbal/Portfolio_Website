"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all")
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

  const filteredProjects =
    filter === "all" ? portfolioData.projects : portfolioData.projects.filter((project) => project.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,129,255,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(147,129,255,0.04),transparent_30%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,216,190,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(255,216,190,0.04),transparent_30%)]"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div style={{ opacity, y }} className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-lavender to-peach bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="mt-4 text-muted-foreground max-w-[700px]">
            <p>A selection of my recent work</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center rounded-full border border-lavender/20 p-1 text-sm">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className={cn("rounded-full", filter === "all" ? "bg-lavender hover:bg-lavender/90" : "")}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("featured")}
              className={cn("rounded-full", filter === "featured" ? "bg-lavender hover:bg-lavender/90" : "")}
            >
              Featured
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-lavender/10 hover:border-lavender/30">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || ""}
                    alt={project.title}
                    fill
                    
                    className="object-cover  transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-lavender hover:bg-lavender/90">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-lavender/5 dark:bg-lavender/10 border-lavender/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.liveUrl && (
                    <Button asChild variant="default" size="sm" className="bg-lavender hover:bg-lavender/90">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="border-lavender/20 hover:bg-lavender/5">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
