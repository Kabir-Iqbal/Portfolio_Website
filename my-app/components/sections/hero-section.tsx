"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/data"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrollY = window.scrollY
      const sectionHeight = sectionRef.current.offsetHeight
      const opacity = 1 - Math.min(scrollY / (sectionHeight * 0.5), 1)
      sectionRef.current.style.opacity = opacity.toString()
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,129,255,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(147,129,255,0.1),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,216,190,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(255,216,190,0.1),transparent_40%)]"></div>

        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lavender/5 dark:bg-lavender/3 blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-peach/5 dark:bg-peach/3 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-lavender/5 dark:bg-lavender/3 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center rounded-full border border-lavender/20 bg-lavender/5 px-4 py-1.5 text-sm font-medium"
          >
            <span className="block h-2 w-2 rounded-full bg-gradient-to-r from-lavender to-peach mr-2"></span>
            <span className="text-gradient">Available for freelance work</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-lavender to-peach bg-clip-text text-transparent relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {portfolioData.name}
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {portfolioData.title} specializing in creating beautiful, functional, and accessible digital experiences.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-lavender hover:bg-lavender/90 text-white group">
              <Link href="/projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-lavender/20 hover:bg-lavender/5 group">
              <Link href="/contact" className="flex items-center">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          className="relative hidden lg:block"
        >
          <div className="relative h-[500px] w-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender/20 to-peach/20 blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-muted"></div>
            <div className="absolute inset-6 overflow-hidden rounded-full border-8 border-muted">
              <Image
                src={portfolioData.about.image || "/placeholder.svg"}
                alt={portfolioData.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-lavender/10 rounded-full border border-lavender/20 flex items-center justify-center animate-float">
              <div className="text-2xl font-bold text-lavender">1+</div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-peach/10 rounded-full border border-peach/20 flex items-center justify-center animate-float animation-delay-2000">
              <div className="text-center">
                <div className="text-xl font-bold text-peach">100%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          scroll={true}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
