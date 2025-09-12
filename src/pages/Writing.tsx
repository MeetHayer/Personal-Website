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
            <h1 className="text-[clamp(1.25rem,6vw,1.75rem)] md:text-4xl lg:text-6xl font-bold">
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
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-700">Hey there 👋, I'm Meet!</h2>
                  <div className="flex items-center gap-4 text-sm text-secondary-500 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      Punjab, India → the World, USA
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      September 10, 2025
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-secondary-600 leading-relaxed space-y-4">
                <p>
                  <strong className="text-primary-700 dark:text-primary-300">My origin:</strong> born in Punjab, India, and raised in a low-income Sikh household by a very disciplined father and a remarkably educated mother (three master's degrees!). Watching my parents pour time and sacrifice into my and my sibling's education gave me a durable bias for hard work, character, and building things that matter.
                </p>
                
                <p>
                  Two obsessions anchor me: math and music. After graduating next May, I plan to lean into both—professionally through finance and personally through music. On the finance side, I'm open to starting in either investment banking or corporate FP&A. I plan to pursue an MBA in the next 4-6 years, and over the next 5–10 years, intend to grow within IB—reaching at least junior associate (and ideally a PM track) before 30. As for Music, I'm constantly working on vocal sessions, learning new scales & sneakily preparing for global pop takeover.
                </p>
                
                <p>
                  Even with a deep interest in investment analysis, I value FP&A dearly because it reveals the real levers—margins, ROE, cash flow, and working capital, and how successfully the company's management can leverage & drive them.
                </p>
                
                <p>
                  Right now, I'm a senior at DePauw building an investment-analysis and portfolio simulator as a foundation for more advanced models. I also manage a modest Robinhood account (since March '24; realized return ~8.5% to date). I'm open to opportunities—no geographic restrictions—across fintech and business, and I'm excited for what senior year and beyond will bring.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {['introduction', 'personal', 'journey', 'finance', 'technology', 'passion', 'music', 'singing'].map((tag) => (
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
