import { Metadata } from 'next'
import VideoGrid from '@/components/VideoGrid'

export const metadata: Metadata = {
  title: 'Projects | Aether Projects',
  description: 'Explore my portfolio of computer science projects including web development, AI, blockchain, and software development solutions. Custom form building and innovative applications.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Computer Science Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my collection of innovative computer science projects and custom solutions.
            From web applications to AI systems, discover cutting-edge technology implementations.
          </p>
        </div>
        <VideoGrid />
      </div>
    </div>
  )
}