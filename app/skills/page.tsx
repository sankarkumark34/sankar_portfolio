import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Server, Layers, Wrench, Workflow, LineChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | Skills",
  description: "My technical skills and expertise",
}

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication", "Authorization", "Middleware"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase", "Data Modeling", "Indexing"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "DevOps & Deployment",
    icon: <Layers className="h-6 w-6" />,
    skills: ["Git", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Netlify", "Heroku"],
  },
  {
    title: "Tools & Utilities",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["VS Code", "Postman", "npm", "Webpack", "ESLint", "Prettier", "Chrome DevTools"],
  },
  {
    title: "Project Management",
    icon: <Workflow className="h-6 w-6" />,
    skills: ["Agile", "Scrum", "Jira", "Trello", "GitHub Projects", "Documentation"],
  },
  {
    title: "Analytics & SEO",
    icon: <LineChart className="h-6 w-6" />,
    skills: ["Google Analytics", "SEO Optimization", "Performance Optimization", "Accessibility", "Web Vitals"],
  },
]

export default function SkillsPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-6 md:text-4xl">Skills & Expertise</h1>

      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        I've developed a diverse set of skills throughout my career. Here's an overview of my technical expertise and
        the technologies I work with.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-2">
              {category.icon}
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Skill Proficiency</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { skill: "React/Next.js", level: 90 },
            { skill: "JavaScript/TypeScript", level: 85 },
            { skill: "Node.js/Express", level: 80 },
            { skill: "MongoDB", level: 75 },
            { skill: "CSS/Tailwind", level: 85 },
            { skill: "Git/GitHub", level: 80 },
            { skill: "RESTful APIs", level: 85 },
            { skill: "UI/UX Design", level: 70 },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{item.skill}</span>
                <span className="text-muted-foreground">{item.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${item.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

