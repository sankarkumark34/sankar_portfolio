import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Portfolio | About",
  description: "Learn more about me and my background",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-6 md:text-4xl">About Me</h1>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Hello! I'm John Doe, a passionate full-stack developer with over 5 years of experience building web
            applications. I enjoy creating elegant solutions to complex problems and am constantly learning new
            technologies to stay at the forefront of web development.
          </p>

          <p className="text-lg text-muted-foreground">
            My journey in web development began during college when I built my first website. Since then, I've worked
            with various companies and clients, helping them achieve their digital goals through innovative solutions.
          </p>

          <p className="text-lg text-muted-foreground">
            When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new recipes in the
            kitchen. I believe in continuous learning and giving back to the community through open-source contributions
            and mentoring.
          </p>

          <div className="pt-4">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <Card className="mb-4">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Bachelor of Science in Computer Science</h3>
                    <p className="text-muted-foreground">University of Technology</p>
                  </div>
                  <Badge>2015-2019</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Full Stack Web Development Bootcamp</h3>
                    <p className="text-muted-foreground">Code Academy</p>
                  </div>
                  <Badge>2020</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-lg border bg-background">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Profile picture"
              width={400}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-xl">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Location</Badge>
                  <span>Chennai, Tamil Nadu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Experience</Badge>
                  <span>5+ Years</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Languages</Badge>
                  <span>English, Tamil</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Interests</Badge>
                  <span>Hiking, Reading, Cooking</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

