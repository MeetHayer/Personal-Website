import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Briefcase, GraduationCap, Award, Mail, Phone, MapPin } from 'lucide-react'
import data from '@/data/personal.json'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-5"></div>
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-medium">
                  <GraduationCap size={16} />
                  {data.education.degree} • {data.education.school}
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                    {data.name}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-secondary-600 max-w-2xl leading-relaxed">
                  {data.tagline}
                </p>
                
                <p className="text-lg text-secondary-500 max-w-3xl leading-relaxed">
                  {data.bio}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link className="btn btn-primary group" to="/projects">
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a className="btn btn-secondary group" href={`mailto:${data.email}`}>
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  Email Me
                </a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-6 text-sm text-secondary-600"
              >
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary-500" />
                  <a href={`mailto:${data.email}`} className="hover:text-primary-600 transition-colors">
                    {data.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-primary-500" />
                  <a href={`tel:${data.phone}`} className="hover:text-primary-600 transition-colors">
                    {data.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary-500" />
                  {data.location}
                </div>
              </motion.div>
            </div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="card p-8 bg-gradient-to-br from-white to-primary-50/30 border-primary-200/50">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                        <Award className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Academic Excellence</h3>
                        <p className="text-sm text-secondary-600">GPA: {data.education.gpa}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-primary-700">Key Achievements</h4>
                      <ul className="space-y-2 text-sm">
                        {data.education.awards.map((award, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                            <span className="text-secondary-600">{award}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Preview */}
      <Section id="skills-preview">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              ...data.skills.programming.slice(0, 3),
              ...data.skills.software.slice(0, 2),
              "Financial Modeling"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-4 text-center hover:shadow-lg transition-all duration-300"
              >
                <Code className="mx-auto mb-2 text-primary-500" size={24} />
                <span className="font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Highlights */}
      <Section id="highlights">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Explore My Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Projects', 
                desc: 'Data automation tools, financial models, and innovative solutions that drive efficiency.', 
                to: '/projects',
                icon: Code,
                color: 'from-primary-500 to-primary-600'
              },
              { 
                title: 'Experience', 
                desc: 'Professional journey in finance, analytics, and process optimization across diverse industries.', 
                to: '/about',
                icon: Briefcase,
                color: 'from-secondary-500 to-secondary-600'
              },
              { 
                title: 'Writing', 
                desc: 'Thoughts on finance, technology, and the intersection of data analytics with real-world impact.', 
                to: '/writing',
                icon: GraduationCap,
                color: 'from-accent-500 to-accent-600'
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link to={card.to} className="group block">
                  <div className="card p-8 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {card.desc}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn more
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
