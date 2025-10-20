import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { Calendar, Tag, MapPin, Heart, Music, TrendingUp } from 'lucide-react'
import data from '@/data/personal.json'

type Post = { title: string; slug: string; summary: string; date: string; tags: string[] }

export default function Writing() {
  const posts: Post[] = (data.posts as Post[]) || []
  
  return (
    <div className="min-h-screen relative">
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

      {/* Featured Article - JPMorgan Earnings Analysis - FIRST POST */}
      <Section id="featured-article" className="relative">
        {/* Timeline Line - starts after first post */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200 dark:from-primary-700 dark:via-accent-700 dark:to-primary-700 h-full z-0 top-0"></div>
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 z-10 top-8"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-20"
        >
          <article className="card p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-700 dark:text-primary-300">What Exactly Happened with Banks After JPMorgan's Q3 2025 Earnings?</h2>
                  <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400 mt-2">
                    <div className="text-sm italic text-secondary-600 dark:text-secondary-300">
                      by Manmeet S Hayer
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      October 19, 2025
                    </div>
                  </div>
                </div>
              </div>

              {/* First Paragraph - Always Visible */}
              <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300 leading-relaxed">
                <p>
                  JPMorgan Chase kicked off bank earnings pre-market on October 14 with a double beat on both revenue and profit, yet its stock drifted lower through the week—closing under $300 by Friday. The decline wasn't driven by company fundamentals alone but by a mix of macro headwinds, sector-wide anxiety, and market psychology that punished the broader financial space.
                </p>
              </div>

              {/* Stock Chart - Always Visible */}
              <div className="my-6">
                <img 
                  src="/yahoo-finance-jpm-chart.png" 
                  alt="JPMorgan Chase & Co. (JPM) - 5 Day Performance Chart from Yahoo Finance"
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                  onError={(e) => {
                    e.currentTarget.src = '/writing-articles/Picture1.png';
                  }}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2 text-center">
                  Chart: Yahoo Finance (JPMorgan Stock Performance Week of Oct 12-18, 2025)
                </p>
              </div>

              {/* Expandable Article Content */}
              <details className="group">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg border border-primary-200 dark:border-primary-700 hover:shadow-md transition-all duration-300">
                    <span className="text-lg font-semibold text-primary-700 dark:text-primary-300">Read Full Article</span>
                    <div className="transform group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </summary>
                
                <div className="mt-6 prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300 leading-relaxed space-y-6">

                  {/* Strong Quarter, Shaky Outlook Section */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">Strong Quarter, Shaky Outlook</h3>
                  
                  <p>
                    JPMorgan reported another strong quarter, supported by robust performance in its investment banking and trading divisions. The bank raised its full-year net interest income (NII) forecast to roughly $95.8 billion, according to Reuters and CNBC coverage. That signaled core banking operations were still benefiting from a high-rate environment. However, much of Q3's upside came from investment and markets revenue—a volatile segment that investors often discount as less stable than consumer or commercial banking.
                  </p>

                  <p>
                    CEO Jamie Dimon added to market unease with another round of stark macro warnings. He reiterated concerns about the growing U.S. national debt, heavy reliance on consumer credit, and a potential market correction within the next two years. Dimon also cited signs of strain in consumer credit quality and pointed to geopolitical uncertainty—including major U.S. debt holders like China, Japan, and South Korea selling Treasury securities, a move many analysts interpret as a loss of confidence in U.S. fiscal discipline. Dimon even floated the risk of stagflation if productivity gains from AI underdeliver.
                  </p>

                  {/* Sector Turmoil Section */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">Sector Turmoil: Cockroaches and Collateral</h3>
                  
                  <p>
                    The optimism from JPM's results quickly faded as the week unfolded. News broke that subprime auto lender Tricolor Holdings and auto parts supplier First Brands Group had collapsed, exposing credit losses for several regional lenders. Dimon's metaphor about there being "more cockroaches" when one appears became a talking point across Wall Street.
                  </p>

                  <p>
                    Shortly after, Zions Bancorporation disclosed a $50 million charge-off tied to two commercial borrowers, sending its shares down nearly 5%. The KBW Regional Banking Index tumbled roughly 4.8%, its worst single-day drop since April. According to MarketWatch and Reuters, the losses were driven by fear of hidden credit risks spreading through smaller banks.
                  </p>

                  <p>
                    At the same time, Western Alliance Bancorporation filed a lawsuit against a borrower over alleged fraudulent collateral but maintained that its collateral position remains sufficient and its 2025 guidance unchanged, a signal that not every headline risk spelled contagion. Meanwhile, Fifth Third Bank took a $178 million loan-loss charge connected to Tricolor but still reported solid underlying earnings (Barron's, Oct. 17).
                  </p>

                  {/* Macro Fear Meets Overreaction Section */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">Macro Fear Meets Overreaction</h3>
                  
                  <p>
                    Taken together, these incidents triggered a classic sentiment overreaction. Analysts broadly agree that the failures of Tricolor and First Brands were non-systemic, meaning they don't threaten the stability of the financial system—yet they shook confidence in how well banks are monitoring credit exposures.
                  </p>

                  <p>
                    With alternative assets posting record-breaking YTD returns, consumer spending resilient heading into the holiday season, and Q4 earnings expected to show strength in goods, services, and BNPL sectors, the macro backdrop isn't uniformly bleak. Combined with JPM's ongoing investment initiatives in national security and technology infrastructure, the setup looks favorable for a short-term rebound in large-cap financials if Q4 results reinforce the resilience seen so far.
                  </p>

                  {/* Outlook Section */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">Outlook</h3>
                  
                  <p>
                    Volatility and geopolitics make any long-term call risky. Still, the factors behind this week's drop—non-systemic bankruptcies, heightened credit scrutiny, and sector-wide nerves—don't fundamentally undermine JPMorgan's franchise strength. If anything, they create space for a short-term sentiment-driven rally as markets recalibrate heading into year-end.
                  </p>

                  {/* Disclaimer and Sources */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 underline">
                      This article is for informational purposes only and does not constitute investment advice.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Sources:</strong> Reuters, MarketWatch, Barron's, The Guardian, CNBC, InvestmentNews, MarketBeat, Simply Wall St (Oct. 14-19, 2025).
                    </p>
                  </div>
                </div>
              </details>

              <div className="flex flex-wrap gap-2 pt-4">
                {['finance', 'banking', 'earnings', 'market-analysis', 'jpmorgan', 'investment-analysis'].map((tag) => (
                  <span key={tag} className="badge bg-gradient-to-r from-accent-100 to-primary-100 text-primary-700 dark:from-accent-900/30 dark:to-primary-900/30 dark:text-primary-300">
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </motion.div>
      </Section>

      {/* Introduction Post - SECOND POST */}
      <Section id="introduction" className="mt-8 relative">
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 dark:bg-accent-400 rounded-full border-4 border-white dark:border-gray-900 z-10 top-8"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-20"
        >
          <article className="card p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                  <Heart className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-700 dark:text-primary-300">Hey there 👋, I'm Meet!</h2>
                  <div className="flex items-center gap-4 text-sm text-secondary-500 dark:text-secondary-400 mt-2">
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

              <div className="prose prose-lg max-w-none text-secondary-600 dark:text-secondary-300 leading-relaxed space-y-4">
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
                  <span key={tag} className="badge bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 dark:from-primary-900/30 dark:to-accent-900/30 dark:text-primary-300">
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </motion.div>
      </Section>

    </div>
  )
}
