import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Code, Database, TrendingUp, Users, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import data from '@/data/personal.json'
import { useState } from 'react'

// Volunteer Card Component
function VolunteerCard({ volunteer, index }: { volunteer: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Postcard Container */}
      <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 h-full">
        {/* Postcard Header */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Users className="text-white" size={16} />
            </div>
            <div className="text-right">
              <div className="text-xs opacity-90">{volunteer.period}</div>
              <div className="text-xs opacity-75">{volunteer.location}</div>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-1">{volunteer.title}</h3>
          <p className="text-sm font-semibold opacity-90">{volunteer.company}</p>
          {volunteer.tagline && (
            <p className="text-xs opacity-80 mt-1 italic">"{volunteer.tagline}"</p>
          )}
        </div>
        
        {/* Postcard Content */}
        <div className="p-4 space-y-3">
          <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
            {volunteer.description}
          </p>
          
          {/* Expandable Achievements */}
          <div className="space-y-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-left"
            >
              <h4 className="font-semibold text-slate-700 dark:text-slate-200 text-xs">Key Impact:</h4>
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-1">
                {volunteer.achievements.map((achievement: string, achIndex: number) => (
                  <li key={achIndex} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <div className="w-1 h-1 rounded-full bg-violet-500 mt-1.5 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Postcard Decorative Elements */}
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-violet-400/30"></div>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Side-by-Side Layout */}
      <Section id="about-hero" className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-5"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-6xl mx-auto mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* About Box - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-8 bg-gradient-to-br from-primary-50/50 to-accent-50/50 border-primary-200/50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Who I Am
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-primary-700 font-heading">Introduction</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      I grew up in a semi-urban town in Punjab, India, and came to DePauw University on a full Bonner Program scholarship. Numbers have always been my thing, and college opened up the world of business and finance—fields I never had access to back home. Since then, I've been hooked on how money and value are created and multiplied through corporate planning, investment analysis, M&A, and business process optimization.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-primary-700 font-heading">Interests</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      Outside the classroom, you'll usually find me working out, singing, playing chess, hiking, or shooting pool. I'm also a curious reader and love diving into anything business- or politics-related.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-primary-700 font-heading">What I Work On</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      I like tackling problems where finance meets tech. My experience spans data visualization and analytics, process optimization and automation, business strategy, CRM management, marketing insights, and product analysis—always with an eye on making systems run smarter and more efficiently.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-primary-200/50">
                  <div className="flex items-center gap-2 text-sm text-primary-600 font-medium">
                    <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></div>
                    <span>Always learning, always growing</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Box - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card p-8 bg-gradient-to-br from-secondary-50/50 to-primary-50/50 border-secondary-200/50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Education
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-700">{data.education.degree}</h3>
                    <p className="text-lg text-secondary-600">{data.education.school}</p>
                    <p className="text-secondary-500">Expected Graduation: {data.education.graduation}</p>
                    <p className="text-primary-600 font-semibold">GPA: {data.education.gpa}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-primary-700">Awards & Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.education.awards.map((award, index) => (
                        <span key={index} className="badge bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 hover:scale-105 transition-transform duration-200">
                          <Award size={14} className="mr-1" />
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {data.education.academicExcellence && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-primary-700">Academic Journey</h4>
                      <ul className="space-y-2">
                        {data.education.academicExcellence.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {data.workExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary-500 to-primary-500 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-white" size={28} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-700">{exp.title}</h3>
                      <p className="text-lg text-secondary-600">{exp.company}</p>
                      <p className="text-secondary-500">{exp.location} • {exp.period}</p>
                    </div>
                    
                    <p className="text-secondary-600 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary-700">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-secondary-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Volunteer Experience Section */}
      <Section id="volunteer" className="pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Volunteer Experience
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {data.volunteerExperience.map((volunteer, index) => (
              <VolunteerCard key={index} volunteer={volunteer} index={index} />
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Programming & Development',
                skills: data.skills.programming,
                icon: Code,
                color: 'from-primary-500 to-primary-600',
                description: 'Full-stack development with modern frameworks and automation tools'
              },
              {
                title: 'Financial Software & ERP',
                skills: data.skills.software,
                icon: Database,
                color: 'from-secondary-500 to-secondary-600',
                description: 'Enterprise systems, BI tools, and financial modeling platforms'
              },
              {
                title: 'Financial Analysis & Modeling',
                skills: data.skills.finance,
                icon: TrendingUp,
                color: 'from-accent-500 to-accent-600',
                description: 'Advanced financial modeling, valuation, and risk analysis'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-primary-700">{category.title}</h3>
                <p className="text-sm text-secondary-500 mb-4 leading-relaxed">{category.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="badge text-xs text-center py-2 px-3">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {data.skills.specializations && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-6 text-primary-700">Specializations</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {data.skills.specializations.map((specialization, index) => (
                    <span key={index} className="badge bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 text-sm px-4 py-2">
                      {specialization}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <h3 className="text-2xl font-bold text-center mb-6 text-primary-700">Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {data.skills.languages.map((language, index) => (
                  <span key={index} className="badge bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm px-4 py-2">
                    <Globe size={14} className="mr-1" />
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

    </div>
  )
}
