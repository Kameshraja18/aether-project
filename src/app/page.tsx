import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import CategoryFilter from '@/components/CategoryFilter'
import VideoGrid from '@/components/VideoGrid'
import StatsSection from '@/components/StatsSection'

export const metadata: Metadata = {
  title: 'Aether Projects - Computer Science Projects & Custom Solutions',
  description: 'Explore innovative computer science projects and custom form building solutions. Specializing in web applications, AI systems, and tailored software development for CS domains.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryFilter />
      <VideoGrid />
      <StatsSection />
    </div>
  )
}
