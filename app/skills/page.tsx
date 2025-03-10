"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiMysql,
  SiRedis
} from "react-icons/si"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Python", icon: SiPython, color: "#3776AB" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" }
    ]
  }
]

export default function SkillsPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-6 md:text-4xl">
        My <span className="gradient-text">Skills</span>
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Here are the technologies and tools I work with to bring ideas to life.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary"
                    className="flex items-center gap-1 px-3 py-1"
                  >
                    <skill.icon 
                      className="w-4 h-4"
                      style={{ color: skill.color }}
                    />
                    {skill.name}
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
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-500"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

