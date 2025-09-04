import Section from '@/components/Section'
import ProjectCard, { type Project } from '@/components/ProjectCard'
import { motion } from 'framer-motion'
import { Code, TrendingUp, Database, Zap, Heart, BookOpen } from 'lucide-react'
import data from '@/data/personal.json'

export default function Projects() {
  const projects: Project[] = (data.projects as Project[]) || []

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section id="projects-hero" className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-5"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-600 leading-relaxed">
              Innovative solutions that combine finance, technology, and automation to drive efficiency and create value.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section id="projects-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Project Stats */}
      <Section id="project-stats">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Project Impact
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                value: "40%+",
                label: "Efficiency Improvement",
                description: "Average time savings through automation"
              },
              {
                icon: TrendingUp,
                value: "$200M+",
                label: "Revenue Analyzed",
                description: "Financial data processed and analyzed"
              },
              {
                icon: Heart,
                value: "150+",
                label: "Lives Impacted",
                description: "Stem cell donors recruited for life-saving transplants"
              },
              {
                icon: Code,
                value: "4",
                label: "Major Projects",
                description: "Completed automation and impact solutions"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="font-semibold text-secondary-700 mb-1">{stat.label}</div>
                <div className="text-sm text-secondary-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
