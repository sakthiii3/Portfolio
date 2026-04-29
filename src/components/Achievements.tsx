import { motion } from "framer-motion"
import { Trophy, Award, Star } from "lucide-react"

const achievements = [
  {
    title: "Hackathon Winner",
    description: "Won multiple university-level hackathons focusing on AI and social impact.",
    icon: Trophy,
    date: "2026",
  },
  {
    title: "SIH Shortlisted",
    description: "Shortlisted for Smart India Hackathon (SIH) for an innovative civic solution.",
    icon: Award,
    date: "2025",
  },
  {
    title: "MSME Finalist",
    description: "National level finalist for MSME Idea Hackathon 3.0 representing my college.",
    icon: Star,
    date: "2025",
  },
]

export default function Achievements() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-lg mb-12 text-center">Achievements & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
              <span className="text-sm font-semibold text-primary-600/70">{item.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
