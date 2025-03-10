"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      <div className="container relative py-20 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="gradient-text">Full Stack Developer</span>
                <br />& UI Designer
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Building beautiful & functional web experiences with modern technologies.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="animate-float">
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-background shadow-2xl">
                <Image
                  src="/avatar.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

