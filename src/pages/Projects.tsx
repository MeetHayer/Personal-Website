import Section from '@/components/Section'
import ProjectCarsShowcase from '@/components/ProjectCarsShowcase'
import { motion } from 'framer-motion'
import { Code, TrendingUp, Zap, Heart } from 'lucide-react'

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* ProjBox Showcase with integrated stats */}
      <Section id="projects-showcase" className="py-8">
        <ProjectCarsShowcase />
      </Section>
    </div>
  )
}
