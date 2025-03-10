import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | Projects",
  description: "Showcase of my recent projects and work",
}

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media managers to track engagement, growth, and content performance.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Chart.js", "Node.js", "Express", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Weather Application",
    description: "A weather forecast application with location detection, 7-day forecasts, and weather alerts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "Geolocation API", "CSS Modules"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Recipe Finder",
    description: "A recipe search application with filtering by ingredients, dietary restrictions, and meal types.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Spoonacular API", "CSS Grid", "LocalStorage"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-6 md:text-4xl">Projects</h1>

      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Here's a selection of my recent projects. Each project represents different skills and technologies I've worked
        with.
      </p>

      {featuredProjects.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 py-2 flex-grow">
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-0 pt-2 pb-0 flex gap-4">
                      <Button asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <Github className="h-4 w-4" />
                          Source Code
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      <h2 className="text-2xl font-semibold mb-6">All Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col">
            <div className="overflow-hidden h-48">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.tags.length - 4} more
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button size="sm" variant="outline" asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
                  <ExternalLink className="h-3 w-3" />
                  Demo
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
                  <Github className="h-3 w-3" />
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

