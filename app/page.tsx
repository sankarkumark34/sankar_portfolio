import Hero from "@/components/hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description: "My professional portfolio showcasing my skills and projects",
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}

