import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Code, Database, TrendingUp, Users, Globe } from 'lucide-react'
import data from '@/data/personal.json'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section id="about-hero" className="relative overflow-hidden">
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
                About Me
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-600 leading-relaxed">
              {data.bio}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary-700">{data.education.degree}</h3>
                  <p className="text-lg text-secondary-600">{data.education.school}</p>
                  <p className="text-secondary-500">Expected Graduation: {data.education.graduation}</p>
                  <p className="text-primary-600 font-semibold">GPA: {data.education.gpa}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-primary-700">Awards & Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.education.awards.map((award, index) => (
                      <span key={index} className="badge bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700">
                        <Award size={14} className="mr-1" />
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
            {data.experience.map((exp, index) => (
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

      {/* Skills Section */}
      <Section id="skills">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Programming',
                skills: data.skills.programming,
                icon: Code,
                color: 'from-primary-500 to-primary-600'
              },
              {
                title: 'Software & Tools',
                skills: data.skills.software,
                icon: Database,
                color: 'from-secondary-500 to-secondary-600'
              },
              {
                title: 'Finance & Analytics',
                skills: data.skills.finance,
                icon: TrendingUp,
                color: 'from-accent-500 to-accent-600'
              },
              {
                title: 'Languages',
                skills: data.skills.languages,
                icon: Globe,
                color: 'from-primary-500 to-accent-500'
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
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-4 text-primary-700">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="badge block text-center">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Programs Section */}
      <Section id="programs">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Leadership & Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {data.programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-primary-700">{program.name}</h3>
                      <p className="text-secondary-500">{program.period}</p>
                    </div>
                    <p className="text-secondary-600 leading-relaxed">{program.description}</p>
                    <div className="space-y-1">
                      {program.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2 text-sm text-secondary-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </div>
            ))}
          </div>
        </div>
      </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </Section>
    </div>
  )
}
