import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

const internships = [
  {
    title: "Technical Intern",
    organization: "Commissioner of Police Control Room",
    location: "Coimbatore, Tamil Nadu",
    period: "2024 (10 Days)",
    description: [
      "Gained hands-on experience in control room operations and emergency response systems.",
      "Observed technical management of communication networks and surveillance infrastructure.",
      "Learned about the integration of technology in law enforcement and public safety.",
    ],
    icon: ShieldCheck,
  },
]

export default function Internships() {
  return (
    <section id="internships" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Internships</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Practical industry exposure and technical training in real-world environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {internships.map((internship, i) => (
            <motion.div
              key={internship.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <internship.icon size={120} />
              </div>

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center">
                    <internship.icon size={32} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{internship.title}</h3>
                      <p className="text-primary-600 font-semibold">{internship.organization}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{internship.period}</p>
                      <p className="text-sm text-slate-500">{internship.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {internship.description.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
