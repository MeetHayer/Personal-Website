import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Section({ children, id, className }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ''}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
