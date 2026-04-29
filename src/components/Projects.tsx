import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"

const projects = [
  {
    title: "SecureX",
    description: "An advanced security platform leveraging AI to detect and mitigate potential threats in real-time, ensuring robust protection for digital assets.",
    tech: ["React", "AI/ML", "Node.js", "PostgreSQL"],
    github: "https://github.com/sakthiii3/SecureX-AI-Security",
    live: "https://github.com/sakthiii3/SecureX-AI-Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Multi-Tenant Task Manager",
    description: "A scalable task management solution designed for large organizations, featuring isolation between tenants and complex role-based access control.",
    tech: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/sakthiii3/multi-tenant-task-manager",
    live: "https://multi-tenant-task-manager.vercel.app/login",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Civic Management System",
    description: "A platform for citizens to report issues and track resolutions, streamlining the communication between the public and local government authorities.",
    tech: ["PHP", "JavaScript", "MySQL", "Google Maps API"],
    github: "https://github.com/sakthiii3/civic-civic",
    live: "https://civic-civic.vercel.app/",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Transparency Platform",
    description: "Tools for explaining AI model decisions, providing insights into feature importance and model behavior for better accountability.",
    tech: ["Python", "Flask", "React", "Scikit-Learn"],
    github: "https://github.com/sakthiii3/AI-Transparency-App-Workflow-Invosheild",
    live: "https://github.com/sakthiii3/AI-Transparency-App-Workflow-Invosheild",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Wheat Disease Detection",
    description: "An image processing and deep learning application that identifies various diseases in wheat crops from leaf photographs with high accuracy.",
    tech: ["TensorFlow", "Keras", "Python", "MobileNetV2"],
    github: "#",
    live: "http://college.icampus.in/wheat_dashboard/index.php",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              A selection of my recent work in AI and Full Stack development, focusing on solving real-world problems.
            </p>
          </div>
          <a
            href="https://github.com/sakthiii3"
            className="flex items-center gap-2 text-primary-600 font-semibold hover:underline"
          >
            View more on GitHub <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                      <Code size={20} />
                    </a>
                    <a href={project.live} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <a href={project.github} className="text-sm font-semibold flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                        <Code size={16} /> Code
                      </a>
                    )}
                    <a href={project.live} className="text-sm font-semibold flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
