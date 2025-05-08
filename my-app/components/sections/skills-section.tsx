"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & Others" },
  ]

  const filteredSkills =
    activeCategory === "all"
      ? portfolioData.skills
      : portfolioData.skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,216,190,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(255,216,190,0.05),transparent_40%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-lavender to-peach bg-clip-text text-transparent">
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
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-lavender hover:bg-lavender/90"
                      : "border-lavender/20 hover:border-lavender/40 hover:bg-lavender/5",
                  )}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden border-2 border-lavender/10 hover:border-lavender/30 transition-all duration-300 h-full group">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-peach/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10 text-center">
                        <h3 className="font-semibold mb-2">{skill.name}</h3>
                        <div className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-lavender/10 to-peach/10 text-lavender dark:text-lavender/90">
                          {skill.category}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">My Learning Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-lavender/10 hover:border-lavender/30 transition-all duration-300 hover:shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-lavender/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-lavender">1</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Research</h4>
                  <p className="text-muted-foreground">
                    I stay updated with the latest technologies by following industry leaders, reading documentation,
                    and exploring new tools.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-lavender/10 hover:border-lavender/30 transition-all duration-300 hover:shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-lavender/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-lavender">2</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Practice</h4>
                  <p className="text-muted-foreground">
                    I believe in hands-on learning. I build projects, contribute to open source, and solve coding
                    challenges regularly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-lavender/10 hover:border-lavender/30 transition-all duration-300 hover:shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-lavender/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-lavender">3</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Share</h4>
                  <p className="text-muted-foreground">
                    I solidify my knowledge by teaching others, writing documentation, and participating in developer
                    communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
