import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Database, TrendingUp, Zap } from 'lucide-react'
import data from '@/data/personal.json'
import { useState, useEffect } from 'react'
import CoursesBelt from '@/components/CoursesBelt'

// Dynamic Skills Component with Toggle
function DynamicSkills() {
  const [activeSection, setActiveSection] = useState<'programming' | 'financial'>('financial')
  
  const skillCategories = {
    programming: {
      title: 'Programming & Development',
      skills: data.skills.programming,
      icon: Code,
      color: 'from-primary-500 to-primary-600',
      description: 'Full-stack development with modern frameworks'
    },
    financial: {
      title: 'Financial, ERP & other softwares',
      skills: data.skills.software,
      icon: Database,
      color: 'from-emerald-500 to-teal-600',
      description: 'Enterprise systems and BI tools'
    }
  }

  const [currentSkill, setCurrentSkill] = useState(0)
  const currentCategory = skillCategories[activeSection]

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % currentCategory.skills.length)
    }, 2000)

    return () => {
      clearInterval(skillInterval)
    }
  }, [currentCategory.skills.length])

  const currentSkillData = currentCategory.skills[currentSkill]

  return (
    <div className="text-center space-y-8">
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        
        {/* Toggle Switch */}
        <div className="flex items-center gap-2 bg-primary-100 rounded-full p-1">
          <button
            onClick={() => setActiveSection('programming')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === 'programming'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-primary-600 hover:text-primary-700'
            }`}
          >
            <Code size={16} className="inline mr-2" />
            Dev
          </button>
          <button
            onClick={() => setActiveSection('financial')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === 'financial'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-primary-600 hover:text-primary-700'
            }`}
          >
            <Database size={16} className="inline mr-2" />
            Finance
          </button>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-8 bg-gradient-to-br from-white to-primary-50/30 border-primary-200/50 relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-400 to-accent-400 transform rotate-12 scale-150"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <currentCategory.icon className="text-white" size={28} />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary-700">{currentCategory.title}</h3>
                <p className="text-secondary-600">{currentCategory.description}</p>
              </div>
            </div>
            
            <motion.div
              key={currentSkill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {currentSkillData}
              </div>
              <div className="flex justify-center gap-2">
                {currentCategory.skills.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSkill ? 'bg-primary-500' : 'bg-primary-200'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Creative Skills Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to="/about"
            onClick={() => {
              window.scrollTo(0, 0);
              setTimeout(() => {
                const skillsSection = document.getElementById('skills');
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold text-lg hover:from-primary-600 hover:to-accent-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Zap size={20} className="text-white" />
            </div>
            <span>Explore Full Skills Arsenal</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-medium dark:from-electric-500/20 dark:to-accent-500/20 dark:text-electric-300 dark:border dark:border-electric-500/30">
                  <GraduationCap size={16} />
                  {data.education.degree} • {data.education.school}
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight font-heading">
                  <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent dark:professional-gradient-text">
                    {data.name}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-secondary-600 max-w-2xl leading-relaxed dark:text-slate-300">
                  {data.tagline}
                </p>
                
                <p className="text-lg text-secondary-500 max-w-3xl leading-relaxed dark:text-slate-400">
                  {data.bio}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  className="btn btn-primary group text-lg px-8 py-4 font-semibold" 
                  to="/about"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                      const experienceSection = document.getElementById('experience');
                      if (experienceSection) {
                        experienceSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  <Briefcase size={20} className="group-hover:scale-110 transition-transform" />
                  View My Experience
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  className="btn btn-secondary group" 
                  to="/projects"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Code size={18} className="group-hover:scale-110 transition-transform" />
                  View My Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  className="btn btn-outline group" 
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  Contact Me
                </Link>
              </motion.div>
            </div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Headshot Placeholder - Ready for your photo! */}
                <div className="card p-8 bg-gradient-to-br from-white to-primary-50/30 border-primary-200/50 text-center">
                  <div className="space-y-6">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center border-4 border-primary-200/50">
                      <div className="text-6xl">📸</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-700 mb-2">Ready for Headshot!</h3>
                      <p className="text-secondary-600">Your professional photo will go here</p>
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

      {/* Dynamic Skills Preview */}
      <Section id="skills-preview">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <DynamicSkills />
        </motion.div>
      </Section>

      {/* Courses Belt */}
      <Section id="courses-belt" className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Academic Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore the diverse courses that shaped my knowledge in finance, computer science, and beyond
            </p>
          </div>
          
          <CoursesBelt />
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
                color: 'from-violet-500 to-purple-600'
              },
              { 
                title: 'Volunteering', 
                desc: 'As a Bonner Scholar, I spent 140+ hours every semester in community & social service', 
                to: '/about',
                icon: Briefcase,
                color: 'from-violet-500 to-purple-600',
                onClick: () => {
                  window.scrollTo(0, 0);
                  setTimeout(() => {
                    const volunteerSection = document.getElementById('volunteer');
                    if (volunteerSection) {
                      volunteerSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              },
              { 
                title: 'Writing', 
                desc: 'Thoughts on finance, technology, and the intersection of data analytics with real-world impact.', 
                to: '/writing',
                icon: GraduationCap,
                color: 'from-cyan-500 to-blue-500'
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={card.to} 
                  className="group block"
                  onClick={card.onClick || (() => window.scrollTo(0, 0))}
                >
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

      {/* Contact Info Section */}
      <Section id="contact-info" className="bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-slate-900/50 dark:to-slate-800/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent dark:professional-gradient-text">
            Let's Connect
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-secondary-600 dark:text-slate-300 mb-8">
              Ready to discuss opportunities or collaborate on innovative projects? I'd love to hear from you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <Mail className="mx-auto mb-4 text-pink-500 dark:text-pink-400" size={32} />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a 
                  href={`mailto:${data.email}`} 
                  className="text-secondary-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-300 transition-colors"
                >
                  {data.email}
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <Phone className="mx-auto mb-4 text-green-500 dark:text-green-400" size={32} />
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <a 
                  href={`tel:${data.phone}`} 
                  className="text-secondary-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                >
                  {data.phone}
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="mx-auto mb-4 text-indigo-500 dark:text-indigo-400" size={32} />
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-secondary-600 dark:text-slate-300">
                  {data.location}
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link 
                className="btn btn-primary group" 
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
