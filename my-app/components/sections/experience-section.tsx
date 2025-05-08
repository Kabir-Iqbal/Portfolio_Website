"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(147,129,255,0.08),transparent_70%)] dark:bg-[linear-gradient(135deg,rgba(147,129,255,0.04),transparent_70%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-lavender to-peach bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="mt-4 text-muted-foreground max-w-[700px]">
            <p>My professional journey</p>
          </div>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/60 border border-lavender/10 rounded-full p-1 h-auto">
              <TabsTrigger
                value="experience"
                className="rounded-full data-[state=active]:bg-lavender data-[state=active]:text-white px-6 py-2"
              >
                Work Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="rounded-full data-[state=active]:bg-lavender data-[state=active]:text-white px-6 py-2"
              >
                Education
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="experience">
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-lavender/10 hover:border-lavender/30 transition-all duration-300 hover:shadow-md overflow-hidden group">
                    <div className="h-1 w-full bg-gradient-to-r from-lavender to-peach transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription>
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {exp.startDate} - {exp.endDate}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-lavender/5 dark:bg-lavender/10 border-lavender/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-peach/10 hover:border-peach/30 transition-all duration-300 hover:shadow-md overflow-hidden group">
                    <div className="h-1 w-full bg-gradient-to-r from-peach to-lavender transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription>
                            {edu.institution} • {edu.location}
                          </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {edu.startDate} - {edu.endDate}
                        </div>
                      </div>
                    </CardHeader>
                    {edu.description && (
                      <CardContent>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
