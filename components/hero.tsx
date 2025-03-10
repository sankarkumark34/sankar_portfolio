import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm <span className="text-primary">Sankarkumar</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Full Stack Developer specializing in building exceptional digital experiences
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/projects">
                <Button className="gap-1">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resume">
                <Button variant="outline" className="gap-1">
                  Download Resume
                  <Download className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted md:w-[350px]">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

