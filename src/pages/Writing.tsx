import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { Calendar, Tag, MapPin, Heart, Music, TrendingUp } from 'lucide-react'
import data from '@/data/personal.json'

type Post = { title: string; slug: string; summary: string; date: string; tags: string[] }

export default function Writing() {
  const posts: Post[] = (data.posts as Post[]) || []
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section id="writing-hero" className="relative overflow-hidden">
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
                My Thoughts
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-600 leading-relaxed">
              Exploring the intersection of finance, technology, and human impact through data-driven insights.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Introduction Post */}
      <Section id="introduction">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <article className="card p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                  <Heart className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-700">Hello, I'm Manmeet</h2>
                  <div className="flex items-center gap-4 text-sm text-secondary-500 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      Punjab, India → DePauw University
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      January 15, 2025
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-secondary-600 leading-relaxed space-y-4">
                <p>
                  Born and raised in the vibrant state of Punjab, India, I've always been fascinated by the power of numbers and their ability to tell compelling stories. My journey from the bustling streets of Punjab to the academic halls of DePauw University has been nothing short of transformative.
                </p>
                
                <p>
                  When I'm not diving deep into financial models or building automation solutions, you'll find me exploring new places through travel, expressing myself through music and singing, or analyzing the latest trends in financial markets. There's something magical about how data can reveal patterns that were previously hidden, and I'm passionate about using technology and AI to advance financial and investment modeling.
                </p>
                
                <p>
                  My work in VBA automation, Oracle ERP systems, and financial analysis isn't just about efficiency—it's about creating tools that can help businesses make better decisions and ultimately create more value. Whether it's processing $200M+ in financial data or facilitating life-saving stem cell transplants, I believe technology should serve a greater purpose.
                </p>
                
                <p>
                  I'm particularly excited about the future of financial modeling and how artificial intelligence can revolutionize how we approach investment analysis, risk assessment, and portfolio optimization. The intersection of finance and technology is where I thrive, and I'm always eager to explore new ways to make complex financial concepts more accessible and actionable.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {['introduction', 'personal', 'journey', 'finance', 'technology', 'passion'].map((tag) => (
                  <span key={tag} className="badge bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700">
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </motion.div>
      </Section>

      {/* Other Posts */}
      {posts.length > 1 && (
        <Section id="other-posts">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              More Posts
            </h2>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {posts.slice(1).map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">{post.title}</h3>
                  <p className="text-secondary-600 mb-4">{post.summary}</p>
                  <div className="flex gap-2 items-center text-sm text-secondary-500">
                    <Calendar size={14} />
                    <time>{post.date}</time>
                    <span>•</span>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map(tag => (
                        <span key={tag} className="badge text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Section>
      )}
    </div>
  )
}
