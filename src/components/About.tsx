import { motion } from "framer-motion"
import { User, Cpu, Code2, Globe } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "AI & ML",
      description: "Exploring the boundaries of machine learning to solve complex problems.",
    },
    {
      icon: Code2,
      title: "Full Stack",
      description: "Building robust backend architectures with modern frontend experiences.",
    },
    {
      icon: Globe,
      title: "Scalability",
      description: "Designing systems that grow seamlessly with user demand and data.",
    },
  ]

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <User size={16} /> About Me
            </div>
            <h2 className="heading-lg mb-6">
              Passionate about technology, driven by <span className="text-primary-600">innovation</span>.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I am a pre-final year Information Technology student based in Coimbatore. My journey in tech is fueled by a deep fascination with how Artificial Intelligence can be integrated into Full Stack applications to create smarter, more efficient user experiences.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              I thrive on solving real-world challenges through clean code and scalable architecture. Whether it's training a neural network or architecting a multi-tenant platform, I'm always eager to push the limits of what's possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-6 flex gap-6 items-start"
              >
                <div className="p-3 rounded-2xl bg-primary-600 text-white">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
