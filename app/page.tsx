import Hero from "@/components/hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sankar Portfolio",
  description: "My professional portfolio showcasing my skills and projects",
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}

