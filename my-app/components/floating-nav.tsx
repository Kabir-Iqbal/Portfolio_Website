"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Briefcase, FolderKanban, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function FloatingNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        >
          <div className="bg-background/80 backdrop-blur-md border border-lavender/20 rounded-full px-4 py-2 shadow-lg">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                      pathname === item.href
                        ? "text-lavender bg-lavender/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted",
                    )}
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                    {pathname === item.href && (
                      <motion.span
                        layoutId="floating-nav-indicator"
                        className="absolute inset-0 rounded-full border-2 border-lavender"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
