import Section from '@/components/Section'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Tag, MapPin, Heart, Music, TrendingUp, ChevronDown, ArrowUp } from 'lucide-react'
import data from '@/data/personal.json'
import { useState, useEffect } from 'react'

type Post = { title: string; slug: string; summary: string; date: string; tags: string[] }

export default function Writing() {
  const posts: Post[] = (data.posts as Post[]) || []
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <Section id="writing-hero" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 dark:from-primary-950 dark:via-accent-950 dark:to-secondary-950 opacity-50"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                  Writing
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 leading-relaxed max-w-2xl mx-auto"
            >
              Deep dives into finance, markets, and technology — backed by data, driven by curiosity.
            </motion.p>
            
            {/* Article Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-3 mt-12"
            >
              {[
                { num: 1, id: 'bnpl-article', title: 'BNPL Analysis', color: 'from-primary-500 to-primary-600' },
                { num: 2, id: 'jpmorgan-article', title: 'JPMorgan Earnings', color: 'from-accent-500 to-accent-600' },
                { num: 3, id: 'introduction', title: 'About Me', color: 'from-secondary-500 to-secondary-600' }
              ].map((article, idx) => (
                <motion.button
                  key={article.id}
                  onClick={() => document.getElementById(article.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${article.color} text-white font-bold text-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}>
                    {article.num}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <span className="text-xs text-secondary-600 dark:text-secondary-400 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                      {article.title}
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* NEW Featured Article - BNPL Stocks KLAR & SEZL - FIRST POST */}
      <Section id="bnpl-article" className="relative py-16">
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-500 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 top-8"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-20"
        >
          <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-700 dark:text-primary-300">🚀 Are BNPL Stocks KLAR & SEZL Sitting on Gold Mines Ahead of November Earnings?</h2>
                  <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400 mt-2">
                    <div className="text-sm italic text-secondary-600 dark:text-secondary-300">
                      by Manmeet S Hayer
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      November 1, 2025
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer at the beginning */}
              <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-gray-100">Disclaimer:</strong> This article reflects personal research and opinion for informational purposes only. It does not constitute investment, financial, or trading advice. Readers should conduct their own due diligence or consult a licensed financial advisor before making any investment decisions.
                </p>
              </div>

              {/* First Paragraph - Always Visible */}
              <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300 leading-relaxed space-y-4">
                <p>
                  The Buy Now, Pay Later (BNPL) industry, once dismissed as a post-pandemic bubble, is showing unmistakable signs of renewed strength. From consumer spending resilience to retail and payment giants beating forecasts, <strong className="text-secondary-900 dark:text-secondary-100">all macro signals are aligning for a bullish earnings season</strong>. With <strong className="text-secondary-900 dark:text-secondary-100">Klarna (KLAR, ~$37.60 as of Oct. 30)</strong> and <strong className="text-secondary-900 dark:text-secondary-100">Sezzle (SEZL, ~$67 as of Oct. 31)</strong> both approaching November 2025 reports — and historical proof that they outperform in precisely these conditions — the setup looks primed for a breakout.
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

                  {/* I. Macro Momentum */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">I. Macro Momentum: The Perfect Tailwind for BNPL</h3>
                  
                  <p>
                    The U.S. consumer continues to defy expectations. Data from the Commerce Department (October 2025) shows retail sales up <strong className="text-secondary-900 dark:text-secondary-100">3.5% YoY</strong> in Q3 2025, with October marking one of the strongest pre-holiday months since 2019. <strong className="text-secondary-900 dark:text-secondary-100">Holiday shopping began earlier this year</strong> due to expectations of tariff-driven price hikes announced in late September, prompting stronger-than-anticipated Q4 consumption patterns.
                  </p>

                  <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mt-6 mb-3">Earnings Across Retail Confirm the Trend</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Costco (COST):</strong> +5.7% comps in September 2025; +26% digital comps; stronger traffic and fee income.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Walmart (WMT):</strong> +4.6% U.S. comps ex-fuel, supported by membership and ad growth.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Amazon (AMZN):</strong> +13% YoY net sales in Q3 2025; record Prime Day and steady discretionary spend.</li>
                  </ul>

                  <p>
                    These results echo what <strong className="text-secondary-900 dark:text-secondary-100">Jamie Dimon</strong> emphasized in JPMorgan's October 2025 shareholder note: "Consumers and small businesses remain resilient."
                  </p>

                  <p>
                    Paired with <strong className="text-secondary-900 dark:text-secondary-100">PayPal's BNPL surge (+20% YoY TPV in Q3 2025)</strong> and Visa's +9% payment growth, the entire consumer finance ecosystem is expanding rather than contracting. Demand for short-term financing and digital payment flexibility is broadening across income tiers — a key structural tailwind for BNPL leaders heading into the 2025 holiday quarter.
                  </p>

                  {/* II. PayPal's BNPL Data */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">II. PayPal's BNPL Data: The Sector's Leading Indicator</h3>
                  
                  <p>PayPal's Q3 2025 results (reported October 25, 2025) were a shot of adrenaline for the entire BNPL sector:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">BNPL Total Payment Volume (TPV):</strong> +20% YoY → ~$40B annualized</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Total Payment Volume:</strong> $458B (+8%)</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Revenue:</strong> $8.4B (+7%)</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">EPS Guidance:</strong> Raised to $5.35–$5.39 for FY2025</li>
                  </ul>

                  <p>
                    The takeaway is clear: <strong className="text-secondary-900 dark:text-secondary-100">BNPL usage isn't plateauing — it's accelerating.</strong> With consumers increasingly choosing installment payments to offset inflation and pre-tariff spending, BNPL's share of total e-commerce and POS financing is expected to exceed <strong className="text-secondary-900 dark:text-secondary-100">$200B by FY2026</strong>, up from $120B in FY2024. This growth directly benefits Klarna and Sezzle — the platforms driving the majority of global BNPL transaction volume.
                  </p>

                  {/* III. Sezzle */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">III. Sezzle: The Bullish Reset Before the Next Run</h3>
                  
                  <p>
                    Sezzle's six-quarter streak of revenue and income beats has made it one of the most reliable fintech performers. But its <strong className="text-secondary-900 dark:text-secondary-100">Q2 2025 selloff — despite record metrics — created an unusually bullish reset.</strong>
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600 text-sm">
                      <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Period</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">GMV ($m)</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">Revenue ($m)</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">YoY Growth</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">Net Income ($m)</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Market Reaction</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">FY23</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">1,830</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">159</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">—</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">–9</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Baseline</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">FY24</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">2,545</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">271</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">+70%</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">+78</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">+110% YTD</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Q1 25</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">867</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">105</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">+123%</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">+29</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">+31% AH</td>
                        </tr>
                        <tr className="bg-primary-50 dark:bg-primary-900/20 font-semibold">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Q2 25 (Aug 15, 2025)</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">927</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">98.7</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">+76%</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-right">+27.6 (+116%)</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">–18% pre-market ("beat but not enough")</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    That August drawdown flushed expectations but left fundamentals untouched: GMV up 74%, operating margins 36.6%, and FY25 net income guidance reaffirmed around <strong className="text-secondary-900 dark:text-secondary-100">$120M (+50% YoY)</strong>. Historically, Sezzle rallies hardest after "expectation-cleansing" quarters — the same setup that led to its <strong className="text-secondary-900 dark:text-secondary-100">+31% post-earnings surge in Q1 2025</strong>.
                  </p>

                  <p><strong className="text-secondary-900 dark:text-secondary-100">Valuation context (as of Oct. 31, 2025):</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">P/E:</strong> 21× vs. 58× at its 2025 peak</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">P/S:</strong> 6× vs. 14.8× peak</li>
                  </ul>

                  <p>
                    If Sezzle sustains 60–70% revenue growth and stable delinquency rates, a re-rating toward 8–10× sales implies <strong className="text-secondary-900 dark:text-secondary-100">40–70% upside</strong> — in line with prior momentum phases.
                  </p>

                  {/* IV. Klarna */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">IV. Klarna: Profitability + Expansion = Asymmetric Upside</h3>
                  
                  <p>Klarna has quietly executed one of the most impressive fintech turnarounds in recent memory.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">FY24 Revenue:</strong> $2.81B (+24% YoY)</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Net Income:</strong> +$21M (first profit since 2020)</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Q2 2025 Revenue:</strong> $823M (+21%) — second consecutive profitable quarter</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Net Cash:</strong> $5.9B (Cash $6B – Debt $0.8B)</li>
                  </ul>

                  <p>
                    At ~$37.6/share (~$17.3B market cap, Oct. 30, 2025), Klarna's <strong className="text-secondary-900 dark:text-secondary-100">EV ≈ $9–10B</strong>, giving an <strong className="text-secondary-900 dark:text-secondary-100">EV/S multiple near 3×</strong> — half of Affirm's 6× and far below Sezzle's 2025 peak near 14×.
                  </p>

                  <p><strong className="text-secondary-900 dark:text-secondary-100">Upcoming catalysts:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Visa Flexible Credential rollout (Q4 2025):</strong> enabling in-store BNPL across 150M+ merchants.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Membership tiers:</strong> subscription-based recurring revenue (€17.99 / €44.99).</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Nov. 18, 2025 earnings:</strong> anticipated <strong className="text-secondary-900 dark:text-secondary-100">third straight profitable quarter</strong>.</li>
                  </ul>

                  <p>
                    If Klarna's GMV surpasses $30B this quarter, the first such figure since 2021, and maintains margins above 30%, an EV/S expansion from 3× → 6× would justify <strong className="text-secondary-900 dark:text-secondary-100">$50–60/share</strong>, while returning to historic BNPL peaks (EV/S 10–12×) supports <strong className="text-secondary-900 dark:text-secondary-100">$70+</strong>.
                  </p>

                  {/* V. Institutional Positioning */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">V. Institutional Positioning: Hedge Funds Quietly Rebuild Exposure</h3>
                  
                  <p>Recent 13F and fund disclosures (September–October 2025) reveal <strong className="text-secondary-900 dark:text-secondary-100">renewed hedge fund accumulation</strong> in both Klarna and Sezzle — a trend not seen since the pre-2022 fintech cycle.</p>

                  <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mt-6 mb-3">Klarna (KLAR)</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">ARK Invest</strong> initiated speculative positions post-IPO (Sept. 2025), citing BNPL profitability tailwinds.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Millennium Management</strong> and <strong className="text-secondary-900 dark:text-secondary-100">Citadel Advisors</strong> jointly hold ~$120M in IPO allocations (as of Oct. 2025).</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Viking Global</strong> and <strong className="text-secondary-900 dark:text-secondary-100">Coatue Management</strong> expanded fintech exposure, with Viking's position estimated at 1.5% of Klarna's float.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Bridgewater Associates</strong> added Klarna European-listed notes, signaling confidence in credit cycle stability.</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mt-6 mb-3">Sezzle (SEZL)</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Point72 Asset Management</strong> boosted holdings ~40% QoQ after the August pullback.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Renaissance Technologies</strong> re-entered Sezzle in Sept. 2025 after exiting in 2024.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Balyasny</strong> and <strong className="text-secondary-900 dark:text-secondary-100">Two Sigma</strong> opened quantitative-driven positions tracking EPS acceleration.</li>
                    <li>Institutional ownership rose from <strong className="text-secondary-900 dark:text-secondary-100">26% (Q2)</strong> to <strong className="text-secondary-900 dark:text-secondary-100">34% (Oct. 2025)</strong>; insider holdings remain high (~44%), tightening the float and amplifying hedge fund impact.</li>
                  </ul>

                  <p>
                    These flows suggest that <strong className="text-secondary-900 dark:text-secondary-100">institutional investors are front-running an earnings-driven re-rating</strong> — with smart money betting on profitable fintech momentum.
                  </p>

                  {/* VI. Valuation Disconnect */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">VI. The Valuation Disconnect & Sector Psychology</h3>
                  
                  <p>Despite PayPal's category-beating growth, the BNPL cohort trades at compressed multiples:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Affirm:</strong> EV/S ~6×, unprofitable.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Klarna:</strong> EV/S ~3×, profitable, cash-rich.</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Sezzle:</strong> EV/S ~6×, profitable, expanding margins.</li>
                  </ul>

                  <p>
                    This pricing gap has less to do with fundamentals and more with lingering 2022–23 skepticism. Historically, when PayPal or Visa lift guidance, fintech multiples follow within 2–4 weeks. If that pattern repeats, November could mark the <strong className="text-secondary-900 dark:text-secondary-100">sector's valuation normalization phase</strong>.
                  </p>

                  {/* VII. Catalysts */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">VII. Key Catalysts to Watch in November 2025</h3>
                  
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Pre-tariff holiday spending:</strong> Early demand could lift Q4 BNPL volumes by 10–15%</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Credit quality:</strong> Flat or declining delinquency rates will confirm BNPL resilience</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Revenue growth:</strong> Sezzle targeting &gt;$100M; Klarna expected ~$850M</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Margin retention:</strong> Sustaining &gt;35% operating margins confirms scalability</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Profit streak:</strong> Klarna's third consecutive profitable quarter post-IPO</li>
                  </ol>

                  {/* VIII. Risks */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">VIII. Risks to Balance the Bull Case</h3>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Credit provisions:</strong> Rising consumer leverage could pressure EPS</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Regulatory tightening:</strong> CFPB and EU oversight may raise compliance costs</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Lock-up expirations:</strong> Klarna's post-IPO float (expiring Jan. 2026) could increase volatility</li>
                    <li><strong className="text-secondary-900 dark:text-secondary-100">Guidance management:</strong> Market punishes small misses or soft guidance</li>
                  </ul>

                  {/* IX. Strategic Takeaway */}
                  <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">IX. The Strategic Takeaway: The Stars Are Aligned</h3>
                  
                  <blockquote className="border-l-4 border-primary-500 dark:border-primary-400 pl-4 italic text-lg my-6">
                    "When a sector leader raises guidance, consumers spend early to beat tariffs, and profitable peers trade at half the multiple — that's not coincidence. It's a setup."
                  </blockquote>

                  <p>
                    <strong className="text-secondary-900 dark:text-secondary-100">Sezzle</strong> enters Q3 earnings with expectations flushed, operational momentum intact, and macro tailwinds behind it. <strong className="text-secondary-900 dark:text-secondary-100">Klarna</strong> approaches its first full quarter as a public company with cash reserves, profitability, and sector demand all leaning in its favor.
                  </p>

                  <p>
                    If both firms deliver on historical growth trends, the probability of a <strong className="text-secondary-900 dark:text-secondary-100">30–60% re-rating by year-end 2025</strong> is high — not as hype, but as a return to fair value in a sector that's quietly rebuilt itself on profit and scale.
                  </p>

                  {/* Disclaimer */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-3">Disclaimer</h4>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">
                      This article reflects personal research and opinion for informational purposes only. It does not constitute investment, financial, or trading advice. All data cited are accurate as of October–November 2025. Readers should conduct their own due diligence or consult a licensed financial advisor before making any investment decisions.
                    </p>
                  </div>
                </div>
              </details>

              <div className="flex flex-wrap gap-2 pt-4">
                {['finance', 'bnpl', 'earnings', 'market-analysis', 'klarna', 'sezzle', 'fintech', 'investment-analysis'].map((tag) => (
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

      {/* JPMorgan Earnings Analysis - SECOND POST */}
      <Section id="jpmorgan-article" className="relative py-16">
        {/* Continuous Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-secondary-300 dark:from-primary-700 dark:via-accent-700 dark:to-secondary-700 h-full z-0 top-0 opacity-30"></div>
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-500 dark:bg-accent-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 top-8"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-20"
        >
          <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-8 lg:p-12">
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

      {/* Introduction Post - THIRD POST */}
      <Section id="introduction" className="relative py-16">
        {/* Continuous Timeline Line - spans from first post to end */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent-300 via-secondary-300 to-primary-300 dark:from-accent-700 dark:via-secondary-700 dark:to-primary-700 h-full z-0 top-0 opacity-30"></div>
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-secondary-500 dark:bg-secondary-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 top-8"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-20"
        >
          <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-8 lg:p-12">
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

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-2xl hover:shadow-primary-500/50 hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  )
}
