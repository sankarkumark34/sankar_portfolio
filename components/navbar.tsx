"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-effect border-b py-4" : "bg-transparent py-6"
    )}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="gradient-text">Sankar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {[
            ["About", "/about"],
            ["Skills", "/skills"],
            ["Projects", "/projects"],
            ["Resume", "/resume"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex"
            asChild
          >
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

