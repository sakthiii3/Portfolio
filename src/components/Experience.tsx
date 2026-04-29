import { motion } from "framer-motion"
import { Users, Calendar, Flag } from "lucide-react"

const experience = [
  {
    role: "Team Leadership",
    organization: "College Technical Projects",
    description: "Led multiple teams in developing full-stack applications and AI models for hackathons and academic projects.",
    icon: Users,
    period: "2023 - Present",
  },
  {
    role: "Active Member",
    organization: "Rotaract Club",
    description: "Participated and organized community service events and leadership development programs.",
    icon: Flag,
    period: "2022 - Present",
  },
  {
    role: "Event Organizer",
    organization: "Department Symposiums",
    description: "Coordinated technical and non-technical events for college symposiums, managing logistics and participants.",
    icon: Calendar,
    period: "2026 - Present",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-lg mb-12 text-center">Experience & Leadership</h2>
        <div className="space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-primary-600">
                <item.icon size={28} />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{item.role}</h3>
                  <span className="text-sm font-semibold text-slate-400">{item.period}</span>
                </div>
                <h4 className="text-primary-600 font-medium mb-4">{item.organization}</h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
