import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | Resume",
  description: "My professional resume and work experience",
}

export default function ResumePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Resume</h1>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-[3fr_1fr]">
        <div className="space-y-8">
          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <CardTitle>Senior Frontend Developer</CardTitle>
                    <Badge className="w-fit">2021 - Present</Badge>
                  </div>
                  <p className="text-muted-foreground">Tech Innovations Inc.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Led the development of the company's flagship SaaS product using React and Next.js</li>
                    <li>Implemented state management solutions using Redux and Context API</li>
                    <li>Collaborated with UX designers to implement responsive and accessible interfaces</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                    <li>Reduced application bundle size by 40% through code splitting and lazy loading</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <CardTitle>Full Stack Developer</CardTitle>
                    <Badge className="w-fit">2019 - 2021</Badge>
                  </div>
                  <p className="text-muted-foreground">WebSolutions Co.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed and maintained multiple client websites using the MERN stack</li>
                    <li>Built RESTful APIs and integrated third-party services</li>
                    <li>Implemented authentication and authorization systems</li>
                    <li>Optimized database queries and improved application performance</li>
                    <li>Participated in agile development processes and sprint planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <CardTitle>Junior Web Developer</CardTitle>
                    <Badge className="w-fit">2018 - 2019</Badge>
                  </div>
                  <p className="text-muted-foreground">Digital Agency XYZ</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed responsive websites using HTML, CSS, and JavaScript</li>
                    <li>Assisted in implementing UI components with React</li>
                    <li>Collaborated with designers to translate mockups into functional web pages</li>
                    <li>Fixed bugs and improved website performance</li>
                    <li>Participated in client meetings and requirement gathering</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Education</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                    <Badge className="w-fit">2015 - 2019</Badge>
                  </div>
                  <p className="text-muted-foreground">University of Technology</p>
                </CardHeader>
                <CardContent>
                  <p>
                    Graduated with honors. Coursework included Data Structures, Algorithms, Web Development, Database
                    Systems, and Software Engineering.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <CardTitle>Full Stack Web Development Bootcamp</CardTitle>
                    <Badge className="w-fit">2020</Badge>
                  </div>
                  <p className="text-muted-foreground">Code Academy</p>
                </CardHeader>
                <CardContent>
                  <p>Intensive 12-week program focused on modern web development technologies and best practices.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Certifications</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-1">AWS Certified Developer</h3>
                  <p className="text-sm text-muted-foreground">Amazon Web Services, 2022</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-1">MongoDB Certified Developer</h3>
                  <p className="text-sm text-muted-foreground">MongoDB, 2021</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-1">React Developer Certification</h3>
                  <p className="text-sm text-muted-foreground">Meta, 2023</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-1">Google UX Design Certificate</h3>
                  <p className="text-sm text-muted-foreground">Google, 2022</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-muted-foreground">john.doe@example.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Location</h3>
                <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">LinkedIn</h3>
                <Link href="https://linkedin.com" className="text-primary hover:underline">
                  linkedin.com/in/johndoe
                </Link>
              </div>
              <div>
                <h3 className="font-semibold text-sm">GitHub</h3>
                <Link href="https://github.com" className="text-primary hover:underline">
                  github.com/johndoe
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">HTML5</Badge>
                <Badge variant="secondary">CSS3</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">RESTful APIs</Badge>
                <Badge variant="secondary">GraphQL</Badge>
                <Badge variant="secondary">AWS</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>English</span>
                  <span>Native</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Spanish</span>
                  <span>Fluent</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>French</span>
                  <span>Basic</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full bg-primary rounded-full" style={{ width: "40%" }} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Web Development</Badge>
                <Badge variant="outline">Open Source</Badge>
                <Badge variant="outline">UI/UX Design</Badge>
                <Badge variant="outline">Hiking</Badge>
                <Badge variant="outline">Photography</Badge>
                <Badge variant="outline">Reading</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

