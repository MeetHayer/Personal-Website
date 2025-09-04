import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import data from '@/data/personal.json'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    // In a real app, you would send this to your backend
    setTimeout(() => setSent(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section id="contact-hero" className="relative overflow-hidden">
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
                Let's Connect
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-600 leading-relaxed">
              Ready to discuss opportunities in finance, technology, or data analytics? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section id="contact-content">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary-700 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Name
          </label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email
          </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
          </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full group"
                  disabled={sent}
                >
                  {sent ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
                
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-accent-600 text-sm"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
        </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary-700 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">Email</h3>
                    <a 
                      href={`mailto:${data.email}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-secondary-500 to-primary-500 flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">Phone</h3>
                    <a 
                      href={`tel:${data.phone}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">Location</h3>
                    <p className="text-secondary-600">{data.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary-700 mb-6">Connect With Me</h2>
              <div className="space-y-4">
                <a
                  href={data.socials.LinkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700 group-hover:text-primary-600 transition-colors">
                      LinkedIn
                    </h3>
                    <p className="text-sm text-secondary-500">Professional network & updates</p>
                  </div>
                </a>
                
                <a
                  href={data.socials.GitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700 group-hover:text-primary-600 transition-colors">
                      GitHub
                    </h3>
                    <p className="text-sm text-secondary-500">Code repositories & projects</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="card p-8 bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200/50">
              <h2 className="text-xl font-bold text-primary-700 mb-4">Current Status</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-secondary-600">Available for internships & opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-secondary-600">Graduating May 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                  <span className="text-secondary-600">Open to remote & on-site positions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      </div>
  )
}
