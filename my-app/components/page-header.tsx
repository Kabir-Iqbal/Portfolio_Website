"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  pattern?: "about" | "skills" | "projects" | "experience" | "contact"
}

export function PageHeader({ title, description, className, pattern }: PageHeaderProps) {
  return (
    <div className={cn("relative overflow-hidden border-b border-lavender/10", className)}>
      {/* Background patterns based on page type */}
      {pattern === "about" && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,129,255,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(147,129,255,0.05),transparent_40%)]"></div>
      )}
      {pattern === "skills" && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,216,190,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(255,216,190,0.05),transparent_40%)]"></div>
      )}
      {pattern === "projects" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,129,255,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(147,129,255,0.04),transparent_30%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,216,190,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(255,216,190,0.04),transparent_30%)]"></div>
        </div>
      )}
      {pattern === "experience" && (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(147,129,255,0.08),transparent_70%)] dark:bg-[linear-gradient(135deg,rgba(147,129,255,0.04),transparent_70%)]"></div>
      )}
      {pattern === "contact" && (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,216,190,0.08),transparent_70%)] dark:bg-[linear-gradient(135deg,rgba(255,216,190,0.04),transparent_70%)]"></div>
      )}

      <div className="container py-20 mt-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-lavender to-peach bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-muted-foreground max-w-[700px]"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  )
}
